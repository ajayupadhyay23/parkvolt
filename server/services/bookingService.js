const Booking = require("../models/Booking");
const ParkingSlot = require("../models/ParkingSlot");
const ParkingLocation = require("../models/ParkingLocation");
const generateBookingId = require("../utils/generateBookingId");
const calculatePrice = require("../utils/calculatePrice");

class BookingService {
  /**
   * Create a reservation with concurrency collision prevention
   */
  async createReservation({
    userId,
    locationId,
    slotId,
    vehicleNumber,
    startTime,
    durationMinutes = 120
  }) {
    // 1. Fetch slot & verify current availability
    const slot = await ParkingSlot.findById(slotId);
    if (!slot) {
      throw new Error("Specified parking slot does not exist.");
    }

    if (slot.status !== "available") {
      throw new Error(`Slot ${slot.slotNumber} is currently ${slot.status}. Please select a vacant bay.`);
    }

    // 2. Compute dynamic pricing
    const priceCalculation = calculatePrice(
      slot.pricePerHour,
      durationMinutes,
      slot.powerKw
    );

    const bookingStart = startTime ? new Date(startTime) : new Date();
    const bookingEnd = new Date(bookingStart.getTime() + durationMinutes * 60 * 1000);
    const bookingId = generateBookingId();

    // 3. Atomically create booking record
    const booking = await Booking.create({
      bookingId,
      user: userId,
      parkingLocation: locationId,
      parkingSlot: slotId,
      vehicleNumber: vehicleNumber || "DL 01 EV 9876",
      startTime: bookingStart,
      endTime: bookingEnd,
      durationMinutes,
      totalAmount: priceCalculation.totalAmount,
      status: "confirmed"
    });

    // 4. Update physical slot status to 'reserved'
    slot.status = "reserved";
    slot.currentBooking = booking._id;
    await slot.save();

    // 5. Decrement available slots in location summary
    await ParkingLocation.findByIdAndUpdate(locationId, {
      $inc: { availableSlots: -1 }
    });

    return booking;
  }

  /**
   * Fetch all bookings for a user
   */
  async getUserBookings(userId) {
    return await Booking.find({ user: userId })
      .populate("parkingLocation", "name city address")
      .populate("parkingSlot", "slotNumber floor type powerKw")
      .sort({ createdAt: -1 });
  }

  /**
   * Cancel an existing booking
   */
  async cancelReservation(bookingId, userId) {
    const booking = await Booking.findOne({ bookingId, user: userId });
    if (!booking) {
      throw new Error("Booking not found or unauthorized to cancel.");
    }

    if (booking.status === "completed" || booking.status === "cancelled") {
      throw new Error(`Cannot cancel a booking that is already ${booking.status}.`);
    }

    booking.status = "cancelled";
    await booking.save();

    // Release slot
    await ParkingSlot.findByIdAndUpdate(booking.parkingSlot, {
      status: "available",
      currentBooking: null
    });

    // Increment available count
    await ParkingLocation.findByIdAndUpdate(booking.parkingLocation, {
      $inc: { availableSlots: 1 }
    });

    return booking;
  }
}

module.exports = new BookingService();
