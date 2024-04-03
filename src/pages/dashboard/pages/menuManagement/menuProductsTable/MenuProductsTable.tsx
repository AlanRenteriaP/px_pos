import * as React from 'react';
import { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Row from "./row";

type MenuItem = {
    id: number;
    image: string;
    title: string;
    description: string;
    materials: Material[]; // Change from 'items' to 'materials'
    categories: string[];
    sellingPrice: number;

};

type Material = {
    name: string;
    quantity: number; // Quantity of the material used
    cost: number; // Cost per unit of the material
    measurement: string; // Measurement of the material
};

interface MenuItems {
    menuItems: MenuItem[];
}

const MenuProductsTable: React.FC<MenuItems > = ({ menuItems }) => {
    const [open, setOpen] = React.useState(false);
    const [productVariantDrawerOpen, setProductVariantDrawerOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [selectedProductName, setSelectedProductName] = useState<string | null>(null);

    const handleProductVariantDrawerOpen = (productId: number, productName: string) => {
        setSelectedProductId(productId);
        setSelectedProductName(productName);
        console.log(productId, productName);
        setProductVariantDrawerOpen(true);
    };
return (
    <TableContainer>
        <Table arial-label="collapsible table">
            <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell align="left"> Category </TableCell>
                    <TableCell align="left"> Title </TableCell>
                    <TableCell align="left"> Description </TableCell>
                    <TableCell align="left"> Selling Price </TableCell>
                    <TableCell align="left"> Cost Price </TableCell>
                    <TableCell align="left"> Profit </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {menuItems.map((item) => {
                    // Assuming you have a way to calculate the cost price for each item
                    const costPrice = item.materials.reduce((total, material) => total + material.cost * material.quantity, 0);
                    const profit = item.sellingPrice - costPrice;

                    return (
                        <Row
                            key={item.id}
                            row={item}
                            handleProductVariantDrawerOpen={handleProductVariantDrawerOpen}
                        />
                    );
                })}
            </TableBody>
        </Table>
    </TableContainer>
);

};

export default MenuProductsTable;



