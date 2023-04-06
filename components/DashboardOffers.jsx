import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import OfferCard from "./Cards/OfferCard";

const DashboardOffers = ({ 
  title,
  items
 

}) => {
   
  let filteredOfferList = items
        
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredOfferList.length / itemsPerPage);
  
  const renderData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    
    
   
    return filteredOfferList?.map((offer) => (
        <OfferCard
          key={offer._id}
          time={offer.time}
          image={offer.image.path}
          title={offer.title}
          deal={offer.deal}
          price={offer.discountedPrice}
          realPrice={offer.recommendedRetailPrice}
          likes={offer.likes}
          comments={offer.comments}
          offerType={offer.type}
          offerid={offer._id}
        />
      ));
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center items-center space-x-2">
        <button
          className="text-gray-400 bg-white p-2 rounded-lg hover:text-gray-500"
          onClick={() => setCurrentPage(1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`text-primary w-10 bg-white p-2 rounded-lg hover:text-gray-500 ${
              currentPage === number && "bg-primary text-white"
            }`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
        <button
          className="text-gray-400 bg-white p-2 rounded-lg hover:text-gray-500"
          onClick={() => setCurrentPage(totalPages)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div>
      <p className="font-bold">{title}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-3">
        {renderData()}
      </div>
      <div className="py-10">{renderPagination()}</div>
    </div>
  );
};

export default DashboardOffers;
