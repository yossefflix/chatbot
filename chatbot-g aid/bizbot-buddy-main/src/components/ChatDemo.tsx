import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatDemoProps {
  clientHash?: string;
  businessName?: string;
}

export const ChatDemo = ({ clientHash, businessName }: ChatDemoProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: clientHash 
        ? `Hi! I'm the AI assistant for ${businessName || "this business"}. How can I help you today?`
        : "Hi! I'm an AI assistant trained on your business data. Ask me anything about products, services, hours, or any other info!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    // If no clientHash, show demo response
    if (!clientHash) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "This is a demo response! When you register your business, your chatbot will answer questions using your actual business data.",
          },
        ]);
        setLoading(false);
      }, 1500);
      return;
    }

    // Real API call to n8n
    try {
      const response = await fetch("https://n8.g-aid.cloud/webhook/chatbot-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_hash: clientHash,
          question: userMessage,
        }),
      });

      const data = await response.json();

      if (data.success && data.answer) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.answer },
        ]);
      } else {
        throw new Error(data.error || "Failed to get response");
      }
    } catch (error) {
      console.error("Chat error:", error);
      toast.error("Connection error");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="demo">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            See It In{" "}
            <span className="gradient-text">Action</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            This is what your customers will experience.
          </p>
        </div>

        {/* Chat demo */}
        <div className="rounded-xl sm:rounded-2xl bg-card border border-border/50 overflow-hidden shadow-[0_0_60px_hsl(187_85%_53%/0.1)]">
          {/* Chat header */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-muted/50 border-b border-border/50 flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm sm:text-base truncate">Business AI Assistant</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Always online • Instant responses</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs text-muted-foreground hidden sm:inline">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 sm:h-80 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 sm:gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === "user"
                      ? "bg-primary"
                      : "bg-muted"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
                  ) : (
                    <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] sm:max-w-[75%] px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-muted rounded-tl-sm"
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-muted flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                </div>
                <div className="bg-muted px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl rounded-tl-sm">
                  <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-primary" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-muted/30 border-t border-border/50">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex gap-2 sm:gap-3"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about products, services..."
                className="bg-card border-border/50 focus:border-primary text-sm"
              />
              <Button type="submit" variant="default" disabled={loading || !input.trim()} size="sm" className="px-3 sm:px-4">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
