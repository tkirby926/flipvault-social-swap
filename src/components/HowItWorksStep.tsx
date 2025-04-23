
interface HowItWorksStepProps {
  step: number;
  title: string;
  description: string;
}
const HowItWorksStep = ({ step, title, description }: HowItWorksStepProps) => (
  <div className={`flex items-start gap-5 p-6 rounded-xl bg-white border-4 border-accent/60 shadow-lg font-pressstart
      ${step % 2 === 0 ? "animate-slide-in-right" : "animate-slide-in-left"}`}>
    <div className="flex-shrink-0 text-sm font-bold w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow">{step}</div>
    <div>
      <div className="font-pressstart text-primary mb-1 uppercase text-[13px]" style={{letterSpacing: '0.05em'}}>{title}</div>
      <div className="text-gray-700 text-[11px] font-pressstart">{description}</div>
    </div>
  </div>
);
export default HowItWorksStep;
