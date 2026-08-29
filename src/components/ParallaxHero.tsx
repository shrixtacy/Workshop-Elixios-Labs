"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import ZoomedHero from "@/components/ZoomedHero";

// ---- fg-desk.png natural dimensions ----
const FG_NATURAL_W = 2014;
const FG_NATURAL_H = 780;

// ---- CRT screen bounding box within fg-desk.png (as fractions of the natural image) ----
// These map the CRT monitor glass area in the original 1920x819 image.
// Tuned to match the reference screenshot (last image the user provided).
const CRT_LEFT_FRAC = 0.386;
const CRT_TOP_FRAC = 0.11;
const CRT_WIDTH_FRAC = 0.218;
const CRT_HEIGHT_FRAC = 0.35;

/**
 * Compute the actual rendered bounds of an `object-contain object-bottom` image
 * inside its container.
 */
function getRenderedImageBounds(
  containerW: number,
  containerH: number,
  imgW: number,
  imgH: number
) {
  const scale = Math.min(containerW / imgW, containerH / imgH);
  const renderedW = imgW * scale;
  const renderedH = imgH * scale;
  const renderedLeft = (containerW - renderedW) / 2; // centered horizontally
  const renderedTop = containerH - renderedH; // anchored to bottom
  return { renderedLeft, renderedTop, renderedW, renderedH };
}

export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // DOM refs for direct manipulation (no React re-renders)
  const zoomWrapperRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const lightLayerRef = useRef<HTMLDivElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const fgLayerRef = useRef<HTMLDivElement>(null);
  const scanlinesRef = useRef<HTMLDivElement>(null);
  const secondaryHeroRef = useRef<HTMLDivElement>(null);

  // CRT overlay ref — positioned dynamically
  const crtOverlayRef = useRef<HTMLDivElement>(null);
  // Container that holds the fg-desk image (for ResizeObserver)
  const fgContainerRef = useRef<HTMLDivElement>(null);

  // Animation state refs (never trigger re-renders)
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);
  const zoomTargetRef = useRef(0);
  const zoomCurrentRef = useRef(0);
  const isZoomLockedRef = useRef(false);

  const sensitivity = 1;

  // --- Dynamic CRT positioning ---
  const updateCrtPosition = useCallback(() => {
    const container = fgContainerRef.current;
    const crt = crtOverlayRef.current;
    if (!container || !crt) return;

    const containerW = container.clientWidth;
    const containerH = container.clientHeight;

    const { renderedLeft, renderedTop, renderedW, renderedH } =
      getRenderedImageBounds(containerW, containerH, FG_NATURAL_W, FG_NATURAL_H);

    // Position CRT overlay relative to the actual rendered image
    const screenW = CRT_WIDTH_FRAC * renderedW;
    crt.style.left = `${renderedLeft + CRT_LEFT_FRAC * renderedW}px`;
    crt.style.top = `${renderedTop + CRT_TOP_FRAC * renderedH}px`;
    crt.style.width = `${screenW}px`;
    crt.style.height = `${CRT_HEIGHT_FRAC * renderedH}px`;
    crt.style.borderRadius = `${0.08 * screenW}px`;
  }, []);

  // Memoized update function that writes directly to DOM
  const updateDOM = useCallback(() => {
    const x = currentRef.current.x;
    const y = currentRef.current.y;
    const sp = zoomCurrentRef.current;
    const mult = sensitivity;

    // Reduce parallax as we zoom in
    const parallaxDampen = Math.max(0, 1 - sp * 2.5);

    // Background displacement
    const bgTranslateX = -x * 20 * mult * parallaxDampen;
    const bgTranslateY = -y * 15 * mult * parallaxDampen;
    const bgScale = 1.08;

    // Foreground displacement
    const fgTranslateX = x * 32 * mult * parallaxDampen;
    const fgTranslateY = y * 24 * mult * parallaxDampen;
    const fgRotateY = x * 6 * mult * parallaxDampen;
    const fgRotateX = -y * 5 * mult * parallaxDampen;

    // Text parallax
    const textTranslateX = x * 10 * mult * parallaxDampen;
    const textTranslateY = y * 8 * mult * parallaxDampen;

    // Lighting
    const lightX = 50 + x * 35;
    const lightY = 50 + y * 35;

    // ---- ZOOM INTO CRT ----
    const zoomOriginX = 50.0;
    const zoomOriginY = 32.5;

    // Ease-in-out curve
    const eased =
      sp < 0.5 ? 2 * sp * sp : 1 - Math.pow(-2 * sp + 2, 2) / 2;

    const zoomScale = 1 + eased * 7;

    // Scene fades out, secondary hero fades in
    const sceneOpacity = sp > 0.75 ? Math.max(0, 1 - (sp - 0.75) / 0.2) : 1;
    const heroOpacity = sp > 0.65 ? Math.min(1, (sp - 0.65) / 0.25) : 0;

    // VHS intensity
    const vhsIntensity = Math.min(1, sp * 2);

    // --- Write directly to DOM ---
    if (zoomWrapperRef.current) {
      zoomWrapperRef.current.style.transform = `scale(${zoomScale})`;
      zoomWrapperRef.current.style.transformOrigin = `${zoomOriginX}% ${zoomOriginY}%`;
      zoomWrapperRef.current.style.opacity = String(sceneOpacity);
    }

    if (bgLayerRef.current) {
      bgLayerRef.current.style.transform = `translate3d(${bgTranslateX}px, ${bgTranslateY}px, 0px) scale(${bgScale})`;
    }

    if (lightLayerRef.current) {
      lightLayerRef.current.style.background = `radial-gradient(circle 500px at ${lightX}% ${lightY}%, rgba(255, 180, 100, 0.08), transparent 70%)`;
    }

    if (textLayerRef.current) {
      textLayerRef.current.style.transform = `translate3d(${textTranslateX}px, ${textTranslateY}px, 0px)`;
    }

    if (fgLayerRef.current) {
      fgLayerRef.current.style.transform = `translate3d(${fgTranslateX}px, ${fgTranslateY}px, 0px) rotateX(${fgRotateX}deg) rotateY(${fgRotateY}deg)`;
    }

    if (scanlinesRef.current) {
      scanlinesRef.current.style.opacity = String(0.7 + vhsIntensity * 0.3);
    }

    if (secondaryHeroRef.current) {
      secondaryHeroRef.current.style.opacity = String(heroOpacity);
      secondaryHeroRef.current.style.pointerEvents =
        heroOpacity > 0.5 ? "auto" : "none";
    }

    // Toggle scrollbar and notify header based on zoom level
    if (typeof document !== "undefined") {
      const isMobile = window.innerWidth < 768;
      const isZoomed = sp >= 0.85 || isZoomLockedRef.current || isMobile;

      if (!isZoomed) {
        document.documentElement.classList.add("no-scrollbar");
        document.body.classList.add("no-scrollbar");
        window.dispatchEvent(new CustomEvent("hero-zoom-status", { detail: { isZoomed: false } }));
      } else {
        document.documentElement.classList.remove("no-scrollbar");
        document.body.classList.remove("no-scrollbar");
        window.dispatchEvent(new CustomEvent("hero-zoom-status", { detail: { isZoomed: true } }));
      }
    }
  }, []);

  // --- ResizeObserver for CRT tracking ---
  useEffect(() => {
    const container = fgContainerRef.current;
    if (!container) return;

    // Initial position
    updateCrtPosition();

    const observer = new ResizeObserver(() => {
      updateCrtPosition();
    });
    observer.observe(container);

    // Also recalculate on window resize (covers zoom, orientation change, etc.)
    window.addEventListener("resize", updateCrtPosition);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateCrtPosition);
    };
  }, [updateCrtPosition]);

  // --- Main animation + event listeners ---
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const nx = (e.clientX - width / 2) / (width / 2);
      const ny = (e.clientY - height / 2) / (height / 2);
      targetRef.current = {
        x: Math.max(-1, Math.min(1, nx)),
        y: Math.max(-1, Math.min(1, ny)),
      };
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    // --- Mobile Gyroscope Sensor (DeviceOrientation) ---
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        // gamma: left/right tilt [-90, 90]
        // beta: front/back tilt [-180, 180], centered at holding angle ~45 deg
        const nx = Math.max(-1, Math.min(1, e.gamma / 25));
        const ny = Math.max(-1, Math.min(1, (e.beta - 45) / 25));
        targetRef.current = { x: nx, y: ny };
      }
    };

    // --- Touch Motion Parallax for Mobile ---
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const width = window.innerWidth;
        const height = window.innerHeight;
        const nx = (touch.clientX - width / 2) / (width / 2);
        const ny = (touch.clientY - height / 2) / (height / 2);
        targetRef.current = {
          x: Math.max(-1, Math.min(1, nx)),
          y: Math.max(-1, Math.min(1, ny)),
        };
      }
    };

    // --- iOS 13+ Gyroscope Permission Request on first touch ---
    const requestGyroPermission = async () => {
      if (
        typeof DeviceOrientationEvent !== "undefined" &&
        // @ts-expect-error - iOS specific permission API
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        try {
          // @ts-expect-error - iOS specific permission API
          const permissionState = await DeviceOrientationEvent.requestPermission();
          if (permissionState === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        } catch (err) {
          console.error("Gyroscope permission error:", err);
        }
      }
    };

    // Capture wheel events for initial zoom; lock at 1 permanently once fully zoomed in
    const handleWheel = (e: WheelEvent) => {
      // On mobile screens (< 768px), disable zoom transition so touch scroll flows naturally to all sections
      if (window.innerWidth < 768 || isZoomLockedRef.current) return;

      if (e.deltaY > 0 && zoomTargetRef.current < 1) {
        e.preventDefault();
        const delta = e.deltaY / 1200;
        const newZoom = Math.min(1, zoomTargetRef.current + delta);
        zoomTargetRef.current = newZoom;
        if (newZoom >= 0.98) {
          isZoomLockedRef.current = true;
          zoomTargetRef.current = 1;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", requestGyroPermission, { once: true });

    if (
      window.DeviceOrientationEvent &&
      // @ts-expect-error - iOS specific permission API
      typeof DeviceOrientationEvent.requestPermission !== "function"
    ) {
      // Standard Android / non-iOS device orientation
      window.addEventListener("deviceorientation", handleOrientation);
    }

    // Unified RAF loop — no setState, pure DOM writes
    const loop = () => {
      const mouseLerp = 0.07;
      currentRef.current.x +=
        (targetRef.current.x - currentRef.current.x) * mouseLerp;
      currentRef.current.y +=
        (targetRef.current.y - currentRef.current.y) * mouseLerp;

      const zoomLerp = 0.06;
      zoomCurrentRef.current +=
        (zoomTargetRef.current - zoomCurrentRef.current) * zoomLerp;

      updateDOM();

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      if (window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
      if (typeof document !== "undefined") {
        document.documentElement.classList.remove("no-scrollbar");
        document.body.classList.remove("no-scrollbar");
      }
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [updateDOM]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-zinc-950 select-none font-sans"
    >
      {/* Zoom wrapper — scales toward the CRT screen center */}
      <div
        ref={zoomWrapperRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: "scale(1)",
          transformOrigin: "50.0% 32.5%",
          backfaceVisibility: "hidden",
        }}
      >
        {/* 1. BACKGROUND LAYER */}
        <div
          ref={bgLayerRef}
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{
            transform: "translate3d(0px, 0px, 0px) scale(1.08)",
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src="/images/bg-office.png"
            alt="Office Background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center brightness-90 contrast-105"
          />
          <div
            className="absolute inset-0"
            style={{ boxShadow: "inset 0 0 120px 30px rgba(0,0,0,0.35)" }}
          />
        </div>

        {/* 2. DYNAMIC MOUSE LIGHTING */}
        <div
          ref={lightLayerRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle 500px at 50% 50%, rgba(255, 180, 100, 0.08), transparent 70%)",
          }}
        />

        {/* 3. TEXT LAYER — Desktop (Elixios Labs) & Mobile (Elixios Space + Subtext) */}
        <div
          ref={textLayerRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform px-2"
          style={{
            transform: "translate3d(0px, 0px, 0px)",
            marginTop: "-28vh",
            backfaceVisibility: "hidden",
          }}
        >
          {/* DESKTOP VIEW — 100% UNTOUCHED */}
          <h1
            className="hidden sm:flex items-baseline justify-center gap-4 md:gap-6 select-none"
            style={{ color: "#d4c5a9" }}
          >
            <span
              className="text-7xl md:text-[11rem] lg:text-[14rem] font-light tracking-[0.04em] uppercase"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              Elixios
            </span>
            <span
              className="text-7xl md:text-[11rem] lg:text-[14rem] italic font-normal tracking-wide"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Labs
            </span>
          </h1>

          {/* MOBILE ONLY VIEW — Elixios Space + Pushed Up + Subtext */}
          <div className="flex sm:hidden flex-col items-center text-center -translate-y-16 px-4">
            <h1
              className="flex items-baseline justify-center gap-2 select-none mb-1.5"
              style={{ color: "#d4c5a9" }}
            >
              <span
                className="text-5xl font-light tracking-[0.04em] uppercase"
                style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
              >
                Elixios
              </span>
              <span
                className="text-5xl italic font-normal tracking-wide"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Space
              </span>
            </h1>
            <p 
              className="text-xs text-[#d4c5a9] opacity-90 max-w-[280px] leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              A room for people who want to learn, build, and master modern tech.
            </p>
          </div>
        </div>

        {/* 4. FOREGROUND LAYER (Computer Desk Cutout) */}
        <div
          ref={fgLayerRef}
          className="absolute bottom-0 left-0 right-0 w-full h-full flex items-end justify-center pointer-events-none will-change-transform z-20"
          style={{
            transformStyle: "preserve-3d",
            transform:
              "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div
            ref={fgContainerRef}
            className="relative w-full h-full max-w-full scale-[3.4] sm:scale-[2.4] md:scale-[1.25] origin-bottom translate-y-[32px] sm:translate-y-[25px] md:translate-y-[18px]"
          >
            <Image
              src="/images/fg-desk.png"
              alt="Vintage Computer Desk Setup Cutout"
              fill
              sizes="100vw"
              priority
              unoptimized
              style={{ objectFit: "contain", objectPosition: "bottom" }}
              className="drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
            />

            {/* ===== CRT SCREEN CONTENT ===== */}
            {/* Positioned dynamically via ResizeObserver to track the rendered image */}
            <div
              ref={crtOverlayRef}
              className="absolute overflow-hidden"
              style={{
                borderRadius: "6px",
                /* Initial values — will be overwritten by updateCrtPosition */
                left: "38.6%",
                top: "10%",
                width: "21.8%",
                height: "35%",
              }}
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/hero-new-bg.png"
                  alt="Secondary Hero Preview"
                  fill
                  sizes="(max-width: 768px) 30vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ SECONDARY HERO ============ */}
      <div
        ref={secondaryHeroRef}
        className="absolute inset-0 z-30"
        style={{
          opacity: 0,
          pointerEvents: "none",
          willChange: "opacity",
        }}
      >
        <ZoomedHero />
      </div>
    </div>
  );
}
