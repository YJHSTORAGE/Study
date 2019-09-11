import React, { Component } from 'react'
import { Table, Divider, Tag, Button } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',

    render: text => <Button>{text}</Button>,
  },
  {
    title: 'Age',
    dataIndex: 'age',

  },
  {
    title: 'Address',
    dataIndex: 'address',

  },
  {
    title: 'Tags',

    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',

    render: (text, record) => (
      <span>
        <Button>Invite {record.name}</Button>
        <Divider type="vertical" />
        <Button>Delete</Button>
      </span>
    ),
  },
];

const data = [
  {
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

class TableNeedKey extends Component {

  constructor() {
    super()

    this.state = {

    }

  }

  render() {
    return (
      <Table columns={columns} dataSource={data} />
    )
  }
}
export default TableNeedKey