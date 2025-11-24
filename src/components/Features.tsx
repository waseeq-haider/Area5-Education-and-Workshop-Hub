import { Home, Leaf, Sun, Droplets, Trees } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Home,
    title: "Eco-friendly Cabins",
    description: "Sustainable cabins with solar panels, AC, and Wi-Fi for modern comfort in nature."
  },
  {
    icon: Trees,
    title: "Native Landscaping",
    description: "Beautifully landscaped with native shrubs and flowering plants for natural beauty."
  },
  {
    icon: Leaf,
    title: "Private Garden Spaces",
    description: "Each cabin features private garden spaces and outdoor decks for relaxation."
  },
  {
    icon: Sun,
    title: "Solar Power",
    description: "Complete solar array and battery storage for sustainable energy independence."
  },
  {
    icon: Droplets,
    title: "Rainwater Harvesting",
    description: "50,000L rainwater collection tanks for sustainable water management."
  }
];

export const Features = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Features</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-border animate-fade-in">
            <CardContent className="p-0">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src="/assets/Indoor and outdoor learning spaces.jfif"
                  alt="Indoor and outdoor learning spaces"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="mb-6 inline-flex p-4 rounded-lg bg-nature-green-light group-hover:bg-accent transition-colors">
                  <Home className="h-8 w-8 text-nature-green group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">Learning Spaces</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Indoor and outdoor learning spaces designed for interactive experiences.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-border animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-0">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src="/assets/Modular classrooms for First Nations cultural workshops and STEM programs.jfif"
                  alt="Modular Classrooms"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="mb-6 inline-flex p-4 rounded-lg bg-nature-green-light group-hover:bg-accent transition-colors">
                  <Trees className="h-8 w-8 text-nature-green group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">Modular Classrooms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Modular classrooms for First Nations cultural workshops and STEM programs.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-border animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-0">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src="/assets/Courtyards for group discussions and observations.jfif"
                  alt="Courtyards"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="mb-6 inline-flex p-4 rounded-lg bg-nature-green-light group-hover:bg-accent transition-colors">
                  <Leaf className="h-8 w-8 text-nature-green group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">Courtyards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Courtyards for group discussions and observations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
