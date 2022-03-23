import React from 'react';
import { act, fireEvent, render } from "@testing-library/react-native"
import { FilePickerBtn } from '../FilePickerBtn';
import { useDispatch } from 'react-redux';
import { pick } from '../../store/pickerSlice';

jest.mock('react-redux', () => {
  const dispatch = jest.fn();
  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch,
    useSelector: jest.fn(),
  };
});

jest.mock('../../store/pickerSlice', () => ({
  pick: jest.fn(),
}))

describe('file info component', () => {
  it('should call picker', async () => {
    const wrapper = render(<FilePickerBtn />);

    await act(async () => {
      const btn = await wrapper.findByTestId('select-file');
      fireEvent.press(btn);
    });

    expect(pick).toHaveBeenCalled();
    expect(useDispatch()).toHaveBeenCalledWith(pick());
  });
});

export {};
