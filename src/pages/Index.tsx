import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ContactSection } from "@/components/home/ContactSection"
import GradualBlur from "@/components/GradualBlur"


  
const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <ContactSection />
      <GradualBlur
        target="page"
        position="bottom"
        height="3rem"
        strength={1}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </Layout>
    
  );
};

export default Index;
