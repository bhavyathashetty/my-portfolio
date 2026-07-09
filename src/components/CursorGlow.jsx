import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!canHover) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsActive(true);
    };

    const handlePointerLeave = () => {
      setIsActive(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      className={`cursor-glow ${isActive ? "active" : ""}`}
      style={{ "--cursor-x": `${position.x}px`, "--cursor-y": `${position.y}px` }}
      aria-hidden="true"
    />
  );
};

export default CursorGlow;
