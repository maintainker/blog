import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const particleCount = 750;
const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};
const option = {
  timer: 0,
  opacity: 1,
  speed: 0.0005,
};
const colors = ["#0952BD", "#A5BFF0", "#118CD6", "#1AAEE8", "#F2E8C9"] as const;

const HomeView: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [lights, setLights] = useState<{ draw: () => void }[]>([]);
  // var isMouseDown = false;
  const [isMouseDown, setIsMouseDown] = useState(false);

  // const animate = useCallback(, [ctx, isMouseDown, lights]);

  // let lightParticles: ReturnType<typeof LightParticle>[] = [];
  const initializeParticles = useCallback(() => {
    const LightParticle = (
      x: number,
      y: number,
      radius: number,
      color: typeof colors[number]
    ) => {
      const draw = () => {
        if (ctx) {
          console.log("그린다");
          ctx.save();
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2, false);
          ctx.shadowColor = color;
          ctx.shadowBlur = 15;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.fillStyle = color;
          ctx.fill();
          ctx.closePath();
          ctx.restore();
        }
      };
      return { draw };
    };
    const lightParticles: ReturnType<typeof LightParticle>[] = [];
    if (canvasRef.current) {
      for (let i = 0; i < particleCount; i++) {
        const randomColorIndex = Math.floor(Math.random() * 6);
        const randomRadius = Math.random() * 2;

        // Ensure particles are spawned past screen width and height so
        // there will be no missing stars when rotating canvas
        const x =
          Math.random() * (canvasRef.current.width + 200) -
          (canvasRef.current.width + 200) / 2;
        const y =
          Math.random() * (canvasRef.current.width + 200) -
          (canvasRef.current.width + 200) / 2;
        lightParticles.push(
          LightParticle(x, y, randomRadius, colors[randomColorIndex])
        );
      }
    }
    setLights(lightParticles);
  }, [ctx]);
  useEffect(() => {
    const handleMouseDown = () => {
      setIsMouseDown(true);
    };
    const handleMouseUp = () => {
      setIsMouseDown(false);
    };
    if (canvasRef.current) {
      console.log("setCTs");
      if (!ctx) setCtx(canvasRef.current.getContext("2d"));
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      window.addEventListener("mousedown", handleMouseDown);

      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (ctx) {
      const animate = () => {
        window.requestAnimationFrame(animate);
        console.log(ctx);
        if (ctx && canvasRef.current) {
          ctx.save();
          if (isMouseDown === true) {
            // Ease into the new opacity
            const desiredOpacity = 0.01;
            option.opacity += (desiredOpacity - option.opacity) * 0.03;
            ctx.fillStyle = "rgba(18, 18, 18," + option.opacity + ")";

            // Ease into the new speed
            const desiredSpeed = 0.012;
            option.speed += (desiredSpeed - option.speed) * 0.01;
            option.timer += option.speed;
          } else {
            // Ease back to the original opacity
            const originalOpacity = 1;
            option.opacity += (originalOpacity - option.opacity) * 0.01;
            ctx.fillStyle = "rgba(18, 18, 18, " + option.opacity + ")";

            // Ease back to the original speed
            const originalSpeed = 0.001;
            option.speed += (originalSpeed - option.speed) * 0.01;
            option.timer += option.speed;
          }

          ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          ctx.translate(
            canvasRef.current.width / 2,
            canvasRef.current.height / 2
          );
          ctx.rotate(option.timer);

          for (let i = 0; i < lights.length; i++) {
            lights[i].draw();
          }

          ctx.restore();
        }
      };
      // animate();
    }
  }, [ctx]);
  console.log(ctx);
  // window.addEventListener("mousemove", function (event) {
  //   mouse.x = event.clientX - canvas.width / 2;
  //   mouse.y = event.clientY - canvas.height / 2;
  // });

  // window.addEventListener("resize", function () {
  //   if (canvasRef.current) {
  //     canvasRef.current.width = window.innerWidth;
  //     canvasRef.current.height = window.innerHeight;
  //     initializeParticles();
  //   }
  // });

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default HomeView;
