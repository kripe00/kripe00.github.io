"use client";

import { RotateCcw } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useWorkbench } from "@/components/providers/WorkbenchProvider";
import { SpecCard } from "@/components/ui/SpecCard";

type CadMode = "floorplan" | "parametric" | "reactor";
type ProjectionMode = "iso" | "persp";

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

interface ProjectedPoint {
  x: number;
  y: number;
  depth: number;
}

interface BoxPrimitive {
  min: Vec3;
  max: Vec3;
  tone: "primary" | "cyan" | "neutral" | "muted";
  label?: string;
}

function createBoxVertices(min: Vec3, max: Vec3): Vec3[] {
  return [
    { x: min.x, y: min.y, z: min.z }, // 0
    { x: max.x, y: min.y, z: min.z }, // 1
    { x: max.x, y: max.y, z: min.z }, // 2
    { x: min.x, y: max.y, z: min.z }, // 3
    { x: min.x, y: min.y, z: max.z }, // 4
    { x: max.x, y: min.y, z: max.z }, // 5
    { x: max.x, y: max.y, z: max.z }, // 6
    { x: min.x, y: max.y, z: max.z }, // 7
  ];
}

const BOX_FACES: [number, number, number, number][] = [
  [4, 5, 6, 7], // top (+Z)
  [0, 1, 5, 4], // south (-Y)
  [1, 2, 6, 5], // east (+X)
  [2, 3, 7, 6], // north (+Y)
  [3, 0, 4, 7], // west (-X)
];

const BOX_EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

function buildFloorplanBoxes(extrude: number): BoxPrimitive[] {
  const h = extrude;
  return [
    // Perimeter architectural curb
    {
      min: { x: -4.4, y: -3.1, z: 0 },
      max: { x: 4.4, y: -2.95, z: 0.45 * h },
      tone: "muted",
    },
    {
      min: { x: -4.4, y: -3.1, z: 0 },
      max: { x: -4.25, y: 3.1, z: 0.85 * h },
      tone: "muted",
    },
    // Main Stage & Rigging Deck
    {
      min: { x: -3.7, y: -2.3, z: 0 },
      max: { x: -1.3, y: 1.4, z: 0.95 * h },
      tone: "primary",
      label: "STAGE // Z+1.2m",
    },
    // Overhead Trusses (supported by 2 corner towers)
    {
      min: { x: -3.65, y: -2.25, z: 0.95 * h },
      max: { x: -3.4, y: -2.0, z: 2.35 * h },
      tone: "cyan",
    },
    {
      min: { x: -3.65, y: 1.15, z: 0.95 * h },
      max: { x: -3.4, y: 1.4, z: 2.35 * h },
      tone: "cyan",
    },
    {
      min: { x: -3.68, y: -2.25, z: 2.15 * h },
      max: { x: -1.5, y: 1.4, z: 2.4 * h },
      tone: "cyan",
      label: "RIG TRUSS",
    },
    // Audience / Expo Modular Seating Zones
    {
      min: { x: -0.4, y: -2.2, z: 0 },
      max: { x: 1.35, y: -0.5, z: 0.55 * h },
      tone: "neutral",
      label: "ZONE A",
    },
    {
      min: { x: -0.4, y: 0.1, z: 0 },
      max: { x: 1.35, y: 1.8, z: 0.55 * h },
      tone: "neutral",
      label: "ZONE B",
    },
    {
      min: { x: 1.9, y: -2.2, z: 0 },
      max: { x: 3.55, y: -0.5, z: 0.7 * h },
      tone: "neutral",
    },
    // FOH / Control Booth
    {
      min: { x: 2.1, y: 0.55, z: 0 },
      max: { x: 3.65, y: 2.25, z: 1.25 * h },
      tone: "primary",
      label: "FOH CTRL",
    },
  ];
}

function buildReactorBoxes(extrude: number, phase: number): BoxPrimitive[] {
  const boxes: BoxPrimitive[] = [];
  for (let gx = -2; gx <= 2; gx++) {
    for (let gy = -2; gy <= 2; gy++) {
      const dist = Math.hypot(gx, gy);
      const fluxWave = Math.sin(phase * 1.8 - dist * 1.15) * 0.24 + 0.76;
      const rodHeight = Math.max(
        0.28,
        (2.35 - dist * 0.36) * extrude * fluxWave
      );
      const isHot = dist < 1.15;
      const isControl = (Math.abs(gx) + Math.abs(gy)) % 2 === 1 && dist < 2.2;
      boxes.push({
        min: { x: gx * 1.35 - 0.42, y: gy * 1.35 - 0.42, z: 0 },
        max: { x: gx * 1.35 + 0.42, y: gy * 1.35 + 0.42, z: rodHeight },
        tone: isHot ? "primary" : isControl ? "cyan" : "neutral",
        label: gx === 0 && gy === 0 ? "CH-00 // AZ-5" : undefined,
      });
    }
  }
  return boxes;
}

export function SpatialCadViewport() {
  const { content, theme } = useWorkbench();
  const vpCopy = content.hero.cadViewport;

  const [mode, setMode] = useState<CadMode>("floorplan");
  const [projection, setProjection] = useState<ProjectionMode>("iso");
  const [extrude, setExtrude] = useState<number>(1.0);
  const [angleReadout, setAngleReadout] = useState({ yaw: 38, pitch: 27 });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const rotationRef = useRef({ yaw: 0.66, pitch: 0.48 });
  const draggingRef = useRef<{
    active: boolean;
    lastX: number;
    lastY: number;
  }>({ active: false, lastX: 0, lastY: 0 });
  const visibleRef = useRef(true);
  const reducedMotionRef = useRef(false);

  const resetAxes = useCallback(() => {
    rotationRef.current = { yaw: 0.66, pitch: 0.48 };
    setExtrude(1.0);
    setAngleReadout({ yaw: 38, pitch: 27 });
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const onChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        visibleRef.current = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let lastReadoutSync = 0;
    const isBlueprint = theme === "blueprint";

    const palette = isBlueprint
      ? {
          grid: "rgba(100, 116, 139, 0.24)",
          axis: "rgba(2, 132, 199, 0.55)",
          text: "#334155",
          mutedText: "#64748b",
          primaryStroke: "#b45309",
          primaryFill: "rgba(217, 119, 6, 0.16)",
          cyanStroke: "#0284c7",
          cyanFill: "rgba(2, 132, 199, 0.15)",
          neutralStroke: "#475569",
          neutralFill: "rgba(148, 163, 184, 0.18)",
          mutedStroke: "#94a3b8",
          mutedFill: "rgba(203, 213, 225, 0.25)",
        }
      : {
          grid: "rgba(50, 59, 73, 0.45)",
          axis: "rgba(56, 189, 248, 0.45)",
          text: "#e5e7eb",
          mutedText: "#6b7280",
          primaryStroke: "#f59e0b",
          primaryFill: "rgba(245, 158, 11, 0.15)",
          cyanStroke: "#38bdf8",
          cyanFill: "rgba(56, 189, 248, 0.14)",
          neutralStroke: "#64748b",
          neutralFill: "rgba(30, 41, 59, 0.48)",
          mutedStroke: "#334155",
          mutedFill: "rgba(19, 23, 29, 0.55)",
        };

    const projectPoint = (
      p: Vec3,
      width: number,
      height: number,
      yaw: number,
      pitch: number
    ): ProjectedPoint => {
      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const cosP = Math.cos(pitch);
      const sinP = Math.sin(pitch);

      // Rotate around Z (yaw), then tilt around X (pitch) with Z-up CAD convention
      const rx = p.x * cosY - p.y * sinY;
      const ry = p.x * sinY + p.y * cosY;
      const rz = p.z;

      const camX = rx;
      const camY = ry * sinP - rz * cosP;
      const camDepth = ry * cosP + rz * sinP;

      const baseScale = Math.min(width, height) * 0.084;
      const perspectiveFactor =
        projection === "persp" ? 13 / Math.max(5.5, 13 + camDepth * 0.55) : 1;

      return {
        x: width * 0.5 + camX * baseScale * perspectiveFactor,
        y: height * 0.56 + camY * baseScale * perspectiveFactor,
        depth: camDepth,
      };
    };

    const drawParametricCad = (
      width: number,
      height: number,
      yaw: number,
      pitch: number
    ) => {
      const segments = 16;
      const outerR = 3.15;
      const hubR = 1.45;
      const boreR = 0.72;
      const baseH = 0.48 * extrude;
      const hubH = 1.95 * extrude;

      // Draw octagonal/hexadecagonal flange plate + central cylindrical hub + 4 bolt bosses
      const rings: { r: number; z: number; stroke: string }[] = [
        { r: outerR, z: 0, stroke: palette.neutralStroke },
        { r: outerR, z: baseH, stroke: palette.cyanStroke },
        { r: hubR, z: baseH, stroke: palette.primaryStroke },
        { r: hubR, z: hubH, stroke: palette.primaryStroke },
        { r: boreR, z: baseH, stroke: palette.cyanStroke },
        { r: boreR, z: hubH, stroke: palette.cyanStroke },
      ];

      // Translucent top flange polygon
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const a = (i / segments) * Math.PI * 2;
        const pt = projectPoint(
          { x: Math.cos(a) * outerR, y: Math.sin(a) * outerR, z: baseH },
          width,
          height,
          yaw,
          pitch
        );
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.fillStyle = palette.cyanFill;
      ctx.fill();

      // Top hub cap fill
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const a = (i / segments) * Math.PI * 2;
        const pt = projectPoint(
          { x: Math.cos(a) * hubR, y: Math.sin(a) * hubR, z: hubH },
          width,
          height,
          yaw,
          pitch
        );
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.fillStyle = palette.primaryFill;
      ctx.fill();

      // Wireframe rings
      for (const ring of rings) {
        ctx.beginPath();
        for (let i = 0; i <= segments; i++) {
          const a = (i / segments) * Math.PI * 2;
          const pt = projectPoint(
            { x: Math.cos(a) * ring.r, y: Math.sin(a) * ring.r, z: ring.z },
            width,
            height,
            yaw,
            pitch
          );
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = ring.stroke;
        ctx.lineWidth = 1.15;
        ctx.stroke();
      }

      // Vertical generator lines & 4 gusset ribs (BOSL2 style)
      for (let i = 0; i < segments; i += 2) {
        const a = (i / segments) * Math.PI * 2;
        const pBot = projectPoint(
          { x: Math.cos(a) * outerR, y: Math.sin(a) * outerR, z: 0 },
          width,
          height,
          yaw,
          pitch
        );
        const pTop = projectPoint(
          { x: Math.cos(a) * outerR, y: Math.sin(a) * outerR, z: baseH },
          width,
          height,
          yaw,
          pitch
        );
        ctx.beginPath();
        ctx.moveTo(pBot.x, pBot.y);
        ctx.lineTo(pTop.x, pTop.y);
        ctx.strokeStyle = palette.neutralStroke;
        ctx.stroke();
      }

      // 4 Radial Gusset Ribs + 4 M5 Counterbore Bosses
      for (let k = 0; k < 4; k++) {
        const ribAngle = (k * Math.PI) / 2;
        const pOuter = projectPoint(
          {
            x: Math.cos(ribAngle) * (outerR - 0.25),
            y: Math.sin(ribAngle) * (outerR - 0.25),
            z: baseH,
          },
          width,
          height,
          yaw,
          pitch
        );
        const pHubBase = projectPoint(
          {
            x: Math.cos(ribAngle) * hubR,
            y: Math.sin(ribAngle) * hubR,
            z: baseH,
          },
          width,
          height,
          yaw,
          pitch
        );
        const pHubTop = projectPoint(
          {
            x: Math.cos(ribAngle) * hubR,
            y: Math.sin(ribAngle) * hubR,
            z: hubH * 0.92,
          },
          width,
          height,
          yaw,
          pitch
        );

        ctx.beginPath();
        ctx.moveTo(pOuter.x, pOuter.y);
        ctx.lineTo(pHubBase.x, pHubBase.y);
        ctx.lineTo(pHubTop.x, pHubTop.y);
        ctx.closePath();
        ctx.fillStyle = palette.primaryFill;
        ctx.fill();
        ctx.strokeStyle = palette.primaryStroke;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // M5 mounting holes at 45 deg offsets
        const holeAngle = ribAngle + Math.PI / 4;
        const holeCenter = {
          x: Math.cos(holeAngle) * 2.3,
          y: Math.sin(holeAngle) * 2.3,
        };
        ctx.beginPath();
        for (let s = 0; s <= 10; s++) {
          const sa = (s / 10) * Math.PI * 2;
          const hp = projectPoint(
            {
              x: holeCenter.x + Math.cos(sa) * 0.32,
              y: holeCenter.y + Math.sin(sa) * 0.32,
              z: baseH + 0.02,
            },
            width,
            height,
            yaw,
            pitch
          );
          if (s === 0) ctx.moveTo(hp.x, hp.y);
          else ctx.lineTo(hp.x, hp.y);
        }
        ctx.strokeStyle = palette.cyanStroke;
        ctx.stroke();
      }

      // Dimension callout
      const calloutPt = projectPoint(
        { x: 0, y: 0, z: hubH + 0.35 },
        width,
        height,
        yaw,
        pitch
      );
      ctx.font = "500 10px monospace";
      ctx.fillStyle = palette.text;
      ctx.fillText(
        `Ø ${(boreR * 20).toFixed(1)}mm · H ${(hubH * 18).toFixed(1)}mm`,
        calloutPt.x + 8,
        calloutPt.y
      );
    };

    const renderFrame = (timestamp: number) => {
      if (visibleRef.current) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        const targetW = Math.max(1, Math.floor(rect.width * dpr));
        const targetH = Math.max(1, Math.floor(rect.height * dpr));
        if (canvas.width !== targetW || canvas.height !== targetH) {
          canvas.width = targetW;
          canvas.height = targetH;
        }

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const width = rect.width;
        const height = rect.height;
        ctx.clearRect(0, 0, width, height);

        if (!draggingRef.current.active && !reducedMotionRef.current) {
          rotationRef.current.yaw += 0.0022;
        }

        const { yaw, pitch } = rotationRef.current;

        if (timestamp - lastReadoutSync > 140) {
          lastReadoutSync = timestamp;
          const degYaw = Math.round((((yaw * 180) / Math.PI) % 360 + 360) % 360);
          const degPitch = Math.round((pitch * 180) / Math.PI);
          setAngleReadout((prev) =>
            prev.yaw === degYaw && prev.pitch === degPitch
              ? prev
              : { yaw: degYaw, pitch: degPitch }
          );
        }

        // 1. Draw CAD Datum Floor Grid (Z = 0)
        ctx.lineWidth = 1;
        for (let g = -5; g <= 5; g++) {
          const a = projectPoint({ x: g, y: -4, z: 0 }, width, height, yaw, pitch);
          const b = projectPoint({ x: g, y: 4, z: 0 }, width, height, yaw, pitch);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = g === 0 ? palette.axis : palette.grid;
          ctx.stroke();
        }
        for (let g = -4; g <= 4; g++) {
          const a = projectPoint({ x: -5, y: g, z: 0 }, width, height, yaw, pitch);
          const b = projectPoint({ x: 5, y: g, z: 0 }, width, height, yaw, pitch);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = g === 0 ? palette.axis : palette.grid;
          ctx.stroke();
        }

        // 2. Draw Active 3D Assembly
        if (mode === "parametric") {
          drawParametricCad(width, height, yaw, pitch);
        } else {
          const boxes =
            mode === "floorplan"
              ? buildFloorplanBoxes(extrude)
              : buildReactorBoxes(extrude, timestamp * 0.0014);

          // Painter's algorithm sort boxes back-to-front by center depth
          const sorted = boxes
            .map((box) => {
              const center: Vec3 = {
                x: (box.min.x + box.max.x) * 0.5,
                y: (box.min.y + box.max.y) * 0.5,
                z: (box.min.z + box.max.z) * 0.5,
              };
              const pc = projectPoint(center, width, height, yaw, pitch);
              return { box, depth: pc.depth };
            })
            .sort((a, b) => b.depth - a.depth);

          // Floorplan safety egress corridor dashed vector
          if (mode === "floorplan") {
            const pathPts: Vec3[] = [
              { x: -1.0, y: -0.2, z: 0.03 },
              { x: 1.65, y: -0.2, z: 0.03 },
              { x: 1.65, y: 2.75, z: 0.03 },
              { x: 4.3, y: 2.75, z: 0.03 },
            ];
            ctx.save();
            ctx.setLineDash([5, 4]);
            ctx.beginPath();
            pathPts.forEach((pt, idx) => {
              const p = projectPoint(pt, width, height, yaw, pitch);
              if (idx === 0) ctx.moveTo(p.x, p.y);
              else ctx.lineTo(p.x, p.y);
            });
            ctx.strokeStyle = palette.cyanStroke;
            ctx.lineWidth = 1.4;
            ctx.stroke();
            ctx.restore();
          }

          for (const { box } of sorted) {
            const verts = createBoxVertices(box.min, box.max).map((v) =>
              projectPoint(v, width, height, yaw, pitch)
            );

            const fillMap = {
              primary: palette.primaryFill,
              cyan: palette.cyanFill,
              neutral: palette.neutralFill,
              muted: palette.mutedFill,
            }[box.tone];

            const strokeMap = {
              primary: palette.primaryStroke,
              cyan: palette.cyanStroke,
              neutral: palette.neutralStroke,
              muted: palette.mutedStroke,
            }[box.tone];

            // Sort faces of box back-to-front
            const faceOrder = BOX_FACES.map((indices) => ({
              indices,
              depth:
                (verts[indices[0]].depth +
                  verts[indices[1]].depth +
                  verts[indices[2]].depth +
                  verts[indices[3]].depth) *
                0.25,
            })).sort((a, b) => b.depth - a.depth);

            for (const f of faceOrder) {
              ctx.beginPath();
              ctx.moveTo(verts[f.indices[0]].x, verts[f.indices[0]].y);
              ctx.lineTo(verts[f.indices[1]].x, verts[f.indices[1]].y);
              ctx.lineTo(verts[f.indices[2]].x, verts[f.indices[2]].y);
              ctx.lineTo(verts[f.indices[3]].x, verts[f.indices[3]].y);
              ctx.closePath();
              ctx.fillStyle = fillMap;
              ctx.fill();
            }

            ctx.beginPath();
            for (const [i0, i1] of BOX_EDGES) {
              ctx.moveTo(verts[i0].x, verts[i0].y);
              ctx.lineTo(verts[i1].x, verts[i1].y);
            }
            ctx.strokeStyle = strokeMap;
            ctx.lineWidth = box.tone === "primary" || box.tone === "cyan" ? 1.2 : 0.9;
            ctx.stroke();

            if (box.label) {
              const topAnchor = projectPoint(
                {
                  x: (box.min.x + box.max.x) * 0.5,
                  y: (box.min.y + box.max.y) * 0.5,
                  z: box.max.z + 0.18,
                },
                width,
                height,
                yaw,
                pitch
              );
              ctx.fillStyle = strokeMap;
              ctx.fillRect(topAnchor.x - 2, topAnchor.y - 2, 4, 4);
              ctx.font = "500 9.5px monospace";
              ctx.fillStyle = palette.text;
              ctx.fillText(box.label, topAnchor.x + 6, topAnchor.y + 3);
            }
          }
        }

        // 3. Corner Axis Triad Gizmo (bottom-left of viewport)
        const gizmoOrigin = { x: 34, y: height - 28 };
        const triadAxes: { dir: Vec3; label: string; color: string }[] = [
          { dir: { x: 1, y: 0, z: 0 }, label: "X", color: "#ef4444" },
          { dir: { x: 0, y: 1, z: 0 }, label: "Y", color: "#10b981" },
          { dir: { x: 0, y: 0, z: 1 }, label: "Z", color: palette.cyanStroke },
        ];
        for (const axis of triadAxes) {
          const p0 = projectPoint({ x: 0, y: 0, z: 0 }, 160, 160, yaw, pitch);
          const p1 = projectPoint(axis.dir, 160, 160, yaw, pitch);
          const dx = (p1.x - p0.x) * 1.45;
          const dy = (p1.y - p0.y) * 1.45;
          ctx.beginPath();
          ctx.moveTo(gizmoOrigin.x, gizmoOrigin.y);
          ctx.lineTo(gizmoOrigin.x + dx, gizmoOrigin.y + dy);
          ctx.strokeStyle = axis.color;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.font = "600 9px monospace";
          ctx.fillStyle = axis.color;
          ctx.fillText(
            axis.label,
            gizmoOrigin.x + dx * 1.25 - 3,
            gizmoOrigin.y + dy * 1.25 + 3
          );
        }
      }

      rafId = window.requestAnimationFrame(renderFrame);
    };

    rafId = window.requestAnimationFrame(renderFrame);
    return () => window.cancelAnimationFrame(rafId);
  }, [extrude, mode, projection, theme]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    draggingRef.current = {
      active: true,
      lastX: e.clientX,
      lastY: e.clientY,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!draggingRef.current.active) return;
    const dx = e.clientX - draggingRef.current.lastX;
    const dy = e.clientY - draggingRef.current.lastY;
    draggingRef.current.lastX = e.clientX;
    draggingRef.current.lastY = e.clientY;

    rotationRef.current.yaw += dx * 0.009;
    rotationRef.current.pitch = Math.max(
      0.18,
      Math.min(1.28, rotationRef.current.pitch + dy * 0.007)
    );
  };

  const handlePointerUp = () => {
    draggingRef.current.active = false;
  };

  const activeMeta = vpCopy.modes[mode];

  return (
    <div ref={containerRef} className="w-full">
      <SpecCard>
        {/* Top Instrument Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline bg-recessed px-3.5 py-2.5">
          <div className="font-mono text-[11px] tracking-wider text-ink-secondary">
            <span>{vpCopy.panelTitle}</span>
          </div>
          <span className="font-mono text-[10px] tracking-wider text-ink-muted uppercase">
            {vpCopy.dragHint}
          </span>
        </div>

        {/* Mode Selector Tabs */}
        <div
          role="tablist"
          aria-label="3D CAD Assemblies"
          className="grid grid-cols-3 border-b border-hairline bg-panel font-mono text-[11px]"
        >
          {(["floorplan", "parametric", "reactor"] as const).map((tabKey) => {
            const selected = mode === tabKey;
            return (
              <button
                key={tabKey}
                id={`cad-mode-${tabKey}`}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setMode(tabKey)}
                className={`cursor-pointer border-r border-hairline px-2.5 py-2 text-left transition-colors last:border-r-0 ${
                  selected
                    ? "bg-accent-soft font-semibold text-accent"
                    : "text-ink-muted hover:bg-panel-hover hover:text-ink-secondary"
                }`}
              >
                {vpCopy.modes[tabKey].tab}
              </button>
            );
          })}
        </div>

        {/* Interactive 3D Canvas Surface */}
        <div className="cad-surface relative h-[300px] w-full select-none sm:h-[340px]">
          {/* Active Assembly Callout Overlay */}
          <div className="pointer-events-none absolute top-3 left-3.5 z-10 rounded-[2px] border border-hairline bg-canvas/85 px-2.5 py-1.5 backdrop-blur-xs">
            <div className="text-xs font-medium text-ink">{activeMeta.title}</div>
            <div className="font-mono text-[10px] text-ink-muted">
              {activeMeta.spec}
            </div>
          </div>

          {/* Angle Readout Overlay */}
          <div className="pointer-events-none absolute top-3 right-3.5 z-10 rounded-[2px] border border-hairline bg-canvas/85 px-2 py-1 font-mono text-[10px] text-ink-secondary backdrop-blur-xs">
            θ {angleReadout.yaw}° · φ {angleReadout.pitch}°
          </div>

          <canvas
            id="spatial-cad-canvas"
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            aria-label={activeMeta.title}
            className="h-full w-full cursor-grab touch-none active:cursor-grabbing"
          />
        </div>

        {/* Bottom Parametric & Camera Control Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline bg-recessed px-3.5 py-2.5 font-mono text-[11px]">
          <label
            htmlFor="cad-extrude-slider"
            className="flex items-center gap-2.5 text-ink-secondary"
          >
            <span className="text-[10px] tracking-wider text-ink-muted uppercase">
              {vpCopy.explodeLabel}
            </span>
            <input
              id="cad-extrude-slider"
              type="range"
              min={0.5}
              max={1.55}
              step={0.05}
              value={extrude}
              onChange={(e) => setExtrude(Number(e.target.value))}
              className="h-1.5 w-24 cursor-pointer accent-[var(--accent-primary)] sm:w-28"
            />
            <span className="w-9 text-right text-[10px] text-accent">
              {extrude.toFixed(2)}×
            </span>
          </label>

          <div className="flex items-center gap-1.5">
            <div className="flex rounded-[2px] border border-hairline bg-panel p-0.5 text-[10px]">
              {(["iso", "persp"] as const).map((pMode) => (
                <button
                  key={pMode}
                  id={`cad-proj-${pMode}`}
                  type="button"
                  onClick={() => setProjection(pMode)}
                  className={`cursor-pointer rounded-[1px] px-2 py-0.5 uppercase transition-colors ${
                    projection === pMode
                      ? "bg-accent text-ink-inverse font-semibold"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {pMode === "iso" ? vpCopy.orthoLabel : vpCopy.perspLabel}
                </button>
              ))}
            </div>

            <button
              id="cad-reset-btn"
              type="button"
              onClick={resetAxes}
              title={vpCopy.resetView}
              aria-label={vpCopy.resetView}
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-[2px] border border-hairline bg-panel text-ink-secondary transition-colors hover:border-hairline-strong hover:text-ink"
            >
              <RotateCcw className="h-3 w-3" />
            </button>
          </div>
        </div>
      </SpecCard>
    </div>
  );
}
