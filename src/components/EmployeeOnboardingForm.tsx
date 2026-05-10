import {Form, Input, InputNumber, Select, Switch} from "antd";
import * as React from "react";
import {
    ApartmentOutlined,
    BankOutlined,
    DollarOutlined,
    MailOutlined,
    MobileOutlined,
    UserOutlined
} from "@ant-design/icons";
import type {EmployeeOnboardingInfo} from "../models/employee.model.ts";

export const EmployeeOnboardingForm: React.FC = () => {
    return (
        <>
            <Form.Item<EmployeeOnboardingInfo>
                label="First Name"
                rules={[{required: true, message: "First Name is required"}]}
                layout="vertical"
                name="firstName"
            >
                <Input name="firstName" prefix={<UserOutlined/>}/>
            </Form.Item>
            <Form.Item<EmployeeOnboardingInfo>
                label="Last Name"
                rules={[{required: true, message: "Last Name is required"}]}
                layout="vertical"
                name="lastName"
            >
                <Input name="lastName" prefix={<UserOutlined/>}/>
            </Form.Item>
            <Form.Item<EmployeeOnboardingInfo>
                label="Email ID"
                rules={[{required: true, message: "Email ID is required"}]}
                layout="vertical"
                name="email"
            >
                <Input name="email" prefix={<MailOutlined/>}/>
            </Form.Item>
            <Form.Item<EmployeeOnboardingInfo>
                label="Phone Number"
                rules={[{required: true, message: "Phone Number is required"}]}
                layout="vertical"
                name="phoneNumber"
            >
                <Input name="phoneNumber" prefix={<MobileOutlined/>}/>
            </Form.Item>
            <Form.Item<EmployeeOnboardingInfo>
                label="Department"
                rules={[{required: true, message: "Department is required"}]}
                layout="vertical"
                name="department"
            >
                <Select
                    showSearch={{optionFilterProp: 'label'}}
                    placeholder="Select a Department"
                    options={[
                        {
                            value: 'Engineering - Platform Core',
                            label: 'Engineering - Platform Core',
                        },
                        {
                            value: 'Finance - Market Analytics',
                            label: 'Finance - Market Analytics',
                        }
                    ]}
                    prefix={<BankOutlined/>}
                />
            </Form.Item>
            <Form.Item<EmployeeOnboardingInfo>
                label="Reporting Manager"
                rules={[{required: true, message: "Reporting Manager is required"}]}
                layout="vertical"
                name="reportingManager"
            >
                <Select
                    showSearch={{optionFilterProp: 'label'}}
                    placeholder="Select a Department"
                    options={[
                        {
                            value: 'Pradeep Sharma',
                            label: 'Pradeep Sharma'
                        },
                        {
                            value: 'Sachin Malhotra',
                            label: 'Sachin Malhotra'
                        },
                        {
                            value: 'Kiran Kumar',
                            label: 'Kiran Kumar'
                        }
                    ]}
                    prefix={<ApartmentOutlined/>}
                />
            </Form.Item>
            <Form.Item<EmployeeOnboardingInfo>
                label="Annual Compensation (in Lakhs)"
                rules={[{required: true, message: "Annual Compensation is required"}]}
                layout="vertical"
                name="compensation"
            >
                <InputNumber name="compensation" min={1} prefix={<DollarOutlined/>}/>
            </Form.Item>
            <Form.Item<EmployeeOnboardingInfo>
                label="Is Contractor"
                name="isContractor"
                layout="horizontal"
            >
                <Switch/>
            </Form.Item>
        </>
    )
}
