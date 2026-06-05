export type LinkItem = {
  label: string;
  href: string;
  isPlaceholder?: boolean;
};

export type MediaAsset = {
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
  poster?: string;
  provider?: "local" | "youtube" | "vimeo";
  isPlaceholder?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  tools: string[];
  company: string;
  year: string;
  images: MediaAsset[];
  videos: MediaAsset[];
  links: LinkItem[];
  results: string[];
  tags: string[];
  category: string;
  featured?: boolean;
  isPlaceholder?: boolean;
};

export type ToolGroup = {
  title: string;
  summary: string;
  tools: string[];
};

export type CompanySlot = {
  name: string;
  relationship: string;
  logoSrc?: string;
  note: string;
  status: "public" | "placeholder" | "needs-confirmation";
};
