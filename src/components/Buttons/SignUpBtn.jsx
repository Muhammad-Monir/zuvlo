import PropTypes from "prop-types";

const SignUpBtn = ({ size = "sm", version = "sign-up" }) => {
  return (
    <a
      className={`px-8 py-4   font-medium rounded-[160px] text-base leading-5 ${
        size === "mx" ? "px-7 py-3 text-[18px]" : " "
      } ${
        version === "login"
          ? "bg-[#1616131c] text-textBlack"
          : "text-white bg-black"
      } `}
      href="#"
    >
      {" "}
      {version === "login" ? "Login" : "Sign Up"}
    </a>
  );
};

SignUpBtn.propTypes = {
  size: PropTypes.string,
  version: PropTypes.string,
};

export default SignUpBtn;
