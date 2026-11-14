import React, { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/hero/HeroSection";
import { ExploreSearch } from "./pages/ExploreSearch";
import { LocationDetailView } from "./pages/LocationDetailView";
import { EVChargingDashboard } from "./pages/EVChargingDashboard";
import { AdminDashboard } from "./pages/AdminDashboard";
import { DesignSystemShowcase } from "./pages/DesignSystemShowcase";
import { Modal } from "./components/ui/Modal";
import { Button } from "./components/ui/Button";
import { Zap, CheckCircle2, ShieldCheck, CreditCard } from "lucide-react";
import { useParkVoltStore } from "./store/useParkVoltStore";
import { useSocketStore } from "./store/useSocketStore";
import { api } from "./services/api";

export function App() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedLocationDetail, setSelectedLocationDetail] = useState(null);
  const [reservationModalData, setReservationModalData] = useState(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [bookingSuccessModal, setBookingSuccessModal] = useState(null);

  const { addBooking, user, updateSingleSlotStatus } = useParkVoltStore();
  const { connect: connectSocket, disconnect: disconnectSocket } = useSocketStore();

  useEffect(() => {
    // Connect to real-time Socket.IO gateway on port 5001
    connectSocket("http://localhost:5001", (locId, slotId, status) => {
      updateSingleSlotStatus(locId, slotId, status);
    });

    return () => {
      disconnectSocket();
    };
  }, [connectSocket, disconnectSocket, updateSingleSlotStatus]);

  const handleAuthTrigger = (mode) => {
    alert(`Signed in as: ${user.name} (${user.email})\nRegistered Vehicle: ${user.vehicleModel} (${user.vehicleNumber})\nWallet Balance: ₹${user.walletBalance}`);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocationDetail(location);
    setCurrentView("location-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleConfirmReservation = async () => {
    if (!reservationModalData) return;

    setIsProcessingPayment(true);

    try {
      // Simulate Razorpay checkout handshake & backend API call
      const response = await api.createBooking({
        locationId: reservationModalData.location?.id,
        locationName: reservationModalData.location?.name,
        slotNumber: reservationModalData.slot?.slotNumber,
        startTime: new Date().toISOString(),
        durationMinutes: (reservationModalData.duration || 2) * 60,
        totalAmount: reservationModalData.totalAmount || 240,
        vehicleNumber: user.vehicleNumber
      });

      const confirmedBooking = response.booking;
      addBooking(confirmedBooking);

      setIsProcessingPayment(false);
      setReservationModalData(null);
      setBookingSuccessModal(confirmedBooking);
    } catch (err) {
      setIsProcessingPayment(false);
      alert("Payment simulation encountered an issue. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col bg-grid-pattern selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        onOpenAuth={handleAuthTrigger}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Main Dynamic View Controller */}
      <main className="flex-1">
        {currentView === "home" && (
          <div className="space-y-16">
            <HeroSection
              onReserveSlot={(slot) => {
                setReservationModalData({
                  location: { id: "loc_01", name: "Cyber City EV Hub & Multi-Level" },
                  slot,
                  duration: 2,
                  totalAmount: slot.rate * 2 + 15
                });
              }}
            />
            {/* Quick Teaser of Explore Hubs */}
            <div className="border-t border-white/[0.06] pt-8">
              <ExploreSearch onSelectLocation={handleSelectLocation} />
            </div>
          </div>
        )}

        {currentView === "explore" && (
          <ExploreSearch onSelectLocation={handleSelectLocation} />
        )}

        {currentView === "location-detail" && selectedLocationDetail && (
          <LocationDetailView
            location={selectedLocationDetail}
            onBack={() => setCurrentView("explore")}
            onOpenBookingModal={(data) => setReservationModalData(data)}
          />
        )}

        {currentView === "charging" && <EVChargingDashboard />}

        {currentView === "admin" && <AdminDashboard />}

        {currentView === "design-system" && <DesignSystemShowcase />}
      </main>

      {/* Checkout & Payment Confirmation Modal (Razorpay integration trigger) */}
      <Modal
        isOpen={Boolean(reservationModalData)}
        onClose={() => setReservationModalData(null)}
        title="Confirm Slot Reservation"
        description="Verify reservation details before finalizing payment."
        footer={
          <>
            <Button
              variant="outline"
              size="sm"
              disabled={isProcessingPayment}
              onClick={() => setReservationModalData(null)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              isLoading={isProcessingPayment}
              icon={<CreditCard className="w-4 h-4" />}
              onClick={handleConfirmReservation}
            >
              Pay ₹{reservationModalData?.totalAmount} via Razorpay
            </Button>
          </>
        }
      >
        {reservationModalData && (
          <div className="space-y-4 py-2 text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Facility:</span>
                <span className="font-semibold text-white">
                  {reservationModalData.location?.name}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Reserved Bay:</span>
                <span className="font-mono font-bold text-emerald-400 text-base">
                  {reservationModalData.slot?.slotNumber}
                </span>
              </div>
              {reservationModalData.slot?.powerKw > 0 && (
                <div className="flex justify-between items-center text-cyan-400">
                  <span>Fast Charger:</span>
                  <span className="font-mono font-bold">
                    ⚡ {reservationModalData.slot?.powerKw} kW CCS-2
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Duration:</span>
                <span className="font-semibold text-white">
                  {reservationModalData.duration} Hours
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-white/5">
                <span className="text-slate-400">Total Charged:</span>
                <span className="font-mono font-bold text-white text-lg">
                  ₹{reservationModalData.totalAmount}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-white/5 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs text-slate-400">
                Secured by Razorpay HMAC-SHA256 signature verification. Physical boom barrier auto-opens on license plate recognition.
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Reservation Success Modal */}
      <Modal
        isOpen={Boolean(bookingSuccessModal)}
        onClose={() => setBookingSuccessModal(null)}
        title="Reservation Confirmed!"
        description="Your smart parking bay is locked and awaiting your arrival."
        footer={
          <Button
            variant="primary"
            size="md"
            className="w-full justify-center"
            onClick={() => {
              setBookingSuccessModal(null);
              setCurrentView("charging");
            }}
          >
            Go to EV Charging Station
          </Button>
        }
      >
        {bookingSuccessModal && (
          <div className="py-4 space-y-4 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-glow-emerald">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="space-y-1">
              <div className="text-xs text-slate-400 uppercase font-mono tracking-widest">
                Booking Reference ID
              </div>
              <div className="text-2xl font-black font-mono text-white tracking-wider">
                {bookingSuccessModal.bookingId}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-slate-400">Slot Assigned:</span>
                <span className="font-mono font-bold text-emerald-400">
                  {bookingSuccessModal.slotNumber}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Registered Vehicle:</span>
                <span className="font-mono text-white">
                  {bookingSuccessModal.vehicleNumber || user.vehicleNumber}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Valid From:</span>
                <span className="font-mono text-white">
                  {new Date(bookingSuccessModal.startTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                  })}
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
