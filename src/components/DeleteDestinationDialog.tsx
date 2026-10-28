"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { IDestination } from "@/type/Destination";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";

interface IDeleteDestinationProps {
  destinationDetail: IDestination;
}

const DeleteDestinationDialog = ({
  destinationDetail,
}: IDeleteDestinationProps) => {
  const handleDeleteDestination = async () => {
    const res = await fetch(
      `http://localhost:8000/all-destination/${destinationDetail._id}`,
      {
        method: "DELETE",
      },
    );
    const data = await res.json();
    redirect('/all-destination')
  };
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" />}>
          <Button variant="destructive" size="sm">
            <Trash2 data-icon="inline-start" />
            Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteDestination}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteDestinationDialog;