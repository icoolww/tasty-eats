
import React from 'react';
import Button from '';
  
const Breakfast = () => {
  
  return (
    <div style={{
      display: 'flex',
      margin: 'auto',
      width: 400,
      flexWrap: 'wrap',
    }}>
      <div style={{ width: '100%', float: 'left' }}>
      </div>
      <Button variant="contained">Breakfast</Button>
      <Button variant="contained" color="primary">
        Lunch
      </Button>
      <Button variant="contained" color="secondary">
        Dinner
      </Button>
      
      <span onClick={onClick} className={classes.selectbutton}>
      {children}

    </span>
    </div>
  );
}
  
export default Breakfast;