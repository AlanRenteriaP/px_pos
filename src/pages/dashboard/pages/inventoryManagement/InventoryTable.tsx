import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import ProductVariantForm from "@pages/dashboard/pages/inventoryManagement/inventoryForms/ProductVariantForm";
import Drawer from '@mui/material/Drawer';
import axios from 'axios';

type Product = {
    id: string;
    sku: string;
    product_name: string;
    vendor: string;
    presentation: string;
    quantity: number;
    unit: string;
    measurement_id: number;
    measurement_name: string;
    price: number;
    //Created isActive for keeping track
    is_active: boolean;
    subRows?: Product[];
};

interface RowProps {
    row: Product;
    handleProductVariantAdd: (productId: number, productName: string) => void;
    handleProductVariantDrawerOpen: (productId: number, productName: string) => void;

}


const Row: React.FC<RowProps> = ({ row, handleProductVariantDrawerOpen }) => {
    const [open, setOpen] = React.useState(false);
    //undefined | string specifica un proceso mas especifico que pude ser undefined o string
    const [activeSubRowId, setActiveSubRowId] = React.useState<undefined | string>(undefined);
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        // Encuenta la subRow que esta activa y agarramos su id
        const activeSubRow = row.subRows?.find(subRow => subRow.is_active);

        // Si tenemos una subRow activa, actualizamos el estado con su id.
        if (activeSubRow) {
            setActiveSubRowId(activeSubRow.id);
        }
    }, [row]);

    const handleChange = (id:any) => {
        setActiveSubRowId(id);





        axios.post(`/invmanagement/change_valid_variant/${id}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Failed to change the variant", error);
            });
    };




    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.product_name}
                </TableCell>
                <TableCell align="left">
                    {row.measurement_name}
                </TableCell>
                <TableCell align="left">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleProductVariantDrawerOpen(Number(row.id), row.product_name)}
                    >
                        Add Sub-Info
                    </Button>
                </TableCell>
                <TableCell align="left">

                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Sub Rows
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>SKU</TableCell>
                                        <TableCell>Vendor</TableCell>
                                        <TableCell>Presentation</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Unit</TableCell>
                                        <TableCell align="right">Active String</TableCell>
                                        <TableCell align="right">Active</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {row.subRows?.map((subRow) => (
                                        <TableRow key={subRow.id}>
                                            <TableCell component="th" scope="row">
                                                {subRow.sku}
                                            </TableCell>
                                            <TableCell>{subRow.vendor}</TableCell>
                                            <TableCell>{subRow.presentation}</TableCell>
                                            <TableCell align="right">{subRow.price}</TableCell>
                                            <TableCell align="right">{subRow.quantity}</TableCell>
                                            <TableCell align="right">{subRow.unit}</TableCell>
                                            <TableCell align="right">{(subRow.is_active ?? "").toString()}</TableCell>
                                            <TableCell align="right">
                                                <input
                                                    type="radio"
                                                    id={`radio-${subRow.id}`}
                                                    name={`radioGroup-${row.id}`}
                                                    checked={activeSubRowId === subRow.id}
                                                    onChange={() => handleChange(subRow.id)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};


interface InventoryTableProps {
    refresh: boolean;
}

const InventoryTable: React.FC<InventoryTableProps> = ({ refresh }) => {
    const [data, setData] = useState<Product[]>([]);
    const [productVariantDrawerOpen, setProductVariantDrawerOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [selectedProductName, setSelectedProductName] = useState<string | null>(null);
    const [refreshData, setRefreshData] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
            fetchProducts();
    }, [refresh]);

    const fetchProducts = () => {
        fetch(`http://localhost:8080/invmanagement/get_products_and_variants`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error:', error));
    };

    const handleProductVariantDrawerOpen = (productId: number, productName: string) => {
        setSelectedProductId(productId);
        setSelectedProductName(productName);
        console.log(productId, productName);
        setProductVariantDrawerOpen(true);
    };

    const handleProductVariantAdd = () => {
        setRefreshData(prev => !prev);
        fetchProducts();
        handleProductVariantDrawerClose();
    };

    const handleProductVariantDrawerClose = () => {
        setProductVariantDrawerOpen(false);
    };

    return (
        <TableContainer component={Paper}   style={{ boxShadow: 'none' }}   >
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
                        <TableCell />
                        <TableCell align="left">Product Name</TableCell>
                        <TableCell align="left">Unit of Measurement</TableCell>
                        <TableCell align="left">Add Product</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>

                    {data.filter(row => row.product_name.toLowerCase().includes(search.toLowerCase())).map((row) => (
                        <Row
                            key={row.id}
                            row={row}
                            handleProductVariantAdd={handleProductVariantAdd}
                            handleProductVariantDrawerOpen={handleProductVariantDrawerOpen}
                        />
                    ))}
                </TableBody>
            </Table>
            <Drawer
                anchor="bottom"
                open={productVariantDrawerOpen}
                sx={{ zIndex: 9999999 }}
                onClose={(event, reason) => {
                    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
                        handleProductVariantDrawerClose();
                    }
                }}
            >
                {selectedProductId !== null && selectedProductName !== null &&
                    <ProductVariantForm
                        onProductVariantAdd={handleProductVariantAdd}
                        productId={selectedProductId}
                        productName={selectedProductName}
                    />
                }
            </Drawer>
        </TableContainer>
    );
};

export default InventoryTable;
