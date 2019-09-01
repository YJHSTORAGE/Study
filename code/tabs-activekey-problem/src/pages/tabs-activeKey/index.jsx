import React, { Component } from 'react';
import { Tabs, Button } from 'antd';

const { TabPane } = Tabs ;

class  TabsActivekey extends Component {
  constructor() {
    super()

    this.state={
      activeKey:"0",
      dataSource:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    }
  }

  handleClick = () => {
    const { activeKey, dataSource } = this.state
    console.log(dataSource.push(dataSource.length+1))
    this.setState({
      activeKey:String(Number(activeKey)+20),
      dataSource
    })
  }
  
  switchTabPane = ( e ) => {
    this.setState({
      activeKey:e
    })
  }
  
  handleTabClick = (e) => {
    console.log(e)
    this.setState({
      activeKey:e
    })
  }

  render() {
    const { activeKey, dataSource } = this.state
    return(
      <div className="TabsActivekey">
        <h1>目前Tabs组件遇到的activekey属性困扰用户体验，当tab项太多的时候，activekey属性不能定位到视野之中</h1>
        <hr />
        <Tabs activeKey={ activeKey } defaultActiveKey="1" tabPosition='top' style={{ height: 220 }} onTabClick={ this.handleTabClick } onChange={ this.switchTabPane }>
          {dataSource.map(i => (
            <TabPane tab={`Tab-${i}`} key={i} >
              Content of tab {i}
            </TabPane>
          ))}
        </Tabs>
        <Button onClick={ this.handleClick }>点击切换</Button>
      </div>
    )
  }
}
export default TabsActivekey;