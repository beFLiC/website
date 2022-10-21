// Create svg circles, passed (x,y) coordinates and radius
function SvgCircle(props){
  return (
    <svg className="circle absolute -z-50 w-full h-full">
      <circle cx={props.x} cy={props.y} r={props.r} fill="none" stroke="#949494"/>
    </svg>
);
}

export default SvgCircle;