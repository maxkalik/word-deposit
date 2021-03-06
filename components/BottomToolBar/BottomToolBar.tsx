import React from 'react';
import { BottomBarSection, Btn } from '../common';
import { BottomToolBarProps } from './types';

const BottomToolBar: React.FC<BottomToolBarProps> = ({
  acceptBtnTitle,
  acceptBtnOnPress,
  cancelBtnTitle,
  cancelBtnOnPress,
  mode
}): JSX.Element => (
  <BottomBarSection offsetValue={120} mode={mode}>
    <Btn size="small" filled title={acceptBtnTitle} onPress={acceptBtnOnPress} mode={mode} />
    <Btn size="small" title={cancelBtnTitle} onPress={cancelBtnOnPress} />
  </BottomBarSection>
);

export default BottomToolBar;
