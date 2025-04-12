import Background from "@/components/ui/Background";
import AboutImg from "@/assets/images/about.png";
import LinkButton from "@/components/ui/LinkButton";

const About = () => {
  return (
    <div
      className="relative w-full
     md:h-auto flex items-center"
    >
      <Background className="fill-current opacity-20 w-full h-full text-primary absolute top-0 left-0" />
      <div className="relative z-10 flex items-center space-x-l4 padding-x py-8 flex-col md:flex-row space-y-l4">
        <img
          src={AboutImg}
          alt="About section image"
          className="lg:w-1/2 w-full h-auto max-md:mx-0 rounded-lg shadow-lg"
        />
        <div className="space-y-l1 w-full flex flex-col items-center md:items-start">
          <p className="secondary-text text-center md:text-start">
            Hello, I'm Derick Kibiwott. I'm a passionate web developer and
            designer with over 3 years of experience designing beautiful,
            functional websites and applications. I truly beleive through my
            experience I can create highly converting restaurant websites. I
            also help to boost a restaurant's online presence and the money they
            make by extension.
          </p>
          <LinkButton variant="filled" link="/about">
            Learn More
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default About;
