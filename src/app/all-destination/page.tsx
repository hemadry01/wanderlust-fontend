import Destination from '@/components/Destination';
import { IDestination } from '@/type/Destination';
import React from 'react';

const AllDestinationPage = async() => {

    const res = await fetch("http://localhost:8000/all-destination");
        const destinationData: IDestination[] = await res.json();

    return (
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {destinationData.map((destination) => (
          <Destination key={destination._id} destination={destination} />
        ))}
      </div>
    );
};

export default AllDestinationPage;