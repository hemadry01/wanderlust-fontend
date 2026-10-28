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
import { Button } from "@/components/ui/button";import { Card, CardContent } from "@/components/ui/card";
import { IDestination } from "@/type/Destination";
import EditDestinationDialog from "./EditDestinationDialog";

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

const PERKS = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
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
          <Button variant="destructive" size="sm">
            <Trash2 data-icon="inline-start" />
            Cancel
          </Button>
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
        <Card className="h-fit self-start lg:sticky lg:top-24">
          <CardContent className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="mt-1 text-3xl font-semibold text-[#00A8E8]">
                {destinationDetail.price}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">per person</p>
            </div>

            <p className="rounded-md border bg-muted/50 px-3 py-2 text-sm text-foreground">
              {destinationDetail.departureDate}
            </p>

            <Button
              size="lg"
              className="w-full bg-[#00A8E8] text-white hover:bg-[#0095d1] hover:text-white"
            >
              Book Now
              <ArrowRight data-icon="inline-end" />
            </Button>

            <ul className="space-y-2.5 pt-2">
              {PERKS.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2 text-xs text-foreground/80"
                >
                  <Check className="size-3.5 shrink-0 text-emerald-600" />
                  {perk}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SingleDestination;
