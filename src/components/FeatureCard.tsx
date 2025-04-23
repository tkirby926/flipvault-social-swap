
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}
const FeatureCard = ({ Icon, title, description }: FeatureCardProps) => (
  <div className="flex flex-col items-center p-6 bg-white/60 dark:bg-white/10 rounded-xl shadow-lg backdrop-blur-md transition hover:scale-105 hover:shadow-2xl hover:bg-white/80 dark:hover:bg-white/20 duration-200">
    <Icon className="text-primary mb-4" size={36} strokeWidth={2.2} />
    <h4 className="font-semibold text-xl mb-2 text-gray-900 dark:text-gray-50">{title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{description}</p>
  </div>
);
export default FeatureCard;
