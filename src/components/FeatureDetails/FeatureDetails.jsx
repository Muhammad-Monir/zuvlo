import flowerShape from "../../assets/images/flower-art.png";
import SingleFeature from "./SingleFeature";
import featureBg from "../../assets/images/feature-details-bg.png";
import FeatureMockup from "./FeatureMockup";

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

  return (
    <section className=" pt-80 pb-12 relative feature-details-container ">
      {/* main content */}
      <div className="container flex gap-[225px] relative z-20 px-[72px] ">
        {/* description holder */}
        <div className="max-w-[732px]">
          {/* list */}
          <div className="flex flex-col">
            {featureList.map((item, index) => (
              <SingleFeature key={index} feature={item} />
            ))}
          </div>
        </div>

        {/* animation holder */}
        <div className="">
          <FeatureMockup />
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
