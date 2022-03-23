jest.mock('react-native-toast-message', () => {
  const Toast = () => null;
  Toast.show = jest.fn();
  return {
    __esModule: true,
    default: Toast,
  };
});

jest.mock('rn-fetch-blob', () => ({
  __esModule: true,
  default: {
    wrap: jest.fn(),
    fetch: jest.fn(),
  },
}));

export {};
