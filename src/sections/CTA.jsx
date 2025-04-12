import LinkButton from "@/components/ui/LinkButton";

const CTA = () => {
  return (
    <section
      aria-label="Contact me"
      className="flex flex-col items-center space-y-l4 bg-primary/30 py-8 padding-x"
    >
      <div className="space-y-l1">
        <h1 className="heading-h2 primary-text text-center">
          Ready to boost your online presence?
        </h1>
        <h2 className="paragraph secondary-text text-center">
          Let's discuss how I can help bring your vision to life.
        </h2>
      </div>
      <LinkButton link="/contact">Get in Touch</LinkButton>
    </section>
  );
};

export default CTA;
