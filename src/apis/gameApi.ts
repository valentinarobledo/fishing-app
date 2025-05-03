export interface Market {
	id: string,
	name: string,
	type: string,
	description: string,
	cost: number,
}

export interface MarketResponse {
  items: Market[]
}

export interface Leaderboard {
  rank: number;
  username: string;
  level: number;
  xp: number;
  gold: number;
  fishEmojis: string;
  emojiDescription: string;
  isInfected: boolean;
}

// Define the JSON structure returned by the API
interface LeaderboardResponse {
  players: Leaderboard[];
  legend: any[];
}


const API_BASE = "https://api-game.bloque.app/game"

export async function fetchMarket(): Promise<Market[]> {
  const res = await fetch(`${API_BASE}/market`)
  if (!res.ok) {
    throw new Error(`Error fetching market: ${res.status} ${res.statusText}`)
  }
  const data = (await res.json()) as MarketResponse
  return data.items
}

export async function fetchLeaderboard(): Promise<Leaderboard[]> {
  const res = await fetch(`${API_BASE}/leaderboard`);
  if (!res.ok) {
    throw new Error(`Error fetching leaderboard: ${res.status} ${res.statusText}`);
  }
  const data = (await res.json()) as LeaderboardResponse
  return data.players
}