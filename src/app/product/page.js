import React from "react";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import Link from "next/link";

const items = [
    {
      title: 'White Sesame Seeds',
      content: 'Discover the richness of Sudanese white sesame seeds with our premium selection, featuring two varieties: Gadarif and non-Gadarif. Gadarif seeds, grown in fertile lands, offer a unique nutty flavor, while non-Gadarif seeds bring diverse taste profiles. Elevate your culinary creations with the quality and authenticity of Sudanese sesame seeds.',
    
    },
    {
      title: 'Red Sesame Seeds',
      content: 'Experience the culinary excellence of our red sesame seeds, celebrated for their high quality and rich oil content. Sourced meticulously, these seeds are a testament to Sudanese agricultural prowess. Known for their premium quality, they impart a distinctive flavor to dishes, elevating your culinary experience.',
    },
    {
        title: 'Peanut Kernels',
        content: 'Savor the deliciousness of Sudanese peanuts, famous for their amazing taste and high demand. Grown in Sudan is fertile lands, these peanuts are extra special for their great quality and lots of oil.',
      },
      {
        title: 'Peanunt Cake',
        content: 'Introducing our premium Peanut Meal, a nutrient-rich powerhouse derived from the heart of Sudan is finest peanuts. Sourced meticulously and processed to perfection, our Peanut Meal is a versatile and protein-packed solution ideal for animal feeds. With a focus on quality and nutritional excellence, our product stands as a testament to Sudanese agricultural prowess. Elevate the well-being of your livestock and poultry with this essential ingredient, carefully crafted to meet the diverse needs of your animals',
      },
      {
        title: 'Gum Arabic',
        content: 'Discover the unrivaled quality of Sudanese Gum Arabic, celebrated globally for its finesse and purity. Our exquisite selection encompasses both Hashab and Talha varieties, each representing the pinnacle of quality in the Gum Arabic world. Harvested from the arid landscapes of Sudan, our Gum Arabic is renowned for its clarity, solubility, and exceptional binding properties. As a key player in the global market, we take pride in offering the finest Gum Arabic, sourced with meticulous care.',
      },
      {
        title: 'Water Melon Seeds',
        content: 'Discover the unrivaled quality of Sudanese Gum Arabic, celebrated globally for its finesse and purity. Our exquisite selection encompasses both Hashab and Talha varieties, each representing the pinnacle of quality in the Gum Arabic world. Harvested from the arid landscapes of Sudan, our Gum Arabic is renowned for its clarity, solubility, and exceptional binding properties. As a key player in the global market, we take pride in offering the finest Gum Arabic, sourced with meticulous care.',
      },
      {
        title: 'Chick Peas',
        content: 'Immerse yourself in the heartiness of Sudanese chickpeas, a culinary staple celebrated for its versatility and nutritional benefits. Grown in the fertile soils of Sudan, our chickpeas boast a delightful taste and firm texture, making them an ideal ingredient for a myriad of dishes. Rich in protein, fiber, and essential minerals, these chickpeas not only enhance the flavor of your meals but also contribute to a balanced and wholesome diet.',
      },
      {
        title: 'Pigeon Pass',
        content: 'Delight in the superior quality of our carefully selected Sudanese pigeon peas, a hallmark of excellence in the world of legumes. Harvested with precision from the fertile lands of Sudan, our pigeon peas stand as a testament to our commitment to providing only the finest commodities. With a tender texture and rich nutty flavor, these peas elevate your culinary creations. Packed with plant-based protein, fiber, and essential nutrients, our premium pigeon peas not only contribute to the deliciousness of your meals but also exemplify our dedication to delivering high-quality, thoughtfully chosen commodities.',
      },    // Add more items as needed
  ];

const page = () => {
  return (
    <div className="mx-8 py-10">
      <h1 className="text-2xl my-8 text-[#1c3f1d]">
        OUR PRODUCTS AND SERVICES
      </h1>
      <div className="flex justify-center my-8">
        <div className="w-1/2 m-4">
          <Image src="/img2.png" alt="pro" width={500} height={500} />

        </div>
        <div className="w-1/2 m-4">
          <h1 className="text-[#1c3f1d] text-xl pb-4 underline">
            Commodities Exporting Division
          </h1>
          <p className="leading-8">
            As a trusted name, we specialize in exporting high-quality and
            meticulously selected commodities, showcasing the agricultural
            richness of Sudan. At Alfabriga African, we pride ourselves on our
            swift export services, ensuring minimal lead time to deliver our
            premium products to any destination. What sets us apart is our
            unwavering commitment to adhering to each countrys importing
            regulations, guaranteeing a smooth and compliant delivery process.
            Experience the epitome of exporting with Alfabriga African, where
            precision, quality, and care converge to bring the finest Sudanese
            commodities to your doorstep.
          </p>
         
          {/* <div className="flex justify-between ">
            <div className="my-4">
              <Image src="/seed1.png" alt="" width={200} height={200} />
              <ul className="py-4">
                <li>Peanut Cake</li>
                <li>Gum Arabic</li>
                <li>Water Melon Seeds</li>
                <li>Chick Peas</li>
                <li>Pigeon </li>
              </ul>
            </div>
            <div className="my-4">
              <Image src="/seed1.png" alt="" width={200} height={200} />
              <ul className="py-4">
                <li>Peanut Cake</li>
                <li>Gum Arabic</li>
                <li>Water Melon Seeds</li>
                <li>Chick Peas</li>
                <li>Pigeon </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
      <div className="md:flex md:justify-center py-10">
          <div className="w-1/2 flex flex-wrap gap-2">
          <Image src="/image1.png" alt="pro" width={250} height={100} className="py-2" />
          <Image src="/image2.png" alt="pro" width={250} height={100} className="py-2"/>
          <Image src="/pro1.png" alt="pro" width={250} height={100} className="py-2"/>
          </div>
          <div className="w-1/2">
            
            <Accordion items={items} />
          </div>
          </div>
      
      <div className="flex justify-center items-center my-8">
        <div className="w-1/2 m-4">
          <Image src="/pp.png" alt="pro" width={500} height={500} />
        </div>
        <div className="w-1/2 m-4">
          <h1 className="text-[#1c3f1d] text-xl pb-4 underline">
            PP Bags Production Plant
          </h1>
          <p className="leading-8">
            Step into the world of packaging perfection at Afro Harvest
            PP Bags Factory, where versatility meets precision. As a leading
            facility, we pride ourselves on our ability to produce a diverse
            range of bags, catering to various sizes, specifications, and colors
            to meet the unique needs of our clients. What sets us apart is our
            commitment to customization – not only can you choose from a
            spectrum of sizes and specifications, but we also offer an array of
            vibrant colors to complement your branding. Elevate your packaging
            experience further with our print option, allowing you to add a
            personalized touch to your bags. At Afro Harvest we redefine
            packaging possibilities, offering not just bags, but tailored
            solutions that align seamlessly with your requirements and brand
            aesthetics.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center my-8">
        <div className="w-1/2 m-4">
          <h1 className="text-[#1c3f1d] text-xl pb-4 underline">
            Oil Mills Factory
          </h1>
          <p className="leading-8">
            Welcome to Afro Harvest distinguished Edible Oil Factory, a leading
            force in Khartoum and East Kordofan. Renowned for our iconic RAS
            AL-Tor brand, we take pride in producing high-quality edible oils
            that have become household names across Sudan. Specializing in
            sesame, peanut, and sunflower oils, our factory is at the forefront
            of culinary innovation, crafting oils that embody the rich flavors
            of Sudanese crops. With a commitment to excellence, we deliver oils
            that not only meet but exceed the highest standards of quality. At
            Alfabriga African, our sesame, peanut, and sunflower oils are more
            than just products; they are a testament to our dedication to
            providing the finest in Sudanese edible oils.
          </p>
        </div>
        <div className="w-1/2 m-4">
          <Image src="/oil.png" alt="pro" width={500} height={500} />
        </div>
      </div>
      <div className="mx-auto">
        <p>FOR MORE INQUIRIES</p>
        <div>
        <Link href="/" className="bg-[#1c3f1d] w-60 px-10 py-3 text-white rounded-[25px] mt-8 text-[14px]" >Learn More</Link>
        </div>
      </div>
      
    </div>
  );
};

export default page;
