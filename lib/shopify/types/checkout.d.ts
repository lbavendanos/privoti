export interface CheckoutCurrencyCode {
  countryCode: string
}

export interface CheckoutCustomAttribute {
  key: string
  value: string
}

export type CheckoutCustomAttributes = CheckoutCustomAttribute[]

export interface CheckoutLineItem {
  customAttributes?: CheckoutCustomAttributes
  quantity: number
  variantId: string
}

export interface CheckoutShippingAddress {
  address1: string
  address2: string
  city: string
  company: string
  country: string
  firstName: string
  lastName: string
  phone: string
  province: string
  zip: string
}

export interface CheckoutCreateInput {
  allowPartialAddresses?: boolean
  buyerIdentity?: CheckoutCurrencyCode
  customAttributes?: CheckoutCustomAttributes
  email?: string
  lineItems?: CheckoutLineItem[]
  note?: string
  presentmentCurrencyCode?: CheckoutCurrencyCode
  shippingAddress?: CheckoutShippingAddress
}

export interface Checkout {
  id?: string
  email?: string
  ready?: boolean
  webUrl?: string
  taxExempt?: boolean
  currencyCode?: string
  taxesIncluded?: boolean
  requiresShipping?: boolean
}
