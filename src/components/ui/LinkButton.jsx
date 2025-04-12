import { Link } from "react-router-dom";

const LinkButton = ({ variant = "filled", link, className = "", children }) => {
  const baseStyles = "rounded-lg block text-center paragraph";
  const variantStyles = {
    filled: "px-5  py-3 text-gray-100 bg-secondary hover:bg-secondary-hover",
    outlined:
      "px-5 py-[10px] text-secondary border-2 border-secondary hover:border-secondary-hover",
    plain: "",
  };
  // Merge base styles with variant styles
  // and additional className
  const combinedStyles = `${baseStyles} ${className} ${variantStyles[variant]}`;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <Link to={link} className={combinedStyles} onClick={handleScrollToTop}>
      {children}
    </Link>
  );
};

export default LinkButton;
