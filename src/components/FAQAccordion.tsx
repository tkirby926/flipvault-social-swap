
import * as React from "react";
import { ChevronDown } from "lucide-react";

type QA = { question: string; answer: string };

interface FAQAccordionProps {
  items: QA[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className={`w-full flex justify-between items-center bg-white rounded-lg shadow px-4 py-3 text-gray-900 font-bold text-[12px] outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all relative group
              ${openIdx === idx ? "shadow-lg ring-2 ring-primary scale-[1.03]" : "hover:shadow-md hover:scale-[1.02]"}
              animate-slide-in-right`}
            style={{
              animationDelay: `${idx * 0.05 + 0.2}s`,
              animationDuration: "0.6s",
              animationFillMode: "both"
            }}
            aria-expanded={openIdx === idx}
            aria-controls={`faq-answer-${idx}`}
          >
            <span className="text-left">{item.question}</span>
            <ChevronDown
              className={`ml-2 transform transition-transform duration-300 group-hover:translate-y-1 ${openIdx === idx ? "rotate-180" : ""}`}
              size={19}
            />
          </button>
          <div
            id={`faq-answer-${idx}`}
            className={`overflow-hidden px-4 transition-all duration-500 ease-[cubic-bezier(0.7,0.01,0.1,1)] ${
              openIdx === idx ? "max-h-[500px] animate-fade-in" : "max-h-0 opacity-0"
            }`}
            style={{
              background: "white",
              borderRadius: openIdx === idx ? "0 0 0.75rem 0.75rem" : "0.75rem",
            }}
          >
            {openIdx === idx && (
              <div className="py-3 text-[13px] font-normal text-gray-800 animate-fade-in font-pressstart">
                {item.answer}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
