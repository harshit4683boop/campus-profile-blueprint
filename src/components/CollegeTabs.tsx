import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CoursesSection } from "./CoursesSection";
import { OverviewSection } from "./OverviewSection";
import { AdmissionSection } from "./AdmissionSection";
import { FeesSection } from "./FeesSection";
import { PlacementsSection } from "./PlacementsSection";
import { ReviewsSection } from "./ReviewsSection";
import { FAQSection } from "./FAQSection";

export function CollegeTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 h-auto p-1 bg-accent/50">
        <TabsTrigger value="overview" className="text-xs lg:text-sm py-3">Overview</TabsTrigger>
        <TabsTrigger value="courses" className="text-xs lg:text-sm py-3">Courses</TabsTrigger>
        <TabsTrigger value="admission" className="text-xs lg:text-sm py-3">Admission</TabsTrigger>
        <TabsTrigger value="fees" className="text-xs lg:text-sm py-3">Fees</TabsTrigger>
        <TabsTrigger value="placements" className="text-xs lg:text-sm py-3">Placements</TabsTrigger>
        <TabsTrigger value="reviews" className="text-xs lg:text-sm py-3">Reviews</TabsTrigger>
        <TabsTrigger value="faq" className="text-xs lg:text-sm py-3">FAQs</TabsTrigger>
      </TabsList>

      <div className="mt-6">
        <TabsContent value="overview">
          <OverviewSection />
        </TabsContent>
        
        <TabsContent value="courses">
          <CoursesSection />
        </TabsContent>
        
        <TabsContent value="admission">
          <AdmissionSection />
        </TabsContent>
        
        <TabsContent value="fees">
          <FeesSection />
        </TabsContent>
        
        <TabsContent value="placements">
          <PlacementsSection />
        </TabsContent>
        
        <TabsContent value="reviews">
          <ReviewsSection />
        </TabsContent>
        
        <TabsContent value="faq">
          <FAQSection />
        </TabsContent>
      </div>
    </Tabs>
  );
}