import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';

export default class Package extends Component {
  state = {
    selectedSeat: [],
  };
  selectSeat = (id) => {
    const {selectedSeat} = this.state;
    console.log(id);
    this.setState({selectedSeat: [...selectedSeat, ...[id]]}, () => {
      const {selectedSeat} = this.state;
      console.log(selectedSeat);
    });
  };
  render() {
    return (
      <View style={styles.root}>
        <View>
          {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((col, i) => (
            <View style={styles.row}>
              {[1, 2, 3, 4, 5, 6, 7].map((row, id) => (
                <Seat
                  selected={this.state.selectedSeat.includes(`${col}${row}`)}
                  onPress={() => this.selectSeat(`${col}${row}`)}
                />
              ))}
            </View>
          ))}
        </View>

        <View style={styles.row2}>
          {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((col, i) => (
            <View style={styles.row}>
              {[8, 9, 10, 11, 12, 13, 14].map((row, id) => (
                <Seat
                  selected={this.state.selectedSeat.includes(`${col}${row}`)}
                  onPress={() => this.selectSeat(`${col}${row}`)}
                />
              ))}
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  row2: {
    marginTop: 10,
  },
});

class Seat extends Component {
  componentDidUpdate() {
    console.log(this.props.selected);
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View
          style={[
            seatStyles.component,
            this.props.selected && seatStyles.selected,
          ]}
        />
      </TouchableOpacity>
    );
  }
}

const seatStyles = StyleSheet.create({
  component: {
    width: 20,
    height: 20,
    margin: 5,
    borderRadius: 3,
    backgroundColor: 'purple',
  },
  selected: {
    backgroundColor: 'black',
  },
});
