import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import { Edit, Save } from './Components';

registerBlockType('create-block/block-boilerplate', {
	Edit,
	Save,
});
