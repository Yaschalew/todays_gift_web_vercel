import './Category.css'
import { Table, Button,Modal, Flex, Spin } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { PlusOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useCategory } from '../../services/useCategory';


type Category = {
  uid: number;
  name: string;
  parent: string;
  children: [];
  type: string;
};

const columns: ColumnsType<Category> = [
  {
    title: '#',
    dataIndex: 'no',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];


const onChange: TableProps<Category>['onChange'] = (pagination, filters, sorter, extra) => {
};



const Category = () => {
  const {isCategory, error, categories } = useCategory();
  const MainCategories = categories?.filter((item :Category) => item.type == 'root') 
  console.log(MainCategories)
  const navigate = useNavigate();
  
  const { confirm } = Modal;
  const editHandler = (id:any) => {
    navigate("/admin/add-category/" + id, { replace: true });
  };
  // const showConfirm = (id: any) => {
  //   confirm({
  //     icon: <ExclamationCircleOutlined />,
  //     title: "Are you sure to delete user?",
  //     content: "User data is not recoverable.",
  //     okButtonProps: { className: "custom-ok-button" },
  //     onOk() {
  //       client
  //         .delete("/categories/" + id)
  //         .then((response) => {
  //           fetchCategories();
  //           alert(id)
  //         });
  //         client
  //         .get("/deleteFiles/" + id)
  //         .then((response) => {
  //           fetchCategories();
  //         });
  //     },
  //     onCancel() {
  //       console.log("Cancel");
  //     },
  //   });
  // };

  // const fetchCategories = () => {
  //   client.get("/categories").then(response => {
  //     let localAdvertData:any = [];
  //     response.data.forEach((element:any, index: any) => {
  //       localAdvertData = [
  //         ...localAdvertData,
  //         {
  //           ...element,
  //           no: index +1,
  //           createdAt: element.createdAt.split("T")[0],
  //           updatedAt: element.updatedAt.split("T")[0],
  //           action: (
  //             <div>
  //               <Button
  //             className='edit-button'
  //                 onClick={() => editHandler(element.id)}
  //               >
  //                 Edit
  //               </Button>{" "}
  //               <Button
  //                 onClick={() => showConfirm(element.id)}
  //                 type="primary"
  //                 danger
  //               >
  //                 Delete
  //               </Button>
  //             </div>
  //           ),
  //         },
  //       ];
  //       setCategory(localAdvertData);
  //     });
  //     // setCategory(response.data);
  //   })
  // }
  // useEffect(()=>{
  // fetchCategories();
  //   }, [])

    const paginationConfig = {
      pageSize: 20,
    };

    if (isCategory) {
      return (
      <Flex className="flex-col items-center space-y-20 justify-center">
        <h1 className="font-semibold">Loading ...</h1>
        <Spin/>
      </Flex>
      )}

    return <div>
        <div className='table-header'>
            <h1 className='title'>Categories</h1>
        <Button> 
          <Link to={"/admin/add-category/new"}><PlusOutlined className='icon' />Category</Link>
          </Button>
        </div>
        <Table columns={columns}  dataSource={categories} onChange={onChange} pagination={paginationConfig}/>
    </div>
}
export default Category;
