/**
 * BookingTicketPage.jsx (Page 6)
 *
 * ParkVolt – Smart Parking & EV Charging Finder
 *
 * Features:
 * - Dynamic QR Code via qrcode.react encoding direct mobile verification URL
 * - Interactive Smart Barrier Scanner Simulator (with laser scan animation & lifting boom barrier)
 * - Booking ID, assigned slot, vehicle registration
 * - Live countdown timer to reservation end
 * - "Extend by 30 minutes" action (+₹30 with simulated receipt)
 * - "Cancel with refund" action (with automatic refund to ParkVolt Wallet)
 * - One-click copy digital pass link
 */
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import {
  Clock,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  PlusCircle,
  Navigation,
  ArrowLeft,
  XCircle,
  ShieldCheck,
  Zap,
  Car,
  Scan,
  Share2,
  Copy,
  Radio
} from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { useAuth } from "../context/AuthContext";

export default function BookingTicketPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { bookings, extendBooking, cancelBooking, addNotification } = useBooking();
  const { updateWalletBalance, currentUser } = useAuth();

  const booking = bookings.find((b) => b.id === id) || bookings[0];

  // Live countdown timer state (hours, minutes, seconds remaining)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0, isExpired: false });

  // Barrier Scanner Simulation State
  const [isScanning, setIsScanning] = useState(false);
  const [gateLifted, setGateLifted] = useState(false);
  const [scanMessage, setScanMessage] = useState(null);

  useEffect(() => {
    if (!booking || booking.status === "cancelled") return;

    const calculateTime = () => {
      const now = Date.now();
      const end = new Date(booking.endTime).getTime();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [booking]);

  if (!booking) {
    return (
      <div className="container" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Booking Not Found</h2>
        <p style={{ color: "var(--text-muted)", marginTop: "8px" }}>
          We could not locate this reservation ticket in your local storage.
        </p>
        <Link to="/my-bookings" className="btn btn-primary" style={{ marginTop: "20px" }}>
          View My Bookings
        </Link>
      </div>
    );
  }

  // Generate mobile-friendly URL for QR code so smartphone cameras open the live pass
  const livePassUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}#/ticket/${booking.id}`
      : `https://ajayupadhyay23.github.io/parkvolt/#/ticket/${booking.id}`;

  const handleExtend = () => {
    const success = extendBooking(booking.id, 30, 30);
    if (!success) {
      alert("Unable to extend booking. Please ensure you have sufficient wallet balance or active booking.");
    }
  };

  const handleCancel = () => {
    if (window.confirm(`Are you sure you want to cancel this booking? A 100% refund of ₹${booking.totalAmount} will be returned to your ParkVolt Wallet.`)) {
      cancelBooking(booking.id);
    }
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(livePassUrl);
      addNotification("Pass Link Copied", "Digital pass link copied to clipboard. Share with your driver or passenger.", "success");
    }
  };

  // Interactive Gate Barrier Scanner Simulation
  const handleSimulateScan = () => {
    if (isScanning || gateLifted) return;
    setIsScanning(true);
    setScanMessage("Reading Optical QR Sensor at Entrance Barrier #02...");

    setTimeout(() => {
      setScanMessage("Verifying Reservation & Vehicle Registration...");
    }, 1200);

    setTimeout(() => {
      setIsScanning(false);
      setGateLifted(true);
      setScanMessage("ACCESS GRANTED: Boom Barrier #02 Lifted! Drive into assigned bay.");
      addNotification("Gate Barrier Lifted", `Vehicle ${booking.vehicleNumber} authorized for Bay ${booking.slotCode}`, "success");
    }, 2400);

    // Auto-close gate after 8 seconds
    setTimeout(() => {
      setGateLifted(false);
      setScanMessage(null);
    }, 9000);
  };

  return (
    <div className="container" style={{ padding: "40px 20px 80px", maxWidth: "680px" }}>
      {/* Back button */}
      <div style={{ marginBottom: "20px" }}>
        <Link to="/my-bookings" className="btn btn-outline btn-sm" style={{ display: "inline-flex", gap: "6px" }}>
          <ArrowLeft size={16} /> Back to My Bookings
        </Link>
      </div>

      <div
        className="card"
        style={{
          padding: "36px 28px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          boxShadow: "var(--shadow-lg)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Top Status Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              className={`badge ${
                booking.status === "active"
                  ? "badge-green"
                  : booking.status === "cancelled"
                  ? "badge-red"
                  : "badge-blue"
              }`}
            >
              <span className="sim-dot" /> {booking.status.toUpperCase()} PASS
            </span>
            <span className="badge badge-subtle">{booking.id}</span>
          </div>
          <h1 style={{ fontSize: "26px", fontWeight: "800", marginTop: "4px" }}>
            {booking.locationName}
          </h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
            {booking.locationAddress}
          </p>
        </div>

        {/* Dynamic QR Code Canvas with Scanning Laser Overlay */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              padding: "20px",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              border: gateLifted ? "3px solid var(--color-green)" : isScanning ? "3px solid var(--color-primary)" : "2px solid #E2E8F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              transition: "border 0.3s ease"
            }}
          >
            {/* Real Smartphone Scannable QR Code */}
            <QRCodeSVG
              value={livePassUrl}
              size={190}
              level="H"
              includeMargin={true}
            />

            {/* Simulated Optical Laser Beam when scanning */}
            {isScanning && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: "3px",
                  backgroundColor: "#2F6BFF",
                  boxShadow: "0 0 12px 3px #2F6BFF",
                  animation: "laserMove 1.5s ease-in-out infinite"
                }}
              />
            )}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "-10px" }}>
          <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--text-main)" }}>
            Point your smartphone camera to open this digital pass
          </div>
          <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>
            Or click below to simulate an automated IoT boom barrier scan
          </div>
        </div>

        {/* Interactive Barrier Scanner Simulator Button */}
        <div style={{ display: "flex", gap: "10px", width: "100%", maxWidth: "420px" }}>
          <button
            type="button"
            onClick={handleSimulateScan}
            disabled={isScanning || booking.status === "cancelled"}
            className="btn btn-primary"
            style={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: gateLifted ? "var(--color-green)" : isScanning ? "var(--color-violet)" : "var(--color-primary)"
            }}
          >
            <Scan size={16} />
            {isScanning ? "Scanning QR Code..." : gateLifted ? "Barrier Lifted (Access Granted)" : "Simulate Barrier Scan"}
          </button>
          <button
            type="button"
            onClick={handleCopyLink}
            className="btn btn-outline"
            title="Copy Pass URL"
            style={{ padding: "8px 14px" }}
          >
            <Copy size={16} />
          </button>
        </div>

        {/* Smart Boom Barrier Live Telemetry Visualizer */}
        {(isScanning || gateLifted || scanMessage) && (
          <div
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "var(--radius-md)",
              backgroundColor: gateLifted ? "rgba(18, 183, 106, 0.1)" : "rgba(47, 107, 255, 0.08)",
              border: `1.5px solid ${gateLifted ? "var(--color-green)" : "var(--color-primary)"}`,
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "700", fontSize: "13px" }}>
                <Radio size={16} color={gateLifted ? "var(--color-green)" : "var(--color-primary)"} />
                <span>IoT Smart Barrier #02</span>
              </div>
              <span className={`badge ${gateLifted ? "badge-green" : "badge-blue"}`}>
                {gateLifted ? "BARRIER OPEN 85°" : "SCANNING"}
              </span>
            </div>

            <p style={{ fontSize: "12px", color: "var(--text-secondary)", margin: 0 }}>
              {scanMessage}
            </p>

            {/* Visual Boom Barrier Animation Graphic */}
            <div style={{ position: "relative", height: "48px", background: "var(--bg-surface)", borderRadius: "6px", overflow: "hidden", display: "flex", alignItems: "center", padding: "0 16px" }}>
              <div style={{ width: "16px", height: "32px", background: "#475569", borderRadius: "3px", marginRight: "4px" }} />
              <div
                style={{
                  height: "8px",
                  flex: 1,
                  background: "repeating-linear-gradient(45deg, #EF4444, #EF4444 12px, #FFFFFF 12px, #FFFFFF 24px)",
                  borderRadius: "4px",
                  transformOrigin: "left center",
                  transform: gateLifted ? "rotate(-75deg)" : "rotate(0deg)",
                  transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
                }}
              />
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: "700", color: gateLifted ? "var(--color-green)" : "var(--color-amber)" }}>
                <span className="sim-dot" style={{ backgroundColor: gateLifted ? "var(--color-green)" : "var(--color-amber)" }} />
                {gateLifted ? "CLEAR TO ENTER" : "WAIT FOR GREEN"}
              </div>
            </div>
          </div>
        )}

        {/* Live Countdown Timer */}
        {booking.status === "active" && (
          <div
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "var(--radius-md)",
              backgroundColor: timeLeft.isExpired ? "var(--color-red-light)" : "var(--color-primary-light)",
              border: `1px solid ${timeLeft.isExpired ? "var(--color-red)" : "var(--color-primary)"}`,
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: "12px", color: "var(--text-secondary)", fontWeight: "600", textTransform: "uppercase" }}>
              {timeLeft.isExpired ? "Booking Time Expired" : "Time Remaining on Bay"}
            </div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "800",
                fontFamily: "var(--font-mono)",
                color: timeLeft.isExpired ? "var(--color-red)" : "var(--color-primary)",
                marginTop: "4px"
              }}
            >
              {String(timeLeft.hours).padStart(2, "0")}h : {String(timeLeft.minutes).padStart(2, "0")}m : {String(timeLeft.seconds).padStart(2, "0")}s
            </div>
          </div>
        )}

        {/* Key Info Grid */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
            padding: "18px",
            borderRadius: "var(--radius-md)",
            backgroundColor: "var(--bg-subtle)"
          }}
        >
          <div>
            <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>Assigned Slot</div>
            <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-primary)", fontFamily: "var(--font-mono)" }}>
              {booking.slotCode}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>Vehicle Number</div>
            <div style={{ fontSize: "16px", fontWeight: "700", fontFamily: "var(--font-mono)" }}>
              {booking.vehicleNumber}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>Start Time</div>
            <div style={{ fontSize: "13px", fontWeight: "600" }}>
              {new Date(booking.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>Valid Until</div>
            <div style={{ fontSize: "13px", fontWeight: "600" }}>
              {new Date(booking.endTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
        </div>

        {/* Action Buttons: Extend / Cancel */}
        {booking.status === "active" && (
          <div style={{ width: "100%", display: "flex", gap: "12px" }}>
            <button
              type="button"
              onClick={handleExtend}
              className="btn btn-outline"
              style={{ flex: 1, justifyContent: "center" }}
              title="Add 30 minutes for ₹30"
            >
              <PlusCircle size={16} /> Extend 30m (+₹30)
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-outline"
              style={{ flex: 1, justifyContent: "center", color: "var(--color-red)", borderColor: "var(--color-red-light)" }}
            >
              <XCircle size={16} /> Cancel & Refund
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes laserMove {
          0% { top: 0%; opacity: 0.8; }
          50% { top: 95%; opacity: 1; }
          100% { top: 0%; opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
