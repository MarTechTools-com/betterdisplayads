"use client";
import { useEffect, useRef } from "react";

export function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const ctxMaybe = canvasEl.getContext("2d");
    if (!ctxMaybe) return;

    // Capture as non-nullable so TypeScript allows use inside closures
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = ctxMaybe;

    let W = window.innerWidth;
    let RAF = 0;
    let t = 0;
    const gridOpacity = 69;
    const nodeSize = 1.5;
    const COLS = 24;
    const ROWS = 32;
    const FLOW_SPEED = 0.0004;

    function getCanvasH() {
      return Math.max(document.body.scrollHeight, window.innerHeight);
    }

    function project(gx: number, gy: number, gz: number, vpY: number) {
      const fov = 1.1;
      const z = Math.max(0.001, 1 - gz);
      const scale = fov / z;
      const sx = W / 2 + gx * scale * W * 0.52;
      const sy = vpY + gy * scale * window.innerHeight * 0.55;
      return { sx, sy };
    }

    function drawGrid(vpY: number, alpha: number) {
      const base = (gridOpacity / 100) * alpha;
      if (base <= 0) return;

      for (let r = 0; r <= ROWS; r++) {
        let gz = (r / ROWS + t) % 1;
        gz = Math.pow(gz, 1.6);
        const gy = -0.02;
        const left = project(-1, gy, gz, vpY);
        const right = project(1, gy, gz, vpY);
        const lineFade = Math.pow(gz, 0.5) * base * 0.9;
        if (lineFade < 0.003) continue;
        ctx.beginPath();
        ctx.moveTo(left.sx, left.sy);
        ctx.lineTo(right.sx, right.sy);
        ctx.strokeStyle = `rgba(14,165,233,${lineFade})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      for (let c = 0; c <= COLS; c++) {
        const gx = (c / COLS) * 2 - 1;
        const top = project(gx, -0.02, 0.001, vpY);
        const bottom = project(gx, -0.02, 1.0, vpY);
        const edgeFade = Math.pow(1 - Math.abs(gx) * 0.7, 1.5);
        const lineFade = base * edgeFade * 0.75;
        if (lineFade < 0.003) continue;
        ctx.beginPath();
        ctx.moveTo(top.sx, top.sy);
        ctx.lineTo(bottom.sx, bottom.sy);
        ctx.strokeStyle = `rgba(14,165,233,${lineFade})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      for (let r = 0; r <= ROWS; r++) {
        let gz = (r / ROWS + t) % 1;
        gz = Math.pow(gz, 1.6);
        if (gz < 0.3) continue;
        for (let c = 0; c <= COLS; c += 3) {
          const gx = (c / COLS) * 2 - 1;
          const pt = project(gx, -0.02, gz, vpY);
          const dotFade =
            Math.pow(gz, 0.8) *
            base *
            0.8 *
            Math.pow(1 - Math.abs(gx) * 0.8, 2);
          if (dotFade < 0.01) continue;
          const r2 = nodeSize * gz * 1.2;
          ctx.beginPath();
          ctx.arc(pt.sx, pt.sy, Math.max(0.5, r2), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(14,165,233,${dotFade})`;
          ctx.fill();
        }
      }
    }

    function tick() {
      const docH = getCanvasH();
      if (canvas.height !== docH) canvas.height = docH;
      if (canvas.width !== window.innerWidth) {
        canvas.width = window.innerWidth;
        W = canvas.width;
      }

      ctx.clearRect(0, 0, W, canvas.height);
      t += FLOW_SPEED;

      const scrollY = window.scrollY || 0;
      const vH = window.innerHeight;
      const tileCount = Math.ceil(docH / vH) + 1;

      for (let i = 0; i < tileCount; i++) {
        const tileTop = i * vH;
        const horizonY = tileTop + vH * 0.42;
        const tileCenterY = tileTop + vH * 0.5;
        const viewDist = Math.abs(tileCenterY - scrollY - vH * 0.5);
        const viewFade = Math.max(0, 1 - viewDist / (vH * 1.1));
        if (viewFade < 0.01) continue;
        drawGrid(horizonY, viewFade);
      }

      RAF = requestAnimationFrame(tick);
    }

    function start() {
      W = window.innerWidth;
      canvas.width = W;
      canvas.height = getCanvasH();
      cancelAnimationFrame(RAF);
      tick();
    }

    window.addEventListener("resize", start);
    start();

    return () => {
      window.removeEventListener("resize", start);
      cancelAnimationFrame(RAF);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
