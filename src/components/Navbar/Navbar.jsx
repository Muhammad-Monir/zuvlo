import logo from "../../assets/images/main-logo.png";
import SignUpBtn from "../Buttons/SignUpBtn";

const Navbar = () => {
  const linkStyle = `text-[18px] font-medium text-textBlack leading-6`;

  return (
    <section className="container pt-12">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="w-[180px] h-[40px]">
          <img src={logo} alt="" className="w-full h-full object-contain" />
        </div>

        {/* menu links */}
        <div className="flex items-center gap-12">
          <a className={linkStyle} href="#">
            fanvue AI
          </a>
          <a className={linkStyle} href="#">
            Our Mission
          </a>
          <a className={linkStyle} href="#">
            Support
          </a>
          <a className={linkStyle} href="#">
            Login
          </a>
          <SignUpBtn size="mx" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
