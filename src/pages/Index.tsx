import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { MoreProjectsSection } from "@/components/MoreProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const Index = () => {
  const { t, i18n } = useTranslation();
  // Each language has its own address; English is the default at the root.
  const pageUrl = i18n.language === "el" ? `${SITE_URL}/?lang=el` : `${SITE_URL}/`;

  return (
    <>
      {/* Only the tags that change with the language; the rest are static in index.html. */}
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{t("seo.title")}</title>
        <meta name="description" content={t("seo.description")} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={t("seo.title")} />
        <meta property="og:description" content={t("seo.shareDescription")} />
        <meta property="og:locale" content={t("seo.locale")} />
        <meta property="og:locale:alternate" content={t("seo.alternateLocale")} />
        <meta name="twitter:title" content={t("seo.title")} />
        <meta name="twitter:description" content={t("seo.shareDescription")} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          {/* Portfolio first: the work, then the person, then the offer */}
          <HeroSection />
          <SelectedWorkSection />
          <MoreProjectsSection />
          <ExperienceSection />
          <ExpertiseSection />
          <AboutSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
