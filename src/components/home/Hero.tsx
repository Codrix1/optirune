import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const kpis = [
    { icon: Zap, label: "50% faster deploys", value: "50%" },
    { icon: Users, label: "30+ teams scaled", value: "30+" },
    { icon: TrendingUp, label: "90% cost reduction", value: "90%" },
  ];

  return (
    <section className="relative overflow-hidden section-padding">
      {/* Ambient background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              Platform Engineering & DevOps Excellence
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Optimize Your{" "}
            <span className="gradient-text">Platform</span>
            <br />
            Ship Faster, Scale Better
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We help product teams build robust platforms, streamline DevOps workflows, 
            and accelerate delivery—without the complexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#services">
              <Button size="lg" className="bg-gradient-main hover:opacity-90 transition-opacity group">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                Book Discovery Call
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="gradient-border p-6 rounded-lg bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300"
              >
                <kpi.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold gradient-text mb-1">{kpi.value}</div>
                <div className="text-sm text-muted-foreground">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
