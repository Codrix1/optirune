import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="font-bold text-lg mb-4 gradient-text">Optirune</h3>
            <p className="text-sm text-muted-foreground">Helping teams scale with intelligent websites, automated workflows, and powerful web apps</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><motion.a href="/#services" className="hover:text-foreground transition-colors inline-block" whileHover={{ x: 5 }}>AI Agents & Automation</motion.a></li>
              <li><motion.a href="/#services" className="hover:text-foreground transition-colors inline-block" whileHover={{ x: 5 }}>Website Development</motion.a></li>
              <li><motion.a href="/#services" className="hover:text-foreground transition-colors inline-block" whileHover={{ x: 5 }}>Web App Development</motion.a></li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><motion.div whileHover={{ x: 5 }}><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></motion.div></li>
              <li><motion.a href="/#contact" className="hover:text-foreground transition-colors inline-block" whileHover={{ x: 5 }}>Contact</motion.a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }} className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Optirune. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
