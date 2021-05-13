import React from 'react'
import styled from 'styled-components'

import loading from './loading.svg'

const Loading = () => (
  <Container data-testid="Loading">
    <img src={loading} alt="loading" />
  </Container>
)

const Container = styled.div`
  /* position: absolute; */
  display: flex;
  justifycontent: center;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
export default Loading
