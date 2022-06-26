import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
} from 'chakra-paginator'

const activeStyles = {
  w: 7,
  bg: 'green.300',
  fontSize: 'sm',
  _hover: {
    bg: 'blue.300',
  },
}

const normalStyles = {
  w: 7,
  bg: 'red.300',
  fontSize: 'sm',
  _hover: {
    bg: 'green.300',
  },
}

const separatorStyles = {
  w: '100px',
  bg: 'green.200',
}

const Demo = (props) => {
  const pagesQuantity = props.total

  return (
    <ChakraProvider>
      <Paginator
        pagesQuantity={pagesQuantity}
        currentPage={props.page}
        onPageChange={(page) => props.setPage(page)}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
        activeStyles={activeStyles}
      >
        <Container align="center" justify="space-between" w="full" p={4}>
          <Previous>
            Previous
            {/* Or an icon from `react-icons` */}
          </Previous>
          <PageGroup isInline align="center" />
          <Next>
            Next
            {/* Or an icon from `react-icons` */}
          </Next>
        </Container>
      </Paginator>
    </ChakraProvider>
  )
}

export default Demo
