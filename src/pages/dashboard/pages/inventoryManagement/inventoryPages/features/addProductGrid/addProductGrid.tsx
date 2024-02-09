import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

type Product = {
    id: string;
    sku: string;
    product_name: string;
    has_inventory: boolean;
};

interface RowProps {
    row: Product;
    area: string;
    check_area:boolean;
    toggleRefresh: () => void; // add this line
}

const Row: React.FC<RowProps> = ({ row,area,check_area ,toggleRefresh}) => {
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(check_area);

    const handleCheckBox = (id: string, area: string) => async (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        console.log(`You clicked the checkbox with id: ${id} , with area of ${area} and the checked is ${checked}` );


        try {
            const response = await axios.post('/invmanagement/update_product_area', {
                productId: id,
                area: area,
                checkboxState: checked
            });

            console.log(response.data.message);

            // Only update the state if the API call was successful
            setChecked(checked);
            toggleRefresh();
        } catch (error) {
            console.error(`Error updating product area: ${error}`);
        }
    };

    return (
        <React.Fragment>

            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

                <TableCell component="th" scope="row">
                    {row.product_name}
                </TableCell>
                <TableCell align="left">
                    <Checkbox
                        checked={checked}
                        onChange={(event) => handleCheckBox(row.id, area)(event, event.target.checked)}
                    />
                </TableCell>


            </TableRow>

        </React.Fragment>
    );
};


interface InventoryTableProps {
    refresh: boolean;
    area:string;
    toggleRefresh: () => void; // add this line
}

const AddProductGrid: React.FC<InventoryTableProps> = ({ refresh, area,toggleRefresh  }) => {
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
        <TableContainer component={Paper} >
            <div>
                <h2> Add inventory for {area}</h2>
            </div>
            <TextField
                id="outlined-helperText"
                label="Search Box"
                sx={{marginTop:'10px'}}
                helperText="Search by product name or Category"
                onChange={e => setSearch(e.target.value)}
            />
            <Button variant="contained" color="secondary" sx={{marginLeft:'10px',marginTop:'10px'}}> Search by Product Name</Button>
            <Button variant="contained" color="primary" sx={{marginLeft:'10px',marginTop:'10px'}}> Search by Category</Button>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Product Name</TableCell>
                        <TableCell align="left">Add Product</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.filter(row => row.product_name.toLowerCase().includes(search.toLowerCase())).map((row) => (
                        <Row key={row.id} row={row} check_area={row.has_inventory} area={area}  toggleRefresh={toggleRefresh} />
                    ))}
                </TableBody>
            </Table>

        </TableContainer>
    );
};

export default AddProductGrid;
