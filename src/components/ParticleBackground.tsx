"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    let mouse = {
      x: -1000,
      y: -1000,
      radius: (canvas.height / 80) * (canvas.width / 80),
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.radius = (canvas.height / 80) * (canvas.width / 80);
      if (particles.length === 0) initParticles();
    };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
      mouseReactionSpeed: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.directionX = Math.random() * 2 - 1;
        this.directionY = Math.random() * 2 - 1;
        this.size = Math.random() * 1.5 + 0.5;
        this.color = "rgba(249, 115, 22, 0.12)";
        this.mouseReactionSpeed = 1;
      }

      update() {
        if (this.x > (canvas?.width || 0) || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > (canvas?.height || 0) || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse interaction
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius + this.size) {
          if (
            mouse.x < this.x &&
            this.x < (canvas?.width || 0) - this.size * 10
          ) {
            this.x += this.mouseReactionSpeed / Math.sqrt(distance);
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= this.mouseReactionSpeed / Math.sqrt(distance);
          }
          if (
            mouse.y < this.y &&
            this.y < (canvas?.height || 0) - this.size * 10
          ) {
            this.y += this.mouseReactionSpeed / Math.sqrt(distance);
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= this.mouseReactionSpeed / Math.sqrt(distance);
          }
        }

        this.x += this.directionX * 0.15;
        this.y += this.directionY * 0.15;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 6000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            (particles[a].x - particles[b].x) *
              (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) *
              (particles[a].y - particles[b].y);

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            let opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = `rgba(249, 115, 22, ${opacityValue * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Using transform3d forces hardware acceleration
      if (canvasRef.current) {
        const scrollY = window.scrollY;
        canvasRef.current.style.transform = `translate3d(0, ${scrollY * 0.5}px, 0)`;
      }

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connect();
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 bg-transparent"
      style={{ willChange: "transform" }}
    />
  );
}
