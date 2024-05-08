export const UserType_structure = () => {
    return [
        {
            name: "Tipo de usuario",
            selector: (row) => row.userType
        },
        {
            name: "Descripción tipo",
            selector: (row) => row.userDescription
        }
    ]
}