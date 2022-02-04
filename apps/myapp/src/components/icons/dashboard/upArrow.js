function UpArrowIcon({ color = '#000' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='15'
      height='9'
      fill='none'
      viewBox='0 0 15 9'
    >
      <path
        fill='#333'
        stroke={color}
        d='M13.883 7.501a.338.338 0 00-.1-.204L7.7 1.107A.365.365 0 007.44 1a.365.365 0 00-.26.107L1.1 7.297a.336.336 0 00.013.488.366.366 0 00.507-.015l5.819-5.927 5.824 5.927c.104.11.27.144.412.082a.342.342 0 00.209-.35z'
      ></path>
    </svg>
  );
}

export default UpArrowIcon;
