
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ Icon, title, description }: FeatureCardProps) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border-4 border-[#0032cc]/30 hover:border-[#0032cc]/70 transition hover:scale-110 hover:shadow-2xl duration-300 animate-pop-in h-full">
    <div className="flex flex-col items-center h-full justify-between">
      <Icon className="text-[#0032cc] mb-4" size={40} strokeWidth={2.7} />
      <div className="flex flex-col items-center flex-grow">
        <h4 className="font-pressstart text-base mb-2 text-[#0032cc] drop-shadow">{title}</h4>
        <p className="text-[12px] text-gray-800 text-center font-pressstart">{description}</p>
      </div>
    </div>
  </div>
);

export default FeatureCard;
