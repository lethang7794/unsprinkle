import styled from 'styled-components';

export const Image = ({ src, alt }) => {
  const fileName = src.split('.')[0];

  return (
    <Picture>
      <source
        type='image/avif'
        srcSet={`
          ${fileName}.avif 1x,
          ${fileName}@2x.avif 2x,
          ${fileName}@3x.avif 3x,
        `}
      />
      <source
        type='image/jpg'
        srcSet={`
          ${fileName}.jpg 1x,
          ${fileName}@2x.jpg 2x,
          ${fileName}@3x.jpg 3x,
        `}
      />
      <Img src={`${fileName}.jpg`} alt={alt} />
    </Picture>
  );
};

const Picture = styled.picture`
  height: 100%;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
