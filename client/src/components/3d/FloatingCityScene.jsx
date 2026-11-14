/**
 * FloatingCityScene.jsx
 * Single, highly-optimized 3D miniature city on a floating island using @react-three/fiber and @react-three/drei.
 *
 * Features:
 * - Floating low-poly island base with grass top and rock undersurface
 * - Rounded buildings with lit windows (color changes with Day / Night theme)
 * - Animated cars driving looping road paths with spinning wheels and headlights
 * - Walking pedestrians with arm/leg swing animation
 * - EV charging station with parked EV and glowing energy pulse along charging cable
 * - Interactive parking slots (green = free, red = taken, blue = selected)
 * - Floating HTML labels with price and slot code
 * - Orbit and zoom controls with polar angle caps
 * - Pixel ratio capped at 2 for performance, responds to prefers-reduced-motion
 */
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";

// Check for reduced motion preference
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 1. Animated Autonomous Car
function AnimatedCar({ radiusX, radiusZ, speed, initialAngle, bodyColor, isDark }) {
  const carRef = useRef();
  const wheelRefs = [useRef(), useRef(), useRef(), useRef()];
  const angleRef = useRef(initialAngle);

  useFrame((state, delta) => {
    if (prefersReducedMotion) return;
    angleRef.current += speed * delta;
    const a = angleRef.current;

    if (carRef.current) {
      carRef.current.position.x = Math.cos(a) * radiusX;
      carRef.current.position.z = Math.sin(a) * radiusZ;
      carRef.current.position.y = 0.28;
      // Face direction of road motion
      carRef.current.rotation.y = -a + (speed > 0 ? -Math.PI / 2 : Math.PI / 2);
    }

    // Spin wheels
    wheelRefs.forEach((ref) => {
      if (ref.current) ref.current.rotation.x += speed * 12 * delta;
    });
  });

  return (
    <group ref={carRef} position={[Math.cos(initialAngle) * radiusX, 0.28, Math.sin(initialAngle) * radiusZ]}>
      {/* Car Body */}
      <mesh position={[0, 0.18, 0]} castShadow>
        <boxGeometry args={[0.9, 0.35, 1.8]} />
        <meshStandardMaterial color={bodyColor} roughness={0.3} metalness={0.6} />
      </mesh>
      {/* Cabin / Windshield */}
      <mesh position={[0, 0.42, -0.1]} castShadow>
        <boxGeometry args={[0.75, 0.28, 0.9]} />
        <meshStandardMaterial color={isDark ? "#1E293B" : "#0F172A"} roughness={0.1} metalness={0.9} />
      </mesh>
      {/* Headlights */}
      <mesh position={[0.3, 0.2, 0.91]}>
        <boxGeometry args={[0.18, 0.08, 0.04]} />
        <meshBasicMaterial color={isDark ? "#FFF" : "#FEF08A"} />
      </mesh>
      <mesh position={[-0.3, 0.2, 0.91]}>
        <boxGeometry args={[0.18, 0.08, 0.04]} />
        <meshBasicMaterial color={isDark ? "#FFF" : "#FEF08A"} />
      </mesh>
      {/* Taillights */}
      <mesh position={[0.3, 0.2, -0.91]}>
        <boxGeometry args={[0.18, 0.08, 0.04]} />
        <meshBasicMaterial color="#EF4444" />
      </mesh>
      <mesh position={[-0.3, 0.2, -0.91]}>
        <boxGeometry args={[0.18, 0.08, 0.04]} />
        <meshBasicMaterial color="#EF4444" />
      </mesh>
      {/* Wheels */}
      {[
        [-0.48, 0.12, 0.55],
        [0.48, 0.12, 0.55],
        [-0.48, 0.12, -0.55],
        [0.48, 0.12, -0.55]
      ].map(([x, y, z], idx) => (
        <mesh key={idx} ref={wheelRefs[idx]} position={[x, y, z]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.14, 0.14, 0.1, 12]} />
          <meshStandardMaterial color="#111827" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

// 2. Animated Walking Pedestrian
function WalkingPedestrian({ radius, speed, initialAngle, shirtColor }) {
  const personRef = useRef();
  const leftLegRef = useRef();
  const rightLegRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  const angleRef = useRef(initialAngle);

  useFrame((state, delta) => {
    if (prefersReducedMotion) return;
    angleRef.current += speed * delta;
    const a = angleRef.current;

    if (personRef.current) {
      personRef.current.position.x = Math.cos(a) * radius;
      personRef.current.position.z = Math.sin(a) * radius;
      personRef.current.rotation.y = -a + Math.PI / 2;
    }

    // Walking stride oscillation
    const swing = Math.sin(state.clock.elapsedTime * 6) * 0.4;
    if (leftLegRef.current) leftLegRef.current.rotation.x = swing;
    if (rightLegRef.current) rightLegRef.current.rotation.x = -swing;
    if (leftArmRef.current) leftArmRef.current.rotation.x = -swing * 0.8;
    if (rightArmRef.current) rightArmRef.current.rotation.x = swing * 0.8;
  });

  return (
    <group ref={personRef} position={[Math.cos(initialAngle) * radius, 0.2, Math.sin(initialAngle) * radius]}>
      {/* Head */}
      <mesh position={[0, 0.72, 0]} castShadow>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshStandardMaterial color="#FBBF24" roughness={0.5} />
      </mesh>
      {/* Torso */}
      <mesh position={[0, 0.48, 0]} castShadow>
        <boxGeometry args={[0.2, 0.3, 0.12]} />
        <meshStandardMaterial color={shirtColor} roughness={0.6} />
      </mesh>
      {/* Legs */}
      <group position={[-0.06, 0.32, 0]} ref={leftLegRef}>
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[0.07, 0.28, 0.08]} />
          <meshStandardMaterial color="#1E293B" />
        </mesh>
      </group>
      <group position={[0.06, 0.32, 0]} ref={rightLegRef}>
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[0.07, 0.28, 0.08]} />
          <meshStandardMaterial color="#1E293B" />
        </mesh>
      </group>
      {/* Arms */}
      <group position={[-0.14, 0.56, 0]} ref={leftArmRef}>
        <mesh position={[0, -0.12, 0]}>
          <boxGeometry args={[0.06, 0.24, 0.06]} />
          <meshStandardMaterial color={shirtColor} />
        </mesh>
      </group>
      <group position={[0.14, 0.56, 0]} ref={rightArmRef}>
        <mesh position={[0, -0.12, 0]}>
          <boxGeometry args={[0.06, 0.24, 0.06]} />
          <meshStandardMaterial color={shirtColor} />
        </mesh>
      </group>
    </group>
  );
}

// 3. EV Charging Station with Pulsing Energy Cable
function EvChargingStation({ isDark }) {
  const pulseRef = useRef();

  useFrame((state) => {
    if (pulseRef.current) {
      // Animate glowing pulse along the cable
      const t = (state.clock.elapsedTime * 2) % 1;
      pulseRef.current.position.x = 2.4 + (3.3 - 2.4) * t;
      pulseRef.current.position.y = 0.5 - Math.sin(t * Math.PI) * 0.15;
    }
  });

  return (
    <group position={[1.5, 0.2, -1.8]}>
      {/* Charger Pedestal Tower */}
      <mesh position={[0.8, 0.75, 0]} castShadow>
        <boxGeometry args={[0.45, 1.5, 0.45]} />
        <meshStandardMaterial color="#0F172A" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Glowing Screen */}
      <mesh position={[0.8, 1.05, 0.24]}>
        <planeGeometry args={[0.32, 0.45]} />
        <meshBasicMaterial color="#12B76A" />
      </mesh>
      {/* Charger Brand Logo */}
      <mesh position={[0.8, 0.65, 0.24]}>
        <planeGeometry args={[0.2, 0.08]} />
        <meshBasicMaterial color="#2F6BFF" />
      </mesh>

      {/* Parked EV Charging */}
      <group position={[2.4, 0.08, 0]}>
        <mesh position={[0, 0.25, 0]} castShadow>
          <boxGeometry args={[1.1, 0.45, 2.0]} />
          <meshStandardMaterial color="#2F6BFF" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.55, -0.1]} castShadow>
          <boxGeometry args={[0.9, 0.35, 1.1]} />
          <meshStandardMaterial color="#0B132B" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* Flexible Cable Tube between Charger and Car */}
      <mesh position={[1.6, 0.4, 0.05]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 1.5, 8]} />
        <meshStandardMaterial color="#334155" roughness={0.5} />
      </mesh>

      {/* Pulsing Energy Bead traveling through cable */}
      <mesh ref={pulseRef} position={[1.3, 0.4, 0.05]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshBasicMaterial color="#12B76A" />
      </mesh>
      <pointLight position={[1.6, 0.6, 0.2]} color="#12B76A" intensity={isDark ? 2.5 : 1.2} distance={3} />
    </group>
  );
}

// 4. Interactive Parking Lot Slots
function ParkingLot({ selectedSlotId, onSelectSlot, isDark }) {
  // Slots: Green = free, Red = occupied with parked car, Blue = selected
  const slotsData = [
    { id: "S-1", code: "G-EV-01", isEv: true, evSpeed: "120 kW CCS2", status: "free", price: 60, x: -3.2, z: -1.8 },
    { id: "S-2", code: "G-EV-02", isEv: true, evSpeed: "60 kW Type 2", status: "occupied", price: 60, x: -1.6, z: -1.8 },
    { id: "S-3", code: "G-PK-03", isEv: false, status: "free", price: 40, x: -3.2, z: 0.2 },
    { id: "S-4", code: "G-PK-04", isEv: false, status: "occupied", price: 40, x: -1.6, z: 0.2 },
    { id: "S-5", code: "G-PK-05", isEv: false, status: "free", price: 40, x: -3.2, z: 2.2 },
    { id: "S-6", code: "G-PK-06", isEv: false, status: "free", price: 40, x: -1.6, z: 2.2 }
  ];

  return (
    <group position={[0, 0.21, 0]}>
      {slotsData.map((slot) => {
        const isSelected = selectedSlotId === slot.id;
        let slotColor = "#12B76A"; // Green (free)
        if (slot.status === "occupied") slotColor = "#EF4444"; // Red (occupied)
        if (isSelected) slotColor = "#2F6BFF"; // Blue (selected)

        return (
          <group key={slot.id} position={[slot.x, 0, slot.z]}>
            {/* Slot Ground Pad */}
            <mesh
              onClick={(e) => {
                e.stopPropagation();
                if (slot.status === "free" && onSelectSlot) {
                  onSelectSlot(slot);
                }
              }}
              receiveShadow
            >
              <boxGeometry args={[1.3, 0.04, 1.8]} />
              <meshStandardMaterial
                color={slotColor}
                roughness={0.4}
                emissive={slotColor}
                emissiveIntensity={isSelected ? 0.6 : isDark ? 0.3 : 0.1}
              />
            </mesh>

            {/* White Marking Border lines */}
            <mesh position={[0, 0.025, 0]}>
              <ringGeometry args={[0.55, 0.6, 4]} />
              <meshBasicMaterial color="#FFFFFF" transparent opacity={0.6} side={THREE.DoubleSide} />
            </mesh>

            {/* If Occupied: render static parked car */}
            {slot.status === "occupied" && (
              <group position={[0, 0.18, 0]}>
                <mesh castShadow>
                  <boxGeometry args={[0.85, 0.32, 1.5]} />
                  <meshStandardMaterial color={isDark ? "#475569" : "#64748B"} roughness={0.4} />
                </mesh>
                <mesh position={[0, 0.24, -0.05]} castShadow>
                  <boxGeometry args={[0.7, 0.22, 0.8]} />
                  <meshStandardMaterial color="#0F172A" roughness={0.2} />
                </mesh>
              </group>
            )}

            {/* Floating HTML Label above Slot */}
            <Html position={[0, 0.7, 0]} center distanceFactor={12} pointerEvents="none">
              <div
                style={{
                  background: isSelected ? "#2F6BFF" : slot.status === "free" ? "rgba(18, 183, 106, 0.92)" : "rgba(239, 68, 68, 0.85)",
                  color: "#FFFFFF",
                  padding: "2px 7px",
                  borderRadius: "6px",
                  fontSize: "10px",
                  fontWeight: "700",
                  fontFamily: "var(--font-mono)",
                  whiteSpace: "nowrap",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                <span>{slot.code}</span>
                {slot.status === "free" && <span>• ₹{slot.price}/h</span>}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

// 5. Procedural Buildings with Lit Windows
function CityBuildings({ isDark }) {
  const buildings = [
    { x: 3.5, z: 2.2, w: 1.8, h: 4.5, d: 1.8, color: isDark ? "#131C38" : "#E2E8F0" },
    { x: 1.8, z: 3.2, w: 1.4, h: 3.2, d: 1.4, color: isDark ? "#172347" : "#CBD5E1" },
    { x: 4.2, z: 0.2, w: 1.6, h: 5.2, d: 1.6, color: isDark ? "#0F172A" : "#F1F5F9" },
    { x: 3.6, z: -2.2, w: 1.5, h: 3.8, d: 1.5, color: isDark ? "#1E293B" : "#E2E8F0" }
  ];

  return (
    <group position={[0, 0.2, 0]}>
      {buildings.map((b, i) => (
        <group key={i} position={[b.x, b.h / 2, b.z]}>
          {/* Main Tower Box */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[b.w, b.h, b.d]} />
            <meshStandardMaterial color={b.color} roughness={0.3} metalness={0.4} />
          </mesh>
          {/* Glowing Windows Grid */}
          <mesh position={[0, 0, b.d / 2 + 0.01]}>
            <planeGeometry args={[b.w * 0.8, b.h * 0.8]} />
            <meshBasicMaterial
              color={isDark ? "#38BDF8" : "#FEF08A"}
              transparent
              opacity={isDark ? 0.75 : 0.3}
            />
          </mesh>
          {/* Roof Accent Beacon */}
          <mesh position={[0, b.h / 2 + 0.1, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.4, 8]} />
            <meshBasicMaterial color="#EF4444" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// 6. Floating Low-Poly Island Base, Roads and Trees
function IslandEnvironment({ isDark }) {
  return (
    <group>
      {/* Floating Island Top Grass Plate */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <cylinderGeometry args={[6.8, 7.2, 0.3, 32]} />
        <meshStandardMaterial color={isDark ? "#1E293B" : "#E2E8F0"} roughness={0.8} />
      </mesh>

      {/* Rocky Undersurface of Floating Island */}
      <mesh position={[0, -1.2, 0]}>
        <coneGeometry args={[7.0, 2.4, 16]} />
        <meshStandardMaterial color={isDark ? "#0B1020" : "#94A3B8"} roughness={0.9} />
      </mesh>

      {/* Circular Asphalt Road */}
      <mesh position={[0, 0.205, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry args={[4.4, 5.8, 32]} />
        <meshStandardMaterial color={isDark ? "#0A0F1D" : "#334155"} roughness={0.7} />
      </mesh>

      {/* Road Centre Dashed Stripe */}
      <mesh position={[0, 0.208, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[5.08, 5.12, 32]} />
        <meshBasicMaterial color="#FBBF24" />
      </mesh>

      {/* Decorative Trees */}
      {[
        [-4.2, 0.2, -4.0],
        [-1.0, 0.2, -4.5],
        [-4.8, 0.2, 2.5],
        [4.8, 0.2, -3.8]
      ].map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          {/* Trunk */}
          <mesh position={[0, 0.25, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.1, 0.5, 8]} />
            <meshStandardMaterial color="#78350F" roughness={0.9} />
          </mesh>
          {/* Foliage Cone */}
          <mesh position={[0, 0.75, 0]} castShadow>
            <coneGeometry args={[0.45, 0.9, 8]} />
            <meshStandardMaterial color={isDark ? "#065F46" : "#10B981"} roughness={0.5} />
          </mesh>
        </group>
      ))}

      {/* Street Lamps */}
      {[
        [3.8, 0.2, 3.8],
        [-3.8, 0.2, 3.8],
        [-3.8, 0.2, -3.8]
      ].map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          <mesh position={[0, 0.8, 0]}>
            <cylinderGeometry args={[0.03, 0.04, 1.6, 8]} />
            <meshStandardMaterial color="#64748B" />
          </mesh>
          <mesh position={[0, 1.6, 0]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color={isDark ? "#FEF08A" : "#FFFFFF"} />
          </mesh>
          {isDark && (
            <pointLight position={[0, 1.6, 0]} color="#FEF08A" intensity={1.5} distance={4} />
          )}
        </group>
      ))}
    </group>
  );
}

// 7. Master 3D Scene Wrapper
export default function FloatingCityScene({ selectedSlotId, onSelectSlot, height = "100%" }) {
  const { isDark } = useTheme();

  return (
    <div style={{ width: "100%", height, position: "relative" }}>
      <Canvas
        camera={{ position: [11, 10, 13], fov: 42 }}
        dpr={[1, 2]} // Performance cap: maximum 2x pixel ratio
        shadows
        gl={{ antialias: true, alpha: true }}
      >
        {/* Sky / Ambient Lighting based on Light/Dark Theme */}
        <color attach="background" args={[isDark ? "#070C1F" : "#F1F5F9"]} />
        <fog attach="fog" args={[isDark ? "#070C1F" : "#F1F5F9", 15, 32]} />

        <ambientLight intensity={isDark ? 0.6 : 1.2} />
        <directionalLight
          position={[12, 18, 10]}
          intensity={isDark ? 1.0 : 1.8}
          color={isDark ? "#38BDF8" : "#FFFFFF"}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <hemisphereLight
          skyColor={isDark ? 0x1e293b : 0xffffff}
          groundColor={isDark ? 0x070c1f : 0xe2e8f0}
          intensity={0.5}
        />

        {/* 3D Model Components */}
        <IslandEnvironment isDark={isDark} />
        <CityBuildings isDark={isDark} />
        <EvChargingStation isDark={isDark} />
        <ParkingLot selectedSlotId={selectedSlotId} onSelectSlot={onSelectSlot} isDark={isDark} />

        {/* Dynamic Animated Vehicles */}
        <AnimatedCar radiusX={4.8} radiusZ={4.8} speed={0.9} initialAngle={0} bodyColor="#2F6BFF" isDark={isDark} />
        <AnimatedCar radiusX={5.3} radiusZ={5.3} speed={-0.7} initialAngle={Math.PI} bodyColor="#12B76A" isDark={isDark} />

        {/* Pedestrians */}
        <WalkingPedestrian radius={3.6} speed={0.3} initialAngle={0.5} shirtColor="#7C5CFF" />
        <WalkingPedestrian radius={3.6} speed={0.3} initialAngle={3.5} shirtColor="#EF4444" />

        {/* Camera Orbit Controls (smooth, constrained to avoid seeing island underside) */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 2 - 0.05}
          minDistance={8}
          maxDistance={25}
          autoRotate={!prefersReducedMotion}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
