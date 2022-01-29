import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NumberOfCopies, ObjectContext } from "./EditingPage";
import "./Carousel.css";

export const DemoCarousel = () => {
  const { objects, dispatch1 } = React.useContext(ObjectContext);

  const { total, dispatch3 } = React.useContext(NumberOfCopies);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          fontWeight: "bold",
          fontSize: "20px",
          fontFamily: "Times New Roman, serif",
        }}
      >
        REVIEW
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          fontSize: "20px",
          fontWeight: 500,
          fontFamily: "Times New Roman, serif",
        }}
      >
        Total Copies Generated Will Be :
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          fontSize: "25px",
          fontWeight: 500,
          fontFamily: "Times New Roman, serif",
          animation: "glow 2s ease-in-out infinite alternate",
          color: "rgba(255, 255, 255, 0.904)",
        }}
      >
        <h1>{`${total.value}`}</h1>
      </div>

      <Carousel responsive={responsive} focusOnSelect={true}>
        {objects &&
          objects.map((object) => {
            return (
              <div className="carouselElement">
                <div>
                  <img
                    src={require(`.${object.path
                      .slice(12)
                      .replaceAll("\\", "/")}`)}
                    alt="img"
                    style={{ maxHeight: "20vh" }}
                  />
                </div>
                <div style={{ fontWeight: "bold" }}>{`${object.name
                  .slice(0, 1)
                  .toUpperCase()}${object.name.slice(1)} : `}</div>
                <div>{`Height - ${object.height} `}</div>
                <div>{`Width - ${object.width} `}</div>
                <div>{`Depth - ${object.depth} `}</div>
                <div>{`X - ${object.x}`}</div>
                <div>{`Y - ${object.y}`}</div>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};
