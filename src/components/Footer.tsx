import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16 py-12 px-8 rounded-3xl bg-gradient-to-br from-card to-muted border border-border/50">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Support?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join hundreds of businesses already using AI to delight their customers.
          </p>
          <Button variant="hero" size="lg" onClick={scrollToRegister}>
            Get Started Free
          </Button>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">G AID</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} G AID. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
