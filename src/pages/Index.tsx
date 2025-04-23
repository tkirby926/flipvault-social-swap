
import FeatureCard from "@/components/FeatureCard";
import HowItWorksStep from "@/components/HowItWorksStep";
import Footer from "@/components/Footer";
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

const sayings = [
  "Trade safely with built-in escrow and peer confirmations",
  "Swap any asset, any time — live or offline, your call",
  "Chat. Barter. Flip. It’s trading that actually feels social",
];

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

const faqs = [
  "Why would I use FlipVault over a traditional NFT marketplace?",
  "Aren’t NFTs dead?",
  "How does live trading work?",
  "How does offline trading work?",
  "Where can I go to buy NFTs, so I have assets to trade?",
  "What assets can I trade on FlipVault?",
  "Is FlipVault only on Aptos?",
  "How are trades secured?",
  "Can I trade multiple assets at once?",
  "What happens if someone doesn’t accept my trade request?",
  "How do I find other users to trade with?",
  "Can I cancel a trade after I send it?",
];

const Index = () => {
  return (
    <div
      className="font-pressstart min-h-screen w-full bg-black flex flex-col"
    >
      {/* Hero Section */}
      <header className="w-full pt-24 pb-8 flex flex-col items-center relative z-[1] animate-slide-down-fade">
        <h1 className="text-[2.2rem] md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-br from-accent to-primary text-transparent bg-clip-text text-shadow-retro drop-shadow text-center uppercase">
          Welcome to Flipvault
        </h1>
        <div className="mt-4 mb-3 text-xl md:text-2xl font-bold text-white text-center animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-primary w-fit px-3">
          Peer-to-Peer Cross-Chain Barter Trading
        </div>
        <div className="max-w-2xl text-[14px] md:text-lg text-accent text-center animate-fade-up font-pressstart bg-black/80 mt-2 px-3 py-2 rounded">
          A SocialFi B2B escrow SAAS designed for secure, cross-chain trading of tokenized assets and files, featuring live, real time trading capabilities.
        </div>
      </header>

      {/* "Sayings" Section */}
      <section className="w-full px-4 md:px-0 mb-12 flex flex-col items-center">
        <div className="grid md:grid-cols-3 gap-7 max-w-5xl w-full">
          {sayings.map((s, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-xl p-6 text-base font-bold text-center text-accent drop-shadow-md animate-pop-in animation-delay-${i * 2 + 2}00`}
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full px-4 md:px-0 mb-16 flex flex-col items-center">
        <h2 className="text-lg md:text-xl lg:text-2xl font-pressstart text-primary mb-7 mt-4 animate-slide-in-left">
          Why Flipvault?
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-9 max-w-6xl w-full">
          {featureList.map((f, i) => (
            <div key={i} className="animate-pop-in" style={{animationDelay: `${i * 0.14 + 0.3}s`}}>
              <FeatureCard Icon={f.Icon} title={f.title} description={f.description} />
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="w-full max-w-5xl mx-auto mb-16 px-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-pressstart text-accent mb-6 mt-3 animate-slide-in-right">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {howItWorks.map(({ title, description }, i) => (
            <HowItWorksStep key={i} step={i + 1} title={title} description={description} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-4xl mx-auto mb-20 px-4">
        <h2 className="text-lg md:text-xl font-pressstart text-primary mb-5 animate-fade-up">
          FAQ
        </h2>
        <ul className="space-y-3">
          {faqs.map((q, i) => (
            <li key={i} className="bg-white rounded-lg shadow p-4 text-gray-900 text-[12px] font-bold animate-fade-up" style={{animationDelay: `${i * 0.08}s`}}>{q}</li>
          ))}
        </ul>
        <div className="text-xs text-gray-400 mt-4 font-pressstart">Answers coming soon...</div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
