import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { LabSection } from "@/components/LabSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Konstantinos Oikonomou | Frontend Engineer & Solutions Architect</title>
        <meta
          name="description"
          content="Delivering scalable React applications for the Public Sector, Enterprise, and Startups. Specialized in web applications, mobile solutions, and legacy modernization."
        />
        <meta
          name="keywords"
          content="Frontend Engineer, React Developer, Solutions Architect, Public Sector, Greece, Thessaloniki, React.js, React Native, TypeScript"
        />
        <meta property="og:title" content="Konstantinos Oikonomou | Frontend Engineer & Solutions Architect" />
        <meta
          property="og:description"
          content="Delivering scalable React applications for the Public Sector, Enterprise, and Startups."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://konstantinos-oikonomou.com" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Konstantinos Oikonomou",
            jobTitle: "Frontend Engineer & Solutions Architect",
            url: "https://konstantinos-oikonomou.com",
            email: "kostasoikonomou4@gmail.com",
            telephone: "+306987802777",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Thessaloniki",
              addressCountry: "Greece",
            },
            sameAs: [
              "https://github.com/kostasoiko4",
              "https://www.linkedin.com/in/konstantinos-oikonomou-8a8a3b1b6/",
            ],
            knowsAbout: [
              "React.js",
              "React Native",
              "TypeScript",
              "JavaScript",
              "Redux Toolkit",
              "Node.js",
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <ProjectsSection />
          <LabSection />
          <ExpertiseSection />
          <ExperienceSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
