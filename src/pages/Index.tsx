
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import HowItWorksStep from "@/components/HowItWorksStep";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import BackgroundCharacters from "@/components/BackgroundCharacters";
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

const faqsQA = [
  {
    question: "Why would I use FlipVault over a traditional NFT marketplace?",
    answer:
      "FlipVault lets you trade directly with other users in real time — no listings, no waiting. You can swap multiple assets, negotiate live in chat, and make deals instantly. It’s more social, more flexible, and way more fun than static marketplaces. The experience is inspired by old-school games like RuneScape, where trading felt like part of the game — not just a transaction.",
  },
  {
    question: "Aren’t NFTs dead?",
    answer:
      "Not at all. The hype around profile pictures may have cooled off, but the underlying tech is just getting started. NFTs are evolving beyond speculation — powering in-game assets, collectibles, and real digital ownership. FlipVault is built for that future: where utility, trading, and community come first.",
  },
  {
    question: "How does live trading work?",
    answer:
      "You can start a live trade with whoever you want, or you can be invited by whoever. You can see the notification of your invitation in the Live Trade page. Once you are in the live trade, either you or the other person can start off by choosing what to give up: which NFTs and how much APT (if any). Once you’re satisfied with what you’ve chosen, hit the “select” button. This is different from offline trading in the sense that you can’t select what you want to receive from the other user. You can only choose what to give up. There’s also a chat box in the bottom right to communicate back and forth with the other user. Once both users have chosen what they want to give up, each user needs to ready up for the trade to go through.",
  },
  {
    question: "How does offline trading work?",
    answer:
      "You can initiate an offline trade with whoever you want. You can select which NFTs you want to give up, which NFTs you want to receive, and how much APT you want to give/receive. This is different from live trading in the sense that you can choose what you want to get from the other user. Once you’re satisfied with the proposal, you click “Propose” and the trade is sent to the other user. If you are the one receiving the trade, head over to the Offline Trade page. Here, you will see any offline trades sent to you. You can accept them, reject them, or click into them to then modify the trade. If you choose to modify it, you can then propose the new trade to the other user.",
  },
  {
    question: "Where can I go to buy NFTs, so I have assets to trade?",
    answer:
      "You can browse and buy Aptos-based NFTs on marketplaces like TradePort and Wapal. Once you own some, just connect your wallet on FlipVault and your assets will show up in your profile — ready to trade live or offline.",
  },
  {
    question: "What assets can I trade on FlipVault?",
    answer:
      "Right now, you can trade Aptos-based NFTs and APT tokens. But this is just the beginning — our goal is to support all NFTs across all chains, and enable trading of any cryptocurrency in one seamless, social experience.",
  },
  {
    question: "Is FlipVault only on Aptos?",
    answer:
      "Yes — FlipVault is launching first on Aptos to take advantage of its speed, low fees, and strong ecosystem. We're planning to expand to EVM chains, Solana, and other Move-based chains in the near future. Even as we go cross-chain, all trade settlement will remain on Aptos, keeping it at the center of the FlipVault experience.",
  },
  {
    question: "How are trades secured?",
    answer:
      "All trades on FlipVault are protected by an escrow system built into the platform. Assets from both users are held securely until both sides confirm the trade — so no one can back out or get rugged mid-swap. It’s trustless, transparent, and designed to keep both parties safe.",
  },
  {
    question: "Can I trade multiple assets at once?",
    answer:
      "That’s the whole point! FlipVault lets you bundle and trade multiple NFTs and tokens in a single deal. Mix and match however you want — 3-for-1, token + NFT swaps, whatever makes the trade work.",
  },
  {
    question: "What happens if someone doesn’t accept my trade request?",
    answer:
      "If you’re trying to do an online trade, try inviting someone else. If you are doing an offline trade, you can keep sending out proposals to whoever you want.",
  },
  {
    question: "How do I find other users to trade with?",
    answer:
      "You can peruse through the NFTs in the marketplace or comb through the trades or messages in The Ledger.",
  },
  {
    question: "Can I cancel a trade after I send it?",
    answer:
      "You can cancel an offline trade at any time as long as the trade hasn’t been accepted. You can cancel an online trade as long as both you and the other user have not confirmed the trade yet. If only one has, you can still cancel.",
  },
];

const Index = () => {
  return (
    <div className="font-pressstart min-h-screen w-full bg-black flex flex-col">
      <BackgroundCharacters />
      {/* Hero Section */}
      <header className="w-full pt-24 pb-8 flex flex-col items-center relative z-[1] animate-slide-down-fade">
        <h1 className="text-[2.2rem] md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-br from-[#1E90FF] to-[#0032cc] text-transparent bg-clip-text text-shadow-retro drop-shadow text-center uppercase">
          Welcome to Flipvault
        </h1>
        <div className="mt-4 mb-3 text-xl md:text-2xl font-bold text-white text-center animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-[#0032cc] w-fit px-3">
          Peer-to-Peer Cross-Chain Barter Trading
        </div>
        <div className="max-w-2xl text-[14px] md:text-lg text-[#4DA6FF] text-center animate-fade-up font-pressstart bg-black/80 mt-2 px-3 py-2 rounded">
          Barter assets with friends and strangers across chains — just like old-school gaming, but powered by Web3
        </div>
        
        <div className="mt-6 animate-pop-in">
          <Button 
            size="lg" 
            className="text-base font-bold bg-[#0032cc] hover:bg-[#0032cc]/90 transition-all duration-300 group"
            onClick={() => window.location.href = 'https://app.flipvault.io'}
          >
            Launch Platform 
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
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
        <h2 className="text-lg md:text-xl lg:text-2xl font-pressstart text-[#1E90FF] mb-7 mt-4 animate-slide-in-left">
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

      {/* How it Works */}
      <section className="w-full max-w-5xl mx-auto mb-16 px-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-pressstart text-[#4DA6FF] mb-6 mt-3 animate-slide-in-right">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {howItWorks.map(({ title, description }, i) => (
            <HowItWorksStep key={i} step={i + 1} title={title} description={description} />
          ))}
        </div>
      </section>

      {/* Instructional Image */}
      <section className="w-full max-w-4xl mx-auto mb-20 px-4 flex justify-center">
        <div className="w-full flex flex-col items-center">
          <div className="relative rounded-2xl shadow-2xl border-4 border-accent/80 bg-gradient-to-br from-[#1a1f2c] to-black p-4 sm:p-8 animate-fade-in"
               style={{maxWidth: 700, margin: "0 auto"}}
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 scale-90 bg-accent px-8 py-1 rounded-full  shadow text-center text-black font-extrabold text-xs border-2 border-white" style={{ zIndex: 3 }}>
              In-app Trading Example
            </div>
            <img
              src="/lovable-uploads/dbe9b3bb-f34d-4323-b66f-89b60f28d39f.png"
              alt="Flipvault instructional in-app screenshot"
              className="rounded-lg border-2 border-white shadow-xl transition-transform duration-300 hover:scale-105"
              style={{boxShadow: "0 0 24px #1eaedb, 0 2px 44px #8B5CF6"}}
            />
            <div className="pt-4 text-xs text-gray-300 text-center italic font-pressstart opacity-70">
              This is what a live trade looks like in FlipVault — manage assets, chat, and swap instantly.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-4xl mx-auto mb-20 px-4">
        <h2 className="text-lg md:text-xl font-pressstart text-[#1E90FF] mb-5 animate-fade-up">
          FAQ
        </h2>
        <FAQAccordion items={faqsQA} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
