import React, {useState, useEffect, useContext} from 'react'
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
  let headerList = props.headers ?  props.headers : [];
  let rows = props.rows ? props.rows : [];
  const [rowsData] = useState(rows);

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
            rowsData.map((row,index) => {
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
