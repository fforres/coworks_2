import configData from './config.json';

const configGetter = () => {
  let config = configData[process.env.NODE_ENV];
  if (process.env.NODE_ENV || !configData[process.env.NODE_ENV]) {
    config = configData.development;
  }
  return config;
};

export default configGetter();
