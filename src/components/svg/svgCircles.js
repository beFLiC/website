// Create svg circles, passed (x,y) coordinates and radius
function SvgCircle(props){
  return (
    <svg className="circle absolute -z-50 w-full h-full">
      <circle cx={props.x} cy={props.y} r={props.r} fill="none" stroke="#646464" strokeWidth={"1px"}/>
    </svg>
);
}

export default SvgCircle;