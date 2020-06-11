/*
scw.lib.js v3.2.1 hotfix
Bugfixes
- Fixed a typo in the timebtw() function which caused the 'd' parameter to not change the result
Changes from v3.2.0
- Slightly altered the timebtw() function display messages when c is less than b or b is less than c, depending on mode as stated in d.
- Rolled back changes to random code generators which changed all Math.floor() to Math.round() after multiple "undefined" were discovered appearing. gen_no(a, b, c) is exempt from this change as it has not negatively affected the function.

Copyright VoicefulBread66, 2019-2020
*/
function countdown (a, b, c = "dt", d = "n") {
    if (a === undefined) {
      //If no element id, stop program
        return console.log("You did not specify an element id for the program.");
    } else {
        if (b === undefined) {
          //Defines variable b with default value if user didnt put in input
            b = new Date("2021-01-01T00:00:00Z").getTime() + new Date().getTimezoneOffset() * 60000;
        } else {
          //if user puts in input, converts it to miliseconds
            b = new Date(b).getTime() + new Date().getTimezoneOffset() * 60000;
        }
        //Variable defining for normal time
        var now, diff, doe, w, wt, dwt, d, dt, dddt, h, ht, dddtht, m, mt, dddthtmt, s;
        //Defines the normal time function to be repeated with setInterval()
        var norm = function () {
          //Defines the current time
          now = new Date().getTime();
          //Uses different settings for different modes
          if (c === "uf") {
            diff = now - b;
          } else {
            diff = b - now;
          }
          //Calculations
           w = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
           wt = w * 1000 * 60 * 60 * 24 * 7;
           dwt = diff - wt;
           d = Math.floor(dwt / (1000 * 60 * 60 * 24));
           dt = d * 1000 * 60 * 60 * 24;
           dddt = dwt - dt;
           h = Math.floor(dddt / (1000 * 60 * 60));
           ht = h * 1000 * 60 * 60;
           dddtht = dddt - ht;
           m = Math.floor(dddtht / (1000 * 60));
           mt = m * 1000 * 60;
           dddthtmt = dddtht - mt;
           s = Math.floor(dddthtmt / 1000);
           //Checks if difference is greater than or equal to 0ms
           if (diff >= 0) {
             doe = w + "w " + d + "d " + h + "h " + m + "m " + s + "s";
           } else {
             //Message based on mode
             if (c === "uf") {
               doe = "The time at which the timer starts counting up hasn't even started yet!";
             } else {
               doe = "The time this countdown is counting down to has come";
               clearInterval(norm, 1000);
             }
           }
           //Puts text into HTML
           document.getElementById(a).innerHTML = doe;
        };
        //Variable defining for decimal time
        var mdiff, mnow, mw, mwt, mdwt, md, mdt, mdddt, mh, mht, mdddtht, mm, mmt, mdddthtmt, ms;
        var decimal = function () {
          //Defines the current time
          mnow = new Date().getTime();
          //Uses different settings for different modes
          if (c === "uf") {
            mdiff = mnow - b;
          } else {
            mdiff = b - mnow;
          }
          //Calculations
           mw = Math.floor(mdiff / (1000 * 60 * 60 * 24 * 7));
           mwt = mw * 1000 * 60 * 60 * 24 * 7;
           mdwt = mdiff - mwt;
           md = Math.floor(mdwt / (1000 * 60 * 60 * 24));
           mdt = md * 1000 * 60 * 60 * 24;
           mdddt = mdwt - mdt;
           mh = Math.floor(mdddt / (864 * 100 * 100));
           mht = mh * 864 * 100 * 100;
           mdddtht = mdddt - mht;
           mm = Math.floor(mdddtht / (864 * 100));
           mmt = mm * 864 * 100;
           mdddthtmt = mdddtht - mmt;
           ms = Math.floor(mdddthtmt / 864);
           //Checks if difference is greater than or equal to 0ms
           if (mdiff >= 0) {
             doe = mw + "w " + md + "d " + mh + "h " + mm + "m " + ms + "s";
           } else {
             //Message based on mode
             if (c === "uf") {
               doe = "The time at which the timer starts counting up hasn't even started yet!";
             } else {
               doe = "The time this countdown is counting down to has come";
               clearInterval(decimal, 864);
             }
           }
           //Puts text into HTML
           document.getElementById(a).innerHTML = doe;
          };
        }
        //Sets an interval, depending on parameter d
        if (d === "d") {
          setInterval(decimal, 864);
        } else {
          setInterval(norm, 1000)
        }
}
function cdww (a, b, c = "dt", d = "n") {
    if (a === undefined) {
      //If no element id, stop program
        return console.log("You did not specify an element id for the program");
    } else {
        if (b === undefined) {
          //Defines variable b with default value if user didnt put in input
            b = new Date("2021-01-01T00:00:00Z").getTime() + new Date().getTimezoneOffset() * 60000;
        } else {
          //if user puts in input, converts it to miliseconds
            b = new Date(b).getTime() + new Date().getTimezoneOffset() * 60000;
        }
        //Variable defining for normal time
        var now, diff, doe, d, dt, dddt, h, ht, dddtht, m, mt, dddthtmt, s;
        //Defines the normal time function to be repeated with setInterval()
        var norm = function () {
          //Defines the current time
          now = new Date().getTime();
          //Uses different settings for different modes
          if (c === "uf") {
            diff = now - b;
          } else {
            diff = b - now;
          }
          //Calculations
           d = Math.floor(diff / (1000 * 60 * 60 * 24));
           dt = d * 1000 * 60 * 60 * 24;
           dddt = diff - dt;
           h = Math.floor(dddt / (1000 * 60 * 60));
           ht = h * 1000 * 60 * 60;
           dddtht = dddt - ht;
           m = Math.floor(dddtht / (1000 * 60));
           mt = m * 1000 * 60;
           dddthtmt = dddtht - mt;
           s = Math.floor(dddthtmt / 1000);
           //Checks if difference is greater than or equal to 0ms
           if (diff >= 0) {
             doe = d + "d " + h + "h " + m + "m " + s + "s";
           } else {
             //Message based on mode
             if (c === "uf") {
               doe = "The time at which the timer starts counting up hasn't even started yet!";
             } else {
               doe = "The time this countdown is counting down to has come";
               clearInterval(norm, 1000);
             }
           }
           //Puts text into HTML
           document.getElementById(a).innerHTML = doe;
        };
        //Variable defining for decimal time
        var mnow, mdiff, md, mdt, mdddt, mh, mht, mdddtht, mm, mmt, mdddthtmt, ms;
        var decimal = function () {
          //Defines the current time
          mnow = new Date().getTime();
          //Uses different settings for different modes
          if (c === "uf") {
            mdiff = mnow - b;
          } else {
            mdiff = b - mnow;
          }
          //Calculations
           md = Math.floor(mdiff / (1000 * 60 * 60 * 24));
           mdt = md * 1000 * 60 * 60 * 24;
           mdddt = mdiff - mdt;
           mh = Math.floor(mdddt / (864 * 100 * 100));
           mht = mh * 864 * 100 * 100;
           mdddtht = mdddt - mht;
           mm = Math.floor(mdddtht / (864 * 100));
           mmt = mm * 864 * 100;
           mdddthtmt = mdddtht - mmt;
           ms = Math.floor(mdddthtmt / 864);
           //Checks if difference is greater than or equal to 0ms
           if (mdiff >= 0) {
             doe = md + "d " + mh + "h " + mm + "m " + ms + "s";
           } else {
             //Message based on mode
             if (c === "uf") {
               doe = "The time at which the timer starts counting up hasn't even started yet!";
             } else {
               doe = "The time this countdown is counting down to has come";
               clearInterval(decimal, 864);
             }
           }
           //Puts text into HTML
           document.getElementById(a).innerHTML = doe;
          };
        }
        //Sets an interval, depending on parameter d
        if (d === "d") {
          setInterval(decimal, 864);
        } else {
          setInterval(norm, 1000)
        }
}
function countdown_sec (a, b, c = "dt", d = "n") {
    if (a === undefined) {
      //If no element id, stop program
        return console.log("You did not specify an element id for the program");
    } else {
        if (b === undefined) {
          //Defines variable b with default value if user didnt put in input
            b = new Date("2021-01-01T00:00:00Z").getTime() + new Date().getTimezoneOffset() * 60000;
        } else {
          //if user puts in input, converts it to miliseconds
            b = new Date(b).getTime() + new Date().getTimezoneOffset() * 60000;
        }
        //Variable defining for normal time
        var now, diff, s;
        //Defines the normal time function to be repeated with setInterval()
        var norm = function () {
          //Defines the current time
          now = new Date().getTime();
          //Uses different settings for different modes
          if (c === "uf") {
            diff = now - b;
          } else {
            diff = b - now;
          }
          //Calculation
           s = Math.floor(diff / 1000)
           //Checks if difference is greater than or equal to 0ms
           if (diff >= 0) {
             doe = s + "s";
           } else {
             //Message based on mode
             if (c === "uf") {
               doe = "The time at which the timer starts counting up hasn't even started yet!";
             } else {
               doe = "The time this countdown is counting down to has come";
               clearInterval(norm, 1000);
             }
           }
           //Puts text into HTML
           document.getElementById(a).innerHTML = doe;
        };
        //Variable defining for decimal time
        var ms, mdiff, mnow
        var decimal = function () {
          //Defines the current time
          mnow = new Date().getTime();
          //Uses different settings for different modes
          if (c === "uf") {
            mdiff = mnow - b;
          } else {
            mdiff = b - mnow;
          }
          //Calculation
           ms = Math.floor(mdiff / 864);
           //Checks if difference is greater than or equal to 0ms
           if (mdiff >= 0) {
             doe = ms + "s";
           } else {
             //Message based on mode
             if (c === "uf") {
               doe = "The time at which the timer starts counting up hasn't even started yet!";
             } else {
               doe = "The time this countdown is counting down to has come";
               clearInterval(decimal, 864);
             }
           }
           //Puts text into HTML
           document.getElementById(a).innerHTML = doe;
          };
        }
        //Sets an interval, depending on parameter d
        if (d === "d") {
          setInterval(decimal, 864);
        } else {
          setInterval(norm, 1000)
        }
}
function timebtw (a, b, c, d = "uf", e = "n") {
    if (a === undefined) {
      //If no element id, stop program
        return console.log("You did not specify an element id for the program.");
    } else {
        if (b === undefined) {
          //Defines variable b with default value if user didnt put in input
            b = new Date("2019-01-01T00:00:00Z").getTime() + new Date().getTimezoneOffset() * 60000;
        } else {
          //if user puts in input, converts it to miliseconds
            b = new Date(b).getTime() + new Date().getTimezoneOffset() * 60000;
        }
        if (c === undefined) {
          //Defines variable c with default value if user didnt put in input
            c = new Date("2020-01-01T00:00:00Z").getTime() + new Date().getTimezoneOffset() * 60000;
        } else {
          //if user puts in input, converts it to miliseconds
            c = new Date(c).getTime() + new Date().getTimezoneOffset() * 60000;
        }
        //Variable defining for normal time
        var diff, doe, w, wt, dwt, d, dt, dddt, h, ht, dddtht, m, mt, dddthtmt, s;
        //Defines the normal time function to be repeated with setInterval()
        var norm = function () {
          //Uses different settings for different modes
          if (d === "dt") {
            diff = b - c;
          } else {
            diff = c - b;
          }
          //Calculations
           w = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
           wt = w * 1000 * 60 * 60 * 24 * 7;
           dwt = diff - wt;
           d = Math.floor(dwt / (1000 * 60 * 60 * 24));
           dt = d * 1000 * 60 * 60 * 24;
           dddt = dwt - dt;
           h = Math.floor(dddt / (1000 * 60 * 60));
           ht = h * 1000 * 60 * 60;
           dddtht = dddt - ht;
           m = Math.floor(dddtht / (1000 * 60));
           mt = m * 1000 * 60;
           dddthtmt = dddtht - mt;
           s = Math.floor(dddthtmt / 1000);
           //Checks if difference is greater than or equal to 0ms
           if (diff >= 0) {
             doe = w + "w " + d + "d " + h + "h " + m + "m " + s + "s";
           } else {
             //Message based on mode
             if (d === "dt") {
               doe = "NaN";
             } else {
               doe = "NaN";
               clearInterval(norm, 1000);
             }
           }
           //Puts text into HTML
           document.getElementById(a).innerHTML = doe;
        };
        //Variable defining for decimal time
        var mdiff, mw, mwt, mdwt, md, mdt, mdddt, mh, mht, mdddtht, mm, mmt, mdddthtmt, ms;
        var decimal = function () {
          //Uses different settings for different modes
          if (d === "dt") {
            mdiff = b - c;
          } else {
            mdiff = c - b;
          }
          //Calculations
           mw = Math.floor(mdiff / (1000 * 60 * 60 * 24 * 7));
           mwt = mw * 1000 * 60 * 60 * 24 * 7;
           mdwt = mdiff - mwt;
           md = Math.floor(mdwt / (1000 * 60 * 60 * 24));
           mdt = md * 1000 * 60 * 60 * 24;
           mdddt = mdwt - mdt;
           mh = Math.floor(mdddt / (864 * 100 * 100));
           mht = mh * 864 * 100 * 100;
           mdddtht = mdddt - mht;
           mm = Math.floor(mdddtht / (864 * 100));
           mmt = mm * 864 * 100;
           mdddthtmt = mdddtht - mmt;
           ms = Math.floor(mdddthtmt / 864);
           //Checks if difference is greater than or equal to 0ms
           if (mdiff >= 0) {
             doe = mw + "w " + md + "d " + mh + "h " + mm + "m " + ms + "s";
           } else {
             //Message based on mode
             if (c === "dt") {
               doe = "NaN";
             } else {
               doe = "NaN";
               clearInterval(decimal, 864);
             }
           }
           //Puts text into HTML
           document.getElementById(a).innerHTML = doe;
          };
        }
        //Sets an interval, depending on parameter e
        let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
    clearInterval(stateCheck);
        if (e === "d") {
          decimal();
        } else {
          norm()
        }
    }}, 100)
}
function hex16(a) {
  let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    if (a === undefined) {
      //If no element id, stop program
      return console.log("You did not specify an element id for the program");
    } else {
      //Defines variable 'hd' as an array with the possible values of a hexadecimal 'number'
      var hd = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
      //Variable definition of hexadecimal 'numbers'
      var hn1 = Math.floor(Math.random() * 16);
      var hn2 = Math.floor(Math.random() * 16);
      var hn3 = Math.floor(Math.random() * 16);
      var hn4 = Math.floor(Math.random() * 16);
      var hn5 = Math.floor(Math.random() * 16);
      var hn6 = Math.floor(Math.random() * 16);
      var hn7 = Math.floor(Math.random() * 16);
      var hn8 = Math.floor(Math.random() * 16);
      var hn9 = Math.floor(Math.random() * 16);
      var hn10 = Math.floor(Math.random() * 16);
      var hn11 = Math.floor(Math.random() * 16);
      var hn12 = Math.floor(Math.random() * 16);
      var hn13 = Math.floor(Math.random() * 16);
      var hn14 = Math.floor(Math.random() * 16);
      var hn15 = Math.floor(Math.random() * 16);
      var hn16 = Math.floor(Math.random() * 16);
      //Puts 16 hexademical 'numbers' as a string into HTML
      document.getElementById(a).innerHTML = hd[hn1] + hd[hn2] + hd[hn3] + hd[hn4] + hd[hn5] + hd[hn6] + hd[hn7] + hd[hn8] + hd[hn9] + hd[hn10] + hd[hn11] + hd[hn12] + hd[hn13] + hd[hn14] + hd[hn15] + hd[hn16];
    }
    }
  }, 100);
}
function hex64_16(a) {
  let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    if (a === undefined) {
      //If no element id, stop program
      return console.log("You did not specify an element id for the program");
    } else {
      //Defines variable 'hd' as an array with the possible values of a hexadecimal 'number'
      var hd = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "$", "."];
      //Variable definition of hexadecimal 'numbers'
      var hn1 = Math.floor(Math.random() * 64);
      var hn2 = Math.floor(Math.random() * 64);
      var hn3 = Math.floor(Math.random() * 64);
      var hn4 = Math.floor(Math.random() * 64);
      var hn5 = Math.floor(Math.random() * 64);
      var hn6 = Math.floor(Math.random() * 64);
      var hn7 = Math.floor(Math.random() * 64);
      var hn8 = Math.floor(Math.random() * 64);
      var hn9 = Math.floor(Math.random() * 64);
      var hn10 = Math.floor(Math.random() * 64);
      var hn11 = Math.floor(Math.random() * 64);
      var hn12 = Math.floor(Math.random() * 64);
      var hn13 = Math.floor(Math.random() * 64);
      var hn14 = Math.floor(Math.random() * 64);
      var hn15 = Math.floor(Math.random() * 64);
      var hn16 = Math.floor(Math.random() * 64);
      //Puts 16 hexademical 'numbers' as a string into HTML
      document.getElementById(a).innerHTML = hd[hn1] + hd[hn2] + hd[hn3] + hd[hn4] + hd[hn5] + hd[hn6] + hd[hn7] + hd[hn8] + hd[hn9] + hd[hn10] + hd[hn11] + hd[hn12] + hd[hn13] + hd[hn14] + hd[hn15] + hd[hn16];
    }
    }
  }, 100);
}
function time2dec(a, b) {
  var c;
  if (a === undefined) {
    //Stops program if no element id provided
    return console.log("You did not specify an element id for the program");
  } else {
    if (b === undefined) {
      //Defines b if no value provided in parameter
      b = new Date().getTimezoneOffset() * -1 * 60 * 1000;
    } else if (b === "default") {
      //Defines b if b parameter is "default"
      b = new Date().getTimezoneOffset() * -1 * 60 * 1000;
    } else {
      //Defines b if b parameter is not "default"
      b = b * 60 * 60 * 1000;
    }
    var func = function () {
      if (c === undefined) {
        //Defines c if no value provided in parameter
        c = new Date().getTime();
      } else {
        //Defines c if value provided in parameter
        c = new Date(c).getTime();
      }
      //Variable for new Date() function
      if (c === undefined) {
        var d = new Date();
      } else {
        var d = new Date(c);
      }
      //Locale Date String to get [DD: Int.toString()] [MMM: string] [YYYY: Int.toString()]
      var dd = d.toLocaleDateString("en-SG", {year: "numeric", "month": "short", "day": "numeric"});
      //Calculation of amount of time (days) minus hours, minutes, seconds
      var date = Math.floor(c / (864 * 100 * 100 * 10)) * 864 * 100 * 100 * 10;
      //Time since day start
      var tsds = new Date().getTime(c) - date + b;
      //Calculations
      var h = Math.floor(tsds / (864 * 100 * 100));
      var ht = h * 864 * 100 * 100;
      var th = tsds - ht;
      var m = Math.floor(th / (864 * 100));
      var mt = m * 864 * 100;
      var thm = th - mt;
      var s = Math.floor(thm / 864);
      //Puts text into HTML
      document.getElementById(a).innerHTML = dd + " " + h + ":" + m + ":" + s;
    }
    setInterval(func, 864);
  }
}
function time2dec_c(a, b, c) {
  if (a === undefined) {
    //Stops program if no element id provided
    return console.log("You did not specify an element id for the program");
  } else {
    if (b === undefined) {
      //Defines b if no value provided in parameter
      b = new Date().getTimezoneOffset() * -1 * 60 * 1000;
    } else if (b === "default") {
      //Defines b if b parameter is "default"
      b = new Date().getTimezoneOffset() * -1 * 60 * 1000;
    } else {
      //Defines b if b parameter is not "default"
      b = b * 60 * 60 * 1000;
    }
      if (c === undefined) {
        //Defines c if no value provided in parameter
        c = new Date().getTime();
      } else {
        //Defines c if value provided in parameter
        c = new Date(c).getTime()
      }
      //Variable for new Date() function
      if (c === undefined) {
        var d = new Date();
      } else {
        var d = new Date(c);
      }
      //Locale Date String to get [DD: Int.toString()] [MMM: string] [YYYY: Int.toString()]
      var dd = d.toLocaleDateString("en-SG", {year: "numeric", "month": "short", "day": "numeric"});
      //Calculation of amount of time (days) minus hours, minutes, seconds
      var date = Math.floor(c / (864 * 100 * 100 * 10)) * 864 * 100 * 100 * 10;
      //Time since day start
      var tsds = c - date + b;
      //Calculations
      var h = Math.floor(tsds / (864 * 100 * 100));
      var ht = h * 864 * 100 * 100;
      var th = tsds - ht;
      var m = Math.floor(th / (864 * 100));
      var mt = m * 864 * 100;
      var thm = th - mt;
      var s = Math.floor(thm / 864);
      //Puts text into HTML
      let stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        document.getElementById(a).innerHTML = dd + " " + h + ":" + m + ":" + s;
        }
      }, 100);
	}
}
function pswgen(a) {
	let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
	//Stops the program if element id is not specified
	if (a === undefined) {
		return "You did not specify an element id for the program";
	} else {
		var no = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
		var n1 = Math.floor(Math.random() * 10);
		var n2 = Math.floor(Math.random() * 10);
		var sp = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
		var s1 = Math.floor(Math.random() * 10);
		var s2 = Math.floor(Math.random() * 10);
		var al = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		var a1 = Math.floor(Math.random() * 52);
		var a2 = Math.floor(Math.random() * 52);
		var a3 = Math.floor(Math.random() * 52);
		var a4 = Math.floor(Math.random() * 52);
		var a5 = Math.floor(Math.random() * 52);
		var a6 = Math.floor(Math.random() * 52);
		var a7 = Math.floor(Math.random() * 52);
		var a8 = Math.floor(Math.random() * 52);
		var a9 = Math.floor(Math.random() * 52);
		var a10 = Math.floor(Math.random() * 52);
		var a11 = Math.floor(Math.random() * 52);
		var a12 = Math.floor(Math.random() * 52);
		//Inserts password into HTML
		document.getElementById(a).innerHTML = al[a1] + al[a2] + no[n1] + al[a3] + sp[s1] + al[a4] + al[a5] + al[a6] + no[n2] + al[a7] + al[a8] + sp[s2] + al[a9] + al[a10] + al[a11] + al[a12];
	}
	}
}, 100)}
function gen_no(a, b = 0, c = 1000) {
	let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
		clearInterval(stateCheck);
		if (a === undefined) {
			return "You did not specify an element id for the program"
		} else {
			if (c > b) {
				document.getElementById(a).innerHTML = Math.round(Math.random() * (c - b)) + b
			} else {
				return "Error: The max in the random number generator is more than the min."
			}
		}
	}}, 100)
}
