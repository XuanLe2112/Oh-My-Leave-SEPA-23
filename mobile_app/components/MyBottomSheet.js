import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const MyBottomSheet = () => {
  const bottomSheetRef = useRef();

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  return (
    <View style={{ flex: 1, marginTop: 200 }}>
      <TouchableOpacity onPress={openBottomSheet}>
        <Text>Oh My Leave</Text>
      </TouchableOpacity>

      <RBSheet
        ref={bottomSheetRef}
        height={300}        
        openDuration={250}
        closeOnDragDown={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#008000',
          },
        }}
      >
        {/* Content of the bottom sheet */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius:20, marginRight: 80, justifyContent: 'center', alignItems: 'center'  }} > 
              <Image source={require('../assets/magnifying_glass.png')} style={{ width: 50, height: 50}} />
              <Text style={{fontWeight: 'bold'}}>Direction</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius:20, justifyContent: 'center', alignItems: 'center' }}> 
              <Image source={require('../assets/leave4.png')} style={{ width: 50, height: 50}} />
              <Text style={{fontWeight: 'bold'}}>Check Health</Text>
            </TouchableOpacity> 
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default MyBottomSheet;