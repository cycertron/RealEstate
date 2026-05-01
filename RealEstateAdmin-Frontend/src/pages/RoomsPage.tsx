import React, { useState } from 'react';

interface Property {
  id: string;
  address: string;
  area: string;
  type: 'Apartment' | 'Villa' | 'Land' | 'Commercial';
  price: string;
  sqft: string;
  beds: number | string;
  status: 'active' | 'under-offer' | 'sold' | 'off-market';
}

const PROPERTIES: Property[] = [
  { id: 'P-101', address: '14 Lazimpat Avenue',     area: 'Lazimpat, KTM',    type: 'Apartment',  price: 'Rs. 85L',    sqft: '1,240 sqft', beds: 3,    status: 'active'      },
  { id: 'P-102', address: '7 Durbar Marg Residency', area: 'Durbar Marg, KTM', type: 'Villa',      price: 'Rs. 2.4Cr',  sqft: '4,800 sqft', beds: 5,    status: 'under-offer' },
  { id: 'P-103', address: '22 Baneshwor Heights',    area: 'Baneshwor, KTM',   type: 'Apartment',  price: 'Rs. 72L',    sqft: '980 sqft',   beds: 2,    status: 'active'      },
  { id: 'P-104', address: 'Jhamsikhel Land Plot',    area: 'Jhamsikhel, KTM',  type: 'Land',       price: 'Rs. 55L',    sqft: '6 Anna',     beds: '—',  status: 'active'      },
  { id: 'P-105', address: '101 New Baneshwor Plaza', area: 'Baneshwor, KTM',   type: 'Commercial', price: 'Rs. 3.8Cr',  sqft: '8,200 sqft', beds: '—',  status: 'under-offer' },
  { id: 'P-106', address: '9 Maharajgunj Villa',     area: 'Maharajgunj, KTM', type: 'Villa',      price: 'Rs. 4.1Cr',  sqft: '6,400 sqft', beds: 6,    status: 'sold'        },
  { id: 'P-107', address: '34 Pulchowk Heights',     area: 'Patan, Lalitpur',  type: 'Apartment',  price: 'Rs. 68L',    sqft: '1,100 sqft', beds: 3,    status: 'active'      },
  { id: 'P-108', address: 'Baluwatar Premium Land',   area: 'Baluwatar, KTM',   type: 'Land',       price: 'Rs. 1.8Cr',  sqft: '14 Anna',    beds: '—',  status: 'off-market'  },
];

const STATUS_CONFIG = {
  'active':      { label: 'Active',       pill: 'p-avl', dot: 'var(--green)'  },
  'under-offer': { label: 'Under Offer',  pill: 'p-cfm', dot: 'var(--blue)'   },
  'sold':        { label: 'Sold',         pill: 'p-out', dot: 'var(--accent)'  },
  'off-market':  { label: 'Off Market',   pill: 'p-can', dot: 'var(--muted)'   },
};

const TYPE_ICONS: Record<string, string> = {
  Apartment:  '🏢',
  Villa:      '🏡',
  Land:       '🌿',
  Commercial: '🏗',
};

const ListingsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filtered = PROPERTIES.filter(p => {
    const ms = search === '' || p.address.toLowerCase().includes(search.toLowerCase()) || p.area.toLowerCase().includes(search.toLowerCase());
    const mt = filterType === 'all' || p.type.toLowerCase() === filterType;
    const mst = filterStatus === 'all' || p.status === filterStatus;
    return ms && mt && mst;
  });

  const counts = { active: 0, 'under-offer': 0, sold: 0, 'off-market': 0 };
  PROPERTIES.forEach(p => counts[p.status]++);

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Property Listings</div>
          <div className="page-sub">All listed properties · {PROPERTIES.length} total</div>
        </div>
        <div className="header-right">
          <button className="btn-primary">+ Add Listing</button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card c1"><div className="stat-label">Total Listings</div><div className="stat-value">{PROPERTIES.length}</div><div className="badge ne">All properties</div></div>
        <div className="stat-card c2"><div className="stat-label">Active</div><div className="stat-value">{counts.active}</div><div className="badge up">Available now</div></div>
        <div className="stat-card c3"><div className="stat-label">Under Offer</div><div className="stat-value">{counts['under-offer']}</div><div className="badge ne">Negotiating</div></div>
        <div className="stat-card c4"><div className="stat-label">Sold This Month</div><div className="stat-value">{counts.sold}</div><div className="badge up">↑ 2 this week</div></div>
      </div>

      <div className="fbar">
        <input type="text" placeholder="🔍  Search address or area..." value={search} onChange={e => setSearch(e.target.value)} />
        <select value={filterType} onChange={e => setFilterType(e.target.value)}>
          <option value="all">All Types</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="land">Land</option>
          <option value="commercial">Commercial</option>
        </select>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="under-offer">Under Offer</option>
          <option value="sold">Sold</option>
          <option value="off-market">Off Market</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14 }}>
        {filtered.map(p => {
          const scfg = STATUS_CONFIG[p.status];
          return (
            <div
              key={p.id}
              className="panel"
              style={{ cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <div>
                  <div style={{ fontSize: 28 }}>{TYPE_ICONS[p.type]}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, marginTop: 6, lineHeight: 1.3 }}>{p.address}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 3 }}>{p.area}</div>
                </div>
                <span className={`pill ${scfg.pill}`} style={{ flexShrink: 0, marginLeft: 8 }}>{scfg.label}</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 14 }}>
                <div style={{ textAlign: 'center', background: 'var(--surface2)', borderRadius: 8, padding: '8px 4px' }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{p.type}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2 }}>TYPE</div>
                </div>
                <div style={{ textAlign: 'center', background: 'var(--surface2)', borderRadius: 8, padding: '8px 4px' }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{p.sqft}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2 }}>AREA</div>
                </div>
                <div style={{ textAlign: 'center', background: 'var(--surface2)', borderRadius: 8, padding: '8px 4px' }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{p.beds === '—' ? '—' : `${p.beds} BR`}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2 }}>BEDS</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: 'var(--accent)', fontWeight: 600 }}>{p.price}</div>
                <span style={{ fontSize: 11, color: 'var(--muted)' }}>{p.id}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListingsPage;
