import React, {useEffect, useState} from 'react';
import { Checkbox, FormControl,FormGroup,FormControlLabel, TextField ,Button,Drawer} from '@mui/material';
// import { themenuItems } from './Data/menuData'; // Adjust the path if you defined the menu items in a separate file
import MenuProductsTable from './menuProductsTable/MenuProductsTable'; // Adjust the path according to your project structure
import {CreateMenuItem} from './Drawer';
import axios from "axios"; // Adjust the path according to your project structure
const MenuManagement: React.FC = () => {
    const [themenuItems, setthemenuItems] = useState<any[]>([]); // Use a suitable type instead of any if possible
    const [searchQuery, setSearchQuery] = useState('');
    const categories = ['food', 'alcohol', 'drinks', 'pastry'];
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [drawerOpen, setDrawerOpen] = useState(false);


    // Fetch menu items from your API
    useEffect(() => {
        axios.get('/menumanagement/menuData')
            .then(response => {
                setthemenuItems(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch menu items:', error);
            });
    }, []); // Empty dependency array means this effect runs once on mount

    // Assuming menuItems is an array containing all the menu items
    const filteredMenuItems = themenuItems.filter(item =>
        item && item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategories.length === 0 ||
            item.categories.some((category: string) => selectedCategories.includes(category)))
    );

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (event.target.checked) {
            setSelectedCategories([...selectedCategories, value]);
        } else {
            setSelectedCategories(selectedCategories.filter(category => category !== value));
        }
    };
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };
    const onClose = () => {
        setDrawerOpen(false);
    };
    return (
        <div style={{ marginTop: '25px'}}>
            <TextField
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ marginBottom: '20px' }}
            />
            <FormControl component="fieldset">
                <legend>Categorías</legend>
                <FormGroup row> {/* Add row prop */}
                    {categories.map((category) => (
                        <FormControlLabel
                            key={category}
                            control={
                                <Checkbox
                                    checked={selectedCategories.includes(category)}
                                    onChange={handleCategoryChange}
                                    value={category}
                                />
                            }
                            label={category}
                        />
                    ))}
                </FormGroup>
            </FormControl>
            <Button
                variant="contained"
                style={{ float: 'right', marginTop: '20px', marginRight: '15px' }}
                onClick={() => setDrawerOpen(true)} // <-- This was missing
            >
                Create New Product
            </Button>

            <div>
                <MenuProductsTable menuItems={filteredMenuItems}/>
            </div>
            <div>
                <Drawer
                    anchor="bottom"
                    open={drawerOpen}
                    onClose={onClose}
                    style={{  zIndex: 10000000}}
                >
                    <CreateMenuItem onClose={onClose} /> {/* Pass the onClose function as a prop */}
                </Drawer>
            </div>
        </div>
    );
};

export default MenuManagement;



// <Grid container spacing={3}>
//     {filteredMenuItems.map((item, index) => (
//         <Grid item key={index} xs={12} sm={6} md={4}>
//             <MenuCard menuItem={item} />
//         </Grid>
//     ))}
// </Grid>