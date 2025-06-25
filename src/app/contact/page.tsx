"use client";

import React, { useState } from "react";
import ContactForm from "@/components/Contact/ContactForm";
import { BlurFade } from "@/components/ui/BlurFade";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";

const ContactPage = () => {
  const searchParams = useSearchParams();
  const defaultType = searchParams.get("type") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: defaultType,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <BlurFade>
        <div className="max-w-3xl mx-auto mt-24">
          {/* <h1 className="text-4xl font-bold text-center md:mt-24 mb-12">Contact</h1> */}

          <div className="mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="bg-blue-500/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="h-10 w-10 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Thank You for Reaching Out!
                </h2>
                <p className="text-gray-400 mb-6">
                  We've received your message and will get back to you as soon
                  as possible.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      topic: "",
                      message: "",
                    });
                  }}
                  className="py-2 px-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <ContactForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                setIsSubmitted={setIsSubmitted}
              />
            )}
          </div>
        </div>
      </BlurFade>
    </main>
  );
};

export default ContactPage;
