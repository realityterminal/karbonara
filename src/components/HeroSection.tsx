import React from 'react';
import { ArrowRight, Send } from 'lucide-react';

// Avatar images (Pexels/Unsplash stock)
const avatars = [
  'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=64&h=64&fit=crop',
  'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=64&h=64&fit=crop',
  'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=64&h=64&fit=crop',
];

const mainImage =
  'https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg?auto=compress&w=800&h=600&fit=crop';

const HeroSection: React.FC = () => (
  <section className="relative bg-white min-h-[80vh] flex items-center justify-center px-4 md:px-0">
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
      {/* Left: Content */}
      <div>
        {/* Avatars + "10K+ Clients" */}
        <div className="flex items-center mb-4">
          <div className="flex -space-x-4">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Client avatar"
                className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
                style={{ zIndex: 10 - i }}
              />
            ))}
            {/* 10K+ Clients circle */}
            <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-md ml-2 md:ml-0" style={{ zIndex: 1 }}>
              10K+<br /><span className="font-normal text-xs">Clients</span>
            </div>
          </div>
        </div>
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          Next-Gen<br />
          Storytelling<br />
          Digital Agency
        </h1>
        {/* Subheading */}
        <p className="text-gray-500 text-lg mb-8 max-w-xl">
          Etiam sed odio dictum, tempus velit non, sollicitudin neque. Donec quis aliquet velit. Aliquam convallis dapibus purus.
        </p>
        {/* CTA Button */}
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center bg-gray-900 text-white text-xl font-semibold rounded-full px-8 py-4 shadow-lg hover:bg-gray-800 transition relative"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore More
            <span className="ml-4 bg-green-100 text-gray-900 rounded-full w-12 h-12 flex items-center justify-center text-xl absolute right-[-2.5rem] top-1/2 -translate-y-1/2 shadow-md border border-green-100">
              <Send className="w-6 h-6" />
            </span>
          </a>
        </div>
      </div>
      {/* Right: Image + Stats */}
      <div className="relative flex justify-center items-center">
        <img
          src={mainImage}
          alt="Team working"
          className="rounded-[2.5rem] w-full max-w-lg object-cover shadow-xl"
          style={{ minHeight: 350, maxHeight: 420 }}
        />
        {/* Stats overlay */}
        <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 bg-gray-900 text-white rounded-2xl shadow-lg flex px-10 py-6 gap-12 items-center min-w-[340px] border-4 border-white">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold">10+</span>
            <span className="text-base font-medium text-gray-200">Years of<br />Experience</span>
          </div>
          <div className="w-px h-12 bg-gray-700 mx-2" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold">710+</span>
            <span className="text-base font-medium text-gray-200">Projects<br />Handover</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
