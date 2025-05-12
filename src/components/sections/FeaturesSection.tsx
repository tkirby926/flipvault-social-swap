
import React from 'react';
import FeatureCard from "@/components/FeatureCard";
import {
  ShieldCheck,
  ArrowsUpFromLine,
  Users,
  Coins,
  Image,
} from "lucide-react";

const featureList = [
  {
    Icon: ShieldCheck,
    title: "Secure peer-to-peer trading",
    description: "Trade directly with other users using built-in escrow and mutual confirmations.",
  },
  {
    Icon: ArrowsUpFromLine,
    title: "Live & offline trade modes",
    description: "Swap assets in real time or send offers when others are offline.",
  },
  {
    Icon: Users,
    title: "Social trading experience",
    description: "Chat, negotiate, and barter — just like classic in-game trading systems.",
  },
  {
    Icon: Coins,
    title: "Minimal trading fees",
    description: "Built on Aptos for fast, cost-effective transactions.",
  },
  {
    Icon: Image,
    title: "Supports NFTs and crypto",
    description: "Seamlessly trade Aptos-based NFTs and fungible tokens in a single platform.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full px-4 md:px-0 mt-12 mb-16 flex flex-col items-center">
      <h2 className="text-lg md:text-xl lg:text-2xl font-pressstart text-white mb-7 mt-4 animate-slide-in-left">
        Why Flipvault?
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-9 max-w-6xl w-full">
        {featureList.map((f, i) => (
          <div key={i} className="h-full">
            <FeatureCard Icon={f.Icon} title={f.title} description={f.description} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
