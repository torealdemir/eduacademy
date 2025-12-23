export default function Dashboard() {
  const stats = [
    { label: 'Toplam Program', value: 3, icon: '📚' },
    { label: 'Etkinlikler', value: 5, icon: '🎯' },
    { label: 'Yeni Mesajlar', value: 12, icon: '📧' },
    { label: 'Yorumlar', value: 8, icon: '💬' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-dark mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-dark">{stat.value}</div>
            <div className="text-gray-500 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Hızlı İşlemler</h2>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            + Yeni Program
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            + Yeni Etkinlik
          </button>
        </div>
      </div>
    </div>
  )
}
