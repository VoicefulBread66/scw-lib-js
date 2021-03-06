/*scw.lib.js v3.3.0
Copyright VoicefulBread66, 2019-2020*/
function countdown (a, b, c = "dt", d = "n", e = "w") {
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
          //Calculations, based on what is specified in 'e'
          if (e === "s") {
            s = Math.floor(diff / 1000);
          }
          else if (e === "d") {
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
          }
          else {
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
          }
           //Checks if difference is greater than or equal to 0ms
           if (diff >= 0) {
             //Message based on mode defined in 'e'
             if (e === "s" ) {
               doe = s + "s"
             } else if (e === "d") {
               doe = d + "d " + h + "h " + m + "m " + s + "s";
             } else {
              doe = w + "w " + d + "d " + h + "h " + m + "m " + s + "s";
             }
           } else {
             //Message based on mode defined in 'c'
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
          //Calculations, based on what is specified in 'e'
          if (e === "s") {
            ms = Math.floor(mdiff / 864);
          }
          else if (e === "d") {
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
          }
          else {
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
          }
           //Checks if difference is greater than or equal to 0ms
           if (mdiff >= 0) {
             //Message based on mode defined in 'e'
             if (e === "s" ) {
               doe = ms + "s"
             } else if (e === "d") {
               doe = md + "d " + mh + "h " + mm + "m " + ms + "s";
             } else {
              doe = mw + "w " + md + "d " + mh + "h " + mm + "m " + ms + "s";
             }
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
//To retain backwards compatibility
function cdww (a, b, c = "dt", d = "n") {
  countdown(a, b, c, d, "d")
}
function countdown_sec (a, b, c = "dt", d = "n") {
  countdown(a, b, c, d, "s");
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
function generate (a, b) {
  let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    if (a === undefined) {
      // Stops program if element id not specified
      return "You did not specify an id for the program"
    } else {
      //Defining variables
      var a1, a2, a3, b1, b2, b3, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16;
      //Defines arrays and number to multiply by
      if (b === "64_16") {
        a1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "$", "."];
        a2 = a1;
        a3 = a1;
        b1 = 64;
        b2 = b1;
      } else if (b === "psw") {
        a1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        a2 = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
        a3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        b1 = 10;
        b2 = 52;
      } else {
        a1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        a2 = a1;
        a3 = a1;
        b1 = 16;
        b2 = b1;
      }
      c1 = Math.floor(Math.random() * b2);
      c2 = Math.floor(Math.random() * b2);
      c3 = Math.floor(Math.random() * b1);
      c4 = Math.floor(Math.random() * b2);
      c5 = Math.floor(Math.random() * b1);
      c6 = Math.floor(Math.random() * b2);
      c7 = Math.floor(Math.random() * b2);
      c8 = Math.floor(Math.random() * b2);
      c9 = Math.floor(Math.random() * b1);
      c10 = Math.floor(Math.random() * b2);
      c11 = Math.floor(Math.random() * b2);
      c12 = Math.floor(Math.random() * b1);
      c13 = Math.floor(Math.random() * b2);
      c14 = Math.floor(Math.random() * b2);
      c15 = Math.floor(Math.random() * b2);
      c16 = Math.floor(Math.random() * b2);
      document.getElementById(a).innerHTML = a3[c1] + a3[c2] + a1[c3] + a3[c4] + a2[c5] + a3[c6] + a3[c7] + a3[c8] + a1[c9] + a3[c10] + a3[c11] + a2[c12] + a3[c13] + a3[c14] + a3[c15] + a3[c16];
    }
}}, 100)}
//To retain backwards compatibility
function hex16(a) {
  generate(a)
}
function hex64_16(a) {
  generate(a, "64_16")
}
function pswgen(a) {
  generate(a, "psw")
}
function time2dec(a, b, c) {
  if (a === undefined) {
    //Stops program if no element id provided
    return console.log("You did not specify an element id for the program");
  } else {
    var d,e;
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
        e = new Date().getTime();
      } else {
        //Defines c if value provided in parameter
        e = new Date(c).getTime();
      }
      //Variable for new Date() function
      if (c === undefined) {
        d = new Date();
      } else {
        d = new Date(c);
      }
      //Locale Date String to get [DD: Int.toString()] [MMM: string] [YYYY: Int.toString()]
      var dd = d.toLocaleDateString("en-SG", {year: "numeric", "month": "short", "day": "numeric"});
      //Calculation of amount of time (days) minus hours, minutes, seconds
      var date = Math.floor(e / (864 * 100 * 100 * 10)) * 864 * 100 * 100 * 10;
      //Time since day start
      var tsds = e - date + b;
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
  time2dec(a, b, c);
}
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
