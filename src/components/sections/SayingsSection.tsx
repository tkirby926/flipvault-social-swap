
import React from 'react';

const sayings = [
  "Trade safely with built-in escrow and peer confirmations",
  "Swap any asset, any time — live or offline, your call",
  "Chat. Barter. Flip. It's trading that actually feels social",
];

const SayingsSection = () => {
  return (
    <section className="w-full px-4 md:px-0 mb-12 flex flex-col items-center">
      <div className="grid md:grid-cols-3 gap-7 max-w-5xl w-full">
        {sayings.map((s, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl shadow-xl p-6 text-base font-bold text-center text-black drop-shadow-md animate-pop-in animation-delay-${i * 2 + 2}00`}
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SayingsSection;
