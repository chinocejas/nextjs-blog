import React, {useState, useEffect, useContext, useReducer} from 'react'
import AssertsValueContext, {reducer} from "../FollowAssert/AssertsValueContext";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export default function TablePortfolio(props) {

  const {state, dispatch}  = useContext(AssertsValueContext);


  let headerList = props.headers ?  props.headers : [];

  useEffect(() => {
    console.log('TablePortfolio changed');
  }, [state, dispatch]);

  
  return (
    <TableContainer>
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          {
            headerList.map((element, index) => {
              return <Th key={index}>{element}</Th>
            })
          }
        </Tr>
      </Thead>
      <Tbody>
        {
            state.list.map((row,index) => {
                return <Tr key={index}>
                  <Td>{row.currency}</Td>
                  <Td>{row.type}</Td>
                  <Td>{row.account}</Td>
                  <Td isNumeric>{row.value}</Td>
                  <Td isNumeric>{row.totalUsd}</Td>
                </Tr>
            })
        }
      </Tbody>
    </Table>
  </TableContainer>
  );
}
