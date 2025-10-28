import React, { PropsWithChildren, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { createTokenProxy } from '@equinor/design-system-mobile-components/dist/styling/createTokenProxy';
import { EDSContext } from '@equinor/design-system-mobile-components/dist/components/EDSProvider/EDSContext';
import type { Token, ColorScheme, Density } from '@equinor/design-system-mobile-components/dist/styling/types';

type WebEDSProviderProps = {
  colorScheme: ColorScheme;
  density: Density;
};

export const WebEDSProvider = (props: PropsWithChildren<WebEDSProviderProps>) => {
  const token = useMemo(() => {
    const proxy = createTokenProxy(props.colorScheme, props.density);
    return JSON.parse(JSON.stringify(proxy)) as Token;
  }, [props.colorScheme, props.density]);

  return (
    <EDSContext.Provider
      value={{ colorScheme: props.colorScheme, density: props.density, token }}
    >
      <View style={styles.container}>{props.children}</View>
    </EDSContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
