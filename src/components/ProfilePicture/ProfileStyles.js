import styled from 'styled-components';

export const Img = styled.img`
  border-radius: 50%;
  margin: 0 auto;
  width: 100%;
  height: auto; 
  object-fit: fill;
  filter: brightness(85%);
  box-shadow: 12px 0#00BFFF, 24px 0#7B68EE, 36px 0#8A2BE2;

  @media ${props => props.theme.breakpoints.lg} {
    width: 95%;
    height: 90%;
  }
  @media ${props => props.theme.breakpoints.md} {
    display: none;
  }
`