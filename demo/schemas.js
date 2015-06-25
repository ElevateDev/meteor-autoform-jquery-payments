CollectionSchema = new SimpleSchema({
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
});

Collection = new Mongo.Collection("c");
Collection.attachSchema( CollectionSchema );

Collection.allow({
  insert: function(uid,doc){
    console.log("insertDoc", doc );
    return true;
  },
  update: function(uid,doc){
    console.log("updateDoc", doc );
    return true;
  },
  remove: function(){
    return true;
  }
});

if( Meteor.isClient ){
  Meteor.subscribe("Collection");
}

if( Meteor.isServer ){
  Meteor.publish("Collection",function(){
    return Collection.find();
  });
}
