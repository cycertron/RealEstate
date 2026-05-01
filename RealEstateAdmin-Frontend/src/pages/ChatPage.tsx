import React, { useState } from 'react';

const ChatPage: React.FC = () => {
  const [activeName, setActiveName] = useState('Shirshak Shrestha');
  const [messages, setMessages] = useState<{[key: string]: {from: string; text: string; time: string}[]}>({
    'Shirshak Shrestha': [
      { from: 'them', text: 'Is the Lazimpat property still available?', time: '10:30 AM' },
      { from: 'me', text: 'Yes! It is available. Would you like to schedule a viewing?', time: '10:32 AM' },
      { from: 'them', text: 'Great! Can you book me for Saturday?', time: '10:33 AM' },
    ],
  });
  const [msgInput, setMsgInput] = useState('');

  const contacts = [
    { name: 'Shirshak Shrestha', initials: 'SS', preview: 'Is the property still available?', time: '2/23', unread: 4 },
    { name: 'Bipin Ranabhat',    initials: 'BR', preview: 'Thank you for the viewing',        time: '2/24', unread: 0 },
    { name: 'Kushal Khadka',     initials: 'KK', preview: 'Can we negotiate the price?',      time: '2/24', unread: 0 },
    { name: 'Luffy Gear 5',      initials: 'LG', preview: 'I\'m on my way to the viewing',    time: '3/3',  unread: 0 },
    { name: 'Stuti Acharya',     initials: 'SA', preview: 'What floor is the apartment?',     time: '2/24', unread: 0 },
    { name: 'Cycertron',       initials: 'PK', preview: 'Documents are ready to sign',      time: '2/24', unread: 0 },
    { name: 'Smriti Khadka',     initials: 'SK', preview: 'When can we do the inspection?',   time: '3/6',  unread: 0 },
  ];

  const openChat = (name: string) => {
    setActiveName(name);
    if (!messages[name]) messages[name] = [];
  };

  const sendMsg = () => {
    if (!msgInput.trim() || !activeName) return;
    const d = new Date();
    const t = d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0');
    if (!messages[activeName]) messages[activeName] = [];
    messages[activeName].push({ from: 'me', text: msgInput, time: t });
    setMessages({...messages});
    setMsgInput('');
  };

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Client Messages</div>
          <div className="page-sub">Real-time chat with buyers, sellers and tenants</div>
        </div>
      </div>
      <div className="chat-layout">
        <div className="chat-list">
          <div className="chat-srch">
            <input type="text" placeholder="🔍  Search client..." />
          </div>
          <div className="chat-rooms">
            {contacts.map((c) => (
              <div
                key={c.name}
                className={`chat-room ${c.name === activeName ? 'ac' : ''}`}
                onClick={() => openChat(c.name)}
              >
                <div className="cr-av">{c.initials}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="cr-nm">{c.name}</div>
                  <div className="cr-pv">{c.preview}</div>
                </div>
                <div className="cr-meta">
                  <div className="cr-time">{c.time}</div>
                  {c.unread > 0 && <div className="cr-unread">{c.unread}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-win">
          <div style={{ display: activeName ? 'flex' : 'none' }} className="cw-header">
            <div className="cr-av">{activeName?.split(' ')[0]?.charAt(0)}{activeName?.split(' ')[1]?.charAt(0)}</div>
            <div>
              <div style={{ fontWeight: 500, fontSize: '14px' }}>{activeName}</div>
              <div style={{ fontSize: '11px', color: 'var(--green)' }}>● Online</div>
            </div>
          </div>
          <div style={{ display: !activeName ? 'flex' : 'none' }} className="chat-empty2">
            <div style={{ fontSize: '30px' }}>◆</div>
            <div>Select a conversation</div>
            <div style={{ fontSize: '11px' }}>Choose a client from the sidebar</div>
          </div>
          <div className="chat-msgs">
            {activeName && messages[activeName]?.map((msg, i) => (
              <div key={i} className={`msg ${msg.from}`}>
                <div className="msg-b">{msg.text}</div>
                <div className="msg-t">{msg.time}</div>
              </div>
            ))}
          </div>
          {activeName && (
            <div className="chat-ibar">
              <input
                type="text"
                placeholder="Type a message..."
                value={msgInput}
                onChange={(e) => setMsgInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMsg()}
              />
              <button className="send-btn" onClick={sendMsg}>Send</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatPage;
