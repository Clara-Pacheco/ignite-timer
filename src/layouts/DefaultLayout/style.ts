import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 112rem;
  height: 74.4rem;

  background-color: ${({ theme }) => theme['gray-800']};

  margin: 12.5rem auto;
  padding: 4rem 0 65.6rem 0;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  border: 1px solid red;
`
