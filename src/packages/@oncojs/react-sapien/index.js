/* @flow */

import React from "react";

import createHumanBody from "@oncojs/sapien";

import type { TConfig } from "@oncojs/sapien/types";

const Sapien = (props: TConfig) => <div>{createHumanBody(props)}</div>;

export default Sapien;
