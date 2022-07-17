const pkg = require('../../package.json');

export const STANDARD_DEVICE_WIDTH = 390;
export const STANDARD_DEVICE_HEIGHT = 844;
export const H_PADDING = 16;
export const APP_VERSION = {
    android: pkg.version,
    ios: pkg.version,
};