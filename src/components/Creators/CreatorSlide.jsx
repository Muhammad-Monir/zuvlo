import PropTypes from "prop-types";

const CreatorSlide = ({ creator }) => {
  return (
    <div className="single--creator">
      <div className="w-[290px] h-[400px] rounded-[20px] relative overflow-hidden ">
        <img
          className="w-full h-full object-cover"
          src={creator.creator_img}
          alt=""
        />
      </div>

      {/* content area */}
      <div>
        <h3 className="text-textBlack leading-8 text-2xl pb-2.5 pt-6">
          {" "}
          {creator.creator_name}{" "}
        </h3>
        <div className="flex items-center text-pinkRed text-[18px] leading-7 gap-1.5  ">
          <p> {creator.creator_role} </p>|<p> {creator.followers} </p>
        </div>
      </div>
    </div>
  );
};

CreatorSlide.propTypes = {
  creator: PropTypes.object,
};

export default CreatorSlide;
