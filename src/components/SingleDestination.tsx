import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  MapPin,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IDestination } from "@/type/Destination";
import EditDestinationDialog from "./EditDestinationDialog";
import DeleteDestinationDialog from "./DeleteDestinationDialog";
import BookingCard from "./booking/page";

interface ISingleDestinationProps {
  destinationDetail: IDestination;
}

const HIGHLIGHTS = [
  "Luxury beachfront accommodation",
  "Traditional Balinese spa treatment",
  "Sunrise trek to Mount Batur",
  "Visit Uluwatu Temple at sunset",
  "Private beach dinner experience",
];



const SingleDestination = ({ destinationDetail }: ISingleDestinationProps) => {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/all-destination"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Destinations
        </Link>
        <div className="flex items-center gap-2.5">
          <EditDestinationDialog destinationDetail={destinationDetail} />
          <DeleteDestinationDialog destinationDetail={destinationDetail} />
        </div>
      </div>

      {/* Hero image */}
      <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl">
        <Image
          src={destinationDetail.imageUrl}
          alt={destinationDetail.name}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0 text-foreground/50" />
              {destinationDetail.country}
            </p>
            <h1 className="font-heading text-4xl leading-tight font-semibold tracking-tight text-foreground md:text-5xl">
              {destinationDetail.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="flex items-center gap-1.5">
                <Star className="size-4 fill-current text-emerald-600" />
                <span className="font-semibold text-foreground">4.9</span>
                <span className="text-muted-foreground">(234 reviews)</span>
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <CalendarDays className="size-4 shrink-0 text-foreground/50" />
                {destinationDetail.duration}
              </span>
            </div>
          </div>

          {/* Overview */}
          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Overview
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {destinationDetail.description}
            </p>
          </section>

          {/* Highlights */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Highlights
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-2 text-sm text-foreground/80"
                >
                  <Check className="size-4 shrink-0 text-emerald-600" />
                  {highlight}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar — booking card */}
        <BookingCard destinationDetail={destinationDetail} />
      </div>
    </div>
  );
};

export default SingleDestination;
