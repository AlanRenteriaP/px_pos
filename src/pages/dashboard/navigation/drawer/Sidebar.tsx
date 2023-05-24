import React, { useState } from 'react';
import { Badge, Box, Collapse, List, ListItem, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { Dashboard as DashboardIcon, ShoppingCart as OrdersIcon, RestaurantMenu as MenuIcon, Store as InventoryIcon, People as StaffIcon, EventSeat as TableIcon, AccountCircle as CustomersIcon, LocalOffer as PromotionsIcon, Description as ReportsIcon, Settings as SettingsIcon, Help as SupportIcon, ExitToApp as ExitToAppIcon, ExpandLess, ExpandMore } from '@mui/icons-material';
import { useDispatchTyped ,useAppSelector } from '@src/hooks';
import { setActiveComponent } from '@redux/dashboard';
interface SidebarItem {
    label: string;
    icon: JSX.Element;
    subItems?: { label: string; icon?: JSX.Element }[];
    onClick?: () => void;
    disabled?: boolean;
    tooltip?: string;
    badge?: number;
    color?: "primary" | "secondary" | "error" | "info" | "success";
}


const Sidebar: React.FC = () => {
    const dispatch = useDispatchTyped();
    const [expandedSubMenus, setExpandedSubMenus] = useState<Record<string, boolean>>({});

    const handleSubMenuToggle = (index: number) => {
        setExpandedSubMenus((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const sidebarItems: SidebarItem[] = [
        { label: "Dashboard", icon: <DashboardIcon />,
            onClick: () => {
                dispatch(setActiveComponent('Profile'));
            }
        }, { label: "Orders", icon: <OrdersIcon />,
            disabled: true,
            tooltip: "Click to access the example feature",
            badge: 5,
            color: "primary",
        },
        { label: "Menu Management", icon: <MenuIcon /> ,disabled: true},
        { label: "Inventory Management", icon: <InventoryIcon />,disabled: false,
            onClick: () => {
                dispatch(setActiveComponent('inventoryManagement'));
            } },
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
        { label: "Settings", icon: <SettingsIcon /> },
        { label: "Support", icon: <SupportIcon /> },
        {label: "Logout", icon: <ExitToAppIcon /> },
    ];

    const renderSidebarItems = (items: SidebarItem[]) => items.map((item, index) => (
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
                <Collapse in={expandedSubMenus[index]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {item.subItems.map((subItem, subIndex) => (
                            <ListItem button key={subIndex} sx={{ pl: 4 }}>
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