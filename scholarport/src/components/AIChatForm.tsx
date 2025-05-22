'use client';
import { useState } from 'react';

export default function AIChatForm() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    setLoading(true);
    const res = await fetch('/api/ai-counselor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.response);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-2">AI Counselor</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        rows={4}
        placeholder="Ask about study destinations, courses, etc."
      />
      <button onClick={askAI} className="bg-blue-500 text-white px-4 py-2 rounded">
        {loading ? 'Thinking...' : 'Ask AI'}
      </button>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}