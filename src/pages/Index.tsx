import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Star, Users, Trophy, Building } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">College Profile Platform</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover detailed information about colleges, courses, admissions, placements, and more. 
            Make informed decisions for your educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/college-profile">
                View Sample College Profile
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Explore All Colleges
            </Button>
          </div>
        </div>
      </div>

      {/* Featured College Preview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured College Profile</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience our comprehensive college profile system with detailed information, reviews, and placement statistics.
          </p>
        </div>

        {/* College Preview Card */}
        <Card className="shadow-glow max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                  JIMS
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      Jagannath International Management School
                    </CardTitle>
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
                  </div>

                  <Button asChild variant="cta" size="lg">
                    <Link to="/college-profile">
                      View Full Profile
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Courses Offered</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">2,500+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">Placement Rate</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Comprehensive Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Detailed course information, fee structure, eligibility criteria, and admission process all in one place.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Student Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Authentic student reviews with ratings, pros & cons to help you make informed decisions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Placement Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Real-time placement data, top recruiters, and salary packages to understand career prospects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
