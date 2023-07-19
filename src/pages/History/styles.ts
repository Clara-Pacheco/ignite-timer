import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  max-height: 63.5rem;

  display: flex;
  flex-direction: column;

  font-weight: normal;

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;

  overflow-y: scroll;

  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapsed;

    min-width: 600px;

    th {
      background-color: ${({ theme }) => theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${({ theme }) => theme['gray-100']};
      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${({ theme }) => theme['gray-700']};
      border-top: 4px solid transparent;
      padding: 1rem;
      font-size: 1.4rem;
      line-height: 1.6rem;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`
