import React, { useEffect, useRef } from 'react';

interface FloatingShape {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  angle: number;
  color: string;
  type: 'circle' | 'square' | 'triangle';
}

const FloatingShapes: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<FloatingShape[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize shapes
    const colors = [
      'rgba(94, 234, 212, 0.03)',   // teal-300
      'rgba(45, 212, 191, 0.04)',   // teal-400
      'rgba(59, 130, 246, 0.03)',   // blue-500
      'rgba(147, 51, 234, 0.02)',   // purple-600
    ];

    const types: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];

    for (let i = 0; i < 15; i++) {
      shapesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 30,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        angle: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)],
      });
    }

    // Draw shapes
    const drawShape = (shape: FloatingShape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.angle);
      ctx.globalAlpha = shape.opacity;
      ctx.fillStyle = shape.color;
      ctx.strokeStyle = shape.color.replace(/[\d.]+\)/, '0.1)');
      ctx.lineWidth = 2;

      switch (shape.type) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          break;
        case 'square':
          ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
          ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.lineTo(-shape.size / 2, shape.size / 2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          break;
      }

      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapesRef.current.forEach(shape => {
        // Move shape
        shape.y -= shape.speed;
        shape.angle += 0.001;

        // Reset if off screen
        if (shape.y + shape.size < 0) {
          shape.y = canvas.height + shape.size;
          shape.x = Math.random() * canvas.width;
        }

        drawShape(shape);
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default FloatingShapes;

