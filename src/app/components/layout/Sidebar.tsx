import { Link, useLocation } from 'react-router';
import { X, Home, Zap, Trophy, Dumbbell, Bike, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../ui/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sports = [
  { name: 'Soccer', icon: Trophy, path: '/sports/soccer' },
  { name: 'Basketball', icon: Dumbbell, path: '/sports/basketball' },
  { name: 'Tennis', icon: Users, path: '/sports/tennis' },
  { name: 'Baseball', icon: Dumbbell, path: '/sports/baseball' },
  { name: 'Hockey', icon: Bike, path: '/sports/hockey' },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          'fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-slate-800 z-50 transition-transform duration-300 lg:translate-x-0 lg:top-16',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-800 lg:hidden">
          <span className="text-white font-semibold">Menu</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4 space-y-6">
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Main
            </h3>
            <nav className="space-y-1">
              <Link to="/" onClick={onClose}>
                <Button
                  variant="ghost"
                  className={cn(
                    'w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800',
                    location.pathname === '/' && 'bg-slate-800 text-white'
                  )}
                >
                  <Home className="h-4 w-4 mr-3" />
                  Home
                </Button>
              </Link>
              <Link to="/live" onClick={onClose}>
                <Button
                  variant="ghost"
                  className={cn(
                    'w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800',
                    location.pathname === '/live' && 'bg-slate-800 text-white'
                  )}
                >
                  <Zap className="h-4 w-4 mr-3" />
                  Live Betting
                  <span className="ml-auto w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </Button>
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Sports
            </h3>
            <nav className="space-y-1">
              {sports.map((sport) => (
                <Link key={sport.path} to={sport.path} onClick={onClose}>
                  <Button
                    variant="ghost"
                    className={cn(
                      'w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800',
                      location.pathname === sport.path &&
                        'bg-slate-800 text-white'
                    )}
                  >
                    <sport.icon className="h-4 w-4 mr-3" />
                    {sport.name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
