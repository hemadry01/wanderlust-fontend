import { notFound } from "next/navigation";
import SingleDestination from "@/components/SingleDestination";
import { IDestination } from "@/type/Destination";

interface IDestinationDetailPageProps {
  params: Promise<{ id: string }>;
}

const DestinationDetailPage = async ({ params }: IDestinationDetailPageProps) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/all-destination/${id}`);
  if (!res.ok) {
    notFound();
  }

  const destinationDetail: IDestination = await res.json();

  return <SingleDestination destinationDetail={destinationDetail} />;
};

export default DestinationDetailPage;
