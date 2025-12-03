import { Link } from "react-router-dom";
// import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 gradient-text">Optirune</h3>
            <p className="text-sm text-muted-foreground">
             Helping teams scale with intelligent websites, automated workflows, and powerful web apps
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#services" className="hover:text-foreground transition-colors">
                  AI Agents & Automation
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-foreground transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-foreground transition-colors">
                  Web App Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Optirune. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
