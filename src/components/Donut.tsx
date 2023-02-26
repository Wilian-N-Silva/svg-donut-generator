import * as ReactDOMServer from 'react-dom/server';
import { DonutProps } from '../global/Types';

export function Donut({
  strokeWidth,
  percentage,
  showCode,
  gradients,
  gradientRotation,
}: DonutProps) {
  const sqrBox = 36;
  const circumference = 100;
  const radius = circumference / (Math.PI * 2);
  const diameter = radius * 2;
  const xPos = sqrBox / 2;
  const yPos = (sqrBox - diameter) / 2;

  const svg = (
    <svg viewBox={`0 0 ${sqrBox} ${sqrBox}`}>
      <linearGradient
        id="donutGradient"
        gradientUnits="userSpaceOnUse"
        gradientTransform={`rotate(${gradientRotation})`}
      >
        {gradients.map((gradient, index) => {
          return (
            <stop
              key={`gradienStopColor-${index}`}
              offset={`${gradient.offset ?? 0}%`}
              stopColor={`${gradient.stopColor}`}
            />
          );
        })}
      </linearGradient>
      <path
        d={`M${xPos} ${yPos}
          a ${radius} ${radius} 0 0 1 0 ${diameter}
          a ${radius} ${radius} 0 0 1 0 -${diameter}`}
        fill="none"
        stroke="#D9D9D9"
        strokeOpacity="0.1"
        strokeWidth={`${strokeWidth}`}
      />
      <path
        d={`M${xPos} ${yPos}
          a ${radius} ${radius} 0 0 1 0 ${diameter}
          a ${radius} ${radius} 0 0 1 0 -${diameter}`}
        fill="none"
        className="donut__stroke"
        stroke="url(#donutGradient)"
        strokeWidth={`${strokeWidth}`}
        strokeLinecap="round"
        strokeDasharray={`${percentage}, 100`}
      />
    </svg>
  );

  return (
    <div>
      {svg}
      {showCode && (
        <textarea
          cols={30}
          rows={30}
          value={ReactDOMServer.renderToString(svg)}
          readOnly
        ></textarea>
      )}
    </div>
  );
}
