import { GestureResponderEvent, ImageSourcePropType } from 'react-native';

export interface TrainerItemProps {
  title: string;
  imgSource: ImageSourcePropType;
  backgroundImg: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
}
