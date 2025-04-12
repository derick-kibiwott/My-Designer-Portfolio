import Tag from "./ui/Tag";

const MyJourneyCard = ({
  variant = "right",
  tag = "",
  title = "",
  description = "",
  img = "https://via.placeholder.com/400x225",
  alt,
}) => {
  const baseStyles = "flex flex-col space-y-l3 items-center";
  const variantStyles = {
    right: "lg:flex-row-reverse",
    left: "lg:flex-row",
  };
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} `;
  return (
    <div className={combinedStyles}>
      <img
        src={img}
        alt={alt}
        className={`w-full aspect-16/9 ${
          variant === "left" ? "lg:mr-4" : "lg:ml-4"
        } lg:my-0`}
      />
      <div className="w-full space-x-l2 space-y-l2">
        <div className="flex space-x-l1 items-center w-full space-y-l1">
          <Tag text={tag} />
          <div className="border-t border-gray-500 w-full"></div>
        </div>
        <div className="space-y-l1">
          <h3 className="text-2xl md:text-3xl font-medium secondary-text">
            {title}
          </h3>
          <p className="secondary-text paragraph">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MyJourneyCard;
