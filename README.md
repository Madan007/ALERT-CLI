<h4 align="center">
    <a href="https://github.com/Madan007/ALERT-CLI">
	<img width="675" alt="image" src="https://user-images.githubusercontent.com/15178258/160086442-dfa20ee0-c935-4b87-970c-0bb650f34f77.png">    
    </a>
    <br>
    <br>

Cross platform CLI Alerts with colors & colored symbols for success, info, warning, error.
<br>
Work on macOS, Linux, and Windows.

</h4>

<br>

# super-alerts-cli

[![📟](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/install.png)](./../../)

## Install

```sh
npm super-alerts-cli
```

<br>

[![⚙️](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/usage.png)](./../../)

## Usage

```js
const alert = require('super-alerts-cli');

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
```

<br />

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/options.png)](./../../)

## API

### alert(options)

#### ❯ options

Type: `object`<br>
Default: `{}`

You can specify the options below.

##### ❯ type

Type: `string`<br>
Default: `error`

##### ❯ msg

Type: `string`<br>
Default: `You forgot to define all options.` (Error message)

##### ❯ name

Type: `string`<br>
Default: `''` (Empty string)

<br>

[![📝](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/log.png)](changelog.md)

## Changelog

[❯ Read the changelog here →](changelog.md)

## License & Conduct

-   MIT © [Madan Kumar]https://github.com/Madan007)
-   [Code of Conduct](code-of-conduct.md)

<br>

[![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)](./../../)
