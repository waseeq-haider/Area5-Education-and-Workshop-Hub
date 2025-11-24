// Images are now referenced directly from public/assets

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  // Final Mockups - Overview
  { src: "/assets/Education & Workshop Hub.jpeg", alt: "Education & Workshop Hub - Main View", category: "Overview" },
  { src: "/assets/area5_01.png", alt: "Area 5 - Perspective 1", category: "Overview" },
  { src: "/assets/area5_02.png", alt: "Area 5 - Perspective 2", category: "Overview" },
  { src: "/assets/area5_03.png", alt: "Area 5 - Perspective 3", category: "Overview" },
  { src: "/assets/ed1.png", alt: "Education Hub Layout View", category: "Overview" },
  { src: "/assets/education and workshop Hub.png", alt: "Floor Plan - Education Hub", category: "Floor Plans" },

  // Features
  { src: "/assets/Indoor and outdoor learning spaces.jfif", alt: "Indoor and Outdoor Learning Spaces", category: "Features" },
  { src: "/assets/Modular classrooms for First Nations cultural workshops and STEM programs.jfif", alt: "Modular Classrooms", category: "Features" },
  { src: "/assets/Courtyards for group discussions and observations.jfif", alt: "Courtyards", category: "Features" },

  // Specific Items
  { src: "/assets/MODULAR CLASSROOM BUILDINGS (Item 41).jfif", alt: "Modular Classroom Buildings", category: "Specific Items" },
  { src: "/assets/OUTDOOR LEARNING CIRCLES.jfif", alt: "Outdoor Learning Circles", category: "Specific Items" },
  { src: "/assets/PERGOLAS & SHADE STRUCTURES.jfif", alt: "Pergolas & Shade Structures", category: "Specific Items" },
  { src: "/assets/RAINWATER TANKS (20,000L) for irrigation.jfif", alt: "Rainwater Tanks", category: "Specific Items" },

  // References
  { src: "/assets/Planting native flowering trees and shrubs for sensory exploration.jfif", alt: "Native Planting", category: "References" },
  { src: "/assets/Ground surfaces soft gravel, timber decking, permeable paving.jfif", alt: "Ground Surfaces", category: "References" },
  { src: "/assets/Design by Sandara Passos and Veronica Bosque.jfif", alt: "Designed by Sandara Passos and Veronica Bosque", category: "References" }
];

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 cursor-pointer hover:text-primary transition-colors duration-300 animate-fade-up">Image Gallery</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Explore the complete visual documentation of Area 5 - Education & Workshop Hub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-primary-foreground/80 mb-1">{image.category}</p>
                  <p className="text-lg font-semibold text-primary-foreground">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl p-0 bg-transparent border-none">
            <img
              src={selectedImage || ''}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
