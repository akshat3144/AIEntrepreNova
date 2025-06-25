import React, { ChangeEvent, FormEvent, Dispatch, SetStateAction } from "react";
import {
  Send,
  ArrowRight,
  MessageSquare,
  HelpCircle,
  Share2,
  Users,
} from "lucide-react";

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    topic: string;
    message: string;
  };
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
  isSubmitting: boolean;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  handleChange,
  handleSubmit,
  isSubmitting,
  setIsSubmitted,
}) => {
  const topicOptions = [
    {
      value: "question",
      label: "Ask a Question",
      icon: <HelpCircle className="h-4 w-4" />,
    },
    {
      value: "share",
      label: "Share an Opportunity",
      icon: <Share2 className="h-4 w-4" />,
    },
    {
      value: "feedback",
      label: "Provide Feedback",
      icon: <MessageSquare className="h-4 w-4" />,
    },
    {
      value: "community",
      label: "Community Testimonial",
      icon: <Users className="h-4 w-4" />,
    },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-700/50 border border-gray-600 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-700/50 border border-gray-600 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="topic"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
            className="w-full bg-gray-700/50 border border-gray-600 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select a topic
            </option>
            {topicOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-gray-700/50 border border-gray-600 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
            placeholder="How can we help you?"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all flex items-center justify-center disabled:opacity-50"
        >
          {isSubmitting ? (
            <>Processing...</>
          ) : (
            <>
              Send Message <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
