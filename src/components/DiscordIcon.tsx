
import * as React from "react";

interface DiscordIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  className?: string;
}

// Use a PNG for the Discord logo to match the "perfect" shape/look.
// This img is styled to match the vector icons in spacing, alignment, and hover effects.
const DiscordIcon = ({
  size = 28,
  className = "",
  style,
  ...props
}: DiscordIconProps) => (
  <img
    src="/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png"
    alt="Discord logo"
    width={size}
    height={size}
    draggable={false}
    className={`object-contain aspect-square select-none ${className}`}
    style={{
      width: size,
      height: size,
      // Match border radius with icon button container if needed:
      borderRadius: "6px",
      // Remove default image outlines:
      outline: "none",
      ...style,
    }}
    {...props}
  />
);

export default DiscordIcon;

