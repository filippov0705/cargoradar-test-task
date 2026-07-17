import React, {useMemo} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {THEME} from '../theme';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const TAB_BAR = 95;

const EXPANDED_RATIO = 0.55;
const COLLAPSED_HEIGHT = 25;

const SPRING_CONFIG = {
  damping: 20,
  stiffness: 200,
  mass: 0.5,
};

export const TendersBottomSheet = ({children, enabled = true}) => {
  const expandedHeight = useMemo(
    () => (SCREEN_HEIGHT - TAB_BAR) * EXPANDED_RATIO,
    [],
  );
  const sheetHeight = useSharedValue(COLLAPSED_HEIGHT);
  const context = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .activeOffsetY([-10, 10])
    .onStart(() => {
      context.value = sheetHeight.value;
    })
    .onUpdate(e => {
      const next = context.value - e.translationY;
      sheetHeight.value = Math.max(
        COLLAPSED_HEIGHT,
        Math.min(expandedHeight, next),
      );
    })
    .onEnd(e => {
      const shouldExpand =
        e.velocityY < -500 ||
        (e.velocityY <= 500 &&
          sheetHeight.value > (COLLAPSED_HEIGHT + expandedHeight) / 2);

      sheetHeight.value = withSpring(
        shouldExpand ? expandedHeight : COLLAPSED_HEIGHT,
        SPRING_CONFIG,
      );
    });

  const sheetStyle = useAnimatedStyle(() => ({
    height: sheetHeight.value,
  }));

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <Animated.View style={[styles.sheet, {bottom: 0}, sheetStyle]}>
      <GestureDetector gesture={panGesture}>
        <View style={styles.handleArea}>
          <View style={styles.handle} />
        </View>
      </GestureDetector>
      <View style={styles.content}>{children}</View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    zIndex: 10,
    overflow: 'hidden',
  },
  handleArea: {
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: THEME.GREY400,
  },
  content: {
    flex: 1,
    minHeight: 0,
  },
});
