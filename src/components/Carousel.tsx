import { Carousel as CarouselRAW, useCarousel } from "motion-plus/react";
import { motion as Motion } from "motion/react";

function Navigation() {
  const { currentPage, totalPages, nextPage, prevPage, gotoPage } =
    useCarousel()

  return (
    <div className="navigation flex justify-center">
      <button
        className="nav-arrow"
        onClick={prevPage}
        disabled={currentPage === 0}
      >
        <ChevronLeftIcon />
      </button>

      <div className="dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <Motion.button
            key={index}
            className={`dot ${index === currentPage ? "active" : ""
              }`}
            onClick={() => gotoPage(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            style={{ borderRadius: 8 }}
            layout
          />
        ))}
      </div>

      <button
        className="nav-arrow"
        onClick={nextPage}
        disabled={currentPage === totalPages - 1}
      >
        <ChevronRightIcon />
      </button>
    </div>
  )
}

export default function Carousel({ images, renderItem }) {
  return (
    <article>
      <div className="carousel-container">
        <CarouselRAW
          className="carousel"
          items={images.map(renderItem)}
          gap={16}
          snap="page"
          loop={false}
        >
          <Navigation />
        </CarouselRAW>
      </div>
      <Stylesheet />
    </article>
  )
}

function Stylesheet() {
  return (
    <style>
      {`
        html {
          overflow-x: hidden;
        }

        article {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .carousel-container {
          position: relative;
          box-sizing: content-box;
        }

        .carousel {
          box-sizing: content-box;
          overflow-x: inherit !important;
          position: relative;
        }

        .photo {
          max-width: 100%;
          border-radius: 12px;
          object-fit: cover;
        }

        @media (max-width: 600px) {
          .photo {
          }
        }

        .navigation {
          position: absolute;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 16px;
          border-radius: 24px;
          z-index: 30;
        }

        .nav-arrow {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          transition: opacity 0.2s ease;
          border-radius: 50%;
        }

        .nav-arrow:focus-visible {
          outline: 2px solid white;
        }

        .nav-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .nav-arrow:not(:disabled):hover {
          opacity: 0.8;
        }

        .dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background-color 0.2s ease;
          will-change: transform;
        }

        .dot.active {
          background: white;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.6);
        }
      `}
    </style>
  )
}

function ChevronLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}
