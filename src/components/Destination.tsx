import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IDestination } from "@/type/Destination";

interface IDestinationPromise {
  destination: IDestination;
}

const Destination = ({ destination }: IDestinationPromise) => {
  return (
    <Card className="group overflow-hidden gap-0 rounded-xl py-0 shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 gap-1 bg-black/70 px-2 py-1 text-white backdrop-blur-sm">
          {"4.5"}
          <Star className="size-3 fill-white" data-icon="inline-end" />
        </Badge>
      </div>

      <CardContent className="space-y-1.5 p-4">
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="size-3.5 shrink-0 text-foreground/50" />
          {destination.country}
        </p>

        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-heading text-base leading-snug font-semibold text-foreground">
            {destination.name}
          </h3>
          <p>
            <span className="text-lg font-semibold text-foreground">
              {destination.price}
            </span>
            <span className="text-xs text-muted-foreground"> /Person</span>
          </p>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="size-3.5 shrink-0 text-foreground/50" />
          {destination.duration}
        </p>

        <Link
          href={`/all-destination/${destination._id}`}
          className="mt-1 inline-flex items-center gap-1 text-xs font-semibold tracking-widest text-[#00A8E8] uppercase transition-colors hover:text-[#0095d1] hover:underline"
        >
          Book Now
          <ArrowUpRight className="size-3.5" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default Destination;
