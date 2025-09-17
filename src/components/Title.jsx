import { useEffect, useState } from "react";

const Title = () => {
  const texts = ["Ekmāgnatā", "!!Coming Soon!!"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];
    let typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      } else {
        setText(
          isDeleting
            ? current.substring(0, text.length - 1)
            : current.substring(0, text.length + 1)
        );
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, texts]);

  return (
    <h1 className="text-4xl md:text-8xl text-[#FBF6EA] font-bold text-center px-4">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default Title;