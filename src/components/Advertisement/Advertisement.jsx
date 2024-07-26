import banner from "../../assets/images/mobile-mockup-ad.png";

const Advertisement = () => {
  return (
    <section className="pl-[115px] pt-[42px] pb-[160px]  bg-[#262626] rounded-3xl relative overflow-hidden container ">
      <h3 className="text-[48px] font-semibold leading-[63px] text-white max-w-[682px] ">
        Become Part of the Fastest Growing Community of Creators
      </h3>

      {/* images */}
      <div className="w-[580px] h-[720px] absolute right-[110px] bottom-[-420px] ">
        <img src={banner} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Advertisement;
