import React,{useState} from "react";
import { Menu, Layout, Breadcrumb ,Row,Col} from "antd";
import {MailOutlined, AppstoreOutlined,SettingOutlined } from  "@ant-design/icons"

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

export const MenuComponent = () => {

    const [current, setCurrent] = useState("mail")
    
    const handleClick = (e) => {
        console.log("click",e)
        setCurrent({current:e.key})
    }
  return (
      <div style={{ margin: "20px 10px" }}>
          
          <Layout>
              <Sider style ={{background:"#3e2387" ,width:500 ,zIndex: 2}}>
                  
              <Menu 
        onClick={handleClick}
      
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="vertical"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
             </Sider>
         
      <Layout>
        <Header style={{ position: "fixed", zIndex: 2, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" selectedKeys={[current]}  onClick ={handleClick}>
            <Menu.Item key="mail" icon ={<MailOutlined/>}>Home</Menu.Item>
            <Menu.Item key="app" icon={<AppstoreOutlined/>}>About US</Menu.Item>
              
                          <SubMenu  key ="submenu" title="Product Title">
                              <Menu.ItemGroup title="Product Title">
                                  <Menu.Item>one</Menu.Item>
                                  <Menu.Item>two</Menu.Item>
                                  <Menu.Item>three</Menu.Item>

                              </Menu.ItemGroup>
                              <Menu.ItemGroup title="Category Title">
                                  <Menu.Item>one</Menu.Item>
                                  <Menu.Item>two</Menu.Item>
                                  <Menu.Item>three</Menu.Item>

                                </Menu.ItemGroup>
                         </SubMenu>
                          


                      </Menu>
                      


        </Header>

       
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, }}>
      <Breadcrumb style={{ margin: '16px 0'}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Content
      </div>
    </Content>
        
        <Footer style={{ background: "#236c87" }}>Footer</Footer>
              </Layout>
              </Layout>
    </div>
  );
};
