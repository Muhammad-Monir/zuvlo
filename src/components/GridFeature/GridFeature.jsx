import CommonTitle from "./CommonTitle";
import "./grid-feature.css";

import figure1 from "../../assets/images/grid-feature-group1.png";
import figure2 from "../../assets/images/grid-feature3.png";
import figure3 from "../../assets/images/grid-feature4.png";
import figure4 from "../../assets/images/grid-feature5.png";
import figure5 from "../../assets/images/grid-feature-group-2.png";
import figure6 from "../../assets/images/grid-feature6.png";
import CommonSubTItle from "./CommonSubTItle";
const GridFeature = () => {
  return (
    <section className="container pt-[54px]">
      {/* title */}
      <h3 className="text-[64px] font-bold leading-[84px] text-[#333] text-center ">
        Everything You Need to Succeed, All in One Place
      </h3>

      {/* grid area wrapper */}
      <div className="py-[120px] grid-feature space-y-8 ">
        {/* top grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* first */}
          <div className="single-content p-9 bg-[#C3B2E7] col-span-4   ">
            <CommonTitle color="#52225E">AI Features</CommonTitle>

            {/* img wrapper */}
            <div className="my-6">
              <div className="w-[420px] h-[388px]  ">
                <img
                  className="w-full h-full object-contain"
                  src={figure1}
                  alt=""
                />
              </div>
            </div>

            {/* subtitle */}
            <CommonSubTItle color="#52225E">
              Use a pre-designed template or personalize with video, stickers,
              fonts, and more
            </CommonSubTItle>
          </div>

          {/* second */}
          <div className="col-span-8 gap-8 flex flex-col">
            {/* top one */}
            <div className="single-content  w-full px-[46px] py-1.5 bg-[#F682A5] flex justify-between items-center ">
              <div className="space-y-4">
                <CommonTitle color="#52225E">24/7 Support</CommonTitle>

                <CommonSubTItle color="#52225E">
                  Schedule all your cards and gifts now and we’ll send them
                  later
                </CommonSubTItle>
              </div>

              <div className="w-[375px] h-[295px]  ">
                <img
                  className="w-full h-full object-cover"
                  src={figure2}
                  alt=""
                />
              </div>
            </div>

            {/* lower one */}
            <div className="flex gap-8 ">
              <div className="px-8 py-5 flex-1 bg-[#C9DA8F]  single-content ">
                {/* image */}
                <div className="w-[220px] h-[145px] mx-auto mb-6 ">
                  <img
                    src={figure3}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <CommonTitle color="#1C471F">Subscriptions</CommonTitle>

                  <CommonSubTItle color="#1C471F">
                    Access all your gifts and save up your Givingli Cash
                  </CommonSubTItle>
                </div>
              </div>
              <div
                className="px-8 pt-6
               flex-1 bg-[#FEDF6F] single-content relative "
              >
                <div className="space-y-4">
                  <CommonTitle color="#4A411E">Smart Messaging</CommonTitle>

                  <CommonSubTItle color="#4A411E">
                    Track your gifts, group chats, and sent cards
                  </CommonSubTItle>
                </div>

                {/* image */}
                <div className="w-[370px] h-[395px] absolute left-1/2 -translate-x-1/2 -bottom-[240px] rounded-3xl overflow-hidden ">
                  <img
                    src={figure4}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom grid */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 single-content pl-[46px] py-[145px] bg-[#F9A474] relative ">
            <div className="space-y-4 ">
              <CommonTitle color="#582614">Pay-to-View</CommonTitle>

              <CommonSubTItle color="#582614">
                Send as a group with friends or individually
              </CommonSubTItle>

              {/* images */}
              <div className="w-[790px] h-[465px] absolute -right-8 -top-4">
                <img
                  className="w-full h-full object-cover"
                  src={figure5}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-span-4 single-content p-10 bg-[#B8CEDC] relative ">
            <div className="space-y-4">
              <CommonTitle color="#184363">Advanced Insights</CommonTitle>

              <CommonSubTItle color="#184363">
                Never miss a birthday or special occasion again
              </CommonSubTItle>
            </div>

            {/* images */}
            <div className="w-[375px] h-[375px] absolute right-0 -bottom-[150px] ">
              <img
                src={figure6}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridFeature;
