"use client";
import { BlurFade } from "@/components/ui/BlurFade";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const reviewList: ReviewProps[] = [
  {
    image: "/team/priyanka.webp",
    name: "Priya Verma",
    userName: "President, EcoCraft Creations",
    comment: `When I first started EcoCraft Creations, I was filled with doubt. I didn't have much money, no big investors, and very little experience. But I had one thing that kept me going—a strong belief in the power of small steps. Every day, I worked a little more, learned a little more, and improved my skills bit by bit. I focused on listening to my customers, adapting my products, and building relationships within my community. The journey wasn't easy; there were challenges and setbacks, days when I wanted to give up. But each obstacle taught me something valuable.`,
  },
  {
    image: "/team/Damita_Pathak.webp",
    name: "Rahul Singh",
    userName: "Owner, Fresh Farms",
    comment:
      "The path of an entrepreneur is challenging, but every obstacle teaches you something invaluable. Don’t be afraid of setbacks—they’re just stepping stones to your success.",
  },

  {
    image: "/team/anugrah2.webp",
    name: "Sunita Devi",
    userName: "Co-Founder, Village Style Boutique",
    comment:
      "Your journey as an entrepreneur will be unique, so don’t compare yourself to others. Focus on building your skills and creating value. Success will follow if you stay committed.",
  },
  {
    image: "/team/Vinayak_oberoi.webp",
    name: "Manoj Patel",
    userName: "Founder, AgroLink Solutions",
    comment:
      "There’s strength in community. Connect with others, share your experiences, and learn from theirs. Together, we can achieve far more than we could alone.",
  },
  {
    image: "/team/vedant2.webp",
    name: "Meera Kumari",
    userName: "Owner, Herbal Health Products",
    comment:
      "Learning never stops for an entrepreneur. Embrace every opportunity to learn something new—each skill, no matter how small, brings you closer to your goal.",
  },
  {
    image: "/team/tanya.webp",
    name: "Arjun Rao",
    userName: "Treasurerr, FarmTech Innovations",
    comment:
      "In business, the real growth happens when you step outside your comfort zone. Be willing to take calculated risks and don’t let fear hold you back.",
  },
  {
    image: "/team/ashwin_parande.webp",
    name: "Lakshmi Reddy",
    userName: "Artisan, Handwoven Traditions",
    comment:
      "The most valuable asset for any entrepreneur is resilience. Success may not come quickly, but if you keep going, you’ll eventually create something truly meaningful.",
  },
  {
    image: "/team/riddhima.webp",
    name: "Suman Yadav",
    userName: "Co-Owner, Green Roots Nursery",
    comment:
      "The journey is just as important as the destination. Enjoy the process of building your business, learning, and growing as an entrepreneur.",
  },
];

export const TestimonialSectionMemebers = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <BlurFade delay={0.25 * 2} inView>
          <h2 className="text-3xl md:text-5xl text-center font-bold text-white mb-4">
            Share Your Entrepreneurial Journey
          </h2>
          <h2 className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join our vibrant community of rural entrepreneurs. Share your
            experiences, ask questions, or offer insights to help others grow.
            Your story could inspire the next successful business in rural
            India!
          </h2>
          <div className="text-center">
            <a href="/contact?type=community">
              <button className="mt-4 py-3 px-6 font-medium text-sm text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 active:shadow-none rounded-lg shadow-lg shadow-blue-600/20">
                Share
              </button>
            </a>
          </div>
        </BlurFade>
      </div>
      <BlurFade delay={0.25 * 3} inView>
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviewList?.map((review) => (
              <Card
                key={review.name}
                className="bg-gray-900 border border-gray-800 hover:scale-105 transition-all cursor-pointer md:last:col-span-2 lg:last:col-span-1 flex flex-col items-start justify-between first:row-span-2 basis-1/2 hover:border-blue-700/50 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <CardContent className="pt-6 pb-0">
                  <p className="text-gray-300">{`"${review.comment}"`}</p>
                </CardContent>

                <CardHeader>
                  <div className="flex flex-col">
                    <CardTitle className="text-lg text-white">
                      {review.name}
                    </CardTitle>
                    <CardDescription className="text-blue-300">
                      {review.userName}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
};
