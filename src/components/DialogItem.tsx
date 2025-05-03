import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircleDollarSign, Fish, FlaskConical } from 'lucide-react';
import { Market } from "@/apis/gameApi";

type DialogItemProps = {
  selectedItem: Market | null;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const DialogItem: React.FC<DialogItemProps> = ({ selectedItem, isModalOpen, setIsModalOpen }) => {
	const formatString = (input: string): string => {
		return input
			.split('_')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	};

	return (
		<>
			<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				{selectedItem && (
					<DialogContent className="bg-cosmic-dark border border-cosmic-purple max-w-md sm:max-w-lg">
						<DialogHeader>
							<DialogTitle className="text-2xl text-cosmic-teal">{selectedItem.name}</DialogTitle>
							<DialogDescription className="text-cosmic-purple">
								<span>Type:</span>
								<div className="flex items-center">
								{selectedItem.type.toLowerCase().startsWith("fish") ? <Fish size={14} className="mx-1 text-cosmic-ocean" /> : <FlaskConical size={14} className="mx-1 text-cosmic-pink" />} 
								{formatString(selectedItem.type)}
								</div>
							</DialogDescription>
						</DialogHeader>

						<div className="py-4">
							<div className="aspect-video overflow-hidden rounded-lg mb-4">
								<div className="h-full w-full bg-cosmic-purple/20 flex items-center justify-center">
									<img src="/images/placeholder.jpg" alt="" />
								</div>
							</div>

							<p className="text-white/90 leading-relaxed">{selectedItem.description}</p>
						</div>

						<DialogFooter>
							<Button 
								className="bg-cosmic-pink w-full cursor-pointer" 
								onClick={() => setIsModalOpen(false)}
							>
								<CircleDollarSign size={18} className="mr-2" />
								Buy Now ({selectedItem.cost?.toLocaleString()})
							</Button>
						</DialogFooter>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
};

export default DialogItem

