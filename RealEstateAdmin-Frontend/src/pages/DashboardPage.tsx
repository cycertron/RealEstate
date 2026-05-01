import React, { useState, useEffect, useRef } from 'react';
import LiveClock from '../components/ui/LiveClock';
import RevenueSparkline from '../components/ui/RevenueSparkline';
import ActivityFeed from '../components/ui/ActivityFeed';
import QuickActionDrawer from '../components/ui/QuickActionDrawer';
import type { ActionType } from '../components/ui/QuickActionDrawer';

const AnimatedNumber: React.FC<{ target: number; prefix?: string; suffix?: string }> = ({ target, prefix = '', suffix = '' }) => {
  const [val, setVal] = useState(0);
  const rafRef = useRef<number>(0);
  useEffect(() => {
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - start) / 1400, 1);
      const ease = 1 - Math.pow(1 - t, 4);
      setVal(Math.round(ease * target));
      if (t < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target]);
  return <>{prefix}{val.toLocaleString()}{suffix}</>;
};

const DashboardPage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<ActionType>(null);
  const [activeType, setActiveType] = useState('All Types');

  const PIPELINE = [
    { id: 'P-101', address: '14 Lazimpat Ave',        type: 'Apartment',  client: 'Priya Sharma', price: 'Rs. 85L',    status: 'p-cfm', label: 'Viewing'        },
    { id: 'P-102', address: '7 Durbar Marg Residency', type: 'Villa',      client: 'David Lee',    price: 'Rs. 2.4Cr',  status: 'p-avl', label: 'Under Contract' },
    { id: 'P-103', address: '22 Baneshwor Heights',    type: 'Apartment',  client: 'Maya Karki',   price: 'Rs. 72L',    status: 'p-pnd', label: 'New Lead'       },
    { id: 'P-104', address: 'Jhamsikhel Land Plot',    type: 'Land',       client: 'Raj M.',       price: 'Rs. 55L',    status: 'p-pnd', label: 'New Lead'       },
    { id: 'P-105', address: '101 Baneshwor Plaza',     type: 'Commercial', client: 'Aisha Gurung', price: 'Rs. 3.8Cr',  status: 'p-mnt', label: 'Offer Made'     },
    { id: 'P-106', address: '9 Maharajgunj Villa',     type: 'Villa',      client: 'Sujan Poudel', price: 'Rs. 4.1Cr',  status: 'p-out', label: 'Closed'         },
  ];

  const types = ['All Types', 'Apartment', 'Villa', 'Land', 'Commercial'];
  const filteredPipeline = activeType === 'All Types' ? PIPELINE : PIPELINE.filter(p => p.type === activeType);

  const QUICK_ACTIONS: { label: string; icon: string; type: ActionType; desc: string }[] = [
    { label: 'New Listing',       icon: '🏠', type: 'booking',   desc: 'Add property' },
    { label: 'Schedule Viewing',  icon: '📅', type: 'checkin',   desc: 'Book showing'  },
    { label: 'Log Offer',         icon: '📝', type: 'service',   desc: 'Record offer'  },
    { label: 'Add Client',        icon: '👤', type: 'complaint', desc: 'New profile'   },
  ];

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Good Morning, Arjun 👋</div>
          <div className="page-sub">Kathmandu · Estatly Real Estate Agency</div>
        </div>
        <div className="header-right" style={{ alignItems: 'flex-end', flexDirection: 'column', gap: 6 }}>
          <LiveClock />
          <div className="btn-notif" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions-bar">
        {QUICK_ACTIONS.map(a => (
          <button key={a.type} className="qa-btn" onClick={() => setDrawerOpen(a.type)}>
            <span className="qa-icon">{a.icon}</span>
            <div>
              <div className="qa-label">{a.label}</div>
              <div className="qa-desc">{a.desc}</div>
            </div>
          </button>
        ))}
      </div>

      {/* KPI Stats */}
      <div className="stats-grid">
        <div className="stat-card c1">
          <div className="stat-label">Commission Earned</div>
          <div className="stat-value">Rs. <AnimatedNumber target={382000} /> <small>/ month</small></div>
          <div className="badge up">↑ 18.4% vs last month</div>
        </div>
        <div className="stat-card c2">
          <div className="stat-label">Active Listings</div>
          <div className="stat-value"><AnimatedNumber target={24} /> <small>/ 38</small></div>
          <div className="badge up">↑ 63% active rate</div>
        </div>
        <div className="stat-card c3">
          <div className="stat-label">Viewings Today</div>
          <div className="stat-value"><AnimatedNumber target={6} /></div>
          <div className="badge ne">→ 2 pending confirm</div>
        </div>
        <div className="stat-card c4">
          <div className="stat-label">Pending Offers</div>
          <div className="stat-value"><AnimatedNumber target={5} /></div>
          <div className="badge dn">↑ 2 new today</div>
        </div>
      </div>

      {/* Mid Metrics */}
      <div className="mid-row">
        <div className="mini-m">
          <div className="m-icon mi1">🔔</div>
          <div>
            <div className="m-val"><AnimatedNumber target={14} /> new</div>
            <div className="m-lbl">Enquiries Today</div>
          </div>
        </div>
        <div className="mini-m">
          <div className="m-icon mi2">💰</div>
          <div>
            <div className="m-val">Rs. 85L avg</div>
            <div className="m-lbl">Avg Property Value</div>
          </div>
        </div>
        <div className="mini-m">
          <div className="m-icon mi3">📋</div>
          <div>
            <div className="m-val"><AnimatedNumber target={3} /></div>
            <div className="m-lbl">Deals Closing This Week</div>
          </div>
        </div>
      </div>

      {/* Commission Trend Sparkline */}
      <div className="panel" style={{ marginBottom: 20 }}>
        <div className="panel-header">
          <div className="panel-title">Commission Trend</div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span className="sparkline-legend-dot" />
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>Weekly commission — last 7 days</span>
          </div>
        </div>
        <RevenueSparkline
          data={[55, 62, 48, 74, 81, 88, 76]}
          labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        />
      </div>

      {/* Pipeline + Donut + Activity */}
      <div className="three-col-layout">
        {/* Pipeline Table */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Property Pipeline</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {types.map(t => (
                <button key={t} onClick={() => setActiveType(t)} className={`floor-btn ${activeType === t ? 'floor-btn-active' : ''}`}>
                  {t === 'All Types' ? 'All' : t}
                </button>
              ))}
            </div>
          </div>
          <table className="tbl">
            <thead><tr><th>ID</th><th>Property</th><th>Type</th><th>Client</th><th>Price</th><th>Stage</th></tr></thead>
            <tbody>
              {filteredPipeline.map(p => (
                <tr key={p.id}>
                  <td style={{ color: 'var(--muted)', fontSize: 12 }}>{p.id}</td>
                  <td style={{ fontSize: 13 }}>{p.address}</td>
                  <td style={{ fontSize: 13 }}>{p.type}</td>
                  <td>{p.client}</td>
                  <td style={{ fontFamily: "'Playfair Display', serif", color: 'var(--accent)', fontWeight: 600 }}>{p.price}</td>
                  <td><span className={`pill ${p.status}`}>{p.label}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right col */}
        <div className="right-col">
          {/* Listing Status Donut */}
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">Listings</div>
              <span style={{ fontSize: 11, color: 'var(--muted)' }}>Status split</span>
            </div>
            <div className="donut-wrap">
              <svg className="donut" width="120" height="120" viewBox="0 0 120 120">
                <circle className="trk" cx="60" cy="60" r="50" />
                <circle className="fll" cx="60" cy="60" r="50" />
              </svg>
              <div className="donut-ctr">
                <div className="donut-pct">63%</div>
                <div className="donut-lbl2">ACTIVE</div>
              </div>
            </div>
            <div className="legend">
              <div className="leg-i"><div className="leg-d" style={{ background: 'var(--accent)' }} />Active 24</div>
              <div className="leg-i"><div className="leg-d" style={{ background: 'var(--border)' }} />Other 14</div>
            </div>
          </div>

          {/* Today's Viewings */}
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">Today's Viewings</div>
              <span style={{ fontSize: 11, color: 'var(--muted)' }}>6 total</span>
            </div>
            <div className="cin-list">
              {[
                { initials: 'PS', name: 'Priya Sharma',  detail: '14 Lazimpat Ave · 10:30 AM', time: 'Confirmed' },
                { initials: 'DL', name: 'David Lee',     detail: '7 Durbar Marg · 2:00 PM',    time: '2:00 PM'   },
                { initials: 'MK', name: 'Maya Karki',    detail: '22 Baneshwor Hts · 4:30 PM', time: '4:30 PM'   },
              ].map(v => (
                <div key={v.name} className="cin-row">
                  <div className="g-av">{v.initials}</div>
                  <div>
                    <div className="g-nm">{v.name}</div>
                    <div className="g-rm">{v.detail}</div>
                  </div>
                  <div className="c-tm">{v.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="panel activity-panel">
          <div className="panel-header">
            <div className="panel-title">Live Activity</div>
            <span className="pulse-badge">● LIVE</span>
          </div>
          <ActivityFeed />
        </div>
      </div>

      <QuickActionDrawer open={drawerOpen} onClose={() => setDrawerOpen(null)} />
    </>
  );
};

export default DashboardPage;
