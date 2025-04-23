
import { X, Discord, Send, Linkedin } from "lucide-react";

const socials = [
  { label: "X", href: "https://x.com/flipvault", Icon: X },
  { label: "Discord", href: "https://discord.gg/vbwmfABK", Icon: Discord },
  { label: "Telegram", href: "https://t.me/flipvault", Icon: Send },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/flipvault", Icon: Linkedin },
];

const Footer = () => (
  <footer className="w-full py-10 px-5 flex flex-col items-center bg-white/60 dark:bg-[#171731ad] border-t border-gray-200 dark:border-gray-700 mt-16">
    <div className="flex gap-7 mb-2">
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener"
          aria-label={label}
          className="text-gray-800 dark:text-gray-200 hover:text-primary transition hover:scale-110"
        >
          <Icon size={28} />
        </a>
      ))}
    </div>
    <div className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Flipvault. All rights reserved.</div>
  </footer>
);

export default Footer;
