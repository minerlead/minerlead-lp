import React from "react";

function l(text) {
  return text;
}

function PresentationSection() {

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">
              {l("If you face the following")}
            </span>{" "}
            <span className="block text-[#f47b2d] xl:inline">
              {l("problems")}
            </span>
          </h1>
          <ul className="marker:text-primary list-disc mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            <li className="list-item">
              {l("I generate leads, but I can't convert.")}
            </li>
            <li>
              {l("My sales pipeline remains unclear at the end of the month.")}
            </li>
            <li>{l("I can't calculate conversion rates.")}</li>
            <li>{l("My leads are never at the point of closing.")}</li>
            <li>
              {l(
                "Today I don't have the resources to have a complex tool to qualify leads."
              )}
            </li>
          </ul>
          <p className="text-4xl tracking-tight font-extrabold text-gray-900 mt-3">
            {l("Then you need Minerlead")}
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#pricing"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#f47b2d] hover:bg-[#ea580c] md:py-4 md:text-lg md:px-10"
              >
                {l("Buy now")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
          alt=""
        />
      </div>
    </section>
  );
}

export default PresentationSection;
