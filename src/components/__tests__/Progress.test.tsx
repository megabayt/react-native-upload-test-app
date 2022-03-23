import React from 'react';
import { Provider } from 'react-redux';
import { render } from "@testing-library/react-native"
import configureMockStore from 'redux-mock-store';
import { Progress } from '../Progress';

const mockStore = configureMockStore([]);

describe('progress bar component', () => {
  it('should be gray if progress equals to 0', () => {
    const store = mockStore({
      uploader: {
        uploadProgress: 0,
      }
    })
    const MockProvider = (props: any) => <Provider {...props} store={store} />;
    const wrapper = render(<Progress />, { wrapper: MockProvider });

    expect(wrapper.queryByTestId('bar')?.props.style.some((item: any) => item.right === '100%'))
      .toBeTruthy()
  });
  it('should be one third green if progress equals to 33', () => {
    const store = mockStore({
      uploader: {
        uploadProgress: 33,
      }
    })
    const MockProvider = (props: any) => <Provider {...props} store={store} />;
    const wrapper = render(<Progress />, { wrapper: MockProvider });

    expect(wrapper.queryByTestId('bar')?.props.style.some((item: any) => item.right === '67%'))
      .toBeTruthy()
  });
  it('should be green if progress equals to 100', () => {
    const store = mockStore({
      uploader: {
        uploadProgress: 100,
      }
    })
    const MockProvider = (props: any) => <Provider {...props} store={store} />;
    const wrapper = render(<Progress />, { wrapper: MockProvider });

    expect(wrapper.queryByTestId('bar')?.props.style.some((item: any) => item.right === '0%'))
      .toBeTruthy()
  });
});

export { };
