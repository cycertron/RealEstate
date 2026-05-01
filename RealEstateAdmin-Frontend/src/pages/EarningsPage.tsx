import React, { useEffect, useRef } from 'react';

const MONTHLY_COMMISSION = [
  { month: 'Jan', value: 285000,  pct: 58 },
  { month: 'Feb', value: 340000,  pct: 69 },
  { month: 'Mar', value: 215000,  pct: 43 },
  { month: 'Apr', value: 490000,  pct: 100 },
  { month: 'May', value: 410000,  pct: 83 },
  { month: 'Jun', value: 380000,  pct: 77 },
  { month: 'Jul', value: 455000,  pct: 93 },
];

const PAYMENT_METHODS = [
  { label: 'Bank Transfer', pct: 52, color: 'var(--accent)' },
  { label: 'Cheque',        pct: 28, color: 'var(--green)'  },
  { label: 'Cash',          pct: 12, color: '#9b59b6'       },
  { label: 'Digital',       pct: 8,  color: '#e67e22'       },
];

const CommissionPage: React.FC = () => {
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    barsRef.current.forEach((el, i) => { if (el) el.style.setProperty('animation-delay', `${i * 0.1}s`); });
  }, []);

  let acc = 0;
  const conicStops = PAYMENT_METHODS.map((m, i) => {
    const stop = `${m.color} ${acc}% ${acc + m.pct}%`;
    acc += m.pct;
    return stop;
  }).join(', ');

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Commission & Finance</div>
          <div className="page-sub">Agency revenue, commissions, and transaction history</div>
        </div>
        <div className="header-right">
          <button className="btn-export">⬇ Export CSV</button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card c1"><div className="stat-label">Commission Earned</div><div className="stat-value">Rs. 38.2L</div><div className="badge up">↑ 18% this quarter</div></div>
        <div className="stat-card c2"><div className="stat-label">Gross Sales Volume</div><div className="stat-value">Rs. 12.4Cr</div><div className="badge up">↑ 7 deals closed</div></div>
        <div className="stat-card c3"><div className="stat-label">Avg Commission %</div><div className="stat-value">3.1%</div><div className="badge ne">Per transaction</div></div>
        <div className="stat-card c4"><div className="stat-label">Pending Payouts</div><div className="stat-value">Rs. 4.8L</div><div className="badge dn">3 pending</div></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 16, marginBottom: 20 }}>
        {/* Monthly Commission Bar Chart */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Monthly Commission</div>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>Jan – Jul · Rs.</span>
          </div>
          <div className="earnings-chart-wrap">
            {MONTHLY_COMMISSION.map((d, i) => (
              <div className="earnings-bar-group" key={d.month}>
                <div className="earnings-bar-val">{(d.value / 1000).toFixed(0)}k</div>
                <div className="earnings-bar-track">
                  <div
                    ref={el => { if (el) barsRef.current[i] = el; }}
                    className="earnings-bar-fill"
                    style={{
                      height: `${d.pct}%`,
                      background: d.pct >= 90
                        ? 'linear-gradient(180deg, var(--green), rgba(76,175,125,0.7))'
                        : 'linear-gradient(180deg, var(--accent), rgba(44,62,80,0.6))',
                    }}
                  />
                </div>
                <div className="earnings-bar-label">{d.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Method Breakdown */}
        <div className="panel">
          <div className="panel-header"><div className="panel-title">Payment Methods</div></div>
          <div className="payment-donut">
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{ width: 110, height: 110, borderRadius: '50%', background: `conic-gradient(${conicStops})`, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }} />
              <div style={{ position: 'absolute', inset: 14, borderRadius: '50%', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>100%</div>
            </div>
            <div className="payment-legend">
              {PAYMENT_METHODS.map(m => (
                <div className="pay-leg" key={m.label}>
                  <div className="pay-dot" style={{ background: m.color }} />
                  <span style={{ flex: 1 }}>{m.label}</span>
                  <span style={{ fontWeight: 600, color: 'var(--text)' }}>{m.pct}%</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 20, padding: '14px 16px', borderRadius: 10, background: 'rgba(44,62,80,0.06)', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Q3 Forecast</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: 'var(--accent)' }}>Rs. 14.8Cr</div>
            <div style={{ fontSize: 12, color: 'var(--green)', marginTop: 3 }}>↑ 19.3% projected growth</div>
          </div>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="panel">
        <div className="panel-header"><div className="panel-title">Transaction History</div></div>
        <div className="fbar">
          <select><option>Status: All</option><option>Paid</option><option>Pending</option></select>
          <select><option>Type: All</option><option>Commission</option><option>Referral</option><option>Management Fee</option></select>
          <input type="date" style={{ width: 140 }} />
          <input type="date" style={{ width: 140 }} />
          <button className="btn-export" style={{ marginLeft: 'auto' }}>⬇ Export</button>
        </div>
        <table className="tbl">
          <thead><tr><th>SN</th><th>Property</th><th>Client</th><th>Sale Price</th><th>Comm %</th><th>Commission</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            {[
              { sn: 1,  property: '9 Maharajgunj Villa',     client: 'Sujan Poudel',  price: 'Rs. 4.1Cr',  pct: '3%',   comm: 'Rs. 12.3L', status: 'p-suc', date: 'Apr 24' },
              { sn: 2,  property: '14 Lazimpat Avenue',      client: 'Priya Sharma',  price: 'Rs. 85L',    pct: '3%',   comm: 'Rs. 2.55L', status: 'p-pnd', date: 'Apr 27' },
              { sn: 3,  property: '88 Baluwatar Road',       client: 'Rajan Thapa',   price: 'Rs. 1.8Cr',  pct: '2.5%', comm: 'Rs. 4.5L',  status: 'p-suc', date: 'Mar 18' },
              { sn: 4,  property: '7 Durbar Marg Residency', client: 'David Lee',     price: 'Rs. 2.4Cr',  pct: '3%',   comm: 'Rs. 7.2L',  status: 'p-pnd', date: 'Apr 27' },
              { sn: 5,  property: '22 Baneshwor Heights',    client: 'Maya Karki',    price: 'Rs. 72L',    pct: '3%',   comm: 'Rs. 2.16L', status: 'p-suc', date: 'Mar 5'  },
              { sn: 6,  property: '101 Baneshwor Plaza',     client: 'Aisha Gurung',  price: 'Rs. 3.8Cr',  pct: '2%',   comm: 'Rs. 7.6L',  status: 'p-pnd', date: 'Apr 25' },
            ].map(r => (
              <tr key={r.sn}>
                <td style={{ color: 'var(--muted)' }}>{r.sn}</td>
                <td style={{ fontSize: 13 }}>{r.property}</td>
                <td style={{ fontWeight: 500 }}>{r.client}</td>
                <td>{r.price}</td>
                <td style={{ color: 'var(--muted)' }}>{r.pct}</td>
                <td style={{ fontWeight: 600, color: 'var(--accent)' }}>{r.comm}</td>
                <td><span className={`pill ${r.status}`}>{r.status === 'p-suc' ? 'Paid' : 'Pending'}</span></td>
                <td style={{ color: 'var(--muted)' }}>{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CommissionPage;
