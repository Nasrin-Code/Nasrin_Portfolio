"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 60;

function Nodes() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  const velocities = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 0.004;
    }
    return arr;
  }, []);

  const linePositions = useMemo(() => new Float32Array(NODE_COUNT * NODE_COUNT * 6), []);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < NODE_COUNT; i++) {
      arr[i * 3] += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      if (Math.abs(arr[i * 3]) > 8) velocities[i * 3] *= -1;
      if (Math.abs(arr[i * 3 + 1]) > 4.5) velocities[i * 3 + 1] *= -1;
    }
    posAttr.needsUpdate = true;

    let idx = 0;
    let connections = 0;
    const maxConnections = 900;
    for (let i = 0; i < NODE_COUNT && connections < maxConnections; i++) {
      for (let j = i + 1; j < NODE_COUNT && connections < maxConnections; j++) {
        const dx = arr[i * 3] - arr[j * 3];
        const dy = arr[i * 3 + 1] - arr[j * 3 + 1];
        const dz = arr[i * 3 + 2] - arr[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 2.6) {
          linePositions[idx++] = arr[i * 3];
          linePositions[idx++] = arr[i * 3 + 1];
          linePositions[idx++] = arr[i * 3 + 2];
          linePositions[idx++] = arr[j * 3];
          linePositions[idx++] = arr[j * 3 + 1];
          linePositions[idx++] = arr[j * 3 + 2];
          connections++;
        }
      }
    }
    if (linesRef.current) {
      const lineAttr = linesRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const lineArr = lineAttr.array as Float32Array;
      lineArr.set(linePositions.subarray(0, idx));
      for (let k = idx; k < lineArr.length; k++) lineArr[k] = 0;
      lineAttr.needsUpdate = true;
      linesRef.current.geometry.setDrawRange(0, idx / 3);
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#FF7A00" size={0.045} transparent opacity={0.55} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#4F46E5" transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Nodes />
      </Canvas>
    </div>
  );
}
