'use client'

import { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded mb-2">
          <div
            className={`flex justify-between items-center p-4 cursor-pointer ${
              activeIndex === index ? 'bg-gray-200' : ''
            }`}
            onClick={() => handleClick(index)}
          >
            <span className="text-[14px] ">{item.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  activeIndex === index
                    ? 'M19 9l-7 7-7-7'
                    : 'M9 5l7 7 7-7'
                }
              />
            </svg>
          </div>
          {activeIndex === index && (
            <div className="p-4 border-t border-gray-200">
              <p className='text-[13px]'>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
