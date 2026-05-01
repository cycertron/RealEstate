import React, { useState } from 'react';

interface Client {
  initials: string;
  name: string;
  since: string;
  budget: string;
  areas: string;
  type: 'Buyer' | 'Seller' | 'Investor' | 'Tenant';
  deals: number;
  totalValue: string;
  totalNum: number;
  statusPill: string;
  statusLabel: string;
  avatarBg: string;
  avatarColor: string;
  monthlyActivity: number[];
  email: string;
  phone: string;
}

const TYPE_CONFIG: Record<string, { cls: string; label: string }> = {
  Buyer:    { cls: 'badge-blue',     label: '🏠 Buyer'    },
  Seller:   { cls: 'badge-gold',     label: '💼 Seller'   },
  Investor: { cls: 'badge-platinum', label: '📈 Investor' },
  Tenant:   { cls: 'badge-silver',   label: '🔑 Tenant'  },
};

const CLIENTS: Client[] = [
  { initials: 'PS', name: 'Priya Sharma',  since: 'Jan 2025', budget: 'Rs. 80L–1.2Cr',  areas: 'Lazimpat, Maharajgunj', type: 'Buyer',    deals: 2,  totalValue: 'Rs. 1.7Cr',  totalNum: 17000000, statusPill: 'p-cfm', statusLabel: 'Viewing Scheduled', avatarBg: 'rgba(44,62,80,0.15)',     avatarColor: 'var(--accent)', monthlyActivity: [1,0,1,0,1,0,1], email: 'priya@email.com',  phone: '+977-9841000001' },
  { initials: 'DL', name: 'David Lee',     since: 'Mar 2026', budget: 'Rs. 2–5Cr',       areas: 'Durbar Marg, Jhamsikhel',type: 'Investor', deals: 1,  totalValue: 'Rs. 2.4Cr',  totalNum: 24000000, statusPill: 'p-avl', statusLabel: 'Under Contract',    avatarBg: 'rgba(92,158,224,0.15)',   avatarColor: 'var(--blue)',   monthlyActivity: [0,0,0,0,0,0,1], email: 'david@email.com',  phone: '+1-555-0021' },
  { initials: 'AG', name: 'Aisha Gurung',  since: 'Nov 2024', budget: 'Rs. 3–6Cr',       areas: 'Baneshwor, Koteshwor',  type: 'Seller',   deals: 3,  totalValue: 'Rs. 4.8Cr',  totalNum: 48000000, statusPill: 'p-cfm', statusLabel: 'Offer Received',    avatarBg: 'rgba(76,175,125,0.15)',   avatarColor: 'var(--green)', monthlyActivity: [1,1,0,1,1,0,1], email: 'aisha@email.com',  phone: '+977-9841000003' },
  { initials: 'MK', name: 'Maya Karki',    since: 'Feb 2026', budget: 'Rs. 40–70L',      areas: 'Patan, Lalitpur',       type: 'Tenant',   deals: 1,  totalValue: 'Rs. 55L',    totalNum: 5500000,  statusPill: 'p-pnd', statusLabel: 'Lead',             avatarBg: 'rgba(155,127,232,0.15)', avatarColor: 'var(--blue)',   monthlyActivity: [0,1,0,0,0,0,1], email: 'maya@email.com',   phone: '+977-9841000004' },
  { initials: 'RT', name: 'Rajan Thapa',   since: 'Aug 2023', budget: 'Rs. 1.5–4Cr',    areas: 'Baluwatar, Naxal',      type: 'Investor', deals: 6,  totalValue: 'Rs. 12Cr',   totalNum: 120000000, statusPill: 'p-out', statusLabel: 'Deal Closed',      avatarBg: 'rgba(44,62,80,0.1)',      avatarColor: 'var(--accent)', monthlyActivity: [1,1,1,0,1,1,1], email: 'rajan@email.com',  phone: '+977-9841000005' },
  { initials: 'SP', name: 'Sujan Poudel',  since: 'Jun 2024', budget: 'Rs. 60L–1Cr',    areas: 'New Baneshwor, Airport',type: 'Buyer',    deals: 2,  totalValue: 'Rs. 1.35Cr', totalNum: 13500000, statusPill: 'p-can', statusLabel: 'Inactive',         avatarBg: 'rgba(224,92,92,0.1)',     avatarColor: 'var(--red)',   monthlyActivity: [0,1,0,1,0,0,1], email: 'sujan@email.com',  phone: '+977-9841000006' },
];

const ClientsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = CLIENTS.filter(c => {
    const matchSearch = search === '' || c.name.toLowerCase().includes(search.toLowerCase());
    const matchType = filterType === 'all' || c.type.toLowerCase() === filterType;
    return matchSearch && matchType;
  });

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Clients</div>
          <div className="page-sub">All registered clients · {CLIENTS.length} profiles</div>
        </div>
        <div className="header-right">
          <button className="btn-primary">+ Add Client</button>
        </div>
      </div>
      <div className="fbar">
        <input type="text" placeholder="🔍  Search client name..." value={search} onChange={e => setSearch(e.target.value)} />
        <select value={filterType} onChange={e => setFilterType(e.target.value)}>
          <option value="all">All Types</option>
          <option value="buyer">Buyers</option>
          <option value="seller">Sellers</option>
          <option value="investor">Investors</option>
          <option value="tenant">Tenants</option>
        </select>
      </div>
      <div className="gc-grid">
        {filtered.map(c => {
          const tcfg = TYPE_CONFIG[c.type];
          const isExpanded = expandedId === c.name;
          const maxBar = Math.max(...c.monthlyActivity, 1);
          return (
            <div
              key={c.name}
              className={`gc ${isExpanded ? 'gc-expanded' : ''}`}
              onClick={() => setExpandedId(isExpanded ? null : c.name)}
            >
              {/* Client type badge */}
              <span className={`loyalty-badge ${tcfg.cls}`}>{tcfg.label}</span>

              <div className="gc-top" style={{ paddingRight: 80 }}>
                <div className="gc-av" style={{ background: c.avatarBg, color: c.avatarColor }}>{c.initials}</div>
                <div>
                  <div className="gc-name">{c.name}</div>
                  <div className="gc-since">Client since {c.since}</div>
                </div>
              </div>
              <div className="gc-row">Budget <span>{c.budget}</span></div>
              <div className="gc-row">Preferred Areas <span style={{ fontSize: 12 }}>{c.areas}</span></div>
              <div className="gc-row">Total Deals <span>{c.deals}</span></div>
              <div className="gc-row">Total Value <span>{c.totalValue}</span></div>
              <div style={{ marginTop: 8 }}>
                <span className={`pill ${c.statusPill}`}>{c.statusLabel}</span>
              </div>

              {isExpanded && (
                <div className="gc-expanded-body">
                  <div className="gc-row">Email <span>{c.email}</span></div>
                  <div className="gc-row">Phone <span>{c.phone}</span></div>
                  <div style={{ marginTop: 8 }}>
                    <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>ACTIVITY (7 MONTHS)</div>
                    <div className="mini-bar-chart">
                      {c.monthlyActivity.map((v, i) => (
                        <div key={i} className={`mini-bar ${v > 0 ? 'active' : ''}`} style={{ height: `${Math.max(15, (v / maxBar) * 100)}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="gc-actions">
                    <button className="gc-action-btn">📧 Email</button>
                    <button className="gc-action-btn">📋 Deals</button>
                    <button className="gc-action-btn">🏠 Show Property</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ClientsPage;
