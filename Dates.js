'use strict';

module.exports = class Dates {

    constructor() {

        Date.months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
        Date.regExMap = {
            MM: new RegExp("\\" + Date.months.join("|"), "gi"),
            MMM: new RegExp("\\" + Date.months.join("|"), "gi"),
            dddd: /\b\w+/,
            dd: /\d{2}/,
            YYYY: /\d{4}/,
            hh: /\d{2}(?=:\d{2}:\d{2})/,
            mm: /\d{2}(?=:\d{2}\s)/,
            ss: /\d{2}(?=.[A-Z]{3})/
        };

        Date.regExKeys = new RegExp("\\"+Object.keys(Date.regExMap).join("|"),"gi");
    }

    register() {

        if(!Date.tinyDateFormat) {

            Date.prototype.tinyDateFormat = function(str,date) {
                //validations
                if(str === null || str === undefined || str.length <= 0) throw "invalid string";
                if(date === undefined || date === null) date = this;
                if(!(date instanceof Date)) throw "invalid date";
              
                let newStr = str;

                //extracting the matchable words & looping through
                str.match(Date.regExKeys).forEach((regEx) => {
                    
                    if (Date.regExMap[regEx]) {
    
                        newStr = newStr.replace(regEx,date.toString().match(Date.regExMap[regEx]));
                    }
                });
    
                return newStr;
            };
        }
    }
}
