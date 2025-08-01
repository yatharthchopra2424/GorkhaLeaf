"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const categories = [
  { name: "Black Tea", image: "/categories/black-tea.png" },
  { name: "Green Tea", image: "/categories/green-tea.png" },
  { name: "White Tea", image: "/categories/white-tea.png" },
  { name: "Matcha", image: "/categories/matcha.png" },
  { name: "Herbal Tea", image: "/categories/herbal-tea.png" },
  { name: "Chai", image: "/categories/chai.png" },
  { name: "Oolong", image: "/categories/oolong.png" },
  { name: "Rooibos", image: "/categories/rooibos.png" },
  { name: "Teaware", image: "/categories/teaware.png" },
];

const CategoriesSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  );

  React.useEffect(() => {
    const styles = `
      .curved-carousel .embla__container {
        perspective: 1000px;
      }

      .curved-carousel .embla__slide {
        transform-style: preserve-3d;
        transition: transform 0.5s;
      }

      .curved-carousel .embla__slide--active {
        transform: scale(1.1);
        z-index: 1;
      }

      .curved-carousel .embla__slide--prev,
      .curved-carousel .embla__slide--next {
        transform: scale(0.9) translateX(var(--translate-x, 0)) translateZ(-100px);
      }

      .curved-carousel .embla__slide--prev {
        --translate-x: -50%;
      }

      .curved-carousel .embla__slide--next {
        --translate-x: 50%;
      }
    `;

    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(styles);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];
    
    return () => {
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter(s => s !== styleSheet);
    };
  }, []);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#7d806a' }}>Our Collections</h2>
          <p className="text-lg" style={{ color: '#7d806a' }}>
            Discover a world of exquisite teas, each with a unique story and flavor.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full curved-carousel"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent className="-ml-4">
            {categories.map((category, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                <div className="p-1">
                  <Card className="border-none shadow-none bg-transparent">
                    <CardContent className="flex flex-col items-center justify-center p-2">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={200}
                        height={200}
                        className="mb-2 object-cover h-[200px] w-[200px] shadow-lg"
                      />
                      <h3 className="font-semibold text-base" style={{ color: '#7d806a' }}>
                        {category.name}
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default CategoriesSection;
