import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(pick.fulfilled, (state, action) => {
      state.file = action.payload;
    })
  },
});

export const getPickerResult = (state: RootState) => {
  return state?.picker?.file;
};
