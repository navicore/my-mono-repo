import { RootStore } from './RootStore';
declare type WorkoutDay = 'a' | 'b';
interface WorkoutHistory {
    [key: string]: Array<{
        exersise: string;
        value: number;
    }>;
}
interface CurrentExercise {
    weight: number;
    reps: number;
    numSets: number;
    exercise: string;
    sets: string[];
}
export declare class WorkoutStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    currentSquat: number;
    currentBenchPress: number;
    currentOverheadPress: number;
    currentDeadLift: number;
    currentBarbellRow: number;
    currentExercises: CurrentExercise[];
    lastWorkoutType: WorkoutDay;
    history: WorkoutHistory;
}
export {};
