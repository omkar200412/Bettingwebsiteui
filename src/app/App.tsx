import { RouterProvider } from 'react-router';
import { router } from './routes';
import { BettingProvider } from './context/BettingContext';

export default function App() {
  return (
    <BettingProvider>
      <RouterProvider router={router} />
    </BettingProvider>
  );
}
