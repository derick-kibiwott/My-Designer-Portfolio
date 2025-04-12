import Form from "./Form";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-l4 space-y-l4 w-full padding-x py-8 mt-16">
      <Form />
      <ContactInfo />
    </div>
  );
};

export default Contact;
