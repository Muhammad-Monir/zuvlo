import PropTypes from "prop-types";

const SingleFeature = ({ feature }) => {
  return (
    <div className="py-[160px]">
      <p className="py-1.5 px-5 mb-4 rounded-[160px] backdrop-blur-[20px] bg-[rgba(22,22,19,0.04)] w-fit">
        {" "}
        {feature.category}{" "}
      </p>

      {/* title */}
      <h3 className="text-5xl font-semibold leading-[64px] text-textBlack max-w-[732px] ">
        {" "}
        {feature.title.split(" ").map((word) => {
          if (word === feature.highlightWord) {
            return feature.title.replace(
              feature.highlightWord,
              `<span>${word}</span>`
            );
          }
        })}{" "}
        {/* <span className="text-pinkRed">{feature.highlightWord}</span> */}
      </h3>
      {/* title */}
    </div>
  );
};

SingleFeature.propTypes = {
  feature: PropTypes.object,
};

export default SingleFeature;
