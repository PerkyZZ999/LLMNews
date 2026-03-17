import { createLogger, initLogger } from 'evlog'

let initialized = false

export function bootstrapLogging() {
  if (initialized) {
    return
  }

  initLogger({
    env: {
      service: 'llmnews-web',
      environment: import.meta.env.DEV ? 'development' : 'production',
    },
  })

  const log = createLogger({ feature: 'app-shell' })
  log.set({ phase: 'bootstrap', pathname: window.location.pathname })
  log.emit()

  initialized = true
}
