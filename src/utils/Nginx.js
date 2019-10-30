let exec = require('child_process').exec;

export default class Nginx {

}

Nginx.status = {
	restart: false,
}

Nginx.status = async () => {
	return new Promise((resolve, reject) => {
		exec('service nginx status', (err, stdout, stderr) => {
			if (err || stderr) {
				reject(err)
			}

			resolve({
				loaded: stdout.match(new RegExp('Loaded:[^\\n+?]+', 'gm'))[0],
				active: stdout.match(new RegExp('Active:[^\\n+?]+', 'gm'))[0],
				cpu: stdout.match(new RegExp('CPU:[^\\n+?]+', 'gm'))[0],
				pid: stdout.match(new RegExp('Main PID:[^\\n+?]+', 'gm'))[0],
				tasks: stdout.match(new RegExp('Tasks:[^\\n+?]+', 'gm'))[0],
				memory: stdout.match(new RegExp('Memory:[^\\n+?]+', 'gm'))[0],
				logsDir: '/var/log/nginx/'
			})
		})
	})
}

Nginx.restart = () => {

	return new Promise((resolve, reject) => {
		if (!Nginx.status.restart) {
			Nginx.status.restart = true;
			exec('service nginx restart', (err, stdout, stderr) => {
				if (err || stderr) {
					reject(err)
				}

				Nginx.status.restart = false;
				resolve({
					status: true,
					out: stdout
				});
			});
		}

		else {
			resolve({
				status: true,
				out: 'Restart already started'
			})
		}
	});
}

Nginx.start = () => {
	return new Promise((resolve, reject) => {
		exec('service nginx start', (err, stdout, stderr) => {
			if (err || stderr) {
				reject(err)
			}

			resolve(true);
		});
	});
}

Nginx.stop = () => {
	return new Promise((resolve, reject) => {
		exec('service nginx stop', (err, stdout, stderr) => {
			if (err || stderr) {
				reject(err)
			}

			resolve(true);
		});
	});
}