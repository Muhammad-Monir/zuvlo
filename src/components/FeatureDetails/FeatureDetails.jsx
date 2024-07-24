import flowerShape from "../../assets/images/flower-art.png";
import SingleFeature from "./SingleFeature";

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
    <section className=" py-80 relative ">
      {/* main content */}
      <div className="container flex">
        {/* description holder */}
        <div className="w-[50%]">
          {/* list */}
          <div className="flex flex-col">
            {featureList.map((item, index) => (
              <SingleFeature key={index} feature={item} />
            ))}
          </div>
        </div>

        {/* animation holder */}
        <div className="w-[40%]">
          <h3>this is animation</h3>
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
    </section>
  );
};

export default FeatureDetails;
