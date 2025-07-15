import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, Users, Trophy, Target, Briefcase } from "lucide-react";

const placementStats = {
  overall: 85,
  averagePackage: "₹4.5 LPA",
  highestPackage: "₹18 LPA",
  companiesVisited: 120,
  studentsPlaced: 650
};

const topRecruiters = [
  "TCS", "Infosys", "Wipro", "Accenture", "HCL", "Tech Mahindra",
  "IBM", "Cognizant", "Amazon", "Microsoft", "Deloitte", "EY",
  "KPMG", "PwC", "HDFC Bank", "ICICI Bank", "Axis Bank", "Flipkart"
];

const placementByBranch = [
  { course: "MBA", placed: 92, average: "₹6.2 LPA", highest: "₹18 LPA" },
  { course: "MCA", placed: 88, average: "₹5.8 LPA", highest: "₹15 LPA" },
  { course: "BBA", placed: 82, average: "₹3.8 LPA", highest: "₹12 LPA" },
  { course: "BCA", placed: 79, average: "₹3.2 LPA", highest: "₹10 LPA" }
];

const recruitmentProcess = [
  {
    phase: "Pre-Placement Talk",
    description: "Companies present their organization and job profiles to students"
  },
  {
    phase: "Online Assessment",
    description: "Aptitude tests, technical tests, and coding rounds"
  },
  {
    phase: "Group Discussion",
    description: "Communication skills and team dynamics evaluation"
  },
  {
    phase: "Technical Interview",
    description: "Domain-specific knowledge and problem-solving assessment"
  },
  {
    phase: "HR Interview",
    description: "Personality, cultural fit, and salary negotiation"
  },
  {
    phase: "Final Selection",
    description: "Offer letter and joining formalities"
  }
];

export function PlacementsSection() {
  return (
    <div className="space-y-6">
      {/* Placement Statistics */}
      <Card className="shadow-card bg-gradient-subtle">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Placement Statistics 2023-24
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{placementStats.overall}%</div>
              <div className="text-sm text-muted-foreground">Overall Placement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{placementStats.averagePackage}</div>
              <div className="text-sm text-muted-foreground">Average Package</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{placementStats.highestPackage}</div>
              <div className="text-sm text-muted-foreground">Highest Package</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{placementStats.companiesVisited}+</div>
              <div className="text-sm text-muted-foreground">Companies Visited</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{placementStats.studentsPlaced}+</div>
              <div className="text-sm text-muted-foreground">Students Placed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Branch-wise Placement */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Target className="w-5 h-5" />
            Branch-wise Placement Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {placementByBranch.map((branch, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <h3 className="font-medium text-lg">{branch.course}</h3>
                  <Badge variant="secondary" className="w-fit">
                    {branch.placed}% Placed
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Average Package</span>
                    <div className="font-medium text-primary">{branch.average}</div>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Highest Package</span>
                    <div className="font-medium text-primary">{branch.highest}</div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${branch.placed}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Recruiters */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Our Top Recruiters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {topRecruiters.map((company, index) => (
              <div key={index} className="text-center p-3 border rounded-lg hover:shadow-card transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs font-medium">{company}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recruitment Process */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Recruitment Process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recruitmentProcess.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium">{step.phase}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Placement Services */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="w-5 h-5" />
              Placement Support Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                Career Counseling & Guidance
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                Resume Building Workshops
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                Mock Interview Sessions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                Group Discussion Training
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                Aptitude Test Preparation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                Industry Interaction Sessions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                Soft Skills Development
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Placement Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">2024</Badge>
                <div>
                  <h4 className="font-medium">Best Placement Record</h4>
                  <p className="text-sm text-muted-foreground">85% placement - highest in 5 years</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">2023</Badge>
                <div>
                  <h4 className="font-medium">Industry Partnership Award</h4>
                  <p className="text-sm text-muted-foreground">Recognition for strong industry connections</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">2023</Badge>
                <div>
                  <h4 className="font-medium">Excellence in Career Services</h4>
                  <p className="text-sm text-muted-foreground">State-level recognition for placement support</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="success" size="lg">
            View Placement Report
          </Button>
          <Button variant="outline" size="lg">
            Contact Placement Cell
          </Button>
          <Button variant="cta" size="lg">
            Register for Placement
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Placement Cell: placement@jims.edu | +91 98765-43212
        </p>
      </div>
    </div>
  );
}