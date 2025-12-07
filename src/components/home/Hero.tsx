import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { motion, type Easing } from "framer-motion";

const easeOutQuart: Easing = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutQuart,
    },
  },
};

const kpiVariants = {
  initial: { opacity: 0, scale: 0.8, y: 40 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.6 + i * 0.15,
      duration: 0.5,
      ease: easeOutQuart,
    },
  }),
};

export const Hero = () => {
  const kpis = [
    { icon: Zap, label: "Satisfied Customers", value: "100%" },
    { icon: Users, label: "Web Projects Launched", value: "10+" },
    { icon: TrendingUp, label: "Avg. Efficiency Boost", value: "90%" },
  ];

  return (
    <section className="relative overflow-hidden section-padding">
      {/* Animated ambient background effects */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 inline-block"
            >
              AI-Driven Experiences for Modern Businesses
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Build Smarter{" "}
            <span className="gradient-text">Websites</span>
            <br />
            Which Scale Faster with AI-Powered Digital Systems.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We create intelligent websites, automated workflows, and high-performance web apps—combining AI agents with clean engineering to help your business operate faster, leaner, and more efficiently.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-main hover:opacity-90 transition-opacity group">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                Book a Strategy Call
              </Button>
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                custom={i}
                variants={kpiVariants}
                initial="initial"
                animate="animate"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(64, 255, 170, 0.3)",
                }}
                className="gradient-border p-6 rounded-lg bg-card/50 backdrop-blur-sm transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <kpi.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                </motion.div>
                <div className="text-3xl font-bold gradient-text mb-1">{kpi.value}</div>
                <div className="text-sm text-muted-foreground">{kpi.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
