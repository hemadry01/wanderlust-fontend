import React from 'react';

interface IDestinationProps{
    params:Promise<{
        id:string
    }>
}

const DestinationDetailPage = async({params}:IDestinationProps) => {
    const {id} = await params;
    const res = await fetch(
      `http://localhost:8000/all-destination/${id}`,
    );
    const destinatonDetail = await res.json();
    console.log(destinatonDetail);
    return (
        <div>
            
        </div>
    );
};

export default DestinationDetailPage;