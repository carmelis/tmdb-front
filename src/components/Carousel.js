import React from "react";
import "../App.css";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Card from "./Card";
import useDrag from "../hooks/useDrag";

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

const Carousel = ({ movies }) => {
  // NOTE: for drag by mouse
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  return (
    <div style={{ width: "100%" }}>
      <div onMouseLeave={dragStop}>
        <ScrollMenu
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
          onWheel={onWheel}
          itemClassName="carouselContainer"
        >
          {movies.map((movie) => (
            <Card
            key={movie.title}
            title={movie.title}
            description={movie.description}
            imageUrl={movie.imageUrl}
          />
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
};

export default Carousel;
