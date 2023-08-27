import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { Appbar } from 'react-native-paper';

// Heading of the app
const MyHeader = () => {
  return (
    <SafeAreaView>
      <Appbar.Header style={{backgroundColor:'black'}}>
        <Appbar.Content title="StopWatch" style={{ alignItems:'center'}} />
      </Appbar.Header>
    </SafeAreaView>
  );
};

export default MyHeader;
