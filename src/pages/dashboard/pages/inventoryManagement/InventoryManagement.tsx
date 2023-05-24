import React from 'react';
import  InventoryTable  from './InventoryTable';
export default function InventoryManagement(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2> Inventory Management </h2>
                </div>
                <InventoryTable />
            </div>
        </div>
    )
}

