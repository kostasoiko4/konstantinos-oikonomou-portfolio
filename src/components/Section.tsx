import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * One subtle fade-up, played once when the block scrolls into view.
 * Plain CSS (.reveal in index.css) plus IntersectionObserver, so no animation library ships to the browser.
 */
export const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
};

type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
};

type EyebrowProps = {
  index: string;
  label: string;
  centered?: boolean;
  className?: string;
};

/** Small "01 / section" label with a gold rule; centered variant gets a rule on both sides. */
export const Eyebrow = ({ index, label, centered = false, className = "mb-3" }: EyebrowProps) => (
  <p
    className={`flex items-center font-mono text-xs text-muted-foreground ${centered ? "justify-center" : ""} ${className}`}
  >
    <span
      className={`mr-3 h-px w-8 bg-gradient-to-r ${centered ? "from-transparent to-gold" : "from-gold to-transparent"}`}
    />
    <span className="text-gold">{index}</span>
    <span className="mx-2 opacity-50">/</span>
    <span className="lowercase">{label}</span>
    {centered && <span className="ml-3 h-px w-8 bg-gradient-to-r from-gold to-transparent" />}
  </p>
);

export const SectionHeader = ({ index, label, title, subtitle, className = "mb-12 md:mb-14" }: SectionHeaderProps) => (
  <Reveal className={`max-w-2xl ${className}`}>
    <Eyebrow index={index} label={label} />
    <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h2>
    {subtitle && <p className="mt-3 leading-relaxed text-muted-foreground">{subtitle}</p>}
  </Reveal>
);
