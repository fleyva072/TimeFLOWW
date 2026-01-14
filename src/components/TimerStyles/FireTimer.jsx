function FireTimer({ progress, timeDisplay, isBreak, isRunning, isLastMinute }) {
  const fireIntensity = progress
  const fireHeight = 40 + (progress * 60)
  
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative w-64 h-72 md:w-72 md:h-80 flex flex-col items-center justify-end">
        
        {/* Llamas */}
        <svg 
          viewBox="0 0 100 120" 
          className="w-44 h-52 md:w-52 md:h-60 mb-2"
          style={{
            filter: isRunning ? 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.6))' : 'none',
            opacity: 0.3 + (fireIntensity * 0.7)
          }}
        >
          {/* Llama principal (naranja) */}
          <path
            d={`M50 ${120 - fireHeight} 
                Q30 ${100 - fireHeight * 0.5} 35 80 
                Q25 90 30 100
                Q35 110 40 115
                L60 115
                Q65 110 70 100
                Q75 90 65 80
                Q70 ${100 - fireHeight * 0.5} 50 ${120 - fireHeight}`}
            fill="#F97316"
            className={isRunning ? 'animate-flicker' : ''}
          />
          
          {/* Llama interior (amarilla) */}
          <path
            d={`M50 ${130 - fireHeight * 0.9} 
                Q40 ${110 - fireHeight * 0.4} 42 90 
                Q38 100 42 108
                L58 108
                Q62 100 58 90
                Q60 ${110 - fireHeight * 0.4} 50 ${130 - fireHeight * 0.9}`}
            fill="#FBBF24"
            className={isRunning ? 'animate-flicker-fast' : ''}
          />
          
          {/* Centro de la llama (blanco/amarillo claro) */}
          <path
            d={`M50 ${135 - fireHeight * 0.7} 
                Q45 ${120 - fireHeight * 0.3} 46 100 
                Q44 105 47 110
                L53 110
                Q56 105 54 100
                Q55 ${120 - fireHeight * 0.3} 50 ${135 - fireHeight * 0.7}`}
            fill="#FEF3C7"
            className={isRunning ? 'animate-flicker-fast' : ''}
          />
        </svg>

        {/* Troncos */}
        <svg viewBox="0 0 100 30" className="w-44 md:w-52">
          {/* Tronco izquierdo */}
          <rect x="15" y="10" width="35" height="8" rx="4" fill="#57534E" transform="rotate(-15 32 14)" />
          {/* Tronco derecho */}
          <rect x="50" y="10" width="35" height="8" rx="4" fill="#78716C" transform="rotate(15 68 14)" />
          {/* Tronco central */}
          <rect x="35" y="18" width="30" height="6" rx="3" fill="#57534E" />
        </svg>

        {/* Chispas */}
        {isRunning && progress > 0.2 && (
          <div className="absolute top-0 left-0 right-0 h-32">
            <div className="absolute top-8 left-1/4 w-1 h-1 rounded-full bg-orange-400 animate-spark" />
            <div className="absolute top-4 right-1/3 w-1.5 h-1.5 rounded-full bg-yellow-400 animate-spark-slow" />
            <div className="absolute top-12 left-1/2 w-1 h-1 rounded-full bg-orange-300 animate-spark" />
          </div>
        )}

        {/* Brasas (cuando casi se acaba) */}
        {progress < 0.2 && (
          <div className="absolute bottom-12 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          </div>
        )}
      </div>

      {/* Tiempo debajo */}
      <span className={`text-5xl md:text-6xl font-light tracking-tight mt-2 transition-colors duration-300 ${
        isLastMinute ? 'text-[#FF9F0A]' : 'text-white'
      }`}>
        {timeDisplay}
      </span>
    </div>
  )
}

export default FireTimer
