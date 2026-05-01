import React from 'react';

const ReviewsPage: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Client Reviews</div>
          <div className="page-sub">All feedback and ratings from buyers, sellers and tenants</div>
        </div>
      </div>
      <div className="stats-grid">
        <div className="stat-card c1">
          <div className="stat-label">Avg. Rating</div>
          <div className="stat-value">4.8 <small>/ 5</small></div>
          <div className="badge up">↑ 0.1 this month</div>
        </div>
        <div className="stat-card c2">
          <div className="stat-label">5 Star Reviews</div>
          <div className="stat-value">71</div>
          <div className="badge up">50% of total</div>
        </div>
        <div className="stat-card c3">
          <div className="stat-label">Total Reviews</div>
          <div className="stat-value">142</div>
          <div className="badge ne">All time</div>
        </div>
        <div className="stat-card c4">
          <div className="stat-label">Needs Response</div>
          <div className="stat-value">3</div>
          <div className="badge dn">Please reply</div>
        </div>
      </div>
      <div className="rv-grid">
        <div className="rv-card">
          <div className="rv-top">
            <div>
              <div className="rv-guest">Priya Sharma</div>
              <div className="rv-room2">14 Lazimpat Ave · Buyer · Apr 2026</div>
            </div>
            <div className="stars">★★★★★</div>
          </div>
          <div className="rv-text">
            "Our agent at Estatly was exceptional throughout the entire process. They found us our dream apartment in Lazimpat within two weeks, negotiated brilliantly on price, and handled all the paperwork seamlessly."
          </div>
          <div className="rv-foot">
            <span>Communication: ★★★★★</span>
            <span>Expertise: ★★★★★</span>
          </div>
        </div>
        <div className="rv-card">
          <div className="rv-top">
            <div>
              <div className="rv-guest">David Lee</div>
              <div className="rv-room2">7 Durbar Marg · Investor · Apr 2026</div>
            </div>
            <div className="stars">★★★★☆</div>
          </div>
          <div className="rv-text">
            "Very professional team. The property valuation was accurate and the legal process was handled efficiently. Would have liked faster updates during the contract stage but overall a great experience."
          </div>
          <div className="rv-foot">
            <span>Professionalism: ★★★★★</span>
            <span>Speed: ★★★☆☆</span>
          </div>
        </div>
        <div className="rv-card">
          <div className="rv-top">
            <div>
              <div className="rv-guest">Aisha Gurung</div>
              <div className="rv-room2">Baneshwor Heights · Seller · Mar 2026</div>
            </div>
            <div className="stars">★★★★★</div>
          </div>
          <div className="rv-text">
            "Sold my property 15% above my asking price thanks to Estatly's market analysis and negotiation skills. The listing photos were stunning and we had 12 viewings in the first week."
          </div>
          <div className="rv-foot">
            <span>Value: ★★★★★</span>
            <span>Marketing: ★★★★★</span>
          </div>
        </div>
        <div className="rv-card">
          <div className="rv-top">
            <div>
              <div className="rv-guest">Rajan Thapa</div>
              <div className="rv-room2">Baluwatar Land · Investor · Mar 2026</div>
            </div>
            <div className="stars">★★★☆☆</div>
          </div>
          <div className="rv-text">
            "The land deal took longer than expected due to title verification issues. The agent kept me informed but I wish they had flagged potential delays earlier. Will use Estatly again for future investments."
          </div>
          <div className="rv-foot">
            <span>Transparency: ★★★☆☆</span>
            <span>Knowledge: ★★★★☆</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;
