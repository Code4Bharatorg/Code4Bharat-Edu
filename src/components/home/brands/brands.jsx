"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Brands data array with image paths updated
const brandsData = [
  { id: 1, image: "/2.jpg", imageLight: "/2.jpg", name: "Brand 1" },
  { id: 2, image: "/3.png", imageLight: "/3.png", name: "Brand 2" },
  { id: 3, image: "/5.jpg", imageLight: "/5.jpg", name: "Brand 3" },
  { id: 4, image: "/18.jpg", imageLight: "/18.jpg", name: "Brand 4" },
  { id: 5, image: "/47.jpg", imageLight: "/47.jpg", name: "Brand 5" },
  { id: 6, image: "/60.jpg", imageLight: "/60.jpg", name: "Brand 6" },
  { id: 7, image: "/bkccrown.png", imageLight: "/bkccrown.png", name: "Brand 7" },
  { id: 8, image: "/constrochem.png", imageLight: "/constrochem.png", name: "Brand 8" },
  { id: 9, image: "/dl.png", imageLight: "/dl.png", name: "Brand 9" },
  { id: 10, image: "/faina.png", imageLight: "/faina.png", name: "Brand 10" },
  { id: 11, image: "/falcon.png", imageLight: "/falcon.png", name: "Brand 11" },
  { id: 12, image: "/fresco.png", imageLight: "/fresco.png", name: "Brand 12" },
  { id: 13, image: "/gkcc.png", imageLight: "/gkcc.png", name: "Brand 13" },
  { id: 14, image: "/icco.png", imageLight: "/icco.png", name: "Brand 14" },
  { id: 15, image: "/kcd.png", imageLight: "/kcd.png", name: "Brand 15" },
  { id: 16, image: "/kcj.png", imageLight: "/kcj.png", name: "Brand 16" },
  { id: 17, image: "/kws.png", imageLight: "/kws.png", name: "Brand 17" },
  { id: 18, image: "/lmt.png", imageLight: "/lmt.png", name: "Brand 18" },
  { id: 19, image: "/overseas.png", imageLight: "/overseas.png", name: "Brand 19" },
  { id: 20, image: "/rm.png", imageLight: "/rm.png", name: "Brand 20" },
  { id: 21, image: "/tiss.png", imageLight: "/tiss.png", name: "Brand 21" },
  { id: 22, image: "/tt.png", imageLight: "/tt.png", name: "Brand 22" },
  { id: 23, image: "/urbanicon.png", imageLight: "/urbanicon.png", name: "Brand 23" }
];

// Animation variants
const animationVariants = [
  { x: 100, opacity: 0 },     // From right
  { x: -100, opacity: 0 },    // From left
  { y: -100, opacity: 0 },    // From top
  { y: 100, opacity: 0 },     // From bottom
  { scale: 0.8, opacity: 0 }, // Zoom out
];

const Brands = () => {
  const [imagesPerView, setImagesPerView] = useState(2); // Default to mobile view

  useEffect(() => {
    const updateImagesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setImagesPerView(5); // Desktop screens
      } else if (width >= 640) {
        setImagesPerView(3); // Tablet screens
      } else {
        setImagesPerView(2); // Mobile screens
      }
    };

    updateImagesPerView();
    window.addEventListener('resize', updateImagesPerView);
    return () => window.removeEventListener('resize', updateImagesPerView);
  }, []);

  const [visibleBrands, setVisibleBrands] = useState([]);

  useEffect(() => {
    setVisibleBrands(Array.from({ length: imagesPerView }, (_, i) => i % brandsData.length));
  }, [imagesPerView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleBrands((prev) => {
        const newStartIndex = (prev[0] + imagesPerView) % brandsData.length;
        return Array.from({ length: imagesPerView }, (_, i) => (newStartIndex + i) % brandsData.length);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [imagesPerView]);

  return (
    <section className="pt-12">
      <div className="container mx-auto px-4 mb-16">
        {/* Heading Section */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Our <span className="text-blue-500">Partners</span> and <span className="text-blue-500">Collaborations</span>
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full px-4">
            {/* Carousel Container */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-6 bg-white rounded-md">
              {visibleBrands.map((index, idx) => (
                <SingleBrand
                  key={`${brandsData[index].id}-${idx}`}
                  brand={brandsData[index]}
                  animationIndex={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand, animationIndex }) => {
  const { image, imageLight, name } = brand;

  const isPng = image.toLowerCase().endsWith('.png') || imageLight.toLowerCase().endsWith('.png');

  const containerClasses = `relative aspect-square w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100 ${
    isPng ? 'bg-white' : 'bg-transparent'
  } flex items-center justify-center rounded-lg`;

  return (
    <motion.div
      className="flex items-center justify-center w-full"
      initial={animationVariants[animationIndex % animationVariants.length]}
      animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className={containerClasses}>
        <Image src={imageLight} alt={`${name} Logo Light`} fill className="object-contain hidden dark:block" />
        <Image src={image} alt={`${name} Logo`} fill className="object-contain block dark:hidden" />
      </div>
    </motion.div>
  );
};
