import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      {/* <ContactSection /> */}
    </Layout>
  );
};

export default Index;
