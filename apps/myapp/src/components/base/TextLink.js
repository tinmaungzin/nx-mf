const TextLink = ({ icon, children, ...props }) => {
  return (
    <a
      style={{
        textDecoration: 'none',
        width: 'max-content',
        cursor: 'pointer',
      }}
      className={`link-primary d-flex align-items-center py-2 ${
        props.className ? props.className : ''
      }`}
      href='#'
      {...props}
    >
      {icon}
      <span className='ml-2'>{children}</span>
    </a>
  );
};

export default TextLink;
