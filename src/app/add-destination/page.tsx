"use client";

import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CATEGORIES = [
  "Beach",
  "Mountain",
  "Historical",
  "Adventure",
  "Cultural",
  "City",
] as const;

type Category = (typeof CATEGORIES)[number];

interface FormState {
  name: string;
  country: string;
  category: Category | null;
  price: string;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
}

const emptyState: FormState = {
  name: "",
  country: "",
  category: null,
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

const AddDestinationPage = () => {
  const [form, setForm] = useState<FormState>(emptyState);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // No backend wired up yet — just reset for now.
    const res =  await fetch("http://localhost:8000/add-destination",{
        method:"POST",
        headers:{
           "Content-Type":"application/json", 
        },
        body:JSON.stringify(form)
    });

    const data = await res.json();
    console.log(data);
    
    setForm(emptyState);
  };

  const handleCancel = () => setForm(emptyState);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
        Add New Travel Package
      </h1>

      <Card className="mx-auto mt-10 max-w-2xl px-4 shadow-sm sm:px-6">
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            noValidate
          >
            {/* Destination Name */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="destination-name">Destination Name</Label>
              <Input
                id="destination-name"
                placeholder="Bali Paradise"
                value={form.name}
                onChange={(event) => setField("name", event.target.value)}
                required
              />
            </div>

            {/* Country + Category */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  placeholder="Indonesia"
                  value={form.country}
                  onChange={(event) => setField("country", event.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Category</Label>
                <Select
                  value={form.category}
                  onValueChange={(value) =>
                    setField("category", value as Category)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Beach" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price + Duration */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="price">Price (USD)</Label>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  placeholder="e.g., 1299"
                  value={form.price}
                  onChange={(event) => setField("price", event.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  placeholder="e.g., 7 Days/6 Nights"
                  value={form.duration}
                  onChange={(event) => setField("duration", event.target.value)}
                  required
                />
              </div>
            </div>

            {/* Departure Date */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="departure-date">Departure Date</Label>
              <Input
                id="departure-date"
                type="date"
                value={form.departureDate}
                onChange={(event) =>
                  setField("departureDate", event.target.value)
                }
                required
              />
            </div>

            {/* Image URL */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="image-url">Image URL</Label>
              <Input
                id="image-url"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={form.imageUrl}
                onChange={(event) => setField("imageUrl", event.target.value)}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                rows={5}
                placeholder="Describe the travel experience..."
                value={form.description}
                onChange={(event) =>
                  setField("description", event.target.value)
                }
                className="min-h-28 resize-y"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 />
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-cyan-700 text-white hover:bg-cyan-800 focus-visible:ring-cyan-700/50"
              >
                <Plus />
                Add Travel Package
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddDestinationPage;
