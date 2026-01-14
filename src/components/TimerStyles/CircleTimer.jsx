function CircleTimer({ progress, timeDisplay, isBreak, isRunning, isLastMinute }) {
  const strokeColor = isBreak ? '#30D158' : '#51A1A7'
  // Use absolute values with viewBox for correct SVG rendering
  const radius = 45
  const circumference = 2 * Math.PI * radius

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-64 h-64 md:w-80 md:h-80 transform -rotate-90" viewBox="0 0 100 100">
        {/* Fondo del círculo */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#3A3A3C"
          strokeWidth="6"
          fill="none"
        />
        {/* Progreso */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={isLastMinute ? '#FF9F0A' : strokeColor}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          className="transition-all duration-1000 ease-linear"
          style={{
            filter: isRunning ? `drop-shadow(0 0 12px ${strokeColor}80)` : 'none'
          }}
        />
      </svg>
      {/* Tiempo en el centro */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-6xl md:text-7xl font-light tracking-tight transition-colors duration-300 ${
          isLastMinute ? 'text-[#FF9F0A]' : 'text-white'
        }`}>
          {timeDisplay}
        </span>
      </div>
    </div>
  )
}

export default CircleTimer
