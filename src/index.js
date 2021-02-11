import colors from './colors.scss'

console.assert(
  Object.keys(colors).length > 0,
  'Exported colors should contains at least 1 variables',
)

document.body.innerHTML = JSON.stringify(colors)
