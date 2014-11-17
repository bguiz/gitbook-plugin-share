# Social share buttons for GitBook

This plugin allows you to add social shared buttons to the bottom of every page
in your gitbook.

![Screenshot of gitbook-plugin-share](./screenshot.png)

## Installation

Install as a global NodeJs package.

```
$ npm install -g gitbook-plugin-share
```

## Use in a gitbook

To use in your book, add to plugins list in `book.json` in your gitbook directory:

```
{
    "plugins": ["share"]
}
```

## Configuration

You can configure the plugin is `book.json`:

```
{
    "pluginsConfig": {
        "share": {
            "reddit": {
                "newwindow": 1
            }
        }
    }
}
```

* Reddit
	* See [Reddit Buttons](http://www.reddit.com/buttons/)
	* Supported settings: All listed under the section "customizing the look of your buttons"
* Google+
    * Supported settings: `url`
* Twitter
    * See [Twitter Buttons](https://twitter.com/about/resources/buttons#tweet)
    * Supported settings: `url`
* Facebook
    * See [Facebook Buttons](https://developers.facebook.com/docs/reference/plugins/like/)
    * Supported settings: `url`
* LinkedIn
    * See [LinkedIn Buttons](https://developer.linkedin.com/plugins/share-plugin-generator)
    * Supported settings: `url`, `lang`

## Licence

GPLv3

## Requests

If you would like to see share buttons for different sites,
or see more options supported for the sites already there,
create a new issue.

Contributions welcome, of course!
