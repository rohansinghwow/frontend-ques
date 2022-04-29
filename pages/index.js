import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
    <Head>
      <title>Frontend Quest</title>
    </Head>
    <Container>
        <h1>Frontend Quest !</h1>
    </Container>
    </>
  )
}
const Container = styled.h1`
  color : blue;
`