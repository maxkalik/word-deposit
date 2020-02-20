import React, { useState, useEffect } from 'react';
import { Animated, Text, Platform, NativeModules, TouchableOpacity } from 'react-native';
import { useNotificationValue } from '../../../state/notification';
import { styles } from './styles';

const { StatusBarManager } = NativeModules;

const Notificaton: React.FC = (): JSX.Element | null => {
  const [{ msg }, dispatchNotification] = useNotificationValue();
  const isNotificationPresent = msg !== null && msg.length > 0;
  const [visibility, setVisibility] = useState(false);
  const [offset] = useState(new Animated.Value(-120));
  const [statusIOSBarHeight, setStatusIOSBarHeight] = useState(0);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      StatusBarManager.getHeight(({ height }: any) => {
        setStatusIOSBarHeight(height);
      });
    }
  }, []);

  useEffect(() => {
    setVisibility(isNotificationPresent);
    if (isNotificationPresent && visibility) {
      Animated.stagger(3000, [
        Animated.spring(offset, {
          toValue: statusIOSBarHeight
        }),
        Animated.timing(offset, {
          toValue: -120
        })
      ]).start(() => dispatchNotification({ msg: '' }));
    }
  }, [offset, statusIOSBarHeight, isNotificationPresent, dispatchNotification, visibility]);

  if (!visibility) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: offset }] }]}>
      <TouchableOpacity style={styles.textContainer} onPress={() => dispatchNotification({ msg: '' })}>
        <Text style={styles.title}>{msg}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Notificaton;
