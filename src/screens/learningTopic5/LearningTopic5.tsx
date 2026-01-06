import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';

import BaseScreen from '../../components/BaseScreen';
import Toast from 'react-native-toast-message';
import ToastSimple from 'react-native-simple-toast';
export default function LearningTopic5() {
  // const bottomSheetRef = useRef<BottomSheet>(null);
  // const snapPoints = useMemo(() => ['25%'], []);
  const [modalVisible, setModalVisible] = useState(false);

  const toastWithDurationHandler = () => {
    // To make Toast with duration
    ToastSimple.show('Hi I am Simple Toast', ToastSimple.SHORT);
  };
  return (
    <>
      <BaseScreen title="Learning Topic 3">
        {/* Alert Dialog */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Alert.alert('Alert Dialog', 'This is a native alert', [
              { text: 'OK' },
            ])
          }
        >
          <Text style={styles.buttonText}>Show Alert</Text>
        </TouchableOpacity>

        {/* Modal Dialog */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Show Modal Dialog</Text>
        </TouchableOpacity>

        {/* Toast Message */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Toast.show({
              type: 'success',
              text1: 'Toast Message',
              text2: 'This is a toast notification 🚀',
            })
          }
        >
          <Text style={styles.buttonText}>Show Toast</Text>
        </TouchableOpacity>
        {/* Toast With Duration Handler */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => toastWithDurationHandler()}
        >
          <Text style={styles.buttonText}>Show Toast</Text>
        </TouchableOpacity>

        {/* Snackbar (Simple Custom) */}
        {/* <TouchableOpacity
        style={styles.button}
        onPress={() => bottomSheetRef.current?.expand()}
      >
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity> */}

        {/* Modal */}
        <Modal transparent visible={modalVisible} animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Custom Dialog</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Bottom Sheet */}
        {/* <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
          <View style={styles.sheetContent}>
            <Text style={styles.sheetTitle}>Bottom Sheet Content</Text>
          </View>
        </BottomSheet> */}
      </BaseScreen>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  closeText: {
    color: '#1976D2',
    fontWeight: '600',
  },
  sheetContent: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
});
