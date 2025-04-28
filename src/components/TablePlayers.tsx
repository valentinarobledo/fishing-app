import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

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

	const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(players.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPlayers = players.slice(startIndex, endIndex);

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const goToPage = (page: number) => setCurrentPage(page);

	return (
		<div className="w-full table-players">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Rank</TableHead>
						<TableHead className="w-[100px]">Player</TableHead>
						<TableHead className="w-[100px]">Level</TableHead>
						<TableHead className="w-[100px]">XP</TableHead>
						<TableHead className="w-[100px]">Gold</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{currentPlayers.map((player) => (
						<TableRow key={player.rank}>
							<TableCell className="text-center">{player.rank}</TableCell>
							<TableCell className="text-center">{player.username}</TableCell>
							<TableCell className="text-center">{player.level}</TableCell>
							<TableCell className="text-center">{player.xp}</TableCell>
							<TableCell className="text-center">{player.gold}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			
			<div className="flex items-center justify-center space-x-2 mt-4">
        <Button variant="outline" size="sm" onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </Button>

        {[...Array(totalPages)].map((_, idx) => {
          const page = idx + 1;
          return (
            <Button
              key={page}
              variant={page === currentPage ? "secondary" : "outline"}
              size="sm"
              onClick={() => goToPage(page)}
            >
              {page}
            </Button>
          );
        })}

        <Button variant="outline" size="sm" onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
		</div>
	);
};

export default TablePlayers