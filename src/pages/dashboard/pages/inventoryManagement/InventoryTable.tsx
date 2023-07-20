import React, { useEffect, useMemo, useState } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import {Box, Button, Drawer} from '@mui/material';
import ProductVariantForm from "@pages/dashboard/pages/inventoryManagement/inventoryForms/ProductVariantForm";
import { styled } from '@mui/system';


const EvenRow = styled('div')({
    backgroundColor: 'lightgrey',
});

const OddRow = styled('div')({
    backgroundColor: 'white',
});
// Updated InventoryTable component
export type Product = {
    id: string;
    sku: string;
    product_name: string;
    vendor: string;
    presentation: string;
    quantity: number;
    unit: string;
    price: number;
    subRows?: Product[];
    actions?: any;
};
interface InventoryTableProps {
    refresh: boolean;
}

const InventoryTable: React.FC<InventoryTableProps> = ({ refresh }) => {
    const [data, setData] = useState<Product[]>([]);
    const [productVariantDrawerOpen, setProductVariantDrawerOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [selectedProductName, setSelectedProductName] = useState<string | null>(null);
    const [refreshData, setRefreshData] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, [refresh]);

    const handleProductVariantDrawerClose = () => {
        setProductVariantDrawerOpen(false);
    };

    const handleProductVariantDrawerOpen = (productId: number, productName: string) => {
        setSelectedProductId(productId);
        setSelectedProductName(productName);
        setProductVariantDrawerOpen(true);
    };

    const fetchProducts = () => {
        fetch(`http://localhost:8080/invmanagement/get_products_and_variants`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error:', error));
    };

    const handleProductVariantAdd = () => {
        setRefreshData(prev => !prev);
        handleProductVariantDrawerClose();
    };

    const columns = useMemo<MRT_ColumnDef<Product>[]>(
        () => [
            { accessorKey: 'id', header: 'id' },
            { accessorKey: 'sku', header: 'SKU' },
            { accessorKey: 'product_name', header: 'Product Name' },
            { accessorKey: 'vendor', header: 'Vendor' },
            { accessorKey: 'presentation', header: 'Presentation' },
            { accessorKey: 'quantity', header: 'Quantity' },
            { accessorKey: 'unit', header: 'Unit' },
            { accessorKey: 'price', header: 'Price' },
            {
                accessorKey: 'actions',
                header: 'Actions',
                Cell: ({ row }) => (
                    <Button sx={{backgroundColor: 'primary.main', color: 'white'}} onClick={() => handleProductVariantDrawerOpen(Number(row.original.id), row.original.product_name)}>
                        Add Sub-Info
                    </Button>
                ),
            },
        ],
        []
    );


    return (
        <>

            <div className="my-table">
                <MaterialReactTable
                    columns={columns}
                    data={data}
                    enableExpanding
                    enableExpandAll
                />
            </div>
            <Drawer anchor="bottom" open={productVariantDrawerOpen} onClose={handleProductVariantDrawerClose} sx={{ zIndex: 9999999 }} variant="temporary">
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        backgroundColor: 'primary.main',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '50px',
                    }}
                >
                    {selectedProductId && selectedProductName && (
                        <ProductVariantForm
                            onProductVariantAdd={handleProductVariantAdd}
                            productId={selectedProductId}
                            productName={selectedProductName}
                        />  )}
                </Box>
            </Drawer>
        </>
    );
};

export default InventoryTable;
