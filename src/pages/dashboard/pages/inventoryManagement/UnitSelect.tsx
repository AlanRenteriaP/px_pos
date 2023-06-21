import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

const units = ['ml', 'k', 'gram', 'l', 'ounce', 'pound', 'gallon', 'quart', 'pint', 'cup', 'fluid ounce', 'milligram', 'kilogram', 'metric ton', 'long ton', 'short ton', 'pound-force', 'kilopond'];

function UnitSelect() {
    const [unit, setUnit] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setUnit(event.target.value as string);
    };

    return (
        <FormControl>
            <InputLabel id="unit-label">Unit</InputLabel>
            <Select labelId="unit-label" value={unit} onChange={handleChange}>
                {units.map((unit, index) => (
                    <MenuItem key={index} value={unit}>{unit}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default UnitSelect;
