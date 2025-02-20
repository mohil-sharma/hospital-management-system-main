import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/FAQ";

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;