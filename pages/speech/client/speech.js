// Template.speech.events({
//   "click .js-speak": function(event){
//     //var accessToken = "f739f02cd2164ac288d09ff30730d3b8",
//     console.log("clicked it");
//     $(".js-talk").html("Listening...");
//     //https://shapeshed.com/html5-speech-recognition-api/
//     const recognition = new webkitSpeechRecognition();
//     recognition.onresult = function(event) {
//         console.dir(event);
//         $(".js-speak").html("Speak");
//         $('.speech-results').html(event.results[0][0].transcript);
//         console.log(event.results[0][0].confidence);
//         const actualTranscript = event.results[0][0].transcript
//         console.log(actualTranscript);
//         //Session.set(actualTranscript, event.results[0][0].transcript);
//         console.log("done");
//         const utterance = {actualTranscript:event.results[0][0].transcript};
//         console.dir(utterance);
//         Meteor.call("insertSpeech", utterance);
//       };
//       recognition.start();
//       console.log("starting the recognizer")
//   },
// });
//
// Template.speech.helpers({
// 	speechHelper: function() {
// 		return Speech.find();
// 	},
//   // userSpeech: function() {
//   //   return Session.get(utterance);
//   // },
//   routeTo: function() {
//
//   }
// })
