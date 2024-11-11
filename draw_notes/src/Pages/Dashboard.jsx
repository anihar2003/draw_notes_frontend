import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  Plus, 
  Home,
  Settings,
  Users,
  FileText,
  Bell,
  ChevronDown,
  Folder,
  Clock,
  Star,
  Share2
} from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/api/placeholder/32/32'
  };

  // Sample boards data - replace with API call
  const boards = [
    { 
      id: 1, 
      name: 'Product Roadmap 2024', 
      lastEdited: '2 hours ago',
      thumbnail: '/api/placeholder/400/200',
      isStarred: true,
      collaborators: 5,
      type: 'Recent'
    },
    { 
      id: 2, 
      name: 'UI/UX Design Workshop', 
      lastEdited: '1 day ago',
      thumbnail: '/api/placeholder/400/200',
      isStarred: false,
      collaborators: 3,
      type: 'Recent'
    },
    { 
      id: 3, 
      name: 'Sprint Planning Board', 
      lastEdited: '3 days ago',
      thumbnail: '/api/placeholder/400/200',
      isStarred: true,
      collaborators: 8,
      type: 'Recent'
    },
    { 
      id: 4, 
      name: 'Team Brainstorming', 
      lastEdited: '1 week ago',
      thumbnail: '/api/placeholder/400/200',
      isStarred: false,
      collaborators: 4,
      type: 'All'
    }
  ];

  // Sidebar navigation items
  const sidebarItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Clock, label: 'Recent', path: '/recent' },
    { icon: Star, label: 'Starred', path: '/starred' },
    { icon: Share2, label: 'Shared with me', path: '/shared' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and Menu */}
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-lg"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="ml-4 flex items-center">
                <img
                  src="/api/placeholder/32/32"
                  alt="Logo"
                  className="h-8 w-8"
                />
                <span className="ml-2 text-xl font-bold text-gray-800">
                  DrawingBoard
                </span>
              </div>
            </div>

            {/* Middle - Search Bar */}
            <div className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search your boards..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Right side - User Profile */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Bell className="h-6 w-6" />
              </button>
              <div className="relative">
                <button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full"
                  />
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-medium text-gray-700">
                      {user.name}
                    </div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 pt-16 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '240px' }}
      >
        <div className="p-4">
          <button 
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-6"
          >
            <Plus className="h-5 w-5 mr-2" />
            New Board
          </button>
          <nav className="space-y-1">
            {sidebarItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main
        className={`pt-16 transition-all duration-300 ${
          isSidebarOpen ? 'ml-60' : 'ml-0'
        }`}
      >
        <div className="p-6">
          {/* Recent Boards Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Boards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {boards.filter(board => board.type === 'Recent').map((board) => (
                <div
                  key={board.id}
                  className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={board.thumbnail}
                      alt={board.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{board.name}</h3>
                      <button className={`text-gray-400 hover:text-yellow-500 ${board.isStarred ? 'text-yellow-500' : ''}`}>
                        <Star className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {board.lastEdited}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {board.collaborators}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Add New Board Card */}
              <button className="h-[272px] bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors flex flex-col items-center justify-center">
                <Plus className="h-8 w-8 text-gray-400" />
                <span className="mt-2 text-sm font-medium text-gray-600">Create New Board</span>
              </button>
            </div>
          </div>

          {/* All Boards Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">All Boards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {boards.filter(board => board.type === 'All').map((board) => (
                <div
                  key={board.id}
                  className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={board.thumbnail}
                      alt={board.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{board.name}</h3>
                      <button className={`text-gray-400 hover:text-yellow-500 ${board.isStarred ? 'text-yellow-500' : ''}`}>
                        <Star className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {board.lastEdited}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {board.collaborators}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
