import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Rocket, Award } from "lucide-react";
import GradualBlur from "@/components/GradualBlur"

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We never compromise on the quality of our solutions.",
    },
    {
      icon: Users,
      title: "Team Focused",
      description: "Your team's success is our primary measure of success.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge practices.",
    },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <Badge variant="outline" className="border-primary/30 text-primary">
              About Optirune
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              Building <span className="gradient-text">Better</span> Platforms
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of platform engineers and DevOps experts passionate about 
              helping product teams ship faster and scale better.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Optirune was founded by engineers who experienced firsthand the challenges 
                  of scaling platforms and teams. We saw brilliant products slow down due to 
                  infrastructure complexity and delivery bottlenecks.
                </p>
                <p>
                  Today, we work with product teams to optimize their platforms, streamline 
                  their processes, and accelerate their delivery—so they can focus on what 
                  matters: building great products.
                </p>
              </div>
            </div>

            <div className="gradient-border p-8 rounded-xl bg-card/50 backdrop-blur-sm space-y-6">
              <h3 className="text-2xl font-bold">What We Optimize For</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Developer Experience</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Making it easy and enjoyable for developers to ship code
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Rocket className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Delivery Speed</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Reducing time from commit to production
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Reliability</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Building resilient systems that scale
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="gradient-border p-6 rounded-xl bg-card/50 backdrop-blur-sm text-center hover:neon-glow transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="gradient-border p-12 rounded-xl bg-card/30 backdrop-blur-sm text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help optimize your platform and accelerate your delivery.
            </p>
            <a href="/#contact">
              <Button size="lg" className="bg-gradient-main hover:opacity-90 transition-opacity">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>
      <GradualBlur
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </Layout>
  );
};

export default About;
