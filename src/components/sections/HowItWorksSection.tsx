
import React from 'react';
import HowItWorksStep from "@/components/HowItWorksStep";

const howItWorks = [
  {
    title: "Sign Up / Log In",
    description:
      "Create your account in seconds using just an email and username — no wallet needed to start.",
  },
  {
    title: "Connect Your Wallet",
    description:
      "Link your Aptos wallet to unlock trading. You'll need to connect your wallet to make your assets available for trading, display them on your profile, and access full trading functionality.",
  },
  {
    title: "Socialize",
    description:
      "Explore the community before you trade. Browse available NFTs in the marketplace, scroll through The Ledger (the activity feed), follow other users, check out their profiles, and message them directly.",
  },
  {
    title: "Trade",
    description:
      "Choose between Live Trade and Offline Trade. Trade assets in real time with built-in chat and ready-up confirmations, or send offers to be accepted later.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="w-full max-w-5xl mx-auto mb-16 px-4">
      <h2 className="text-lg md:text-xl lg:text-2xl font-pressstart text-[#0032cc] mb-6 mt-3 animate-slide-in-right">
        How It Works
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {howItWorks.map(({ title, description }, i) => (
          <HowItWorksStep key={i} step={i + 1} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
