import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';

import { pick, pickerSlice } from '../pickerSlice';
import { testPick } from '../../utils/testingHelpers';

const middlewares = [thunk]
export const mockStore = configureMockStore(middlewares);

const file = {
  name: 'someFile',
  uri: 'someUri',
  fileCopyUri: 'someUri',
  type: 'someType',
  size: 1000,
};

test('should return the initial state', () => {
  expect(pickerSlice.reducer(undefined, {} as any)).toEqual({
    file: null,
    loading: 'idle',
  })
})

test('should reset its state when reset action is called', () => {
  const previousState = {
    file,
    loading: 'pending',
  }
  expect(pickerSlice.reducer(previousState, pickerSlice.actions.resetPickerState())).toEqual({
    file: null,
    loading: 'idle',
  })
})

test('should open picker when pick action is called', async () => {
  const expectedActions = [
    {
      type: pick.pending.type
    },
    {
      type: pick.fulfilled.type,
      payload: file,
    }
  ];
  const store: any = mockStore({});
  
  return testPick(store, file).then(() => {
    expect(store.getActions().map((action: any) => ({ type: action.type, payload: action.payload })))
      .toEqual(expectedActions)
  })
})

export { }