import Button from "@/components/ui/Button";
import ProfileImg from "@/assets/images/profile-nobg.png";
import Arrow from "@/components/ui/Icons/Arrow";
import { Link } from "react-router-dom";
import LinkButton from "@/components/ui/LinkButton";
const Hero = () => {
  return (
    <div className=" padding-x flex flex-col-reverse md:flex-row justify-center items-center w-full py-16 space-y-l4 md:space-x-l4">
      <div className="space-y-l4 w-full">
        <div className="space-y-l1">
          <p className="heading-h1 primary-text text-center md:text-start">
            Take your restaurant business to the{" "}
            <span className="text-primary">next level</span>
          </p>
          <p className="paragraph secondary-text text-center md:text-start">
            I help restaurants owners create an immersive online presence that
            not only brings more customers but also makes them more money
          </p>
        </div>
        <div className="space-x-l1 space-y-l1 relative flex flex-col w-auto md:flex-row items-center">
          <div className="max-w-56 w-full md:w-auto md:my-0 relative">
            <Arrow className="fill-current h-18 w-18 -left-15 -top-14 absolute secondary-text" />
            <LinkButton link="/contact">Get Started</LinkButton>
          </div>
          <div className="max-w-56 w-full md:w-auto md:my-0">
            <LinkButton link="/projects" variant="outlined">
              See Projects
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-auto aspect-square md:w-full md:h-full md:aspect-auto flex justify-center items-center relative">
        <img
          src={ProfileImg}
          alt="Profile"
          className="w-1/2 md:w-full aspect-square object-cover rounded-lg z-10"
        />
        <div className="w-1/2 h-1/2 bg-primary absolute blur-[250px] rounded-full"></div>
        <div className="w-full h-full absolute border-primary border-4 rounded-full"></div>
        <div className="w-2/3 h-2/3 absolute border-primary border-2 rounded-full opacity-50"></div>
        <div className="w-1/2 h-1/2 absolute border-primary border-1 rounded-full opacity-20"></div>
      </div>
    </div>
  );
};

export default Hero;
