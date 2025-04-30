
import { useEffect, useRef, useState } from "react";

interface HowItWorksStepProps {
  step: number;
  title: string;
  description: string;
}

const HowItWorksStep = ({ step, title, description }: HowItWorksStepProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

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

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={stepRef}
      className={`flex items-start gap-5 p-6 rounded-xl bg-white border-4 border-[#4DA6FF]/60 shadow-lg font-pressstart transition-all duration-700 
      ${isVisible 
        ? "opacity-100 transform translate-y-0" 
        : "opacity-0 transform translate-y-20"
      } 
      ${step % 2 === 0 
        ? "delay-[300ms]" 
        : "delay-[150ms]"
      }`}
    >
      <div className={`flex-shrink-0 text-sm font-bold w-10 h-10 rounded-full bg-[#0032cc] text-white flex items-center justify-center shadow transition-all duration-500 
        ${isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"}`}
      >
        {step}
      </div>
      <div>
        <div className="font-pressstart text-[#0032cc] mb-1 uppercase text-[13px]" style={{letterSpacing: '0.05em'}}>{title}</div>
        <div className="text-gray-700 text-[11px] font-pressstart">{description}</div>
      </div>
    </div>
  );
};

export default HowItWorksStep;
