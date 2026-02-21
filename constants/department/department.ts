import { Ionicons } from "@expo/vector-icons"
import { BTechDepartments, DepartmentDetails, DepartmentType, DiplomaDepartments, HealthScienceDepartments, ITIDepartments } from "./departments"

export const DiplomaDepartmentsDetails: Record<DiplomaDepartments, DepartmentDetails> = {
    [DiplomaDepartments.ComputerScienceTechnology]: {
        name: DiplomaDepartments.ComputerScienceTechnology,
        description: "Focuses on the study of computer science and technology, including programming, software development, and computer hardware.",
        icon: {
            IconProvider: Ionicons,
            name: "laptop-outline"
        }
    },
    [DiplomaDepartments.MechanicalEngineering]: {
        name: DiplomaDepartments.MechanicalEngineering,
        description: "Covers the design, analysis, manufacturing, and maintenance of mechanical systems.",
        icon: {
            IconProvider: Ionicons,
            name: "settings-outline"
        }
    },
    [DiplomaDepartments.ElectricalEngineering]: {
        name: DiplomaDepartments.ElectricalEngineering,
        description: "Involves the study of electricity, electronics, and electromagnetism.",
        icon: {
            IconProvider: Ionicons,
            name: "flash-outline"
        }
    },
    [DiplomaDepartments.ElectronicsTelecommunicationEngineering]: {
        name: DiplomaDepartments.ElectronicsTelecommunicationEngineering,
        description: "Focuses on electronic devices, circuits, communication equipment like transmitters, receivers, integrated circuits (IC).",
        icon: {
            IconProvider: Ionicons,
            name: "wifi-outline"
        }
    },
    [DiplomaDepartments.CivilEngineering]: {
        name: DiplomaDepartments.CivilEngineering,
        description: "Deals with the design, construction, and maintenance of the physical and naturally built environment.",
        icon: {
            IconProvider: Ionicons,
            name: "business"
        }
    },
    [DiplomaDepartments.AutomobileEngineering]: {
        name: DiplomaDepartments.AutomobileEngineering,
        description: "Focuses on the design, development, manufacturing, and testing of automobiles.",
        icon: {
            IconProvider: Ionicons,
            name: "car-outline"
        }
    }
}

export const BTechDepartmentsDetails: Record<BTechDepartments, DepartmentDetails> = {
    [BTechDepartments.ComputerScience]: {
        name: BTechDepartments.ComputerScience,
        description: "Focuses on the study of computer science and engineering, including programming, software development, and computer hardware.",
        icon: {
            IconProvider: Ionicons,
            name: "laptop-outline"
        }
    },
    [BTechDepartments.MechanicalEngineering]: {
        name: BTechDepartments.MechanicalEngineering,
        description: "Covers the design, analysis, manufacturing, and maintenance of mechanical systems.",
        icon: {
            IconProvider: Ionicons,
            name: "settings-outline"
        }
    },
    [BTechDepartments.ElectricalEngineering]: {
        name: BTechDepartments.ElectricalEngineering,
        description: "Involves the study of electricity, electronics, and electromagnetism.",
        icon: {
            IconProvider: Ionicons,
            name: "flash-outline"
        }
    },
    [BTechDepartments.MasterOfBusinessAdministration]: {
        name: BTechDepartments.MasterOfBusinessAdministration,
        description: "Focuses on business management, administration, and leadership skills.",
        icon: {
            IconProvider: Ionicons,
            name: "briefcase-outline"
        }
    },
    [BTechDepartments.CivilEngineering]: {
        name: BTechDepartments.CivilEngineering,
        description: "Deals with the design, construction, and maintenance of the physical and naturally built environment.",
        icon: {
            IconProvider: Ionicons,
            name: "business"
        }
    }
}

export const HealthScienceDepartmentsDetails: Record<HealthScienceDepartments, DepartmentDetails> = {
    [HealthScienceDepartments.BachelorOfMedicalLaboratoryTechnology]: {
        name: HealthScienceDepartments.BachelorOfMedicalLaboratoryTechnology,
        description: "Focuses on the study of medical laboratory technology, including clinical laboratory science, medical technology, and laboratory management.",
        icon: {
            IconProvider: Ionicons,
            name: "medkit-outline"
        }
    },
    [HealthScienceDepartments.BachelorOfHospitalAdministration]: {
        name: HealthScienceDepartments.BachelorOfHospitalAdministration,
        description: "Focuses on the management and administration of hospitals and healthcare facilities.",
        icon: {
            IconProvider: Ionicons,
            name: "hospital-outline"
        }
    }
}

export const ITIDepartmentsDetails: Record<ITIDepartments, DepartmentDetails> = {
    [ITIDepartments.Fitter]: {
        name: ITIDepartments.Fitter,
        description: "Focuses on the study of fitting, which involves assembling, installing, and maintaining machinery and equipment.",
        icon: {
            IconProvider: Ionicons,
            name: "construct"
        }
    },
    [ITIDepartments.Electrician]: {
        name: ITIDepartments.Electrician,
        description: "Focuses on the study of electrical work, including installation, maintenance, and repair of electrical systems.",
        icon: {
            IconProvider: Ionicons,
            name: "flash-outline"
        }
    }
}

export const getAllDepartmentDetails = (): Record<DepartmentType, Record<string, DepartmentDetails>> => {
    return {
        [DepartmentType.BTech]: BTechDepartmentsDetails,
        [DepartmentType.Diploma]: DiplomaDepartmentsDetails,
        [DepartmentType.HealthScience]: HealthScienceDepartmentsDetails,
        [DepartmentType.ITI]: ITIDepartmentsDetails
    }
}