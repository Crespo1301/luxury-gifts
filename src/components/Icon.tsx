import type { SVGProps } from "react";

type IconName =
  | "flower"
  | "basket"
  | "ribbon"
  | "phone"
  | "whatsapp"
  | "instagram"
  | "mail"
  | "arrow"
  | "check"
  | "menu"
  | "close"
  | "pin"
  | "star"
  | "leaf"
  | "globe";

const paths: Record<IconName, React.ReactNode> = {
  flower: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12c0-2.5-1.7-4.5-4-4.5-1.6 0-2.7 1-3 2.3 1.5.4 2.7 1.4 3.3 2.7C7 13.5 5.4 14 4 14c-1.4 0-2-.5-2-1.4 0 1.7 1.5 3 3.4 3 1.5 0 2.8-.6 3.6-1.6.5 1.5 2.1 2.7 4 2.7s3.5-1.2 4-2.7c.8 1 2.1 1.6 3.6 1.6 1.9 0 3.4-1.3 3.4-3 0 .9-.6 1.4-2 1.4-1.4 0-3-.5-4.3-1.5.6-1.3 1.8-2.3 3.3-2.7-.3-1.3-1.4-2.3-3-2.3-2.3 0-4 2-4 4.5z" />
      <path d="M12 12v9" />
      <path d="M9 21h6" />
    </g>
  ),
  basket: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9h18l-1.5 10.5a2 2 0 0 1-2 1.5h-11a2 2 0 0 1-2-1.5L3 9z" />
      <path d="M8 9l3-5M16 9l-3-5" />
      <path d="M3 9h18" />
      <path d="M9 13v4M15 13v4" />
    </g>
  ),
  ribbon: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5z" />
      <path d="M4 5l-1 4M20 5l1 4" />
      <path d="M9 15l-3 5h4l2-3M15 15l3 5h-4l-2-3" />
      <circle cx="12" cy="9" r="2" />
    </g>
  ),
  phone: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </g>
  ),
  whatsapp: (
    <g fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2.1 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z" />
      <path d="M20.5 3.5A10.4 10.4 0 0 0 3.4 16.6L2 22l5.5-1.4a10.4 10.4 0 0 0 5 1.3 10.4 10.4 0 0 0 8-17.4zm-8 16a8.6 8.6 0 0 1-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3a8.6 8.6 0 1 1 7.3 4z" />
    </g>
  ),
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </g>
  ),
  mail: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </g>
  ),
  arrow: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </g>
  ),
  check: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4 4 10-10" />
    </g>
  ),
  menu: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </g>
  ),
  close: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </g>
  ),
  pin: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </g>
  ),
  star: (
    <g fill="currentColor">
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9L12 2.5z" />
    </g>
  ),
  leaf: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19c0-7 5-13 14-14-1 9-7 14-14 14z" />
      <path d="M5 19c4-4 7-7 14-14" />
    </g>
  ),
  globe: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </g>
  ),
};

export function Icon({
  name,
  size = 20,
  ...props
}: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
