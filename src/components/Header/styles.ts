import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 8px 40px;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  a {
    width: 4.8rem;
    height: 4.8rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.white};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme['green-500']};
    }

    &.active {
      color: ${({ theme }) => theme['green-500']};
    }
  }
`
