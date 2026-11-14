const ParkingLocation = require("../models/ParkingLocation");
const ParkingSlot = require("../models/ParkingSlot");

class ParkingService {
  /**
   * Search parking locations with filters
   */
  async searchLocations(query = {}) {
    const filter = {};

    if (query.city && query.city !== "All Cities") {
      filter.city = query.city;
    }

    if (query.search) {
      filter.$or = [
        { name: { $regex: query.search, $options: "i" } },
        { address: { $regex: query.search, $options: "i" } }
      ];
    }

    if (query.evOnly === "true" || query.evOnly === true) {
      filter.evSlotsAvailable = { $gt: 0 };
    }

    if (query.fastChargeOnly === "true" || query.fastChargeOnly === true) {
      filter.hasFastCharger = true;
      filter.maxPowerKw = { $gte: 100 };
    }

    if (query.maxPrice) {
      filter.hourlyRate = { $lte: Number(query.maxPrice) };
    }

    return await ParkingLocation.find(filter).sort({ rating: -1 });
  }

  /**
   * Get location details by ID
   */
  async getLocationById(id) {
    return await ParkingLocation.findById(id);
  }

  /**
   * Get all slots for a facility, optionally filtered by floor
   */
  async getLocationSlots(locationId, floor) {
    const filter = { location: locationId };
    if (floor) {
      filter.floor = floor;
    }
    return await ParkingSlot.find(filter).sort({ slotNumber: 1 });
  }

  /**
   * Update slot status (e.g. from IoT sensor or Admin)
   */
  async updateSlotStatus(slotId, status) {
    return await ParkingSlot.findByIdAndUpdate(
      slotId,
      { status },
      { new: true, runValidators: true }
    );
  }
}

module.exports = new ParkingService();
