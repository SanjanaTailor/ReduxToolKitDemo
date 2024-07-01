import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, Text, Button} from 'react-native';
import {RootState, AppDispatch} from './redux/store';
import {increment, decrement} from '../redux/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default Counter;
