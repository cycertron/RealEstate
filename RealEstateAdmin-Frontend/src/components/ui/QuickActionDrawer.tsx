import React, { useState, useEffect } from 'react';

type ActionType = 'booking' | 'checkin' | 'service' | 'complaint' | null;

interface QuickActionDrawerProps {
  open: ActionType;
  onClose: () => void;
}

const ACTION_CONFIG = {
  booking: {
    title: 'Add New Listing',
    icon: '🏠',
    color: 'var(--accent)',
    fields: [
      { label: 'Property Address', name: 'address',  type: 'text',   placeholder: 'e.g. 14 Lazimpat Ave, KTM' },
      { label: 'Property Type',    name: 'type',     type: 'select', placeholder: '', options: ['Apartment', 'Villa', 'Land', 'Commercial', 'Office'] },
      { label: 'Listing Price',    name: 'price',    type: 'text',   placeholder: 'e.g. Rs. 85L' },
      { label: 'Area (sqft/Anna)', name: 'area',     type: 'text',   placeholder: 'e.g. 1,240 sqft' },
      { label: 'Bedrooms',         name: 'beds',     type: 'text',   placeholder: 'e.g. 3 (or N/A for land)' },
      { label: 'Listing Status',   name: 'status',   type: 'select', placeholder: '', options: ['Active', 'Off Market', 'Coming Soon'] },
    ],
  },
  checkin: {
    title: 'Schedule Viewing',
    icon: '📅',
    color: 'var(--blue)',
    fields: [
      { label: 'Property Address', name: 'address',  type: 'text',   placeholder: 'Property to view' },
      { label: 'Client Name',      name: 'client',   type: 'text',   placeholder: 'Full name' },
      { label: 'Viewing Date',     name: 'date',     type: 'date',   placeholder: '' },
      { label: 'Viewing Time',     name: 'time',     type: 'text',   placeholder: 'e.g. 2:00 PM' },
      { label: 'Assigned Agent',   name: 'agent',    type: 'select', placeholder: '', options: ['Raj K.', 'Sita R.', 'Anil S.', 'Nisha T.'] },
    ],
  },
  service: {
    title: 'Log Offer',
    icon: '📝',
    color: '#9b59b6',
    fields: [
      { label: 'Property Address', name: 'address',  type: 'text',   placeholder: 'e.g. 7 Durbar Marg' },
      { label: 'Client / Buyer',   name: 'client',   type: 'text',   placeholder: 'Buyer name' },
      { label: 'Offer Amount',     name: 'amount',   type: 'text',   placeholder: 'e.g. Rs. 2.3Cr' },
      { label: 'Offer Type',       name: 'offerType',type: 'select', placeholder: '', options: ['First Offer', 'Counter Offer', 'Final Offer'] },
      { label: 'Notes',            name: 'notes',    type: 'textarea',placeholder: 'Terms, conditions...' },
    ],
  },
  complaint: {
    title: 'Add Client',
    icon: '👤',
    color: '#e67e22',
    fields: [
      { label: 'Full Name',        name: 'name',     type: 'text',   placeholder: 'Client full name' },
      { label: 'Email',            name: 'email',    type: 'text',   placeholder: 'email@example.com' },
      { label: 'Phone',            name: 'phone',    type: 'text',   placeholder: '+977-98XXXXXXXX' },
      { label: 'Client Type',      name: 'clientType',type: 'select',placeholder: '', options: ['Buyer', 'Seller', 'Investor', 'Tenant'] },
      { label: 'Budget Range',     name: 'budget',   type: 'text',   placeholder: 'e.g. Rs. 80L–1.2Cr' },
      { label: 'Preferred Areas',  name: 'areas',    type: 'textarea',placeholder: 'e.g. Lazimpat, Maharajgunj' },
    ],
  },
};

const QuickActionDrawer: React.FC<QuickActionDrawerProps> = ({ open, onClose }) => {
  const [form, setForm] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { if (open) { setForm({}); setSubmitted(false); } }, [open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!open) return null;
  const cfg = ACTION_CONFIG[open];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); }, 1800);
  };

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-panel" onClick={e => e.stopPropagation()}>
        <div className="drawer-header" style={{ borderTopColor: cfg.color }}>
          <div className="drawer-title-row">
            <span className="drawer-icon">{cfg.icon}</span>
            <h3 className="drawer-title">{cfg.title}</h3>
          </div>
          <button className="drawer-close" onClick={onClose}>✕</button>
        </div>

        {submitted ? (
          <div className="drawer-success">
            <div className="drawer-success-icon">✓</div>
            <p>Saved successfully!</p>
          </div>
        ) : (
          <form className="drawer-body" onSubmit={handleSubmit}>
            {cfg.fields.map(f => (
              <div className="form-group" key={f.name}>
                <label className="form-label">{f.label}</label>
                {f.type === 'select' ? (
                  <select className="form-select" value={form[f.name] || ''} onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}>
                    <option value="">— Select —</option>
                    {f.options?.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : f.type === 'textarea' ? (
                  <textarea className="form-input" style={{ resize: 'vertical', minHeight: 80 }} placeholder={f.placeholder} value={form[f.name] || ''} onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))} />
                ) : (
                  <input className="form-input" type={f.type} placeholder={f.placeholder} value={form[f.name] || ''} onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))} />
                )}
              </div>
            ))}
            <div className="drawer-footer">
              <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn-primary" style={{ background: cfg.color }}>Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export type { ActionType };
export default QuickActionDrawer;
