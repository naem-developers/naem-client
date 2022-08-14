import { THEME } from '@/theme';
import { TextStyle } from 'react-native';

export const sizeStyles: Record<string, { fontSize: number; lineHeight: number }> = {
  f19: {
    fontSize: 19,
    lineHeight: 22,
  },
  f18: {
    fontSize: 18,
    lineHeight: 22,
  },
  f17: {
    fontSize: 17,
    lineHeight: 25,
  },
  f16: {
    fontSize: 16,
    lineHeight: 22,
  },
  f15: {
    fontSize: 15,
    lineHeight: 22,
  },
  f14: {
    fontSize: 14,
    lineHeight: 22,
  },
  f13: {
    fontSize: 13,
    lineHeight: 22,
  },
  f11: {
    fontSize: 11,
    lineHeight: 11,
  },
};

export const weightStyles: Record<string, { fontWeight: TextStyle['fontWeight'] }> = {
  exBold: {
    fontWeight: '800',
  },
  bold: {
    fontWeight: '700',
  },
  semiBold: {
    fontWeight: '600',
  },
  medium: {
    fontWeight: '500',
  },
  regular: {
    fontWeight: '400',
  },
  light: {
    fontWeight: '300',
  },
};

export const colorStyle: Record<string, { color: TextStyle['color'] }> = {
  main: {
    color: THEME.MAIN,
  },
  strongText: {
    color: THEME.STRONG_TEXT,
  },
  regText: {
    color: THEME.REG_TEXT,
  },
  lightText: {
    color: THEME.LIGHT_TEXT,
  },
  lightGray: {
    color: THEME.LIGHT_GRAY,
  },
  lightLine: {
    color: THEME.LIGHT_GRAY,
  },
  point: {
    color: THEME.POINT,
  },
  bg: {
    color: THEME.BG,
  },
  lightBox: {
    color: THEME.LIGHT_BOX,
  },
};
