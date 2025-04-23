
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
      className="font-inter min-h-screen w-full bg-gradient-to-br from-[#faffff] via-[#f2f4fe] to-[#e5e7fa] dark:from-[#232346] dark:via-[#181831] dark:to-[#1a1b2c] flex flex-col"
    >
      {/* Hero Section */}
      <header className="w-full pt-16 pb-8 flex flex-col items-center relative z-[1]">
        <h1 className="text-[2.8rem] md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#6E59A5] drop-shadow-md text-center">
          Welcome to Flipvault
        </h1>
        <div className="mt-4 mb-3 text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white text-center">
          Peer-to-Peer Cross-Chain Barter Trading
        </div>
        <div className="max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-200 text-center">
          A SocialFi B2B escrow SAAS designed for secure, cross-chain trading of tokenized assets and files, featuring live, real time trading capabilities.
        </div>
      </header>

      {/* "Sayings" Section */}
      <section className="w-full px-2 md:px-0 mb-10 flex flex-col items-center">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
          {sayings.map((s, i) => (
            <div
              key={i}
              className="bg-white/70 dark:bg-white/10 rounded-2xl shadow p-6 text-lg font-medium text-center text-gray-900 dark:text-gray-100 backdrop-blur-md animate-fade-in"
              style={{ animationDelay: `${i * 0.08 + 0.1}s` }}
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full px-2 md:px-0 mb-20 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 mt-2">
          Why Flipvault?
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-7 max-w-6xl w-full">
          {featureList.map((f, i) => (
            <FeatureCard key={i} Icon={f.Icon} title={f.title} description={f.description} />
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="w-full max-w-5xl mx-auto mb-20 px-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 mt-2">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {howItWorks.map(({ title, description }, i) => (
            <HowItWorksStep key={i} step={i + 1} title={title} description={description} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-4xl mx-auto mb-24 px-2">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">FAQ</h2>
        <ul className="space-y-2">
          {faqs.map((q, i) => (
            <li key={i} className="bg-white/50 dark:bg-white/5 rounded-lg shadow p-4 text-gray-800 dark:text-gray-100 text-base font-medium">{q}</li>
          ))}
        </ul>
        <div className="text-xs text-gray-400 mt-3">Answers coming soon...</div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
