import * as React from "react";
import { render } from "react-dom";

import { useTable, Column, useSortBy } from "react-table";

import {Name,Name2, Linha, Linha2} from "./Table_Styles";

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
    valor: 0,
    valor_CPonta:4,
    valor_CReservado:5,
    valor_CTotal:56,
    ////////////

    data_age: " 16/06/2001",
    data_CPonta:"15/05/2000",
    data_CReservado:"15/02/2005",
    data_CTotal:"18/12/2022",

    rowns1: "Máximo"
  },
  {
    valor: 99,
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
    valor: 8,
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
    valor: 8,
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
    <Name {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <Name2  {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Linha   
              {...column.getHeaderProps()}> 
                {column.render("Header")}
              </Linha>
            ))}
          </Name2>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <Name2 {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <Linha2 {...cell.getCellProps()}>{cell.render("Cell")}</Linha2>;
              })}
            </Name2>
          );
        })}
      </tbody>
    </Name>
  );
}

