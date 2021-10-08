'use strict';
// require the store object
// we will use it to share data between files
const store = require('../store');

const signUpSuccess = function (responseData) {
	// tell the user it was successful
	$('#movies-display').text('Signed up successfully!');
	// remove existing classes, then add a green success class from bootstrap
	$('#movies-display').removeClass();
	// changing the color for the success to green
	$('#movies-display').addClass('text-success');
	// reset all of the forms it will clear it
	$('form').trigger('reset');
	console.log('responseData is', responseData);
};

const signUpFailure = function (error) {
	// tell the user it was successful
	$('#error-message').text('Sign up Failed!');
	// remove existing classes, then add a green success class from bootstrap
	$('#error-message').removeClass();
	// changing the color for the success to red
	$('#error-message').addClass('text-danger');
	// print the error
	console.error('error is', error);
};

const signInSuccess = function (responseData) {
	// we are going to add the user we got back in our responses data
	// to the store object. so we can access the users token
	// later in api.js
	store.user = responseData.user;
  console.log('store is', store);
  // tell user sign in was successful
	$('#movies-display').text('Sign In Successful!');
	$('#movies-display').removeClass();
	$('#movies-display').addClass('text-success');
	$('form').trigger('reset');

	// after we sign-in we hide the section before-sign-in
	$('#before-sign-in').hide();
	// after we sign-in we show the section after-sign-in
	$('#after-sign-in').show();
	console.log('responseData is', responseData);
};

const signInFailure = function (error) {
	$('#error-message').text('Sign up Failed!');
	$('#error-message').removeClass();
	$('#error-message').addClass('text-danger');
	console.log('error is', error);
};

const changePasswordSuccess = function(responseData){
	$('#movies-display').text('Password changed successfully!');
	$('#movies-display').removeClass();
	$('#movies-display').addClass('text-success');
	$('form').trigger('reset');
	console.log('responseData is', responseData);
}

const changePasswordFailure = function(error){
	$('#error-message').text('Change password Failed!');
	$('#error-message').removeClass();
	$('#error-message').addClass('text-danger');
	console.error('error is', error);
}
const signOutSuccess = function(responseData){
	$('#movies-display').text('Signed out successfully!');
	$('#movies-display').removeClass();
	$('#movies-display').addClass('text-success');
	$('form').trigger('reset');

  // to go back to the sign-in page
  $('#after-sign-in').hide()
  $('#before-sign-in').show()

  	console.log('responseData is', responseData);
    
}
const signOutFailure = function (error) {
	$('#error-message').text('Sign Out Failed!');
	$('#error-message').removeClass();
	$('#error-message').addClass('text-danger');
	console.error('error is', error);
};

module.exports = {
	signUpFailure,
	signUpSuccess,
	signInSuccess,
	signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
};
