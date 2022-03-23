import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import { RootState } from './store';

export const pick = createAsyncThunk(
  'picker/pick',
  async (payload, thunkAPI) => {
    const response = await DocumentPicker.pick();
    return response ? response[0] : null;
  }
);

export const pickerSlice = createSlice({
  name: 'picker',
  initialState: { file: null as DocumentPickerResponse | null, loading: 'idle' },
  reducers: {
    resetPickerState: (state) => {
      state.file = pickerSlice.getInitialState().file;
      state.loading = pickerSlice.getInitialState().loading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(pick.fulfilled, (state, action) => {
      state.file = action.payload;
      Toast.show({
        type: 'success',
        text1: 'Successfully picked file',
      });
    })
    builder.addCase(pick.rejected, (state, action) => {
      Toast.show({
        type: 'error',
        text1: action.error.message,
      });
    })
  },
});

export const getPickerResult = (state: RootState) => {
  return state?.picker?.file;
};
