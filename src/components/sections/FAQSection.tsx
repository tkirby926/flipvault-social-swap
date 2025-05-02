
import React from 'react';
import FAQAccordion from "@/components/FAQAccordion";

const faqsQA = [
  {
    question: "Why would I use FlipVault over a traditional NFT marketplace?",
    answer:
      "FlipVault lets you trade directly with other users in real time — no listings, no waiting. You can swap multiple assets, negotiate live in chat, and make deals instantly. It's more social, more flexible, and way more fun than static marketplaces. The experience is inspired by old-school games like RuneScape, where trading felt like part of the game — not just a transaction.",
  },
  {
    question: "Aren't NFTs dead?",
    answer:
      "Not at all. The hype around profile pictures may have cooled off, but the underlying tech is just getting started. NFTs are evolving beyond speculation — powering in-game assets, collectibles, and real digital ownership. FlipVault is built for that future: where utility, trading, and community come first.",
  },
  {
    question: "How does live trading work?",
    answer:
      "You can start a live trade with whoever you want, or you can be invited by whoever. You can see the notification of your invitation in the Live Trade page. Once you are in the live trade, either you or the other person can start off by choosing what to give up: which NFTs and how much APT (if any). Once you're satisfied with what you've chosen, hit the \"select\" button. This is different from offline trading in the sense that you can't select what you want to receive from the other user. You can only choose what to give up. There's also a chat box in the bottom right to communicate back and forth with the other user. Once both users have chosen what they want to give up, each user needs to ready up for the trade to go through.",
  },
  {
    question: "How does offline trading work?",
    answer:
      "You can initiate an offline trade with whoever you want. You can select which NFTs you want to give up, which NFTs you want to receive, and how much APT you want to give/receive. This is different from live trading in the sense that you can choose what you want to get from the other user. Once you're satisfied with the proposal, you click \"Propose\" and the trade is sent to the other user. If you are the one receiving the trade, head over to the Offline Trade page. Here, you will see any offline trades sent to you. You can accept them, reject them, or click into them to then modify the trade. If you choose to modify it, you can then propose the new trade to the other user.",
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
      "All trades on FlipVault are protected by an escrow system built into the platform. Assets from both users are held securely until both sides confirm the trade — so no one can back out or get rugged mid-swap. It's trustless, transparent, and designed to keep both parties safe.",
  },
  {
    question: "Can I trade multiple assets at once?",
    answer:
      "That's the whole point! FlipVault lets you bundle and trade multiple NFTs and tokens in a single deal. Mix and match however you want — 3-for-1, token + NFT swaps, whatever makes the trade work.",
  },
  {
    question: "What happens if someone doesn't accept my trade request?",
    answer:
      "If you're trying to do an online trade, try inviting someone else. If you are doing an offline trade, you can keep sending out proposals to whoever you want.",
  },
  {
    question: "How do I find other users to trade with?",
    answer:
      "You can peruse through the NFTs in the marketplace or comb through the trades or messages in The Ledger.",
  },
  {
    question: "Can I cancel a trade after I send it?",
    answer:
      "You can cancel an offline trade at any time as long as the trade hasn't been accepted. You can cancel an online trade as long as both you and the other user have not confirmed the trade yet. If only one has, you can still cancel.",
  },
];

const FAQSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mb-20 px-4">
      <h2 className="text-lg md:text-xl font-pressstart text-[#1E90FF] mb-5 animate-fade-up">
        FAQ
      </h2>
      <FAQAccordion items={faqsQA} />
    </section>
  );
};

export default FAQSection;
