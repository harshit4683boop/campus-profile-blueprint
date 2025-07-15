import { CollegeHeader } from "@/components/CollegeHeader";
import { CollegeTabs } from "@/components/CollegeTabs";
import { QuickFactsSidebar } from "@/components/QuickFactsSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function CollegeProfile() {
  const breadcrumbItems = [
    { label: "Colleges", href: "/colleges" },
    { label: "Delhi", href: "/colleges/delhi" },
    { label: "Management Colleges", href: "/colleges/delhi/management" },
    { label: "Jagannath International Management School" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <CollegeHeader />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <CollegeTabs />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <QuickFactsSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}