import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const CircularProgress = ({ percent }) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let frame = 0;
    const duration = 5000;
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animate = () => {
      frame++;
      const progress = easeOutCubic(frame / totalFrames);
      const value = Math.min(Math.round(progress * percent), percent);
      setAnimatedPercent(value);

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [hasAnimated, percent]);

  return (
    <div className="relative size-16" ref={circleRef}>
      <svg
        className="size-full -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-200 dark:text-neutral-700"
          strokeWidth="2"
        />
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-blue-600 dark:text-blue-500"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={100 - animatedPercent}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="text-center text-xs font-bold text-blue-600 dark:text-blue-500">
          {animatedPercent}%
        </span>
      </div>
    </div>
  );
};

export default CircularProgress;
CircularProgress.propTypes = {
  percent: PropTypes.number.isRequired,
};