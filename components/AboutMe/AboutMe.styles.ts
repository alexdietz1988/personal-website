import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2em;
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  padding-block: 0.5em;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border: 1px solid hsl(0, 0%, 90%);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`;

export const Image = styled.div`
  max-width: 250px;

  img {
    max-width: 100%;
    height: auto;
  }
`;
