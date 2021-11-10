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
  // const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [lights, setLights] = useState<{ draw: () => void }[]>([]);
  // var isMouseDown = false;
  const [isMouseDown, setIsMouseDown] = useState(false);

  // const animate = useCallback(, [ctx, isMouseDown, lights]);

  // let lightParticles: ReturnType<typeof LightParticle>[] = [];
  // const initializeParticles = useCallback(, []);

  console.log(lights);
  const animate = useCallback(() => {
    window.requestAnimationFrame(animate);
    const ctx = canvasRef.current?.getContext("2d");
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
      ctx.translate(canvasRef.current.width / 2, canvasRef.current.height / 2);
      ctx.rotate(option.timer);

      for (let i = 0; i < lights.length; i++) {
        lights[i].draw();
      }

      ctx.restore();
    }
  }, [lights]);
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
    const LightParticle = (
      x: number,
      y: number,
      radius: number,
      color: typeof colors[number]
    ) => {
      const option = {
        x,
        y,
        radius,
        color,
      };
      function draw() {
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          // window.addEventListener("mousedown", handleMouseDown);
          console.log("그린다");
          ctx.save();
          ctx.beginPath();
          ctx.arc(option.x, option.y, option.radius, 0, Math.PI * 2, false);
          ctx.shadowColor = option.color;
          ctx.shadowBlur = 15;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.fillStyle = option.color;
          ctx.fill();
          ctx.closePath();
          ctx.restore();
        }
      }
      return { draw };
    };
    const lightParticles: ReturnType<typeof LightParticle>[] = [];
    if (canvasRef.current) {
      for (let i = 0; i < particleCount; i++) {
        const randomColorIndex = Math.floor(Math.random() * 6);
        const randomRadius = Math.random() * 2;
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
  }, []);
  useEffect(() => {
    const handleMouseDown = () => {
      setIsMouseDown(true);
    };
    const handleMouseUp = () => {
      setIsMouseDown(false);
    };
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("resize", handleResize);
    }
    animate();
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);
    };
  }, [animate]);

  // window.addEventListener("mousemove", function (event) {
  //   mouse.x = event.clientX - canvas.width / 2;
  //   mouse.y = event.clientY - canvas.height / 2;
  // });

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default HomeView;
