import { statSync, readFileSync, createReadStream, createWriteStream, existsSync, mkdirSync } from 'fs';
import { extname, basename  } from 'path';

export default (opt = {}) => {

	return {
		name: 'html',
		ongenerate(opt) {
			console.log('------ ongenerate: ', opt);
		},
		onwrite(opt) {
			console.log('------ onwrite: ', opt);
		}
	};
}
