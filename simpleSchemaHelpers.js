PaymentsHelpers = {};

PaymentsHelpers.CreditCardValidation = function(){
  if( Meteor.isClient && !$.payment.validateCardNumber(this.value) ){
    return "payments/CreditCard_Invalid";
  }
};

PaymentsHelpers.CVCValidation = function(){
  if( Meteor.isClient && !$.payment.validateCardCVC(this.value) ){
    return "payments/CVC_Invalid";
  }
};

PaymentsHelpers.CCExpiryValidation = function(){
  var vals = this.value.split('/');
  if( Meteor.isClient && (vals.length > 1 || !$.payment.validateCardExpiry(vals[0], vals[1])) ){
    return "payments/CardExpiry_Invalid";
  }
};

SimpleSchema.messages({
  'payments/CreditCard_Invalid': "Credit Card number is invalid",
  'payments/CVC_Invalid': "CVC is invalid",
  'payments/CardExpiry_Invalid': "Expiry is invalid",
});
