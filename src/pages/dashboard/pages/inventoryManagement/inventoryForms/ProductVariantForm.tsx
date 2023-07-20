import React, { useState, ChangeEvent } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Box, Paper, SelectChangeEvent, Button } from '@mui/material';

const vendors = ['Costco', 'Smart & Final', 'La Grande', 'Walmart', 'Food Service'];
const units = ['ml', 'piece','k', 'gram', 'l', 'ounce', 'pound', 'gallon', 'quart', 'pint', 'cup', 'fluid ounce', 'milligram', 'kilogram', 'metric ton', 'long ton', 'short ton', 'pound-force', 'kilopond'];

interface ProductVariantFormProps {
    productId: number;
    productName: string;
    onProductVariantAdd: () => void;
}

function ProductVariantForm({ productId, productName, onProductVariantAdd }: ProductVariantFormProps) {
    const [productVariant, setProduct] = useState({
        presentation: '',
        quantity: '',
        vendors: [],
        unit: '',
        price: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const productVariantData = {
            ...productVariant,
            productId,
            productName
        };

        fetch('http://localhost:8080/invmanagement/add_product_variant', {  // Replace this with your actual API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productVariantData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                onProductVariantAdd();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...productVariant,
            [e.target.name]: e.target.value
        });
    };

    const handleSelectChange = (e: SelectChangeEvent<string | string[]>) => {
        const { name = '', value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    return (
        <Paper style={{padding: '1em', borderRadius: '15px', backgroundColor: '#f5f5f5'}}>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap="1em">
                    <h2>Product ID: {productId}</h2>
                    <h2>Product Name: {productName}</h2>
                    <TextField name="presentation" label="Presentation Name" value={productVariant.presentation} onChange={handleTextChange} />
                    <TextField name="quantity" label="Quantity" value={productVariant.quantity} onChange={handleTextChange} />
                    <FormControl>
                        <InputLabel id="vendors-label">Vendors</InputLabel>
                        <Select name="vendors" labelId="vendors-label" multiple value={productVariant.vendors} onChange={handleSelectChange}
                                MenuProps={{
                                    style: {
                                        zIndex: 999999999999999999 // Adjust as needed
                                    }
                                }}>
                            {vendors.map((vendor, index) => (
                                <MenuItem key={index} value={vendor}>{vendor}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="unit-label">Unit</InputLabel>
                        <Select name="unit" labelId="unit-label" value={productVariant.unit} onChange={handleSelectChange}
                                MenuProps={{
                                    style: {
                                        zIndex: 99999999999999 // Adjust as needed
                                    }
                                }}>
                            {units.map((unit, index) => (
                                <MenuItem key={index} value={unit}>{unit}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField name="price" label="Price" value={productVariant.price} onChange={handleTextChange} />
                </Box>
                <Box display="flex" justifyContent="center" marginY={2}>
                    <Button type="submit" variant="contained" color="primary" style={{margin:10}}>
                        Submit
                    </Button>
                </Box>
            </form>
        </Paper>
    );
}

export default ProductVariantForm;
