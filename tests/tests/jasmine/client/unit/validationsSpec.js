describe('Payments', function(){
  _.each([
      {field: 'CreditCard', input: "12345678", error: 'payments/CreditCard_Invalid'},
      {field: 'CreditCard', input: "4242424242424242"},
      {field: 'CVC', input: "2", error: 'payments/CVC_Invalid'},
      {field: 'CVC', input: "123"},
      {field: 'CCExpiry', input: "12/12", error: 'payments/CardExpiry_Invalid'},
      {field: 'CCExpiry', input: "123", error: 'payments/CardExpiry_Invalid'},
      {field: 'CCExpiry', input: "12/99", error: 'payments/CardExpiry_Invalid'},
  ],function(test){
    console.log( test );
    describe( test.field,function(){
      it( 'should ' + (test.expected ? '' : 'not') + ' be valid for input ' + test.input,function(){
        var validator = {};
        validator.validate = PaymentsHelpers[test.field + "Validation"];
        validator.value = test.input;
        expect( validator.validate() ).toBe( test.error );
      });
    });
  });
});
