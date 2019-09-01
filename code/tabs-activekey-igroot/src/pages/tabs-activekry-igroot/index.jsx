import React, { Component } from 'react';
import { Tabs, Button } from 'igroot';

const { TabPane } = Tabs ;

class  TabsActivekey extends Component {
  constructor() {
    super()

    this.state={
      activeKey:"0",
      dataSource:[
        {id:0,name:''}
      ]
    }
  }

  handleClick = () => {
    const { dataSource } = this.state
    console.log(dataSource.push({id:dataSource.length+1,name:''}))
    this.setState({
      activeKey:String(dataSource.length),
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
          {dataSource.map(item => (
            <TabPane tab={`Tab-${item.id}`} key={item.id} >
              Content of tab {item.id}
            </TabPane>
          ))}
        </Tabs>
        <Button onClick={ this.handleClick }>点击切换</Button>
      </div>
    )
  }
}
export default TabsActivekey;