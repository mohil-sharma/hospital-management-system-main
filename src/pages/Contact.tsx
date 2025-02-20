import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="max-w-2xl">
          <p className="text-lg text-muted-foreground mb-6">
            We're here to help. Reach out to us for any questions or concerns.
          </p>
          <div className="space-y-4">
            <p><strong>Email:</strong> contact@hospital.com</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Healthcare Ave, Medical City, MC 12345</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;