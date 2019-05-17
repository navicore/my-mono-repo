import React from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export interface Props {
  exercise: string;
  repsAndWeight: string;
  sets: string[];
  onSetPress: (index: number) => void;
}

const styles = StyleSheet.create({

  card: {
    borderRadius: 3,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: 'column',
    padding: 10,
    marginBottom: 10,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  topRowText: {
    fontSize: 16,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },

  circle: {
    borderRadius: 25,
    backgroundColor: "#8FB299" ,
    height: 50,
    width: 50,
  },

  whiteText: {
    color: "#fff",
  },

  circleText: {
    fontSize: 16,
    margin: 'auto',
  },

  grayText: {
    color: "#65525k2",
  },

  fadedBackground: {
    backgroundColor: "#B2A1A1",
  },

});

export const WorkoutCard: React.FC<Props> = observer( ({exercise, repsAndWeight, sets, onSetPress}) => {

  return (
 
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.topRowText}> {exercise} </Text>
        <Text style={styles.topRowText}> {repsAndWeight} </Text>
      </View>
      <View style={styles.bottomRow}>
        {sets.map((set, index) => {
          if (set === 'x') {
            return (
              <View style={[styles.circle, styles.fadedBackground]} key={set + index}>
                <Text style={[styles.circleText, styles.grayText]}>{set}</Text>
              </View>
            )
          }
          if (set === '') {
            return (
            <TouchableOpacity onPress={() => onSetPress(index)} style={[styles.circle, styles.fadedBackground]} key={set + index}/>
            )
          }
          return (
            <TouchableOpacity onPress={() => onSetPress(index)} style={styles.circle} key={set + index}>
              <Text style={[styles.circleText, styles.whiteText]}>{set}</Text>
            </TouchableOpacity>
            )
        })}
      </View>
    </View>
  );

})
