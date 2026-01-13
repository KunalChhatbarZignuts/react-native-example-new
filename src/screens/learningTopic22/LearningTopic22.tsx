import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import BaseScreen from '../../components/BaseScreen';

type LocationType = {
  latitude: number;
  longitude: number;
};

export default function LearningTopic22() {
  const [location, setLocation] = useState<LocationType | null>(null);
  const hasFetchedLocation = useRef(false);

  useEffect(() => {
    if (hasFetchedLocation.current) return;
    hasFetchedLocation.current = true;

    requestLocationPermission();
  });

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission denied');
        return;
      }
    }

    getCurrentLocation();
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        console.log('📍 Latitude:', latitude);
        console.log('📍 Longitude:', longitude);

        setLocation({ latitude, longitude });
      },
      error => {
        console.log('❌ Location Error:', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };

  return (
    <BaseScreen title="Learning Topic 22">
      <View style={styles.container}>
        {!location ? (
          <ActivityIndicator size="large" />
        ) : (
          <MapView
            // you can change this provider base on requirements
            //  provider={Platform.OS === 'ios' ? 'google' : undefined} // Add this
            style={styles.map}
            showsUserLocation
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={location} title="You are here" />
          </MapView>
        )}
      </View>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
