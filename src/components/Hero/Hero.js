import React from 'react';
import { Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionText main center>
        Hi there! I'm...     
      </SectionText>
      <SectionTitle>
        Andy White.
      </SectionTitle>
      <SectionText>
        An up-and-coming Fullstack Web Developer passionate about creating interactive applications and experiences on the web. 
      </SectionText>
      <br />
      <Button onClick={() => window.location = "assets/Andy-White-Resume.pdf"}>Résumé</Button>
    </LeftSection>
  </Section>
);

export default Hero;