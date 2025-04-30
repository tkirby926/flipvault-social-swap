
import * as React from "react";
import { ChevronDown } from "lucide-react";

type QA = { question: string; answer: string };

interface FAQAccordionProps {
  items: QA[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  const [visibleItems, setVisibleItems] = React.useState<number[]>([]);
  const itemRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index) && !visibleItems.includes(index)) {
              setVisibleItems(prev => [...prev, index]);
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [visibleItems]);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div 
          key={idx}
          ref={el => (itemRefs.current[idx] = el)}
          data-index={idx}
          className={`transition-all duration-1000 transform ${
            visibleItems.includes(idx)
              ? "opacity-100 translate-x-0"
              : idx % 2 === 0
                ? "opacity-0 -translate-x-20"
                : "opacity-0 translate-x-20"
          }`}
          style={{ transitionDelay: `${idx * 100}ms` }}
        >
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className={`w-full flex justify-between items-center bg-white rounded-lg shadow px-4 py-3 text-gray-900 font-bold text-[12px] outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all relative group
              ${openIdx === idx ? "shadow-lg ring-2 ring-primary scale-[1.03]" : "hover:shadow-md hover:scale-[1.02]"}`}
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
