"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Instagram } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    console.log("Newsletter subscription:", email);

    setSubscribed(true);
    setEmail("");
  };

//   const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0B0B] px-6 pb-6 pt-12 text-white sm:px-10 sm:pt-16 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Brand */}
        <div className="mb-14">
          <Link
            href="/"
            className="inline-block font-serif text-6xl font-bold leading-none tracking-[-0.055em] sm:text-7xl lg:text-[100px]"
          >
            Wanderlast
          </Link>

          <p className="mt-3 text-sm text-[#B5B5B5] sm:text-lg">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_0.9fr_0.9fr] lg:gap-12">
          {/* Newsletter */}
          <div>
            <h3 className="mb-2 font-serif text-base font-normal uppercase">
              Newsletter
            </h3>

            <p className="mb-4 text-sm text-[#B5B5B5]">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex max-w-sm items-center bg-[#353535] focus-within:ring-1 focus-within:ring-white/50"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Enter email
              </label>

              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubscribed(false);
                }}
                placeholder="Enter email"
                className="h-12 min-w-0 flex-1 bg-transparent px-4 text-base text-white outline-none placeholder:text-[#B5B5B5]"
              />

              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex h-12 w-12 shrink-0 items-center justify-center transition hover:text-cyan-400"
              >
                <ArrowUpRight size={25} strokeWidth={2.2} />
              </button>
            </form>

            {subscribed && (
              <p role="status" className="mt-2 text-sm text-cyan-400">
                Thanks for subscribing!
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-serif text-base font-normal uppercase">
              Quick Links
            </h3>

            <ul className="space-y-3.5 text-base text-[#B5B5B5]">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="transition hover:text-white"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="transition hover:text-white">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link href="/profile" className="transition hover:text-white">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 font-serif text-base font-normal uppercase">
              Support
            </h3>

            <ul className="space-y-3.5 text-base text-[#B5B5B5]">
              <li>
                <Link href="/help" className="transition hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-serif text-base font-normal uppercase">
              Contact Us
            </h3>

            <div className="space-y-3.5 text-base text-[#B5B5B5]">
              <p>
                <a
                  href="tel:7869011622"
                  className="transition hover:text-white"
                >
                  786 901 1622
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@wandarland.com"
                  className="break-words transition hover:text-white"
                >
                  info@wandarland.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-14 border-t border-white/10 pt-5 sm:mt-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#B5B5B5]">
              ©  Wanderlust. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-7">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-white transition hover:text-cyan-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white transition hover:text-cyan-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[22px] w-[22px]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 17.5V9.8H5.77v7.7h2.57ZM7.05 8.75a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98ZM18.23 17.5v-4.22c0-2.26-1.2-3.31-2.8-3.31a2.42 2.42 0 0 0-2.18 1.2V9.8h-2.56v7.7h2.56v-3.8c0-1 .19-1.97 1.43-1.97 1.22 0 1.24 1.14 1.24 2.03v3.74h2.31Z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white transition hover:text-cyan-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
