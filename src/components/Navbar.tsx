import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white group-hover:bg-amber-700 transition-colors">
            <Globe className="w-6 h-6" />
          </div>
          <span className={cn(
            "font-semibold text-xl tracking-tight transition-colors",
            isScrolled ? "text-neutral-900" : "text-white drop-shadow-md"
          )}>
            Afro Travel Europe
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/explore" className={cn(
            "text-sm font-medium transition-colors hover:text-amber-500",
            isScrolled ? "text-neutral-600" : "text-white/90 drop-shadow-sm"
          )}>Explore</Link>
          <Link to="/cities" className={cn(
            "text-sm font-medium transition-colors hover:text-amber-500",
            isScrolled ? "text-neutral-600" : "text-white/90 drop-shadow-sm"
          )}>Cities</Link>
          <Link to="/community" className={cn(
            "text-sm font-medium transition-colors hover:text-amber-500",
            isScrolled ? "text-neutral-600" : "text-white/90 drop-shadow-sm"
          )}>Community</Link>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-neutral-900" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-neutral-900" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-neutral-100 flex flex-col p-6 gap-4">
          <Link to="/explore" className="text-neutral-600 font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Explore</Link>
          <Link to="/cities" className="text-neutral-600 font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Cities</Link>
          <Link to="/community" className="text-neutral-600 font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Community</Link>
          <button className="bg-amber-600 text-white px-6 py-3 rounded-xl text-base font-medium mt-4">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
