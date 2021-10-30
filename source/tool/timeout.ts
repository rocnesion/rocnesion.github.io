let id: NodeJS.Timeout

export const timeout = (callback: () => void, time: number) => {
  if (id) clearTimeout(id)

  id = setTimeout(callback, time)
}
