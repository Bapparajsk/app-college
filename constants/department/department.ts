import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { BTechDepartmentsEnum, BTechDepartmentsSubNameEnum, DepartmentDetailsType, DepartmentType, DiplomaDepartmentsEnum, DiplomaDepartmentsSubNameEnum, HealthScienceDepartmentsEnum, HealthScienceDepartmentsSubNameEnum, ITIDepartmentsEnum, ITIDepartmentsSubNameEnum } from "./departments"

export const DiplomaDepartmentsDetails: Record<DiplomaDepartmentsEnum, DepartmentDetailsType> = {
    [DiplomaDepartmentsEnum.ComputerScienceTechnology]: {
        name: DiplomaDepartmentsEnum.ComputerScienceTechnology,
        description: "Focuses on the study of computer science and technology, including programming, software development, and computer hardware.",
        subName: DiplomaDepartmentsSubNameEnum.ComputerScienceTechnology,
        icon: {
            IconProvider: Ionicons,
            name: "laptop-outline"
        }
    },
    [DiplomaDepartmentsEnum.MechanicalEngineering]: {
        name: DiplomaDepartmentsEnum.MechanicalEngineering,
        description: "Covers the design, analysis, manufacturing, and maintenance of mechanical systems.",
        subName: DiplomaDepartmentsSubNameEnum.MechanicalEngineering,
        icon: {
            IconProvider: Ionicons,
            name: "settings-outline"
        }
    },
    [DiplomaDepartmentsEnum.ElectricalEngineering]: {
        name: DiplomaDepartmentsEnum.ElectricalEngineering,
        description: "Involves the study of electricity, electronics, and electromagnetism.",
        subName: DiplomaDepartmentsSubNameEnum.ElectricalEngineering,
        icon: {
            IconProvider: Ionicons,
            name: "flash-outline"
        }
    },
    [DiplomaDepartmentsEnum.ElectronicsTelecommunicationEngineering]: {
        name: DiplomaDepartmentsEnum.ElectronicsTelecommunicationEngineering,
        description: "Focuses on electronic devices, circuits, communication equipment like transmitters, receivers, integrated circuits (IC).",
        subName: DiplomaDepartmentsSubNameEnum.ElectronicsTelecommunicationEngineering,
        icon: {
            IconProvider: Ionicons,
            name: "wifi-outline"
        }
    },
    [DiplomaDepartmentsEnum.CivilEngineering]: {
        name: DiplomaDepartmentsEnum.CivilEngineering,
        description: "Deals with the design, construction, and maintenance of the physical and naturally built environment.",
        subName: DiplomaDepartmentsSubNameEnum.CivilEngineering,
        icon: {
            IconProvider: Ionicons,
            name: "business"
        }
    },
    [DiplomaDepartmentsEnum.AutomobileEngineering]: {
        name: DiplomaDepartmentsEnum.AutomobileEngineering,
        description: "Focuses on the design, development, manufacturing, and testing of automobiles.",
        subName: DiplomaDepartmentsSubNameEnum.AutomobileEngineering,
        icon: {
            IconProvider: Ionicons,
            name: "car-outline"
        }
    }
}

export const BTechDepartmentsDetails: Record<BTechDepartmentsEnum, DepartmentDetailsType> = {
    [BTechDepartmentsEnum.ComputerScience]: {
        name: BTechDepartmentsEnum.ComputerScience,
        description: "Focuses on the study of computer science and engineering, including programming, software development, and computer hardware.",
        subName: BTechDepartmentsSubNameEnum.ComputerScience,
        icon: {
            IconProvider: Ionicons,
            name: "laptop-outline"
        }
    },
    [BTechDepartmentsEnum.MechanicalEngineering]: {
        name: BTechDepartmentsEnum.MechanicalEngineering,
        description: "Covers the design, analysis, manufacturing, and maintenance of mechanical systems.",
        subName: BTechDepartmentsSubNameEnum.MechanicalEngineering,
        icon: {
            IconProvider: Ionicons,
            name: "settings-outline"
        }
    },
    [BTechDepartmentsEnum.ElectricalEngineering]: {
        name: BTechDepartmentsEnum.ElectricalEngineering,
        description: "Involves the study of electricity, electronics, and electromagnetism.",
        subName: BTechDepartmentsSubNameEnum.ElectricalEngineering,
        icon: {
            IconProvider: Ionicons,
            name: "flash-outline"
        }
    },
    [BTechDepartmentsEnum.MasterOfBusinessAdministration]: {
        name: BTechDepartmentsEnum.MasterOfBusinessAdministration,
        description: "Focuses on business management, administration, and leadership skills.",
        subName: BTechDepartmentsSubNameEnum.MasterOfBusinessAdministration,
        icon: {
            IconProvider: Ionicons,
            name: "briefcase-outline"
        }
    },
    [BTechDepartmentsEnum.CivilEngineering]: {
        name: BTechDepartmentsEnum.CivilEngineering,
        description: "Deals with the design, construction, and maintenance of the physical and naturally built environment.",
        subName: BTechDepartmentsSubNameEnum.CivilEngineering,
        icon: {
            IconProvider: Ionicons,
            name: "business"
        }
    }
}

export const HealthScienceDepartmentsDetails: Record<HealthScienceDepartmentsEnum, DepartmentDetailsType> = {
    [HealthScienceDepartmentsEnum.BachelorOfMedicalLaboratoryTechnology]: {
        name: HealthScienceDepartmentsEnum.BachelorOfMedicalLaboratoryTechnology,
        description: "Focuses on the study of medical laboratory technology, including clinical laboratory science, medical technology, and laboratory management.",
        subName: HealthScienceDepartmentsSubNameEnum.BachelorOfMedicalLaboratoryTechnology,
        icon: {
            IconProvider: Ionicons,
            name: "medkit-outline"
        }
    },
    [HealthScienceDepartmentsEnum.BachelorOfHospitalAdministration]: {
        name: HealthScienceDepartmentsEnum.BachelorOfHospitalAdministration,
        description: "Focuses on the management and administration of hospitals and healthcare facilities.",
        subName: HealthScienceDepartmentsSubNameEnum.BachelorOfHospitalAdministration,
        icon: {
            IconProvider: FontAwesome,
            name: "hospital-o"
        }
    }
}

export const ITIDepartmentsDetails: Record<ITIDepartmentsEnum, DepartmentDetailsType> = {
    [ITIDepartmentsEnum.Fitter]: {
        name: ITIDepartmentsEnum.Fitter,
        description: "Focuses on the study of fitting, which involves assembling, installing, and maintaining machinery and equipment.",
        subName: ITIDepartmentsSubNameEnum.Fitter,
        icon: {
            IconProvider: Ionicons,
            name: "construct"
        }
    },
    [ITIDepartmentsEnum.Electrician]: {
        name: ITIDepartmentsEnum.Electrician,
        description: "Focuses on the study of electrical work, including installation, maintenance, and repair of electrical systems.",
        subName: ITIDepartmentsSubNameEnum.Electrician,
        icon: {
            IconProvider: Ionicons,
            name: "flash-outline"
        }
    }
}

export const getAllDepartmentDetails = (): Record<DepartmentType, Record<string, DepartmentDetailsType>> => {
    return {
        [DepartmentType.BTech]: BTechDepartmentsDetails,
        [DepartmentType.Diploma]: DiplomaDepartmentsDetails,
        [DepartmentType.HealthScience]: HealthScienceDepartmentsDetails,
        [DepartmentType.ITI]: ITIDepartmentsDetails
    }
}