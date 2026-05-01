import React, { useEffect, useRef } from 'react';

interface RevenueSparklineProps {
  data?: number[];
  labels?: string[];
  color?: string;
}

const DEFAULT_DATA = [68, 74, 61, 82, 79, 88, 74];
const DEFAULT_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const RevenueSparkline: React.FC<RevenueSparklineProps> = ({
  data = DEFAULT_DATA,
  labels = DEFAULT_LABELS,
  color = 'var(--accent)',
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const fillRef = useRef<SVGPathElement>(null);

  const W = 420;
  const H = 120;
  const PAD = { top: 14, right: 16, bottom: 30, left: 40 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;

  const min = Math.min(...data) - 5;
  const max = Math.max(...data) + 5;
  const yScale = (v: number) => chartH - ((v - min) / (max - min)) * chartH;
  const xScale = (i: number) => (i / (data.length - 1)) * chartW;

  const points = data.map((v, i) => [xScale(i), yScale(v)] as [number, number]);
  const linePath = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ');
  const fillPath = `${linePath} L${xScale(data.length - 1)},${chartH} L0,${chartH} Z`;

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    path.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        path.style.strokeDashoffset = '0';
      });
    });
  }, [data]);

  const gradId = `spark-grad-${Math.random().toString(36).slice(2, 7)}`;

  return (
    <div className="sparkline-wrap">
      <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={color} stopOpacity="0.01" />
          </linearGradient>
        </defs>
        <g transform={`translate(${PAD.left},${PAD.top})`}>
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((t) => {
            const y = t * chartH;
            const val = Math.round(max - t * (max - min));
            return (
              <g key={t}>
                <line x1="0" y1={y} x2={chartW} y2={y} stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                <text x="-8" y={y + 4} fontSize="10" fill="var(--muted)" textAnchor="end">
                  {val}%
                </text>
              </g>
            );
          })}

          {/* Fill */}
          <path ref={fillRef} d={fillPath} fill={`url(#${gradId})`} />

          {/* Line */}
          <path
            ref={pathRef}
            d={linePath}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Dots */}
          {points.map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill={color} />
              <circle cx={x} cy={y} r="7" fill={color} fillOpacity="0.15" />
            </g>
          ))}

          {/* X labels */}
          {labels.map((lbl, i) => (
            <text key={i} x={xScale(i)} y={chartH + 18} fontSize="11" fill="var(--muted)" textAnchor="middle">
              {lbl}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default RevenueSparkline;
