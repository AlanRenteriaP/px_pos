import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';
import {theMenuItem} from "../Data/menuData";

type Material = {
    name: string;
    quantity: number; // Quantity of the material used
    cost: number; // Cost per unit of the material
    measurement: string; // Measurement of the material
};

type MenuItem = {
    id: number;
    image: string;
    title: string;
    description: string;
    materials: Material[]; // Change from 'items' to 'materials'
    category: string;
    sellingPrice: number;

};

interface MenuCardProps {
    menuItem: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ menuItem }) => {
    const getCategoryColor = () => {
        switch (menuItem.category) {
            case 'food':
                return '#FFDAC1';
            case 'alcohol':
                return '#A5D8F3';
            case 'drinks':
                return '#E2F0CB';
            case 'pastry':
                return '#F5B5FC';
            default:
                return '#FFF';
        }
    };


    const calculateTotalCost = (menuItem: MenuItem) => {
        if (!menuItem.materials || !Array.isArray(menuItem.materials)) {
            return 0;
        }

        return menuItem.materials.reduce((total, material) => total + material.cost * material.quantity, 0);
    };

    return (
        <Card sx={{ maxWidth: 345, backgroundColor: getCategoryColor() }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={menuItem.title}
                    height="140"
                    image={menuItem.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {menuItem.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {menuItem.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <ul>
                            {menuItem.materials ? menuItem.materials.map((material, index) => (
                                <li key={index}>{material.name}: {material.quantity}{material.measurement} * ${material.cost} = ${material.quantity*material.cost}</li>
                            )) : null}
                        </ul>
                    </Typography>

                    <Typography variant="h6" color="text.primary">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div>Selling Price</div>
                                <div>${menuItem.sellingPrice}</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              -
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div>Total Cost</div>
                                <div>${calculateTotalCost(menuItem)}</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                =
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div>Profit</div>
                                <div>${menuItem.sellingPrice - calculateTotalCost(menuItem)}</div>
                            </div>
                        </div>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default MenuCard;
