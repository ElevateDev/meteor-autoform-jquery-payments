elevatedevdesign:autoform-jquery-payments
=========================

`meteor add elevatedevdesign:autoform-jquery-payments`

## Demo

[Live](http://autoform-jquery-payments-demo.meteor.com)

Demo source and plugin tests can be found in /tests.

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

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.