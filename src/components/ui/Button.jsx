const Button = ({ children, variant = "filled", className = "", ...props }) => {
  const baseStyles = "py-4 caption transition duration-300 ease-out";
  const variantStyles = {
    filled:
      "bg-secondary hover:bg-secondary-hover text-gray-50 rounded-lg px-5 cursor-pointer",
    outlined:
      "border-2 box-border px-5 border-secondary text-secondary hover:border-secondary-hover hover:text-secondary-hover rounded-lg cursor-pointer",
    underlined:
      "relative secondary-text hover:text-primary before:rounded before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-full before:scale-x-0 before:bg-primary before:origin-left before:transition-transform before:duration-450 hover:before:scale-x-100",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
