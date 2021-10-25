let id: NodeJS.Timeout
export const timeout = (callback: () => void, time: number) => {
  if (id) clearTimeout(id)

  id = setTimeout(callback, time)
}

export const istouch = (event: any) => {
  if (event.sourceCapabilities.firesTouchEvents) return true

  return false
}

export const tool = { timeout, istouch }
