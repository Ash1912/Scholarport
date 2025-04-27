// src/components/LeadForm.tsx
"use client";

import { useState } from "react";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to Supabase
    console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow space-y-4">
      <h2 className="text-2xl font-bold">Add New Lead</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border rounded-md"
        required
      />
      <input
        type="email"
        placeholder="Student Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded-md"
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
        Submit Lead
      </button>
    </form>
  );
}
