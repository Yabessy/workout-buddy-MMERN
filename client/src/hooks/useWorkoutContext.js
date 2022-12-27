import { WorkoutsContext } from "../context/workoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext);
    if (!context) {
        throw new Error("useWorkoutsContext must be used within WorkoutsProvider");
    }
    return context;
}