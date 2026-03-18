import { Star } from 'lucide-react';
import { testimonials } from '../lib/data';
import { cn } from '../lib/utils';

export default function Testimonials({ className }: { className?: string }) {
  return (
    <section className={cn("py-24 bg-neutral-50", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-16 text-center tracking-tight">
          Stories from the Community
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-neutral-100 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-100"
                />
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg">{testimonial.name}</h4>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < testimonial.rating
                            ? "fill-amber-500 text-amber-500"
                            : "fill-neutral-200 text-neutral-200"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed text-lg italic font-light flex-1">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
