import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import GradientText from "../GradientText";
import { motion } from "framer-motion";

export const Header = () => {
  const navLinks = [
    { href: "/#services", label: "Services" },
    { to: "/about", label: "About" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div className="relative" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Zap className="h-6 w-6 text-primary" />
                <div className="absolute inset-0 blur-xl bg-primary/20" />
              </motion.div>
              <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={1} showBorder={false} className="custom-class text-xl font-bold">
                Optirune
              </GradientText>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div key={link.label} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }} whileHover={{ scale: 1.05 }}>
                {link.to ? (
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link>
                ) : (
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
                )}
              </motion.div>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};
