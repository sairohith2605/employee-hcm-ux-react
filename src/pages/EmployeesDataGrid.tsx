import {Button, Form, Modal, notification, Table, type TableColumnsType} from "antd";
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

export const EmployeesDataGrid = () => {

    const [employees, setEmployees] = useState<Employee[]>([]);
    const [isOnboardingFormOpen, setIsOnboardingFormOpen] = useState(false);
    const [onboardingForm] = Form.useForm<EmployeeOnboardingInfo>();
    const [notifApi, contextHolder] = notification.useNotification();

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
            dispatchSuccessNotification();
        }
    }

    const generateEmployeeOrgId = (isContractor: boolean): string => {
        const randomInteger = parseInt(Math.random().toFixed(6).replace("0.",""));
        return isContractor ? `EC${randomInteger}` : `C${randomInteger}`;
    }

    const dispatchSuccessNotification = () => {
        notifApi.success({
            title: 'Employee Onboarding',
            description: 'The employee has been onboarded successfully.',
        })
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
            {contextHolder}
        </>
    );
}
