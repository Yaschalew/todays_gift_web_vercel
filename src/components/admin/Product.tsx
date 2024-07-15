import "./Category.css";
import React from "react";
import { Table, Button } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAllProduct } from "../../services/useProduct";

interface Product{
  name: string;
  description : string;
  price: number;
  category:[];
  tags:[];
  stock: number;
  thumbnail: string;
  images :[];
}

interface DataType {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const columns: ColumnsType<Product> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Image",
    dataIndex: "thumbnail",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Stock",
    dataIndex: "stock",
  },
  {
    title: "Tags",
    dataIndex: "tags",
  }
];


const Product = () => {
  const navigate = useNavigate();
  const {isProduct, products}= useAllProduct();
  // const mainProduct = products.map((item) => console.log(item))
  console.log(products)
  const handleAddProduct = () => {
    navigate('/admin/add-product');
  }
  const paginationConfig = {
    pageSize: 5,
  };
  
  if (isProduct) {
    return <div>Loading...</div>; 
  }
  return (
    <div>
      <div className="table-header">
        <h1 className="title">Products</h1>
        <Button onClick={handleAddProduct}>
          {" "}
          <PlusOutlined />
          Add
        </Button>
      </div>
      <Table columns={columns} dataSource={products}  pagination={paginationConfig}/>
    </div>
  );
};

export default Product;
