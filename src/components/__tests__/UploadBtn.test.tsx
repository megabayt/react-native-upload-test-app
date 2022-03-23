import React from 'react';
import { act, fireEvent, render } from "@testing-library/react-native"
import { UploadBtn } from '../UploadBtn';
import { useDispatch } from 'react-redux';
import { upload } from '../../store/uploadSlice';

jest.mock('react-redux', () => {
  const dispatch = jest.fn();
  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch,
    useSelector: jest.fn(),
  };
});

jest.mock('../../store/uploadSlice', () => ({
  upload: jest.fn(),
}))

describe('upload btn component', () => {
  it('should call upload', async () => {
    const wrapper = render(<UploadBtn />);

    await act(async () => {
      const btn = await wrapper.findByTestId('upload-file');
      fireEvent.press(btn);
    });

    expect(upload).toHaveBeenCalled();
    expect(useDispatch()).toHaveBeenCalledWith(upload());
  });
});

export {};
