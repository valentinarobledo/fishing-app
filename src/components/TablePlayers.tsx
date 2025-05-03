import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search, Star, CircleDollarSign, MoveLeft, MoveRight } from "lucide-react";

interface Player {
  rank: number;
  username: string;
  level: number;
  xp: number;
  gold: number;
}

interface TablePlayersProps {
  players: Player[];
  pageSize?: number;
}

export const TablePlayers: React.FC<TablePlayersProps> = ({ players, pageSize = 20 }) => {

	const [currentPage, setCurrentPage] = useState(1)
	const [searchTerm, setSearchTerm] = useState("")
  const totalPages = Math.ceil(players.length / pageSize)

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentPlayers = players.slice(startIndex, endIndex)

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1))
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages))
  const goToPage = (page: number) => setCurrentPage(page)

	const filteredUsers = currentPlayers.filter(item =>
		item.username.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<div className="w-full table-players">
			<p>Find a fisher</p>
			<div className="grid grid-cols-1 flex search-bar bg-gray-200 w-full my-3">
				<input type="text" 
					value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
				<Search className="text-cosmic-purple icon" />
			</div>
			<h2 className="py-4 text-center podium-title">All the fishers</h2>
			<Table className="border border-cosmic-purple table-ranking">
				<TableHeader className="bg-cosmic-purple text-white">
					<TableRow>
						<TableHead className="w-[100px] text-center">Rank</TableHead>
						<TableHead className="w-[100px] text-center">Player</TableHead>
						<TableHead className="w-[100px] text-center">Level</TableHead>
						<TableHead className="w-[100px] text-center">XP</TableHead>
						<TableHead className="w-[100px] text-start">Gold</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{filteredUsers.map((player) => (
						<TableRow key={player.rank}>
							<TableCell className="text-center">{player.rank}</TableCell>
							<TableCell className="text-center">{player.username}</TableCell>
							<TableCell className="text-center flex items-center justify-center">
								<Star size={16} className="mx-2 text-cosmic-yellow" /> <span>{player.level}</span>
							</TableCell>
							<TableCell className="text-center text-cosmic-teal">{player.xp}</TableCell>
							<TableCell className="text-center flex items-center justify-start">
								<CircleDollarSign size={16} className="mx-2 text-cosmic-yellow" />
								<span>{player.gold}</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<div className="flex items-center justify-center space-x-1 mt-4">
				<Button variant="ghost" className="text-cosmic-purple cursor-pointer" size="sm" onClick={handlePrev} disabled={currentPage === 1}>
					<MoveLeft />
				</Button>

				{[...Array(Math.min(5, totalPages))].map((_, idx) => {
					const page = idx + 1;
					const isActive = page === currentPage;

					return (
						<Button
							key={page}
							size="sm"
							onClick={() => goToPage(page)}
							variant="ghost"
							className={`${isActive ? 'text-cosmic-pink font-semibold' : 'hover:bg-muted'} cursor-pointer`}
						>
							{page}
						</Button>
					);
				})}

				{totalPages > 5 && (
					<select
						className="border text-cosmic-purple border-cosmic-purple text-sm rounded px-2 py-1"
						value={currentPage > 10 ? currentPage : ''}
						onChange={(e) => goToPage(Number(e.target.value))}
					>
						<option value='' disabled>+ Pages</option>
						{Array.from({ length: totalPages - 5 }, (_, i) => {
							const page = i + 6;
							return (
								<option key={page} value={page}>
									{page}
								</option>
							);
						})}
					</select>
				)}

				<Button variant="ghost" className="text-cosmic-purple" size="sm" onClick={handleNext} disabled={currentPage === totalPages}>
					<MoveRight />
				</Button>
			</div>

		</div>
	);
};

export default TablePlayers