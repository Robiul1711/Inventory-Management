import React from 'react';
import { Link } from 'react-router-dom';

const PrintOption = ({ image, title, description }) => (
  <Link to="/size-calculator" className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
    <div className="flex justify-center mb-4">
      <img 
        src={image} 
        alt={title}
        className="w-36 h-24 object-cover rounded-lg"
      />
    </div>
    <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">
      {title}
    </h3>
    <p className="text-sm text-gray-600 text-center leading-relaxed">
      {description}
    </p>
  </Link>
);

export default function PrintOptionsGrid() {
  const printOptions = [
    {
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
      title: "Stretched canvas",
      description: "Lorem ipsum dolor sit amet consectetur. Tempus egestas at mauris eget placerat amet facilisi mauris tempor. Auctor in eget erat sit sit et enim integer laoreet. In faucibus ac sem quam."
    },
    {
      image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&h=200&fit=crop",
      title: "Acrylic glass",
      description: "Lorem ipsum dolor sit amet consectetur. Tempus egestas at mauris eget placerat amet facilisi mauris tempor. Auctor in eget erat sit sit et enim integer laoreet. In faucibus ac sem quam."
    },
    {
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=300&h=200&fit=crop",
      title: "Frame with mat",
      description: "Lorem ipsum dolor sit amet consectetur. Tempus egestas at mauris eget placerat amet facilisi mauris tempor. Auctor in eget erat sit sit et enim integer laoreet. In faucibus ac sem quam."
    },
    {
      image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&h=200&fit=crop",
      title: "Rolled canvas",
      description: "Lorem ipsum dolor sit amet consectetur. Tempus egestas at mauris eget placerat amet facilisi mauris tempor. Auctor in eget erat sit sit et enim integer laoreet. In faucibus ac sem quam."
    },
    {
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
      title: "Rolled print",
      description: "Lorem ipsum dolor sit amet consectetur. Tempus egestas at mauris eget placerat amet facilisi mauris tempor. Auctor in eget erat sit sit et enim integer laoreet. In faucibus ac sem quam."
    }
  ];

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What do you want to print
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tempus egestas at mauris eget placerat amet facilisi mauris tempor. Auctor in eget erat sit sit et enim integer laoreet. In faucibus ac sem quam.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {printOptions.slice(0, 3).map((option, index) => (
            <PrintOption key={index} {...option} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {printOptions.slice(3, 5).map((option, index) => (
            <PrintOption key={index + 3} {...option} />
          ))}
        </div>
      </div>
    </div>
  );
}