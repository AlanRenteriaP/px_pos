import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import Button from '@mui/material/Button';

type MenuItem = {
    id: number;
    image: string;
    title: string;
    description: string;
    materials: Material[]; // Change from 'items' to 'materials'
    category: string;
    sellingPrice: number;
};

type Material = {
    name: string;
    quantity: number; // Quantity of the material used
    cost: number; // Cost per unit of the material
    measurement: string; // Measurement of the material
};

interface RowProps{
    row: MenuItem;
    handleProductVariantDrawerOpen: (productId: number, productName: string) => void;
}

const Row: React.FC<RowProps> = ({ row, handleProductVariantDrawerOpen }) => {
    const [open, setOpen] = React.useState(false);
    const costPrice = row.materials.reduce((total, material) => total + material.cost * material.quantity, 0);
        const profit = row.sellingPrice - costPrice;
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.title}</TableCell> {/* Aligned to right */}
                <TableCell align="left">{row.description}</TableCell> {/* Aligned to right */}
                <TableCell align="left">${row.sellingPrice}</TableCell> {/* Aligned to right */}
                <TableCell align="left">${costPrice}</TableCell> {/* Aligned to right */}
                <TableCell align="left">${profit}</TableCell> {/* Aligned to right */}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                               Cost of Products
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Materials</TableCell>
                                        <TableCell align="left">Image</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* Row for material details and image */}
                                    <TableRow>
                                        {/* Cell for material details (Nested table) */}
                                        <TableCell>
                                            <Table size="small">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell><b>Name</b></TableCell>
                                                        <TableCell><b>Quantity</b></TableCell>
                                                        <TableCell><b>Cost</b></TableCell>
                                                        <TableCell><b>Total</b></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {row.materials?.map((material, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell component="th" scope="row">
                                                                {material.name}
                                                            </TableCell>
                                                            <TableCell>{material.quantity}{material.measurement}</TableCell>
                                                            <TableCell>${material.cost}</TableCell>
                                                            <TableCell>${material.cost * material.quantity}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                    <TableRow>
                                                        <TableCell colSpan={3}><Button variant="contained" color="primary">Edit</Button></TableCell>
                                                        <TableCell><b>${costPrice}</b></TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableCell>

                                        {/* Cell for the image */}
                                        <TableCell align="right">
                                            <img src={row.image} alt={row.title} style={{ maxWidth: '200px', maxHeight: '200px', display:'block' }} />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>


                            </Table>
                        </Box>

                    </Collapse>
                </TableCell>

            </TableRow>
        </React.Fragment>
    );
};

export default Row;

