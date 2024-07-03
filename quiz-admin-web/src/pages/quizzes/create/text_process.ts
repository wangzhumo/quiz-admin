export function toLines(text: string) {
  const lines = text.split(/[(\r\n)\r\n]+/)
  return lines.map(value => {
    // remove order
    value.replace(/^.*\./g, '')
    // remove ()
    value.substring(0, value.lastIndexOf('('))
    return value
  })
}
