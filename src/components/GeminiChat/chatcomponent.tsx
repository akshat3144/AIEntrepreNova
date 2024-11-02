"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface GeminiChatProps {
  toolType: string;
}

const GeminiChat: React.FC<GeminiChatProps> = ({ toolType }) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md text-black">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          placeholder="Enter your prompt..."
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg text-left">
          <h2 className="text-xl mb-2">Response:</h2>
          <p className="text-gray-700 whitespace-pre-line">
            {response.replace(/\*\*(.*?)\*\*/g, "$1")}
          </p>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;
