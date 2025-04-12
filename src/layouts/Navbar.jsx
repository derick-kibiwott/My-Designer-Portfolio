import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
import LinkButton from "@/components/ui/LinkButton";
import Logo from "@/components/ui/Icons/Logo";

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = ["Home", "Projects", "Services", "About Me"];
  const navLinks = ["/", "/projects", "/services", "/about"];

  const toggleMobileMenu = (e) => {
    e.stopPropagation(); // Prevent closing the menu when clicking the menu button
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Initialize theme state based on localStorage or default to false
  const [isMoon, setIsMoon] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  // Toggle theme and store preference in localStorage
  const toggleTheme = () => {
    const newTheme = !isMoon;
    setIsMoon(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Apply the stored theme on component mount
  useEffect(() => {
    if (isMoon) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isMoon]);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen((prev) => !prev);
  // };

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="bg-surface-low shadow-sm mode-transition">
        <div className="flex justify-between items-center padding-x py-4 mx-auto relative">
          {/* Logo */}
          <LinkButton
            link="/"
            className="flex space-x-l1 items-center"
            variant="plain"
          >
            <Logo className="fill-current text-gray-300 dark:text-gray-800 h-10 w-10 rounded-full" />
            <p className="logo hidden md:block">Derick Kibiwott</p>
          </LinkButton>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, key) => (
              <Button key={item} variant="underlined">
                <Link
                  to={navLinks[key]}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                >
                  {item}
                </Link>
              </Button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing the menu when toggling the theme
                toggleMobileMenu(e);
                toggleTheme();
              }}
              aria-label="Toggle Theme"
              className="cursor-pointer"
            >
              {isMoon ? (
                <Moon className="secondary-text cursor-pointer hover:text-secondary" />
              ) : (
                <Sun className="secondary-text cursor-pointer hover:text-secondary" />
              )}
            </button>
            <LinkButton link="/contact">Let's Talk</LinkButton>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden">
            <button
              className="secondary-text hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2 cursor-pointer"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden flex flex-col absolute w-full items-start px-6 gap-4 bg-surface-low transition-all duration-300 pb-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
          >
            {navItems.map((item, key) => (
              <Link
                key={item}
                to={navLinks[key]}
                className="secondary-text hover:text-secondary hover:bg-primary/5 w-full rounded p-2 text-center"
                onClick={closeMobileMenu} // Close menu when clicking a link
              >
                {item}
              </Link>
            ))}

            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing the menu when toggling the theme
                toggleMobileMenu(e);
                toggleTheme(); // Toggle theme state
              }}
              aria-label="Toggle Theme"
              className="mt-2 w-full flex justify-center p-1 rounded"
            >
              {isMoon ? (
                <Moon className="secondary-text cursor-pointer hover:text-secondary" />
              ) : (
                <Sun className="secondary-text cursor-pointer hover:text-secondary" />
              )}
            </button>

            <LinkButton
              link={"/contact"}
              className="w-full text-center"
              onClick={closeMobileMenu} // Close menu when clicking the "Let's Talk" button
            >
              Let's Talk
            </LinkButton>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
