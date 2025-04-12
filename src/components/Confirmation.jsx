import { useState } from "react";
import { Check, CircleAlert } from "lucide-react";

const Confirmation = ({ title, message, variant = "success" }) => {
  const baseStyles = "mt-4 px-6 py-3 cursor-pointer text-white rounded-lg";
  const variantStyles = {
    success: "bg-green-500 hover:bg-green-600",
    error: "bg-red-500 hover:bg-red-600",
    warning: "bg-yellow-500 hover:bg-yellow-600",
  };
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} `;
  // State to control the visibility of the confirmation modal
  const [isOpen, setIsOpen] = useState(true);
  function close() {
    setIsOpen(false);
  }
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => close()}
    >
      <div className="bg-surface rounded-lg shadow-lg p-6 w-full max-w-sm text-center">
        {/* Animated Check Icon */}
        <div
          className={`flex items-center w-fit p-2 justify-center mb-4 ${
            variant == "success"
              ? "bg-green-200 dark:bg-green-900/50"
              : "bg-red-200 dark:bg-red-500/50"
          } mx-auto rounded-full`}
        >
          {variant == "success" ? (
            <Check className="stroke-current text-green-500 h-10 w-10" />
          ) : (
            <CircleAlert className="stroke-current text-red-500 h-10 w-10" />
          )}
        </div>
        {/* Success Message */}
        <h2 className="text-xl font-bold secondary-text">{title}</h2>
        <p className="secondary-text">{message}</p>

        {/* Close Button */}
        <button onClick={() => close()} className={combinedStyles}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
