# TimeFlow - Documento de Requisitos del Producto (PRD)

---

## 👤 Información del Proyecto

| Campo | Detalle |
|-------|---------|
| **Producto** | TimeFlow |
| **Marca** | LogicX |
| **Creador / CEO** | Fabian Leyva |

---

## 📌 Resumen Ejecutivo

**Nombre del producto:** TimeFlow

**Creado por:** LogicX (Fabian Leyva)

**Descripción breve:** Una plataforma web gratuita con estética premium que ayuda a creadores de contenido a trabajar en bloques de tiempo enfocados, usando la técnica Pomodoro acompañada de mensajes reflexivos y sonidos de concentración.

**Filosofía central:** Las herramientas son solo de apoyo. La disciplina viene de uno mismo.

---

## 🎯 Objetivo del Producto

### El Problema
Los creadores de contenido sufren una **paradoja de productividad**: dependen de las mismas plataformas que los distraen para crear y publicar su contenido. Esto causa:

- No logran avanzar en sus proyectos personales
- Pierden tiempo valioso
- Procrastinan constantemente
- Se distraen fácilmente durante el proceso creativo

### Por qué las soluciones actuales no funcionan
Las herramientas de productividad existentes (como timers Pomodoro genéricos) fallan porque:

- Son frías y genéricas
- No conectan emocionalmente con el usuario
- Carecen de una estética que inspire
- No están diseñadas pensando en creadores

### La Solución: TimeFlow
TimeFlow ofrece una experiencia diferente:

- **Tono honesto y reflexivo** que recuerda al usuario que la disciplina es una decisión personal
- **Estética premium** inspirada en Apple.com y Robinhood.com
- **Diseño minimalista y profesional** que inspira a crear
- **Herramientas de apoyo** sin promesas mágicas

---

## 👤 Usuario Objetivo

### ¿Quién es?
**Creadores de contenido con marca personal** que necesitan bloques de tiempo para crear (grabar, escribir, editar, etc.), sin caer en distracciones de las mismas plataformas.

### Características del usuario
| Aspecto | Descripción |
|---------|-------------|
| **Ocupación** | Creadores de contenido con marca personal |
| **Plataformas donde publican** | TikTok, YouTube, Instagram, entre otras |
| **Etapa** | Cualquier etapa (principiante, intermedio o establecido) |
| **Momentos de mayor distracción** | Al escribir guiones, investigar y durante todo el proceso creativo |
| **Lo que buscan sentir** | Motivación y enfoque |

### Su día a día
El creador de contenido típico:
1. Se sienta a crear contenido
2. Abre las mismas plataformas donde publicará para "investigar"
3. Cae en el scroll infinito
4. Pierde tiempo sin avanzar en su proyecto
5. Termina frustrado y sin publicar

**TimeFlow interrumpe este ciclo** ofreciendo bloques de tiempo estructurados con recordatorios de que la concentración es una elección.

---

## ⚙️ Funcionalidades Clave

### 1. Mensaje de Reflexión
- **Qué es:** Un mensaje principal que el usuario ve al entrar a la plataforma
- **Propósito:** Recordar que la distracción se elimina por decisión propia y que las herramientas digitales son solo de apoyo
- **Tono:** Honesto, motivador y realista

### 2. Advertencia Pre-Sesión
- **Qué es:** Un aviso que aparece antes de iniciar el timer
- **Propósito:** Preparar mentalmente al usuario para su sesión de enfoque
- **Contenido:** Recordatorio breve sobre el compromiso que está por hacer

### 3. Timer Pomodoro
- **Qué es:** La funcionalidad central del producto
- **Configuración por defecto:** 25 minutos de trabajo + 5 minutos de descanso
- **Personalización:** El usuario puede ajustar los tiempos según sus necesidades
- **Experiencia:** Diseño limpio y visualmente atractivo

### 4. Sonidos de Concentración
- **Qué es:** Audio ambiente que acompaña la sesión de trabajo
- **Propósito:** Potenciar la concentración del usuario
- **Tipo:** Sonidos productivos y no intrusivos

### 5. Página "¿Por qué Pomodoro?"
- **Qué es:** Una página educativa separada
- **Propósito:** Explicar la técnica Pomodoro de forma clara y sencilla
- **Contenido:** Beneficios, cómo funciona y por qué es efectiva para creadores

### 6. Acceso Sin Registro
- **Qué es:** El usuario puede usar TimeFlow inmediatamente sin crear cuenta
- **Propósito:** Eliminar fricción y permitir uso instantáneo
- **Experiencia:** Entrar y comenzar a trabajar en segundos

### 7. Analytics Básicos (Backend)
- **Qué es:** Sistema de registro de visitas
- **Propósito:** Conocer cuántos usuarios por día visitan la plataforma
- **Uso:** Información interna para el creador del producto

### 8. Link de Feedback
- **Qué es:** Enlace a un formulario externo (Google Form)
- **Propósito:** Recoger opiniones y sugerencias de los usuarios
- **Ubicación:** Visible pero no intrusivo

---

## 📦 Alcance de la Primera Versión (MVP)

### Lo que SÍ incluye la v1

| Funcionalidad | Incluido | Notas |
|---------------|----------|-------|
| Mensaje de reflexión | ✅ | Página principal |
| Advertencia pre-sesión | ✅ | Antes del timer |
| Timer Pomodoro | ✅ | 25/5 por defecto + personalizable |
| Sonidos de concentración | ✅ | Audio básico |
| Página "¿Por qué Pomodoro?" | ✅ | Página separada |
| Acceso sin registro | ✅ | Uso inmediato |
| Analytics de usuarios | ✅ | Contador diario |
| Link de feedback | ✅ | Google Form externo |

### Lo que NO incluye la v1

| Funcionalidad | Razón |
|---------------|-------|
| Cuentas de usuario | Mantener simplicidad |
| Historial de sesiones | Requiere autenticación |
| Gamificación | Fuera del alcance inicial |
| App móvil | Solo web por ahora |
| Integraciones | Complejidad innecesaria |
| Funciones premium/pago | Gratis en esta fase |

### Criterios de Éxito
La primera versión será exitosa si:

1. **Los usuarios la usan:** Se registran visitas diarias en analytics
2. **Los usuarios regresan:** Hay usuarios recurrentes
3. **Los usuarios completan sesiones:** No abandonan el timer a mitad
4. **Hay feedback positivo:** Los comentarios en el formulario son favorables

*Nota: Los números específicos de éxito se definirán después del lanzamiento inicial.*

---

## 🎨 Experiencia y Estética

### Inspiración Visual
- **Apple.com:** Minimalismo, espacios en blanco, tipografía limpia
- **Robinhood.com:** Modernidad, accesibilidad, diseño limpio

### Principios de Diseño
| Principio | Descripción |
|-----------|-------------|
| **Minimalista** | Solo lo esencial, sin elementos distractores |
| **Premium** | Sensación de calidad y profesionalismo |
| **Limpio** | Espacios bien organizados y claros |
| **Inspirador** | Que motive al usuario a crear |

### Tono de Comunicación
- Motivador pero realista
- Honesto y directo
- Sin promesas mágicas
- Reflexivo y consciente

---

## 💰 Modelo de Negocio

### Fase Inicial
- **Precio:** 100% gratuito
- **Razón:** Construir comunidad y validar el producto

### Futuro
- **Plan:** Monetización cuando la comunidad crezca
- **Método:** Por definir según el crecimiento y feedback

---

## 📋 Resumen Final

**TimeFlow** es una herramienta web gratuita que ayuda a creadores de contenido a enfocarse en su trabajo mediante:

1. Un **mensaje honesto** sobre la disciplina personal
2. Un **timer Pomodoro** elegante y funcional
3. **Sonidos** que potencian la concentración
4. Una **estética premium** que inspira a crear

Todo esto sin registro, sin complicaciones y con un diseño que conecta emocionalmente con el usuario.

---

*Documento generado como resultado de sesión de definición de producto.*

**Producto:** TimeFlow  
**Marca:** LogicX  
**Creador / CEO:** Fabian Leyva
