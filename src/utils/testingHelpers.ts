import DocumentPicker from 'react-native-document-picker';
import { pick } from '../store/pickerSlice';

export const testPick = async (store: any, file: any) => {
  // mock API returns
  jest.spyOn(DocumentPicker, 'pick').mockImplementation(() => {
    return Promise.resolve([file]);
  });

  await store.dispatch(pick());
}
