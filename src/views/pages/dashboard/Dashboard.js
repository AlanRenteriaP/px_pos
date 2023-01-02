import React from 'react';
import { Paper } from '@material-ui/core';
import ResponsiveAppBar from "../../components/navbar/ResponsiveAppBar";
import DrawerMenu from '../../components/drawer/DrawerMenu';

function Dashboard() {

    return (

        <div >
            <ResponsiveAppBar/>
            <DrawerMenu/>

              <Paper  >
                    this is the dashboard
              </Paper>

        </div>
    );
}
export default Dashboard;