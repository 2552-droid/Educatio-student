"use client";

import { useState } from "react";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate account creation delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Account created successfully with:", { fullName, email });
      alert("Student account created successfully!");
    } catch (error: any) {
      console.error("Sign Up Error:", error);
      alert("An error occurred during sign up.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Create Student Account</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
        className="border border-gray-800 p-3 rounded-xl text-[#2a6ee5] font-bold focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]"
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-gray-800 p-3 rounded-xl  text-[#2a6ee5] font-bold  focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border border-gray-800 p-3 rounded-xl  text-[#2a6ee5] font-bold focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-[#2a6ee5] text-white p-3 rounded-xl font-semibold hover:bg-[#1d50ab] transition-colors disabled:bg-gray-400 cursor-pointer"
      >
        {loading ? "Creating account..." : "Sign Up"}
      </button>
    </form>
  );
}