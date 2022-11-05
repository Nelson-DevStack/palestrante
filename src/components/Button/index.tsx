import { useState } from "react";
import { Link } from "react-scroll";

const CTABtn = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <button
      type="button"
      className="py-[.7em] hover:scale-105 transition duration-200 bg-mainColor my-4"
      style={{
        boxShadow: !isHovering
          ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          : "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to="participe"
        smooth="true"
        offset={-85}
        spy
        className="py-3 px-5 rounded-sm text-gray-800 font-semibold uppercase tracking-wide"
      >
        Participar
      </Link>
    </button>
  );
};

export default CTABtn;
