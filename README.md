# About
scw.lib.js is a small JavaScript library containing functions dealing with countdowns, count-ups, finding the time between two fixed times, random code/number generators, and converting time to decimall time. More information on scw.lib.js is available in the [wiki](../../wiki).<br>
**Note: If you are looking for information on scw-custom.lib.js, go to [CUSTOM.md](CUSTOM.md).**

# Version
The latest release version of scw.lib.js is v3.8.0.

# How to add scw.lib.js to your HTML file
If you want to use a hosted version from the web, paste the following code into your ```<head>``` tag:
```<script src="https://scwco.pages.dev/scripts/scw.lib.min.js"></script>```
If you want to use a local version, you can download the script off Github (both minified and unminified versions are available) and link it using a similar ```<script>```<br>
<b>Very important note: Do NOT use ```async``` in the script tag linking to this script. scw.lib.js sometimes does not function properly with ```async```.</b>

# How to type scw.lib.js code
After you have added scw.lib.js to your HTML file, make a seperate ```<script>``` tag inside of your ```<head>``` tag, and put it after the ```<script>``` which you used to add scw.lib.js to your HTML file.
The following is an example of a HTML file utilizing scw.lib.js:
```html
<!DOCTYPE html>
<html>
<head>
<title>scw.lib.js</title>
<script src="https://scwco.pages.dev/scripts/scw.lib.min.js"></script>
<script>
countdown("A")
</script>
</head>
<body>
<span id="A"></span>
</body>
</html>
```

# Development
This has been developed by VoicefulBread66 since 2019.
