elevatedevdesign:autoform-jquery-payments
=========================

`meteor add elevatedevdesign:autoform-jquery-payments`

## Usage

Does not handle the validation portion yet.  Only handles field formatting.

```
  creditCard: {
    type: String,
    autoform: {
      type: "payments/creditCard"
    }
  },
  cvc: {
    type: String,
    autoform: {
      type: "payments/creditCardCVC"
    }
  },
  expiration: {
    type: String,
    autoform: {
      type: "payments/creditCardExpiry"
    }
  },
```
