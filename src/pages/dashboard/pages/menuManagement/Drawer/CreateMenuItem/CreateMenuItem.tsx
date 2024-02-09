import React, { FormEvent, useState, useEffect } from 'react';
import RawMaterialForm from './RawMaterialForm';
import { Paper, Box, TextField, Button } from '@mui/material';

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

    useEffect(() => {
        console.log('Updated selectedMaterials:', selectedMaterials);
    }, [selectedMaterials]);

    const handleItemNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(event.target.value);
    };

    const handleItemDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemDescription(event.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            name: itemName,
            description: itemDescription,
            materials: selectedMaterials,
        };

        console.log(payload);
        fetch('http://localhost:8080/menuBuild/add_menu_item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
