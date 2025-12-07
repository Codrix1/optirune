import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const contactItems = [
    { icon: Mail, title: "Email", content: "Optirunesolutions@gmail.com", href: "mailto:Optirunesolutions@gmail.com" },
    { icon: Phone, title: "Phone", content: "+20 155 636 2555" },
    { icon: MapPin, title: "Location", content: "Remote & On-site" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="gradient-text">Connect</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Ready to optimize your platform? Get in touch and let's discuss how we can help.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.02 }} className="gradient-border p-6 rounded-xl bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactItems.map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }} whileHover={{ x: 5 }} className="flex items-start gap-4">
                    <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.4 }} className="p-2 rounded-lg bg-primary/10"><item.icon className="h-5 w-5 text-primary" /></motion.div>
                    <div>
                      <p className="font-medium mb-1">{item.title}</p>
                      {item.href ? <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.content}</a> : <p className="text-sm text-muted-foreground">{item.content}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} whileHover={{ scale: 1.02 }} className="gradient-border p-6 rounded-xl bg-card/50 backdrop-blur-sm">
              <h4 className="font-semibold mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Monday - Friday</span><span className="font-medium">9:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Timezone</span><span className="font-medium">EST</span></div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} whileHover={{ scale: 1.01 }} className="gradient-border p-8 rounded-xl bg-card/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {[{ id: "name", label: "Name", type: "text", placeholder: "John Doe" }, { id: "email", label: "Email", type: "email", placeholder: "john@company.com" }, { id: "company", label: "Company", type: "text", placeholder: "Your Company", required: false }].map((field, i) => (
                <motion.div key={field.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1 }} className="space-y-2">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <Input id={field.id} type={field.type} value={formData[field.id as keyof typeof formData]} onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })} placeholder={field.placeholder} required={field.required !== false} className="bg-background/50 transition-all duration-300 focus:shadow-lg focus:shadow-primary/10" />
                  </motion.div>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project..." required rows={4} className="bg-background/50 resize-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/10" />
                </motion.div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-gradient-main hover:opacity-90 transition-opacity">Send Message</Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
