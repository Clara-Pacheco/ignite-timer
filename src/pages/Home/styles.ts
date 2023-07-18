import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6.7rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.8rem;
  font-weight: bold;
  flex-wrap: wrap;
`

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 16rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    width: 12.8rem;
    height: 19.8rem;
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Separator = styled.div`
  margin-top: -2.5rem;
  color: ${({ theme }) => theme['green-500']};

  /* width: 4rem; */
  overflow: hidden;

  display: flex;
  justify-content: center;
`
