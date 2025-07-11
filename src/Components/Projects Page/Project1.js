import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";
import React from "react";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        <img
          className="project__image project__specialMobileImage"
          src="/images/bike_rental_home.png"
          alt="Ladakh Bike Rental Project Home Page"
          width="15%"
          height="auto"
          loading="lazy"
        />
        {isDesktopOrLaptop && (
          <>
            <img
              className="project__image"
              src="/images/bike_rental_dashboard.png"
              alt="Ladakh Bike Rental Admin Dashboard"
              width="15%"
              height="auto"
              loading="lazy"
            />
            <img
              className="project__image"
              src="/images/bike_rental_listing.png"
              alt="Ladakh Bike Rental Bike_Listing"
              width="15%"
              height="auto"
              loading="lazy"
            />
          </>
        )}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">
            Ladakh Bike Rental Management System
          </h3>
          <p className="project__description project__body">
            A <span className="project__specialText">bike rental platform</span>
            developed for managing rentals and streamlining operations for both
            users and admins in Ladakh. Features include an{" "}
            <span className="project__specialText">admin panel</span> for
            managing user accounts, bike listings, bookings, and user queries,
            ensuring smooth workflow and operations. The system also offers{" "}
            <span className="project__specialText">
              secure user authentication
            </span>{" "}
            and authorization, along with an intuitive{" "}
            <span className="project__specialText">search functionality</span>{" "}
            for users to easily find bikes based on brand and fuel type.
          </p>
          <p className="project__tech project__body">
            &gt; PHP · MySQL · HTML · CSS · JavaScript · Bootstrap
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/urgyannurboo/Ladakh-Bike-Rental"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project1;
