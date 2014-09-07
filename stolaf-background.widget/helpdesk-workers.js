moment: (function(e){function tt(e,t,n){switch(arguments.length){case 2:return e!=null?e:t;case 3:return e!=null?e:t!=null?t:n;default:throw new Error("Implement me")}}function nt(e,t){return o.call(e,t)}function rt(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false}}function it(e){if(t.suppressDeprecationWarnings===false&&typeof console!=="undefined"&&console.warn){console.warn("Deprecation warning: "+e)}}function st(e,t){var n=true;return ht(function(){if(n){it(e);n=false}return t.apply(this,arguments)},t)}function ot(e,t){if(!Z[e]){it(t);Z[e]=true}}function ut(e,t){return function(n){return vt(e.call(this,n),t)}}function at(e,t){return function(n){return this.localeData().ordinal(e.call(this,n),t)}}function ft(){}function lt(e,t){if(t!==false){Mt(e)}pt(this,e);this._d=new Date(+e._d)}function ct(e){var n=Tt(e),r=n.year||0,i=n.quarter||0,s=n.month||0,o=n.week||0,u=n.day||0,a=n.hour||0,f=n.minute||0,l=n.second||0,c=n.millisecond||0;this._milliseconds=+c+l*1e3+f*6e4+a*36e5;this._days=+u+o*7;this._months=+s+i*3+r*12;this._data={};this._locale=t.localeData();this._bubble()}function ht(e,t){for(var n in t){if(nt(t,n)){e[n]=t[n]}}if(nt(t,"toString")){e.toString=t.toString}if(nt(t,"valueOf")){e.valueOf=t.valueOf}return e}function pt(e,t){var n,r,i;if(typeof t._isAMomentObject!=="undefined"){e._isAMomentObject=t._isAMomentObject}if(typeof t._i!=="undefined"){e._i=t._i}if(typeof t._f!=="undefined"){e._f=t._f}if(typeof t._l!=="undefined"){e._l=t._l}if(typeof t._strict!=="undefined"){e._strict=t._strict}if(typeof t._tzm!=="undefined"){e._tzm=t._tzm}if(typeof t._isUTC!=="undefined"){e._isUTC=t._isUTC}if(typeof t._offset!=="undefined"){e._offset=t._offset}if(typeof t._pf!=="undefined"){e._pf=t._pf}if(typeof t._locale!=="undefined"){e._locale=t._locale}if(m.length>0){for(n in m){r=m[n];i=t[r];if(typeof i!=="undefined"){e[r]=i}}}return e}function dt(e){if(e<0){return Math.ceil(e)}else{return Math.floor(e)}}function vt(e,t,n){var r=""+Math.abs(e),i=e>=0;while(r.length<t){r="0"+r}return(i?n?"+":"":"-")+r}function mt(e,t){var n={milliseconds:0,months:0};n.months=t.month()-e.month()+(t.year()-e.year())*12;if(e.clone().add(n.months,"M").isAfter(t)){--n.months}n.milliseconds=+t- +e.clone().add(n.months,"M");return n}function gt(e,t){var n;t=Bt(t,e);if(e.isBefore(t)){n=mt(e,t)}else{n=mt(t,e);n.milliseconds=-n.milliseconds;n.months=-n.months}return n}function yt(e,n){return function(r,i){var s,o;if(i!==null&&!isNaN(+i)){ot(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period).");o=r;r=i;i=o}r=typeof r==="string"?+r:r;s=t.duration(r,i);bt(this,s,e);return this}}function bt(e,n,r,i){var s=n._milliseconds,o=n._days,u=n._months;i=i==null?true:i;if(s){e._d.setTime(+e._d+s*r)}if(o){pn(e,"Date",hn(e,"Date")+o*r)}if(u){cn(e,hn(e,"Month")+u*r)}if(i){t.updateOffset(e,o||u)}}function wt(e){return Object.prototype.toString.call(e)==="[object Array]"}function Et(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function St(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),s=0,o;for(o=0;o<r;o++){if(n&&e[o]!==t[o]||!n&&Ct(e[o])!==Ct(t[o])){s++}}return s+i}function xt(e){if(e){var t=e.toLowerCase().replace(/(.)s$/,"$1");e=V[e]||$[t]||t}return e}function Tt(e){var t={},n,r;for(r in e){if(nt(e,r)){n=xt(r);if(n){t[n]=e[r]}}}return t}function Nt(n){var r,i;if(n.indexOf("week")===0){r=7;i="day"}else if(n.indexOf("month")===0){r=12;i="month"}else{return}t[n]=function(s,o){var u,a,f=t._locale[n],l=[];if(typeof s==="number"){o=s;s=e}a=function(e){var n=t().utc().set(i,e);return f.call(t._locale,n,s||"")};if(o!=null){return a(o)}else{for(u=0;u<r;u++){l.push(a(u))}return l}}}function Ct(e){var t=+e,n=0;if(t!==0&&isFinite(t)){if(t>=0){n=Math.floor(t)}else{n=Math.ceil(t)}}return n}function kt(e,t){return(new Date(Date.UTC(e,t+1,0))).getUTCDate()}function Lt(e,n,r){return un(t([e,11,31+n-r]),n,r).week}function At(e){return Ot(e)?366:365}function Ot(e){return e%4===0&&e%100!==0||e%400===0}function Mt(e){var t;if(e._a&&e._pf.overflow===-2){t=e._a[f]<0||e._a[f]>11?f:e._a[l]<1||e._a[l]>kt(e._a[a],e._a[f])?l:e._a[c]<0||e._a[c]>23?c:e._a[h]<0||e._a[h]>59?h:e._a[p]<0||e._a[p]>59?p:e._a[d]<0||e._a[d]>999?d:-1;if(e._pf._overflowDayOfYear&&(t<a||t>l)){t=l}e._pf.overflow=t}}function _t(e){if(e._isValid==null){e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated;if(e._strict){e._isValid=e._isValid&&e._pf.charsLeftOver===0&&e._pf.unusedTokens.length===0}}return e._isValid}function Dt(e){return e?e.toLowerCase().replace("_","-"):e}function Pt(e){var t=0,n,r,i,s;while(t<e.length){s=Dt(e[t]).split("-");n=s.length;r=Dt(e[t+1]);r=r?r.split("-"):null;while(n>0){i=Ht(s.slice(0,n).join("-"));if(i){return i}if(r&&r.length>=n&&St(s,r,true)>=n-1){break}n--}t++}return null}function Ht(e){var n=null;if(!v[e]&&g){try{n=t.locale();require("./locale/"+e);t.locale(n)}catch(r){}}return v[e]}function Bt(e,n){return n._isUTC?t(e).zone(n._offset||0):t(e).local()}function jt(e){if(e.match(/\[[\s\S]/)){return e.replace(/^\[|\]$/g,"")}return e.replace(/\\/g,"")}function Ft(e){var t=e.match(E),n,r;for(n=0,r=t.length;n<r;n++){if(Y[t[n]]){t[n]=Y[t[n]]}else{t[n]=jt(t[n])}}return function(i){var s="";for(n=0;n<r;n++){s+=t[n]instanceof Function?t[n].call(i,e):t[n]}return s}}function It(e,t){if(!e.isValid()){return e.localeData().invalidDate()}t=qt(t,e.localeData());if(!J[t]){J[t]=Ft(t)}return J[t](e)}function qt(e,t){function r(e){return t.longDateFormat(e)||e}var n=5;S.lastIndex=0;while(n>=0&&S.test(e)){e=e.replace(S,r);S.lastIndex=0;n-=1}return e}function Rt(e,t){var n,r=t._strict;switch(e){case"Q":return D;case"DDDD":return H;case"YYYY":case"GGGG":case"gggg":return r?B:N;case"Y":case"G":case"g":return F;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return r?j:C;case"S":if(r){return D};case"SS":if(r){return P};case"SSS":if(r){return H};case"DDD":return T;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return L;case"a":case"A":return t._locale._meridiemParse;case"X":return M;case"Z":case"ZZ":return A;case"T":return O;case"SSSS":return k;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return r?P:x;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return x;case"Do":return _;default:n=new RegExp(Qt(Kt(e.replace("\\","")),"i"));return n}}function Ut(e){e=e||"";var t=e.match(A)||[],n=t[t.length-1]||[],r=(n+"").match(z)||["-",0,0],i=+(r[1]*60)+Ct(r[2]);return r[0]==="+"?-i:i}function zt(e,n,r){var i,s=r._a;switch(e){case"Q":if(n!=null){s[f]=(Ct(n)-1)*3}break;case"M":case"MM":if(n!=null){s[f]=Ct(n)-1}break;case"MMM":case"MMMM":i=r._locale.monthsParse(n);if(i!=null){s[f]=i}else{r._pf.invalidMonth=n}break;case"D":case"DD":if(n!=null){s[l]=Ct(n)}break;case"Do":if(n!=null){s[l]=Ct(parseInt(n,10))}break;case"DDD":case"DDDD":if(n!=null){r._dayOfYear=Ct(n)}break;case"YY":s[a]=t.parseTwoDigitYear(n);break;case"YYYY":case"YYYYY":case"YYYYYY":s[a]=Ct(n);break;case"a":case"A":r._isPm=r._locale.isPM(n);break;case"H":case"HH":case"h":case"hh":s[c]=Ct(n);break;case"m":case"mm":s[h]=Ct(n);break;case"s":case"ss":s[p]=Ct(n);break;case"S":case"SS":case"SSS":case"SSSS":s[d]=Ct(("0."+n)*1e3);break;case"X":r._d=new Date(parseFloat(n)*1e3);break;case"Z":case"ZZ":r._useUTC=true;r._tzm=Ut(n);break;case"dd":case"ddd":case"dddd":i=r._locale.weekdaysParse(n);if(i!=null){r._w=r._w||{};r._w["d"]=i}else{r._pf.invalidWeekday=n}break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":e=e.substr(0,1);case"gggg":case"GGGG":case"GGGGG":e=e.substr(0,2);if(n){r._w=r._w||{};r._w[e]=Ct(n)}break;case"gg":case"GG":r._w=r._w||{};r._w[e]=t.parseTwoDigitYear(n)}}function Wt(e){var n,r,i,s,o,u,f;n=e._w;if(n.GG!=null||n.W!=null||n.E!=null){o=1;u=4;r=tt(n.GG,e._a[a],un(t(),1,4).year);i=tt(n.W,1);s=tt(n.E,1)}else{o=e._locale._week.dow;u=e._locale._week.doy;r=tt(n.gg,e._a[a],un(t(),o,u).year);i=tt(n.w,1);if(n.d!=null){s=n.d;if(s<o){++i}}else if(n.e!=null){s=n.e+o}else{s=o}}f=an(r,i,s,u,o);e._a[a]=f.year;e._dayOfYear=f.dayOfYear}function Xt(e){var t,n,r=[],i,s;if(e._d){return}i=$t(e);if(e._w&&e._a[l]==null&&e._a[f]==null){Wt(e)}if(e._dayOfYear){s=tt(e._a[a],i[a]);if(e._dayOfYear>At(s)){e._pf._overflowDayOfYear=true}n=nn(s,0,e._dayOfYear);e._a[f]=n.getUTCMonth();e._a[l]=n.getUTCDate()}for(t=0;t<3&&e._a[t]==null;++t){e._a[t]=r[t]=i[t]}for(;t<7;t++){e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t]}e._d=(e._useUTC?nn:tn).apply(null,r);if(e._tzm!=null){e._d.setUTCMinutes(e._d.getUTCMinutes()+e._tzm)}}function Vt(e){var t;if(e._d){return}t=Tt(e._i);e._a=[t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond];Xt(e)}function $t(e){var t=new Date;if(e._useUTC){return[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]}else{return[t.getFullYear(),t.getMonth(),t.getDate()]}}function Jt(e){if(e._f===t.ISO_8601){Yt(e);return}e._a=[];e._pf.empty=true;var n=""+e._i,r,i,s,o,u,a=n.length,f=0;s=qt(e._f,e._locale).match(E)||[];for(r=0;r<s.length;r++){o=s[r];i=(n.match(Rt(o,e))||[])[0];if(i){u=n.substr(0,n.indexOf(i));if(u.length>0){e._pf.unusedInput.push(u)}n=n.slice(n.indexOf(i)+i.length);f+=i.length}if(Y[o]){if(i){e._pf.empty=false}else{e._pf.unusedTokens.push(o)}zt(o,i,e)}else if(e._strict&&!i){e._pf.unusedTokens.push(o)}}e._pf.charsLeftOver=a-f;if(n.length>0){e._pf.unusedInput.push(n)}if(e._isPm&&e._a[c]<12){e._a[c]+=12}if(e._isPm===false&&e._a[c]===12){e._a[c]=0}Xt(e);Mt(e)}function Kt(e){return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,r,i){return t||n||r||i})}function Qt(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Gt(e){var t,n,r,i,s;if(e._f.length===0){e._pf.invalidFormat=true;e._d=new Date(NaN);return}for(i=0;i<e._f.length;i++){s=0;t=pt({},e);t._pf=rt();t._f=e._f[i];Jt(t);if(!_t(t)){continue}s+=t._pf.charsLeftOver;s+=t._pf.unusedTokens.length*10;t._pf.score=s;if(r==null||s<r){r=s;n=t}}ht(e,n||t)}function Yt(e){var t,n,r=e._i,i=I.exec(r);if(i){e._pf.iso=true;for(t=0,n=R.length;t<n;t++){if(R[t][1].exec(r)){e._f=R[t][0]+(i[6]||" ");break}}for(t=0,n=U.length;t<n;t++){if(U[t][1].exec(r)){e._f+=U[t][0];break}}if(r.match(A)){e._f+="Z"}Jt(e)}else{e._isValid=false}}function Zt(e){Yt(e);if(e._isValid===false){delete e._isValid;t.createFromInputFallback(e)}}function en(n){var r=n._i,i;if(r===e){n._d=new Date}else if(Et(r)){n._d=new Date(+r)}else if((i=y.exec(r))!==null){n._d=new Date(+i[1])}else if(typeof r==="string"){Zt(n)}else if(wt(r)){n._a=r.slice(0);Xt(n)}else if(typeof r==="object"){Vt(n)}else if(typeof r==="number"){n._d=new Date(r)}else{t.createFromInputFallback(n)}}function tn(e,t,n,r,i,s,o){var u=new Date(e,t,n,r,i,s,o);if(e<1970){u.setFullYear(e)}return u}function nn(e){var t=new Date(Date.UTC.apply(null,arguments));if(e<1970){t.setUTCFullYear(e)}return t}function rn(e,t){if(typeof e==="string"){if(!isNaN(e)){e=parseInt(e,10)}else{e=t.weekdaysParse(e);if(typeof e!=="number"){return null}}}return e}function sn(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function on(e,n,r){var i=t.duration(e).abs(),o=s(i.as("s")),u=s(i.as("m")),a=s(i.as("h")),f=s(i.as("d")),l=s(i.as("M")),c=s(i.as("y")),h=o<K.s&&["s",o]||u===1&&["m"]||u<K.m&&["mm",u]||a===1&&["h"]||a<K.h&&["hh",a]||f===1&&["d"]||f<K.d&&["dd",f]||l===1&&["M"]||l<K.M&&["MM",l]||c===1&&["y"]||["yy",c];h[2]=n;h[3]=+e>0;h[4]=r;return sn.apply({},h)}function un(e,n,r){var i=r-n,s=r-e.day(),o;if(s>i){s-=7}if(s<i-7){s+=7}o=t(e).add(s,"d");return{week:Math.ceil(o.dayOfYear()/7),year:o.year()}}function an(e,t,n,r,i){var s=nn(e,0,1).getUTCDay(),o,u;s=s===0?7:s;n=n!=null?n:i;o=i-s+(s>r?7:0)-(s<i?7:0);u=7*(t-1)+(n-i)+o+1;return{year:u>0?e:e-1,dayOfYear:u>0?u:At(e-1)+u}}function fn(n){var r=n._i,i=n._f;n._locale=n._locale||t.localeData(n._l);if(r===null||i===e&&r===""){return t.invalid({nullInput:true})}if(typeof r==="string"){n._i=r=n._locale.preparse(r)}if(t.isMoment(r)){return new lt(r,true)}else if(i){if(wt(i)){Gt(n)}else{Jt(n)}}else{en(n)}return new lt(n)}function ln(e,n){var r,i;if(n.length===1&&wt(n[0])){n=n[0]}if(!n.length){return t()}r=n[0];for(i=1;i<n.length;++i){if(n[i][e](r)){r=n[i]}}return r}function cn(e,t){var n;if(typeof t==="string"){t=e.localeData().monthsParse(t);if(typeof t!=="number"){return e}}n=Math.min(e.date(),kt(e.year(),t));e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n);return e}function hn(e,t){return e._d["get"+(e._isUTC?"UTC":"")+t]()}function pn(e,t,n){if(t==="Month"){return cn(e,n)}else{return e._d["set"+(e._isUTC?"UTC":"")+t](n)}}function dn(e,n){return function(r){if(r!=null){pn(this,e,r);t.updateOffset(this,n);return this}else{return hn(this,e)}}}function vn(e){return e*400/146097}function mn(e){return e*146097/400}function gn(e){t.duration.fn[e]=function(){return this._data[e]}}var t,n="2.8.2",r=typeof global!=="undefined"?global:this,i,s=Math.round,o=Object.prototype.hasOwnProperty,u,a=0,f=1,l=2,c=3,h=4,p=5,d=6,v={},m=[],g=typeof module!=="undefined"&&module.exports,y=/^\/?Date\((\-?\d+)/i,b=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,w=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,E=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,S=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,x=/\d\d?/,T=/\d{1,3}/,N=/\d{1,4}/,C=/[+\-]?\d{1,6}/,k=/\d+/,L=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,A=/Z|[\+\-]\d\d:?\d\d/gi,O=/T/i,M=/[\+\-]?\d+(\.\d{1,3})?/,_=/\d{1,2}/,D=/\d/,P=/\d\d/,H=/\d{3}/,B=/\d{4}/,j=/[+-]?\d{6}/,F=/[+-]?\d+/,I=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,q="YYYY-MM-DDTHH:mm:ssZ",R=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],U=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],z=/([\+\-]|\d\d)/gi,W="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),X={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},V={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},$={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},J={},K={s:45,m:45,h:22,d:26,M:11},Q="DDD w W M D d".split(" "),G="M D H h m s w W".split(" "),Y={M:function(){return this.month()+1},MMM:function(e){return this.localeData().monthsShort(this,e)},MMMM:function(e){return this.localeData().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.localeData().weekdaysMin(this,e)},ddd:function(e){return this.localeData().weekdaysShort(this,e)},dddd:function(e){return this.localeData().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return vt(this.year()%100,2)},YYYY:function(){return vt(this.year(),4)},YYYYY:function(){return vt(this.year(),5)},YYYYYY:function(){var e=this.year(),t=e>=0?"+":"-";return t+vt(Math.abs(e),6)},gg:function(){return vt(this.weekYear()%100,2)},gggg:function(){return vt(this.weekYear(),4)},ggggg:function(){return vt(this.weekYear(),5)},GG:function(){return vt(this.isoWeekYear()%100,2)},GGGG:function(){return vt(this.isoWeekYear(),4)},GGGGG:function(){return vt(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),true)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),false)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return Ct(this.milliseconds()/100)},SS:function(){return vt(Ct(this.milliseconds()/10),2)},SSS:function(){return vt(this.milliseconds(),3)},SSSS:function(){return vt(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";if(e<0){e=-e;t="-"}return t+vt(Ct(e/60),2)+":"+vt(Ct(e)%60,2)},ZZ:function(){var e=-this.zone(),t="+";if(e<0){e=-e;t="-"}return t+vt(Ct(e/60),2)+vt(Ct(e)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},Z={},et=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];while(Q.length){u=Q.pop();Y[u+"o"]=at(Y[u],u)}while(G.length){u=G.pop();Y[u+u]=ut(Y[u],2)}Y.DDDD=ut(Y.DDD,3);ht(ft.prototype,{set:function(e){var t,n;for(n in e){t=e[n];if(typeof t==="function"){this[n]=t}else{this["_"+n]=t}}},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var n,r,i;if(!this._monthsParse){this._monthsParse=[]}for(n=0;n<12;n++){if(!this._monthsParse[n]){r=t.utc([2e3,n]);i="^"+this.months(r,"")+"|^"+this.monthsShort(r,"");this._monthsParse[n]=new RegExp(i.replace(".",""),"i")}if(this._monthsParse[n].test(e)){return n}}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},weekdaysParse:function(e){var n,r,i;if(!this._weekdaysParse){this._weekdaysParse=[]}for(n=0;n<7;n++){if(!this._weekdaysParse[n]){r=t([2e3,1]).day(n);i="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,"");this._weekdaysParse[n]=new RegExp(i.replace(".",""),"i")}if(this._weekdaysParse[n].test(e)){return n}}},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];if(!t&&this._longDateFormat[e.toUpperCase()]){t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)});this._longDateFormat[e]=t}return t},isPM:function(e){return(e+"").toLowerCase().charAt(0)==="p"},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(e,t,n){if(e>11){return n?"pm":"PM"}else{return n?"am":"AM"}},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return typeof n==="function"?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,r){var i=this._relativeTime[n];return typeof i==="function"?i(e,t,n,r):i.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return typeof n==="function"?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return un(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}});t=function(t,n,r,i){var s;if(typeof r==="boolean"){i=r;r=e}s={};s._isAMomentObject=true;s._i=t;s._f=n;s._l=r;s._strict=i;s._isUTC=false;s._pf=rt();return fn(s)};t.suppressDeprecationWarnings=false;t.createFromInputFallback=st("moment construction falls back to js Date. This is "+"discouraged and will be removed in upcoming major "+"release. Please refer to "+"https://github.com/moment/moment/issues/1407 for more info.",function(e){e._d=new Date(e._i)});t.min=function(){var e=[].slice.call(arguments,0);return ln("isBefore",e)};t.max=function(){var e=[].slice.call(arguments,0);return ln("isAfter",e)};t.utc=function(t,n,r,i){var s;if(typeof r==="boolean"){i=r;r=e}s={};s._isAMomentObject=true;s._useUTC=true;s._isUTC=true;s._l=r;s._i=t;s._f=n;s._strict=i;s._pf=rt();return fn(s).utc()};t.unix=function(e){return t(e*1e3)};t.duration=function(e,n){var r=e,i=null,s,o,u,a;if(t.isDuration(e)){r={ms:e._milliseconds,d:e._days,M:e._months}}else if(typeof e==="number"){r={};if(n){r[n]=e}else{r.milliseconds=e}}else if(!!(i=b.exec(e))){s=i[1]==="-"?-1:1;r={y:0,d:Ct(i[l])*s,h:Ct(i[c])*s,m:Ct(i[h])*s,s:Ct(i[p])*s,ms:Ct(i[d])*s}}else if(!!(i=w.exec(e))){s=i[1]==="-"?-1:1;u=function(e){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*s};r={y:u(i[2]),M:u(i[3]),d:u(i[4]),h:u(i[5]),m:u(i[6]),s:u(i[7]),w:u(i[8])}}else if(typeof r==="object"&&("from"in r||"to"in r)){a=gt(t(r.from),t(r.to));r={};r.ms=a.milliseconds;r.M=a.months}o=new ct(r);if(t.isDuration(e)&&nt(e,"_locale")){o._locale=e._locale}return o};t.version=n;t.defaultFormat=q;t.ISO_8601=function(){};t.momentProperties=m;t.updateOffset=function(){};t.relativeTimeThreshold=function(t,n){if(K[t]===e){return false}if(n===e){return K[t]}K[t]=n;return true};t.lang=st("moment.lang is deprecated. Use moment.locale instead.",function(e,n){return t.locale(e,n)});t.locale=function(e,n){var r;if(e){if(typeof n!=="undefined"){r=t.defineLocale(e,n)}else{r=t.localeData(e)}if(r){t.duration._locale=t._locale=r}}return t._locale._abbr};t.defineLocale=function(e,n){if(n!==null){n.abbr=e;if(!v[e]){v[e]=new ft}v[e].set(n);t.locale(e);return v[e]}else{delete v[e];return null}};t.langData=st("moment.langData is deprecated. Use moment.localeData instead.",function(e){return t.localeData(e)});t.localeData=function(e){var n;if(e&&e._locale&&e._locale._abbr){e=e._locale._abbr}if(!e){return t._locale}if(!wt(e)){n=Ht(e);if(n){return n}e=[e]}return Pt(e)};t.isMoment=function(e){return e instanceof lt||e!=null&&nt(e,"_isAMomentObject")};t.isDuration=function(e){return e instanceof ct};for(u=et.length-1;u>=0;--u){Nt(et[u])}t.normalizeUnits=function(e){return xt(e)};t.invalid=function(e){var n=t.utc(NaN);if(e!=null){ht(n._pf,e)}else{n._pf.userInvalidated=true}return n};t.parseZone=function(){return t.apply(null,arguments).parseZone()};t.parseTwoDigitYear=function(e){return Ct(e)+(Ct(e)>68?1900:2e3)};ht(t.fn=lt.prototype,{clone:function(){return t(this)},valueOf:function(){return+this._d+(this._offset||0)*6e4},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var e=t(this).utc();if(0<e.year()&&e.year()<=9999){return It(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}else{return It(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return _t(this)},isDSTShifted:function(){if(this._a){return this.isValid()&&St(this._a,(this._isUTC?t.utc(this._a):t(this._a)).toArray())>0}return false},parsingFlags:function(){return ht({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(e){return this.zone(0,e)},local:function(e){if(this._isUTC){this.zone(0,e);this._isUTC=false;if(e){this.add(this._d.getTimezoneOffset(),"m")}}return this},format:function(e){var n=It(this,e||t.defaultFormat);return this.localeData().postformat(n)},add:yt(1,"add"),subtract:yt(-1,"subtract"),diff:function(e,n,r){var i=Bt(e,this),s=(this.zone()-i.zone())*6e4,o,u;n=xt(n);if(n==="year"||n==="month"){o=(this.daysInMonth()+i.daysInMonth())*432e5;u=(this.year()-i.year())*12+(this.month()-i.month());u+=(this-t(this).startOf("month")-(i-t(i).startOf("month")))/o;u-=(this.zone()-t(this).startOf("month").zone()-(i.zone()-t(i).startOf("month").zone()))*6e4/o;if(n==="year"){u=u/12}}else{o=this-i;u=n==="second"?o/1e3:n==="minute"?o/6e4:n==="hour"?o/36e5:n==="day"?(o-s)/864e5:n==="week"?(o-s)/6048e5:o}return r?u:dt(u)},from:function(e,n){return t.duration({to:this,from:e}).locale(this.locale()).humanize(!n)},fromNow:function(e){return this.from(t(),e)},calendar:function(e){var n=e||t(),r=Bt(n,this).startOf("day"),i=this.diff(r,"days",true),s=i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse";return this.format(this.localeData().calendar(s,this))},isLeapYear:function(){return Ot(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();if(e!=null){e=rn(e,this.localeData());return this.add(e-t,"d")}else{return t}},month:dn("Month",true),startOf:function(e){e=xt(e);switch(e){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}if(e==="week"){this.weekday(0)}else if(e==="isoWeek"){this.isoWeekday(1)}if(e==="quarter"){this.month(Math.floor(this.month()/3)*3)}return this},endOf:function(e){e=xt(e);return this.startOf(e).add(1,e==="isoWeek"?"week":e).subtract(1,"ms")},isAfter:function(e,n){n=typeof n!=="undefined"?n:"millisecond";return+this.clone().startOf(n)>+t(e).startOf(n)},isBefore:function(e,n){n=typeof n!=="undefined"?n:"millisecond";return+this.clone().startOf(n)<+t(e).startOf(n)},isSame:function(e,t){t=t||"ms";return+this.clone().startOf(t)===+Bt(e,this).startOf(t)},min:st("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(e){e=t.apply(null,arguments);return e<this?this:e}),max:st("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(e){e=t.apply(null,arguments);return e>this?this:e}),zone:function(e,n){var r=this._offset||0,i;if(e!=null){if(typeof e==="string"){e=Ut(e)}if(Math.abs(e)<16){e=e*60}if(!this._isUTC&&n){i=this._d.getTimezoneOffset()}this._offset=e;this._isUTC=true;if(i!=null){this.subtract(i,"m")}if(r!==e){if(!n||this._changeInProgress){bt(this,t.duration(r-e,"m"),1,false)}else if(!this._changeInProgress){this._changeInProgress=true;t.updateOffset(this,true);this._changeInProgress=null}}}else{return this._isUTC?r:this._d.getTimezoneOffset()}return this},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){if(this._tzm){this.zone(this._tzm)}else if(typeof this._i==="string"){this.zone(this._i)}return this},hasAlignedHourOffset:function(e){if(!e){e=0}else{e=t(e).zone()}return(this.zone()-e)%60===0},daysInMonth:function(){return kt(this.year(),this.month())},dayOfYear:function(e){var n=s((t(this).startOf("day")-t(this).startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")},quarter:function(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)},weekYear:function(e){var t=un(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return e==null?t:this.add(e-t,"y")},isoWeekYear:function(e){var t=un(this,1,4).year;return e==null?t:this.add(e-t,"y")},week:function(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")},isoWeek:function(e){var t=un(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")},weekday:function(e){var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")},isoWeekday:function(e){return e==null?this.day()||7:this.day(this.day()%7?e:e-7)},isoWeeksInYear:function(){return Lt(this.year(),1,4)},weeksInYear:function(){var e=this.localeData()._week;return Lt(this.year(),e.dow,e.doy)},get:function(e){e=xt(e);return this[e]()},set:function(e,t){e=xt(e);if(typeof this[e]==="function"){this[e](t)}return this},locale:function(n){if(n===e){return this._locale._abbr}else{this._locale=t.localeData(n);return this}},lang:st("moment().lang() is deprecated. Use moment().localeData() instead.",function(n){if(n===e){return this.localeData()}else{this._locale=t.localeData(n);return this}}),localeData:function(){return this._locale}});t.fn.millisecond=t.fn.milliseconds=dn("Milliseconds",false);t.fn.second=t.fn.seconds=dn("Seconds",false);t.fn.minute=t.fn.minutes=dn("Minutes",false);t.fn.hour=t.fn.hours=dn("Hours",true);t.fn.date=dn("Date",true);t.fn.dates=st("dates accessor is deprecated. Use date instead.",dn("Date",true));t.fn.year=dn("FullYear",true);t.fn.years=st("years accessor is deprecated. Use year instead.",dn("FullYear",true));t.fn.days=t.fn.day;t.fn.months=t.fn.month;t.fn.weeks=t.fn.week;t.fn.isoWeeks=t.fn.isoWeek;t.fn.quarters=t.fn.quarter;t.fn.toJSON=t.fn.toISOString;ht(t.duration.fn=ct.prototype,{_bubble:function(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,s,o,u=0;r.milliseconds=e%1e3;i=dt(e/1e3);r.seconds=i%60;s=dt(i/60);r.minutes=s%60;o=dt(s/60);r.hours=o%24;t+=dt(o/24);u=dt(vn(t));t-=dt(mn(u));n+=dt(t/30);t%=30;u+=dt(n/12);n%=12;r.days=t;r.months=n;r.years=u},abs:function(){this._milliseconds=Math.abs(this._milliseconds);this._days=Math.abs(this._days);this._months=Math.abs(this._months);this._data.milliseconds=Math.abs(this._data.milliseconds);this._data.seconds=Math.abs(this._data.seconds);this._data.minutes=Math.abs(this._data.minutes);this._data.hours=Math.abs(this._data.hours);this._data.months=Math.abs(this._data.months);this._data.years=Math.abs(this._data.years);return this},weeks:function(){return dt(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months%12*2592e6+Ct(this._months/12)*31536e6},humanize:function(e){var t=on(this,!e,this.localeData());if(e){t=this.localeData().pastFuture(+this,t)}return this.localeData().postformat(t)},add:function(e,n){var r=t.duration(e,n);this._milliseconds+=r._milliseconds;this._days+=r._days;this._months+=r._months;this._bubble();return this},subtract:function(e,n){var r=t.duration(e,n);this._milliseconds-=r._milliseconds;this._days-=r._days;this._months-=r._months;this._bubble();return this},get:function(e){e=xt(e);return this[e.toLowerCase()+"s"]()},as:function(e){var t,n;e=xt(e);t=this._days+this._milliseconds/864e5;if(e==="month"||e==="year"){n=this._months+vn(t)*12;return e==="month"?n:n/12}else{t+=mn(this._months/12);switch(e){case"week":return t/7;case"day":return t;case"hour":return t*24;case"minute":return t*24*60;case"second":return t*24*60*60;case"millisecond":return t*24*60*60*1e3;default:throw new Error("Unknown unit "+e)}}},lang:t.fn.lang,locale:t.fn.locale,toIsoString:st("toIsoString() is deprecated. Please use toISOString() instead "+"(notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var e=Math.abs(this.years()),t=Math.abs(this.months()),n=Math.abs(this.days()),r=Math.abs(this.hours()),i=Math.abs(this.minutes()),s=Math.abs(this.seconds()+this.milliseconds()/1e3);if(!this.asSeconds()){return"P0D"}return(this.asSeconds()<0?"-":"")+"P"+(e?e+"Y":"")+(t?t+"M":"")+(n?n+"D":"")+(r||i||s?"T":"")+(r?r+"H":"")+(i?i+"M":"")+(s?s+"S":"")},localeData:function(){return this._locale}});t.duration.fn.toString=t.duration.fn.toISOString;for(u in X){if(nt(X,u)){gn(u.toLowerCase())}}t.duration.fn.asMilliseconds=function(){return this.as("ms")};t.duration.fn.asSeconds=function(){return this.as("s")};t.duration.fn.asMinutes=function(){return this.as("m")};t.duration.fn.asHours=function(){return this.as("h")};t.duration.fn.asDays=function(){return this.as("d")};t.duration.fn.asWeeks=function(){return this.as("weeks")};t.duration.fn.asMonths=function(){return this.as("M")};t.duration.fn.asYears=function(){return this.as("y")};t.locale("en",{ordinal:function(e){var t=e%10,n=Ct(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});return t}),

command: [
	'curl --silent ',
		'"https://www3.whentowork.com',
		'/cgi-bin/w2wC.dll/empwhosonlater.htm',
		'?SID=500606355428D"',
].join(''),

refreshFrequency: 60000,
lastUpdateTime: undefined,

style: [
	"bottom: 0",
	"left: 33.33%",
	"width: 33.33%",
	"text-align: center",
	"border: 0",
	"height: 3%",
	"vertical-align: middle",
	"color: rgba(255, 255, 255, 0.5)",
	"font-weight: 300",
].join('\n'),

render: function(argument) {
	return 'Helpdesk Workers: <span class="last-updated"></span>';
},

update: function(output, domEl) {
	var moment = this.moment();
	localStorage.setItem('stolaf-helpdesk-workers', output);
	this.lastUpdateTime = new Date();

	domEl.querySelector('.last-updated').textContent = moment(this.lastUpdateTime).calendar();
},
