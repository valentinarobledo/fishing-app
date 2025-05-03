import { useState, useEffect } from "react";
import { fetchLeaderboard, Leaderboard } from "@/apis/gameApi";
import TablePlayers from "@/components/TablePlayers";
import Podium from "@/components/Podium";

const RankTab = () => {

	const [players, setPlayers] = useState<Leaderboard[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
    fetchLeaderboard()
      .then(data => {
        setPlayers(data);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

	const podiumPlayers = players.slice(0, 3);
	console.log(podiumPlayers);
	if (loading) return <div>Cargando...</div>;

	return (
		<div className="space-y-8">
			<Podium podium={podiumPlayers} />
			<TablePlayers players={players} />
		</div>
	);
}
export default RankTab