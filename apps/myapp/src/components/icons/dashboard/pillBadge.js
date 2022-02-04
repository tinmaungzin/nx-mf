function PillBadgeIcon() {
  return (
    <svg className="pill-badge" xmlns='http://www.w3.org/2000/svg' width='350' height='85' fill='none'>
      <mask
        id='a'
        style={{ maskType: 'alpha' }}
        width='350'
        height='85'
        x='0'
        y='0'
        maskUnits='userSpaceOnUse'
      >
        <rect
          width='349'
          height='84'
          x='0.5'
          y='0.5'
          fill='#19CA75'
          stroke='#000'
          rx='42'
        ></rect>
      </mask>
      <g mask='url(#a)'>
        <rect width='507' height='98' y='-7' fill='#F4E9CD' rx='49'></rect>
        <path
          fill='#F8F3E7'
          fillRule='evenodd'
          d='M119.256-198.806c101.935 63.204 139.941-14.065 181.031 46.005 33.866 49.509 165.829 316.256 35.805 303.201-65.281-6.553-95.511-55.262-156.419-91.229-71.822-42.41-197.405-26.38-218.747-97.182C-61.5-112.41 44.69-245.04 119.256-198.806z'
          clipRule='evenodd'
        ></path>
        <rect
          width='349'
          height='84'
          x='0.5'
          y='0.5'
          stroke='#999'
          rx='42'
        ></rect>
      </g>
    </svg>
  );
}

export default PillBadgeIcon;
