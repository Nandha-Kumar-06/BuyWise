import React, { useEffect, useState } from 'react';

export default function CustomCursor({ enabled = true }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-out rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-[1px] hidden lg:block"
      style={{
        transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
        width: '32px',
        height: '32px',
      }}
    />
  );
}
