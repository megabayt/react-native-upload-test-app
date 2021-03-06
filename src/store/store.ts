import { configureStore } from '@reduxjs/toolkit';
import { pickerSlice } from './pickerSlice';
import { uploaderSlice } from './uploadSlice';

export const store = configureStore({
  reducer: {
    picker: pickerSlice.reducer,
    uploader: uploaderSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
