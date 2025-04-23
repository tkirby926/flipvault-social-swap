
import { X, Send, Linkedin } from "lucide-react";
import DiscordIcon from "./DiscordIcon";

const socials = [
  {
    label: "X",
    href: "https://x.com/flipvault",
    Icon: X,
    iconClassName: "text-white"
  },
  {
    label: "Discord",
    href: "https://discord.gg/vbwmfABK",
    Icon: DiscordIcon,
    iconClassName: ""
  },
  {
    label: "Telegram",
    href: "https://t.me/flipvault",
    Icon: Send,
    iconClassName: "text-[#229ED9]"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/flipvault",
    Icon: Linkedin,
    iconClassName: "text-[#0077b5]"
  },
];

const Footer = () => (
  <footer className="w-full py-10 px-5 flex flex-col items-center bg-white/60 dark:bg-[#171731ad] border-t border-gray-200 dark:border-gray-700 mt-16">
    <div className="flex gap-7 mb-2">
      {socials.map(({ label, href, Icon, iconClassName }) => (
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
            className={iconClassName}
          />
        </a>
      ))}
    </div>
    <div className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Flipvault. All rights reserved.</div>
  </footer>
);

export default Footer;
