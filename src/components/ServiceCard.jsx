const ServiceCard = ({
  Icon,
  title = "title",
  description = "description",
}) => {
  return (
    <div className="shadow-sm rounded-lg bg-surface-low px-8 py-4 flex flex-col space-y-l3">
      <div className="flex gap-4 items-center">
        <div className="p-2 bg-purple-200 dark:bg-purple-600 rounded-full">
          {<Icon className="h-6 w-6 stroke-current primary-text stroke-2" />}
        </div>
        <p className="paragraph primary-text">{title}</p>
      </div>
      <p className="paragraph secondary-text">{description}</p>
    </div>
  );
};

export default ServiceCard;
