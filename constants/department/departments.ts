import { FontAwesome, Ionicons } from "@expo/vector-icons";

export enum DepartmentType {
    BTech = "BTech",
    Diploma = "Diploma",
    HealthScience = "Health Science",
    ITI = "ITI"
}

export enum DiplomaDepartmentsEnum {
    ComputerScienceTechnology = "Computer Science & Technology",
    MechanicalEngineering = "Mechanical Engineering",
    ElectricalEngineering = "Electrical Engineering",
    ElectronicsTelecommunicationEngineering = "Electronics & Telecommunication Engineering",
    CivilEngineering = "Civil Engineering",
    AutomobileEngineering = "Automobile Engineering",
}

export enum DiplomaDepartmentsSubNameEnum {
    ComputerScienceTechnology = "CST",
    MechanicalEngineering = "ME",
    ElectricalEngineering = "EE",
    ElectronicsTelecommunicationEngineering = "ETCE",
    CivilEngineering = "CE",
    AutomobileEngineering = "AE",
}

export enum BTechDepartmentsEnum {
    ComputerScience = "Computer Science and Engineering",
    MechanicalEngineering = "Mechanical Engineering",
    ElectricalEngineering = "Electrical Engineering",
    MasterOfBusinessAdministration = "Master of Business Administration",
    CivilEngineering = "Civil Engineering",
}

export enum BTechDepartmentsSubNameEnum {
    ComputerScience = "CSE",
    MechanicalEngineering = "ME",
    ElectricalEngineering = "EE",
    MasterOfBusinessAdministration = "MBA",
    CivilEngineering = "CE",
}

export enum HealthScienceDepartmentsEnum {
    BachelorOfMedicalLaboratoryTechnology = "Bachelor of Medical Laboratory Technology",
    BachelorOfHospitalAdministration = "Bachelor of Hospital Administration"
}

export enum HealthScienceDepartmentsSubNameEnum {
    BachelorOfMedicalLaboratoryTechnology = "BMLT",
    BachelorOfHospitalAdministration = "BHA"
}

export enum ITIDepartmentsEnum {
    Fitter = "Fitter",
    Electrician = "Electrician"
}

export enum ITIDepartmentsSubNameEnum {
    Fitter = "Fitter",
    Electrician = "Electrician"
}

export type DepartmentDetailsType = {
    name: string;
    description: string;
    subName: string;
    icon: {
        IconProvider: typeof Ionicons | typeof FontAwesome;
        name: string;
    }
}