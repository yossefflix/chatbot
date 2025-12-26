import { ClipboardList, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Tell Us About Your Business",
    description: "Fill in your business details—services, products, hours, and any other info your customers need.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Learns & Creates",
    description: "Our AI processes your data and creates a custom chatbot trained specifically on your business.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Copy, Paste, Launch",
    description: "Get your embed code and paste it on your website. Your AI chatbot is live instantly!",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden" id="how-it-works">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(252_87%_67%/0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
            Launch Your Chatbot in{" "}
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            No coding. No complexity. Just results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-card to-muted border border-border/50 mb-4 sm:mb-6 relative">
                  <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                  <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                </div>
                
                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-4 md:px-0">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
