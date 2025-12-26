import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { RegisterForm } from "@/components/RegisterForm";
import { ChatDemo } from "@/components/ChatDemo";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ChatDemo />
        <RegisterForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
