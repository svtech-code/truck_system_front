import { useLoaderData } from "react-router-dom"
import VehicleState_main from "../components/vehicleState/VehicleState_main";

const StateVehicle = () => {
    const {response, error} = useLoaderData();

    return (
        <>
            {!error ? (
                <VehicleState_main vehicleState_data={response || []} />
            ) : (
                <GetError GetError={error?.message} />
            )}
        </>
    )
}

export default StateVehicle;