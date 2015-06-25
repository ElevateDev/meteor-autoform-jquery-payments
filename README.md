elevatedevdesign:autoform-jquery-payments
=========================

`meteor add elevatedevdesign:autoform-jquery-payments`

## Usage

Includes helpers for simple schema validation.

```
  creditCard: {
    type: String,
    autoform: {
      type: "payments/creditCard"
    },
    custom: PaymentsHelpers.CreditCardValidation
  },
  cvc: {
    type: String,
    autoform: {
      type: "payments/creditCardCVC"
    },
    custom: PaymentsHelpers.CVCValidation 
  },
  expiration: {
    type: String,
    autoform: {
      type: "payments/creditCardExpiry"
    },
    custom: PaymentsHelpers.CCExpiryValidation 
  },
```
