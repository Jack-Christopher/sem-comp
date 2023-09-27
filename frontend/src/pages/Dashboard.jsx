import { useEffect, useState } from "react";
import { setPageTitle } from "../utils/Page";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SemCompForm from "../components/UI/SemCompForms/SemCompForm";
import CelebrationIcon from '@mui/icons-material/Celebration';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{width: '85%'}}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setPageTitle("Dashboard");
  }, []);


  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs Dashboard"
        sx={{ borderRight: 1, borderColor: 'divider', width: '15%', color: '#003C84' }}
      >
        <Tab label="SemComp" icon={<CelebrationIcon />} iconPosition="start" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SemCompForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two Item Two Item Two Item Two Item Two Item Two Item Two Item Two Item Two Item Two Item Two Item Two Item Two 
        Item Two Item Two Item Two Item Two Item Two Item Two Item Two Item Two Item Two Item Two Item Two Item Two Item Two 
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
