
import { Star, CircleDollarSign } from "lucide-react";

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
		<div className="podium-container">
			<h2 className="podium-title text-cosmic-purple">Top Cosmic Fishers</h2>
			<div className="podium">
				<div className="podium-player order-2 sm:order-1 second">
					<div className="user">
						<img src="/images/second_place.png" alt="second" />
						<span className="player-name">{podium[1].username}</span>
					</div>
					<div className="user-info">
						<span className="font-extralight flex items-center justify-center"><Star size={16} className="mx-2 text-cosmic-yellow" /> {podium[1].level}</span>
						<span className="font-extralight text-cosmic-teal">{podium[1].xp}</span>
						<span className="font-extralight flex items-center justify-center"><CircleDollarSign size={16} className="mx-2 text-cosmic-yellow" />{podium[1].gold}</span>
					</div>
				</div>
				<div className="podium-player order-1 sm:order-2 first">
					<div className="user">
						<img src="/images/first_place.png" alt="first" />
						<span className="player-name">{podium[0].username}</span>
					</div>
					<div className="user-info">
						<span className="font-extralight flex items-center justify-center"><Star size={16} className="mx-2 text-cosmic-yellow" /> {podium[0].level}</span>
						<span className="font-extralight text-cosmic-teal">{podium[0].xp}</span>
						<span className="font-extralight flex items-center justify-center"><CircleDollarSign size={16} className="mx-2 text-cosmic-yellow" />{podium[0].gold}</span>
					</div>
				</div>
				<div className="podium-player order-3 sm:order-3 third">
					<div className="user">
						<img src="/images/third_place.png" alt="third" />
						<span className="player-name">{podium[2].username}</span>
					</div>
					<div className="user-info">
						<span className="font-extralight flex items-center justify-center"><Star size={16} className="mx-2 text-cosmic-yellow" />{podium[2].level}</span>
						<span className="font-extralight text-cosmic-teal">{podium[2].xp}</span>
						<span className="font-extralight flex items-center justify-center"><CircleDollarSign size={16} className="mx-2 text-cosmic-yellow" /> {podium[2].gold}</span>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Podium