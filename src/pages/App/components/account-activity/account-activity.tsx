import { Box, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const styles = {
  tabPanel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 'auto',
  },
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const AccountActivity = () => {
  const [activeTab, setActiveTab] = useState<'assets' | 'activity'>('assets');
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            borderBottom: '1px solid rgb(0, 0, 0, 0.2)',
          }}
        >
          <Tab label="Assets" />
          <Tab label="Activity" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CircleOutlinedIcon />
        12.306 GoerliETH
        <ChevronRightOutlinedIcon />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <ArrowCircleDownIcon />
        Receive Mar 17 From: 0x7d6...9d27
      </TabPanel>
    </Box>
  );
};

export default AccountActivity;
