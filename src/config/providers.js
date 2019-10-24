import {ProtocolProvider, FileTransferProvider, ControllerProvider} from "slix-app";
import {SlixTwigProvider} from 'slix-twig-provider';

export default [
	{provider: ProtocolProvider},
	{provider: FileTransferProvider},
	{provider: ControllerProvider},
	{
		provider: SlixTwigProvider, params: {
			typeFile: '.twig',
			path: 'views'
		}
	}
]