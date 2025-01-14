/*
Copyright 2022 The Dapr Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import IClientConfiguration from "../../../interfaces/Client/IClientConfiguration";
import { KeyValueType } from "../../../types/KeyValue.type";
import { GetConfigurationResponse as GetConfigurationResponseResult } from "../../../types/configuration/GetConfigurationResponse";
import HTTPClient from "./HTTPClient";
import { SubscribeConfigurationCallback } from "../../../types/configuration/SubscribeConfigurationCallback";
import { SubscribeConfigurationStream } from "../../../types/configuration/SubscribeConfigurationStream";

export default class HTTPClientConfiguration implements IClientConfiguration {
  client: HTTPClient;

  constructor(client: HTTPClient) {
    this.client = client;
  }

  async subscribe(_storeName: string, _cb: SubscribeConfigurationCallback): Promise<SubscribeConfigurationStream> {
    throw new Error("HTTP is currently not supported.");
  }

  async subscribeWithKeys(
    _storeName: string,
    _keys: string[],
    _cb: SubscribeConfigurationCallback,
  ): Promise<SubscribeConfigurationStream> {
    throw new Error("HTTP is currently not supported.");
  }

  async subscribeWithMetadata(
    _storeName: string,
    _keys: string[],
    _metadata: KeyValueType,
    _cb: SubscribeConfigurationCallback,
  ): Promise<SubscribeConfigurationStream> {
    throw new Error("HTTP is currently not supported.");
  }

  async get(_storeName: string, _keys: string[], _metadata?: KeyValueType): Promise<GetConfigurationResponseResult> {
    throw new Error("HTTP is currently not supported.");
  }
}
