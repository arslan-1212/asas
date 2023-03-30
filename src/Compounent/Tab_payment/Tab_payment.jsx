import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='px-3'>
          <Tab className='color_btn2 ' label="Point Amount" {...a11yProps(0)} />
          <Tab className='color_btn2 ' label="Payment" {...a11yProps(1)} />
     
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className="">
        <div className="row justify-content-between">
            <div className="col-md-4 mt-2 back_color_pay ">
                <div className="d-flex justify-content-around mt-3">
                <p>Charge Point</p>
                <p>10,000P</p>
                </div>
                
            </div>
            <div className="col-md-4 mt-2  back_color_pay ">
                <div className="d-flex justify-content-around mt-3">
                <p>Bonus Point</p>
                <p>0P</p>
                </div>
                
            </div></div>
            <div className="mt-4 d-flex justify-content-between">
                <div className="">
                <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="htmlForm-check-label" htmlFor="flexRadioDefault1">
  10,000
  </label>
</div>
                </div>
                <div className="">
                <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="htmlForm-check-label" htmlFor="flexRadioDefault1">
  20,000
  </label>
</div>
                </div>
                <div className="">
                <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="htmlForm-check-label" htmlFor="flexRadioDefault1">
  50,000
  </label>
</div>
                </div>
            </div>
            <div className="mt-2 d-flex justify-content-between">
                <div className="">
                <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="htmlForm-check-label" htmlFor="flexRadioDefault1">
  100,000
  </label>
</div>
                </div>
                <div className="">
                <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="htmlForm-check-label" htmlFor="flexRadioDefault1">
  200,000
  </label>
</div>
                </div>
                <div className="">
                <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="htmlForm-check-label" htmlFor="flexRadioDefault1">
  500,000
  </label>
</div>
                </div>
            </div>

            <div className=" d-flex justify-content-center " style={{gap:"12px"}}>
            <button className='btn btn_same1 py-2 mt-3  '>Cancel</button>
            <button className='btn btn_same2 py-2 mt-3  text-white'>Next</button>
            </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="">
        <div className="row justify-content-between">
            <div className="col-md-4 mt-2 back_color_pay ">
                <div className="d-flex justify-content-around mt-3">
                <p>Charge Point</p>
                <p>10,000P</p>
                </div>
                
            </div>
            <div className="col-md-4 mt-2  back_color_pay ">
                <div className="d-flex justify-content-around mt-3">
                <p>Bonus Point</p>
                <p>0P</p>
                </div>
                
            </div></div>
            <div className="mt-4 d-flex justify-content-between">
                <div className="">
                <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="htmlForm-check-label" htmlFor="flexRadioDefault1">
  10,000
  </label>
</div>
                </div>
                <div className="">
                <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="htmlForm-check-label" htmlFor="flexRadioDefault1">
  20,000
  </label>
</div>
                </div>
                <div className="">
                <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="htmlForm-check-label" htmlFor="flexRadioDefault1">
  50,000
  </label>
</div>
                </div>
            </div>
            
            <div className="mt-4">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <p>Bank Account</p>
                    </div>
                    <div className="col-md-9">
                    <input type="number" className='w-100 number_flied py-3 ps-3'  placeholder="Bank Account"/>
                    </div>
                </div>
                <div className="row align-items-center mt-3">
                    <div className="col-md-3">
                        <p>Cent Wallet</p>
                    </div>
                    <div className="col-md-9">
                    <input type="text" className='w-100 number_flied py-3 ps-3'  placeholder="Cent Wallet"/>
                    </div>
                </div>
                <div className="row align-items-center mt-3">
                    <div className="col-md-3">
                        <p>USDT Wallet</p>
                    </div>
                    <div className="col-md-9">
                    <input type="text" className='w-100 number_flied py-3 ps-3'  placeholder="USDT Wallet"/>
                    </div>
                </div>
            </div>

            <div className=" d-flex justify-content-center " style={{gap:"12px"}}>
            <button className='btn btn_same1 py-2 mt-3  '>Cancel</button>
            <button className='btn btn_same2 py-2 mt-3  text-white'>Submit</button>
            </div>
      </div>
      </TabPanel>
     
    </Box>
  );
}
