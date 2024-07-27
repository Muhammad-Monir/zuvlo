import PropTypes from "prop-types";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CommonTitle = ({ children = "Common Title", color = "#141414" }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
      easing: "ease-in-out",
      duration: 500,
      offset: 200,
    });

    AOS.refresh();
  }, []);

  return (
    <h4
      data-aos="fade-up"
      style={{
        color: color,
      }}
      className=" text-[22px] leading-7  xl:text-[32px] font-semibold xl:leading-[42px]   "
    >
      {children}
    </h4>
  );
};

CommonTitle.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
};

export default CommonTitle;
