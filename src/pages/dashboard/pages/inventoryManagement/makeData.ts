export const data = [
    {
        sku: '1001',
        product_name: 'huevo',
        store: ['costco','smart & final', 'la grande'],
        presentation: ['paquete de 6','Docena', 'Caja'],
        quantity: 350,
        unit: 'piece',
        price: [20.23,35.50,300],
        subRows: [
            {
                sku: '1001',
                product_name: 'huevo',
                store: 'la grande',
                presentation: 'paquete de 6',
                quantity: 12,
                unit: 'piece',
                price: 20.23,
            },
            {
                sku: '1002',
                product_name: 'huevo',
                store: 'costco',
                presentation: 'Docena',
                quantity: 24,
                unit: 'piece',
                price: [20.23,35.50,300],
            },
            {
                sku: '1003',
                product_name: 'huevo',
                store: 'smart & final',
                presentation: 'Caja',
                quantity: 350,
                unit: 'piece',
                price: 300,
            },
        ],
    },
    {
        firstName: 'Raquel',
        lastName: 'Kohler',
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
        subRows: [
            {
                firstName: 'Branson',
                lastName: 'Frami',
                address: '32188 Larkin Turnpike',
                city: 'Charleston',
                state: 'South Carolina', subRows: [
                    {
                        firstName: 'Branson',
                        lastName: 'Frami',
                        address: '32188 Larkin Turnpike',
                        city: 'Charleston',
                        state: 'South Carolina',
                    },
                ],
            },
        ],
    },
];