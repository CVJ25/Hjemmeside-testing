import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const simpleLinks = [
    { path: "/", label: "Hjem" },
    { path: "/attester", label: "Attester" },
    { path: "/utdanning", label: "Kurs & Utdanning" },
    { path: "/kontakt", label: "Kontakt" },
  ];

  const prosjekterLinks = [
    { path: "/prosjekter/tekniske", label: "Tekniske prosjekter" },
    { path: "/prosjekter/kreative", label: "Kreative prosjekter" },
  ];

  const erfaringLinks = [
    { path: "/erfaring/ingenior", label: "Ingeniør" },
    { path: "/erfaring/ledelse", label: "Ledelse og administrasjon" },
    { path: "/erfaring/diverse", label: "Diverse" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 font-bold text-lg">
            <div className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center font-bold">
              CVJ
            </div>
            <span className="hidden sm:inline">Chris V. Jensen</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 ${
                    location.pathname === "/" ? "text-primary" : "text-foreground/80"
                  }`}>
                    Hjem
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-primary">
                  Prosjekter
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-1 p-2">
                    {prosjekterLinks.map((link) => (
                      <li key={link.path}>
                        <Link to={link.path}>
                          <NavigationMenuLink className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm ${
                            location.pathname === link.path ? "bg-accent" : ""
                          }`}>
                            {link.label}
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-primary">
                  Erfaring
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-64 gap-1 p-2">
                    {erfaringLinks.map((link) => (
                      <li key={link.path}>
                        <Link to={link.path}>
                          <NavigationMenuLink className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm ${
                            location.pathname === link.path ? "bg-accent" : ""
                          }`}>
                            {link.label}
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {simpleLinks.slice(1).map((link) => (
                <NavigationMenuItem key={link.path}>
                  <Link to={link.path}>
                    <NavigationMenuLink className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 ${
                      location.pathname === link.path ? "text-primary" : "text-foreground/80"
                    }`}>
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="gap-2"
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-5 w-5" />
                  <span className="hidden sm:inline">Dark theme</span>
                </>
              ) : (
                <>
                  <Sun className="h-5 w-5" />
                  <span className="hidden sm:inline">Light theme</span>
                </>
              )}
            </Button>

            <a
              href="https://www.linkedin.com/in/chrisvjensen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden sm:flex"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === "/" ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-accent"
              }`}
            >
              Hjem
            </Link>

            <div className="px-4 py-2 text-sm font-semibold text-foreground">Prosjekter</div>
            {prosjekterLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`pl-8 pr-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="px-4 py-2 text-sm font-semibold text-foreground">Erfaring</div>
            {erfaringLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`pl-8 pr-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {simpleLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://www.linkedin.com/in/chrisvjensen/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:bg-accent flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
