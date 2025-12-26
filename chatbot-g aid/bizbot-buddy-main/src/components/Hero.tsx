import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-24 sm:pt-20 pb-8 sm:pb-0">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(187_85%_53%/0.08)_0%,transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 mb-6 sm:mb-8 animate-fade-up">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          <span className="text-xs sm:text-sm text-muted-foreground">AI-Powered Customer Support</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 animate-fade-up animation-delay-200">
          <span className="block sm:inline">Ultra-Level Support</span>{" "}
          <span className="gradient-text block sm:inline">From G AID</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 px-2 animate-fade-up animation-delay-400">
          Train a custom AI chatbot on your business data. Answer customer questions 24/7 with zero wait time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:gap-4 justify-center px-4 sm:px-0 animate-fade-up animation-delay-600">
          <Button variant="hero" size="lg" onClick={scrollToRegister} className="w-full sm:w-auto text-sm sm:text-base">
            Get Your AI Chatbot
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto text-sm sm:text-base">
            <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
            See Demo
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border/30 animate-fade-up animation-delay-600">
          <p className="text-muted-foreground text-xs sm:text-sm mb-4">Trusted by businesses worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <div className="text-xl sm:text-2xl font-display font-bold">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Active Chatbots</div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="text-xl sm:text-2xl font-display font-bold">1M+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Questions Answered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
