import React, { useState ,useEffect} from "react";

import { Table, Tag, Space,Button,Modal ,Input} from "antd";
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'

const data = [
  {
    key: 1,
    firstName: "worash",
    lastName: "aboche",
    age: 32,
    address: "addiss ababa",
    tags: ["nice", "developer"],
  },
  {
    key: 2,
    firstName: "mnte",
    lastName: "aboche",
    age: 28,
    address: "marhabete",
    tags: ["nice", "teacher"],
  },
  {
    key: 3,
    fistName: "henok",
    lastName: "aboche",
    age: 25,
    address: "debre brhan",
    tags: ["loser"],
  },
];

const userData = [
    {
        key: 1,
        name: "bole",
        age: 20,
        address:"address 1"
    },
    {
        key: 2,
        name: "bole 2",
        age: 30,
        address:"address 2"
    },
    {
        key: 3,
        name: "bole 3",
        age: 10,
        address:"address 3"
    },   {
        key: 4,
        name: "bole 4",
        age: 25,
        address: "address 4",
    
    }
]


const columns = [{
    title: "Name",
    dataIndex: "name",
    key: "key",
    render: name1=> {
        return <a > { name1 }</a>
       }
}, {
    title: "Age",
    dataIndex: "age",
    key: "key",
    sorter: (a, b) => a.age - b.age
    
    }, {
        title: "Address",
        dataIndex: "address",
        key:"key"
    },
    { title: "Graguated",
        key: "key",
        render: payload => {
          return <p>{ payload.age>20? "True":"False"}</p>
     }
    }
]

// third table 
const third_table_columns = [{
    title: "Id",
    dataIndex: "id",
    key:1
},
{
    title: "User Id",
    dataIndex: "userId",
    key: 2,
    sorter: (record1, record2) => {
        return record1.userId > record2.userId;
    }
    },
    {
        title: "Status",
        dataIndex: "completed",
        key: 3,
        render: (completd) => {
            return <p> {completd ?"Completed":"Inprogress"}</p>
        },
        filters: [
            { text: "Complete", value: true },
            { text: "In Progress", value: false }
        ],
        onFilter: (value, record) => {
          return   record.completed ===value
        }
    }]



const { Column, ColumnGroup } = Table;
export const TableComponent = () => {
   const [loading,setLoading] =useState(false)
    const [dataSource, setDataSource] = useState([])
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(11);
    const [isEditing, setIsEditing] = useState(false)
    const [editingStudent,setEditingStudent] =useState(null)
    const [studentData, setStudentData] = useState([
        {
            id: 1,
            name: 'abebe',
            email: "abebe@gmail.com",
            address:"addis ababa"
        },
        {
            id: 2,
            name: 'kebede',
            email: "kebede@gmail.com",
            address:"kebede addis"
        },
        {
            id: 3,
            name: 'alemu',
            email: "alemu@gmail.com",
            address:"alemu ababa"
        },
        {
            id: 4,
            name: 'azna',
            email: "azna@gmail.com",
            address:"azna ababa"
        },
        {
            id: 5,
            name: 'abebe',
            email: "abebe@gmail.com",
            address:"addis ababa"
       }
    ])
    const studentColums = [{
        key: "1",
        title: "Id",
        dataIndex:"id"
    },
    {
        key: "2",
        title: "Name",
        dataIndex:"name"
        },
        {
            key: "3",
            title: "Email",
            dataIndex:"email"
        },
        {
            key: "4",
            title: "Address",
            dataIndex:"address"
        },
        {
            key: "5",
            title: "Actions",
            render: (record) => {
              return(  <>
                  <EditOutlined style={{ color: "blue", marginLeft: 10, fontSize: 18 }} onClick={() => { onEdit(record) }} />
                  <DeleteOutlined style={{ color: "red", marginLeft: 10, fontSize: 18 }} onClick={() =>{onDelete(record)}} />
                    
                </>
              )
            }
     }
    ]
    
    useEffect(() => {
       
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => {
              
                setDataSource(data)
               
            })
            .catch(err => {
             console.log(err)
            }).finally(() => {
                setLoading(false)
            })
          
    })

    const addStudent = () => {
        const randomNumber = parseInt(Math.random() * 1000);
        const newStudent = {
            id: randomNumber,
            name: "name" + randomNumber,
            email: randomNumber + "@gmail.com",
            address:"address" +randomNumber
        }
        setStudentData((pre) => {
             return  [...pre, newStudent]
        })
    }

    const onDelete = (record) => {
        Modal.confirm({
            title: "are you shure to delete this record",
            okText: "Yes",
            okType:"danger",
            onOk: () => {
                setStudentData(pre => {
                    return pre.filter(student => student.id !== record.id);
                }) 
            }
        })
      
    }
    const onEdit = (record) => {
        setIsEditing(true)
        setEditingStudent({...record})
    }
    const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null)
    }
  return (
    <>
      <Table dataSource={data} bordered="true">
        <ColumnGroup title="Name">
          <Column title="Fisrt Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
          </Table>
          {
              //second table
          }
          <Table dataSource={userData}
          columns ={columns}>
          </Table>
          {
              //third table
          }
          <Table
            loading ={loading}
              dataSource={dataSource}
              columns={third_table_columns}
              pagination={{
                  current:page,
                  pageSize: pageSize,
                  onChange: (page, pageSize) => {
                      setPage(page);
                      setPageSize(pageSize)
                      // to update the table accrording to page and page size
                      // make API call here  wuth page and page size
                  }
              }
              }>

          </Table>
          {
              //end of fourth table
          }
          <Button onClick ={addStudent}
              style={{ color: "blue", border: "2px solid #111"}}> Add New Student</Button>
          <Table style={{marginTop:20}}
              columns={studentColums}
              dataSource={studentData}
          >

          </Table>
          <Modal 
              title="Edit Student"
              okText="Save"
              visible={isEditing}
              onCancel={() => {
                  resetEditing()
              }}
              onOk={() => {
                  setStudentData(pre => {
                      return pre.map(student => {
                          if (student.id === editingStudent.id) {
                              return editingStudent;
                          }
                          else {
                              return student
                          }
                      })
                  })
                  resetEditing()

              }}

          >
              <Input value={editingStudent?.name} onChange={(e) => {
                  setEditingStudent(pre => {
                      return {...pre,name:e.target.value}
                  })
              } }/>
              <Input value={editingStudent?.email} onChange={(e) => {
                  setEditingStudent(pre => {
                      return {...pre,email:e.target.value}
                  })
              } } />
              <Input value ={editingStudent?.address} onChange={(e) => {
                  setEditingStudent(pre => {
                      return {...pre,address:e.target.value}
                  })
              } }/>
          </Modal>
    </>
  );
};
