import '@progress/kendo-theme-default/dist/all.css';
import './App.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  mainPage  from './mainPage';
import 'react-tabs/style/react-tabs.css';

function App() {
  

  return (
    <Tabs>
    <header  className="flex-container">
      <h1>Style </h1>
      <h1>Mian</h1>
       

     
      <div style={{ marginTop : "12px"}}>
        
      <button style={{ padding: "12px"}}>Upload</button>
      <div>Username</div>
    
      </div>

    </header>
    <TabList  className="flex-container">
      <Tab style={{ display : "none" , }}></Tab>
      <Tab>Add Style </Tab>
      <Tab>Edit</Tab>
      <button>Page  : Index  <i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></button>

    </TabList>

    <TabPanel>
    <div class="flex-container" style={{  marginTop : "83px",}}>
  <div class="flex-item-custom flex-item-1">
  <div>Button </div>

<div>-</div>
  </div>
  <div class="flex-item flex-item-2">
  <div>Primery </div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item flex-item-2">
  <div>Secondary </div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item flex-item-2">
  <div>Outline </div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
</div>
    <div class="flex-container" >
  <div class="flex-item-custom flex-item-1">
  <div>Alert   </div>

<div>-</div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Standard </div>

<div><i className="fa fa-angle-down" style={{ color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div> Warning </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Note </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>
    <div class="flex-container" >
  <div class="flex-item-custom flex-item-1">
  <div>Group </div>

<div>-</div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Selected </div>

<div><i className="fa fa-angle-down" style={{ color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div> Border </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Warning </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>
    
    
    
<div class="flex-container" style={{  marginTop : "",}}>
  <div class="flex-item-custom flex-item-1">
  <div>Heading </div>

<div>-</div>
  </div>
  <div class="flex-item flex-item-2">
  <div>H1 </div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item flex-item-2">
  <div>H2 </div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item flex-item-2">
  <div>H3</div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
</div>
    <div class="flex-container" >
  <div class="flex-item-custom flex-item-1">
  <div>Section   </div>

<div>-</div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Heading </div>

<div><i className="fa fa-angle-down" style={{ color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div> Section Title </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Section Text </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>
    <div class="flex-container" >
  <div class="flex-item-custom flex-item-1">
  <div>Text </div>

<div>-</div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Trip Text </div>

<div><i className="fa fa-angle-down" style={{ color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div> Warning Text </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Input Text </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>
    <div class="flex-container" >
  <div class="flex-item-custom flex-item-1">
  <div>Selection </div>

<div>-</div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Check Box </div>

<div><i className="fa fa-angle-down" style={{ color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div> Dropdown</div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Radio Buttons </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>
 
    
    </TabPanel>
    <TabPanel>
<div className="edit-container">
    <div class="flex-container" style={{ backgroundColor:"rgb(219, 217, 217)",  marginTop : "13px",marginBottom : "1px",}}>
  <div class="flex-item-heading-style flex-item-1">
  <div> <span>Add Style  </span> </div>


  </div>
  <div class="flex-item-heading-style  flex-item-2">
  <div><span> Dark</span> <span>-</span> <span>Light</span> </div>


  </div>

</div>
<div className="edit-container" style={{ backgroundColor:"rgb(219, 217, 217)",}}>
<span>Create Your own style</span>
    <div class="flex-container" >

        
    <input type="text" placeholder="Enter Your Style Here" />
    


      </div>
    <div class="flex-container" >

        
    <input type="text" placeholder="Enter the  CSS path of your  style Here" />
    


      </div>
    <div class="flex-container" >

        
    <input type="text" placeholder="Element On which you want to apply your style" />
    


      </div>
    <div class="flex-container" >

        
       <div className="div"></div>
       <div className=""  style={{display:"flex"}}>
       <h2>Create</h2>
        <h2 style={{marginLeft:"22px",marginRight:"22px"}}>|  </h2>
        <h2>Draft</h2>

       </div>
      </div>
      </div>
      </div>
    </TabPanel>
    <TabPanel>
    <div class="flex-container" style={{  marginTop : "13px",marginBottom : "13px",}}>
  <div class="flex-item-heading flex-item-1">
  <div> <span>Edit </span> </div>


  </div>
  <div class="flex-item-heading flex-item-heading2 flex-item-2">
  <div><span> Dark</span> <span>-</span> <span>Light</span> </div>


  </div>

</div>
<div className="editing-container">

    <div class="flex-container" >

  <div class="flex-item-button flex-item-2">
  <div>Appearance</div>

<div><i className="fa fa-angle-down" style={{ color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div style={{ marginTop : "12px" , }}>|</div>
  <div class="flex-item-button flex-item-2">
  <div> Conditional </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
 <div style={{ marginTop : "12px" , }}>|</div>  
  <div class="flex-item-button flex-item-2">
  <div>Transition</div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>





    <div class="flex-container" >

    <div class="flex-item-button-font flex-item-2">
  <div>Font </div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
  
  <div class="flex-item-button-biu flex-item-2">
  <div> B<div style={{ marginTop : "12px" , }}>|</div>I <div style={{ marginTop : "12px" , }}>|</div>U </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
 <div style={{ marginTop : "12px" , }}>|</div>  
  <div class="flex-item-button flex-item-2">
  <div>Transition</div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>





</div> 
    </TabPanel>
  </Tabs>
  );
}

export default App;
