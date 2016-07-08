Template.save.helpers({
  savings: function() {
    return Save.find();
  }
})

Template.form.onCreated(function(){
  this.templateDictionary = new ReactiveDict();
  this.templateDictionary.set('yes', false);
});

Template.form.helpers({
  yes: function() {
    return Template.instance().templateDictionary.get('yes');
  },
});

Template.form.events({
  'change select': function( event, template ) {
    if ( $( event.target ).val() === "yes" ) {
      template.templateDictionary.set( 'yes', true );
    } else {
      template.templateDictionary.set( 'yes', false );
    }
  }
});

Template.save.events({
  "click .js-addSave": function(event){
    console.log("hey you clicked the button")
    //Read values of input fields and store in values
    const nameOfSavingsBank = $(" .js-saveWithBank").val();
    const savingsAmount = $(" .js-amountToSave").val();

    const save =
    {nameOfSavingsBank:nameOfSavingsBank, savingsAmount:savingsAmount}
    console.dir(save);
    Meteor.call("insertSave", save);
  },

})
