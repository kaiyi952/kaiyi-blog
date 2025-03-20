import { keyframes } from "@emotion/react";
import { styled } from "@mui/material";
import React from "react";

const DEFAULT_COLOR = '#FFC700';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

const generateSparkle = (color: string) => ({
  id: String(random(10000, 99999)),
  createdAt: Date.now(),
  color,
  size: random(10, 20),
  style: {
    top: `${random(0, 100)}%`,
    left: `${random(0, 100)}%`,
  },
});

const range = (count: number) => Array.from({ length: count }, (_, i) => i);

const usePrefersReducedMotion = () => {
  const QUERY = '(prefers-reduced-motion: no-preference)';
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(
    typeof window === 'undefined' ? true : !window.matchMedia(QUERY).matches
  );

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event: MediaQueryListEvent) => setPrefersReducedMotion(!event.matches);

    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
};

// 随机时间间隔 Hook
const useRandomInterval = (callback: () => void, minDelay: number | null, maxDelay: number | null) => {
  const timeoutId = React.useRef<number | null>(null);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (minDelay === null || maxDelay === null) return;

    const handleTick = () => {
      const nextTickAt = random(minDelay, maxDelay);
      timeoutId.current = window.setTimeout(() => {
        savedCallback.current();
        handleTick();
      }, nextTickAt);
    };

    handleTick();
    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, [minDelay, maxDelay]);
};

const Sparkles: React.FC<{ color?: string; children?: React.ReactNode }> = ({ color = DEFAULT_COLOR, children, ...delegated }) => {
  const [sparkles, setSparkles] = React.useState(() => range(3).map(() => generateSparkle(color)));
  const prefersReducedMotion = usePrefersReducedMotion();

  useRandomInterval(() => {
    const sparkle = generateSparkle(color);
    const now = Date.now();

    setSparkles(prevSparkles => [...prevSparkles.filter(sp => now - sp.createdAt < 750), sparkle]);
  }, prefersReducedMotion ? null : 50, prefersReducedMotion ? null : 450);

  return (
    <Wrapper {...delegated}>
      {sparkles.map(sparkle => (
        <Sparkle key={sparkle.id} color={sparkle.color} size={sparkle.size} style={sparkle.style} />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

// 单个闪光组件
const Sparkle: React.FC<{ size: number; color: string; style: React.CSSProperties }> = ({ size, color, style }) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';

  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  );
};

const comeInOut = keyframes`
  0% { transform: scale(0); }
  50% { transform: scale(1); }
  100% { transform: scale(0); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
`;

const Wrapper = styled("span")`
  display: inline-block;
  position: relative;
`;

const SparkleWrapper = styled("span")`
  position: absolute;
  display: block;
  animation: ${comeInOut} 700ms forwards;
`;

const SparkleSvg = styled("svg")`
  display: block;
  animation: ${spin} 1000ms linear;
`;

const ChildWrapper = styled("strong")`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

export default Sparkles;
