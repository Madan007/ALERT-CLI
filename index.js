/**
 * CLI Alerts.
 *
 * Cross platform CLI Alerts with colors.
 * Works on macOS, Linux, and Windows.
 * Alerts: `success`, `info`, `warning`, `error`.
 *
 * @author Madan Kumar <https://github.com/Madan007>
 */

// importing packages
import chalk from 'chalk';
import logSymbol from 'log-symbols';

//Intializing the constants
const green = chalk.green;
const greenInverse = chalk.green.inverse;
const red = chalk.red.bold;
const redInverse = chalk.red.bold.inverse;
const orange = chalk.hex('#FFA500');
const orangeInverse = chalk.hex('#FFA500').inverse;
const blue = chalk.blue;
const blueInverse = chalk.blue.inverse;

export default (options = {}) => {
	const defaultOptions = {
		type: `error`,
		msg: `You forgot to define all options.`,
		name: null
	};

	const opts = {...defaultOptions, ...options};

	const {type, msg, name} = opts;

	const nameLabel = name ?? type.toUpperCase();

	switch (type) {
		case 'success':
			console.log(`\n${logSymbol.success} ${greenInverse(` ${nameLabel} `)} ${green(msg)}\n`);
			break;
		case 'error':
			console.log(`\n${logSymbol.error} ${redInverse(` ${nameLabel} `)} ${red(msg)}\n`);
			break;
		case 'warning':
			console.log(
				`\n${logSymbol.warning} ${orangeInverse(` ${nameLabel} `)} ${orange(msg)}\n`
			);
			break;
		case 'info':
			console.log(`\n${logSymbol.info} ${blueInverse(` ${nameLabel} `)} ${blue(msg)}\n`);
			break;
		default:
			console.log(`\n${logSymbol.error} ${redInverse(` ${nameLabel} `)} ${red(msg)}\n`);
			break;
	}
};
