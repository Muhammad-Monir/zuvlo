import { useState } from "react";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      title: "Is there a free trial available?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can I change my plan later?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "What is your cancellation policy?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can other info be added to an invoice?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How does billing work?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How do I change my account email?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  const handleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="container pb-[250px] ">
      <div className="text-center space-y-5">
        <h3 className="text-[64px] text-[#101828] leading-[84px] font-semibold ">
          Frequently asked questions{" "}
        </h3>
        <p className=" text-[18px] leading-7 text-[#667085]   ">
          Everything you need to know about the product and billing.
        </p>
      </div>
      {/* faq wrapper */}
      <div className="pt-[90px] flex flex-col gap-5">
        {faqList.map((item, index) => (
          <SingleFaq
            isOpen={openIndex === index}
            openFaq={() => handleFaq(index)}
            faq={item}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
