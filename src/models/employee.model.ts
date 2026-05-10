export interface Employee {

    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    department: string;
    reportingManager: string;
    compensation: number;
}

export interface EmployeeOnboardingInfo extends Employee {

    isContractor: boolean;
}
