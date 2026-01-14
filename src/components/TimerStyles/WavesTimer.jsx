function WavesTimer({ progress, timeDisplay, isBreak, isRunning, isLastMinute }) {
  const fillColor = isBreak ? '#30D158' : '#51A1A7'
  const waterLevel = (1 - progress) * 100

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div 
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl border-4 border-[#3A3A3C] overflow-hidden bg-[#2C2C2E]"
        style={{
          boxShadow: isRunning ? `0 0 30px ${fillColor}30` : 'none'
        }}
      >
        {/* Contenedor del agua */}
        <div 
          className="absolute bottom-0 left-0 right-0 transition-all duration-1000 ease-linear"
          style={{ height: `${100 - waterLevel}%` }}
        >
          {/* Olas animadas */}
          <svg 
            className="absolute top-0 left-0 w-full" 
            viewBox="0 0 200 20" 
            preserveAspectRatio="none"
            style={{ transform: 'translateY(-50%)' }}
          >
            <path
              d={isRunning 
                ? "M0 10 Q25 0 50 10 T100 10 T150 10 T200 10 V20 H0 Z"
                : "M0 10 Q25 5 50 10 T100 10 T150 10 T200 10 V20 H0 Z"
              }
              fill={isLastMinute ? '#FF9F0A' : fillColor}
              className={isRunning ? 'animate-wave' : ''}
            />
          </svg>
          
          {/* Cuerpo del agua */}
          <div 
            className="w-full h-full transition-colors duration-300"
            style={{ 
              backgroundColor: isLastMinute ? '#FF9F0A' : fillColor,
              marginTop: '10px'
            }}
          />
        </div>

        {/* Tiempo centrado */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className={`text-6xl md:text-7xl font-light tracking-tight transition-colors duration-300 text-white`}
          style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.5)'
          }}>
            {timeDisplay}
          </span>
        </div>

        {/* Burbujas decorativas */}
        {isRunning && progress > 0.1 && (
          <>
            <div className="absolute bottom-4 left-6 w-2 h-2 rounded-full bg-white/30 animate-bubble" />
            <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-white/20 animate-bubble-slow" />
            <div className="absolute bottom-2 left-1/2 w-1.5 h-1.5 rounded-full bg-white/40 animate-bubble" />
          </>
        )}
      </div>
    </div>
  )
}

export default WavesTimer
