import React, { ComponentType, forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import View, { ViewProps } from '../primitives/View';
import Text, { TextProps } from '../primitives/Text';
import { TableText, TableTextProps } from '../primitives/Table';
import { em } from '../css/units';

export const Table = forwardRef((props: ViewProps, ref) => {
  return <View {...props} ref={ref} />;
}) as ComponentType<ViewProps>;

export const THead = forwardRef((props: ViewProps, ref) => {
  return <View {...props} ref={ref} />;
}) as ComponentType<ViewProps>;

export const TBody = forwardRef((props: ViewProps, ref) => {
  return <View {...props} ref={ref} />;
}) as ComponentType<ViewProps>;

export const Tfoot = forwardRef((props: ViewProps, ref) => {
  return <View {...props} ref={ref} />;
}) as ComponentType<ViewProps>;

export const Th = forwardRef((props: TableTextProps, ref: any) => {
  return <TableText {...props} style={[styles.th, props.style]} ref={ref} />;
}) as ComponentType<TableTextProps>;

export const Tr = forwardRef((props: ViewProps, ref) => {
  return <View {...props} style={[styles.tr, props.style]} ref={ref} />;
}) as ComponentType<ViewProps>;

export const Td = forwardRef((props: TableTextProps, ref: any) => {
  return <TableText {...props} style={[styles.td, props.style]} ref={ref} />;
}) as ComponentType<TableTextProps>;

export const Caption = forwardRef((props: TextProps, ref: any) => {
  return <Text {...props} style={[styles.caption, props.style]} ref={ref} />;
}) as ComponentType<TextProps>;

const styles = StyleSheet.create({
  caption: {
    textAlign: 'center',
    fontSize: em(1) as number,
  },
  th: {
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
    fontSize: em(1) as number,
  },
  tr: {
    flexDirection: 'row',
  },
  td: {
    flex: 1,
    fontSize: em(1) as number,
  },
});
