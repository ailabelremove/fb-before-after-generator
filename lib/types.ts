export type CardStats = {
  likes: string;
  comments: string;
  shares: string;
};

export type TemplateState = {
  profileName: string;
  time: string;
  caption: string;
  mainImage: string | null;
  profileImage: string | null;
  left: CardStats;
  right: CardStats;
};

export type CardVariant = "left" | "right";
