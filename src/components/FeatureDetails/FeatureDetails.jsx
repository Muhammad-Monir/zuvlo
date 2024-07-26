import flowerShape from "../../assets/images/flower-art.png";
import SingleFeature from "./SingleFeature";
import featureBg from "../../assets/images/feature-details-bg.png";
import FeatureMockup from "./FeatureMockup";
import { useRef } from "react";

const FeatureDetails = () => {
  const featureList = [
    {
      category: "💸 Subscription",
      title: "Monetize Your Content Through Subscriptions",
      subtitle:
        "Unlock Recurring Revenue by Offering Your Exclusive Content Behind a Paywall for Your Top Fans to Subscribe",
      highlightWord: "Subscriptions",
    },
    {
      category: "💬 Messaging",
      title: "Engage with Your Fans Through Direct Messaging",
      subtitle:
        "Engage with Your Fans via Direct Messages - Whether Paid or Free!",
      highlightWord: "Messaging",
    },
    {
      category: "👀 Pay-to-view",
      title: "Monetize Your Content with Pay-to-View Access",
      subtitle:
        "Boost Revenue by Upselling Your Most Exclusive Content with Pay-to-Views",
      highlightWord: "Pay-to-View",
    },
  ];

  const sectionContainer = useRef();

  const elem1 = useRef();
  const elem2 = useRef();
  const elem3 = useRef();

  const elements = [elem1, elem2, elem3];

  return (
    <section
      ref={sectionContainer}
      className=" pt-80 pb-12 relative feature-details-container "
    >
      {/* main content */}
      <div className="container flex gap-[225px] relative z-20 px-[72px] ">
        {/* description holder */}
        <div className="max-w-[732px]">
          {/* list */}
          <div className="flex flex-col">
            <div ref={elem1} className="py-[160px]">
              <p className="py-1.5 px-5 mb-4 rounded-[160px] backdrop-blur-[20px] bg-[rgba(22,22,19,0.04)] w-fit">
                💸 Subscription
              </p>
              <h3 className="text-5xl font-semibold leading-[64px] text-textBlack ">
                Monetize Your Content Through{" "}
                <span className="text-pinkRed">Subscriptions</span>
              </h3>
              <p className="py-8 text-[18px] leading-7 text-[rgba(22,22,19,0.75)] max-w-[535px] ">
                Unlock Recurring Revenue by Offering Your Exclusive Content
                Behind a Paywall for Your Top Fans to Subscribe
              </p>
              <a
                className=" font-medium rounded-[160px] text-base leading-5 px-7 py-3 text-[18px] text-white bg-[linear-gradient(270deg,#BE0D00_0%,#FF2919_100%)] "
                href="#"
              >
                {" "}
                Sign Up
              </a>
            </div>
            <div ref={elem2} className="py-[160px]">
              <p className="py-1.5 px-5 mb-4 rounded-[160px] backdrop-blur-[20px] bg-[rgba(22,22,19,0.04)] w-fit">
                💬 Messaging
              </p>
              <h3 className="text-5xl font-semibold leading-[64px] text-textBlack ">
                Engage with Your Fans Through Direct{" "}
                <span className="text-pinkRed">Messaging</span>
              </h3>
              <p className="py-8 text-[18px] leading-7 text-[rgba(22,22,19,0.75)] max-w-[535px] ">
                Engage with Your Fans via Direct Messages - Whether Paid or
                Free!
              </p>
              <a
                className=" font-medium rounded-[160px] text-base leading-5 px-7 py-3 text-[18px] text-white bg-[linear-gradient(270deg,#BE0D00_0%,#FF2919_100%)] "
                href="#"
              >
                {" "}
                Sign Up
              </a>
            </div>
            <div ref={elem3} className="py-[160px]">
              <p className="py-1.5 px-5 mb-4 rounded-[160px] backdrop-blur-[20px] bg-[rgba(22,22,19,0.04)] w-fit">
                👀 Pay-to-view
              </p>
              <h3 className="text-5xl font-semibold leading-[64px] text-textBlack ">
                Monetize Your Content with{" "}
                <span className="text-pinkRed">Pay-to-View</span> Access
              </h3>
              <p className="py-8 text-[18px] leading-7 text-[rgba(22,22,19,0.75)] max-w-[535px] ">
                Boost Revenue by Upselling Your Most Exclusive Content with
                Pay-to-Views
              </p>
              <a
                className=" font-medium rounded-[160px] text-base leading-5 px-7 py-3 text-[18px] text-white bg-[linear-gradient(270deg,#BE0D00_0%,#FF2919_100%)] "
                href="#"
              >
                {" "}
                Sign Up
              </a>
            </div>
          </div>
        </div>

        {/* animation holder */}
        <div className="">
          <FeatureMockup
            elements={elements}
            sectionContainer={sectionContainer}
          />
        </div>
      </div>

      {/* flower shapes */}
      <div className="w-[220px] h-[640px] overflow-hidden absolute top-0 right-0 ">
        <img
          className="w-full h-full object-contain"
          src={flowerShape}
          alt=""
        />
      </div>
      <div className="w-[220px] h-[640px] overflow-hidden absolute bottom-0 -left-14 -rotate-180">
        <img
          className="w-full h-full object-contain"
          src={flowerShape}
          alt=""
        />
      </div>

      {/* flower shapes */}

      {/* feature background image */}
      <img
        src={featureBg}
        alt=""
        className="absolute w-full h-full z-0 top-10 -left-[640px]"
      />
      {/* feature background image */}
    </section>
  );
};

export default FeatureDetails;
