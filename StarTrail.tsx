import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

const StarTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastSpawnTime = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas =  () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create a new particle
    const createParticle = (x: number, y: number): Particle => {
      const colors = [
        'rgba(94, 234, 212, 1)',   // teal-300
        'rgba(45, 212, 191, 1)',   // teal-400
        'rgba(20, 184, 166, 1)',   // teal-500
        'rgba(153, 246, 228, 1)',  // teal-200
        'rgba(204, 251, 241, 1)',  // teal-100
      ];

      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.5 + 0.2;

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 0.5, // Slight downward bias for falling effect
        life: 1,
        maxLife: Math.random() * 60 + 40,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
      };
    };

    // Draw a star shape
    const drawStar = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      radius: number,
      rotation: number,
      alpha: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = alpha;

      ctx.beginPath();

      // Draw a 4-pointed star
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        const outerX = Math.cos(angle) * radius;
        const outerY = Math.sin(angle) * radius;
        const innerX = Math.cos(angle + Math.PI / 4) * (radius * 0.4);
        const innerY = Math.sin(angle + Math.PI / 4) * (radius * 0.4);

        if (i === 0) {
          ctx.moveTo(outerX, outerY);
        } else {
          ctx.lineTo(outerX, outerY);
        }
        ctx.lineTo(innerX, innerY);
      }

      ctx.closePath();
      ctx.fill();

      // Add glow effect
      ctx.shadowBlur = 10;
      ctx.shadowColor = ctx.fillStyle as string;
      ctx.fill();

      ctx.restore();
    };

    // Animation loop
    const animate = (currentTime: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new particles on mouse move (throttled)
      if (currentTime - lastSpawnTime.current > 20) {
        particlesRef.current.push(createParticle(mouseRef.current.x, mouseRef.current.y));
        lastSpawnTime.current = currentTime;
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Update life
        particle.life -= 1 / particle.maxLife;

        // Draw particle
        if (particle.life > 0) {
          const alpha = Math.max(0, particle.life);
          ctx.fillStyle = particle.color.replace('1)', `${alpha})`);

          drawStar(ctx, particle.x, particle.y, particle.size, particle.rotation, alpha);

          return true;
        }
        return false;
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default StarTrail;

