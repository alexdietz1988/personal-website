'use client';
import Image from 'next/image';

import headshot from '@/assets/headshot.jpg';
import * as Styled from './page.styles';

const Home = () => (
  <Styled.Container>
    <Styled.H1>About Me</Styled.H1>
    <Styled.Content>
      <Styled.Description>
        <p>I’m a web developer at The Humane League.</p>
        <p>I was previously a philosophy professor.</p>
      </Styled.Description>
      <Styled.Image>
        <Image src={headshot} alt="Headshot of Alex Dietz" />
      </Styled.Image>
    </Styled.Content>
  </Styled.Container>
);

export default Home;
