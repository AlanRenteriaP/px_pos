import React, { useState } from "react";
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Badge,
    Tooltip,
} from "@mui/material";
import {
    Dashboard as DashboardIcon,
    ShoppingCart as OrdersIcon,
    RestaurantMenu as MenuIcon,
    Store as InventoryIcon,
    People as StaffIcon,
    EventSeat as TableIcon,
    AccountCircle as CustomersIcon,
    LocalOffer as PromotionsIcon,
    Description as ReportsIcon,
    Settings as SettingsIcon,
    Help as SupportIcon,
    ExpandLess,
    ExpandMore,
} from "@mui/icons-material";
// import { TreeItem, TreeView } from "@mui/lab";

// const sidebarItems = [
//     // ... other items
//     {
//         label: "Hamburger Menu",
//         icon: <PromotionsIcon />,
//         subItems: [
//             { label: "Option 1" },
//             { label: "Option 2" },
//             { label: "Option 3" },
//         ],
//     },
//     // ... other items
// ];

const sidebarItems = [
    { label: "Dashboard", icon: <DashboardIcon />,
        subItems: [
            { label: "Option 1" },
            { label: "Option 2" },
            { label: "Option 3" },
        ], },
    { label: "Orders", icon: <OrdersIcon />,
        onClick: () => {
            console.log("Example item clicked");
        },
        disabled: false,
        tooltip: "Click to access the example feature",
        badge: 5,
        color: "primary",
    },
    { label: "Menu Management", icon: <MenuIcon /> },
    { label: "Inventory Management", icon: <InventoryIcon /> },
    { label: "Table Management", icon: <TableIcon />,
        subItems: [
            { label: "Option 1" },
            { label: "Option 2" },
            { label: "Option 3" },
        ], },
    { label: "Staff Management", icon: <StaffIcon /> },
    { label: "Customer Management", icon: <CustomersIcon /> },
    { label: "Promos & Discounts", icon: <PromotionsIcon />, disabled: true, },
    { label: "Reports", icon: <ReportsIcon /> },
    { label: "Settings", icon: <SettingsIcon /> },
    { label: "Support", icon: <SupportIcon /> },
];

const Sidebar = ({ }) => {
    const [expandedSubMenus, setExpandedSubMenus] = useState({});

    const handleSubMenuToggle = (index) => {
        setExpandedSubMenus((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (

        <Box
            sx={{ width: 250, display: "flex", flexDirection: "column", height: "100%" }}
        >
            <List>
                {sidebarItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <Tooltip title={item.tooltip || ""}>
                            <ListItem
                                button
                                onClick={() => {
                                    if (item.subItems) {
                                        handleSubMenuToggle(index);
                                    }
                                    if (item.onClick && !item.disabled) {
                                        item.onClick();
                                    }
                                }}
                                disabled={item.disabled}
                            >
                                <ListItemIcon>
                                    {item.badge ? (
                                        <Badge badgeContent={item.badge} color={item.color || "error"}>
                                            {item.icon}
                                        </Badge>
                                    ) : (
                                        item.icon
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={item.label} />
                                {item.subItems ? (
                                    expandedSubMenus[index] ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )
                                ) : null}
                            </ListItem>
                        </Tooltip>
                        {item.subItems && (
                            <Collapse
                                in={expandedSubMenus[index]}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    {item.subItems.map((subItem, subIndex) => (
                                        <ListItem button key={subIndex} sx={{ pl: 4 }}>
                                            <ListItemText primary={subItem.label} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
};


export default Sidebar;