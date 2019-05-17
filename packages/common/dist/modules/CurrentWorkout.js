"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importDefault(require("react"));
var RootStore_1 = require("../stores/RootStore");
var WorkoutCard_1 = require("../ui/WorkoutCard");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 10,
    }
});
exports.CurrentWorkout = mobx_react_lite_1.observer(function () {
    var rootStore = react_1.default.useContext(RootStore_1.RootStoreContext);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container }, rootStore.workoutStore.currentExercises.map(function (e) {
        return (react_1.default.createElement(WorkoutCard_1.WorkoutCard, { onSetPress: function (setIndex) {
                var newValue;
                var v = e.sets[setIndex];
                if (v == '') {
                    newValue = "" + e.reps;
                }
                else if (v == '0') {
                    newValue = '';
                }
                else {
                    newValue = "" + (parseInt(v) - 1);
                }
                e.sets[setIndex] = newValue;
            }, key: e.exercise, sets: e.sets, exercise: e.exercise, repsAndWeight: e.numSets + "x" + e.reps + " " + e.weight }));
    })));
});
