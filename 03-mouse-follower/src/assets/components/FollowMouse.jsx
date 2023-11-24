import { useState, useEffect } from "react";

export function FollowMouse() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0.8);

  useEffect(() => {
    if (enabled === false) {
      setOpacity(0);
    } else {
      setOpacity(0.8);
    }
  }, [enabled]);

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    //cleanup:
    //--> cuando el componente se desmonta
    //--> cuando cambian las dependencias, antes de ejecutar
    //    el efecto de nuevo
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09F",
          borderRadius: "50%",
          opacity: opacity,
          pointerEvents: "none",
          top: -20,
          left: -20,
          width: "40px",
          height: "40px",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
}
