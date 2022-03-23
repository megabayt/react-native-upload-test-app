import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import RNFetchBlob from 'rn-fetch-blob';
import Toast from 'react-native-toast-message';
import { RootState } from './store';
import { pickerSlice } from './pickerSlice';

interface Response {
  Name: string;
  Hash: string;
  Size: string;
}

export const upload = createAsyncThunk<Response>(
  'uploader/upload',
  (payload, thunkAPI) => new Promise((resolve, reject) => {
    thunkAPI.dispatch(uploaderSlice.actions.updateProgress(0));
    const { picker: { file } } = thunkAPI.getState() as RootState;
    if (!file) {
      return reject('No file!');
    }
    const cleanUri = file.uri.replace(/(RNFetchBlob-)?file:\/\//g, '');
    const wrappedUri = RNFetchBlob.wrap(cleanUri);
    const headers = {
      'Content-Type': 'multipart/form-data',
    };
    const body = [{
      name: 'file',
      filename: file.name,
      type: file.type,
      data: wrappedUri,
    }];
    RNFetchBlob.fetch('POST', 'https://ipfs-dev.ternoa.dev/api/v0/add', headers, body)
      .uploadProgress((progress) => {
        const size = file.size ?? 0;
        thunkAPI.dispatch(pickerSlice.actions.resetPickerState());
        thunkAPI.dispatch(uploaderSlice.actions.updateProgress(Math.floor(progress / size * 100)));
      })
      .then((resp) => {
        thunkAPI.dispatch(uploaderSlice.actions.updateProgress(100));
        resolve(resp.data);
      })
      .catch((err) => {
        thunkAPI.dispatch(uploaderSlice.actions.updateProgress(0));
        reject(err);
      })
  })
);

export const uploaderSlice = createSlice({
  name: 'uploader',
  initialState: {
    uploadResult: null as Response | null,
    uploadProgress: 0,
    loading: 'idle',
  },
  reducers: {
    updateProgress(state, action) {
      state.uploadProgress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(upload.fulfilled, (state, action) => {
      state.uploadResult = action.payload;
      Toast.show({
        type: 'success',
        text1: 'File uploaded successfully',
      });
    });
    builder.addCase(upload.rejected, (state, action) => {
      Toast.show({
        type: 'error',
        text1: action.error.message,
      });
    });
  },
});

export const getUploadResult = (state: RootState) => {
  return state?.uploader?.uploadResult;
};

export const getUploadProgress = (state: RootState) => {
  return state?.uploader?.uploadProgress;
};
