import Button from "@/components/ui/Button";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Confirmation from "@/components/Confirmation";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_k28md3k", "template_9vj7vv8", form.current, {
        publicKey: "3owu3RDb4GjD8Fg44",
      })
      .then(
        (result) => {
          // form.current.reset();
          setLoading("success");
        },
        (error) => {
          setLoading("failed");
        }
      );
  };
  return (
    <div className="flex flex-col w-full lg:px-6 pt-6 h-full space-y-l4 md:my-0">
      <div className="space-y-l1">
        <h1 className="text-2xl md:text-3xl font-medium secondary-text text-center">
          Contact Me
        </h1>
        <p className="paragraph text-center font-bold secondary-text">
          I typically respond in{" "}
          <span className="text-primary">less than two hours</span>
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <label className="flex flex-col secondary-text caption">
          <span className="caption mb-2">Your Name</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="p-3 border border-gray-300 dark:border-gray-800 rounded "
          />
        </label>
        <label className="flex flex-col secondary-text caption">
          <span className="caption mb-2">Your Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="p-3 border border-gray-300 dark:border-gray-800 rounded "
          />
        </label>
        <label className="flex flex-col secondary-text caption">
          <span className="caption mb-2">Your Message</span>
          <textarea
            name="message"
            required
            placeholder="Enter your message"
            className="p-3 border border-gray-300 dark:border-gray-800 rounded h-32 "
          ></textarea>
        </label>
        <Button
          variant="filled"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
          type="submit"
        >
          {loading === true ? "Sending..." : "Send Message"}
        </Button>
      </form>
      {(loading === "success" || loading === "failed") && (
        <Confirmation
          title={loading === "success" ? "Message Sent!" : "Message Failed!"}
          message={
            loading === "success"
              ? "Your message has been sent successfully."
              : "There was an error sending your message. Please check your internet connection."
          }
          variant={loading === "success" ? "success" : "error"}
        />
      )}
    </div>
  );
};

export default Form;
