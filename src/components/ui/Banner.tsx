"use client"
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export type TravelSearch = {
  location: string;
  duration: string;
  budget: string;
  people: string;
};

type BannerProps = {
  onSearch?: (data: TravelSearch) => void;
};

const Banner = ({ onSearch }: BannerProps) => {
  const [form, setForm] = useState<TravelSearch>({
    location: "",
    duration: "Anytime/3 Days",
    budget: "80-83000",
    people: "5-10",
  });

  const updateField = (field: keyof TravelSearch, value: string) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.(form);
  };

  return (
    <section
      id="home"
      className="relative min-h-[380px] overflow-hidden sm:min-h-[420px] lg:min-h-[375px]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[380px] flex-col items-center justify-center px-4 pb-16 pt-16 text-center text-white sm:min-h-[420px] lg:min-h-[375px]">
        <h1 className="font-serif text-[42px] font-normal leading-[1.08] tracking-[-2px] sm:text-5xl lg:text-[50px]">
          Discover Your
          <br />
          Next Adventure
        </h1>

        <p className="mt-2 max-w-lg text-[10px] leading-[15px] text-white/90 sm:text-[11px]">
          Explore breathtaking destinations and create unforgettable memories
          with
          <br className="hidden sm:block" />
          our curated travel experiences.
        </p>

        <div className="mt-5 flex items-center gap-2">
          <a
            href="#search"
            className="flex h-7 items-center gap-4 bg-[#14A6C5] px-3 text-[8px] font-medium uppercase transition hover:bg-[#0E8DA8] sm:px-4"
          >
            Explore Now
            <ArrowRight size={12} />
          </a>

          <a
            href="#destinations"
            className="flex h-7 items-center bg-white/40 px-3 text-[8px] font-medium uppercase backdrop-blur-sm transition hover:bg-white/60 sm:px-4"
          >
            View Destination
          </a>
        </div>
      </div>

      {/* Search panel */}
      <form
        id="search"
        onSubmit={handleSubmit}
        className="absolute bottom-0 left-0 z-20 grid w-full grid-cols-2 bg-white/25 text-white backdrop-blur-md sm:grid-cols-4 lg:grid-cols-[1.1fr_1.1fr_1fr_1fr_100px]"
      >
        <label className="flex h-[37px] flex-col justify-center border-r border-white/25 px-3">
          <span className="text-[10px]">Location</span>
          <input
            value={form.location}
            onChange={(e) => updateField("location", e.target.value)}
            placeholder="Address, City Or Zip"
            className="w-full bg-transparent text-[8px] outline-none placeholder:text-white/80"
          />
        </label>

        <label className="flex h-[37px] flex-col justify-center border-r border-white/25 px-3">
          <span className="text-[10px]">Date/Duration</span>
          <input
            value={form.duration}
            onChange={(e) => updateField("duration", e.target.value)}
            className="w-full bg-transparent text-[8px] outline-none"
          />
        </label>

        <label className="flex h-[37px] flex-col justify-center border-r border-white/25 px-3">
          <span className="text-[10px]">Budget</span>
          <select
            value={form.budget}
            onChange={(e) => updateField("budget", e.target.value)}
            className="w-full bg-transparent text-[8px] outline-none"
          >
            <option value="80-83000" className="text-gray-900">
              80-83000
            </option>
            <option value="100-500" className="text-gray-900">
              $100-$500
            </option>
            <option value="500-1500" className="text-gray-900">
              $500-$1500
            </option>
            <option value="1500+" className="text-gray-900">
              $1500+
            </option>
          </select>
        </label>

        <label className="flex h-[37px] flex-col justify-center border-r border-white/25 px-3">
          <span className="text-[10px]">People</span>
          <select
            value={form.people}
            onChange={(e) => updateField("people", e.target.value)}
            className="w-full bg-transparent text-[8px] outline-none"
          >
            <option value="1-2" className="text-gray-900">
              1-2
            </option>
            <option value="3-5" className="text-gray-900">
              3-5
            </option>
            <option value="5-10" className="text-gray-900">
              5-10
            </option>
            <option value="10+" className="text-gray-900">
              10+
            </option>
          </select>
        </label>

        <button
          type="submit"
          className="col-span-2 h-[37px] bg-[#14A6C5] text-[10px] font-semibold transition hover:bg-[#0E8DA8] sm:col-span-4 lg:col-span-1"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Banner;
