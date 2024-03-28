import React from "react";
import Image from "next/image";
import ContactForm from "../contact/page";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-40 py-20">
        <div className=" mx-4">
          <h1 className="text-2xl my-8 text-[#1c3f1d] underline-offset-2 text-center">
            About US
          </h1>
          {/* <p className="leading text-[14px]">
          Afro Harvest is a foodstuff Trading company based in Dubai, United
          Arab Emirates.
          <br />
          <br />
          Our company is belonging to Alfabriga African for industrial Co.LTD
          <br />
          <br />
          At AfroHarvest company since the beginning of its founding depends on
          providing our customers with the best products And looking forward to
          stay in the best degrees of technical and professional excellence in
          keeping with all the development update in our field making sure that
          our products are the name of the highest standards of quality and
          mastery . we always strive to build the best friendly and good
          relationships with our customers and serve them in the best way
          possible, and we also give great importance to the attention of all
          our employees, their families and the most needy groups of the
          community around us. Caring for the natural environment and its
          pollution, safety is one of our priorities during our operations at
          all stages of production.
        </p> */}
          <p className="leading text-[14px] text-center">
            Afro Harvest is a foodstuff Trading company based in Dubai, United
            Arab Emirates. 
            <br/>
            <br/>
            Our company is belonging to Alfabriga African for
            industrial Co.LTD 
            <br/>
            <br/>
            At AfroHarvest company since the beginning of its
            founding depends on providing our customers with the best products
            And looking forward to stay in the best degrees of technical and
            professional excellence in keeping with all the development update
            in our field making sure that our products are the name of the
            highest standards of quality and mastery . 
            <br/>
            <br/>
            we always strive to build
            the best friendly and good relationships with our customers and
            serve them in the best way possible, and we also give great
            importance to the attention of all our employees, their families and
            the most needy groups of the community around us. Caring for the
            natural environment and its pollution, safety is one of our
            priorities during our operations at all stages of production.
          </p>
        </div>
        <div className="mx-4 py-12">
          <Image src="/abt.png" alt="" width="500" height="500" />
        </div>
        <div className="py-10">
        <ContactForm />
        </div>
      </div>
    </>
  );
};

export default page;
