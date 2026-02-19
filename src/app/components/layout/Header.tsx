import { Link } from 'react-router';
import { Menu, Wallet, User, Bell } from 'lucide-react';
import { Button } from '../ui/button';
import { useBetting } from '../../context/BettingContext';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { balance } = useBetting();

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-slate-400 hover:text-white"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              BetMaster
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <Link to="/">
            <Button variant="ghost" className="text-slate-400 hover:text-white">
              Home
            </Button>
          </Link>
          <Link to="/live">
            <Button variant="ghost" className="text-slate-400 hover:text-white">
              <span className="flex items-center gap-2">
                Live
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              </span>
            </Button>
          </Link>
          <Link to="/my-bets">
            <Button variant="ghost" className="text-slate-400 hover:text-white">
              My Bets
            </Button>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 bg-slate-800 rounded-lg px-4 py-2">
            <Wallet className="h-4 w-4 text-emerald-500" />
            <span className="text-white font-semibold">
              ${balance.toLocaleString()}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-400 hover:text-white"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-400 hover:text-white"
          >
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
