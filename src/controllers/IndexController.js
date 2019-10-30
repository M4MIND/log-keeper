import {AbstractController, Response} from "slix-app"
import Nginx from "../utils/Nginx"
import PHP from "../utils/PHP"
let fsLib = require('fs');
let exec  = require('child_process').exec;

export default class IndexController extends AbstractController {
	mount() {
		this.GET('/', this.index)
	}

	index = async () => {
		return await this.App.render('/index', {
			status: {
				nginx: await Nginx.status(),
				php: await PHP.status()
			}
		})
	}
}