import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Lock } from "lucide-react";

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState(searchParams.get("mode") || "login");

  useEffect(() => {
    const paramMode = searchParams.get("mode");
    if (paramMode && (paramMode === "login" || paramMode === "signup")) {
      setMode(paramMode);
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setMode(value);
    setSearchParams({ mode: value });
  };

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    toast.success(`${type === "login" ? "Logged in" : "Account created"} successfully!`);
  };

  return (
    <Layout>
      <section className="section-padding min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Welcome to <span className="gradient-text">Optirune</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Access your platform optimization dashboard and manage your projects.
              </p>
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Secure authentication</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Access to all features</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">24/7 support</span>
                </div>
              </div>
            </div>

            <div className="gradient-border p-8 rounded-xl bg-card/50 backdrop-blur-sm">
              <Tabs value={mode} onValueChange={handleTabChange}>
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="login">Log In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={(e) => handleSubmit(e, "login")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-main hover:opacity-90 transition-opacity">
                      Log In
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={() => handleTabChange("signup")}
                        className="text-primary hover:underline"
                      >
                        Sign up
                      </button>
                    </p>
                  </form>
                </TabsContent>

                <TabsContent value="signup">
                  <form onSubmit={(e) => handleSubmit(e, "signup")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input
                        id="signup-name"
                        placeholder="John Doe"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-main hover:opacity-90 transition-opacity">
                      Create Account
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => handleTabChange("login")}
                        className="text-primary hover:underline"
                      >
                        Log in
                      </button>
                    </p>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Auth;
