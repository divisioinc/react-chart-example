export const normalizeScartterData = (input) => {
  if (!input) {
    return null
  }

  const output = input.reduce(
    (prev, curr) => {
      return {
        x: prev.x.concat(curr.x),
        y: prev.y.concat(curr.y),
      }
    },
    { x: [], y: [] }
  )

  return output
}
