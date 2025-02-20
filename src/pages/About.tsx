import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-lg text-muted-foreground mb-6">
          We are dedicated to providing exceptional healthcare services to our community.
          With state-of-the-art facilities and a team of experienced healthcare professionals,
          we strive to deliver the highest quality of care to our patients.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;