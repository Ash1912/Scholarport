// src/components/AIChatBox.tsx
"use client";

import { useState } from "react";

export default function AIChatBox() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    const res = await fetch("/api/counselor", {
      method: "POST",
      body: JSON.stringify({ studentProfile: input }),
    });
    const data = await res.json();
    setResponse(data.content);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow space-y-4">
      <h2 className="text-2xl font-bold">AI Study Counseling</h2>
      <textarea
        placeholder="Describe your background & interests..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-3 border rounded-md"
        rows={4}
      />
      <button
        onClick={handleAsk}
        className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700"
      >
        Ask AI
      </button>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="font-semibold mb-2">Suggested Courses:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
