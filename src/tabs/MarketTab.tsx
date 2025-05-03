import { useState, useEffect } from "react";
import { Search, ShoppingCart,CircleDollarSign, Fish, FlaskConical } from "lucide-react";
import { fetchMarket, Market } from "@/apis/gameApi";
import DialogItem from "@/components/DialogItem";

const MarketTab = () => {
	const [marketData, setMarketData] = useState<Market[]>([])
	const [ loading, setLoading ] = useState(true)
	const [selectedItem, setSelectedItem] = useState<Market | null>(null)
	const [searchTerm, setSearchTerm] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
	
	useEffect(() => {
		fetchMarket()
			.then(data => {
				setMarketData(data);
			})
			.catch(err => {
				console.error(err);
			})
			.finally(() => setLoading(false));
	},[])

	const filteredMarket = marketData.filter(item =>
		item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
		item.type.toLowerCase().includes(searchTerm.toLowerCase())
	)
	
	const handleViewDetails = (item: Market) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

	const formatString = (input: string): string => {
		return input
			.split('_')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	};
	

	return (
		<div className="space-y-8">
			<h2 className="text-2xl font-bold text-cosmic-purple">Cosmic Fishing Market</h2>
			<p className="text-cosmic-teal/80">
			Welcome to the Galactic Fishing Market! Here you can buy and sell your cosmic fish with other players.
			</p>
			<div className="grid grid-cols-1 flex search-bar bg-gray-200 w-full">
				<input type="text" 
					value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
				<Search className="icon text-cosmic-purple" />
			</div>
			<div className="container">
				<div className="filter">

				</div>
				<div className="market">
					{loading ? (
						<div className="loading">Loading...</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{filteredMarket.map((item) => (
								<div key={item.id} className="card-market-item">
									<img
										src='/assets/placeholder.jpg'
										alt="Galaxy"
										className="w-full object-cover rounded-md mb-2"
									/>
									<h3>{item.name}</h3>
									<div className="flex flex-wrap justify-between">
										<p className="flex items-center"><CircleDollarSign size={16} className="text-cosmic-yellow mr-1" /> {item.cost}</p>
										<div>
											<span className="text-cosmic-deep-purple text-right block">Type</span> 
											<p className="flex items-center">
												{item.type.toLowerCase().startsWith("fish") ? <Fish size={14} className="mx-1 text-cosmic-ocean" /> : <FlaskConical size={14} className="mx-1 text-cosmic-pink" />} 
												{formatString(item.type)}
											</p>
										</div>
									</div>
									<div className="flex justify-center mt-2">
										<button className="buy-button flex items-center justify-center bg-cosmic-purple text-white px-4 py-1 m-2 rounded cursor-pointer"><ShoppingCart size={16} /> Buy</button>
										<button 
											className="details-button flex items-center justify-center border border-cosmic-teal text-cosmic-teal px-4 py-1 m-2 rounded cursor-pointer" 
											onClick={() => handleViewDetails(item)}
											>
											View Details
										</button>
									</div>
								</div>
							))}
						</div>
					)}
				</div>

				<DialogItem
				selectedItem={selectedItem}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen} 
				/>

			</div>
		</div>
	);
}
export default MarketTab;