import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users, Clock, CheckCircle } from "lucide-react";

export function AdmissionSection() {
  return (
    <div className="space-y-6">
      {/* Admission Process Overview */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Users className="w-5 h-5" />
            Admission Process 2024-25
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Important Dates</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Application Start:</span>
                  <Badge variant="secondary">March 1, 2024</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Application Deadline:</span>
                  <Badge variant="secondary">June 30, 2024</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Entrance Test:</span>
                  <Badge variant="secondary">July 15, 2024</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Results Announcement:</span>
                  <Badge variant="secondary">July 25, 2024</Badge>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Application Fee</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">General Category:</span>
                  <span className="font-medium">₹1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">SC/ST/OBC:</span>
                  <span className="font-medium">₹500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Payment Mode:</span>
                  <span className="text-sm">Online/DD</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Admission Steps */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Step-by-Step Admission Process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Online Application",
                description: "Fill the online application form with personal and academic details"
              },
              {
                step: 2,
                title: "Document Upload",
                description: "Upload required documents (10th, 12th marksheets, photos, etc.)"
              },
              {
                step: 3,
                title: "Fee Payment",
                description: "Pay application fee through online payment gateway or DD"
              },
              {
                step: 4,
                title: "Entrance Test",
                description: "Appear for entrance test (if applicable for the course)"
              },
              {
                step: 5,
                title: "Merit List",
                description: "Check merit list and counseling schedule on official website"
              },
              {
                step: 6,
                title: "Document Verification",
                description: "Attend document verification with original certificates"
              },
              {
                step: 7,
                title: "Admission Confirmation",
                description: "Pay admission fee to confirm your seat"
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Eligibility Criteria */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Undergraduate Programs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium">BBA Eligibility</h4>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• 10+2 from recognized board</li>
                <li>• Minimum 50% aggregate marks</li>
                <li>• Any stream (Science/Commerce/Arts)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">BCA Eligibility</h4>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• 10+2 with Mathematics</li>
                <li>• Minimum 50% aggregate marks</li>
                <li>• Science/Commerce stream preferred</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Postgraduate Programs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium">MBA Eligibility</h4>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• Bachelor's degree in any discipline</li>
                <li>• Minimum 50% aggregate marks</li>
                <li>• Valid CAT/MAT/XAT/CMAT score</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">MCA Eligibility</h4>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• BCA/B.Sc.(IT)/B.Sc.(CS) degree</li>
                <li>• Mathematics at 10+2 or graduation</li>
                <li>• Minimum 50% aggregate marks</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Required Documents */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Required Documents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">For All Applicants</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  10th Class Mark Sheet & Certificate
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  12th Class Mark Sheet & Certificate
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Transfer Certificate
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Character Certificate
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Passport Size Photographs (6 copies)
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Additional (PG Programs)</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Bachelor's Degree Certificate
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  All Semester Mark Sheets
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Entrance Test Score Card
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Work Experience Certificate (if any)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Category Certificate (if applicable)
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="success" size="lg">
            Apply Now
          </Button>
          <Button variant="outline" size="lg">
            Download Application Form
          </Button>
          <Button variant="cta" size="lg">
            Contact Admissions Office
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Need help? Call our admission helpline: +91 98765-43210
        </p>
      </div>
    </div>
  );
}