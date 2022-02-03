import styled from 'styled-components';

export const Img = styled.img`
  border-radius: 50%;
  margin: 0 auto;
  width: 100%;
  height: 90%; 
  object-fit: fill;
  filter: brightness(85%);
  box-shadow: 12px 0#00BFFF, 24px 0#7B68EE, 36px 0#8A2BE2;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`