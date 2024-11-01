"use client"

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left mb-6 p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex gap-4 items-start justify-between">
        <div className="max-w-md">
          <h6
            className={`text-sm font-semibold mb-0 ${
              isOpen ? "text-primary" : "text-foreground"
            }`}
          >
            {question}
          </h6>
          {isOpen && (
            <p className="mt-4 text-sm text-muted-foreground">{answer}</p>
          )}
        </div>
        <span className="flex-shrink-0">
          {isOpen ? (
            <div className="w-9 h-9 flex items-center justify-center bg-primary rounded-full">
              <Minus className="w-5 h-5 text-primary-foreground" />
            </div>
          ) : (
            <div className="w-9 h-9 flex items-center justify-center bg-secondary rounded-full">
              <Plus className="w-5 h-5 text-primary" />
            </div>
          )}
        </span>
      </div>
    </button>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Do you provide a complete design style?",
      answer:
        "Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus.",
    },
    {
      question: "Do you have any terms & conditions?",
      answer:
        "We have comprehensive terms and conditions that protect both our customers and our business. Please refer to our terms page for detailed information.",
    },
    {
      question: "How to apply saturn to our project?",
      answer: "Our documentation provides step-by-step instructions for implementing Saturn in your project, including code examples and best practices."
    },
    {
      question: "How was the Terms & Condition?",
      answer: "Our terms and conditions are designed to be fair, transparent, and easy to understand while providing comprehensive coverage of all aspects of our service."
    },
    {
      question: "How much we can buy this product?",
      answer: "We offer flexible pricing tiers to suit different needs and scales. Contact our sales team for detailed pricing information."
    },
    {
      question: "How was the license?",
      answer: "Our licensing terms are straightforward and designed to protect both the user and creator while ensuring fair use of our products."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            Frequently Asked Questions
          </h2>
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;