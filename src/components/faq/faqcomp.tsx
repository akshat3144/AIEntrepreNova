"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left mb-6 p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex gap-4 items-start justify-between">
        <div className="max-w-md">
          <h6
            className={`text-lg font-semibold mb-0 ${
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
      question: "What is the best way to raise funds for a startup?",
      answer:
        "Explore various options such as microfinance, crowdfunding, and angel investors. Make sure to present a clear and compelling pitch that explains your mission and potential impact.",
    },
    {
      question: "How do I promote my business on a limited budget?",
      answer:
        "Utilize social media, network with local communities, and partner with other businesses. Focus on word-of-mouth marketing and customer satisfaction to build a loyal customer base.",
    },
    {
      question: "What are the legal steps needed to start a business in India?",
      answer:
        "Register your business with the government, get a GST number if needed, and comply with local and national regulations. Consult with a legal expert for comprehensive guidance.",
    },
    {
      question: "How do I choose the right business idea for my community?",
      answer:
        "Look at the needs and challenges within your local area. Consider what resources are readily available and what services or products could genuinely benefit people in your community. Conduct informal surveys to understand demand and use this to guide your decision.",
    },
    {
      question:
        "What is the simplest way to register a small business in India?",
      answer:
        "If you’re just starting, consider registering as a Sole Proprietorship or an LLP (Limited Liability Partnership) for simpler setup and compliance. You can register online through the Ministry of Corporate Affairs (MCA) website or consult with local authorities.",
    },
    {
      question: "How can I get a loan to start my business?",
      answer:
        "Check out government programs like the Pradhan Mantri Mudra Yojana, which offers loans specifically for small businesses. You can also explore microfinance institutions that focus on rural entrepreneurs and small-scale industries.",
    },
    {
      question: "How do I set the prices for my products or services?",
      answer:
        "First, calculate your costs, including raw materials, labor, and overhead. Then, research the prices of similar products in your area to ensure competitiveness. Factor in a reasonable profit margin while keeping prices affordable for your target audience..",
    },
    {
      question:
        "How can I improve my online presence without much technical knowledge?",
      answer:
        "Start with social media platforms like Facebook and WhatsApp Business, which are easy to set up and reach a wide audience. If possible, create a simple website using tools like Wix or WordPress, or join local e-commerce platforms that cater to small businesses.",
    },
    {
      question:
        "What are some effective ways to promote my business in rural areas?",
      answer:
        "Word-of-mouth, posters in community spaces, and local events are all effective. Partner with other businesses or village leaders to expand your reach. Mobile marketing via WhatsApp or SMS can also be very effective in rural areas.",
    },
    {
      question: "How do I manage my business finances?",
      answer:
        "Keep track of all expenses and earnings using simple tools like Google Sheets or even a notebook. Set aside money for reinvestment and emergencies, and avoid unnecessary expenses. Learning basic accounting practices can also help in the long run.",
    },
    {
      question: "Can I access government schemes to support my business?",
      answer:
        "Yes, many government schemes, like Start-Up India, Pradhan Mantri Awas Yojana, and Pradhan Mantri Mudra Yojana, are aimed at supporting small and rural businesses. Check the official government websites or visit a local business development office to find programs that suit your business.",
    },
    {
      question: "How do I hire and train employees effectively?",
      answer:
        "Look for people who are passionate and willing to learn. You can train them on-the-job, teach them about the values and vision of your business, and assign responsibilities based on their strengths. Use local training programs if available.",
    },
    {
      question: "What should I do if my business faces financial difficulties?",
      answer:
        "Consider cutting unnecessary expenses, renegotiating with suppliers, and finding ways to generate quick revenue, like offering promotions. Additionally, communicate with any creditors or lenders to explore options for restructuring payments temporarily.",
    },
    {
      question: "How can I find mentors or advisors to guide my business?",
      answer:
        "Reach out to local business development centers or online platforms like LinkedIn. Many experienced entrepreneurs are willing to mentor newcomers, and platforms like Niti Aayog’s Women Entrepreneurship Platform (WEP) also provide mentorship programs.",
    },
    {
      question: "What are some low-cost ways to learn new business skills?",
      answer:
        "Use free online resources like YouTube, Coursera, and government-sponsored skill portals. Additionally, seek out workshops and training sessions organized by local business centers, NGOs, or community groups.",
    },
    {
      question:
        "How do I protect my business ideas and products from being copied?",
      answer:
        "You can file for a trademark to protect your brand name and logo, or consider a patent if you have a unique product or process. If you are not ready for formal protections, keep detailed records to establish ownership and originality of your ideas.",
    },
    {
      question: "How can I adapt my business to changing market conditions?",
      answer:
        "Stay informed about market trends by talking to customers and staying connected with other entrepreneurs. Flexibility and willingness to innovate can help; for example, you can adjust your product line based on seasonal demands or expand to nearby areas if demand shifts.",
    },
    {
      question: "What is the best way to handle customer complaints?",
      answer:
        "Listen patiently, apologize if needed, and aim to resolve issues quickly. A customer-focused approach can help retain loyalty even if something goes wrong. You could even consider a follow-up to ensure the customer is satisfied.",
    },
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
          {/* New section */}
          <div className="mt-10 text-center">
            <p className="text-white text-xl font-medium">
              Got a question we didn’t cover? Ask us here! We’ll get back to you
              with advice tailored to help you succeed.
            </p>
            <a href="https://forms.gle/zGBpUAZRipvMK8Xa6">
              <button className="mt-4 py-3 px-6 font-medium text-sm text-center text-white bg-[#387cfc] hover:bg-blue-500 active:bg-[#387cfc] active:shadow-none rounded-lg shadow">
                Ask Us
              </button>{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
