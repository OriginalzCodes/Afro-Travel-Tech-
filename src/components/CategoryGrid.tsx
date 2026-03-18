import { Music, Utensils, Map, Users, CalendarDays } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = [
  { id: 'food', label: 'Food & Dining', icon: Utensils, color: 'bg-orange-100 text-orange-600' },
  { id: 'culture', label: 'Cultural Tours', icon: Map, color: 'bg-emerald-100 text-emerald-600' },
  { id: 'nightlife', label: 'Nightlife', icon: Music, color: 'bg-purple-100 text-purple-600' },
  { id: 'events', label: 'Events', icon: CalendarDays, color: 'bg-blue-100 text-blue-600' },
  { id: 'community', label: 'Community', icon: Users, color: 'bg-rose-100 text-rose-600' },
];

export default function CategoryGrid({ className }: { className?: string }) {
  return (
    <section className={cn("py-20 bg-neutral-50", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
              Explore by Category
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Find exactly what you're looking for, from culinary masterclasses to vibrant nightlife.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:-translate-y-1"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110", category.color)}>
                <category.icon className="w-8 h-8" />
              </div>
              <span className="text-neutral-900 font-semibold text-lg tracking-tight group-hover:text-amber-600 transition-colors">
                {category.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
