import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Box, Paper, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useDispatchTyped } from '@src/hooks';
import { setAlert } from '@redux/features/alert';
interface ProductFormProps {
    onProductAdd: () => void;
}

interface ProductState {
    product_name: string;
    unit_of_measurement: number | "";
}

const ProductForm: React.FC<ProductFormProps> = ({ onProductAdd }) => {
    const dispatch = useDispatchTyped();
    const [product, setSuperProduct] = useState<ProductState>({
        product_name: '',
        unit_of_measurement: "", // Set to null or a default number
    });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault(); // prevent the form from doing a default form submission
        fetch('http://localhost:8080/invmanagement/add_product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productName: product.product_name, unitOfMeasurement: product.unit_of_measurement }), // send productName to match server-side expectation
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                console.log(data.message);
                dispatch(setAlert({  msg: data.message, alertType: "success" }));
                onProductAdd();  // Call the function prop passed from the parent component
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSuperProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };


    const handleUnitChange = (event: SelectChangeEvent<number>) => {
        setSuperProduct(prev => ({
            ...prev,
            unit_of_measurement: event.target.value as number
        }));
    };

    return (
        <Paper style={{ padding: '1em', borderRadius: '15px', backgroundColor: '#f5f5f5' }}>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap="1em">
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="product-name"></InputLabel>
                        <TextField
                            id="product-name"
                            name="product_name"
                            value={product.product_name}
                            onChange={handleTextChange}
                            label="product_name"
                        />
                    </FormControl>


                    <FormControl fullWidth style={{ position: 'relative', zIndex: 9999 }}>
                        <InputLabel id="demo-simple-select-label">Unit of Measurement</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={product.unit_of_measurement}
                            label="Unit of Measurement"
                            onChange={handleUnitChange}
                        >
                            <MenuItem value={9}>mL</MenuItem>
                            <MenuItem value={2}>g</MenuItem>
                            <MenuItem value={4}>pc</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="center" marginY={2}>
                    <Button type="submit" variant="contained" color="primary" style={{ margin: 10 }}>
                        Submit
                    </Button>
                </Box>
            </form>
        </Paper>
    );
}

export default ProductForm;
