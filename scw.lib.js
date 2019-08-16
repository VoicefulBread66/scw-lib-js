/*
scw.lib.js v2.0.0
Copyright VoicefulBread66, 2019
*/
function countdown (a, b, c = "dt", d = "n") {
    if (a === undefined) {
      //If no element id, stop program
        return "You did not enter the specified element id for the program.";
    } else {
        if (b === undefined) {
          //Defines variable b with default value if user didnt put in input
            b = new Date("2020-01-01T00:00:00Z").getTime() + new Date().getTimezoneOffset() * 60000;
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
               clearInterval(cf, 1000);
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
               clearInterval(cf, 1000);
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
function hex16(a) {
  let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    if (a === undefined) {
      //If no element id, stop program
      return "You did not specify an element id for the program";
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