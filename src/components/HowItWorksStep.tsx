
interface HowItWorksStepProps {
  step: number;
  title: string;
  description: string;
}
const HowItWorksStep = ({ step, title, description }: HowItWorksStepProps) => (
  <div className="flex items-start gap-5 p-6 rounded-xl bg-gradient-to-br from-[#f6f7fe] to-[#e8e6fa] dark:from-[#232346] dark:to-[#171731] border border-gray-100 dark:border-gray-700 shadow-md">
    <div className="flex-shrink-0 text-lg font-bold w-10 h-10 rounded-full bg-primary/90 text-white flex items-center justify-center shadow">{step}</div>
    <div>
      <div className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1">{title}</div>
      <div className="text-gray-600 dark:text-gray-300 text-sm">{description}</div>
    </div>
  </div>
);
export default HowItWorksStep;
