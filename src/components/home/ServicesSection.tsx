import { Server, GitBranch, Workflow, Shield, Cloud, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ServicesSection = () => {
  const services = [
    {
      icon: Server,
      title: "Platform Engineering",
      badge: "Core Service",
      description: "Build scalable, maintainable platforms that empower your teams to ship faster.",
      features: [
        "Infrastructure as Code",
        "CI/CD Pipeline Design",
        "Container Orchestration",
        "Monitoring & Observability",
      ],
      tags: ["Kubernetes", "Terraform", "AWS"],
    },
    {
      icon: GitBranch,
      title: "DevOps Transformation",
      badge: "Accelerator",
      description: "Streamline your workflows and eliminate bottlenecks in your delivery process.",
      features: [
        "Process Optimization",
        "Tool Chain Integration",
        "Automation Strategy",
      ],
      tags: ["GitLab", "GitHub Actions"],
    },
    {
      icon: Workflow,
      title: "Process Optimization",
      badge: "Efficiency",
      description: "Identify and fix inefficiencies in your development and deployment workflows.",
      features: [
        "Workflow Analysis",
        "Bottleneck Identification",
        "Performance Tuning",
      ],
      tags: ["Metrics", "Analytics"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We <span className="gradient-text">Optimize</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end platform engineering and DevOps services tailored to your team's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="gradient-border p-6 rounded-xl bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {service.badge}
                </Badge>
              </div>

              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 gradient-border p-8 rounded-xl bg-card/30 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Secure by Default</h4>
              <p className="text-sm text-muted-foreground">
                Security best practices built into every solution
              </p>
            </div>
            <div>
              <Cloud className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Cloud Native</h4>
              <p className="text-sm text-muted-foreground">
                Leveraging modern cloud architecture patterns
              </p>
            </div>
            <div>
              <Code className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Developer First</h4>
              <p className="text-sm text-muted-foreground">
                Prioritizing developer experience and productivity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
