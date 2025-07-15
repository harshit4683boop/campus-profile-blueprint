import { MapPin, Star, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CollegeHeader() {
  return (
    <div className="bg-gradient-subtle border-b">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* College Logo */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-card">
              JIMS
            </div>
          </div>

          {/* College Info */}
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Jagannath International Management School
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Kalkaji, New Delhi</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-sm font-medium">4.2</span>
                    <span className="text-sm text-muted-foreground">(156 Reviews)</span>
                  </div>
                  
                  <Badge variant="secondary">AICTE Approved</Badge>
                  <Badge variant="secondary">NBA Accredited</Badge>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>info@jims.edu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>www.jims.edu</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:min-w-fit">
                <Button variant="success" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
                <Button variant="cta" size="lg">
                  Contact College
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}