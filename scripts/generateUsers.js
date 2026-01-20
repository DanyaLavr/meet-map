import fs from "fs";

const USERS_COUNT = 10_000;

// условно Европа
const LAT_RANGE = [35, 60];
const LON_RANGE = [-10, 40];

const INTERESTS = [
  "music",
  "react",
  "javascript",
  "typescript",
  "hiking",
  "travel",
  "photography",
  "gaming",
  "fitness",
  "reading",
  "movies",
  "design",
  "frontend",
  "backend",
  "cybersecurity",
  "ai",
  "startup",
  "open-source",
];

const random = (min, max) => Math.random() * (max - min) + min;

const getRandomInterests = () => {
  const count = Math.floor(Math.random() * 4) + 1;
  return [...INTERESTS].sort(() => 0.5 - Math.random()).slice(0, count);
};

const users = Array.from({ length: USERS_COUNT }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  lat: Number(random(LAT_RANGE[0], LAT_RANGE[1]).toFixed(6)),
  lon: Number(random(LON_RANGE[0], LON_RANGE[1]).toFixed(6)),
  interests: getRandomInterests(),
}));

fs.writeFileSync("public/users.json", JSON.stringify(users, null, 2));

console.log("✅ users.json generated:", USERS_COUNT);
