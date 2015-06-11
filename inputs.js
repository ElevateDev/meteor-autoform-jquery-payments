/* global AutoForm, _, $, Template */
AutoForm.addInputType("payments/creditCard", {
  template: "afCreditCard",
  valueOut: function(){
    return this.find('input').context.value;
  }
});

Template.afCreditCard.helpers({
  atts: function () {
    var data = Template.instance().data;
    var atts = data.atts;
    atts["data-type"] = data.schemaType.name;
    return atts;
  }
});

Template.afCreditCard.rendered = function () {
  var template = this;
  var $s = template.$('input');
  template.autorun(function(){
      $s.payment('formatCardNumber');
  });
};

/*
 * CVC input 
 */
AutoForm.addInputType("payments/creditCardCVC", {
  template: "afCreditCardCVC",
  valueOut: function(){
    return this.find('input').context.value;
  }
});

Template.afCreditCardCVC.helpers({
  atts: function () {
    var data = Template.instance().data;
    var atts = data.atts;
    atts["data-type"] = data.schemaType.name;
    return atts;
  }
});

Template.afCreditCardCVC.rendered = function () {
  var template = this;
  var $s = template.$('input');
  template.autorun(function(){
    $s.payment('formatCardCVC');
  });
};

/*
 * Expiry input 
 */
AutoForm.addInputType("payments/creditCardExpiry", {
  template: "afCreditCardExpiry",
  valueOut: function(){
    return this.find('input').context.value;
  }
});

Template.afCreditCardExpiry.helpers({
  atts: function () {
    var data = Template.instance().data;
    var atts = data.atts;
    atts["data-type"] = data.schemaType.name;
    return atts;
  }
});

Template.afCreditCardExpiry.rendered = function () {
  var template = this;
  var $s = template.$('input');
  template.autorun(function(){
    $s.payment('formatCardExpiry');
  });
};

/*
 *  BOOTSTRAP THEME
 */
Template.afCreditCard.copyAs('afCreditCard_bootstrap3');
Template.afCreditCardCVC.copyAs('afCreditCardCVC_bootstrap3');
Template.afCreditCardExpiry.copyAs('afCreditCardExpiry_bootstrap3');
