const Tag = ({ text = "2016" }) => {
  return (
    <div className="bg-primary rounded-full px-4 py-2 relative before:content-[''] before:rounded-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white dark:before:bg-gray-800 before:opacity-70 before:mix-blend-lighten dark:before:mix-blend-multiply">
      <p className="secondary-text paragraph relative z-10">{text}</p>
    </div>
  );
};

export default Tag;
