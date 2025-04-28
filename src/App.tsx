import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Fish, Rocket, ShoppingCart } from 'lucide-react';
import RankTab from './tabs/RankTab';
import Market from './tabs/MarketTab';

function App() {

  return (
    <div className='px-30 py-10'>
      <header className="py-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Rocket size={32} className="text-cosmic-purple animate-pulse-glow" />
          <h1 className="font-bold">
            Galactic Fishing
          </h1>
          <Fish size={32} className="text-cosmic-teal animate-swim" />
        </div>
        <p className="text-cosmic-teal/80 max-w-2xl mx-auto">
          The ultimate marketplace for space fishing enthusiasts. Catch cosmic fish across the galaxy!
        </p>
      </header>
      
      <main className="cosmic-container py-6 relative z-10">
        <Tabs defaultValue="leaderboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="leaderboard" className="data-[state=active]:bg-cosmic-purple data-[state=active]:text-red">
              <Rocket size={16} className="mr-2" />
              Leaderboard
            </TabsTrigger>
            <TabsTrigger value="market">
              <ShoppingCart size={16} className="mr-2" />
              Market
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="leaderboard" className="space-y-12">
           <RankTab />
          </TabsContent>
          
          <TabsContent value="market" className="space-y-8">
            <Market />
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="py-6 text-center text-cosmic-teal/60 relative z-10">
        <p>© 2025 Cosmic Angler Market • All rights reserved</p>
      </footer>
    </div>
  )
}

export default App
