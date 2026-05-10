import {Button, Form, Modal, Table, type TableColumnsType} from "antd";
import type {Employee, EmployeeOnboardingInfo} from "../models/employee.model.ts";
import {UserAddOutlined} from "@ant-design/icons";
import {useState} from "react";
import {EmployeeOnboardingForm} from "../components/EmployeeOnboardingForm.tsx";

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
        dataIndex: 'compensation',
        render: (value: number) => `₹${value.toLocaleString('en-IN')}`
    }
]

const employeesData: Employee[] = [
    {
        orgId: 'C157311',
        firstName: 'Sai Rohith Reddy',
        lastName: 'Vangala',
        email: 'sairohith.vangala@quantco.com',
        phoneNumber: '9443687853',
        department: 'Engineering - Platform Core',
        reportingManager: 'Aravinder Reddy',
        compensation: 31.5
    },
    {
        orgId: 'EC187381',
        firstName: 'Anurag Reddy',
        lastName: 'Kasireddy',
        email: 'anurag.kasireddy@quantco.com',
        phoneNumber: '9893899183',
        department: 'Finance - Market Analytics',
        reportingManager: 'Pradeep Sharma',
        compensation: 17.5
    }
]

export const EmployeesDataGrid = () => {

    const [employees, setEmployees] = useState<Employee[]>(employeesData);
    const [isOnboardingFormOpen, setIsOnboardingFormOpen] = useState(false);
    const [onboardingForm] = Form.useForm<EmployeeOnboardingInfo>();

    const openOnboardingForm = (): void => {
        setIsOnboardingFormOpen(true);
    };

    const handleOnboardingFormClose = (): void => {
        setIsOnboardingFormOpen(false);
        onboardingForm.resetFields();
    }

    const handleOnboardingFormSubmit = (employeeFormData: EmployeeOnboardingInfo): void => {
        if (employeeFormData) {
            const newEmployeeOrgId = generateEmployeeOrgId(employeeFormData.isContractor);
            const registeredEmployee: Employee = {
                ...employeeFormData,
                orgId: newEmployeeOrgId
            };
            setEmployees(employeeRecords => [...employeeRecords, registeredEmployee]);
            handleOnboardingFormClose();
        }
    }

    const generateEmployeeOrgId = (isContractor: boolean): string => {
        const randomInteger = parseInt(Math.random().toFixed(6).replace("0.",""));
        return isContractor ? `EC${randomInteger}` : `C${randomInteger}`;
    }

    return (
        <>
            <div className={"data-grid-container"}>
                <div className={"grid-actions"}>
                    <Button type={"primary"} icon={<UserAddOutlined/>} onClick={openOnboardingForm}>Onboard</Button>
                </div>
                <Table dataSource={employees} columns={employeesDataColumns} id="orgId" bordered></Table>
            </div>
            <Modal
                title="Employee Onboarding"
                open={isOnboardingFormOpen}
                onCancel={handleOnboardingFormClose}
                okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
                okText="Submit"
                modalRender={(dom) => (
                    <Form
                        name="employeeOnboardingForm"
                        layout="vertical"
                        form={onboardingForm}
                        onFinish={handleOnboardingFormSubmit}
                        clearOnDestroy
                    >
                        {dom}
                    </Form>
                )}
            >
                <EmployeeOnboardingForm></EmployeeOnboardingForm>
            </Modal>
        </>
    );
}
