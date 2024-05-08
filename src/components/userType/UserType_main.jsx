import { userType_data } from "../../utils/datatable_data";
import DataTableComponent from "../DataTableComponent";

const UserType_main = () => { 
    return (
        <DataTableComponent data={userType_data} />
    )
 }

export default UserType_main;