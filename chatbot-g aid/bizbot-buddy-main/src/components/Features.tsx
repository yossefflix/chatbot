import { Bot, Shield, Zap, Code, Database, Globe } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Trained on Your Data",
    description: "Your chatbot learns everything about your business—services, products, hours, and more.",
  },
  {
    icon: Zap,
    title: "Instant Answers",
    description: "Customers get accurate responses in seconds, 24/7. No more waiting for support.",
  },
  {
    icon: Code,
    title: "Easy Integration",
    description: "Copy one line of code. Paste it anywhere. Your chatbot is live in minutes.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Each business gets a unique hash. Your data stays private and protected.",
  },
  {
    icon: Database,
    title: "Smart Memory",
    description: "Vector database technology ensures your chatbot always finds the right answers.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Embed on any website, platform, or app. No technical expertise required.",
  },
];

export const Features = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="features">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
            Everything You Need to{" "}
            <span className="gradient-text">Automate Support</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Powerful features designed for businesses who want smart, effortless customer support.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_hsl(187_85%_53%/0.1)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
