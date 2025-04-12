import ServicesData from "../Data/ServicesData";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/ui/Button";

const ServicesInfo = () => {
  return (
    <section aria-label="Services">
      <div className="space-y-l5 flex flex-col justify-center items-center padding-x py-8">
        <div className="flex flex-col items-center justify-center space-y-l1">
          <h1 className="heading-h1 secondary-text">Services</h1>
          <p className="secondary-text text-center paragraph font-semibold">
            See what services will{" "}
            <span className="text-primary">boost your business</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {ServicesData.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesInfo;
