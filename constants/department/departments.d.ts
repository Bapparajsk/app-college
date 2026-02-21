import { Ionicons } from "@expo/vector-icons";

export enum DepartmentType {
    BTech = "BTech",
    Diploma = "Diploma",
    HealthScience = "Health Science",
    ITI = "ITI"
}

export enum DiplomaDepartments {
    ComputerScienceTechnology = "Computer Science & Technology",
    MechanicalEngineering = "Mechanical Engineering",
    ElectricalEngineering = "Electrical Engineering",
    ElectronicsTelecommunicationEngineering = "Electronics & Telecommunication Engineering",
    CivilEngineering = "Civil Engineering",
    AutomobileEngineering = "Automobile Engineering",
}

export enum BTechDepartments {
    ComputerScience = "Computer Science and Engineering",
    MechanicalEngineering = "Mechanical Engineering",
    ElectricalEngineering = "Electrical Engineering",
    MasterOfBusinessAdministration = "Master of Business Administration",
    CivilEngineering = "Civil Engineering",
}

export enum HealthScienceDepartments {
    BachelorOfMedicalLaboratoryTechnology = "Bachelor of Medical Laboratory Technology",
    BachelorOfHospitalAdministration = "Bachelor of Hospital Administration"
}

export enum ITIDepartments {
    Fitter = "Fitter",
    Electrician = "Electrician"
}

export type DepartmentDetails = {
    name: string;
    description: string;
    icon: {
        IconProvider: typeof Ionicons;
        name: string;
    }
}