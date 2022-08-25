import * as React from "react";
import { render } from "react-dom";
import {Container,Linha,Linha2,Table1,Name} from './Table_Styles'
import { useTable, Column, useSortBy } from "react-table";

const columns: Column<Data>[] = [
  //colunas
  {
    Header: "",
    accessor: "rowns1",
    
  },

  {
    Header: "Consumo Fora de Ponta",
    columns: [
      {
        Header: "Valor",
        accessor: "valor"
      },
      {
        Header: "Horário",
        accessor: "data_age"
      }
    ]
  },





  {
    Header:"Consumo Ponta",
    columns:  [
      {
        Header:"Valor",
        accessor:"valor_CPonta",
      },
      {
        Header:"Horário",
        accessor:"data_CPonta",
     }
    ]
  },
 



{
  Header:"Consumo Reservado",
  columns: [
    { 
      Header:"Valor",
      accessor:"valor_CReservado",
    },
    {
      Header:"Horário",
      accessor:"data_CReservado",
    }
  ]
},



{
  Header:"Consumo Total",
  columns: [
    {
      Header:"Valor",
      accessor:"valor_CTotal",
    },

    {
      Header:"Horário",
      accessor:"data_CTotal",
    }
  ]
}


];


interface Data {
  valor: number;
  valor_CPonta:number;
  valor_CReservado:number;
  valor_CTotal:number;
  /////////

  data_age: string;
  data_CPonta:string;
  data_CReservado:string;
  data_CTotal:string;
  ////////

  rowns1: string;

}


const data : Data[ ] = [
  // rows

  { 
    valor: 13750000000000,
    valor_CPonta:4000000,
    valor_CReservado:5000000000,
    valor_CTotal:5600000000000000000,
    ////////////

    data_age: " 16/06/2001",
    data_CPonta:"15/05/2000",
    data_CReservado:"15/02/2005",
    data_CTotal:"18/12/2022",

    rowns1: "Máximo"
  },
  {
    valor: 9999999999999,
    valor_CPonta:4,
    valor_CReservado:5,
    valor_CTotal:56,

   ////////////
    data_age: "16/06/2001",
    data_CPonta:"15/05/2000",
    data_CReservado:"15/02/2005",
    data_CTotal:"18/12/2022",

    rowns1: "Médio"
  },
  {
    valor: 800000000,
    valor_CPonta:4,
    valor_CReservado:5,
    valor_CTotal:56,

    //////////
    data_age: "  16/06/2001",
    data_CPonta:"15/05/2000",
    data_CReservado:"15/02/2005",
    data_CTotal:"18/12/2022",

    rowns1: "Mínimo"
  },

  {
    valor: 80000000000,
    valor_CPonta:4,
    valor_CReservado:5,
    valor_CTotal:56,
    ///////////
    
    data_age: "16/06/2001",
    data_CPonta:"15/05/2000",
    data_CReservado:"15/02/2005",
    data_CTotal:"18/12/2022",

    rowns1: "Total"
  }
];

export function Table() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable<Data>({ columns, data }, useSortBy);

  return (
    
    <Container >
    <Table1 {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <Name {...headerGroup.getHeaderGroupProps()} >

            {headerGroup.headers.map((column) => (
              <Linha   
              {...column.getHeaderProps()}> 
                {column.render("Header")}
              </Linha>
            ))}
          </Name>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <Name {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <Linha2 {...cell.getCellProps()}>
                  {cell.render("Cell")}
                  </Linha2>;
              })}
            </Name>
          );
        })}
      </tbody>
    </Table1>
  
  </Container>
  )
}

