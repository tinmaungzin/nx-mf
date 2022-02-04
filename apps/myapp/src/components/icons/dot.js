function DotIcon({ color, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='15'
      height='15'
      fill='none'
      viewBox='0 0 15 15'
      {...props}
    >
      <rect width='15' height='15' fill={color} rx='7.5'></rect>
    </svg>
  );
}

export default DotIcon;
