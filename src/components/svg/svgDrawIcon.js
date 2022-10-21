function SvgDrawIcon() {
    return(
      <svg initial={{opacity:0,scale:0.5}} animate={{opacity:1, scale:1}} transition={{delay:1.5,duration:0.7}}
      width="40"
      height="40"
      className="mx-4"
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="34.5"
        cy="34.5"
        r="32.5"
        stroke="#949494"
        strokeWidth="4"
      />
      <line
        x1="10.567"
        y1="31.8495"
        x2="16.3979"
        y2="21.75"
        stroke="#949494"
      />
      <line
        x1="51.433"
        y1="21.75"
        x2="57.264"
        y2="31.8495"
        stroke="#949494"
      />
      <line x1="17" y1="21.5" x2="51" y2="21.5" stroke="#949494" />
      <line
        x1="10.3536"
        y1="31.6464"
        x2="33.3536"
        y2="54.6464"
        stroke="#949494"
      />
      <line
        x1="33.8596"
        y1="55.6464"
        x2="57.8596"
        y2="31.6464"
        stroke="#949494"
      />
      <line x1="13" y1="29.5" x2="54" y2="29.5" stroke="#949494" />
    </svg>
    );
  }

export default SvgDrawIcon;