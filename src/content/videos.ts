export interface ShowcaseVideo {
  id: string;
  title: string;
  genre: string;
  description: string;
  thumbnail: string;
}

export const showcaseVideos: ShowcaseVideo[] = [
  {
    id: "YscTtrmhC30",
    title: "Invaders Tower Defense Online",
    genre: "Shipped Steam Game",
    description:
      "Isometric multiplayer tower defense shipped on Steam, showcasing tower targeting, wave loops, and networking.",
    thumbnail: "/projects/invaders-tower-defense-online/official-cover.png",
  },
  {
    id: "eh6fCOBHs3A",
    title: "Data2073 Battle Deck",
    genre: "Multiplayer Strategy",
    description:
      "Server-authoritative multiplayer strategy battler with dedicated server hosting, UGS matchmaker, and LiveOps.",
    thumbnail: "/projects/data2073-official/playstore-2.png",
  },
  {
    id: "lkLzyP8x9qo",
    title: "Fly TD",
    genre: "Aerial Tower Defense",
    description:
      "Aerial pathfinding, wave progression, ScriptableObject balancing, and projectile trajectory physics.",
    thumbnail: "/projects/fly-td/gameplay.png",
  },
  {
    id: "0ud_aYHRu0w",
    title: "Bright Shooter",
    genre: "Bullet-Hell Shooter",
    description:
      "High-density object pooling, projectile trajectories, collision optimization, and performance profiling.",
    thumbnail: "/projects/bright-shooter/gameplay.png",
  },
  {
    id: "a-db7GFzQi4",
    title: "Toy Soldiers FPS",
    genre: "First-Person Shooter",
    description:
      "Responsive 3D character controller, raycast ballistics, weapon reload states, and AI enemy behaviors.",
    thumbnail: "/projects/toy-soldiers-fps/gameplay.png",
  },
  {
    id: "Ree1qJVGJp0",
    title: "Bright Runner",
    genre: "Endless Runner",
    description:
      "Procedural obstacle generation, speed curves, mobile touch input, and Android build optimization.",
    thumbnail: "/projects/bright-runner/gameplay.png",
  },
  {
    id: "IU2-53cEQw4",
    title: "Survival Horror Procedural",
    genre: "Survival Horror",
    description:
      "Procedural environment generation, atmospheric lighting, dynamic monster pathfinding, and inventory survival systems.",
    thumbnail: "/projects/survival-horror/cover.jpg",
  },
  {
    id: "CF1YK3jZGMM",
    title: "Espírito de Luta",
    genre: "2.5D Fighting Game",
    description:
      "Combat state machine (FSM), hitbox/hurtbox collision, input buffering, and animation events.",
    thumbnail: "/projects/espirito-de-luta/cover.jpg",
  },
];

export const videoReel = {
  title: "Gameplay Video Reel",
  eyebrow: "Playable Proof",
  playlistUrl:
    "https://www.youtube.com/watch?v=CF1YK3jZGMM&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP&index=7",
  description:
    "Watch gameplay from released titles and prototypes, then explore the case studies for my contribution to each project.",
  points: [
    "Combat state machines & hitbox systems",
    "Server-authoritative multiplayer & netcode",
    "Object pooling & high-density projectile performance",
  ],
};
