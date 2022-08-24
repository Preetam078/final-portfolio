import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          PREETAM MONDAL's Portfolio
        </SectionTitle>
        <SectionText>
        I have the only purpose to learn the cutting edge technology and build applications from the gathered knowledge Individually or with Team.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;