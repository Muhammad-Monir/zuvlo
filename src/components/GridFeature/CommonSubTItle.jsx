import PropTypes from "prop-types";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const CommonSubTItle = ({ children = "Subtitle", color = "#333" }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
      easing: "ease-in-out",
      duration: 400,
    });
  }, []);

  return (
    <p
      data-aos="fade-up"
      style={{
        color: color,
      }}
      className="text-[18px] font-medium leading-7 max-w-[370px] "
    >
      {" "}
      {children}{" "}
    </p>
  );
};

CommonSubTItle.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
};

export default CommonSubTItle;
