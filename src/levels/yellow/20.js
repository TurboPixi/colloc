export default {
  start: {x: 0, y: 2000},
  end: {x: 400, y: 0},
  baffles: [
    {frame: 'triangle.png', x: 0, y: 200},
    {frame: 'triangle.png', x: 0, y: 400},
    {frame: 'green.png', x: 0, y: 600, angle: 45, shadow: 315},
    {frame: 'arrow.right.png', x: 0, y: 800},
    {frame: 'green.png', x: 0, y: 1000, angle: 135, shadow: 315},

    {frame: 'blue.png', x: 200, y: 200, angle: 45},
    {frame: 'pink.png', x: 200, y: 600, angle: -45},
    {frame: 'pink.png', x: 200, y: 1000, angle: 45, shadow: 135},
    {frame: 'square.once.png', x: 200, y: 1400},
    {frame: 'blue.png', x: 200, y: 1800, angle: 45, shadow: 135},

    {frame: 'square.once.png', x: 400, y: 400},
    {frame: 'green.png', x: 400, y: 1200, angle: 45, shadow: 315},
    {frame: 'green.png', x: 400, y: 1600, angle: 135, shadow: 315},
    {frame: 'blue.png', x: 400, y: 1800, angle: -45, shadow: 45},

    {frame: 'blue.png', x: 600, y: 200, angle: -45},
    {frame: 'ring.png', x: 600, y: 400},
    {frame: 'yellow.auto.png', x: 600, y: 1200, angle: -45},
    {frame: 'ring.png', x: 600, y: 1600},

    {frame: 'triangle.png', x: 800, y: 200, angle: 90},
    {frame: 'triangle.png', x: 800, y: 400, angle: 90},
    {frame: 'pink.png', x: 800, y: 1200, angle: -45},
    {frame: 'blue.png', x: 800, y: 1600, angle: -45, shadow: 45},
    {frame: 'triangle.png', x: 800, y: 1800, angle: 180}
  ]
}