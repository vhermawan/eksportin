import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
  usePaginator
} from "chakra-paginator";

const activeStyles = {
    w: 7,
    bg: "green.300",
    fontSize: "sm",
    _hover: {
      bg: "blue.300"
    },
  };

  const normalStyles = {
    w: 7,
    bg: "red.300",
    fontSize: "sm",
    _hover: {
      bg: "green.300"
    },
  };

const separatorStyles = {
    w: "100px",
    bg: "green.200"
  };

const Demo = () => {
  const pagesQuantity = 2;
  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: 1 }
  });

  return (
    <ChakraProvider>
      <Paginator
        pagesQuantity={pagesQuantity}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
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
  );
};

export default Demo;