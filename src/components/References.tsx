import { Leaf, Layers, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const References = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">References</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Design specifications and references for the Eco Lodges & Family Accommodation
          </p>
        </div>

        {/* Technical References Section */}
        <div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-nature-green-light">
                  <Leaf className="h-6 w-6 text-nature-green" />
                </div>
                <CardTitle>Planting References</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-40 overflow-hidden rounded-md mb-4">
                  <img
                    src="/assets/Planting native flowering trees and shrubs for sensory exploration.jfif"
                    alt="Planting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">Native flowering trees and shrubs for sensory exploration.</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-earth-brown-light">
                  <Layers className="h-6 w-6 text-earth-brown" />
                </div>
                <CardTitle>Ground Surfaces</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-40 overflow-hidden rounded-md mb-4">
                  <img
                    src="/assets/Ground surfaces soft gravel, timber decking, permeable paving.jfif"
                    alt="Ground Surfaces"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">Soft gravel, timber decking, and permeable paving.</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Landscape Designers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-40 overflow-hidden rounded-md mb-4">
                  <img
                    src="/assets/Design by Sandara Passos and Veronica Bosque.jfif"
                    alt="Designers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Sandara Passos</p>
                  <p className="text-sm text-muted-foreground">Lead Designer</p>
                </div>
                <div className="mt-2">
                  <p className="font-semibold">Veronica Bosque</p>
                  <p className="text-sm text-muted-foreground">Landscape Architect</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
