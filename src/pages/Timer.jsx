import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { 
  CircleTimer, 
  HourglassTimer, 
  WavesTimer, 
  FireTimer, 
  EclipseTimer 
} from '../components/TimerStyles'

// Focus Mode Colors (different from Home to indicate "work mode")
const COLORS = {
  focus: '#51A1A7',      // Teal for focus/work
  focusHover: '#458B90',
  break: '#30D158',      // Green for break
  warning: '#FF9F0A',    // Orange for pause/warning
}

function Timer() {
  // Opciones de tiempo disponibles
  const WORK_OPTIONS = [15, 20, 25, 30, 45, 60]
  const BREAK_OPTIONS = [5, 10, 15, 20]

  // Estados de configuración
  const [workMinutes, setWorkMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5)
  const [showSettings, setShowSettings] = useState(false)

  // Tiempos en segundos
  const WORK_TIME = workMinutes * 60
  const BREAK_TIME = breakMinutes * 60

  // Estados del timer
  const [showWarning, setShowWarning] = useState(true)
  const [timeLeft, setTimeLeft] = useState(WORK_TIME)
  const [isRunning, setIsRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const [selectedStyle, setSelectedStyle] = useState('circle')
  const [sessionsCompleted, setSessionsCompleted] = useState(0)

  // Actualizar timeLeft cuando cambian los minutos
  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(isBreak ? BREAK_TIME : WORK_TIME)
    }
  }, [workMinutes, breakMinutes, isBreak, isRunning, WORK_TIME, BREAK_TIME])

  // Formatear tiempo
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Mensajes dinámicos
  const getMessage = useCallback(() => {
    if (!isRunning && timeLeft === (isBreak ? BREAK_TIME : WORK_TIME)) {
      return isBreak ? "Tómate un respiro, lo mereces" : "¿Listo para enfocarte?"
    }
    if (isBreak) return "Relájate, pronto volvemos"
    const progress = timeLeft / WORK_TIME
    if (progress > 0.8) return "Estás empezando fuerte 💪"
    if (progress > 0.6) return "Buen ritmo, sigue así"
    if (progress > 0.4) return "Vas a la mitad, no aflojes"
    if (progress > 0.2) return "La recta final está cerca"
    if (progress > 0.05) return "¡Casi lo logras!"
    return "Últimos segundos..."
  }, [timeLeft, isRunning, isBreak, WORK_TIME, BREAK_TIME])

  // Timer effect
  useEffect(() => {
    let interval = null
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((time) => time - 1), 1000)
    } else if (timeLeft === 0 && isRunning) {
      if (!isBreak) {
        setSessionsCompleted((s) => s + 1)
        setIsBreak(true)
        setTimeLeft(BREAK_TIME)
        setIsRunning(false)
      } else {
        setIsBreak(false)
        setTimeLeft(WORK_TIME)
        setIsRunning(false)
      }
    }
    return () => clearInterval(interval)
  }, [isRunning, timeLeft, isBreak, WORK_TIME, BREAK_TIME])

  // Controles
  const startTimer = () => setIsRunning(true)
  const pauseTimer = () => setIsRunning(false)
  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(isBreak ? BREAK_TIME : WORK_TIME)
  }
  const saveSettings = () => {
    setShowSettings(false)
    if (!isRunning) setTimeLeft(isBreak ? BREAK_TIME : WORK_TIME)
  }

  // Props del timer
  const totalTime = isBreak ? BREAK_TIME : WORK_TIME
  const progress = timeLeft / totalTime
  const isLastMinute = timeLeft <= 60 && isRunning
  const timeDisplay = formatTime(timeLeft)
  const timerProps = { progress, timeDisplay, isBreak, isRunning, isLastMinute }

  // Estilos
  const styles = [
    { id: 'circle', icon: '⭕', name: 'Círculo' },
    { id: 'hourglass', icon: '⏳', name: 'Arena' },
    { id: 'waves', icon: '🌊', name: 'Olas' },
    { id: 'fire', icon: '🔥', name: 'Fogata' },
    { id: 'eclipse', icon: '🌑', name: 'Eclipse' },
  ]

  // Render timer style
  const renderTimerStyle = () => {
    switch (selectedStyle) {
      case 'circle': return <CircleTimer {...timerProps} />
      case 'hourglass': return <HourglassTimer {...timerProps} />
      case 'waves': return <WavesTimer {...timerProps} />
      case 'fire': return <FireTimer {...timerProps} />
      case 'eclipse': return <EclipseTimer {...timerProps} />
      default: return <CircleTimer {...timerProps} />
    }
  }

  // Modal de Settings
  const SettingsModal = () => (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4">
      <div 
        className="rounded-3xl shadow-2xl p-8 max-w-md w-full animate-fade-in border"
        style={{ 
          background: 'var(--color-bg-elevated)',
          borderColor: 'var(--border-medium)'
        }}
      >
        <h3 
          className="text-2xl font-bold mb-8 text-center"
          style={{ color: 'var(--color-text)' }}
        >
          Personalizar
        </h3>

        <div className="mb-8">
          <label 
            className="block text-sm mb-4 text-center"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Duración de sesión
          </label>
          <div className="flex flex-wrap justify-center gap-3">
            {WORK_OPTIONS.map((min) => (
              <button
                key={min}
                onClick={() => setWorkMinutes(min)}
                className="w-14 h-14 rounded-2xl font-semibold text-lg transition-all duration-200"
                style={{
                  background: workMinutes === min ? COLORS.focus : 'var(--color-bg-surface)',
                  color: 'var(--color-text)',
                  boxShadow: workMinutes === min ? `0 8px 24px ${COLORS.focus}40` : 'none'
                }}
              >
                {min}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label 
            className="block text-sm mb-4 text-center"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Duración de descanso
          </label>
          <div className="flex flex-wrap justify-center gap-3">
            {BREAK_OPTIONS.map((min) => (
              <button
                key={min}
                onClick={() => setBreakMinutes(min)}
                className="w-14 h-14 rounded-2xl font-semibold text-lg transition-all duration-200"
                style={{
                  background: breakMinutes === min ? COLORS.break : 'var(--color-bg-surface)',
                  color: 'var(--color-text)',
                  boxShadow: breakMinutes === min ? `0 8px 24px ${COLORS.break}40` : 'none'
                }}
              >
                {min}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowSettings(false)}
            className="flex-1 px-6 py-4 rounded-full font-semibold transition-colors"
            style={{ 
              background: 'var(--color-bg-surface)',
              color: 'var(--color-text)'
            }}
          >
            Cancelar
          </button>
          <button
            onClick={saveSettings}
            className="flex-1 px-6 py-4 rounded-full font-semibold transition-colors"
            style={{ 
              background: COLORS.focus,
              color: 'white'
            }}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  )

  // Advertencia Pre-Sesión - Transición elegante
  if (showWarning) {
    return (
      <div 
        className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(180deg, var(--color-bg) 0%, #0D1518 100%)'
        }}
      >
        {/* Background glow transition from lime to teal */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255, 107, 53, 0.06) 0%, transparent 50%)',
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 50% 50% at 50% 100%, ${COLORS.focus}15 0%, transparent 60%)`,
          }}
        />
        
        <div className="max-w-lg text-center animate-fade-in relative z-10">
          {/* Animated icon */}
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10 animate-glow-pulse"
            style={{ 
              background: `linear-gradient(135deg, ${COLORS.focus} 0%, ${COLORS.focusHover} 100%)`,
              boxShadow: `0 0 60px ${COLORS.focus}40`
            }}
          >
            <span className="text-4xl">🎯</span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-8 tracking-tight"
            style={{ color: 'var(--color-text)' }}
          >
            Entrando en
            <br />
            <span style={{ color: COLORS.focus }}>modo focus</span>
          </h2>
          
          <p 
            className="text-xl mb-4"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <span style={{ color: COLORS.focus }} className="font-semibold">{workMinutes} minutos</span> de concentración total.
          </p>
          <p 
            className="mb-12"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Silencia tu teléfono. Cierra distracciones.
            <br />
            El ambiente se oscurecerá para ayudarte a enfocarte.
          </p>
          
          <button 
            onClick={() => setShowWarning(false)}
            className="font-semibold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 mb-6"
            style={{ 
              background: COLORS.focus,
              color: 'white',
              boxShadow: `0 0 40px ${COLORS.focus}40`
            }}
          >
            Entrar al modo focus
          </button>
          
          <div className="mt-6">
            <Link 
              to="/" 
              className="transition-colors inline-flex items-center gap-2"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Timer Principal - DARK FOCUS MODE
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative"
      style={{ background: 'var(--color-bg)' }}
    >
      {showSettings && <SettingsModal />}

      {/* Ambient glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isRunning 
            ? `radial-gradient(circle at 50% 40%, ${isBreak ? COLORS.break : COLORS.focus}15 0%, transparent 50%)`
            : 'none',
          transition: 'background 1s ease'
        }}
      />

      {/* Navigation */}
      <div className="absolute top-8 left-8">
        <Link 
          to="/" 
          className="transition-colors font-medium inline-flex items-center gap-2"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Salir
        </Link>
      </div>

      {/* Sesiones */}
      {sessionsCompleted > 0 && (
        <div 
          className="absolute top-8 right-8 px-4 py-2 rounded-full border"
          style={{ 
            background: 'var(--color-bg-elevated)',
            borderColor: 'var(--border-medium)'
          }}
        >
          <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>🍅</span>
          <span className="font-semibold ml-1" style={{ color: 'var(--color-text)' }}>{sessionsCompleted}</span>
        </div>
      )}

      {/* Modo indicator */}
      <div 
        className="mb-6 px-6 py-3 rounded-full text-sm font-semibold border"
        style={{
          background: isBreak ? `${COLORS.break}15` : `${COLORS.focus}15`,
          color: isBreak ? COLORS.break : COLORS.focus,
          borderColor: isBreak ? `${COLORS.break}30` : `${COLORS.focus}30`
        }}
      >
        {isBreak ? '☕ Descanso' : '🎯 Focus Mode'}
      </div>

      {/* Style Selector */}
      <div className="flex gap-2 mb-10">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => setSelectedStyle(style.id)}
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg transition-all duration-200 border"
            style={{
              background: selectedStyle === style.id ? COLORS.focus : 'var(--color-bg-elevated)',
              borderColor: selectedStyle === style.id ? COLORS.focus : 'var(--border-medium)',
              transform: selectedStyle === style.id ? 'scale(1.1)' : 'scale(1)',
              boxShadow: selectedStyle === style.id ? `0 8px 24px ${COLORS.focus}40` : 'none'
            }}
            title={style.name}
          >
            {style.icon}
          </button>
        ))}
      </div>

      {/* Timer Display */}
      <div className="mb-8 animate-fade-in">
        {renderTimerStyle()}
      </div>

      {/* Mensaje */}
      <p 
        className="text-center mb-10 text-lg"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {getMessage()}
      </p>

      {/* Controls */}
      <div className="flex gap-4 mb-12">
        {!isRunning ? (
          <button 
            onClick={startTimer}
            className="font-semibold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105"
            style={{ 
              background: COLORS.focus,
              color: 'white',
              boxShadow: `0 0 40px ${COLORS.focus}30`
            }}
          >
            {timeLeft === (isBreak ? BREAK_TIME : WORK_TIME) ? 'Iniciar' : 'Continuar'}
          </button>
        ) : (
          <button 
            onClick={pauseTimer}
            className="font-semibold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105"
            style={{ 
              background: COLORS.warning,
              color: 'black',
              boxShadow: `0 0 40px ${COLORS.warning}30`
            }}
          >
            Pausar
          </button>
        )}
        <button 
          onClick={resetTimer}
          className="font-semibold px-10 py-5 rounded-full text-lg transition-all duration-300 border"
          style={{ 
            background: 'var(--color-bg-elevated)',
            color: 'var(--color-text)',
            borderColor: 'var(--border-medium)'
          }}
        >
          Reiniciar
        </button>
      </div>

      {/* Sound Controls */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="text-sm mr-2" style={{ color: 'var(--color-text-muted)' }}>Sonido</span>
        <div 
          className="px-4 py-2 rounded-full text-sm font-medium border"
          style={{
            background: COLORS.focus,
            color: 'white',
            borderColor: COLORS.focus
          }}
        >
          🔇 Sin sonido
        </div>
      </div>

      {/* Config */}
      <button 
        onClick={() => setShowSettings(true)}
        className="text-sm transition-colors"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {workMinutes} min sesión · {breakMinutes} min descanso · <span className="underline" style={{ color: COLORS.focus }}>Cambiar</span>
      </button>

      {/* Footer */}
      <footer 
        className="absolute bottom-6 text-sm"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Powered by <span className="font-medium" style={{ color: COLORS.focus }}>LogicX</span>
      </footer>
    </div>
  )
}

export default Timer
