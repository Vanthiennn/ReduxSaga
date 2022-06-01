import React, {useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {
  increaseAction,
  decreaseAction,
  decreaseLoading,
  incrementSaga,
  getUsersFetch,
  incrementSagaSuccess,
} from '../redux/actions';
import Button from 'react-native-button';
import {ScrollView, Text, View} from 'react-native';

export default function Counter() {
  const {times, user} = useSelector(state => state.counterReducer);
  const [isHideInfo, setHideInfo] = useState(true);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, marginTop: 30}}>
      <Text
        style={{
          margin: 20,
          fontWeight: 'bold',
          color: 'forestgreen',
          fontSize: 20,
        }}>
        Redux Sagas
      </Text>
      <View style={{height: 50, margin: 10, flexDirection: 'row'}}>
        <Button
          containerStyle={{
            padding: 10,
            height: 45,
            borderRadius: 10,
            backgroundColor: 'darkviolet',
          }}
          style={{fontSize: 15, color: 'white'}}
          onPress={() => {
            dispatch(decreaseLoading());
          }}>
          Decrement -{' '}
        </Button>
        <Button
          containerStyle={{
            padding: 10,
            height: 45,
            borderRadius: 10,
            backgroundColor: 'darkviolet',
          }}
          style={{fontSize: 15, color: 'white'}}
          onPress={() => {
            dispatch(increaseAction(1));
          }}>
          Increment +{' '}
        </Button>
        <Button
          containerStyle={{
            padding: 10,
            height: 45,
            borderRadius: 10,
            backgroundColor: 'red',
          }}
          style={{fontSize: 15, color: 'white'}}
          onPress={() => {
            dispatch(incrementSagaSuccess(1));
          }}>
          Increment Async +{' '}
        </Button>
      </View>
      <Text
        style={{
          margin: 10,
          fontWeight: 'bold',
          color: 'darkblue',
          fontSize: 17,
        }}>
        Count : {times}
      </Text>
      <View>
        <Button
          containerStyle={{
            padding: 10,
            height: 45,
            borderRadius: 10,
            backgroundColor: 'darkviolet',
          }}
          style={{fontSize: 15, color: 'white'}}
          onPress={() => {
            setHideInfo(!isHideInfo), dispatch(getUsersFetch());
          }}>
          {isHideInfo ? 'Get Username' : 'Hide Username'}
        </Button>
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 20}}>
          Users:{' '}
        </Text>
      </View>
      <ScrollView>
        {isHideInfo
          ? []
          : user.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginTop: 15,
                      backgroundColor: 'red',
                    }}>
                    {item.name}
                  </Text>
                </View>
              );
            })}
      </ScrollView>
    </View>
  );
}
