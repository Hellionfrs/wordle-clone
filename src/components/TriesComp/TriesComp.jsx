import clsx from "clsx";
import { useEffect, useState } from "react";

export default function TriesComp({ triesRemaining }) {
  console.log("rendering Triescomp");
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    // Cambiar el estado de animate para forzar la reinicialización de la animación
    setAnimate(true);

    // Desactivar la animación después de un corto período para permitir la reproducción
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 500); // Duración de la animación (0.5 segundos)

    return () => clearTimeout(timeout);
  }, [triesRemaining]);
  return (
    <span className={clsx(animate ? "animate-letter-fade" : "")}>
      {triesRemaining}
    </span>
  );
}
