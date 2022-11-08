function SvgLogo(){
    return (
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="157.71 288.18 764.59 503.63" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse" fy="90%" gradientTransform="rotate(-11)">
          <stop offset={0} style={{stopColor: '#2F2A7B'}} />
          <stop offset={1} style={{stopColor: '#39B54A'}} />
        </linearGradient>
        
        <mask id="svg-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={1080} height={1080}>
          <path id="pathsvg" d="M169,786.34Q363.359996,175.978707,899.999998,336.45q-179.120002,587.259106-529.72,350.82q69.719998-251.25,299.72-209.26" fill="none" strokeWidth={35} strokeLinecap="round" strokeLinejoin="miter" />
        </mask>
      </defs>
  
      <g mask="url(#svg-mask)">
        <rect x={0} y={0} width={1080} height={1080} fill="#D6D6D6"/>
        <rect id="svg-gradient" x={0} y={0} width={1080} height={1080} fill="url(#gradient)" />
      </g>
    </svg>
    );
  }

export default SvgLogo;