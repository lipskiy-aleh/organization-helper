import styled from 'styled-components'

export const StylesTable = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  padding: 0 10px;

  > * {
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e8e8;
  }

  > h4 {
    margin-bottom: 0;
  }
`
