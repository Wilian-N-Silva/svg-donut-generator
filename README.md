```javascript
const sqrBox = 36
const circumference = 100

// radius = circumference / 2π
const radius = circumference / (Math.PI * 2)

// diameter = radius *2
const diameter = radius* 2

// x = boxSize /2
const xPos = sqrBox / 2

// y = boxSize - diameter
const yPos = (sqrBox - diameter) / 2

const strokeWidth = 4
const percentage = 70

function buildChart() {
  return `<svg viewBox="0 0 ${sqrBox} ${sqrBox}">
        <linearGradient
          id="donutGradient"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="16%" stop-color="#CE9FFC" />
          <stop offset="82%" stop-color="#7367F0" />
        </linearGradient>
      <path
        d="M${xPos} ${yPos}
          a ${radius} ${radius} 0 0 1 0 ${diameter}
          a ${radius} ${radius} 0 0 1 0 -${diameter}"
        fill="none"
        stroke="#D9D9D9"
        stroke-opacity=".1"
        stroke-width="${strokeWidth}"
      />
      <path
        d="M${xPos} ${yPos}
          a ${radius} ${radius} 0 0 1 0 ${diameter}
          a ${radius} ${radius} 0 0 1 0 -${diameter}"
        fill="none"
        stroke="url(#donutGradient)"
        stroke-width="${strokeWidth}"
        stroke-linecap="round"
        stroke-dasharray="${percentage}, 100"
      />
    </svg>`
}

const container = document.querySelector("#svgcontainer")

container.innerHTML = buildChart()
```