import React from 'react';
import { AiFillGithub, AiOutlineCopyrightCircle, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:801-889-7179">801-889-7179</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jihyuk.sung@gmail.com">jihyuk.sung@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <AiOutlineCopyrightCircle size="2rem" />
          <Slogan>A[w]/2022</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.github.com/kuyhijsung/" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href ="https://www.linkedin.com/in/kuyhijsung/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
