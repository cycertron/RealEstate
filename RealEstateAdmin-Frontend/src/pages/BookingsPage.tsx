import React, { useState } from 'react';

type Status = 'lead' | 'viewing' | 'offer' | 'contract' | 'closed' | 'lost';

interface Deal {
  id: string;
  client: string;
  property: string;
  type: string;
  price: string;
  agent: string;
  date: string;
  status: Status;
}

const INITIAL_DEALS: Deal[] = [
  { id: 'D-1081', client: 'Priya Sharma',  property: '14 Lazimpat Ave, Kathmandu', type: 'Apartment', price: 'Rs. 85L',   agent: 'Raj K.',  date: 'Apr 27', status: 'viewing'  },
  { id: 'D-1082', client: 'David Lee',     property: '7 Durbar Marg, KTM',         type: 'Villa',     price: 'Rs. 2.4Cr', agent: 'Sita R.', date: 'Apr 27', status: 'contract' },
  { id: 'D-1083', client: 'Maya Karki',    property: '22 Baneshwor Road',          type: 'Land',      price: 'Rs. 55L',   agent: 'Raj K.', date: 'Apr 27', status: 'lead'     },
  { id: 'D-1084', client: 'Raj Maharjan',  property: '5 Jhamsikhel Suites',        type: 'Apartment', price: 'Rs. 1.2Cr', agent: 'Anil S.', date: 'Apr 28', status: 'lead'     },
  { id: 'D-1079', client: 'Aisha Gurung',  property: '101 New Baneshwor Plaza',    type: 'Commercial',price: 'Rs. 3.8Cr', agent: 'Sita R.', date: 'Apr 25', status: 'offer'    },
  { id: 'D-1078', client: 'Sujan Poudel',  property: '9 Maharajgunj Villa',        type: 'Villa',     price: 'Rs. 4.1Cr', agent: 'Raj K.', date: 'Apr 24', status: 'closed'   },
  { id: 'D-1077', client: 'Karen White',   property: '34 Pulchowk Heights',        type: 'Apartment', price: 'Rs. 72L',   agent: 'Anil S.', date: 'Apr 23', status: 'lost'     },
  { id: 'D-1085', client: 'Sophie Kim',    property: '88 Baluwatar Road',          type: 'Land',      price: 'Rs. 1.8Cr', agent: 'Sita R.', date: 'Apr 29', status: 'viewing'  },
];

const STATUS_CONFIG: Record<Status, { label: string; pill: string; kc: string; color: string }> = {
  lead:     { label: 'New Lead',       pill: 'p-pnd', kc: '#f5a623',       color: '#f5a623'       },
  viewing:  { label: 'Viewing',        pill: 'p-cfm', kc: 'var(--blue)',   color: 'var(--blue)'   },
  offer:    { label: 'Offer Made',     pill: 'p-mnt', kc: '#9b59b6',       color: '#9b59b6'       },
  contract: { label: 'Under Contract', pill: 'p-avl', kc: 'var(--green)',  color: 'var(--green)'  },
  closed:   { label: 'Closed',         pill: 'p-out', kc: 'var(--accent)', color: 'var(--accent)' },
  lost:     { label: 'Lost',           pill: 'p-can', kc: 'var(--muted)',  color: 'var(--muted)'  },
};

const COLUMNS: { status: Status; title: string }[] = [
  { status: 'lead',     title: 'New Lead'       },
  { status: 'viewing',  title: 'Viewing'        },
  { status: 'offer',    title: 'Offer Made'     },
  { status: 'contract', title: 'Under Contract' },
];

const DealsPage: React.FC = () => {
  const [view, setView] = useState<'table' | 'kanban'>('table');
  const [deals, setDeals] = useState<Deal[]>(INITIAL_DEALS);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [dragId, setDragId] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<Status | null>(null);

  const filtered = deals.filter(d => {
    const matchSearch = search === '' || d.client.toLowerCase().includes(search.toLowerCase()) || d.property.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'all' || d.status === filterStatus;
    const matchType = filterType === 'all' || d.type.toLowerCase() === filterType;
    return matchSearch && matchStatus && matchType;
  });

  const handleDrop = (status: Status) => {
    if (dragId) setDeals(prev => prev.map(d => d.id === dragId ? { ...d, status } : d));
    setDragId(null); setDragOver(null);
  };

  const counts = deals.reduce((acc, d) => { acc[d.status] = (acc[d.status] || 0) + 1; return acc; }, {} as Record<string, number>);

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Deal Pipeline</div>
          <div className="page-sub">All active deals · {deals.length} total</div>
        </div>
        <div className="header-right">
          <div className="view-toggle">
            <button className={`vt-btn ${view === 'table' ? 'active' : ''}`} onClick={() => setView('table')}>☰ Table</button>
            <button className={`vt-btn ${view === 'kanban' ? 'active' : ''}`} onClick={() => setView('kanban')}>⊞ Board</button>
          </div>
          <button className="btn-primary">+ New Deal</button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card c1"><div className="stat-label">Total Deals</div><div className="stat-value">38 <small>this month</small></div><div className="badge up">↑ 12% vs last</div></div>
        <div className="stat-card c2"><div className="stat-label">Active</div><div className="stat-value">{(counts.lead || 0) + (counts.viewing || 0) + (counts.offer || 0)}</div><div className="badge up">In progress</div></div>
        <div className="stat-card c3"><div className="stat-label">Under Contract</div><div className="stat-value">{counts.contract || 0}</div><div className="badge ne">Closing soon</div></div>
        <div className="stat-card c4"><div className="stat-label">Closed This Month</div><div className="stat-value">{counts.closed || 0}</div><div className="badge up">↑ Commission earned</div></div>
      </div>

      {view === 'table' ? (
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">All Deals <span style={{ fontSize: 13, color: 'var(--muted)', fontFamily: "'DM Sans'" }}>({filtered.length})</span></div>
          </div>
          <div className="fbar">
            <input type="text" placeholder="🔍  Search client or property..." value={search} onChange={e => setSearch(e.target.value)} />
            <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="lead">New Lead</option>
              <option value="viewing">Viewing</option>
              <option value="offer">Offer Made</option>
              <option value="contract">Under Contract</option>
              <option value="closed">Closed</option>
              <option value="lost">Lost</option>
            </select>
            <select value={filterType} onChange={e => setFilterType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="land">Land</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <table className="tbl">
            <thead><tr><th>#</th><th>Client</th><th>Property</th><th>Type</th><th>Price</th><th>Agent</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              {filtered.map(d => (
                <tr key={d.id}>
                  <td style={{ color: 'var(--muted)' }}>{d.id}</td>
                  <td style={{ fontWeight: 500 }}>{d.client}</td>
                  <td style={{ maxWidth: 200, fontSize: 13 }}>{d.property}</td>
                  <td>{d.type}</td>
                  <td style={{ fontWeight: 600, color: 'var(--accent)' }}>{d.price}</td>
                  <td style={{ color: 'var(--muted)' }}>{d.agent}</td>
                  <td style={{ color: 'var(--muted)' }}>{d.date}</td>
                  <td><span className={`pill ${STATUS_CONFIG[d.status].pill}`}>{STATUS_CONFIG[d.status].label}</span></td>
                  <td><span style={{ cursor: 'pointer', color: 'var(--accent)', fontSize: 12 }}>✏ Edit</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Deal Board</div>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>Drag cards to update stage</span>
          </div>
          <div className="kanban-board">
            {COLUMNS.map(col => {
              const cards = deals.filter(d => d.status === col.status);
              const cfg = STATUS_CONFIG[col.status];
              return (
                <div
                  key={col.status}
                  className={`kanban-col ${dragOver === col.status ? 'kanban-drag-over' : ''}`}
                  onDragOver={e => { e.preventDefault(); setDragOver(col.status); }}
                  onDrop={() => handleDrop(col.status)}
                  onDragLeave={() => setDragOver(null)}
                >
                  <div className="kanban-col-header">
                    <span className="kanban-col-title" style={{ color: cfg.color }}>{col.title}</span>
                    <span className="kanban-count">{cards.length}</span>
                  </div>
                  {cards.map(d => (
                    <div
                      key={d.id}
                      className="kanban-card"
                      style={{ '--kc': cfg.kc } as React.CSSProperties}
                      draggable onDragStart={() => setDragId(d.id)}
                    >
                      <div className="kanban-guest">{d.client}</div>
                      <div className="kanban-room" style={{ fontSize: 11 }}>{d.property}</div>
                      <div className="kanban-meta">
                        <span>{d.type}</span>
                        <span style={{ color: 'var(--muted)' }}>{d.agent}</span>
                      </div>
                      <div className="kanban-amount">{d.price}</div>
                    </div>
                  ))}
                  {cards.length === 0 && (
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontSize: 13, fontStyle: 'italic', padding: '20px 0' }}>
                      Drop here
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default DealsPage;
