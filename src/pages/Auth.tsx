import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState(searchParams.get("mode") || "login");

  useEffect(() => {
    const paramMode = searchParams.get("mode");
    if (paramMode && (paramMode === "login" || paramMode === "signup")) setMode(paramMode);
  }, [searchParams]);

  const handleTabChange = (value: string) => { setMode(value); setSearchParams({ mode: value }); };
  const handleSubmit = (e: React.FormEvent, type: string) => { e.preventDefault(); toast.success(`${type === "login" ? "Logged in" : "Account created"} successfully!`); };

  const features = ["Secure authentication", "Access to all features", "24/7 support"];

  return (
    <Layout>
      <section className="section-padding min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.05, rotate: 5 }} className="inline-flex p-3 rounded-lg bg-primary/10">
                <Lock className="h-8 w-8 text-primary" />
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-bold">
                Welcome to <span className="gradient-text">Optirune</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-muted-foreground">
                Access your platform optimization dashboard and manage your projects.
              </motion.p>
              <div className="space-y-4 pt-6">
                {features.map((feature, i) => (
                  <motion.div key={feature} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }} whileHover={{ x: 10 }} className="flex items-center gap-3">
                    <motion.div whileHover={{ scale: 1.5 }} className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} whileHover={{ scale: 1.01 }} className="gradient-border p-8 rounded-xl bg-card/50 backdrop-blur-sm">
              <Tabs value={mode} onValueChange={handleTabChange}>
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <TabsList className="grid w-full grid-cols-2 mb-8"><TabsTrigger value="login">Log In</TabsTrigger><TabsTrigger value="signup">Sign Up</TabsTrigger></TabsList>
                </motion.div>

                <AnimatePresence mode="wait">
                  <TabsContent value="login" key="login">
                    <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} onSubmit={(e) => handleSubmit(e, "login")} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="login-email">Email</Label><Input id="login-email" type="email" placeholder="you@company.com" required className="bg-background/50" /></div>
                      <div className="space-y-2"><Label htmlFor="login-password">Password</Label><Input id="login-password" type="password" placeholder="••••••••" required className="bg-background/50" /></div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}><Button type="submit" className="w-full bg-gradient-main hover:opacity-90">Log In</Button></motion.div>
                      <p className="text-sm text-center text-muted-foreground">Don't have an account? <button type="button" onClick={() => handleTabChange("signup")} className="text-primary hover:underline">Sign up</button></p>
                    </motion.form>
                  </TabsContent>

                  <TabsContent value="signup" key="signup">
                    <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} onSubmit={(e) => handleSubmit(e, "signup")} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="signup-name">Full Name</Label><Input id="signup-name" placeholder="John Doe" required className="bg-background/50" /></div>
                      <div className="space-y-2"><Label htmlFor="signup-email">Email</Label><Input id="signup-email" type="email" placeholder="you@company.com" required className="bg-background/50" /></div>
                      <div className="space-y-2"><Label htmlFor="signup-password">Password</Label><Input id="signup-password" type="password" placeholder="••••••••" required className="bg-background/50" /></div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}><Button type="submit" className="w-full bg-gradient-main hover:opacity-90">Create Account</Button></motion.div>
                      <p className="text-sm text-center text-muted-foreground">Already have an account? <button type="button" onClick={() => handleTabChange("login")} className="text-primary hover:underline">Log in</button></p>
                    </motion.form>
                  </TabsContent>
                </AnimatePresence>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Auth;
