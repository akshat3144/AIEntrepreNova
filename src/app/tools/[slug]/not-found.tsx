import Link from "next/link";
import { BlurFade } from "@/components/ui/BlurFade";
import { ArrowLeft } from "lucide-react";

export default function ToolNotFound() {
  return (
    <div className="pt-[150px] pb-[120px] flex flex-col items-center justify-center min-h-[60vh]">
      <BlurFade delay={0.25} inView>
        <div className="text-center">
          <div className="text-6xl font-bold mb-4">404</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Tool Not Found
          </h1>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            The tool you&apos;re looking for doesn&apos;t exist or may have been
            moved.
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to Tools</span>
          </Link>
        </div>
      </BlurFade>
    </div>
  );
}
