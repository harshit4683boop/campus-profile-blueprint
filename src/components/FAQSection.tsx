import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";

const faqs = [
  {
    id: "admission",
    category: "Admission",
    questions: [
      {
        question: "What is the admission procedure for undergraduate courses?",
        answer: "The admission procedure involves filling an online application form, paying the application fee, appearing for an entrance test (if applicable), attending document verification, and finally paying the admission fee to confirm your seat."
      },
      {
        question: "What are the eligibility criteria for MBA admission?",
        answer: "For MBA admission, you need a bachelor's degree in any discipline with minimum 50% aggregate marks and a valid score in CAT/MAT/XAT/CMAT entrance exams."
      },
      {
        question: "Is there any entrance exam for BCA and BBA courses?",
        answer: "Yes, there is a college-level entrance examination for both BCA and BBA courses. The exam tests basic aptitude, English, and Mathematics (for BCA)."
      },
      {
        question: "When do admissions start for the next academic year?",
        answer: "Admissions typically start in March and continue till June. The exact dates are announced on our official website and in leading newspapers."
      }
    ]
  },
  {
    id: "academics",
    category: "Academics",
    questions: [
      {
        question: "What is the duration of various courses offered?",
        answer: "BBA and BCA are 3-year undergraduate programs, while MBA and MCA are 2-year postgraduate programs. All courses follow semester system with 6 semesters for UG and 4 semesters for PG."
      },
      {
        question: "Are there any industry internships during the course?",
        answer: "Yes, internships are mandatory for all courses. BBA and MBA students do 2-month summer internships, while BCA and MCA students have project-based internships in their final semester."
      },
      {
        question: "What is the attendance requirement?",
        answer: "Students must maintain a minimum of 75% attendance in each subject to be eligible for semester examinations. Medical leave is considered separately with proper documentation."
      },
      {
        question: "Are there any additional certification courses?",
        answer: "Yes, we offer various certification courses in Digital Marketing, Data Analytics, Programming Languages, and Soft Skills development at no additional cost."
      }
    ]
  },
  {
    id: "facilities",
    category: "Facilities",
    questions: [
      {
        question: "What facilities are available on campus?",
        answer: "Our campus features modern computer labs, digital library, auditorium, sports complex, cafeteria, Wi-Fi connectivity, conference halls, and ample parking space."
      },
      {
        question: "Is hostel accommodation available?",
        answer: "Currently, we don't have on-campus hostel facilities. However, we maintain a list of approved paying guest accommodations and hostels near the campus for outstation students."
      },
      {
        question: "What are the library facilities?",
        answer: "Our digital library has over 50,000 books, 200+ journals, online databases, and comfortable reading spaces. It operates from 8 AM to 8 PM on weekdays and 9 AM to 5 PM on weekends."
      },
      {
        question: "Are there transportation facilities?",
        answer: "The college is well-connected by public transport with the nearest metro station (Nehru Place) just 2 km away. We also have tie-ups with private bus services for student transportation."
      }
    ]
  },
  {
    id: "placements",
    category: "Placements",
    questions: [
      {
        question: "What is the placement record of the college?",
        answer: "Our overall placement rate is 85% with an average package of ₹4.5 LPA. The highest package offered was ₹18 LPA. Over 120 companies visit our campus annually."
      },
      {
        question: "Which companies recruit from the campus?",
        answer: "Top recruiters include TCS, Infosys, Wipro, Accenture, HCL, IBM, Amazon, Microsoft, Deloitte, KPMG, HDFC Bank, ICICI Bank, and many more."
      },
      {
        question: "Is there any placement preparation support?",
        answer: "Yes, we provide comprehensive placement support including career counseling, resume building workshops, mock interviews, group discussion training, and aptitude test preparation."
      },
      {
        question: "Can students apply for multiple job offers?",
        answer: "Yes, students can apply for multiple companies. However, once placed, they need to follow the college's placement policy regarding appearing for subsequent interviews."
      }
    ]
  },
  {
    id: "fees",
    category: "Fees & Scholarships",
    questions: [
      {
        question: "What is the fee structure for different courses?",
        answer: "Fee varies by course: BBA (₹1,65,000), BCA (₹1,80,000), MBA (₹3,50,000), MCA (₹2,80,000). This includes all academic fees but excludes hostel and transportation charges."
      },
      {
        question: "Are there any scholarship schemes available?",
        answer: "Yes, we offer merit scholarships (up to 25% fee waiver), category scholarships for SC/ST/OBC students, sports scholarships, and need-based financial assistance."
      },
      {
        question: "What are the payment options for fees?",
        answer: "Fees can be paid online through our portal (credit/debit cards, net banking, UPI) or offline through demand draft, bank transfer, or cash payment at the college."
      },
      {
        question: "Is there any late fee penalty?",
        answer: "Yes, a late fee of ₹100 per day is charged after the due date. Students must clear all dues before appearing for semester examinations."
      }
    ]
  }
];

export function FAQSection() {
  return (
    <div className="space-y-6">
      {/* FAQ Header */}
      <Card className="shadow-card bg-gradient-subtle">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6" />
            Frequently Asked Questions
          </CardTitle>
          <p className="text-muted-foreground">
            Find answers to common questions about admissions, academics, facilities, and more
          </p>
        </CardHeader>
      </Card>

      {/* FAQ Categories */}
      <div className="space-y-6">
        {faqs.map((category) => (
          <Card key={category.id} className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${category.id}-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Support */}
      <Card className="shadow-card bg-accent/20">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Still Have Questions?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Can't find the answer you're looking for? Our support team is here to help you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 border rounded-lg">
              <Phone className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h4 className="font-medium">Call Us</h4>
              <p className="text-sm text-muted-foreground">+91 98765-43210</p>
              <p className="text-xs text-muted-foreground">Mon-Fri, 9 AM - 6 PM</p>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <Mail className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h4 className="font-medium">Email Us</h4>
              <p className="text-sm text-muted-foreground">info@jims.edu</p>
              <p className="text-xs text-muted-foreground">Response within 24 hours</p>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <MessageCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h4 className="font-medium">Live Chat</h4>
              <p className="text-sm text-muted-foreground">Chat with our team</p>
              <p className="text-xs text-muted-foreground">Available during office hours</p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="cta" size="lg">
              Contact Support Team
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}