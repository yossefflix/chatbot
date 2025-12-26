import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, CheckCircle, Copy, Sparkles } from "lucide-react";
import { ChatDemo } from "@/components/ChatDemo";

interface RegistrationResult {
  success: boolean;
  client_hash: string;
  business_name: string;
  embed_snippet: string;
  message: string;
}

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RegistrationResult | null>(null);
  const [formData, setFormData] = useState({
    business_name: "",
    services: "",
    products: "",
    hours: "",
    other_info: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // The n8n webhook endpoint
      const response = await fetch("https://n8.g-aid.cloud/webhook/register-client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          business_name: formData.business_name,
          services: formData.services.split(",").map(s => s.trim()).filter(Boolean),
          products: formData.products.split(",").map(s => s.trim()).filter(Boolean),
          hours: formData.hours,
          other_info: formData.other_info,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data);
        toast.success("Your AI chatbot has been created!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Failed to register. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const chatbotUrl = result ? `${window.location.origin}/chatbot?hash=${result.client_hash}&name=${encodeURIComponent(result.business_name)}` : "";

  if (result) {
    return (
      <section className="py-16 sm:py-24 px-4 sm:px-6" id="register">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Your Chatbot is Ready! 🎉
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground px-4">
              Test your chatbot below or copy the embed code for your website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Live Chatbot Preview */}
            <div className="rounded-xl sm:rounded-2xl bg-card border border-border/50 overflow-hidden">
              <div className="px-3 sm:px-4 py-2 sm:py-3 bg-muted/50 border-b border-border/50">
                <h3 className="font-semibold text-xs sm:text-sm">Live Preview</h3>
              </div>
              <div className="p-3 sm:p-4">
                <ChatDemo clientHash={result.client_hash} businessName={result.business_name} />
              </div>
            </div>

            {/* Embed Code & Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border/50">
                <Label className="text-xs sm:text-sm font-medium mb-2 block">Embed Code</Label>
                <div className="relative">
                  <pre className="p-3 sm:p-4 rounded-lg bg-muted text-[10px] sm:text-xs overflow-x-auto text-foreground/80">
{`<iframe src="${chatbotUrl}" width="400" height="600"></iframe>`}
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-1 sm:top-2 right-1 sm:right-2"
                    onClick={() => copyToClipboard(`<iframe src="${chatbotUrl}" width="400" height="600"></iframe>`)}
                  >
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>

                <div className="mt-3 sm:mt-4">
                  <Label className="text-xs sm:text-sm font-medium mb-2 block">Direct Link</Label>
                  <div className="relative">
                    <Input value={chatbotUrl} readOnly className="pr-10 sm:pr-12 text-[10px] sm:text-xs" />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-0.5 sm:top-1 right-0.5 sm:right-1"
                      onClick={() => copyToClipboard(chatbotUrl)}
                    >
                      <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border/50">
                <div className="grid grid-cols-1 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-muted-foreground">Business:</span>
                    <p className="font-medium">{result.business_name}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Client Hash:</span>
                    <p className="font-mono text-[10px] sm:text-xs truncate">{result.client_hash}</p>
                  </div>
                </div>
              </div>

              <Button variant="outline" onClick={() => setResult(null)} className="w-full text-sm">
                Register Another Business
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative" id="register">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(187_85%_53%/0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground">Free to Get Started</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
            Create Your{" "}
            <span className="gradient-text">AI Chatbot</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Fill in your business details and we'll create a custom AI chatbot in seconds.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50 space-y-4 sm:space-y-6">
            <div>
              <Label htmlFor="business_name" className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">
                Business Name *
              </Label>
              <Input
                id="business_name"
                placeholder="e.g., Joe's Coffee Shop"
                value={formData.business_name}
                onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                required
                className="bg-muted/50 border-border/50 focus:border-primary text-sm"
              />
            </div>

            <div>
              <Label htmlFor="services" className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">
                Services (comma-separated)
              </Label>
              <Input
                id="services"
                placeholder="e.g., Coffee brewing, Catering"
                value={formData.services}
                onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                className="bg-muted/50 border-border/50 focus:border-primary text-sm"
              />
            </div>

            <div>
              <Label htmlFor="products" className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">
                Products (comma-separated)
              </Label>
              <Input
                id="products"
                placeholder="e.g., Espresso, Latte, Croissants"
                value={formData.products}
                onChange={(e) => setFormData({ ...formData, products: e.target.value })}
                className="bg-muted/50 border-border/50 focus:border-primary text-sm"
              />
            </div>

            <div>
              <Label htmlFor="hours" className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">
                Business Hours
              </Label>
              <Input
                id="hours"
                placeholder="e.g., Mon-Fri 7am-8pm"
                value={formData.hours}
                onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                className="bg-muted/50 border-border/50 focus:border-primary text-sm"
              />
            </div>

            <div>
              <Label htmlFor="other_info" className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">
                Additional Information
              </Label>
              <Textarea
                id="other_info"
                placeholder="Any other details customers might ask about..."
                value={formData.other_info}
                onChange={(e) => setFormData({ ...formData, other_info: e.target.value })}
                rows={3}
                className="bg-muted/50 border-border/50 focus:border-primary resize-none text-sm"
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full text-sm sm:text-base"
            disabled={loading || !formData.business_name}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                Creating Your Chatbot...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                Create My AI Chatbot
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};
