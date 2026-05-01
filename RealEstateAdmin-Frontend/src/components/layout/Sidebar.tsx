import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<string[]>(['main', 'properties', 'business']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname.includes(path);

  const NavItem = ({ label, path, icon }: { label: string; path: string; icon: string }) => (
    <a
      onClick={() => navigate(path)}
      style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '8px 14px', marginLeft: '8px', marginTop: '6px',
        borderRadius: '8px', fontSize: '13px', textDecoration: 'none',
        color: isActive(path) ? 'var(--accent)' : 'var(--text)',
        background: isActive(path) ? 'rgba(44,62,80,0.1)' : 'transparent',
        border: isActive(path) ? '1px solid rgba(44,62,80,0.2)' : 'none',
        transition: 'all 0.2s', cursor: 'pointer',
      }}
    >
      <span style={{ fontSize: '16px' }}>{icon}</span>
      <span>{label}</span>
    </a>
  );

  const SectionHeader = ({ id, label }: { id: string; label: string }) => (
    <div
      onClick={() => toggleSection(id)}
      style={{
        padding: '12px 14px', fontSize: '10px', letterSpacing: '2px',
        textTransform: 'uppercase', color: 'var(--muted)', cursor: 'pointer',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginTop: '16px',
      }}
    >
      <span>{label}</span>
      <span style={{ transition: 'transform 0.2s', transform: expandedSections.includes(id) ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
    </div>
  );

  return (
    <div style={{
      width: '240px', height: '100vh', background: 'var(--surface)',
      borderRight: '1px solid var(--border)', display: 'flex',
      flexDirection: 'column', overflow: 'hidden', overflowY: 'auto',
    }}>
      {/* Logo */}
      <div style={{ padding: '16px 14px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '1px' }}>
          Estatly
        </div>
        <div style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '2px', letterSpacing: '2px' }}>
          REAL ESTATE CRM
        </div>
      </div>

      {/* Menu */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <SectionHeader id="main" label="Main" />
        {expandedSections.includes('main') && (
          <div>
            <NavItem label="Dashboard"  path="/dashboard" icon="■" />
            <NavItem label="Deals"      path="/bookings"  icon="◈" />
            <NavItem label="Clients"    path="/guests"    icon="●" />
            <NavItem label="Messages"   path="/chat"      icon="◆" />
          </div>
        )}

        <SectionHeader id="properties" label="Properties" />
        {expandedSections.includes('properties') && (
          <div>
            <NavItem label="Listings"   path="/rooms"     icon="🏠" />
            <NavItem label="Reviews"    path="/reviews"   icon="★" />
          </div>
        )}

        <SectionHeader id="business" label="Business" />
        {expandedSections.includes('business') && (
          <div>
            <NavItem label="Commission" path="/earnings"  icon="💰" />
            <NavItem label="Reports"    path="/reports"   icon="▲" />
            <NavItem label="Settings"   path="/settings"  icon="⚙" />
          </div>
        )}
      </div>

      {/* Profile */}
      <div style={{ padding: '12px 14px', borderTop: '1px solid var(--border)', fontSize: '12px' }}>
        <div style={{ color: 'var(--text)', fontWeight: 500 }}>Admin</div>
        <div style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '2px' }}>admin@estatly.com</div>
      </div>
    </div>
  );
};

export default Sidebar;
