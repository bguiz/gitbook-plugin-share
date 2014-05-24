# Social share buttons for GitBook

This plugin allows you to add social shared buttons to the bottom of every page
in your gitbook.

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
	* See [Reddit Buttons](http://www.reddit.com/buttons/ "Reddit buttons")
	* Looks for the section "customizing the look of your buttons", available options match these

Note that as of now, only reddit share button works.
Contributions welcome!
