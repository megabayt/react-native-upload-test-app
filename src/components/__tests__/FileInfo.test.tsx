import React from 'react';
import { Provider } from 'react-redux';
import { render, RenderAPI } from "@testing-library/react-native"
import configureStore from 'redux-mock-store';
import { FileInfo } from '../FileInfo';

const mockStore = configureStore([]);

describe('file info component', () => {
  it('should render empty strings if no file', () => {
    const store = mockStore({
      picker: {
        file: null,
      }
    })
    const MockProvider = (props: any) => <Provider {...props} store={store} />;
    const wrapper = render(<FileInfo />, { wrapper: MockProvider });

    expect(wrapper.queryByTestId('fileName')?.children.join(''))
      .toBe('Selected file name: ')
    expect(wrapper.queryByTestId('filePath')?.children.join(''))
      .toBe('Selected file path: ')
    expect(wrapper.queryByTestId('fileSize')?.children.join(''))
      .toBe('Selected file size: 0 b')
  });

  it('should render empty strings if no file', () => {
    const file = {
      name: 'someName',
      uri: 'someUri',
      size: 10240,
    }
    const store = mockStore({
      picker: {
        file,
      }
    })
    const MockProvider = (props: any) => <Provider {...props} store={store} />;
    const wrapper = render(<FileInfo />, { wrapper: MockProvider });
    
    expect(wrapper.queryByTestId('fileName')?.children.join(''))
      .toBe(`Selected file name: someName`)
    expect(wrapper.queryByTestId('filePath')?.children.join(''))
      .toBe(`Selected file path: someUri`)
    expect(wrapper.queryByTestId('fileSize')?.children.join(''))
      .toBe(`Selected file size: 10 kb`)
  });
});

export {};
