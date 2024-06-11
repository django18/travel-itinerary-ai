import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import classNames from "classnames";

const TextGenerate = ({ wordsArray }) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const formatWord = (word) => {
    switch (word.textNodeType) {
      case "main-heading":
        return <span className="text-4xl">{word.text}</span>;
      default:
        return word;
    }
  };

  const renderWords = () => {
    console.log("renderwords", wordsArray);

    return (
      <motion.div ref={scope} className="flex flex-col">
        {wordsArray.map((word, idx) => {
          const spanClass = classNames("text-black opacity-0", [
            word.textNodeType === "main-heading" && "text-3xl",
            word.textNodeType === "section-heading" && "text-2xl",
          ]);
          return (
            <motion.span key={word + idx} className={spanClass}>
              {word.text}
              {idx < wordsArray.length - 1 && <br />}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col text-black text-xl tracking-wide overflow-y-auto">
      {renderWords()}
    </div>
  );
};

export default TextGenerate;
