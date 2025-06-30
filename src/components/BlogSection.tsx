import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * BlogSection component for the landing page.
 * Displays a section header and a grid of blog cards.
 * Responsive and visually consistent with the design system.
 */
const blogPosts = [
  {
    id: 1,
    category: 'Application',
    date: '03 April, 2025',
    title: 'Consulting Industry Adapts To The Changing Business.',
    image: 'https://images.pexels.com/photos/2068664/pexels-photo-2068664.jpeg?auto=compress&w=600&q=80',
  },
  {
    id: 2,
    category: 'Application',
    date: '03 April, 2025',
    title: 'Consulting Industry Adapts To The Changing Business.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600&q=80',
  },
  {
    id: 3,
    category: 'Application',
    date: '03 April, 2025',
    title: 'Consulting Industry Adapts To The Changing Business.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&w=600&q=80',
  },
];

const BlogSection: React.FC = () => (
  <section className="bg-[#f7f7f7] py-16 px-2 md:px-0">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
        <div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            What our clients and<br className="hidden md:block" /> partners reviews
          </h2>
        </div>
        <div className="md:text-right">
          <p className="text-gray-600 text-lg mb-2 md:mb-0 max-w-md">
            Crafting compelling digital experiences that captivate audiences and drive meaningful connections.
          </p>
          <a
            href="#"
            className="inline-flex items-center font-semibold text-gray-900 hover:text-blue-600 transition text-lg mt-2 md:mt-4 underline underline-offset-4 decoration-2 decoration-gray-900"
          >
            View All Blogs <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-sm p-8 flex flex-col h-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500 font-medium text-base">{post.category}</span>
              <span className="text-gray-500 font-medium text-base">{post.date}</span>
            </div>
            <h3
              className="text-2xl font-extrabold text-gray-900 mb-6 leading-snug"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {post.title}
            </h3>
            <div className="flex items-center mb-6">
              <hr className="flex-grow border-gray-300" />
              <a
                href="#"
                className="flex items-center font-semibold text-gray-900 hover:text-blue-600 transition text-lg ml-2 whitespace-nowrap"
              >
                Read More <ArrowRight className="ml-1 w-5 h-5" />
              </a>
            </div>
            <img
              src={post.image}
              alt={post.title}
              className="rounded-lg object-cover w-full h-48"
              style={{ background: '#eee' }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
