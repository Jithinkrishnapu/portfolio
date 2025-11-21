"use client";
import { useState, useRef, useEffect } from "react";

export default function FloatingAIButton() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 20, y: 80 }); // default bottom-right
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handlePointerDown = (e: any) => {
    setDragging(true);
    const rect = buttonRef.current?.getBoundingClientRect();
    setOffset({
      x: e.clientX - (rect?.left || 0),
      y: e.clientY - (rect?.top || 0),
    });
  };

  const handlePointerMove = (e: any) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handlePointerUp = () => setDragging(false);

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  });

  return (
    <div
      ref={buttonRef}
      onPointerDown={handlePointerDown}
      className="ai-btn sparkle-container"
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        zIndex: 9999,
        cursor: "grab",
      }}
    >
      <a
        href="https://ai.jithinkrishna.com"
        target="_blank"
        className="ai-btn-inner"
      >
        Ask AI
        <span className="sparkle-icon">✨</span>
      </a>
    </div>
  );
}
