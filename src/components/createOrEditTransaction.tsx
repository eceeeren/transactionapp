import { DatePicker, Form, Input, InputNumber, Modal, Select } from 'antd';
import moment from 'moment';
import React from 'react';
import Transaction, { Currency } from '../models/transaction';


interface CreateOrEditTransactionProps {
    modalVisibility: boolean;
    onCreateOrUpdate: (values: any) => void;
    onCancel: () => void;
    initialValues: Transaction | null;
}


const CreateOrEditTransaction: React.FC<CreateOrEditTransactionProps> = ({
    modalVisibility,
    onCreateOrUpdate,
    onCancel,
    initialValues
  }) => {
    const [form] = Form.useForm();
    form.setFieldsValue(
        { 
            name: initialValues?.name, 
            description: initialValues?.description, 
            date: moment(initialValues?.date), 
            amount : initialValues?.amount, 
            currency: initialValues?.currency })
    return (
        <Modal
            title="Transaction"
            visible={modalVisibility}
            onCancel={onCancel}
            onOk={() => {
                form
                  .validateFields()
                  .then(values => {
                    form.resetFields();
                    let item = 
                    {
                        id : initialValues?.id, 
                        name: values.name, 
                        description: values.description, 
                        date: values.date,
                        amount: values.amount,
                        currency: values.currency
                    };
                    onCreateOrUpdate(item);
                  })
                  .catch(info => {
                    console.log('Validate Failed:', info);
                  });
              }}
        >
            <Form
                form={form}
                layout={'vertical'}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input value={initialValues?.name}/>
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Date"
                    name="date"
                >
                    <DatePicker/>
                </Form.Item>
                <Form.Item
                    label="Amount"
                    name="amount"
                    rules={[{ required: true, message: 'Please input your amount!' }]}
                >
                    <InputNumber/>
                </Form.Item>
                <Form.Item
                    label="Currency"
                    name="currency"
                    rules={[{ required: true, message: 'Please input your currency!' }]}
                >
                    {/* <Input/> */}
                    <Select>
                        <Select.Option value={Currency.TRY}>TRY</Select.Option>
                        <Select.Option value={Currency.USD}>USD</Select.Option>
                        <Select.Option value={Currency.EUR}>EUR</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default CreateOrEditTransaction;