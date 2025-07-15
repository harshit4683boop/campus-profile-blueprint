import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Calendar, CreditCard, Info } from "lucide-react";

const feeStructure = [
  {
    course: "BBA",
    duration: "3 Years",
    totalFees: "₹1,65,000",
    yearlyFees: "₹55,000",
    semesterFees: "₹27,500",
    breakdown: {
      tuition: "₹45,000",
      development: "₹5,000",
      library: "₹2,000",
      lab: "₹2,000",
      other: "₹1,000"
    }
  },
  {
    course: "BCA",
    duration: "3 Years", 
    totalFees: "₹1,80,000",
    yearlyFees: "₹60,000",
    semesterFees: "₹30,000",
    breakdown: {
      tuition: "₹50,000",
      development: "₹5,000",
      library: "₹2,000",
      lab: "₹2,500",
      other: "₹500"
    }
  },
  {
    course: "MBA",
    duration: "2 Years",
    totalFees: "₹3,50,000",
    yearlyFees: "₹1,75,000",
    semesterFees: "₹87,500",
    breakdown: {
      tuition: "₹1,60,000",
      development: "₹8,000",
      library: "₹3,000",
      lab: "₹3,000",
      other: "₹1,000"
    }
  },
  {
    course: "MCA",
    duration: "2 Years",
    totalFees: "₹2,80,000",
    yearlyFees: "₹1,40,000",
    semesterFees: "₹70,000",
    breakdown: {
      tuition: "₹1,25,000",
      development: "₹7,000",
      library: "₹3,000",
      lab: "₹4,000",
      other: "₹1,000"
    }
  }
];

export function FeesSection() {
  return (
    <div className="space-y-6">
      {/* Fee Structure Overview */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Fee Structure 2024-25
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Course</th>
                  <th className="text-left py-3 px-4">Duration</th>
                  <th className="text-left py-3 px-4">Total Fees</th>
                  <th className="text-left py-3 px-4">Yearly Fees</th>
                  <th className="text-left py-3 px-4">Semester Fees</th>
                  <th className="text-left py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className="border-b hover:bg-accent/50">
                    <td className="py-3 px-4 font-medium">{fee.course}</td>
                    <td className="py-3 px-4">{fee.duration}</td>
                    <td className="py-3 px-4 font-bold text-primary">{fee.totalFees}</td>
                    <td className="py-3 px-4">{fee.yearlyFees}</td>
                    <td className="py-3 px-4">{fee.semesterFees}</td>
                    <td className="py-3 px-4">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Fee Breakdown */}
      <div className="grid md:grid-cols-2 gap-6">
        {feeStructure.map((fee, index) => (
          <Card key={index} className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">{fee.course} - Fee Breakdown</CardTitle>
              <Badge variant="secondary">{fee.duration}</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Total Course Fee</span>
                <span className="text-lg font-bold text-primary">{fee.totalFees}</span>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Annual Fee Components:</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Tuition Fee</span>
                    <span>{fee.breakdown.tuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Development Fee</span>
                    <span>{fee.breakdown.development}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Library Fee</span>
                    <span>{fee.breakdown.library}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lab Fee</span>
                    <span>{fee.breakdown.lab}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Other Charges</span>
                    <span>{fee.breakdown.other}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Payment Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Payment Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-medium">Online Payment</h4>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• Credit/Debit Cards</li>
                <li>• Net Banking</li>
                <li>• UPI Payment</li>
                <li>• Digital Wallets</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium">Offline Payment</h4>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• Demand Draft</li>
                <li>• Bank Transfer</li>
                <li>• Cash Payment (at college)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Payment Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-medium">Semester Payment Plan</h4>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• 1st Semester: At admission</li>
                <li>• 2nd Semester: Before January</li>
                <li>• Subsequent semesters: Before semester start</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium">Annual Payment Plan</h4>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• 1st Year: At admission</li>
                <li>• 2nd Year: Before April</li>
                <li>• 3rd Year: Before April (if applicable)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scholarships & Financial Aid */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Info className="w-5 h-5" />
            Scholarships & Financial Aid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-2">Merit Scholarships</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 90%+ marks: 25% fee waiver</li>
                <li>• 85-90% marks: 15% fee waiver</li>
                <li>• 80-85% marks: 10% fee waiver</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Category Scholarships</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• SC/ST: 50% fee concession</li>
                <li>• OBC: 25% fee concession</li>
                <li>• EWS: 20% fee concession</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Other Benefits</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Sports quota: 30% waiver</li>
                <li>• Sibling discount: 10% waiver</li>
                <li>• Early payment: 5% discount</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Card className="shadow-card bg-accent/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Info className="w-5 h-5" />
            Important Notes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
              <span>Fees once paid are non-refundable except in exceptional circumstances</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
              <span>Late fee charges of ₹100 per day will be applicable after due date</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
              <span>Fee structure is subject to revision as per college policy</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
              <span>All payments must be made in favor of "Jagannath International Management School"</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
              <span>Students must clear all dues before appearing for examinations</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="success" size="lg">
            Pay Fees Online
          </Button>
          <Button variant="outline" size="lg">
            Download Fee Structure
          </Button>
          <Button variant="cta" size="lg">
            Fee Enquiry
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          For fee-related queries, contact: accounts@jims.edu | +91 98765-43211
        </p>
      </div>
    </div>
  );
}