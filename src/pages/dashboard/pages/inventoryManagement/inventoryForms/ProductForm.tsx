import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField,  Box, Paper, SelectChangeEvent,Button  } from '@mui/material';
import { useDispatchTyped } from '@src/hooks';
import { setAlert } from '@redux/features/alert';

interface ProductFormProps {
    onProductAdd: () => void;  // Declare a function type prop
}

const ProductForm: React.FC<ProductFormProps> = ({ onProductAdd }) => {  // Include the prop in the function parameters
    const dispatch = useDispatchTyped();
    const [product, setSuperProduct] = useState({
        product_name: '',
    });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault(); // prevent the form from doing a default form submission
        fetch('http://localhost:8080/invmanagement/add_product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productName: product.product_name }), // send productName to match server-side expectation
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

    return (
        <Paper style={{padding: '1em', borderRadius: '15px', backgroundColor: '#f5f5f5'}}>
            <form onSubmit={handleSubmit} >
                <Box display="flex" flexDirection="column" gap="1em">
                    <TextField name="product_name" label="Product Name" value={product.product_name} onChange={handleTextChange} />
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
