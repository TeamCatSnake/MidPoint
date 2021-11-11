import React from 'react';
import Map from './Map'
import Sidebar from './Sidebar'

const Main = (props) => {

    return(
      <div id="main-content" className='mainStyles'>
        <Sidebar {...props}/>
        <Map {...props}/>
        <div style={{width: '60px'}}>
        </div>
      </div>
    )
}

export default Main;