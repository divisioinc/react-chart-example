export const normalizeCoordinates = (input) => {
  if (!input) {
    return null
  }

  const xPosition = 0
  const yPosition = 1

  const output = input.reduce((prev, curr) => {
    return {
      x: prev.x.concat(curr[xPosition]),
      y: prev.y.concat(curr[yPosition])
    }
  }, { x: [], y: [] })

  return output
}