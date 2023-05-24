import React from 'react';
// @ts-ignore
import { useTable } from 'react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


interface ProductVariant {
    id: number;
    quantity: number;
    packageSize: number;

}
interface InventoryItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    stores: string[];
    variants: ProductVariant[];
}

const InventoryTable: React.FC = () => {
    const data = React.useMemo<InventoryItem[]>(
        () => [
            { id: 1, name: 'Item 1', description: 'This is item 1', price: 10, quantity: 5, variants: [
                    { id: 1, quantity: 5, packageSize: 5 }, // Variant with quantity 5 and package size 5
                    { id: 2, quantity: 10, packageSize: 10 }, // Variant with quantity 10 and package size 10
                ],
                stores: ['Store A', 'Store C'], },
            { id: 2, name: 'Item 2', description: 'This is item 2', price: 20, quantity: 10, variants: [
                    { id: 1, quantity: 5, packageSize: 5 }, // Variant with quantity 5 and package size 5
                    { id: 2, quantity: 10, packageSize: 10 }, // Variant with quantity 10 and package size 10
                ],
                stores: ['Store A', 'Store C'], },
            // Add more items here...
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            { Header: 'Name', accessor: 'name' },
            { Header: 'Description', accessor: 'description' },
            { Header: 'Price', accessor: 'price' },
            { Header: 'Quantity', accessor: 'quantity' },
            { Header: 'Stores', accessor: 'stores', Cell: ({ value }: { value: string[] }) => value.join(', ') },// Render the array of store names as a comma-separated string
            { Header: 'Variants', accessor: 'variants', Cell: ({ value }: { value: ProductVariant[] }) => value.map((variant) => `${variant.quantity} (${variant.packageSize})`).join(', ')}, // Render the variant details as "quantity (packageSize)"
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });


    return (
        <TableContainer component={Paper}>
            <Table {...getTableProps()}>
                <TableHead>
                    {headerGroups.map(headerGroup => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default InventoryTable;
