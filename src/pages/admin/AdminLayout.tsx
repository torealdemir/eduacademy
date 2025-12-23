import { Outlet, Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/admin', label: 'Dashboard', icon: '📊' },
  { path: '/admin/programs', label: 'Programlar', icon: '📚' },
  { path: '/admin/activities', label: 'Etkinlikler', icon: '🎯' },
  { path: '/admin/testimonials', label: 'Yorumlar', icon: '💬' },
  { path: '/admin/contacts', label: 'İletişim', icon: '📧' },
]

export default function AdminLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-dark text-white min-h-screen p-4">
        <div className="mb-8">
          <Link to="/" className="text-xl font-bold text-primary">
            patika
          </Link>
          <p className="text-sm text-gray-500 mt-1">Admin Panel</p>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary text-white'
                  : 'text-gray-200 hover:bg-gray-700'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4">
          <Link to="/" className="text-sm text-gray-500 hover:text-white">
            ← Siteye Dön
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}
