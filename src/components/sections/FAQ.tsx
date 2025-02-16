import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQItem = ({ question, answer }) => (
  <AccordionItem value={question}>
    <AccordionTrigger>{question}</AccordionTrigger>
    <AccordionContent>{answer}</AccordionContent>
  </AccordionItem>
);

export const FAQ = () => {
  const faqData = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment through our website or by calling our office.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of medical services including general check-ups, specialist consultations, and emergency care.",
    },
    {
      question: "What are your visiting hours?",
      answer: "Our visiting hours are from 9 AM to 9 PM daily.",
    },
  ];

  return (
    <section className="bg-mesh w-full px-16 py-28 overflow-hidden max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="w-[560px] max-w-full text-black">
        <h2 className="text-5xl font-bold leading-[1.2] max-md:max-w-full max-md:text-[40px]">
          Frequently Asked Questions
        </h2>
        <p className="text-lg font-normal mt-6 max-md:max-w-full">
          Find answers to common questions about our services.
        </p>
      </div>

      <div className="w-full mt-20 max-md:max-w-full max-md:mt-10">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </Accordion>
      </div>
    </section>
  );
};
