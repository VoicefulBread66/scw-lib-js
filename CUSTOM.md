# About
scw-custom.lib.js is a small JavaScript library containing custom HTML elements dealing with countdowns, count-ups, finding the time between two fixed times, random code/number generators, and converting time to decimall time. More information on scw-custom.lib.js is available in the [wiki](../../wiki).<br>
**Note: If you are looking for information on scw-custom.lib.js, go to [README.md](README.md).**

# Release
The latest release version of scw-custom.lib.js is v1.3.0, which is based on scw.lib.js v3.8.0.

# How to add scw-custom.lib.js to your HTML file
If you want to use a hosted version from the web, paste the following code into your ```<head>``` tag:
```<script src="https://scwco.pages.dev/scripts/scw-custom.lib.min.js"></script>```
If you want to use a local version, you can download the script off Github from the [releases page](releases) (both minified and unminified versions are available) and link it using a similar ```<script>```.<br>
<b>Very important note: Do NOT use ```async``` in the script tag linking to this script. scw-custom.lib.js sometimes does not function properly with ```async```.</b>

# How to use scw-custom.lib.js in your HTML file
After you have added scw-custom.lib.js to your HTML file, you can place the custom elements added from scw-custom.lib.js within the `<body>` tag of the file. The custom elements added are `<scw-countdown>`, `<scw-generate>`, and `<scw-time2dec>`
The following is an example of a HTML file utilizing scw-custom.lib.js:
```html
<!DOCTYPE html>
<html>
<head>
<title>scw-custom.lib.js</title>
<script src="https://scwco.pages.dev/scripts/scw-custom.lib.min.js"></script>
</head>
<body>
<scw-countdown></scw-countdown>
</body>
</html>
```
# More information
More information on scw-custom.lib.js is available in the [wiki](../../wiki)!
# Creator
scw-custom.lib.js has been developed by VoicefulBread66 since 2022, and is based on scw.lib.js, developed by VoicefulBread66 since 2019.
