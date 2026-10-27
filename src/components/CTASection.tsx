import { ArrowRight } from "lucide-react";

type CTASectionProps = {
  onBookTrip?: () => void;
};

export default function CTASection({ onBookTrip }: CTASectionProps) {
  return (
    <section
      className="relative isolate flex min-h-[320px] w-full items-center justify-center overflow-hidden bg-[#102326] px-5 py-16 sm:min-h-[360px] lg:min-h-[410px]"
      aria-labelledby="cta-heading"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2400&q=90')",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/55" aria-hidden="true" />

      {/* Gradient for cinematic effect */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071519]/70 via-transparent to-[#071519]/50"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center text-white">
        <h2
          id="cta-heading"
          className="font-serif text-4xl font-normal leading-tight tracking-[-0.045em] sm:text-5xl lg:text-[54px]"
        >
          Ready To Start Your Journey?
        </h2>

        <p className="mt-4 text-sm font-normal text-white/90 sm:text-lg">
          Join thousands of travelers who have discovered the world with us
        </p>

        <button
          type="button"
          onClick={onBookTrip}
          className="mt-10 inline-flex min-h-[56px] items-center justify-center gap-6 bg-white px-6 py-4 text-sm font-medium text-black transition duration-300 hover:bg-[#13A5C4] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-w-[280px]"
        >
          <span>BOOK YOUR TRIP TODAY</span>
          <ArrowRight size={21} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
