import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI chatbot learn about my business?",
    answer: "When you register, you provide details about your services, products, hours, and other information. Our AI processes this data and creates embeddings that allow the chatbot to answer questions accurately and naturally.",
  },
  {
    question: "How do I add the chatbot to my website?",
    answer: "After registration, you'll receive a simple embed code (an iframe snippet). Just copy and paste it into your website's HTML where you want the chatbot to appear. No coding knowledge required!",
  },
  {
    question: "Is my business data secure?",
    answer: "Absolutely. Each business receives a unique cryptographic hash. Your data is stored separately and securely, and only your chatbot can access your information.",
  },
  {
    question: "Can I update my business information later?",
    answer: "Yes! You can re-register with updated information anytime. The AI will learn your new data and provide updated responses to customers.",
  },
  {
    question: "How accurate are the chatbot's answers?",
    answer: "The chatbot only answers based on the information you provide. It uses advanced vector search technology to find the most relevant answers, ensuring high accuracy for customer questions.",
  },
  {
    question: "What if a customer asks something not in my data?",
    answer: "The AI is designed to politely let customers know when it doesn't have specific information, and can suggest they contact you directly for unique inquiries.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Everything you need to know about our AI chatbot platform.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/50 border border-border/50 rounded-lg sm:rounded-xl px-4 sm:px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-4 sm:py-5 text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
