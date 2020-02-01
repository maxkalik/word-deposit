import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Checkbox } from '../common';
import VocabularyWordItem from '../VocabularyWordItem/VocabularyWordItem';
import { VocabularyItemProps } from './types';
import { styles } from './styles';

const VocabularyItem: React.FC<VocabularyItemProps> = ({
  wordItem,
  checkBox,
  checked,
  onCheckmarkPress
}): JSX.Element => (
  <TouchableOpacity style={styles.container} onPress={onCheckmarkPress}>
    {checkBox && <Checkbox checked={checked} />}
    <VocabularyWordItem item={wordItem} />
  </TouchableOpacity>
);

export default VocabularyItem;
