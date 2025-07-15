import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "MBA (2024)",
    rating: 5,
    date: "2 months ago",
    review: "Excellent college with great faculty and infrastructure. The placement cell is very supportive and helped me secure a job in a top MNC. The industry exposure through guest lectures and workshops is commendable.",
    pros: ["Great faculty", "Good placements", "Modern infrastructure"],
    cons: ["Limited parking space"],
    helpful: 23,
    avatar: "PS"
  },
  {
    id: 2,
    name: "Rohit Kumar",
    course: "BCA (2023)",
    rating: 4,
    date: "4 months ago",
    review: "Good college for computer applications. The labs are well-equipped and the curriculum is updated. However, the fees could be more affordable. Overall, a decent choice for BCA.",
    pros: ["Updated curriculum", "Good lab facilities", "Supportive faculty"],
    cons: ["High fees", "Limited extracurricular activities"],
    helpful: 18,
    avatar: "RK"
  },
  {
    id: 3,
    name: "Anjali Gupta",
    course: "BBA (2024)",
    rating: 4,
    date: "6 months ago",
    review: "The college provides good exposure to management concepts through case studies and industry visits. The faculty is experienced and helpful. The campus life is vibrant with various events throughout the year.",
    pros: ["Industry exposure", "Experienced faculty", "Active campus life"],
    cons: ["Canteen food quality", "Wi-Fi speed issues"],
    helpful: 15,
    avatar: "AG"
  },
  {
    id: 4,
    name: "Vikash Singh",
    course: "MCA (2023)",
    rating: 5,
    date: "8 months ago",
    review: "Outstanding program for MCA. The curriculum covers all latest technologies including AI/ML. Got placed in a software company with a good package. Highly recommend for computer science students.",
    pros: ["Latest technology curriculum", "Good placement support", "Qualified professors"],
    cons: ["Limited research opportunities"],
    helpful: 31,
    avatar: "VS"
  }
];

export function ReviewsSection() {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => 
    reviews.filter(review => review.rating === rating).length
  );

  return (
    <div className="space-y-6">
      {/* Rating Summary */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl">Student Reviews & Ratings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Overall Rating */}
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <div className="text-muted-foreground">
                Based on {reviews.length} reviews
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {ratingDistribution.map((count, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-sm w-8">{5 - index}★</span>
                  <div className="flex-1 bg-muted h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${(count / reviews.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-8">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {review.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.course}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {review.review}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="text-sm font-medium text-green-700 mb-2 flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" />
                        Pros
                      </h5>
                      <div className="space-y-1">
                        {review.pros.map((pro, index) => (
                          <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                            {pro}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-red-700 mb-2 flex items-center gap-1">
                        <ThumbsDown className="w-3 h-3" />
                        Cons
                      </h5>
                      <div className="space-y-1">
                        {review.cons.map((con, index) => (
                          <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                            {con}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Was this helpful?</span>
                    <button className="flex items-center gap-1 hover:text-primary">
                      <ThumbsUp className="w-3 h-3" />
                      Yes ({review.helpful})
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary">
                      <ThumbsDown className="w-3 h-3" />
                      No
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-accent">
          Load More Reviews
        </Badge>
      </div>
    </div>
  );
}