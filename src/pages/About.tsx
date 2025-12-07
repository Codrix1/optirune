import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Rocket, Award } from "lucide-react";
import GradualBlur from "@/components/GradualBlur";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    { icon: Target, title: "Quality First", description: "We never compromise on the quality of our solutions." },
    { icon: Users, title: "Team Focused", description: "Your team's success is our primary measure of success." },
    { icon: Rocket, title: "Innovation", description: "We stay ahead of the curve with cutting-edge practices." },
  ];

  const optimizeFor = [
    { icon: Award, title: "Developer Experience", description: "Making it easy and enjoyable for developers to ship code" },
    { icon: Rocket, title: "Delivery Speed", description: "Reducing time from commit to production" },
    { icon: Target, title: "Reliability", description: "Building resilient systems that scale" },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <Badge variant="outline" className="border-primary/30 text-primary">About Optirune</Badge>
              </motion.div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-6xl font-bold">
              Building <span className="gradient-text">Better</span> Platforms
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-muted-foreground">
              We're a team of platform engineers and DevOps experts passionate about helping product teams ship faster and scale better.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Optirune was founded by engineers who experienced firsthand the challenges of scaling platforms and teams. We saw brilliant products slow down due to infrastructure complexity and delivery bottlenecks.</p>
                <p>Today, we work with product teams to optimize their platforms, streamline their processes, and accelerate their delivery—so they can focus on what matters: building great products.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} whileHover={{ scale: 1.02 }} className="gradient-border p-8 rounded-xl bg-card/50 backdrop-blur-sm space-y-6">
              <h3 className="text-2xl font-bold">What We Optimize For</h3>
              <div className="space-y-4">
                {optimizeFor.map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }} whileHover={{ x: 5 }}>
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.4 }}><item.icon className="h-5 w-5 text-primary" /></motion.div>
                      <h4 className="font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <motion.div key={value.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} whileHover={{ y: -10, boxShadow: "0 0 40px rgba(64, 255, 170, 0.2)" }} className="gradient-border p-6 rounded-xl bg-card/50 backdrop-blur-sm text-center transition-all duration-300">
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }} className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} whileHover={{ scale: 1.01 }} className="gradient-border p-12 rounded-xl bg-card/30 backdrop-blur-sm text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Let's discuss how we can help optimize your platform and accelerate your delivery.</p>
            <motion.a href="/#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-gradient-main hover:opacity-90 transition-opacity">Contact Us</Button>
            </motion.a>
          </motion.div>
        </div>
      </section>
      <GradualBlur target="page" position="bottom" height="6rem" strength={2} divCount={5} curve="bezier" exponential={true} opacity={1} />
    </Layout>
  );
};

export default About;
