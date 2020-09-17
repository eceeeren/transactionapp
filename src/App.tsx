import React, { useState } from 'react';
import TransactionTable from './components/transactionTable';
import CreateOrEditTransaction from './components/createOrEditTransaction';
import './App.less';
import logo from './App-logo.png';
import { Button, Popconfirm } from 'antd';
import Transaction, { Currency } from './models/transaction';
import moment from 'moment';

const buttonStyle = {
  margin: '20px',
};


const startingDataSource  = [
  {
    id: 1,
    name: 'A',
    description: 'asjdasd',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.TRY
  },
  {
    id: 2,
    name: 'B',
    description: 'ajbsdlkas',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.EUR
  },
  {
    id: 3,
    name: 'A',
    description: 'asjdasd',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.TRY
  },
  {
    id: 4,
    name: 'B',
    description: 'ajbsdlkas',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.EUR
  },
  {
    id: 5,
    name: 'A',
    description: 'asjdasd',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.TRY
  },
  {
    id: 6,
    name: 'B',
    description: 'ajbsdlkas',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.EUR
  },
  {
    id: 7,
    name: 'A',
    description: 'asjdasd',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.TRY
  },
  {
    id: 8,
    name: 'B',
    description: 'ajbsdlkas',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.EUR
  },
  {
    id: 9,
    name: 'A',
    description: 'asjdasd',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.TRY
  },
  {
    id: 10,
    name: 'B',
    description: 'ajbsdlkas',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.EUR
  },
  {
    id: 11,
    name: 'A',
    description: 'asjdasd',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.TRY
  },
  {
    id: 12,
    name: 'B',
    description: 'ajbsdlkas',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.EUR
  },
  {
    id: 13,
    name: 'A',
    description: 'asjdasd',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.TRY
  },
  {
    id: 14,
    name: 'B',
    description: 'ajbsdlkas',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.EUR
  },
  {
    id: 15,
    name: 'A',
    description: 'asjdasd',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.TRY
  },
  {
    id: 16,
    name: 'B',
    description: 'ajbsdlkas',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.EUR
  },
  {
    id: 17,
    name: 'A',
    description: 'asjdasd',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.TRY
  },
  {
    id: 18,
    name: 'B',
    description: 'ajbsdlkas',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.EUR
  },
  {
    id: 19,
    name: 'A',
    description: 'asjdasd',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.TRY
  },
  {
    id: 20,
    name: 'B',
    description: 'ajbsdlkas',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.EUR
  },
  {
    id: 21,
    name: 'A',
    description: 'asjdasd',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.TRY
  },
  {
    id: 22,
    name: 'B',
    description: 'ajbsdlkas',
    date: new Date('2020-10-17'),
    amount: 100,
    currency: Currency.EUR
  },
];

const App = () => {

  
  const [modalVisibility, setModalVisibility] = useState(false);
  const [dataSource, setDataSource] = useState(startingDataSource);
  const [initialValues, setInitialValues] = useState<Transaction|null>(null);

  const showModal = () => {
    setInitialValues(null);
    setModalVisibility(true);
  };

  const handleCancel = () => {
    setInitialValues(initialValues);
    setModalVisibility(false);
  };

  const onCreate = (values: any) => {
    let lastId = dataSource.sort(function(a, b) {
      return b.id - a.id;
    })[0].id;
    let newItem : Transaction = {
      id : lastId +1,
      name : values.name,
      description: values.description,
      date: values.date,
      amount: values.amount,
      currency: values.currency
    };
    setDataSource([...dataSource, newItem]);
    setModalVisibility(false);
  };

  const onUpdate = (values: any) => {
    let itemIndex = dataSource.findIndex((item => item.id == values.id));
    dataSource[itemIndex].name = values.name;
    dataSource[itemIndex].description = values.description;
    dataSource[itemIndex].date = values.date;
    dataSource[itemIndex].amount = values.amount;
    dataSource[itemIndex].currency = values.currency;
    console.log(dataSource)
    setDataSource(dataSource);
    setModalVisibility(false);
  };

  const onCreateOrUpdate = (values: any) => {
    console.log(values)
    if(!values.id){
      onCreate(values);
    }
    else{
      onUpdate(values);
    }
    
  };

  const confirmDelete = (id: number) => {
    const newDataSource = dataSource.filter((item) => item.id !== id);
    setDataSource(newDataSource);
  };

  const update = (record: any) => {
    setInitialValues(record)
    setModalVisibility(true);
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: Date) => (
        moment(date).toISOString().split('T')[0]
      )
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
      render: (value: Currency) => (
        Currency[value]
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (record: any) => (
          <div>
            <Button type="primary" onClick={() => update(record)}>Edit</Button>
            &nbsp;
            <Popconfirm
              title="Are you sure delete this task?"
              onConfirm={() => confirmDelete(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" href="#">Delete</Button>
            </Popconfirm>
          </div>
          
      )
    }
  ];

  return (
    <div > 
      <img src={logo} className="logo" style={{height: 100 , margin:30 }}/><br/>
       <Button id="new-transaction" type="primary" onClick={showModal} style={buttonStyle}>
        New Transaction
      </Button>
      <CreateOrEditTransaction 
        modalVisibility={modalVisibility}
        onCancel={handleCancel}
        onCreateOrUpdate = {onCreateOrUpdate}
        initialValues={initialValues}
      />
      <TransactionTable 
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
}

export default App;
