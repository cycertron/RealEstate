import React, { useState, useEffect } from 'react';

interface Activity {
  id: number;
  type: 'viewing' | 'offer' | 'closed' | 'new_listing' | 'new_client' | 'price_drop';
  message: string;
  detail?: string;
  time: string;
  isNew?: boolean;
}

const INITIAL: Activity[] = [
  { id: 1, type: 'viewing',     message: 'Viewing completed',     detail: '14 Lazimpat Ave',         time: '3m ago',  isNew: true },
  { id: 2, type: 'offer',       message: 'Offer received',        detail: 'Rs. 3.5Cr — Baneshwor',   time: '9m ago'  },
  { id: 3, type: 'new_listing', message: 'New listing added',     detail: '88 Baluwatar Road',        time: '18m ago' },
  { id: 4, type: 'new_client',  message: 'New client registered', detail: 'Sophie Kim — Buyer',       time: '25m ago' },
  { id: 5, type: 'closed',      message: 'Deal closed!',          detail: '9 Maharajgunj · Rs. 4.1Cr', time: '40m ago' },
  { id: 6, type: 'price_drop',  message: 'Price reduced',         detail: '34 Pulchowk Hts → Rs. 62L', time: '55m ago' },
];

const INCOMING: Activity[] = [
  { id: 7, type: 'viewing',     message: 'Viewing scheduled',     detail: 'Baluwatar Land · 3 PM',    time: 'Just now', isNew: true },
  { id: 8, type: 'offer',       message: 'Counter-offer sent',    detail: 'Rs. 2.3Cr — Durbar Marg',  time: 'Just now', isNew: true },
  { id: 9, type: 'new_client',  message: 'New enquiry received',  detail: 'Raj Pandey — Investor',    time: 'Just now', isNew: true },
];

const TYPE_CONFIG = {
  viewing:     { color: 'var(--blue)'   },
  offer:       { color: '#9b59b6'       },
  closed:      { color: 'var(--green)'  },
  new_listing: { color: 'var(--accent)' },
  new_client:  { color: '#e67e22'       },
  price_drop:  { color: 'var(--muted)'  },
};

const ActivityFeed: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>(INITIAL);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter(c => {
        const next = c + 1;
        if (next <= INCOMING.length) {
          const item = INCOMING[next - 1];
          setActivities(prev => [item, ...prev.slice(0, 7)]);
        }
        return next;
      });
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="activity-feed">
      <div className="activity-list">
        {activities.map(a => (
          <div key={a.id} className={`activity-row ${a.isNew ? 'activity-new' : ''}`}>
            <div className="activity-dot" style={{ background: TYPE_CONFIG[a.type].color }} />
            <div className="activity-body">
              <span className="activity-msg">{a.message}</span>
              {a.detail && <span className="activity-guest"> · {a.detail}</span>}
            </div>
            <div className="activity-time">{a.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
