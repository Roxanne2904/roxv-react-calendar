"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),r=require("styled-components");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e),a=o(t),l=o(r);let d=Date.now()-Date.now()%864e5+1e3*(new Date).getTimezoneOffset()*60;const u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=[{lang:"en",days:["January","February","March","April","May","June","July","August","September","October","November","December"]},{lang:"fr",days:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septempbre","Octobre","Novembre","Decembre"]},{lang:"spa",days:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},{lang:"por",days:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},{lang:"ger",days:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]}],s=[{lang:"en",days:["SUN","MON","TUE","WED","THU","FRI","SAT"]},{lang:"fr",days:["DIM","LUN","MAR","MER","JEU","VEN","SAM"]},{lang:"spa",days:["DOM","LUN","MAR","MIE","JUE","VIE","SAB"]},{lang:"por",days:["DOM","SEG","TER","QUA","QUI","SEXT","SAB"]},{lang:"ger",days:["SON","MON","DIEN","MITT","DON","FRE","SAM"]}],c=(e,t)=>1===t?e%4==0?29:28:[3,5,8,10].includes(t)?30:31,p=e=>{let t=e.index-e.firstDayMonth,r=e.index%7,o=e.month-1,n=e.year;o<0&&(o=11,n--);let a=c(n,o),l=(t<0?a+t:t%e.numberOfDays)+1;return{date:l,day:r,dayStatus:t<0?-1:t>=e.numberOfDays?1:0,currentMonth:new Date(e.year,e.month).getMonth()+1,timestamp:new Date(e.year,e.month,l).getTime(),dayString:u[r]}},m=(e,t)=>{let r=new Date(e,t).getDay(),o=c(e,t),n=[],a=null,l=0;for(let d=0;d<7;d++)for(let d=0;d<6;d++)a=p({index:l,numberOfDays:o,firstDayMonth:r,year:e,month:t}),n.push(a),l++;return n},f=e=>{if(null!=e&&""!==e){let t=2===e.split("/")[0].length?e.split("/")[0]:e.split("/")[2];t="0"===t.split("")[0]?t.split("")[1]:t;let r=e.split("/")[1];return r="0"===r.split("")[0]?r.split("")[1]:r,{currentDate:t,currentMonth:r,currentYear:4===e.split("/")[0].length?e.split("/")[0]:e.split("/")[2]}}return null},g=[{mode:"blue",backgroundColor:"#b1bbda70",color:"#2b489b",alowed:"#2b489b60"},{mode:"green",backgroundColor:"#b1dab770",color:"#164e22",alowed:"#164e2260"},{mode:"purple",backgroundColor:"#d5b1da70",color:"#441c64",alowed:"#441c6460"},{mode:"red",backgroundColor:"#dab1b170",color:"#9b2b2b",alowed:"#9b2b2b60"},{mode:"yellow",backgroundColor:"#eee1a570",color:"#865413",alowed:"#86541360"},{mode:"neutral",backgroundColor:"#c9c9c970",color:"#000000",alowed:"#00000060"}],y="\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n",h=l.default.div.withConfig({displayName:"styled__StyledCalendarContainer",componentId:"sc-12gez38-0"})(["height:23px;"]),b=l.default.div.withConfig({displayName:"styled__StyledCalendarDaysContainer",componentId:"sc-12gez38-1"})(["margin:1.2px;"]),w=l.default.span.withConfig({displayName:"styled__StyledCalendarDays",componentId:"sc-12gez38-2"})([""," display:flex;justify-content:center;align-items:center;min-width:26px;padding:3px 4px;font-weight:400;border:solid 1px transparent;font-size:0.7rem;transition:300ms ease-in-out;&:hover{border:solid 1px transparent;box-shadow:2px 4px 4px rgba(24,20,58,0.5);z-index:1;cursor:pointer;color:",";background:",";}",""],y,(({currentMode:e,currentColorHover:t,areDaysOutOfMonthAllowed:r,validDay:o})=>g.map((n=>{if(e===n.mode)return`${t&&t?r?0===o?t:n.allowed:t:r?0===o?n.color:n.allowed:n.color};`}))),(({currentMode:e,currentBackgroundHover:t})=>g.map((r=>{if(e===r.mode)return`${t&&t?t:r.backgroundColor};`}))),(({validDay:e,sundays:t,currentMode:r,currentBackground:o,currentColorNumbers:n,currentColorNumberSelected:a,currentNumberBackgroundSelected:l,currentNumbersOutOfMonthColor:u,currentDay:i,areDaysOutOfMonthAllowed:s,areCurrentSundaysAllowed:c,daySelected:p})=>0!==e?g.map((e=>{if(r===e.mode)return`background: transparent !important;\n        color: ${s?u&&u?c?u:0===t?"#ddd":u:c?e.alowed:0===t?"#ddd":e.alowed:"#ddd"};\n        pointer-events: ${s?c?"inherit":0===t&&"none":"none"};\n        `})):i===d?g.map((e=>{if(r===e.mode)return`border: solid 1px ${n&&n?i===p?"transparent":n:i===p?"transparent":e.color}; color:${n&&n?i===p?a&&a?a:"white":n:i===p?a&&a?a:"white":e.color}; background: ${i===p?l&&l?l:e.color:"inherit"};`})):i===p?g.map((e=>{if(r===e.mode)return`background: ${l&&l?l:e.color}; color:${a&&a?a:"white"}`})):c?g.map((e=>{if(r===e.mode)return`color:${n&&n?n:e.color}`})):g.map((e=>{if(r===e.mode)return`color:${n&&n?0===t?"#ddd":n:0===t?"#ddd":e.color};background:${0===t?"transparent !important":"inherit"};pointer-events:${0===t?"none":"inherit"}`})))),v=l.default.div.withConfig({displayName:"styled__StyledCalendarHeader",componentId:"sc-12gez38-3"})([""," height:30px;width:100%;border-bottom:",";"],y,(({currentMode:e,currentColor:t})=>g.map((r=>{if(e===r.mode)return`solid 1px ${t&&t?t:r.color}`})))),C=l.default.div.withConfig({displayName:"styled__StyledCalendarName",componentId:"sc-12gez38-4"})([""," justify-content:center;width:14.285%;height:30px;line-height:30px;font-weight:700;color:#666;font-size:9px;"],y),M=l.default.div.withConfig({displayName:"styled__StyledHeaderBody",componentId:"sc-12gez38-5"})([""," height:100%;width:100%;margin-top:3px;"],y),k=l.default.div.withConfig({displayName:"styled__StyledCalendarDisplay",componentId:"sc-12gez38-6"})(["width:200px;min-height:220px;background:#fff;box-shadow:10px 10px 40px rgba(0,0,0,0.2);border-radius:10px;padding:15px 15px;"]),x=l.default.div.withConfig({displayName:"styled__StyledYMContent",componentId:"sc-12gez38-7"})(["display:flex;font-weight:bold;font-size:0.65rem;justify-content:space-between;align-items:center;width:100%;"]),D=l.default.button.withConfig({displayName:"styled__StyledYMButtonContainer",componentId:"sc-12gez38-8"})(["background:",";font-size:",";border:none;display:flex;justify-content:center;align-items:center;float:left;box-sizing:border-box;cursor:pointer;margin:0;padding:0;"],(({isThisYear:e,currentMode:t,currentBackground:r})=>e?g.map((e=>{if(t===e.mode)return r&&r?r:e.backgroundColor})):"transparent"),(({isThisYear:e})=>"0.7rem")),S=l.default.span.withConfig({displayName:"styled__StyledArrow",componentId:"sc-12gez38-9"})(["display:block;padding:4px 4px 2px;"]),E=l.default.span.withConfig({displayName:"styled__StyledYMDisplay",componentId:"sc-12gez38-10"})(["width:100%;font-size:",";position:relative;bottom:",";color:",";margin:",";display:flex;justify-content:center;"],(({isThisYear:e})=>!0===e&&"0.9rem"),(({isThisYear:e})=>e&&"2px"),(({currentMode:e,currentColor:t})=>g.map((r=>{if(e===r.mode)return t&&t?t:r.color}))),(({isThisYear:e})=>e?"0 3px 0 0":"0")),N=l.default.span.withConfig({displayName:"styled__StyledYDisplay",componentId:"sc-12gez38-11"})(["display:",";cursor:pointer;position:relative;left:2px;top:5px;"],(({isClosed:e})=>e?"none":"block")),O=l.default.div.withConfig({displayName:"styled__StyledCalendarBody",componentId:"sc-12gez38-12"})(["float:left;width:100%;"]),z=l.default.input.withConfig({displayName:"styled__StyledYInput",componentId:"sc-12gez38-13"})(["width:100%;font-size:0.8rem;border:none;font-weight:bold;transition:300ms;color:",";&:focus{outline:none;box-shadow:0px 0px 2px rgba(24,20,58,0.9);}"],(({currentMode:e,currentColor:t})=>g.map((r=>{if(e===r.mode)return`${t&&t?t:r.color}`})))),I=l.default.label.withConfig({displayName:"styled__StyledYLabel",componentId:"sc-12gez38-14"})(["display:",";"],(({isClosed:e})=>e?"block":"none")),_=({size:e=16,color:t,currentMode:r})=>{const o=g.map((e=>r===e.mode&&e.color)).filter((e=>!1!==e))[0];return n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t&&t?t:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.default.createElement("path",{d:"M15 18l-6-6 6-6"}))},A=({size:e=16,color:t,currentMode:r})=>{const o=g.map((e=>r===e.mode&&e.color)).filter((e=>!1!==e))[0];return n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t&&t?t:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.default.createElement("path",{d:"M9 18l6-6-6-6"}))},B=({size:e=16,color:t,currentMode:r})=>{const o=g.map((e=>r===e.mode&&e.color)).filter((e=>!1!==e))[0];return n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t&&t?t:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.default.createElement("path",{d:"M11 17l-5-5 5-5M18 17l-5-5 5-5"}))},T=({size:e=16,color:t,currentMode:r})=>{const o=g.map((e=>r===e.mode&&e.color)).filter((e=>!1!==e))[0];return n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t&&t?t:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.default.createElement("path",{d:"M13 17l5-5-5-5M6 17l5-5-5-5"}))},Y=({onChangeInputValue:t,myInputRef:r,mode:o,language:a,valueCustom:l,arrowsBackgroundColor:u,numberBackgroundColorHover:c,numberBackgroundSelected:p,color:g,colorNumbers:y,colorNumbersOnHover:Y,colorNumberSelected:J,numbersOutOfMonthColor:P,areDaysOutOfMonthAllowed:$,areSundaysAllowed:H})=>{let L=new Date;e.useState(!1);const[j,F]=e.useState(L.getFullYear()),[R,U]=e.useState(L.getMonth()),[K,W]=e.useState(m(j,R)),[V,q]=e.useState({timestamp:d,dayStatus:0,currentMonth:null}),[Q,G]=e.useState(!1);e.useState();const[X,Z]=e.useState(),ee=e.useRef(null);e.useEffect((()=>{W(m(j,R))}),[j,R]),e.useEffect((()=>{let e=((e,t,r)=>{let o=new Date(e.timestamp),n=o.getMonth()+1,a=o.getDate();if(-1===e.dayStatus){let t=e.currentMonth,r=e.currentDate;n!==t?(n-=2,a!==r&&(a=r)):1===n?n=12:n-=1}1===e.dayStatus&&(n!==e.currentMonth?n+=2:12===n?n=1:n+=1);return((e,t,r,o,n)=>{switch(o){case"1":return(t<10?"0"+t:t)+"/"+(e<10?"0"+e:e)+"/"+r;case"2":return r+"/"+(e<10?"0"+e:e)+"/"+(t<10?"0"+t:t);default:return}})(n,a,o.getFullYear(),t)})(V,l);if(null===r||""===r)console.log("Error! The calendar is not linked to any input");else if(null===r.current)console.log("Error! The calendar is linked to an input but they are not a valid input");else if(void 0!==r.current.value||null!==r.current.value||""!==r.current.value){r.current.value=e;const{currentDate:t,currentMonth:o,currentYear:n}=null!==f(e)&&f(e),a=new Date(n,o-1,t).getTime();Z(a),1===V.dayStatus?(U(R+1),11===R&&(U(0),F(j+1))):-1===V.dayStatus&&(U(R-1),0===R&&(U(11),F(j-1)))}else console.log("there is no value yet")}),[V]),e.useEffect((()=>{Q&&ee.current.focus()}),[Q]),e.useEffect((()=>{if(null!==t){const{currentDate:e,currentMonth:r,currentYear:o}=null!==f(t)&&f(t);let n=void 0!==r&&r-1;-1===n&&(n=11),U(parseInt(n,10)),F(parseInt(o,10));let a=new Date(o,r-1,e).getTime();Z(a),q({timestamp:a,dayStatus:0,currentMonth:r-1,currentDate:e})}}),[t]);const te=e=>{null===r?console.log("there is no input linked with the calendar component"):(r.current.focus(),q({timestamp:e.timestamp,dayStatus:e.dayStatus,currentMonth:e.currentMonth,currentDate:e.date}))};return n.default.createElement("div",null,n.default.createElement(k,null,n.default.createElement("div",null,n.default.createElement(x,null,n.default.createElement(D,{isThisYear:!0,currentMode:o,currentBackground:u,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),F(j-1))}},n.default.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),F(j-1)}},n.default.createElement(S,null,n.default.createElement(B,{color:g,currentMode:o})))),n.default.createElement(D,{isThisYear:!1,currentMode:o,currentBackground:u,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),U(R-1),0===R&&U(11))}},n.default.createElement("div",{className:"mdpchb-inner",onClick:e=>{e.preventDefault(),e.stopPropagation(),U(R-1),0===R&&U(11)}},n.default.createElement(S,null,n.default.createElement(_,{color:g,currentMode:o})))),n.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"14%"}},n.default.createElement(E,{isThisYear:!0,currentMode:o,currentColor:g},n.default.createElement(N,{onClick:e=>(e=>{e.stopPropagation(),!Q&&G(!0)})(e),onKeyDown:e=>{13===e.keyCode&&(e.stopPropagation(),e.preventDefault(),!Q&&G(!0))},isClosed:Q,tabIndex:0},j),n.default.createElement(I,{style:{width:"100%"},isClosed:Q,onKeyDown:e=>{if(13===e.keyCode&&document.activeElement===ee.current){e.stopPropagation(),e.preventDefault();let t=ee.current.value;""===t||void 0===t||F(parseInt(t,10)),G(!1)}}},n.default.createElement(z,{ref:ee,type:"text",name:"year",minLength:4,maxLength:4,currentMode:o,currentColor:g,onBlur:()=>G(!1)}))),n.default.createElement(E,{isThisYear:!1,currentMode:o,currentColor:g},((e,t)=>{for(let r=0;r<i.length;r++)if(i[r].lang===t){let t=i[r].days;for(let r=0;r<t.length;r++)if(e===t.indexOf(t[r]))return t[r]}})(R,a))),n.default.createElement(D,{isThisYear:!1,currentMode:o,currentBackground:u,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),U(R+1),11===R&&U(0))}},n.default.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),U(R+1),11===R&&U(0)}},n.default.createElement(S,null,n.default.createElement(A,{color:g,currentMode:o})))),n.default.createElement(D,{isThisYear:!0,currentMode:o,currentBackground:u,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),F(j+1))}},n.default.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),F(j+1)}},n.default.createElement(S,null,n.default.createElement(T,{color:g,currentMode:o})))))),n.default.createElement(O,null,(()=>{let e=K.map(((e,t)=>n.default.createElement(h,{key:t},n.default.createElement(b,null,n.default.createElement(w,{validDay:e.dayStatus,currentDay:e.timestamp,sundays:e.day,currentMode:o,currentBackground:u,currentColorNumbers:y,currentColorHover:Y,currentColorNumberSelected:J,currentNumbersOutOfMonthColor:P,currentBackgroundHover:c,currentNumberBackgroundSelected:p,areDaysOutOfMonthAllowed:$,areCurrentSundaysAllowed:H,daySelected:X,tabIndex:0,onClick:t=>{t.stopPropagation(),t.preventDefault(),te(e)},onKeyDown:t=>{13===t.keyCode&&(t.stopPropagation(),t.preventDefault(),te(e))}},e.date)))));return n.default.createElement(h,null,n.default.createElement(v,{currentMode:o,currentColor:g},s.map((e=>e.lang===a&&e.days.map(((e,t)=>n.default.createElement(C,{key:t},e)))))),n.default.createElement(M,null,e))})())))};Y.propTypes={onChangeInputValue:a.default.string,myInputRef:a.default.object,mode:a.default.string,language:a.default.string,valueCustom:a.default.string,arrowsBackgroundColor:a.default.string,numberBackgroundColorHover:a.default.string,numberBackgroundSelected:a.default.string,numbersOutOfMonthColor:a.default.string,color:a.default.string,colorNumbers:a.default.string,colorNumbersOnHover:a.default.string,colorNumberSelected:a.default.string,areDaysOutOfMonthAllowed:a.default.bool,areSundaysAllowed:a.default.bool},Y.defaultProps={onChangeInputValue:null,myInputRef:null,mode:"neutral",language:"en",valueCustom:"1",color:null,colorNumbers:null,colorNumberSelected:null,colorNumbersOnHover:null,numbersOutOfMonthColor:null,numberBackgroundColorHover:null,numberBackgroundSelected:null,arrowsBackgroundColor:null,areDaysOutOfMonthAllowed:!1,areSundaysAllowed:!0},exports.Calendar=Y;
