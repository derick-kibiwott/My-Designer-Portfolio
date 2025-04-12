import MyJourneyCard from "@/components/MyJourneyCard";
import journeyData from "./journeyData";

const MyJourney = () => {
  const variants = ["left", "right"];
  return (
    <section className="space-y-l4 py-8">
      <h1 className="heading-h1 text-center primary-text">
        My <span className="text-primary">Journey</span>
      </h1>

      <div className="space-y-l4">
        {journeyData.map((item, index) => (
          <MyJourneyCard
            variant={variants[index % 2]}
            key={index}
            tag={item.tag}
            title={item.title}
            description={item.description}
            img={item.image}
            alt={item.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default MyJourney;
