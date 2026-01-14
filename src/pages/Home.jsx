import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      
      {/* ============ HERO SECTION - PRO SAAS ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        
        {/* Background: Subtle gradient + radial highlight */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 50% 40% at 30% 80%, rgba(255, 107, 53, 0.04) 0%, transparent 50%),
              linear-gradient(180deg, var(--color-bg) 0%, #0C0C0E 100%)
            `,
          }}
        />
        
        {/* Subtle noise texture overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Main container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          
          {/* 2-column grid: Copy + Visual */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Copy */}
            <div className="max-w-xl">
              
              {/* Badge / Eyebrow */}
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-6"
                style={{ 
                  background: 'var(--color-primary-muted)',
                  color: 'var(--color-primary)',
                  border: '1px solid rgba(255, 107, 53, 0.2)'
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Técnica Pomodoro
              </div>

              {/* Headline - 48-60px, benefit-driven */}
              <h1 
                className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6"
                style={{ color: 'var(--color-text)' }}
              >
                Termina en 2 horas lo que antes te tomaba{' '}
                <span style={{ color: 'var(--color-primary)' }}>todo el día</span>
              </h1>

              {/* Subheadline - 18-22px, specific */}
              <p 
                className="text-lg lg:text-xl leading-relaxed mb-8"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Un temporizador Pomodoro gratuito con 5 modos visuales que te ayuda a 
                trabajar en bloques de 25 minutos. Sin cuenta. Sin anuncios. Solo enfoque puro.
              </p>

              {/* CTAs with proper hierarchy */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                {/* Primary CTA */}
                <Link 
                  to="/timer"
                  className="group inline-flex items-center justify-center gap-2.5 font-semibold px-7 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ 
                    background: 'var(--color-primary)',
                    color: 'var(--color-text-on-primary)',
                    boxShadow: '0 0 0 1px rgba(255, 107, 53, 0.5), 0 4px 16px rgba(255, 107, 53, 0.25)',
                    focusRingColor: 'var(--color-primary)',
                    focusRingOffsetColor: 'var(--color-bg)'
                  }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Iniciar sesión gratis</span>
                  <svg className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                {/* Secondary CTA */}
                <Link 
                  to="/why-pomodoro"
                  className="group inline-flex items-center justify-center gap-2 font-medium px-6 py-4 rounded-xl text-base transition-all duration-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                  style={{ 
                    color: 'var(--color-text-secondary)',
                    border: '1px solid var(--border-medium)',
                  }}
                >
                  <span>Ver cómo funciona</span>
                  <svg className="w-4 h-4 opacity-50 group-hover:opacity-70 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Trust line */}
              <p 
                className="text-sm flex items-center gap-2"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Listo para usar en 2 segundos — sin crear cuenta
              </p>
            </div>

            {/* Right: Visual - Product Mock */}
            <div className="relative lg:pl-8">
              
              {/* Glow behind card */}
              <div 
                className="absolute inset-0 blur-3xl opacity-30 pointer-events-none"
                style={{ 
                  background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.3) 0%, transparent 60%)',
                }}
              />
              
              {/* Product screenshot frame */}
              <div 
                className="relative rounded-2xl overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg-surface) 100%)',
                  border: '1px solid var(--border-medium)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05) inset',
                }}
              >
                {/* Window chrome */}
                <div 
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div 
                    className="flex-1 text-center text-xs font-medium"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    TimeFlow — Focus Mode
                  </div>
                </div>
                
                {/* Timer preview */}
                <div className="p-8 lg:p-12 flex flex-col items-center">
                  {/* Mode badge */}
                  <div 
                    className="px-4 py-1.5 rounded-full text-xs font-medium mb-6"
                    style={{ 
                      background: 'rgba(81, 161, 167, 0.15)',
                      color: '#51A1A7',
                      border: '1px solid rgba(81, 161, 167, 0.3)'
                    }}
                  >
                    🎯 Focus Mode
                  </div>
                  
                  {/* Circle timer preview */}
                  <div className="relative w-48 h-48 lg:w-56 lg:h-56 mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="6"
                        fill="none"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#51A1A7"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 45}
                        strokeDashoffset={2 * Math.PI * 45 * 0.25}
                        style={{ filter: 'drop-shadow(0 0 8px rgba(81, 161, 167, 0.5))' }}
                      />
                    </svg>
                    {/* Time display */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span 
                        className="text-4xl lg:text-5xl font-light tracking-tight"
                        style={{ color: 'var(--color-text)' }}
                      >
                        18:45
                      </span>
                    </div>
                  </div>
                  
                  {/* Mock message */}
                  <p 
                    className="text-sm mb-6"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Buen ritmo, sigue así
                  </p>
                  
                  {/* Style selector preview */}
                  <div className="flex gap-2">
                    {['⭕', '⏳', '🌊', '🔥', '🌑'].map((icon, i) => (
                      <div 
                        key={i}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-sm"
                        style={{ 
                          background: i === 0 ? '#51A1A7' : 'var(--color-bg-surface)',
                          border: `1px solid ${i === 0 ? '#51A1A7' : 'var(--border-subtle)'}`,
                        }}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social proof row */}
          <div className="mt-16 lg:mt-20 pt-8 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Left: Key metrics */}
              <div className="flex items-center gap-6 lg:gap-10">
                <div className="flex items-center gap-3">
                  <div 
                    className="text-2xl lg:text-3xl font-bold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    25min
                  </div>
                  <div 
                    className="text-xs lg:text-sm leading-tight"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Sesiones de<br />enfoque óptimo
                  </div>
                </div>
                
                <div className="w-px h-8" style={{ background: 'var(--border-subtle)' }} />
                
                <div className="flex items-center gap-3">
                  <div 
                    className="text-2xl lg:text-3xl font-bold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    5
                  </div>
                  <div 
                    className="text-xs lg:text-sm leading-tight"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Estilos visuales<br />personalizables
                  </div>
                </div>
                
                <div className="w-px h-8 hidden sm:block" style={{ background: 'var(--border-subtle)' }} />
                
                <div className="hidden sm:flex items-center gap-3">
                  <div 
                    className="text-2xl lg:text-3xl font-bold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    0
                  </div>
                  <div 
                    className="text-xs lg:text-sm leading-tight"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Distracciones<br />garantizadas
                  </div>
                </div>
              </div>
              
              {/* Right: Trust badges */}
              <div 
                className="flex items-center gap-4 text-xs"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Sin datos personales</span>
                </div>
                <div className="w-px h-4" style={{ background: 'var(--border-subtle)' }} />
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span>100% gratis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURES SECTION ============ */}
      <section className="py-28 px-6 relative" style={{ background: 'var(--color-bg)' }}>
        {/* Background decoration */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.2), transparent)' }}
        />
        
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <p 
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Características
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5"
              style={{ color: 'var(--color-text)' }}
            >
              Diseñado para el{' '}
              <span className="text-glow-subtle" style={{ color: 'var(--color-primary)' }}>rendimiento</span>
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Cada detalle pensado para maximizar tu concentración y productividad.
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 - Focus */}
            <div 
              className="feature-card p-8 rounded-2xl border"
              style={{ 
                background: 'var(--color-bg-elevated)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div 
                className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'var(--color-primary-muted)' }}
              >
                <svg className="w-6 h-6" style={{ color: 'var(--color-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                Enfoque profundo
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                Sesiones de 25 minutos diseñadas para alcanzar el estado de flow y máxima concentración.
              </p>
            </div>

            {/* Card 2 - Breaks */}
            <div 
              className="feature-card p-8 rounded-2xl border"
              style={{ 
                background: 'var(--color-bg-elevated)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div 
                className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'var(--color-primary-muted)' }}
              >
                <svg className="w-6 h-6" style={{ color: 'var(--color-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                Descansos estratégicos
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                Pausas calculadas que recargan tu energía mental sin perder el momentum.
              </p>
            </div>

            {/* Card 3 - Progress */}
            <div 
              className="feature-card p-8 rounded-2xl border"
              style={{ 
                background: 'var(--color-bg-elevated)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div 
                className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'var(--color-primary-muted)' }}
              >
                <svg className="w-6 h-6" style={{ color: 'var(--color-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                Progreso visible
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                Seguimiento de sesiones completadas para medir y celebrar tu avance.
              </p>
            </div>

            {/* Card 4 - Customization */}
            <div 
              className="feature-card p-8 rounded-2xl border"
              style={{ 
                background: 'var(--color-bg-elevated)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div 
                className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'var(--color-primary-muted)' }}
              >
                <svg className="w-6 h-6" style={{ color: 'var(--color-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                Personalizable
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                Ajusta los tiempos de trabajo y descanso según tu estilo personal.
              </p>
            </div>

            {/* Card 5 - Styles */}
            <div 
              className="feature-card p-8 rounded-2xl border"
              style={{ 
                background: 'var(--color-bg-elevated)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div 
                className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'var(--color-primary-muted)' }}
              >
                <svg className="w-6 h-6" style={{ color: 'var(--color-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                5 estilos visuales
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                Elige el estilo de temporizador que mejor conecte contigo.
              </p>
            </div>

            {/* Card 6 - Minimalist */}
            <div 
              className="feature-card p-8 rounded-2xl border"
              style={{ 
                background: 'var(--color-bg-elevated)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div 
                className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'var(--color-primary-muted)' }}
              >
                <svg className="w-6 h-6" style={{ color: 'var(--color-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                Interfaz minimalista
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                Diseño limpio que elimina distracciones y te mantiene enfocado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS SECTION ============ */}
      <section 
        className="py-28 px-6 border-y relative overflow-hidden"
        style={{ 
          background: 'var(--color-bg-surface)',
          borderColor: 'var(--border-subtle)'
        }}
      >
        {/* Decorative gradient */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(255, 107, 53, 0.02) 50%, transparent 100%)',
          }}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section header */}
          <div className="text-center mb-20">
            <p 
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Metodología
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5"
              style={{ color: 'var(--color-text)' }}
            >
              Cómo funciona
            </h2>
            <p 
              className="text-lg"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Tres pasos hacia tu mejor versión productiva.
            </p>
          </div>

          {/* Steps with connector lines */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
            {/* Connector line (desktop only) */}
            <div 
              className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.3), rgba(255, 107, 53, 0.3), transparent)' }}
            />
            
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div 
                className="step-orb w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                style={{ 
                  background: 'var(--color-primary)',
                  color: 'var(--color-text-on-primary)'
                }}
              >
                1
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                Elige tu objetivo
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                Define la tarea en la que quieres enfocarte durante la sesión.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div 
                className="step-orb w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                style={{ 
                  background: 'var(--color-primary)',
                  color: 'var(--color-text-on-primary)'
                }}
              >
                2
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                Trabaja enfocado
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                25 minutos de concentración total. Sin interrupciones.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div 
                className="step-orb w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                style={{ 
                  background: 'var(--color-primary)',
                  color: 'var(--color-text-on-primary)'
                }}
              >
                3
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                Descansa y repite
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                Toma un descanso de 5 minutos y vuelve más fuerte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA SECTION ============ */}
      <section className="py-32 px-6 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
        {/* Multiple gradient layers for depth */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255, 107, 53, 0.12) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.05) 0%, transparent 40%)',
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.05) 0%, transparent 40%)',
          }}
        />
        
        {/* Decorative top line */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.4), transparent)' }}
        />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: 'var(--color-text)' }}
          >
            Tu momento es{' '}
            <span className="text-glow" style={{ color: 'var(--color-primary)' }}>ahora</span>
          </h2>
          <p 
            className="text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Cada sesión de enfoque te acerca a tus metas. 
            No esperes al momento perfecto, créalo.
          </p>
          <Link 
            to="/timer"
            className="cta-primary btn-shimmer group inline-flex items-center gap-3 font-semibold px-10 py-5 rounded-xl text-lg"
            style={{ 
              background: 'var(--color-primary)',
              color: 'var(--color-text-on-primary)',
              boxShadow: 'var(--shadow-cta)'
            }}
          >
            <span>Comenzar ahora</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer 
        className="py-12 px-6 border-t relative"
        style={{ 
          background: 'var(--color-bg)',
          borderColor: 'var(--border-subtle)'
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p style={{ color: 'var(--color-text-muted)' }} className="text-sm">
            Powered by{' '}
            <span className="font-semibold text-glow-subtle" style={{ color: 'var(--color-primary)' }}>LogicX</span>
          </p>
          <div className="flex gap-8 text-sm">
            <Link 
              to="/why-pomodoro" 
              className="link-underline transition-colors duration-300"
              style={{ color: 'var(--color-text-muted)' }}
            >
              ¿Por qué Pomodoro?
            </Link>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdjsPsbKq2vmFoANbRZ7THt29aU8_GJBKd1R5brKe8G01nOYQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline transition-colors duration-300"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Feedback
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
