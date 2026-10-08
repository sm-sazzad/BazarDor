"use client";
import SocialSignIn from "@/components/SocialSignIn";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

export default function SignInPage() {
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await signIn.email({
      email: String(userData.email),
      password: String(userData.password),
      callbackURL: "/",
    });

    if (error) {
      toast.error(
        error.message || "লগইন করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
      );
    }

    if (data) {
      toast.success("সফলভাবে লগইন হয়েছে।");
    }

    console.log(data, error);
  };

  return (
    <div className="min-h-screen bg-[#f4f9f4] flex flex-col items-center justify-center p-4 font-sans">
      {/* Top Text Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">সাইন ইন</h1>
        <p className="text-gray-600 text-sm md:text-base">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      {/* Main Form Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input Field */}
          <div>
            <label
              className="block text-gray-800 font-medium mb-2"
              htmlFor="email"
            >
              ইমেইল
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
            />
          </div>

          {/* Password Input Field */}
          <div>
            <label
              className="block text-gray-800 font-medium mb-2"
              htmlFor="password"
            >
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0d7a3e] hover:bg-[#0a6332] text-white font-semibold py-3.5 rounded-lg transition-colors mt-2"
          >
            সাইন ইন
          </button>
        </form>

        {/* Divider with "অথবা" */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-4 text-gray-500 text-sm">অথবা</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Login Buttons */}
        <SocialSignIn />

        {/* Sign Up Link */}
        <div className="text-center text-sm">
          <span className="text-gray-600">অ্যাকাউন্ট নেই? </span>
          <Link
            href="/sign-up"
            className="text-[#0d7a3e] font-semibold hover:underline"
          >
            সাইন আপ করুন
          </Link>
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="text-gray-500 hover:text-gray-800 text-sm transition-colors"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}
