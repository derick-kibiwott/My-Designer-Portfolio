import React from "react";
import FooterData from "./FooterData";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerIcons = [Linkedin, Instagram, Facebook];
  const footerLinks = [
    "https://www.linkedin.com/in/derick-kibiwott-1a24502b6/",
    "https://www.instagram.com/derick_kibiwott/",
    "https://www.facebook.com/profile.php?id=61557045119084",
  ];
  return (
    <footer className="relative padding-x py-8 space-y-l4 bg-primary/30 mt-16 ">
      <div className="flex flex-col lg:flex-row justify-between relative z-10 space-y-l4 space-x-l4">
        <p className="logo w-fit whitespace-nowrap">{FooterData.logo}</p>
        <div className="flex space-x-l5 flex-col md:flex-row space-y-l3">
          {FooterData.links.map((link, index) => (
            <div key={index} className="flex flex-col space-y-l2">
              <h4 className="logo secondary-text">{link.title}</h4>
              <ul className="flex flex-col space-y-l1">
                {link.items.map((item, index) => (
                  <li key={index}>
                    <Link className="secondary-text" to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative z-10 space-y-l2">
        <div className="border-t border-gray-400 dark:border-gray-300 w-full"></div>

        <div className="flex flex-col md:flex-row justify-between space-x-l1 items-center">
          <p className="caption secondary-text">
            &copy; {new Date().getFullYear()} Derick Kibiwott Portfolio. All
            rights reserved.
          </p>
          <div className="flex space-x-l2">
            {footerIcons.map((Icon, index) => (
              <Link
                key={index}
                to={footerLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-primary p-2 rounded-full">
                  <Icon className="w-6 h-6 text-gray-100" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
