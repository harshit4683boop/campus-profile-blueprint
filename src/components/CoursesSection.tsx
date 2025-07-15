import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, GraduationCap, Download, ExternalLink } from "lucide-react";

const courses = [
  {
    id: 1,
    name: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years",
    fees: "₹1,80,000",
    eligibility: "10+2 with Mathematics",
    seats: 60,
    mode: "Full Time",
    highlights: ["Latest Curriculum", "Industry Projects", "Internship Opportunities"],
    syllabus: "/syllabus/bca.pdf"
  },
  {
    id: 2,
    name: "Bachelor of Business Administration (BBA)",
    duration: "3 Years", 
    fees: "₹1,65,000",
    eligibility: "10+2 from any stream",
    seats: 120,
    mode: "Full Time",
    highlights: ["Case Study Method", "Live Projects", "Corporate Exposure"],
    syllabus: "/syllabus/bba.pdf"
  },
  {
    id: 3,
    name: "Master of Business Administration (MBA)",
    duration: "2 Years",
    fees: "₹3,50,000",
    eligibility: "Bachelor's Degree with 50% marks",
    seats: 180,
    mode: "Full Time",
    highlights: ["Dual Specialization", "International Exposure", "Industry Mentorship"],
    syllabus: "/syllabus/mba.pdf"
  },
  {
    id: 4,
    name: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    fees: "₹2,80,000",
    eligibility: "BCA/B.Sc.(IT) with Mathematics",
    seats: 60,
    mode: "Full Time",
    highlights: ["Advanced Programming", "AI/ML Modules", "Tech Industry Connect"],
    syllabus: "/syllabus/mca.pdf"
  }
];

export function CoursesSection() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Courses Offered</h2>
        <p className="text-muted-foreground">
          Explore our comprehensive range of undergraduate and postgraduate programs
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {courses.map((course) => (
          <Card key={course.id} className="shadow-card hover:shadow-glow transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg leading-tight">{course.name}</CardTitle>
                <Badge variant="outline">{course.mode}</Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>{course.seats} Seats</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <span className="font-medium text-sm">Total Fees: </span>
                  <span className="text-lg font-bold text-primary">{course.fees}</span>
                </div>
                
                <div>
                  <span className="font-medium text-sm">Eligibility: </span>
                  <span className="text-sm">{course.eligibility}</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-2">Course Highlights:</h4>
                <div className="flex flex-wrap gap-2">
                  {course.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="success" size="sm" className="flex-1">
                  Apply Now
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  Syllabus
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" size="lg">
          <BookOpen className="w-4 h-4 mr-2" />
          View All Courses
        </Button>
      </div>
    </div>
  );
}