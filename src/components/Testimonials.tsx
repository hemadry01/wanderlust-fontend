"use client"
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  image: string;
  alt: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85",
    alt: "Michael Chen, traveler",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=85",
    alt: "Sarah Johnson, traveler",
  },
  {
    quote:
      '"Our Japan adventure was incredible! Every destination was thoughtfully selected, and the local experiences made our trip truly special."',
    name: "Emily Wilson",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=85",
    alt: "Emily Wilson, traveler",
  },
  {
    quote:
      '"From booking to our final day, everything was seamless. The team made our family holiday unforgettable!"',
    name: "David Miller",
    location: "Toronto, Canada",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85",
    alt: "David Miller, traveler",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const previous = () => {
    setStartIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const next = () => {
    setStartIndex((current) => (current + 1) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
  ];

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading and navigation */}
        <div className="mb-10 flex items-center justify-between gap-4 sm:mb-11">
          <div>
            <h2 className="font-serif text-4xl font-normal tracking-[-0.045em] text-[#111111] sm:text-5xl lg:text-[54px] lg:leading-tight">
              What Travelers Say
            </h2>

            <p className="mt-2 text-sm text-[#717171] sm:text-base">
              Real experiences from our happy travelers
            </p>
          </div>

          <div className="flex shrink-0 gap-2 sm:gap-4">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#BBBBBB] text-[#AAAAAA] transition hover:border-[#0EA5C6] hover:text-[#0EA5C6] sm:h-[60px] sm:w-[60px]"
            >
              <ArrowLeft size={23} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#BBBBBB] text-[#AAAAAA] transition hover:border-[#0EA5C6] hover:text-[#0EA5C6] sm:h-[60px] sm:w-[60px]"
            >
              <ArrowRight size={23} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {visibleTestimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="grid min-h-[280px] grid-cols-[minmax(0,1fr)_40%] gap-4 border border-[#EAEAEA] p-5 sm:min-h-[300px] sm:gap-5 sm:p-6"
            >
              <div className="flex min-w-0 flex-col justify-between">
                <blockquote className="font-serif text-lg leading-[1.12] tracking-[-0.035em] text-[#111111] sm:text-xl lg:text-[22px]">
                  {testimonial.quote}
                </blockquote>

                <div className="mt-6">
                  <p className="text-base font-normal text-[#0EA5C6] sm:text-lg">
                    <span aria-hidden="true">— </span>
                    {testimonial.name}
                  </p>

                  <p className="pl-5 text-sm text-[#777777]">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <img
                src={testimonial.image}
                alt={testimonial.alt}
                loading="lazy"
                className="h-[220px] w-full self-start object-cover sm:h-[264px]"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
