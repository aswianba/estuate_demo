import {
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,OverflowMenu, OverflowMenuItem,TableContainer,TableExpandHeader 
  } from 'carbon-components-react';
  import 'carbon-components/css/carbon-components.min.css';
  


  const DataTableCustom=(props)=>{
   
return(<DataTable rows={props.rows ||[]} headers={props.headers||[]}>
    {({ rows, headers, getTableProps, getHeaderProps, getRowProps,getTableContainerProps }) => (
      <TableContainer
      title="TODO LIST"
      description="All todo list"
      {...getTableContainerProps()}>
      <Table {...getTableProps()} >
        <TableHead>
          <TableRow>
          
            {headers.map((header) => (
              <TableHeader {...getHeaderProps({ header })}>
                {header.header}
              </TableHeader>
            ))}
            <TableExpandHeader />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,idx) => (
            <TableRow {...getRowProps({ row })}>
              {row.cells.map((cell) => (
               
                <TableCell key={cell.id}>{cell.value!=undefined && cell.value.toString()} </TableCell>
              ))}
               
              <TableCell className="bx--table-column-menu">
              
                  <OverflowMenu light flipped>
                    <OverflowMenuItem itemText="EDIT" onClick={()=>props.onEdit(props.rows[idx])}>Action 1</OverflowMenuItem>
                    <OverflowMenuItem isDelete itemText="DELETE">Action 2</OverflowMenuItem>
                   
                  </OverflowMenu>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    )}
  </DataTable>) 
  }
  export default DataTableCustom;

 