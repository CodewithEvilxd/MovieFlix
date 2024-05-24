import { useRef } from "react";
import Card from "./Card";
import { GrNext, GrPrevious } from "react-icons/gr";

const HorizontalScroll = ({ data = [], heading, trending, media_type }) => {
  const containerRef = useRef(null);

  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  };

  const handlePrev = () => {
    containerRef.current.scrollLeft -= 300;
  };
  return (
    <div className="container mx-auto my-10 px-3">
      <h1 className="text-2xl lg:text-3xl font-bold mb-2 capitalize">
        {heading}
      </h1>
      <div className=" relative">
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col overflow-hidden overflow-x-scroll z-10 relative gap-6 scroll-smooth transition-all ease-out scrollbar-none "
        >
          {data.map((data, index) => {
            return (
              <Card
                key={data.id + heading + index}
                data={data}
                index={index + 1}
                trending={trending}
                media_type={media_type}
              />
            );
          })}
        </div>
        {/* //next and prev button */}
        <div className="absolute top-0 w-full h-full hidden lg:flex items-center justify-between  ">
          <button
            onClick={handlePrev}
            className="bg-white text-black p-1 z-10 text-xl rounded-full -ml-3 "
          >
            <GrPrevious />
          </button>
          <button
            onClick={handleNext}
            className="bg-white text-black p-1 z-10 text-xl rounded-full -mr-3 "
          >
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
