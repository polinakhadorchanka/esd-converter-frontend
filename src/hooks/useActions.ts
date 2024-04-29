import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actions as filesSliceActions } from '../store/files/files.slice';
import * as filesActions from '../store/files/files.action';

const rootActions = {
  ...filesSliceActions,
  ...filesActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
