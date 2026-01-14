import { useMemo } from 'react'

function HourglassTimer({ progress, timeDisplay, isBreak, isRunning, isLastMinute }) {
  const fillColor = isBreak ? '#30D158' : '#51A1A7'
  const activeColor = isLastMinute ? '#FF9F0A' : fillColor

  // Generate falling sand grains - more particles, varied sizes
  const sandGrains = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: i * 0.12,
      duration: 1.2 + Math.random() * 0.4,
      offsetX: (Math.random() - 0.5) * 4,
      size: 1.2 + Math.random() * 0.8,
    }))
  }, [])

  // Calculate sand levels
  const topSandHeight = 50 * progress
  const topSandY = 18 + (50 - topSandHeight)
  const bottomSandHeight = 50 * (1 - progress)
  const bottomSandY = 145 - bottomSandHeight

  // Unique ID for this instance (for clip paths)
  const instanceId = useMemo(() => Math.random().toString(36).substr(2, 9), [])

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* CSS Keyframe Animations */}
      <style>{`
        @keyframes grainFall-${instanceId} {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(45px);
            opacity: 0;
          }
        }
        
        @keyframes streamPulse-${instanceId} {
          0%, 100% {
            opacity: 0.7;
            transform: scaleX(1);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.2);
          }
        }
        
        @keyframes streamFlow-${instanceId} {
          0% {
            clip-path: inset(0 0 100% 0);
          }
          100% {
            clip-path: inset(0 0 0% 0);
          }
        }
        
        .grain-fall-${instanceId} {
          animation: grainFall-${instanceId} var(--dur) ease-in infinite;
          animation-delay: var(--del);
        }
        
        .stream-pulse-${instanceId} {
          animation: streamPulse-${instanceId} 0.4s ease-in-out infinite;
        }
        
        .anim-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      <svg 
        viewBox="0 0 100 160" 
        className="w-52 h-72 md:w-60 md:h-80"
        style={{
          filter: isRunning ? `drop-shadow(0 0 25px ${activeColor}50)` : 'none',
          transition: 'filter 0.5s ease'
        }}
      >
        <defs>
          {/* Glass gradient */}
          <linearGradient id={`glass-${instanceId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#505054" />
            <stop offset="50%" stopColor="#707074" />
            <stop offset="100%" stopColor="#505054" />
          </linearGradient>
          
          {/* Sand gradient */}
          <linearGradient id={`sand-${instanceId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={activeColor} />
            <stop offset="100%" stopColor={activeColor} stopOpacity="0.75" />
          </linearGradient>
          
          {/* Top chamber mask */}
          <clipPath id={`topClip-${instanceId}`}>
            <path d="M25 16 L75 16 L75 24 L61 56 L50 68 L39 56 L25 24 Z" />
          </clipPath>
          
          {/* Bottom chamber mask */}
          <clipPath id={`bottomClip-${instanceId}`}>
            <path d="M25 144 L75 144 L75 136 L61 104 L50 92 L39 104 L25 136 Z" />
          </clipPath>
        </defs>

        {/* ========== FRAME ========== */}
        {/* Top bar */}
        <rect x="14" y="4" width="72" height="10" rx="3" fill="#48484A" />
        <rect x="16" y="6" width="68" height="6" rx="2" fill="#58585A" />
        
        {/* Bottom bar */}
        <rect x="14" y="146" width="72" height="10" rx="3" fill="#48484A" />
        <rect x="16" y="148" width="68" height="6" rx="2" fill="#58585A" />
        
        {/* Side pillars */}
        <rect x="16" y="13" width="4" height="134" rx="2" fill="#3A3A3C" />
        <rect x="80" y="13" width="4" height="134" rx="2" fill="#3A3A3C" />

        {/* ========== TOP CHAMBER ========== */}
        <path
          d="M23 14 L77 14 L77 24 L62 58 L50 70 L38 58 L23 24 Z"
          fill="rgba(30,30,32,0.4)"
          stroke={`url(#glass-${instanceId})`}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        
        {/* Sand in top */}
        {progress > 0.02 && (
          <rect
            x="23"
            y={topSandY}
            width="54"
            height={topSandHeight}
            fill={`url(#sand-${instanceId})`}
            clipPath={`url(#topClip-${instanceId})`}
          />
        )}

        {/* ========== NECK ========== */}
        <rect x="45" y="68" width="10" height="24" rx="2" fill="#38383A" />
        <rect x="46" y="69" width="8" height="22" rx="1.5" fill="#28282A" />
        
        {/* FALLING SAND ANIMATION */}
        {isRunning && progress > 0.02 && (
          <g>
            {/* Main continuous stream */}
            <rect
              x="48.5"
              y="70"
              width="3"
              height="20"
              fill={activeColor}
              rx="1.5"
              className={`stream-pulse-${instanceId} ${!isRunning ? 'anim-paused' : ''}`}
            />
            
            {/* Falling grains through neck */}
            {sandGrains.map((grain) => (
              <circle
                key={grain.id}
                cx={50 + grain.offsetX}
                cy={70}
                r={grain.size}
                fill={activeColor}
                className={`grain-fall-${instanceId} ${!isRunning ? 'anim-paused' : ''}`}
                style={{
                  '--del': `${grain.delay}s`,
                  '--dur': `${grain.duration}s`,
                }}
              />
            ))}
            
            {/* Extra bright center stream */}
            <rect
              x="49"
              y="71"
              width="2"
              height="18"
              fill="white"
              opacity="0.3"
              rx="1"
            />
          </g>
        )}

        {/* ========== BOTTOM CHAMBER ========== */}
        <path
          d="M23 146 L77 146 L77 136 L62 102 L50 90 L38 102 L23 136 Z"
          fill="rgba(30,30,32,0.4)"
          stroke={`url(#glass-${instanceId})`}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        
        {/* Sand pile in bottom */}
        {progress < 0.98 && (
          <g>
            <rect
              x="23"
              y={bottomSandY}
              width="54"
              height={bottomSandHeight}
              fill={`url(#sand-${instanceId})`}
              clipPath={`url(#bottomClip-${instanceId})`}
            />
            
            {/* Cone/peak where sand is landing */}
            {isRunning && progress > 0.05 && progress < 0.92 && (
              <ellipse
                cx="50"
                cy={bottomSandY + 2}
                rx={Math.min(10, 4 + (1 - progress) * 10)}
                ry={Math.min(5, 2 + (1 - progress) * 5)}
                fill={activeColor}
                clipPath={`url(#bottomClip-${instanceId})`}
              />
            )}
          </g>
        )}

        {/* ========== GLASS REFLECTIONS ========== */}
        <path d="M28 18 L34 18 L32 45 L28 45 Z" fill="white" opacity="0.06" />
        <path d="M28 115 L34 115 L32 142 L28 142 Z" fill="white" opacity="0.06" />
        
        {/* Decorative waist rings */}
        <ellipse cx="50" cy="68" rx="12" ry="2.5" fill="none" stroke="#505054" strokeWidth="1" />
        <ellipse cx="50" cy="92" rx="12" ry="2.5" fill="none" stroke="#505054" strokeWidth="1" />
      </svg>

      {/* Time Display */}
      <span 
        className="text-5xl md:text-6xl font-light tracking-tight mt-6 transition-colors duration-500"
        style={{ color: isLastMinute ? '#FF9F0A' : '#FFFFFF' }}
      >
        {timeDisplay}
      </span>
    </div>
  )
}

export default HourglassTimer
