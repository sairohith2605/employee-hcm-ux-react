import {Button, Table, type TableColumnsType} from "antd";
import type {Employee} from "../models/employee.model.ts";
import {UserAddOutlined} from "@ant-design/icons";
import {useState} from "react";

const employeesDataColumns: TableColumnsType<Employee> = [
    {
        key: 'orgId',
        title: 'Employee ID',
        dataIndex: 'orgId'
    },
    {
        key: 'firstName',
        title: 'First Name',
        dataIndex: 'firstName'
    },
    {
        key: 'lastName',
        title: 'Last Name',
        dataIndex: 'lastName'
    },
    {
        key: 'email',
        title: 'Email',
        dataIndex: 'email'
    },
    {
        key: 'phoneNumber',
        title: 'Phone Number',
        dataIndex: 'phoneNumber'
    },
    {
        key: 'department',
        title: 'Department',
        dataIndex: 'department'
    },
    {
        key: 'reportingManager',
        title: 'Reporting Manager',
        dataIndex: 'reportingManager'
    },
    {
        key: 'compensation',
        title: 'Compensation (L/Annum)',
        dataIndex: 'compensation'
    }
]

const employeesData: Employee[] = [
    {
        orgId: 'C157311',
        firstName: 'Sai Rohith Reddy',
        lastName: 'Vangala',
        email: 'sairohith.vangala@coneng.com',
        phoneNumber: '9999900111',
        department: 'Engineering - Platform Core',
        reportingManager: 'Vijay Mishra',
        compensation: 31.5
    },
    {
        orgId: 'EC187381',
        firstName: 'Anurag Reddy',
        lastName: 'Kasireddy',
        email: 'anurag.kasireddy@coneng.com',
        phoneNumber: '9893899183',
        department: 'Finance - Market Analytics',
        reportingManager: 'Pradeep Sharma',
        compensation: 17.5
    }
]

export const EmployeesDataGrid = () => {

    const [employees] = useState<Employee[]>(employeesData);

    const openOnboardingForm = (): void => {
        console.log('openOnboardingForm');
    };

    return (
        <div className={"data-grid-container"}>
            <div style={{paddingBottom: "1rem", display: "flex", justifyContent: "flex-end"}}>
                <Button type={"primary"} icon={<UserAddOutlined/>} onClick={openOnboardingForm}>Onboard</Button>
            </div>
            <Table dataSource={employees} columns={employeesDataColumns} bordered></Table>
        </div>
    );
}
