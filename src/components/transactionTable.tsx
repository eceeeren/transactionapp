import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import Transaction from '../models/transaction';

interface TransactionTableProps{
  dataSource: Transaction[];
  columns: ColumnsType<Transaction>;
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  dataSource,
  columns
}) => {
  return(<Table dataSource={dataSource} columns={columns} pagination={false} scroll={{x: true, y: 400}}/>)   
}

export default TransactionTable;