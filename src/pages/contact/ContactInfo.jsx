import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div className="flex flex-col w-full space-y-l3 p-6 bg-surface-low shadow-sm rounded-lg">
      <h3 className="text-2xl md:text-3xl font-medium secondary-text">
        Contact Information
      </h3>
      <div className="flex flex-col space-y-l3">
        <div>
          <div className="flex space-x-l1 items-center">
            <MapPin className="w-6 h-6 secondary-text" />

            <p className="secondary-text paragraph">Address</p>
          </div>
          <p className="caption secondary-text ml-8">Nairobi, Kenya</p>
        </div>
        <div>
          <div className="flex space-x-l1 items-center">
            <Phone className="w-6 h-6 secondary-text" />

            <p className="secondary-text paragraph">Phone Number</p>
          </div>
          <p className="caption secondary-text ml-8">+254705676454</p>
        </div>
        <div>
          <div className="flex space-x-l1 items-center">
            <Mail className="w-6 h-6 secondary-text" />

            <p className="secondary-text paragraph">Email</p>
          </div>
          <p className="caption secondary-text ml-8">Kibiwottderick@gmai.com</p>
        </div>
      </div>
      <div className="space-x-l1 flex">
        <div className="space-x-l1 flex">
          <a
            href="https://www.linkedin.com/in/derick-kibiwott-1a24502b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-purple-200 dark:bg-primary rounded-full"
          >
            <Facebook className="w-6 h-6 secondary-text" />
          </a>
          <a
            href="https://www.instagram.com/derick_kibiwott/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-purple-200 dark:bg-primary rounded-full"
          >
            <Instagram className="w-6 h-6 secondary-text" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61557045119084"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-purple-200 dark:bg-primary rounded-full"
          >
            <Linkedin className="w-6 h-6 secondary-text" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
