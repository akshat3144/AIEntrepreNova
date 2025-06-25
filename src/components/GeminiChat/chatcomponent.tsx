"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Loader2, DownloadIcon, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

interface GeminiChatProps {
  toolType: string;
}

const GeminiChat: React.FC<GeminiChatProps> = ({ toolType }) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholders, setPlaceholders] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Set sample prompts based on tool type
    const toolPlaceholders = {
      tool1: [
        "Create a business plan for a rural organic farm",
        "Design a business plan for a handmade crafts store",
        "Generate a business plan for a rural tourism venture",
      ],
      tool2: [
        "Write an email to a potential investor about my rural business",
        "Draft a professional email for a partnership opportunity",
        "Compose an email to apply for a rural business grant",
      ],
      tool3: [
        "Create a marketing strategy for my handmade soap business",
        "Develop a marketing plan for a rural eco-tourism business",
        "Design a social media marketing strategy for my local food products",
      ],
      tool4: [
        "Create a 3-year financial plan for my rural store",
        "Generate a budget plan for starting a rural food processing unit",
        "Develop a cash flow forecast for my agriculture business",
      ],
      tool5: [
        "Generate a market research report for organic farming in my region",
        "Create an analysis of the rural tourism market in my area",
        "Develop a competitor analysis for handcrafted products",
      ],
    };

    setPlaceholders(
      toolPlaceholders[toolType as keyof typeof toolPlaceholders] || [
        "Enter your request here...",
      ]
    );
  }, [toolType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse(""); // Clear previous response

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, toolType }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error Response:", res.status, errorData);
        setResponse(errorData.error || "Failed to get response.");
        return;
      }

      const data = await res.json();
      setResponse(data.text);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Failed to get response.");
    } finally {
      setLoading(false);
    }
  };

  const downloadResponse = () => {
    if (!response) return;

    const element = document.createElement("a");
    const file = new Blob([response], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${toolType}-response-${new Date()
      .toISOString()
      .slice(0, 10)}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const resetForm = () => {
    setPrompt("");
    setResponse("");
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  // Select a random placeholder
  const getPlaceholder = () => {
    return placeholders[Math.floor(Math.random() * placeholders.length)];
  };

  return (
    <div className="w-full mx-auto text-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
            rows={6}
            placeholder={getPlaceholder()}
            required
          />
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="absolute bottom-3 right-3 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-700 disabled:opacity-50 transition-all duration-200"
            aria-label="Send message"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </div>
      </form>

      {response && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 p-6 bg-gray-800 border border-gray-700 rounded-lg text-left"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-white">Response</h2>
            <div className="flex space-x-2">
              <button
                onClick={resetForm}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="New request"
              >
                <RefreshCw className="h-5 w-5" />
              </button>
              <button
                onClick={downloadResponse}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Download response"
              >
                <DownloadIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              {response.replace(/\*\*(.*?)\*\*/g, "$1")}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GeminiChat;
