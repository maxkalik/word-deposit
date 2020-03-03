import React, { useState } from 'react';
import { Animated } from 'react-native';
import TrainersListHeader from '../TrainersListHeader/TrainersListHeader';
import TrainerItem from '../TrainerItem/TrainerItem';
import { WordTypes } from '../../types';
import { sizes } from '../../constants';
import { styles } from './styles';

const TrainersList: React.FC<{ words: WordTypes[]; navigation: any }> = ({ words, navigation }): JSX.Element => {
  const [offset] = useState(new Animated.Value(1));

  const trainers = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      screenName: 'Word to Translate',
      imgSource: require('../../assets/images/png/trainer-word-to-translate.png'),
      backgroundColor: 'blue',
      title: 'Find correct translation',
      words: words
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      screenName: 'Translate to Word',
      title: 'Translate from your language',
      backgroundColor: 'mediumvioletred',
      imgSource: require('../../assets/images/png/trainer-translate-to-word.png'),
      words: words
    }
  ];

  return (
    <Animated.FlatList
      contentContainerStyle={{ paddingBottom: sizes.HEIGHT_GENERAL }}
      numColumns={trainers.length > 2 ? 2 : 1}
      style={styles.container}
      data={trainers}
      ListHeaderComponent={() => <TrainersListHeader offset={offset} />}
      renderItem={({ item }: any) => (
        <TrainerItem
          title={item.title}
          onPress={() => navigation.navigate(item.screenName, item.words)}
          imgSource={item.imgSource}
          backgroundColor={item.backgroundColor}
        />
      )}
      keyExtractor={({ id }: { id: string }) => id}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: offset } } }], {
        useNativeDriver: true
      })}
    />
  );
};

export default TrainersList;
