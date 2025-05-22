'use client';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login success');
    } catch (err) {
        console.error('Login failed:', err);
      alert('Login failed');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Login to Scholarport</h2>
        <input
          className="border mb-2 p-2 w-full"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border mb-4 p-2 w-full"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}