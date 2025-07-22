import React from 'react';
import { Link } from 'react-router-dom';

export const AppSidebar = () => {
  return (
    <aside className="w-64 bg-[#f3f4f6] p-6 shadow-md">
      <div className="text-2xl font-bold mb-8">SkillNest</div>
      <nav className="space-y-4">
        <Link to="/dashboard" className="block">🏠 Dashboard</Link>
        <Link to="/profile" className="block">👤 Profile</Link>
        <Link to="/communities" className="block">🧵 Communities</Link>
        <Link to="/chat" className="block">💬 Chat</Link>
        <Link to="/feedback" className="block">📝 Feedback</Link>
      </nav>
    </aside>
  );
};
