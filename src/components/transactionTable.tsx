import { Table } from 'antd';
import React from 'react';

interface TransactionTableProps{
  dataSource: any;
  columns: any;
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  dataSource,
  columns
}) => {
  return(<Table dataSource={dataSource} columns={columns} pagination={false} scroll={{x: true, y: 400}}/>)   
}

export default TransactionTable;