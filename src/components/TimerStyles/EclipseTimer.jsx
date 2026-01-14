function EclipseTimer({ progress, timeDisplay, isBreak, isRunning, isLastMinute }) {
  const moonColor = isBreak ? '#30D158' : '#51A1A7'
  const shadowOffset = (1 - progress) * 100

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div 
        className="relative w-64 h-64 md:w-80 md:h-80"
        style={{
          filter: isRunning ? `drop-shadow(0 0 30px ${moonColor}50)` : 'none'
        }}
      >
        {/* Aura exterior */}
        <div 
          className="absolute inset-0 rounded-full transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${moonColor}30 0%, transparent 70%)`,
            opacity: isRunning ? 1 : 0.5
          }}
        />

        {/* Luna base */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Resplandor de la luna */}
          <defs>
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={moonColor} stopOpacity="0.4" />
              <stop offset="100%" stopColor={moonColor} stopOpacity="0" />
            </radialGradient>
            <clipPath id="moonClip">
              <circle cx="50" cy="50" r="40" />
            </clipPath>
          </defs>

          {/* Resplandor */}
          <circle cx="50" cy="50" r="48" fill="url(#moonGlow)" />

          {/* Luna llena */}
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill={isLastMinute ? '#FF9F0A' : moonColor}
            className="transition-colors duration-300"
          />

          {/* Cráteres sutiles */}
          <circle cx="35" cy="40" r="5" fill="rgba(0,0,0,0.15)" />
          <circle cx="55" cy="60" r="7" fill="rgba(0,0,0,0.1)" />
          <circle cx="65" cy="35" r="4" fill="rgba(0,0,0,0.15)" />

          {/* Sombra del eclipse (se mueve de izquierda a derecha) */}
          <g clipPath="url(#moonClip)">
            <circle 
              cx={10 + shadowOffset * 0.8} 
              cy="50" 
              r="42" 
              fill="#1C1C1E"
              className="transition-all duration-1000 ease-linear"
            />
          </g>

          {/* Borde sutil */}
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            stroke={moonColor}
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>

        {/* Estrellas decorativas */}
        {isRunning && (
          <>
            <div className="absolute top-2 left-4 w-1 h-1 rounded-full bg-white/70 animate-twinkle" />
            <div className="absolute top-8 right-6 w-1.5 h-1.5 rounded-full bg-white/60 animate-twinkle-slow" />
            <div className="absolute bottom-6 left-8 w-1 h-1 rounded-full bg-white/50 animate-twinkle" />
            <div className="absolute bottom-10 right-4 w-1 h-1 rounded-full bg-white/70 animate-twinkle-slow" />
            <div className="absolute top-1/4 left-2 w-0.5 h-0.5 rounded-full bg-white/40 animate-twinkle" />
            <div className="absolute bottom-1/4 right-2 w-0.5 h-0.5 rounded-full bg-white/40 animate-twinkle-slow" />
          </>
        )}

        {/* Tiempo en el centro */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-5xl md:text-6xl font-light tracking-tight transition-colors duration-300 text-white`}
          style={{
            textShadow: '0 2px 12px rgba(0,0,0,0.8)'
          }}>
            {timeDisplay}
          </span>
        </div>
      </div>
    </div>
  )
}

export default EclipseTimer
