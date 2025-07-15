import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, Trophy, BookOpen, Building } from "lucide-react";

export function QuickFactsSidebar() {
  return (
    <div className="space-y-6">
      {/* Quick Facts */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Building className="w-5 h-5" />
            Quick Facts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">College Type</span>
            <Badge variant="secondary">Private</Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Established</span>
            <span className="font-medium">1993</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Students</span>
            <span className="font-medium">2,500+</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Campus Size</span>
            <span className="font-medium">15 Acres</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Ranking</span>
            <Badge variant="outline">#45 in Delhi</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Approvals & Accreditations */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            Approvals & Accreditations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Badge variant="secondary" className="w-full justify-center py-2">
            AICTE Approved
          </Badge>
          <Badge variant="secondary" className="w-full justify-center py-2">
            NBA Accredited
          </Badge>
          <Badge variant="secondary" className="w-full justify-center py-2">
            ISO 9001:2015 Certified
          </Badge>
          <Badge variant="secondary" className="w-full justify-center py-2">
            UGC Recognized
          </Badge>
        </CardContent>
      </Card>

      {/* Location */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Sector-5, Institutional Area, Kalkaji
            </p>
            <p className="text-sm text-muted-foreground">
              New Delhi - 110019
            </p>
            <p className="text-sm text-muted-foreground">
              Near Nehru Place Metro Station
            </p>
          </div>
          <Button variant="outline" className="w-full mt-4">
            View on Map
          </Button>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Key Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-primary" />
            <span>Industry Expert Faculty</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Regular Industry Visits</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Trophy className="w-4 h-4 text-primary" />
            <span>100% Placement Assistance</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Building className="w-4 h-4 text-primary" />
            <span>Modern Infrastructure</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}