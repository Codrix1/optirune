import { Server, GitBranch, Workflow, Shield, Cloud, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const ServicesSection = () => {
  const services = [
    { icon: Server, title: "AI Agents & Automation", badge: "Core Service", description: "Deploy custom AI agents that automate workflows, handle operations, and accelerate decision-making across your business.", features: ["Workflow Automation", "Custom AI Agents", "Knowledge Retrieval Systems", "Business Process Integration"], tags: ["OpenAI", "Automation", "RAG"] },
    { icon: GitBranch, title: "Website Development", badge: "Experience**", description: "Beautiful, modern websites built for speed, conversions, and seamless user experience—powered by intelligent automation.", features: ["Modern UI/UX", "High-performance Frontend", "SEO Optimization", "Smart Content Automation"], tags: ["Next.js", "React", "Tailwind"] },
    { icon: Workflow, title: "Web App Development", badge: "Scalable**", description: "Robust, reliable web apps crafted with clean engineering, automation, and intelligent workflows.", features: ["Custom Web Applications", "API Integrations", "Role-based Dashboards", "Automated Testing & CI/CD"], tags: ["Node.js", "FastAPI", "PostgreSQL"] },
  ];

  const bottomFeatures = [
    { icon: Shield, title: "Intelligent by Default", description: "AI-driven logic and automation built into the core of every solution—websites, apps, and workflows alike." },
    { icon: Cloud, title: "Future-Proof Architecture", description: "Scalable, modular systems designed to grow with your business and adapt to new technologies without rewrites." },
    { icon: Code, title: "Fast Delivery Cycle", description: "A streamlined development process powered by automation, ensuring quicker launches and consistent improvements." },
  ];

  return (
    <section id="services" className="section-padding bg-card/20">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Our Services</Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We <span className="gradient-text">Build</span> Smarter Systems</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">AI-powered automation, intelligent interfaces, and high-performance web platforms—designed to scale with your business.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} whileHover={{ y: -10, boxShadow: "0 0 40px rgba(64, 255, 170, 0.2)" }} className="gradient-border p-6 rounded-xl bg-card/50 backdrop-blur-sm transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }} className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <Badge variant="secondary" className="text-xs">{service.badge}</Badge>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm"><div className="h-1.5 w-1.5 rounded-full bg-primary" /><span className="text-muted-foreground">{feature}</span></li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (<motion.span key={tag} whileHover={{ scale: 1.1 }} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">{tag}</motion.span>))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-12 gradient-border p-8 rounded-xl bg-card/30 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {bottomFeatures.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }} whileHover={{ scale: 1.05 }}>
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}><feature.icon className="h-8 w-8 text-primary mx-auto mb-2" /></motion.div>
                <h4 className="font-semibold mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
