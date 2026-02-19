import { Link } from 'react-router';
import { Button } from '../ui/button';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="text-8xl mb-6">🎲</div>
      <h1 className="text-white text-4xl font-bold mb-2">404</h1>
      <p className="text-slate-400 text-xl mb-6">Page not found</p>
      <Link to="/">
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Home className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
