import React from "react"
import { Layout } from "antd"
import  './layout.css'


const {Header,Content,Sider,Footer} = Layout

export const LayoutComponent = () => {
    
    return (
        <div style={{margin:"20px 10px"}}>
            <Layout className="site-layout">
                <Sider style={{ background: "#063970", color: "#fff", fontSize: "25px" }}>
                    
            </Sider>
        <Layout>
          <Header style={{background:"#23873e",color:"#fff"}}>Header</Header>
                    <Content style={{ with: "100%", height:"500px", background:"#233087" }}>Content
                    
                    </Content>
          <Footer style={{background:"#236c87"}}>Footer</Footer>
        </Layout>
            </Layout>
          
        
        </div>
    )
}