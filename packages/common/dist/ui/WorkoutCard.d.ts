import React from "react";
export interface Props {
    exercise: string;
    repsAndWeight: string;
    sets: string[];
    onSetPress: (index: number) => void;
}
export declare const WorkoutCard: React.FC<Props>;
