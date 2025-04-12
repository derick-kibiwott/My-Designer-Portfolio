import {
  Palette,
  Search,
  CalendarDays,
  Utensils,
  PartyPopper,
  Mail,
  Settings,
  Lock,
  Rocket,
} from "lucide-react";

const ServicesData = [
  {
    id: 1,
    title: "Custom Restaurant Website Design",
    description:
      "Beautiful, responsive, and lightning-fast websites designed to reflect your restaurant’s unique brand and ambiance — optimised for mobile, tablet, and desktop.",
    icon: Palette,
  },
  {
    id: 2,
    title: "Online Reservation System",
    description:
      "Seamless table booking experience for your customers with optional integration to Resy, OpenTable, or a custom system that you fully control.",
    icon: CalendarDays,
  },
  {
    id: 3,
    title: "Digital Menu Integration",
    description:
      "Interactive and updatable menus with categories, prices, dietary tags, and imagery. Includes QR code access and easy admin updates.",
    icon: Utensils,
  },
  {
    id: 4,
    title: "Private Dining & Events Page",
    description:
      "Dedicated pages to showcase private dining, events, or catering services — complete with inquiry forms and image galleries.",
    icon: PartyPopper,
  },
  {
    id: 5,
    title: "SEO & Local Search Optimization",
    description:
      "Get found on Google. We optimize your site structure, keywords, and listings so hungry customers near you find your restaurant first.",
    icon: Search,
  },
  {
    id: 6,
    title: "Email Newsletter & Loyalty Signups",
    description:
      "Grow your community with forms that capture emails for promotions, newsletters, or loyalty rewards. Easily connect to Mailchimp or other tools.",
    icon: Mail,
  },
  {
    id: 7,
    title: "Admin Dashboard (CMS)",
    description:
      "Easily manage your content — from menu items and photos to event listings and hours — all without needing to touch code",
    icon: Settings,
  },
  {
    id: 8,
    title: "Hosting, Security & Maintenance",
    description:
      "We offer hosting, regular updates, backups, and 24/7 security monitoring — so you can focus on the kitchen while we handle the tech.",
    icon: Lock,
  },
  {
    id: 9,
    title: "Speed Optimization & Analytics Setup",
    description:
      "I help you create a strong brand identity that reflects your restaurant's personality and values.",
    icon: Rocket,
  },
];
export default ServicesData;
