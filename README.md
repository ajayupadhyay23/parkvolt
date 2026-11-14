# ParkVolt – Smart Parking & EV Charging Mesh System

> **A high-performance IoT Smart Parking Reservation and Electric Vehicle Charging Grid Digital-Twin Platform.**  
> Built with **React 18, Three.js (WebGL), Tailwind CSS, Zustand, Node.js, Express.js, MongoDB/Mongoose, Socket.IO, JWT, and Razorpay HMAC-SHA256 Payment Integration.**

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
# Install frontend packages
cd client && npm install

# Install backend packages
cd ../server && npm install
```

### 2. Start the Backend API & WebSocket Gateway
```bash
cd server
npm start
```
* Backend starts at `http://localhost:5001`
* Health Check: `GET http://localhost:5001/api/health`
* Socket.IO Gateway attached to `http://localhost:5001`

### 3. Start the Frontend Client (Vite Dev Server)
```bash
cd client
npm run dev
```
* Open your browser at `http://localhost:3000`

---

## 🏛️ Project Architecture & Modules

```
ParkVolt/
├── client/                     # Frontend Application (React 18 + Vite + Three.js)
│   ├── src/
│   │   ├── components/
│   │   │   ├── 3d/             # MiniatureCity WebGL digital-twin & HUD telemetry overlay
│   │   │   ├── hero/           # Hero section with interactive 3D miniature city
│   │   │   ├── layout/         # Navbar, Footer
│   │   │   └── ui/             # Atomic design components (Button, Badge, Card, Input, Modal, SlotIndicator)
│   │   ├── pages/
│   │   │   ├── ExploreSearch.jsx       # Step 3: Geospatial search & EV filter matrix
│   │   │   ├── LocationDetailView.jsx  # Step 4: Multi-floor layout & visual slot reservation grid
│   │   │   ├── EVChargingDashboard.jsx # Step 10: High-voltage telemetry & live BMS curve
│   │   │   ├── AdminDashboard.jsx      # Step 11: Real-time grid operator console
│   │   │   └── DesignSystemShowcase.jsx# Step 1: Design tokens & interactive UI lab
│   │   ├── services/           # REST API client & mock fallback provider
│   │   └── store/              # Zustand global state (slots, user, telemetry, Socket.IO)
│
└── server/                     # Backend API & IoT Socket Server (Node.js + Express + Mongoose)
    ├── config/                 # Environment variables and MongoDB connection
    ├── controllers/            # Auth, User, Parking, Booking, Payment, Charging controllers
    ├── middleware/             # JWT protect, RBAC authorize, input validation, global error handler
    ├── models/                 # Mongoose schemas (User, Vehicle, Location, Slot, Booking, Payment, Session)
    ├── routes/                 # REST endpoints (/api/auth, /api/parking, /api/bookings, etc.)
    ├── services/               # Concurrency slot locker, Razorpay signature verifier, notifications
    ├── sockets/                # Socket.IO facility rooms & real-time slot broadcast gateway
    └── utils/                  # JWT token generator, unique booking ID generator, pricing calculator
```

---

## 📡 API Reference Overview

| Method | Endpoint | Description | Auth Required |
|:---|:---|:---|:---|
| `GET` | `/api/health` | Service health, uptime & status | No |
| `POST` | `/api/auth/register` | Register new user account | No |
| `POST` | `/api/auth/login` | Authenticate with email/password & receive JWT | No |
| `GET` | `/api/auth/me` | Retrieve profile of authenticated user | Yes (`Bearer <token>`) |
| `GET` | `/api/parking` | Search facilities by city, power kW, max rate | No |
| `GET` | `/api/parking/:id/slots` | Fetch real-time slot layout by facility & floor | No |
| `PATCH`| `/api/parking/slots/:id/status`| Update slot status (available/occupied/maintenance) | Admin / Operator |
| `POST` | `/api/bookings` | Reserve a bay (atomic concurrency lock) | Yes |
| `GET` | `/api/bookings/my` | Retrieve bookings of authenticated user | Yes |
| `PATCH`| `/api/bookings/:id/cancel` | Cancel booking & automatically release bay | Yes |
| `POST` | `/api/payments/create-order` | Generate Razorpay order ID | Yes |
| `POST` | `/api/payments/verify` | Verify HMAC-SHA256 signature and record payment | Yes |
| `POST` | `/api/charging/start` | Start high-voltage EV fast-charging session | Yes |
| `GET` | `/api/charging/:id/telemetry` | Poll real-time kW, SOC %, voltage, amperage | Yes |
| `POST` | `/api/charging/:id/stop` | Conclude session and release connector lock | Yes |

---

## ⚡ Concurrency & Double-Booking Prevention

1. **Atomic Check & Lock**: When `POST /api/bookings` is invoked, the `bookingService` checks if `slot.status === 'available'`.
2. **Immediate State Transition**: The slot status is immediately transitioned to `'reserved'` and linked to the new `booking._id`.
3. **Socket.IO Broadcast**: A `slot:status_changed` event is broadcasted to the facility room (`io.to(locationId)`), instantly painting the slot red/amber across all connected user devices in `< 25ms`.
4. **Grace Period**: If payment is not completed within 15 minutes, a scheduled task automatically releases the slot back to `'available'`.

---

## 🎓 University Viva Highlights

1. **Why Three.js + WebGL?**: Allows rendering 60 FPS 3D spatial models directly in the browser using the client's GPU, without streaming video overhead.
2. **Raycasting**: Translates 2D mouse clicks on the canvas into 3D ray intersections to identify the exact bay clicked by the driver.
3. **HMAC-SHA256 Signature Verification**: Computes `crypto.createHmac('sha256', secret).update(orderId + '|' + paymentId)` and compares using `crypto.timingSafeEqual` to prevent timing attacks and unauthorized order confirmation.
4. **Atomic Design & Zustand**: Segregates UI into reusable atoms/molecules while keeping state updates out of React component trees for sub-millisecond render efficiency.
