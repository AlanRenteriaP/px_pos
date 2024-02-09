import React, {useEffect, useState} from 'react';
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";

type Product = {
    id: string;
    sku: string;
    product_name: string;
    has_inventory: boolean;
};
interface InventoryGridProps {
    refresh: boolean;
    area: string;
    toggleRefresh: () => void; // add this line
}

interface RowProps {
    row: Product;
    area: string;
    check_area:boolean;
    toggleRefresh: () => void; // add this line
}
const Row: React.FC<RowProps> = ({ row,area,check_area, toggleRefresh }) => {


    return (
        <React.Fragment>

            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

                <TableCell component="th" scope="row">
                    {row.product_name}
                </TableCell>
                <TableCell align="left">
                    <TextField
                        id="outlined-read-only-input"
                        label="Min Value"
                        type="number"
                        defaultValue="5"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </TableCell>
                <TableCell align="left">
                    <TextField
                        id="outlined-read-only-input"
                        label="Max Value"
                        type="number"
                        defaultValue="6"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </TableCell>
                <TableCell align="left">
                <Button variant="contained">
                    Update
                </Button>
                </TableCell>


            </TableRow>

        </React.Fragment>
    );
};


export default function InventoryGrid({ refresh, area,toggleRefresh  }: InventoryGridProps) {
    const [data, setData] = useState<Product[]>([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetchProducts(area);
    }, [refresh]);

    const fetchProducts = (area:string) => {
        fetch(`http://localhost:8080/invmanagement/get_products_by_area?area=${encodeURIComponent(area)}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="container">
            <div className="row">
                {area}
            </div>

            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Product Name</TableCell>
                        <TableCell align="left">Min</TableCell>
                        <TableCell align="left">Max</TableCell>
                        <TableCell align="left">Update</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.filter(row => row.product_name.toLowerCase().includes(search.toLowerCase()) && row.has_inventory).map((row) => (
                            <Row key={row.id} row={row} check_area={row.has_inventory} area={area} toggleRefresh={toggleRefresh} />
                        ))
                    }

                </TableBody>
            </Table>
        </div>
    )
}

