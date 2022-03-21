
import './App.css';
import 'antd/dist/antd.css'
import { GridRow } from './GridLayout';
import { LayoutComponent } from './LayoutComponent'
import { ButtonComponent } from './ButtonComponent';
import { MenuComponent } from './MenuComponent';
import { TableComponent } from './TableComponent';
import  {  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import { Layout,Menu } from "antd"
   const {Header,Content}=Layout

function App() {
  return (
    
    <div className="App">


      <h1 style ={{color:"blue",fontSize:"25px"}}> Ant Design  Practice</h1>
      <Router>
      <Header>
          <Menu theme ="dark" className="menu" style={{background:"#2596be"}}>
            <Menu.Item key="/" className="menu-item" >
            <Link to="/" className="menu-link" style ={{color:"white", fontSize:"25px"}}>Button Practice</Link>
            </Menu.Item>
            <Menu.Item key="grid" className="menu-item">
            <Link to="/grid"  className="menu-link" style ={{color:"white", fontSize:"25px"}}> Grid Practice</Link>
            </Menu.Item>
            <Menu.Item key="laylout" className="menu-item">
            <Link to="/layout"  className="menu-link" style ={{color:"white", fontSize:"25px"}}> Layout Practice</Link>
            </Menu.Item>
            <Menu.Item key="menu" className="menu-item">
            <Link to="/menu"  className="menu-link" style ={{color:"white", fontSize:"25px"}}> Menu Practice</Link>
            </Menu.Item>
            <Menu.Item key="dropdown" className="menu-item">
            <Link to="/table"  className="menu-link" style ={{color:"white", fontSize:"25px"}}> Table Practice</Link>
            </Menu.Item>
            <Menu.Item key="form" className="menu-item" style ={{marginLeft:"20px"}}>
            <Link to="/form"  className="menu-link" style ={{color:"white", fontSize:"25px"}}> Form Practice</Link>
            </Menu.Item>
            <Menu.Item key="input" className="menu-item">
            <Link to="/input"  className="menu-link" style ={{color:"white", fontSize:"25px"}}> Input Practice</Link>
            </Menu.Item>
        </Menu>
        </Header>
        
        <Routes>
          <Route path="/" element={<ButtonComponent/>}>
         
          </Route>
          <Route path="/grid" element={<GridRow/>}>
    
          </Route>
          <Route path="/layout" element={<LayoutComponent/>}>
   
          </Route>
          <Route path="/menu" element={<MenuComponent/>}>
   
          </Route>
          <Route path="/table" element={<TableComponent/>}>
   
   </Route>
          </Routes>


      </Router>
   
      <Content></Content>
    </div>
  );
}

export default App;
