# Release
The latest release version of scw-custom.lib.js is v1.2.1<br>
This version is based on scw.lib.js v3.7.0<br>
**If you are looking for information on scw.lib.js, go to [README.md](README.md).**
# How to add scw-custom.lib.js to your HTML file
If you want to use a hosted version from the web, paste the following code into your ```<head>``` tag:
```<script src="https://scwco.pages.dev/scripts/scw-custom.lib.min.js"></script>```
If you want to use a local version, you can download the script off Github from the [releases page](releases) (both minified and unminified versions are available) and link it using a similar ```<script>```
### Very important note: Do NOT use ```async``` in the script tag linking to this script. scw-custom.lib.js sometimes does not function properly with ```async```.
# How to type scw.lib.js code
After you have added scw.lib.js to your HTML file, make a seperate ```<script>``` tag inside of your ```<head>``` tag, and put it after the ```<script>``` which you used to add scw.lib.js to your HTML file.
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
