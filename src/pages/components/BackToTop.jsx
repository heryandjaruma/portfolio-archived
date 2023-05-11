import { useState, useEffect } from "react";
import Image from "next/image";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-5 z-50 rounded-full bg-lightblu p-3 text-white shadow-lg ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      <Image
        src="/images/icons/backtotop.svg"
        alt="back-to-top-button"
        height={100}
        width={100}
        className="h-8 w-8 p-1"
      />
    </button>
  );
};

export default BackToTopButton;
