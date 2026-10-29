"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { Input } from "@base-ui/react";
import { IDestination } from "@/type/Destination";
import { authClient } from "@/lib/auth-client";

const PERKS = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

const BookingCard = ({destinationDetail}: {destinationDetail: IDestination}) => {
  const {data:session} = authClient.useSession()
  const user = session?.user;

  const handleBooking = async(e) => {
    e.preventDefault();
    const departureDate = e.target.departureDate.value
    const data = {
      username: user?.name,
      email: user?.email,
      ...destinationDetail,
      departureDate: departureDate,
      bookingDate:new Date()
    };
    const res = await fetch("http://localhost:8000/booking",{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(data)
    });

    const bookingData = await res.json();
    console.log("data",bookingData);
  };

  return (
    <div>
      <Card className="h-fit self-start lg:sticky lg:top-24">
        <CardContent className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="mt-1 text-3xl font-semibold text-[#00A8E8]">
              {destinationDetail.price}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">per person</p>
          </div>

          <form onSubmit={handleBooking}>
            <Input
              type="date"
              name="departureDate"
              aria-label="Departure date"
              defaultValue={destinationDetail.departureDate}
              className="mt-4"
            />

            <Button
              type="submit"
              className="mt-4 w-full bg-[#00A8E8] text-white hover:bg-[#0095d1]"
            >
              Book Now
              <ArrowRight />
            </Button>
          </form>

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
  );
};

export default BookingCard;
