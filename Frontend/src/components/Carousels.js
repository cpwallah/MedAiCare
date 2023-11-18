import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import "../styles/disease.css";
import { useState } from "react";

export default function Carousels({ slides, imageStyle   }) {

  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className=" overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-1000`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, i) => {
          return <img src={s} key={i} alt={`Slide ${i}`} style={imageStyle} />;
        })}
      </div>
      <div className="arrow-buttons absolute px-1 text-3xl top-0 h-full w-full justify-between items-center flex text-white button ">
        <button onClick={previousSlide}
          style={{ outline: 'none', border: 'none' }}
          aria-label="Previous Slide">
          <BsFillArrowLeftCircleFill style={{ cursor: 'pointer' }} />
        </button>
        <button onClick={nextSlide}
          style={{ outline: 'none', border: 'none' }}
          aria-label="Next Slide">
          <BsFillArrowRightCircleFill style={{ cursor: 'pointer' }} />
        </button>
      </div>
      <div className="bottom-circle-container absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`hide-on-small rounded-full w-3 h-3 cursor-pointer  ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}