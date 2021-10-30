export const istouch = (event: any) => {
  if (event.sourceCapabilities && event.sourceCapabilities.firesTouchEvents) {
    return true
  } else {
    return false
  }
}
