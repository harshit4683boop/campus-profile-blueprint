import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building, Award, BookOpen, Target, Heart } from "lucide-react";

export function OverviewSection() {
  return (
    <div className="space-y-8">
      {/* About Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Building className="w-5 h-5" />
            About Jagannath International Management School
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Established in 1993, Jagannath International Management School (JIMS) is one of Delhi's premier institutions 
            for management and computer applications education. Located in the heart of Kalkaji, our college has been 
            committed to providing quality education and fostering innovation for over three decades.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We offer undergraduate and postgraduate programs in Management, Computer Applications, and Commerce. 
            Our curriculum is designed to meet industry standards and prepare students for successful careers in 
            their chosen fields.
          </p>
        </CardContent>
      </Card>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-5 h-5" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To be a globally recognized institution that empowers students with knowledge, skills, and values 
              necessary to become responsible leaders and contributors to society.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To provide holistic education through innovative teaching methodologies, industry collaboration, 
              and character building that enables our graduates to excel in their professional and personal lives.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Key Statistics */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Award className="w-5 h-5" />
            Key Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">30+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">2,500+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Industry Partners</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Facilities */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Campus Facilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Modern Computer Labs",
              "Digital Library",
              "Auditorium (500 capacity)",
              "Sports Complex",
              "Cafeteria",
              "Wi-Fi Campus",
              "Conference Halls",
              "Student Common Areas",
              "Parking Facility"
            ].map((facility, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">{facility}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Award className="w-5 h-5" />
            Recent Achievements & Recognitions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="mt-1">2024</Badge>
              <div>
                <h4 className="font-medium">Best Private College in Delhi NCR</h4>
                <p className="text-sm text-muted-foreground">Awarded by Education Excellence Council</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="mt-1">2023</Badge>
              <div>
                <h4 className="font-medium">Industry-Academia Collaboration Award</h4>
                <p className="text-sm text-muted-foreground">Recognition for outstanding industry partnerships</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="mt-1">2023</Badge>
              <div>
                <h4 className="font-medium">Excellence in Placement Award</h4>
                <p className="text-sm text-muted-foreground">For consistent placement record above 85%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}