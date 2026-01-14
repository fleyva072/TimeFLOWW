import { Link } from 'react-router-dom'

function WhyPomodoro() {
  const steps = [
    { num: '01', title: 'Elige una tarea', desc: 'Decide qué vas a trabajar durante la sesión. Una sola cosa, clara y definida.' },
    { num: '02', title: 'Trabaja 25 minutos', desc: 'Enfócate completamente sin distracciones. Nada de notificaciones.' },
    { num: '03', title: 'Toma 5 minutos', desc: 'Levántate, estira, descansa tu mente. Aléjate de la pantalla.' },
    { num: '04', title: 'Repite el ciclo', desc: 'Después de 4 ciclos, toma un descanso largo de 15-30 minutos.' },
  ]

  const benefits = [
    { 
      icon: '🎯', 
      title: 'Reduce la parálisis', 
      desc: '25 minutos es un compromiso pequeño. Es más fácil empezar cuando sabes que hay un final definido.' 
    },
    { 
      icon: '🧠', 
      title: 'Combate la fatiga mental', 
      desc: 'Los descansos regulares mantienen tu mente fresca y creativa durante todo el día.' 
    },
    { 
      icon: '📱', 
      title: 'Limita las distracciones', 
      desc: 'Saber que tienes un descanso pronto hace más fácil ignorar las notificaciones.' 
    },
    { 
      icon: '📊', 
      title: 'Mide tu progreso', 
      desc: 'Cada pomodoro completado es una victoria. Puedes ver cuánto trabajaste realmente.' 
    },
  ]

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      
      {/* ============ HERO SECTION ============ */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background glow */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255, 107, 53, 0.06) 0%, transparent 50%)',
          }}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Navigation */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 font-medium mb-16 transition-colors duration-300 link-underline"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>

          {/* Title */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in"
            style={{ color: 'var(--color-text)' }}
          >
            ¿Por qué{' '}
            <span className="text-glow" style={{ color: 'var(--color-primary)' }}>Pomodoro</span>?
          </h1>

          {/* Intro */}
          <p 
            className="text-xl md:text-2xl leading-relaxed max-w-2xl animate-fade-in animate-delay-1"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            La técnica Pomodoro fue creada por Francesco Cirillo en los años 80. 
            Un método simple pero poderoso para gestionar tu tiempo y vencer la procrastinación.
          </p>
        </div>
      </section>

      {/* ============ HOW IT WORKS SECTION ============ */}
      <section 
        className="py-24 px-6 border-y relative"
        style={{ 
          background: 'var(--color-bg-elevated)',
          borderColor: 'var(--border-subtle)'
        }}
      >
        {/* Subtle background pattern */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.03) 0%, transparent 40%)',
          }}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section header */}
          <div className="mb-16">
            <p 
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Metodología
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--color-text)' }}
            >
              Cómo funciona
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div 
                key={i}
                className="feature-card p-8 rounded-2xl border flex items-start gap-6"
                style={{ 
                  background: 'var(--color-bg-surface)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <span 
                  className="text-4xl md:text-5xl font-bold num-glow shrink-0"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {step.num}
                </span>
                <div>
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BENEFITS SECTION ============ */}
      <section className="py-24 px-6 relative" style={{ background: 'var(--color-bg)' }}>
        {/* Decorative line */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.2), transparent)' }}
        />
        
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p 
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Beneficios
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              style={{ color: 'var(--color-text)' }}
            >
              Por qué funciona para{' '}
              <span className="text-glow-subtle" style={{ color: 'var(--color-primary)' }}>creadores</span>
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Diseñado para mentes creativas que luchan contra las distracciones digitales.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div 
                key={i}
                className="feature-card p-8 rounded-2xl border"
                style={{ 
                  background: 'var(--color-bg-elevated)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <div 
                  className="icon-container w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl"
                  style={{ background: 'var(--color-primary-muted)' }}
                >
                  {benefit.icon}
                </div>
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--color-text)' }}
                >
                  {benefit.title}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SCIENCE SECTION ============ */}
      <section 
        className="py-24 px-6 border-y"
        style={{ 
          background: 'var(--color-bg-surface)',
          borderColor: 'var(--border-subtle)'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p 
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              La Ciencia
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              Respaldado por investigación
            </h2>
          </div>
          
          <div 
            className="glass-card p-8 md:p-12 rounded-2xl text-center"
          >
            <p 
              className="text-lg md:text-xl leading-relaxed mb-6"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Estudios demuestran que el cerebro humano solo puede mantener un enfoque intenso 
              por <span style={{ color: 'var(--color-primary)' }} className="font-semibold">20-25 minutos</span> antes 
              de que la concentración decline. Los descansos breves restauran la capacidad cognitiva 
              y previenen el agotamiento mental.
            </p>
            <p 
              className="text-sm"
              style={{ color: 'var(--color-text-muted)' }}
            >
              — Basado en estudios de neurociencia cognitiva
            </p>
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="py-32 px-6 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
        {/* Background glows */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255, 107, 53, 0.1) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.05) 0%, transparent 40%)',
          }}
        />
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: 'var(--color-text)' }}
          >
            La técnica es{' '}
            <span style={{ color: 'var(--color-text-secondary)' }}>simple</span>.
          </h2>
          <p 
            className="text-xl md:text-2xl mb-12"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Lo difícil es decidir usarla.
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
            <span>Comenzar mi primera sesión</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer 
        className="py-12 px-6 border-t"
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
              to="/" 
              className="link-underline transition-colors duration-300"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Inicio
            </Link>
            <Link 
              to="/timer" 
              className="link-underline transition-colors duration-300"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Timer
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WhyPomodoro
