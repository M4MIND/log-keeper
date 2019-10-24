import {AbstractController, Response} from "slix-app"

export default class IndexController extends AbstractController {
	mount() {
		this.GET('/', this.index)
	}

	index = async () => {
		return await this.App.render('/index')
	}
}