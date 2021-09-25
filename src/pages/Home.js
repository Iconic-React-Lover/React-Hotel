import React from "react";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link } from "react-router-dom";
import Services from "../components/Services";

export default function Home() {
  return (
  <>
  <Hero>
    <Banner title="AIR BNB" subtitle=" Air Bed and Breakfast">
    <Link to="/rooms" className="btn-primary">House</Link>
    </Banner>
  </Hero>
  <Services />
  </>
  );
}

