import React, { useMemo } from 'react';
//Date Picker Imports

//MRT Imports
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';


//Mock Data
import { data } from './makeData';

export type products = {
    id: number;
    sku: string;
    product_name: string;
    vendors: string[];
    presentation: string[];
    quantity: number; // '10' pz, or '100' kg or '1000' lbs or '1000000' tons
    unit: string;
    inventory: number[];
    price: number[];
    subRows?: products[];
};


export default function InventoryTable () {
    const columns = useMemo<MRT_ColumnDef<products>[]>(
        //column definitions...
        () => [

            {
                accessorKey: 'sku',
                header: 'SKU',
            },
            {
                accessorKey: 'product_name',
                header: 'Product Name',
            },
            {
                accessorKey: 'vendors',
                header: 'vendors',
            },

            {
                accessorKey: 'presentation',
                header: 'presentation',
            },
            {
                accessorKey: 'inventory',
                header: 'inventory',
            },
            {
                accessorKey: 'unit',
                header: 'unit',
            },  {
                accessorKey: 'price',
                header: 'price',
            },
        ],
        [],
        //end
    );

    return (
        <MaterialReactTable
            columns={columns}
            data={data}
            enableExpanding
            enableExpandAll //default
        />
    );
};
