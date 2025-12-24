import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = ({ isDark }: { isDark: boolean }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300
        ${isDark
          ? "bg-gray-800 text-white"
          : "bg-[#194a89] text-white"}
      `}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
