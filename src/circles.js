// Create svg circles, passed (x,y) coordinates and radius
function Circle(props){
  return (
    <svg className="circle hidden absolute z-30 w-full h-full">
      <circle cx={props.x} cy={props.y} r={props.r} fill="none" stroke="#949494"/>
    </svg>
);
}

export default Circle;