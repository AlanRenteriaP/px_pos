import React, { useState, ChangeEvent } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Box, Paper, SelectChangeEvent,Button  } from '@mui/material';

const vendors = ['Vendor 1', 'Vendor 2', 'Vendor 3', 'Vendor 4', 'Vendor 5', 'Vendor 6'];
const units = ['ml', 'k', 'gram', 'l', 'ounce', 'pound', 'gallon', 'quart', 'pint', 'cup', 'fluid ounce', 'milligram', 'kilogram', 'metric ton', 'long ton', 'short ton', 'pound-force', 'kilopond'];

function ProductForm() {
    const [product, setProduct] = useState({
        product_name: '',
        quantity: '',
        vendors: [],
        unit: '',
        price: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(product);
    };


    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product,
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
            <form onSubmit={handleSubmit} >
                <Box display="flex" flexDirection="column" gap="1em">
                    <TextField name="product_name" label="Product Name" value={product.product_name} onChange={handleTextChange} />
                    <TextField name="quantity" label="Quantity" value={product.quantity} onChange={handleTextChange} />
                    <FormControl>
                        <InputLabel id="vendors-label">Vendors</InputLabel>
                        <Select name="vendors" labelId="vendors-label" multiple value={product.vendors} onChange={handleSelectChange}
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
                        <Select name="unit" labelId="unit-label" value={product.unit} onChange={handleSelectChange}
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
                    <TextField name="price" label="Price" value={product.price} onChange={handleTextChange} />
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

export default ProductForm;
