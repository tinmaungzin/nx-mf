import styled from '@emotion/styled';
const Avatar = ({ avatarUrl, name, outlineColor = null, ...props }) => {
  const AvatarContainer = styled.figure`
    margin-bottom: 0;
    img {
      width: ${(props) => !props.name && '100px'};
      border-radius: 50%;
      outline: 2px solid
        ${(props) => (props.outlineColor ? outlineColor : 'white')};
      outline-offset: -1.5px;
    }
    figcaption {
      color: var(--primary-1);
    }
  `;
  return (
    <AvatarContainer outlineColor={outlineColor} {...props}>
      <img src={avatarUrl} alt='' />
      {name && (
        <figcaption className='text-center fs-6 fw-bold mt-1'>
          {name}
        </figcaption>
      )}
    </AvatarContainer>
  );
};

export default Avatar;
