# Wordpress Block Template
A wordpress gutenberg plugin block boilerplate

## Quickstart
1. Clone this repo inside your plugins folder and add a name
`git clone git@github.com:emmanr/block-template.git block-name`

2. Install npm dependencies `npm install`

## Edit the Boilerplate's Content
1. Edit the metadata in `/src/block.json`
* For more reference in [Metadata in block.json](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/)
* For the icon you can go to [Dashicon](https://developer.wordpress.org/resource/dashicons)



2. In `/src/index.js` you need to change the name base in your metadata name
`registerBlockType( 'some-prefix/block-name', {} );`
[Block registration](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/)



3. Rename the `block-boilerplate.php` to your block name, for example if the folder name of your block is field-customizer, then you need to rename it to `field-customizer.php`.

Open the file and change the details in the plugin base in your block or the same as your metadata.

Edit the function to something like:
```
function prefix_name_block_name_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'prefix_name_block_name_block_init' );```



4. Run `npm start` to compile our blocks



5. You can now then activate your block in your wordpress plugins


## About The Boilerplate
This block was generated using `npx @wordpress/create-block block-name`
```(requires node version 12.0.0 or above, and npm version 6.9.0 or above)```
* [Create Block reference](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)
* [Include's eslint](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-eslint-plugin/)
* Has pre-commit hooks with husky and lint-staged

