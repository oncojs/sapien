/* @flow */

import React from 'react';

import createHumanBody from '@ncigdc/humanbody';

import type { TConfig } from '@ncigdc/humanbody';

const Humanbody = (props: TConfig) => (
  <div>{createHumanBody(props)}</div>
);

export default Humanbody;
