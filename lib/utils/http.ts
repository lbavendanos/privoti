import { GraphQLClient } from 'graphql-request'
import {
  RequestConfig,
  RequestDocument,
  Variables,
} from 'graphql-request/build/esm/types'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

/**
 * This method is a fetch api wrapper to use with SWR
 *
 * @async
 * @template T - The type of returned promise value
 * @param {RequestInfo | URL} input - The input source
 * @param {RequestInit} [init] - The init source
 * @returns {Promise<T>} Returns a promise with the type specified
 */
export async function fetcher<T = any>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(input, init)

  if (!response.ok) throw new Error(response.statusText)

  return response.json()
}

export async function gqlFetcher<T = any, V extends Variables = Variables>(
  url: string,
  query: RequestDocument | TypedDocumentNode<T, V>,
  variables?: V,
  config?: RequestConfig
): Promise<T> {
  const client = new GraphQLClient(url, config)

  // @ts-ignore
  return client.request(query, variables)
}
