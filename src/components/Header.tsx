import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";

const navItems = [
  { key: "work", href: "#work" },
  { key: "experience", href: "#experience" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
];

export const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        solid ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className="shell">
        <div className="flex h-16 items-center justify-between gap-6">
          <a href="#" className="shrink-0 text-sm font-semibold tracking-tight text-foreground">
            Konstantinos Oikonomou
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <LanguageToggle />
            <a href="#contact" className="btn-primary hidden px-4 py-2 md:inline-flex">
              {t("nav.contact")}
            </a>
            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="-mr-2 p-2 text-foreground lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="shell flex flex-col gap-1 pb-6 lg:hidden">
          {[...navItems, { key: "contact", href: "#contact" }].map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
