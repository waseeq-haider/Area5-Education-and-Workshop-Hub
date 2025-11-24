import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    number: 31,
    title: "10 ECO-LODGE CABINS",
    description: "Eco-friendly cabins designed for families and groups, each with 4 beds. Features modern amenities including solar panels, AC, and Wi-Fi while maintaining sustainable practices and natural aesthetics."
  },
  {
    title: "RAINWATER COLLECTION TANKS",
    description: "50,000L rainwater collection system providing sustainable water management for all lodge facilities. Integrated seamlessly into the landscape design."
  },
  {
    title: "SOLAR ARRAY & BATTERY STORAGE",
    description: "Comprehensive solar power system with battery storage ensuring energy independence. Powers all cabins with clean, renewable energy."
  },
  {
    title: "PRIVATE GARDENS & DECKING",
    description: "Each cabin features private garden spaces with native plantings and timber decking. Outdoor areas designed for relaxation and connection with nature."
  }
];

export const SpecificItems = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Specific Items</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Item 1 */}
          <Card className="hover:shadow-xl transition-all animate-fade-up">
            <CardContent className="p-0">
              <div className="h-64 overflow-hidden rounded-t-lg">
                <img
                  src="/assets/MODULAR CLASSROOM BUILDINGS (Item 41).jfif"
                  alt="Modular Classroom Buildings"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                  Item 41
                </div>
                <h3 className="text-2xl font-bold mb-4">MODULAR CLASSROOM BUILDINGS</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Flexible learning spaces designed for First Nations cultural workshops and STEM programs.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Item 2 */}
          <Card className="hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-0">
              <div className="h-64 overflow-hidden rounded-t-lg">
                <img
                  src="/assets/OUTDOOR LEARNING CIRCLES.jfif"
                  alt="Outdoor Learning Circles"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">OUTDOOR LEARNING CIRCLES</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Circular outdoor spaces designed for group discussions, storytelling, and nature observation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Item 3 */}
          <Card className="hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-0">
              <div className="h-64 overflow-hidden rounded-t-lg">
                <img
                  src="/assets/PERGOLAS & SHADE STRUCTURES.jfif"
                  alt="Pergolas & Shade Structures"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">PERGOLAS & SHADE STRUCTURES</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Structures providing shade and comfort for outdoor activities and gatherings.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Item 4 */}
          <Card className="hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: "300ms" }}>
            <CardContent className="p-0">
              <div className="h-64 overflow-hidden rounded-t-lg">
                <img
                  src="/assets/RAINWATER TANKS (20,000L) for irrigation.jfif"
                  alt="Rainwater Tanks"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">RAINWATER TANKS (20,000L)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  20,000L rainwater collection tanks dedicated for irrigation purposes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
