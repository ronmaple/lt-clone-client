import React from 'react'
import styled from 'styled-components'

const PrimaryButton = ({ label }) => (
  <Container>
    <span>{label}</span>
  </Container>
)

const Container = styled.button`
  height: 3em;
  width: 4em;
  /* background: ${(props) => props.theme.colors.platinum}; */
  background: '#DEE7E7';
`

export default PrimaryButton
