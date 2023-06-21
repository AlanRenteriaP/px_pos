import React, { useState } from 'react';
import { Button, TextField, Box, Select, MenuItem, InputLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';

export default function RawMaterialForm({ handleDrawerClose }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [store, setStore] = useState('');
    const vendors = ['Heineken', 'Costco', 'Smart & Final', 'La Grande','Walmart']; // your array of vendors
    // const availability = [true, false, true, false, true]; // represents availability in 'Store 1', 'Store 2', etc.
    const [unit, setUnit] = useState('');

    const handleChange = (event) => {
        setUnit(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Generate ID and SKU
        const id = generateId(); // Implement the ID generation logic in this function
        const sku = generateSku(); // Implement the SKU generation logic in this function
        const [availability, setAvailability] = useState();

        const handleCheckboxChange = (index) => {
            // Update the availability array when a checkbox is clicked
            const newAvailability = [...availability];
            newAvailability[index] = !newAvailability[index];
            setAvailability(newAvailability);
        };
        // TODO: Add the logic to add the raw material here
        console.log('New Raw Material:', { id, sku, name, quantity, store });

        // Reset the form fields
        setName('');
        setQuantity('');
        setStore('');

        // Close the drawer
        handleDrawerClose();
    };

    return (
        <form onSubmit={handleSubmit} >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '50px',backgroundColor:'primary.main'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' , padding: '50px',backgroundColor:'white',borderRadius:'10px'}}>
                <TextField label="Product Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                <TextField label="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required/>
                <InputLabel id="store-label">Vendors</InputLabel>
                <Grid container spacing={2}>
                    {vendors.map((store, index) => (
                        <Grid item xs={12} sm={6} md={4} key={store}>
                            <FormControlLabel
                                control={
                                    <Checkbox />
                                }
                                label={store}
                            />
                        </Grid>
                    ))}
                </Grid>
                <InputLabel id="store-label">unit</InputLabel>
                <Select labelId="unit-label" id="unit-select" value={unit} label="Unit" onChange={handleChange}>
                    <MenuItem value={"g"}>Gram</MenuItem>
                    <MenuItem value={"kg"}>Kilogram</MenuItem>
                    <MenuItem value={"mg"}>Milligram</MenuItem>
                    <MenuItem value={"oz"}>Ounce</MenuItem>
                    <MenuItem value={"ml"}>Milliliter</MenuItem>
                    <MenuItem value={"L"}>Liter</MenuItem>
                </Select>
                <InputLabel id="store-label">price</InputLabel>
                <Select labelId="store-label" value={store} onChange={(e) => setStore(e.target.value)} required>
                    {vendors.map((store) => (
                        <MenuItem key={store} value={store}>{store}</MenuItem>
                    ))}
                </Select>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </Box>
        </Box>
        </form>
    );
}

// Add the ID and SKU generation functions here
function generateId() {
    // TODO: Add your ID generation logic here
    return 'TODO';
}

function generateSku() {
    // TODO: Add your SKU generation logic here
    return 'TODO';
}
