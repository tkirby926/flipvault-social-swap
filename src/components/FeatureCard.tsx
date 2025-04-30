
import { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ Icon, title, description, index }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border-4 border-[#0032cc]/30 hover:border-[#0032cc]/70 transition-all duration-700 h-full
      ${isVisible 
        ? "opacity-100 transform translate-y-0 rotate-0 scale-100" 
        : "opacity-0 transform translate-y-10 rotate-2 scale-90"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col items-center h-full justify-between">
        <Icon className={`text-[#0032cc] mb-4 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} 
          style={{ transitionDelay: `${(index * 150) + 300}ms` }} 
          size={40} 
          strokeWidth={2.7} 
        />
        <div className="flex flex-col items-center flex-grow">
          <h4 className={`font-pressstart text-base mb-2 text-[#0032cc] drop-shadow transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: `${(index * 150) + 400}ms` }}
          >{title}</h4>
          <p className={`text-[12px] text-gray-800 text-center font-pressstart transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: `${(index * 150) + 500}ms` }}
          >{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
