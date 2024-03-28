import React from "react";
import Image from "next/image";
import Accordion from "./Accordion";
import Link from "next/link";
import ContactForm from "../app/contact/page"

const items = [
  {
    title: "Sudanese Commodities Exporting",
    content:
      "Embark on a journey of excellence with our premier exporting services, specializing in high-quality Sudanese commodities and crops. At Alfabriga African, we take pride in sourcing the finest agricultural products directly from the fertile fields of Sudan. Our commitment to quality assurance begins at the roots, ensuring that each crop is cultivated with precision and care. From the vast plains of golden sorghum to the rich yields of sesame and groundnuts, our portfolio showcases the diversity and richness of Sudanese agriculture. We meticulously handle every aspect of the export process, from harvesting to packaging, to deliver the authenticity and excellence our clients expect. With Alfabriga African, you can trust us to be your reliable partner in procuring the best of Sudanese origin commodities, contributing to the global marketplace with products that embody the essence of quality and sustainability.",
  },
  // {
  //   title: "Animal Feed Production",
  //   content:
  //     "Dive into a realm of unparalleled expertise with our leading services in producing high-quality dairy animal feed. At Alfabriga African, we stand at the forefront of the industry, pioneering the creation of nutritionally balanced feeds that elevate the health and productivity of your livestock. Our commitment to excellence begins with the careful selection of superior raw materials, sourced with precision from the lush fields of Sudan. Through state-of-the-art production facilities and innovative formulations, we craft feeds that not only meet but exceed the nutritional requirements of dairy animals. Trust us to be your partner in ensuring the well-being of your livestock, as we continue to set the standard for excellence in the field of dairy animal feed production. With Alfabriga African, your journey to optimal animal nutrition begins, leading the way in fostering healthier, more productive livestock.",
  // },
  // {
  //   title: "Edible Oil Production",
  //   content:
  //     "Indulge in the essence of culinary excellence with our distinguished services in producing high-quality edible oil. At Alfabriga African, we proudly stand as trailblazers, having initiated edible oil production in Sudan since the early nineties. Our commitment to crafting premium oils begins with selecting the finest Sudanese crops, ensuring that each drop of oil embodies the richness and authenticity of our agricultural heritage. With state-of-the-art facilities and a legacy of innovation, we have consistently set the bar for quality in the industry. Whether it is the golden hue of our sunflower oil or the wholesome goodness of our sesame oil, every bottle carries the legacy of being among the firsts in Sudan is edible oil production landscape.",
  // },
  // {
  //   title: "PP Bags Production",
  //   content:
  //     "At Alfabriga African, we take pride in our advanced technologies that drive the production of high-quality PP bags. Our commitment to excellence is reflected in the durability and versatility of our polypropylene bags, meeting the diverse packaging needs of various industries. What sets us apart is our dedication to customization – we offer the option for custom printing on our bags, allowing businesses to showcase their brand with a personalized touch. With a focus on precision engineering, we redefine packaging solutions, ensuring that every bag meets the highest standards of quality and functionality. Experience the intersection of cutting-edge manufacturing and personalized design options with Alfabriga African, where our advanced technologies pave the way for superior packaging solutions.",
  // },
  // Add more items as needed
];

const Hero = () => {
  return (
    <>
      <div className="w-full">
        {/* <h1></h1> */}
        <div className="">
          <div className="p-8 text-center">
            <h1 className="text-4xl py-8">Welcome to Afro Harvest</h1>
            <p className="text-[16px] leading-24 pt-4">
              Afro Harvest is a foodstuff Trading company based in Dubai, United
              Arab Emirates.
              <br /> Our company is belonging to Alfabriga African for
              industrial Co.LTD.
              <br />
              All of our products are free from any kind of infestation, free
              from any abnormal smell...
            </p>
            <div className="mx-auto py-8">
              <p>FOR MORE INQUIRIES</p>
              <div className="py-4">
                <Link
                  href="/"
                  className="bg-yellow-500 w-60 px-16 py-3 text-white rounded-[25px] mt-8 text-[14px]"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="ml-[auto] mr-[auto] block">
              <Image src="/bgImg.png" alt="image" width={400} height={400} style={{ margin: "auto", display: "block" }} />
            </div>
          </div>
        </div>

        <div className="bg-white md:py-10">
          <div className="flex flex-col justify-center">
            <div>
              <h1 className="text-4xl mb-4 text-center">Services</h1>
              <div className=" w-[70%] md:w-1/2" style={{ margin: "auto", display: "block" }}>
                <Accordion items={items} />
              </div>
            </div>
            <div className="flex justify-center gap-4 pt-6">
              <div>
                <Image src="/aro-10.jfif" alt="image" width={400} height={400} />
              </div>
              <div>
                <Image src="/aro-9.jfif" alt="image" width={400} height={400} />
              </div>
            </div>
            {/* <Link
              href="/"
              className="bg-[#1c3f1d] w-60 px-10 py-3 text-white rounded-[25px] mt-8 text-[14px]"
            >
              Learn More
            </Link> */}
          </div>

        </div>
        <div className="py-10 bg-[#7ca07e]">
        <ContactForm />
        </div>

      </div>
    </>
  );
};

export default Hero;
