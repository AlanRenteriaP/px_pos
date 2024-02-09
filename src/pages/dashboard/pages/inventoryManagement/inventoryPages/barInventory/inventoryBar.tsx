import React, {useState} from 'react';
import {Button, Drawer} from "@mui/material";
import {AddProductGrid, InventoryGrid} from "@pages/dashboard/pages/inventoryManagement/inventoryPages/features";

export default function InventoryBar(){
    const [productDrawerOpen, setProductDrawerOpen] = useState(false);
    const [refreshData, setRefreshData] = useState(false);
    const toggleRefresh = () => {
        setRefreshData(!refreshData);
    };
    const handleProductDrawerOpen = () => {
        setProductDrawerOpen(true);
    };

    const handleProductDrawerClose = () => {
        setProductDrawerOpen(false);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1> Inventory Bar </h1>
                    <Button type="submit" variant="contained" color="primary" onClick={handleProductDrawerOpen} style={{margin:10}}>
                        Add Product for Inventory
                    </Button>
                </div>
            </div>
            <div>
                <InventoryGrid refresh={refreshData} area={"inventoryBar"}  toggleRefresh={toggleRefresh}/>
            </div>
            <Drawer anchor="bottom" open={productDrawerOpen} onClose={handleProductDrawerClose} sx={{zIndex:9999999}} variant="temporary">
                <AddProductGrid refresh={refreshData} area={"inventoryBar"} toggleRefresh={toggleRefresh}/>
            </Drawer>
        </div>
    )
}

