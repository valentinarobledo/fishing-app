
interface PodiumProps {
	podium: {
		rank: number;
		username: string;
		level: number;
		xp: number;
		gold: number;
	}[];
}

const Podium: React.FC<PodiumProps> = ({ podium }) => {
	return (
		<div className="flex flex-col">
			<h2 className="text-4xl font-bold mb-4">Podium</h2>
			{podium.map((player) => (
				<div
					key={player.rank}
					className={`flex items-center justify-between p-4 rounded-lg ${
						player.rank === 0
							? 'bg-gold'
							: player.rank === 1
							? 'bg-silver'
							: 'bg-bronze'
					}`}
				>
					<span className="text-xl font-bold">{player.username}</span>
					<span className="text-lg">{player.level} Level</span>
					<span className="text-lg">{player.xp} XP</span>
					<span className="text-lg">{player.gold} Gold</span>
				</div>
			))}
		</div>
	);
};

export default Podium