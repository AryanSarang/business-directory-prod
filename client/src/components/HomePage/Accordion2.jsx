import React, { useState } from 'react';


const AccordionItem = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-300">
            <button
                className="w-full text-left px-4 py-2 focus:outline-none focus:bg-gray-200 flex justify-between items-center"
                onClick={onClick}
            >
                <span className="text-lg font-semibold">{title}</span>
                <svg
                    className={`h-4 w-4 ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={`bg-white px-4  transition-all duration-200 overflow-hidden ${isOpen ? 'max-h-screen py-2' : 'max-h-0'
                    }`}
            >
                {children}
            </div>
        </div>
    );
};


const Accordion2 = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-lg mx-auto md:mt-20">
            <AccordionItem
                title="Accordion Item 1"
                isOpen={openIndex === 0}
                onClick={() => handleToggle(0)}
            >
                <p>This is the content for accordion item 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </AccordionItem>
            <AccordionItem
                title="Accordion Item 2"
                isOpen={openIndex === 1}
                onClick={() => handleToggle(1)}
            >
                <p>This is the content for accordion item 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </AccordionItem>
            <AccordionItem
                title="Accordion Item 3"
                isOpen={openIndex === 2}
                onClick={() => handleToggle(2)}
            >
                <p>This is the content for accordion item 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </AccordionItem>
        </div>
    );
};

export default Accordion2;
