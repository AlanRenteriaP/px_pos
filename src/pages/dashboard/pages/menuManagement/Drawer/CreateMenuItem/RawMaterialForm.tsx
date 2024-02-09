import React, { ChangeEvent, useEffect, useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Box, Paper, SelectChangeEvent, Button } from '@mui/material';
import axios from 'axios'; // Ensure axios is installed

// Define the structure of your material data
interface rawMaterial {
    id: number;
    product_name: string;
    abbreviation: string;
}

interface MaterialType {
    material: rawMaterial;
    quantity: number;
}

interface RawMaterialFormProps {
    selectedMaterials: MaterialType[];
    setSelectedMaterials: React.Dispatch<React.SetStateAction<MaterialType[]>>;
}

const RawMaterialForm: React.FC<RawMaterialFormProps> = ({ selectedMaterials, setSelectedMaterials }) => {
    const [rawMaterials, setRawMaterials] = useState<rawMaterial[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchRawMaterials = async () => {
            try {
                const response = await axios.get('/invmanagement/get_products'); // Adjust URL to your API endpoint
                setRawMaterials(response.data);
                console.log(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching raw materials:', error);
                setError('Failed to fetch raw materials');
                setIsLoading(false);
            }
        };

        fetchRawMaterials();
    }, []);

    const handleMaterialChange = (event: SelectChangeEvent<number>, index: number) => {
        const newMaterials = [...selectedMaterials];
        const selectedMaterial = rawMaterials.find(item => item.id === (event.target.value as number));
        if (selectedMaterial) {
            newMaterials[index].material = selectedMaterial;
            setSelectedMaterials(newMaterials);
        }
    };

    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const newMaterials = [...selectedMaterials];
        newMaterials[index].quantity = Number(event.target.value);
        setSelectedMaterials(newMaterials);
    };

    const handleAddMaterial = () => {
        if (rawMaterials.length > 0) {
            setSelectedMaterials([...selectedMaterials, { material: rawMaterials[0], quantity: 0 }]);
        }
    };

    const handleRemoveMaterial = (index: number) => {
        const newMaterials = [...selectedMaterials];
        newMaterials.splice(index, 1);
        setSelectedMaterials(newMaterials);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Paper style={{ padding: '1em', borderRadius: '15px', backgroundColor: '#f5f5f5' }}>
            <Box display="flex" flexDirection="column" gap="1em">
                {selectedMaterials.map((item, index) => (
                    <Box key={index}>
                        <FormControl>
                            <InputLabel>Material</InputLabel>
                            <Select
                                value={item.material.id}
                                onChange={(e) => handleMaterialChange(e, index)}
                                MenuProps={{ style: { zIndex: 99999999999999 } }}
                            >
                                {rawMaterials.map((material) => (
                                    <MenuItem key={material.id} value={material.id}>
                                        {material.product_name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            label="Quantity"
                            type="number"
                            value={item.quantity}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleQuantityChange(e, index)}
                            InputProps={{ endAdornment: item.material.abbreviation}}
                        />
                        <Button onClick={() => handleRemoveMaterial(index)}>Remove</Button>
                    </Box>
                ))}
                <Button variant="contained" color="primary" onClick={handleAddMaterial}>
                    Add Material
                </Button>
            </Box>
        </Paper>
    );
};

export default RawMaterialForm;