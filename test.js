import alert from './index.js';

// Test case: when no options are provided
//Output: ✖  ERROR  You forgot to define all options.
alert();

// Test case: when success options are provided
//Output: ✔  SUCCESS  All done!
alert({
	type: `success`,
	msg: `All done!`
});

// Test case: when warning options are provided
//Output: ⚠  WARNING  No serious damage, can ignore.
alert({
	type: `warning`,
	msg: `No serious damage, can ignore.`
});

// Test case: when info options are provided
//Output: ℹ  INFO  Needs certain improvements.
alert({
	type: `info`,
	msg: `Needs certain improvements.`
});

// Test case: when error options are provided
//Output: ✖  ERROR  Oops something went wrong!
alert({
	type: `error`,
	msg: `Oops something went wrong!`
});

// Test case: when success options are provided with custom name label
//Output: ✔  Done  Operation Completed!.
alert({
	type: `success`,
	msg: `Operation Completed!.`,
	name: 'Done'
});
