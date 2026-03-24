import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import GlowSection from './components/sections/GlowSection';
import StorySection from './components/sections/StorySection';
import GridSection from './components/sections/GridSection';

export default function App() {
  return (
    <div className="bg-background-light font-display text-slate-900 antialiased selection:bg-rose-500/20 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <GlowSection />
        <GridSection />
      </main>
      <Footer />
    </div>
  );
}