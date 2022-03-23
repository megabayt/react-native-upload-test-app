import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import RNFetchBlob, { StatefulPromise } from 'rn-fetch-blob';

import { upload, uploaderSlice } from '../uploadSlice';
import { pick } from '../pickerSlice';
import { testPick } from '../../utils/testingHelpers';

const middlewares = [thunk]
export const mockStore = configureMockStore(middlewares);

const file = {
  name: 'someFile',
  uri: 'someUri',
  fileCopyUri: 'someUri',
  type: 'someType',
  size: 1000,
}

const response = {
  Name: 'SomeName',
  Hash: 'SomeHash',
  Size: 'SomeSize',
}

test('should return the initial state', () => {
  expect(uploaderSlice.reducer(undefined, {} as any)).toEqual({
    uploadResult: null,
    uploadProgress: 0,
    loading: 'idle',
  })
})

test('should update progress number when update action is called', () => {
  const previousState = {
    uploadResult: { ...response },
    uploadProgress: 0,
    loading: 'idle',
  }
  expect(uploaderSlice.reducer(previousState, uploaderSlice.actions.updateProgress(10))).toEqual({
    ...previousState,
    uploadProgress: 10,
  })
})

test('should open upload when upload action is called', async () => {
  const expectedActions: any = [
    {
      type: upload.pending.type,
    },
    uploaderSlice.actions.updateProgress(0),
    uploaderSlice.actions.updateProgress(100),
    {
      type: upload.fulfilled.type,
    },
  ];
  const store: any = mockStore({
    picker: {
      file,
    }
  });

  // mock API returns
  jest.spyOn(RNFetchBlob, 'fetch').mockImplementation(() => {
    const promise: StatefulPromise<any> = Promise.resolve(response) as any;

    promise.uploadProgress = jest.fn().mockReturnValue(promise);

    return promise;
  });
  return store.dispatch(upload()).then(() => {
    expect(store.getActions().map((action: any) => ({ type: action.type, payload: action.payload })))
      .toEqual(expectedActions)
  })
})

export { }