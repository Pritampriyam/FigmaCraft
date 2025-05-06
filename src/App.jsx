import { useState } from 'react';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { ThirdPane } from './components/features/ThirdPane/ThirdPane';
import './styles/global.css';

export default function App() {
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  return (
    <div className="app">
      <Header onTogglePane={() => setIsPaneOpen(!isPaneOpen)} />
      <main>Main Content Area</main>
      <ThirdPane isOpen={isPaneOpen} onClose={() => setIsPaneOpen(false)} />
      <Footer />
    </div>
  );
}
