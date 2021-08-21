import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Zoom } from '@material-ui/core';
import TabPanel from './TabPanel';
import PortfolioArray from './PortfolioArray';
import DynamicPortfolio from './DynamicPortfolio';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
  },
  rootTabs: {
    backgroundColor: '#ae8fdb',
  },
  rootTab: {
    color: 'black',
    'font-family': "'Raleway', 'sans-serif'",
    'font-weight': 700,
    'z-index': 10,
  },
  indicator: {
    backgroundColor: '#ffffff',
    height: '100%',
    'border-top-left-radius': '5px',
    'border-top-right-radius': '5px',
  },
}));

export default function PortfolioTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setChecked((prev) => prev);
  };

  return (
    <div className={classes.root} data-aos="fade-left">
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        classes={{
          root: classes.rootTabs,
          indicator: classes.indicator,
        }}
      >
        <Tab label="All" classes={{ root: classes.rootTab }} />
        <Tab label="JavaScript" classes={{ root: classes.rootTab }} />
        <Tab label="React" classes={{ root: classes.rootTab }} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Zoom in={checked} timeout={500}>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3">
            {PortfolioArray.map((val, ind) => {
              return (
                <div key={ind}>
                  <DynamicPortfolio
                    header={val.header}
                    code={val.code}
                    para={val.para}
                    thumbnail={val.thumbnail}
                    images={val.images}
                    link={val.link}
                  />
                </div>
              );
            })}
          </div>
        </Zoom>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Zoom in={checked} timeout={500}>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3">
            {PortfolioArray.map((val, ind) => {
              return (
                <div
                  className={val.type === 'js' ? 'block' : 'hidden'}
                  key={ind}
                >
                  <DynamicPortfolio
                    header={val.header}
                    code={val.code}
                    para={val.para}
                    thumbnail={val.thumbnail}
                    images={val.images}
                    link={val.link}
                  />
                </div>
              );
            })}
          </div>
        </Zoom>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Zoom in={checked} timeout={500}>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3">
            {PortfolioArray.map((val, ind) => {
              return (
                <div
                  className={val.type === 'react' ? 'block' : 'hidden'}
                  key={ind}
                >
                  <DynamicPortfolio
                    header={val.header}
                    code={val.code}
                    para={val.para}
                    thumbnail={val.thumbnail}
                    images={val.images}
                    link={val.link}
                  />
                </div>
              );
            })}
          </div>
        </Zoom>
      </TabPanel>
    </div>
  );
}
