import { useRef } from "react";
import mockup1 from "../../assets/images/feature-details-mockup1.png";
import mockup2 from "../../assets/images/feature-details-mockup2.png";
import mockup3 from "../../assets/images/feature-details-mockup3.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// import "./animation.css";

const FeatureMockup = () => {
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();

  const container = useRef();

//   useGSAP(
//     () => {
//       gsap.to(
//         img1.current,
//         scrollTrigger:{

//         },
//         {
//           x: 360,
//         }
//       );
//     },
//     { scope: container }
//   );

  return (
    <div ref={container} className="sticky top-5">
      {/* image holder */}
      <div className="w-[283px] h-[653px] rounded-[30px] overflow-hidden ft-animation-holder relative feature-details-container">
        <img
          ref={img1}
          src={mockup1}
          className="w-full h-full object-cover active"
          alt=""
        />
        <img
          ref={img2}
          src={mockup2}
          className="w-full h-full object-cover"
          alt=""
        />
        <img
          ref={img3}
          src={mockup3}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureMockup;
