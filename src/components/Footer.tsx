
import { Twitter, MessageSquare, Send, Linkedin } from "lucide-react";

const socials = [
  { label: "X", href: "https://x.com/flipvault", Icon: Twitter },
  { label: "Discord", href: "https://discord.gg/vbwmfABK", Icon: MessageSquare },
  { label: "Telegram", href: "https://t.me/flipvault", Icon: Send },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/flipvault", Icon: Linkedin },
];

const iconStyles = {
  X: "text-[#1A1F2C] bg-white",
  Discord: "text-[#5865F2] bg-white",
  Telegram: "text-[#229ED9] bg-white",
  Linkedin: "text-[#0077b5] bg-white",
};

const Footer = () => (
  <footer className="w-full py-10 px-5 flex flex-col items-center bg-white/60 dark:bg-[#171731ad] border-t border-gray-200 dark:border-gray-700 mt-16">
    <div className="flex gap-7 mb-2">
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`
            flex items-center justify-center rounded-full p-[7px] shadow-xl border-2 border-black/10
            hover:scale-110 hover:shadow-2xl transition-transform duration-300
            ${label === "X" ? "bg-black" : "bg-white"}
          `}
          style={{ width: 44, height: 44 }}
        >
          <Icon
            size={28}
            className={
              label === "X"
                ? "text-white"
                : label === "Discord"
                ? "text-[#5865F2]"
                : label === "Telegram"
                ? "text-[#229ED9]"
                : "text-[#0077b5]"
            }
          />
        </a>
      ))}
    </div>
    <div className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Flipvault. All rights reserved.</div>
  </footer>
);

export default Footer;
