import { useEffect, useRef, useState, RefObject } from "react";
import { motion } from "framer-motion";
import "./TrueFocus.css";

interface TrueFocusProps {
  sentence?: string;
  skippedWord?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = "True Focus",
  skippedWord = " ",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const containerRef: RefObject<HTMLDivElement | null> = useRef(null);
  const wordRefs: React.MutableRefObject<(HTMLSpanElement | null)[]> = useRef([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 });

  // 找到下一个非 skippedWord 的索引
  const findNextValidIndex = (startIndex: number) => {
    let newIndex = startIndex;
    do {
      newIndex = (newIndex + 1) % words.length;
    } while (words[newIndex] === skippedWord); // 跳过 skippedWord
    return newIndex;
  };

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => findNextValidIndex(prev)); // 自动跳过 skippedWord
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const activeWord = words[currentIndex];

    if (activeWord === skippedWord) return; // 确保 skippedWord 不会触发 focus-frame 更新

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  return (
    <div className="focus-container" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        const isSkipped = word === skippedWord;
        return (
          <span
            key={index}
            ref={(el) => { wordRefs.current[index] = el; }}
            className={`focus-word ${manualMode ? "manual" : ""} ${isActive && !manualMode ? "active" : ""}`}
            style={{
              filter: isSkipped ? "blur(0px)" : isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
              "--border-color": borderColor,
              "--glow-color": glowColor,
            } as React.CSSProperties}
          >
            {word}
          </span>
        );
      })}

      {/* 只有当 currentIndex 不是 skippedWord 时才显示 focus-frame */}
      {words[currentIndex] !== skippedWord && (
        <motion.div
          className="focus-frame"
          animate={{
            x: focusRect.x,
            y: focusRect.y,
            width: focusRect.width,
            height: focusRect.height,
            opacity: currentIndex >= 0 ? 1 : 0,
          }}
          transition={{
            duration: animationDuration,
          }}
          style={{
            "--border-color": borderColor,
            "--glow-color": glowColor,
          } as React.CSSProperties}
        >
          <span className="corner top-left"></span>
          <span className="corner top-right"></span>
          <span className="corner bottom-left"></span>
          <span className="corner bottom-right"></span>
        </motion.div>
      )}
    </div>
  );
};

export default TrueFocus;
