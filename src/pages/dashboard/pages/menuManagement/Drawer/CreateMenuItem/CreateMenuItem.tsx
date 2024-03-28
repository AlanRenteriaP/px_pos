import React, { FormEvent, useState, useEffect } from 'react';
import RawMaterialForm from './RawMaterialForm';
import { Paper, Box, TextField, Button, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';


export type RawMaterial = {
    id: number;
    product_name: string;
    abbreviation: string;
};

type MaterialType = {
    material: RawMaterial;
    quantity: number;
};

interface Props {
    onClose: () => void;
}

const CreateMenuItem = ({ onClose }: Props) => {
    const [selectedMaterials, setSelectedMaterials] = useState<MaterialType[]>([]);
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemCategory, setItemCategory] = useState<string[]>(['food']);




    useEffect(() => {
        console.log('Updated selectedMaterials:', selectedMaterials);
    }, [selectedMaterials]);

    const handleItemNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(event.target.value);
    };

    const handleItemDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemDescription(event.target.value);
    };
    const handleItemPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemPrice(event.target.value);
    };
    const handleItemCategoryChange = (event: SelectChangeEvent<string[]>) => {
        setItemCategory(event.target.value as string[]);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            name: itemName,
            description: itemDescription,
            price: itemPrice,
            categories: itemCategory
        };

        console.log(payload);
        let response = await fetch('http://localhost:8080/menumanagement/add_recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        let data = await response.json();
        if (data.error) {
            console.error('Error:', data.error);
            return;
        }
        console.log('Success:', data);

        const recipeId = data.recipeId;

        for (let material of selectedMaterials) {
            let payloadIng = {
                recipeId,
                productId: material.material.id,
                quantity: material.quantity
            };
            response = await fetch('http://localhost:8080/menumanagement/add_ingredient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payloadIng),
            });

            data = await response.json();
            if (data.error) {
                console.error('Error:', data.error);
                return;
            }
            console.log('Success:', data);
        }

        onClose();
    };

    return (
        <Paper style={{ padding: '1em', borderRadius: '15px', backgroundColor: '#f5f5f5' }}>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap="1em">
                    <h1>Create Menu Item</h1>
                    <TextField
                        label="Name"
                        placeholder="Item Name"
                        value={itemName}
                        onChange={handleItemNameChange}
                    />
                    <TextField
                        label="Description"
                        placeholder="Item Description"
                        multiline
                        value={itemDescription}
                        onChange={handleItemDescriptionChange}
                    />
                    <TextField
                        label="Price"
                        placeholder="Item Price"
                        multiline
                        value={itemPrice}
                        onChange={handleItemPriceChange}
                    />

                    {/*<TextField*/}
                    {/*    label="Category"*/}
                    {/*    placeholder="Item Category"*/}
                    {/*    multiline*/}
                    {/*    value={itemCategory}*/}
                    {/*    onChange={handleItemCategoryChange}*/}
                    {/*/>*/}

                    <FormControl>
                        <InputLabel>Category</InputLabel>
                        <Select
                            value={itemCategory}
                            onChange={handleItemCategoryChange}
                            multiple
                        >
                            <MenuItem value="food">food</MenuItem>
                            <MenuItem value="alcohol">alcohol</MenuItem>
                            <MenuItem value="drinks">drinks</MenuItem>
                            <MenuItem value="pastry">pastry</MenuItem>
                        </Select>
                    </FormControl>

                    <RawMaterialForm
                        selectedMaterials={selectedMaterials}
                        setSelectedMaterials={setSelectedMaterials}
                    />
                    <Box display="flex" justifyContent="center" marginY={2}>
                        <Button type="submit" variant="contained" color="primary" style={{ margin: 10 }}>
                            Create
                        </Button>
                    </Box>
                </Box>
            </form>
        </Paper>
    );
};

export default CreateMenuItem;
