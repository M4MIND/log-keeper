import {AbstractController, Response} from "slix-app"
import Nginx from "../../utils/Nginx"

let fs = require('fs');

export default class NginxController extends AbstractController {
	mount() {
		this.GET('/nginx/', this.index);
		this.GET('/nginx/restart/', this.restart);
		this.GET('/nginx/start/', this.start);
		this.GET('/nginx/stop/', this.stop);
		this.GET('/nginx/:item:/', this.item);
	}

	index = async () => {
		return new Response('index');
	}

	restart = async () => {
		await Nginx.restart();
		return new Response('Restart');
	}

	start = async () => {
		await Nginx.start();
		return new Response('Restart');
	}

	stop = async () => {
		await Nginx.stop();
		return new Response('Restart');
	}

	item = async (request) => {
		let data = await new Promise((resolve, reject) => {
			fs.readFile(`/var/log/nginx/${request.path.get('item')}`, (err, data) => {
				if (err) {
					reject(err)
				}

				resolve(data)
			})
		});

		return await this.App.render('nginx/item', {
			data: data.toString('utf8').split(new RegExp('[\\r\\n]', 'gm')).reverse()
		})
	}
}