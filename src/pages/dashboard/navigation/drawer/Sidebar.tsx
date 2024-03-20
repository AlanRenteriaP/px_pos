import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Box, Collapse, List, ListItem, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
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
    ExitToApp as ExitToAppIcon,
    ExpandLess,
    ExpandMore,
    Highlight
} from '@mui/icons-material';
import { useDispatchTyped ,useAppSelector } from '@src/hooks';
import { setActiveComponent } from '@redux/dashboard';
import { logout } from '@redux/auth';

import { useLocation } from 'react-router-dom';


interface SidebarItem {
    label: string;
    icon: JSX.Element;
    subItems?: { label: string; icon?: JSX.Element; location?: string; selected?: boolean; onClick?: () => void; }[];
    onClick?: () => void;
    disabled?: boolean;
    highlighted?: boolean;
    tooltip?: string;
    badge?: number;
    selected?: boolean;
    color?: "primary" | "secondary" | "error" | "info" | "success";
    location?: string;
}


const Sidebar: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatchTyped();
    const [expandedSubMenus, setExpandedSubMenus] = useState<Record<string, boolean>>({});
    const navigate = useNavigate();

    const handleSubMenuToggle = (index: number) => {
        setExpandedSubMenus((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const findIndexByLabel = (label: string) => {
        return sidebarItems.findIndex(item => item.label === label);
    };

    var i;

    const sidebarItems: SidebarItem[] = [
        { label: "Dashboard", icon: <DashboardIcon />, location: '/dashboard',
            onClick: () => {

                navigate('/dashboard');
            }
        }, { label: "Orders", icon: <OrdersIcon />, location: '/orders',
            disabled: true,
            tooltip: "Click to access the example feature",
            badge: 5,
            color: "primary",
        },
        { label: "Menu Management", icon: <MenuIcon /> ,disabled: false, location: '/dashboard/MenuManagement',
            onClick: () => {
                i=findIndexByLabel('Menu Management');
                sidebarItems[i].location='/dashboard/MenuManagement';
                navigate('/dashboard/MenuManagement');
            },},
        { label: "Inventory Management", icon: <InventoryIcon />,disabled: false, location: '/dashboard/InventoryManagement',
            onClick: () => {
                navigate('/dashboard/InventoryManagement');
            },
            subItems: [
                { label: "Kitchen Inventory", icon: <DashboardIcon /> , location: '/dashboard/InventoryManagement/InventoryKitchen',
                    onClick: () => {
                        navigate('/dashboard/InventoryManagement/InventoryKitchen');
                        console.log('InventoryBar');
                    }},
                { label: "Coffee Bar Inventory" , icon: <DashboardIcon />, location: '/dashboard/InventoryManagement/InventoryCoffee',
                    onClick: () => {
                        navigate('/dashboard/InventoryManagement/InventoryCoffee');
                        console.log('InventoryBar');
                    }},
                {  label: "Bar Inventory",icon: <DashboardIcon /> , location: '/dashboard/InventoryManagement/InventoryBar',
                    onClick: () => {
                        navigate('/dashboard/InventoryManagement/InventoryBar');
                        console.log('InventoryBar');
                    }
                    },
                {  label: "Front of the House Inventory",icon: <DashboardIcon />, location: '/dashboard/InventoryManagement/InventoryFH',
                    onClick: () => {
                        navigate('/dashboard/InventoryManagement/InventoryFH');
                        console.log('InventoryBar');
                    } }
            ]
        },
        { label: "Table Management", icon: <TableIcon />,disabled: true,  subItems: [
                { label: "Option 1", icon: <DashboardIcon /> },
                { label: "Option 2" , icon: <DashboardIcon />},
                {  label: "Dashboard",icon: <DashboardIcon /> },
            ],
        },
        { label: "Staff Management", icon: <StaffIcon /> ,disabled: true},
        { label: "Customer Management", icon: <CustomersIcon />,disabled: true },
        { label: "Promos & Discounts", icon: <PromotionsIcon />, disabled: true },
        { label: "Reports", icon: <ReportsIcon />,disabled: true },
    ];

    const bottomSidebarItems: SidebarItem[] = [
        { label: "Settings", icon: <SettingsIcon />, location: '/dashboard/ProfileSettings',
            onClick: () => {
                navigate('/dashboard/ProfileSettings');
        }},
        { label: "Support", icon: <SupportIcon /> },
        {label: "Logout", icon: <ExitToAppIcon />,
            onClick: () => {
            console.log('logout');
                dispatch(logout());
            } },
    ];

    const renderSidebarItems = (items: SidebarItem[]) => items.map((item, index) => (
        <React.Fragment key={index}>
            <Tooltip title={item.tooltip || ""}>
                <ListItem

                    selected={location.pathname === item.location}

                    button
                    onClick={() => {
                        if (item.subItems) {
                            handleSubMenuToggle(index);
                        }
                        if (item.onClick && !item.disabled) {
                            item.onClick();
                        }
                    }
                }
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
                <Collapse in={expandedSubMenus[index]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {item.subItems.map((subItem, subIndex) => (
                            <ListItem
                                selected={location.pathname === subItem.location}
                                button
                                key={subIndex}
                                sx={{ pl: 4 }}
                                onClick={subItem.onClick}  // Add this line
                            >
                                {subItem.icon && <ListItemIcon>{subItem.icon}</ListItemIcon>}
                                <ListItemText primary={subItem.label} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            )}
        </React.Fragment>
    ));

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%", paddingTop: 65 }}>
            <List>
                {renderSidebarItems(sidebarItems)}
            </List>
            <Box sx={{ flexGrow: 1 }} />
            <List>
                {renderSidebarItems(bottomSidebarItems)}
            </List>
        </Box>
    );
};

export default Sidebar;