import { observable } from "mobx";
import { RootStore } from './RootStore'

type WorkoutDay = 'a' | 'b'

interface WorkoutHistory {
  [key: string]: Array<{
    exersise: string,
    value: number
  }>
}

interface CurrentExercise {
     weight:     number;
     reps:       number;
     numSets:    number;
     exercise:   string;
     sets:       string[];
}

export class  WorkoutStore {

  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable currentSquat         : number;
  @observable currentBenchPress    : number;
  @observable currentOverheadPress : number;
  @observable currentDeadLift      : number;
  @observable currentBarbellRow    : number;

  @observable currentExercises: CurrentExercise[] = []

  @observable lastWorkoutType: WorkoutDay

  @observable history: WorkoutHistory

}
