
const Accordion = () => {
    return (

        <div id="accordion-color" data-accordion="collapse" className="md:w-1/2 md:mt-20" data-active-classes="bg-gray-100 gilroy-bold">
            <h2 id="accordion-color-heading-1">
                <button type="button" className="flex text-xl md:text-3xl items-center justify-between w-full py-5 px-1 md:p-5 font-medium rtl:text-right text-gray-600 hover:bg-gray-100  gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                    <span className="text-gray-900">What is Flowbite</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-1" className="hidden" aria-labelledby="accordion-color-heading-1">
                <div className="p-5 ">
                    <p className="mb-2 text-gray-600 ">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    <p className="text-gray-600 ">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600  hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                </div>
            </div>
            <h2 id="accordion-color-heading-2" className="border-t-2">
                <button type="button" className="flex items-center text-xl md:text-3xl justify-between w-full py-5 px-1 md:p-5 font-medium rtl:text-right text-gray-600 hover:bg-gray-100  gap-3" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                    <span className="text-gray-900">Is there a Figma file available</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-2" className="hidden" aria-labelledby="accordion-color-heading-2">
                <div className="p-5  ">
                    <p className="mb-2 text-gray-600 ">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                    <p className="text-gray-600 ">Check out the  based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </div>
            </div>
            <h2 id="accordion-color-heading-3" className="border-t-2">
                <button type="button" className="flex  items-center text-xl md:text-3xl justify-between w-full py-5 px-1 md:p-5 font-medium rtl:text-right text-gray-600 hover:bg-gray-100  gap-3" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
                    <span className="text-gray-900">Differences Flowbite and Tailwind UI</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-3" className="hidden" aria-labelledby="accordion-color-heading-3">
                <div className="p-5  ">
                    <p className="mb-2 text-gray-600 ">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                    <p className="mb-2 text-gray-600 ">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                    <p className="mb-2 text-gray-600 ">Learn more about these technologies:</p>

                </div>
            </div>
        </div>

    )
};

export default Accordion;
