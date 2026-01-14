function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ height: '100vh' }}>
      {/* Cool gradient background - Deep Focus style */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #EDF2F4 0%, #F5F7F8 50%, #F5F7F8 100%)',
        }}
      />

      {/* Subtle teal glow - top right */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(13, 115, 119, 0.08) 0%, rgba(13, 115, 119, 0.03) 40%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'translate(20%, -30%)',
        }}
      />

      {/* Secondary glow - bottom left */}
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(13, 115, 119, 0.06) 0%, transparent 60%)',
          filter: 'blur(60px)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      {/* Minimal geometric accent - subtle amber */}
      <div 
        className="absolute top-[15%] right-[20%] w-2 h-2 rounded-full animate-pulse-slow"
        style={{
          background: 'rgba(212, 160, 23, 0.4)',
          boxShadow: '0 0 20px rgba(212, 160, 23, 0.2)',
        }}
      />

      {/* Abstract wave lines - very subtle */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-[30vh] opacity-[0.04]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <path 
          d="M0 400 L0 300 Q360 250 720 280 Q1080 310 1440 260 L1440 400 Z" 
          fill="#0D7377"
        />
        <path 
          d="M0 400 L0 340 Q360 300 720 320 Q1080 340 1440 310 L1440 400 Z" 
          fill="#0D7377"
        />
      </svg>

      {/* Floating dots - productivity feel */}
      <div className="absolute top-[25%] left-[15%] w-1 h-1 rounded-full animate-float-medium" style={{ background: 'rgba(13, 115, 119, 0.25)' }} />
      <div className="absolute top-[40%] right-[30%] w-1.5 h-1.5 rounded-full animate-float-slow" style={{ background: 'rgba(13, 115, 119, 0.20)' }} />
      <div className="absolute top-[60%] left-[70%] w-1 h-1 rounded-full animate-float-reverse" style={{ background: 'rgba(13, 115, 119, 0.15)' }} />
    </div>
  )
}

export default AnimatedBackground
