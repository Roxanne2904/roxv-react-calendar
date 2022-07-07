import e,{useState as t,useRef as r,useEffect as o}from"react";import n from"prop-types";import l from"styled-components";let a=Date.now()-Date.now()%864e5+1e3*(new Date).getTimezoneOffset()*60;const d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=[{lang:"en",days:["January","February","March","April","May","June","July","August","September","October","November","December"]},{lang:"fr",days:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septempbre","Octobre","Novembre","Decembre"]},{lang:"spa",days:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},{lang:"por",days:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},{lang:"ger",days:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]}],u=[{lang:"en",days:["SUN","MON","TUE","WED","THU","FRI","SAT"]},{lang:"fr",days:["DIM","LUN","MAR","MER","JEU","VEN","SAM"]},{lang:"spa",days:["DOM","LUN","MAR","MIE","JUE","VIE","SAB"]},{lang:"por",days:["DOM","SEG","TER","QUA","QUI","SEXT","SAB"]},{lang:"ger",days:["SON","MON","DIEN","MITT","DON","FRE","SAM"]}],s=(e,t)=>1===t?e%4==0?29:28:[3,5,8,10].includes(t)?30:31,c=e=>{let t=e.index-e.firstDayMonth,r=e.index%7,o=e.month-1,n=e.year;o<0&&(o=11,n--);let l=s(n,o),a=(t<0?l+t:t%e.numberOfDays)+1;return{date:a,day:r,dayStatus:t<0?-1:t>=e.numberOfDays?1:0,currentMonth:new Date(e.year,e.month).getMonth()+1,timestamp:new Date(e.year,e.month,a).getTime(),dayString:d[r]}},p=(e,t)=>{let r=new Date(e,t).getDay(),o=s(e,t),n=[],l=null,a=0;for(let d=0;d<7;d++)for(let d=0;d<6;d++)l=c({index:a,numberOfDays:o,firstDayMonth:r,year:e,month:t}),n.push(l),a++;return n},m=e=>{if(null!=e&&""!==e){let t=2===e.split("/")[0].length?e.split("/")[0]:e.split("/")[2];t="0"===t.split("")[0]?t.split("")[1]:t;let r=e.split("/")[1];return r="0"===r.split("")[0]?r.split("")[1]:r,{currentDate:t,currentMonth:r,currentYear:4===e.split("/")[0].length?e.split("/")[0]:e.split("/")[2]}}return null},g=[{mode:"blue",backgroundColor:"#b1bbda70",color:"#2b489b",alowed:"#2b489b60"},{mode:"green",backgroundColor:"#b1dab770",color:"#164e22",alowed:"#164e2260"},{mode:"purple",backgroundColor:"#d5b1da70",color:"#441c64",alowed:"#441c6460"},{mode:"red",backgroundColor:"#dab1b170",color:"#9b2b2b",alowed:"#9b2b2b60"},{mode:"yellow",backgroundColor:"#eee1a570",color:"#865413",alowed:"#86541360"},{mode:"neutral",backgroundColor:"#c9c9c970",color:"#000000",alowed:"#00000060"}],y="\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n",h=l.div.withConfig({displayName:"styled__StyledCalendarContainer",componentId:"sc-12gez38-0"})(["height:23px;"]),b=l.div.withConfig({displayName:"styled__StyledCalendarDaysContainer",componentId:"sc-12gez38-1"})(["margin:1.2px;"]),f=l.span.withConfig({displayName:"styled__StyledCalendarDays",componentId:"sc-12gez38-2"})([""," display:flex;justify-content:center;align-items:center;min-width:26px;padding:3px 4px;font-weight:400;border:solid 1px transparent;font-size:0.7rem;transition:300ms ease-in-out;&:hover{border:solid 1px transparent;box-shadow:2px 4px 4px rgba(24,20,58,0.5);z-index:1;cursor:pointer;color:",";background:",";}",""],y,(({currentMode:e,currentColorHover:t,areDaysOutOfMonthAllowed:r,validDay:o})=>g.map((n=>{if(e===n.mode)return`${t&&t?r?0===o?t:n.allowed:t:r?0===o?n.color:n.allowed:n.color};`}))),(({currentMode:e,currentBackgroundHover:t})=>g.map((r=>{if(e===r.mode)return`${t&&t?t:r.backgroundColor};`}))),(({validDay:e,sundays:t,currentMode:r,currentBackground:o,currentColorNumbers:n,currentColorNumberSelected:l,currentNumberBackgroundSelected:d,currentNumbersOutOfMonthColor:i,currentDay:u,areDaysOutOfMonthAllowed:s,areCurrentSundaysAllowed:c,daySelected:p})=>0!==e?g.map((e=>{if(r===e.mode)return`background: transparent !important;\n        color: ${s?i&&i?c?i:0===t?"#ddd":i:c?e.alowed:0===t?"#ddd":e.alowed:"#ddd"};\n        pointer-events: ${s?c?"inherit":0===t&&"none":"none"};\n        `})):u===a?g.map((e=>{if(r===e.mode)return`border: solid 1px ${n&&n?u===p?"transparent":n:u===p?"transparent":e.color}; color:${n&&n?u===p?l&&l?l:"white":n:u===p?l&&l?l:"white":e.color}; background: ${u===p?d&&d?d:e.color:"inherit"};`})):u===p?g.map((e=>{if(r===e.mode)return`background: ${d&&d?d:e.color}; color:${l&&l?l:"white"}`})):c?g.map((e=>{if(r===e.mode)return`color:${n&&n?n:e.color}`})):g.map((e=>{if(r===e.mode)return`color:${n&&n?0===t?"#ddd":n:0===t?"#ddd":e.color};background:${0===t?"transparent !important":"inherit"};pointer-events:${0===t?"none":"inherit"}`})))),w=l.div.withConfig({displayName:"styled__StyledCalendarHeader",componentId:"sc-12gez38-3"})([""," height:30px;width:100%;border-bottom:",";"],y,(({currentMode:e,currentColor:t})=>g.map((r=>{if(e===r.mode)return`solid 1px ${t&&t?t:r.color}`})))),C=l.div.withConfig({displayName:"styled__StyledCalendarName",componentId:"sc-12gez38-4"})([""," justify-content:center;width:14.285%;height:30px;line-height:30px;font-weight:700;color:#666;font-size:9px;"],y),M=l.div.withConfig({displayName:"styled__StyledHeaderBody",componentId:"sc-12gez38-5"})([""," height:100%;width:100%;margin-top:3px;"],y),v=l.div.withConfig({displayName:"styled__StyledCalendarDisplay",componentId:"sc-12gez38-6"})(["width:200px;min-height:220px;background:#fff;box-shadow:10px 10px 40px rgba(0,0,0,0.2);border-radius:10px;padding:15px 15px;"]),k=l.div.withConfig({displayName:"styled__StyledYMContent",componentId:"sc-12gez38-7"})(["display:flex;font-weight:bold;font-size:0.65rem;justify-content:space-between;align-items:center;width:100%;"]),x=l.button.withConfig({displayName:"styled__StyledYMButtonContainer",componentId:"sc-12gez38-8"})(["background:",";font-size:",";border:none;display:flex;justify-content:center;align-items:center;float:left;box-sizing:border-box;cursor:pointer;margin:0;padding:0;"],(({isThisYear:e,currentMode:t,currentBackground:r})=>e?g.map((e=>{if(t===e.mode)return r&&r?r:e.backgroundColor})):"transparent"),(({isThisYear:e})=>"0.7rem")),D=l.span.withConfig({displayName:"styled__StyledArrow",componentId:"sc-12gez38-9"})(["display:block;padding:4px 4px 2px;"]),E=l.span.withConfig({displayName:"styled__StyledYMDisplay",componentId:"sc-12gez38-10"})(["width:100%;font-size:",";position:relative;bottom:",";color:",";margin:",";display:flex;justify-content:center;"],(({isThisYear:e})=>!0===e&&"0.9rem"),(({isThisYear:e})=>e&&"2px"),(({currentMode:e,currentColor:t})=>g.map((r=>{if(e===r.mode)return t&&t?t:r.color}))),(({isThisYear:e})=>e?"0 3px 0 0":"0")),S=l.span.withConfig({displayName:"styled__StyledYDisplay",componentId:"sc-12gez38-11"})(["display:",";cursor:pointer;position:relative;left:2px;top:5px;"],(({isClosed:e})=>e?"none":"block")),N=l.div.withConfig({displayName:"styled__StyledCalendarBody",componentId:"sc-12gez38-12"})(["float:left;width:100%;"]),O=l.input.withConfig({displayName:"styled__StyledYInput",componentId:"sc-12gez38-13"})(["width:100%;font-size:0.8rem;border:none;font-weight:bold;transition:300ms;color:",";&:focus{outline:none;box-shadow:0px 0px 2px rgba(24,20,58,0.9);}"],(({currentMode:e,currentColor:t})=>g.map((r=>{if(e===r.mode)return`${t&&t?t:r.color}`})))),z=l.label.withConfig({displayName:"styled__StyledYLabel",componentId:"sc-12gez38-14"})(["display:",";"],(({isClosed:e})=>e?"block":"none")),I=({size:t=16,color:r,currentMode:o})=>{const n=g.map((e=>o===e.mode&&e.color)).filter((e=>!1!==e))[0];return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:r&&r?r:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M15 18l-6-6 6-6"}))},A=({size:t=16,color:r,currentMode:o})=>{const n=g.map((e=>o===e.mode&&e.color)).filter((e=>!1!==e))[0];return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:r&&r?r:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M9 18l6-6-6-6"}))},B=({size:t=16,color:r,currentMode:o})=>{const n=g.map((e=>o===e.mode&&e.color)).filter((e=>!1!==e))[0];return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:r&&r?r:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M11 17l-5-5 5-5M18 17l-5-5 5-5"}))},_=({size:t=16,color:r,currentMode:o})=>{const n=g.map((e=>o===e.mode&&e.color)).filter((e=>!1!==e))[0];return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:r&&r?r:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M13 17l5-5-5-5M6 17l5-5-5-5"}))},T=({onChangeInputValue:n,myInputRef:l,mode:d,language:s,valueCustom:c,arrowsBackgroundColor:g,numberBackgroundColorHover:y,numberBackgroundSelected:T,color:Y,colorNumbers:J,colorNumbersOnHover:$,colorNumberSelected:P,numbersOutOfMonthColor:H,areDaysOutOfMonthAllowed:L,areSundaysAllowed:j})=>{let F=new Date;t(!1);const[R,U]=t(F.getFullYear()),[K,W]=t(F.getMonth()),[V,Q]=t(p(R,K)),[G,X]=t({timestamp:a,dayStatus:0,currentMonth:null}),[q,Z]=t(!1);t();const[ee,te]=t(),re=r(null);o((()=>{Q(p(R,K))}),[R,K]),o((()=>{let e=((e,t,r)=>{let o=new Date(e.timestamp),n=o.getMonth()+1,l=o.getDate();if(-1===e.dayStatus){let t=e.currentMonth,r=e.currentDate;n!==t?(n-=2,l!==r&&(l=r)):1===n?n=12:n-=1}1===e.dayStatus&&(n!==e.currentMonth?n+=2:12===n?n=1:n+=1);return((e,t,r,o,n)=>{switch(o){case"1":return(t<10?"0"+t:t)+"/"+(e<10?"0"+e:e)+"/"+r;case"2":return r+"/"+(e<10?"0"+e:e)+"/"+(t<10?"0"+t:t);default:return}})(n,l,o.getFullYear(),t)})(G,c);if(null===l||""===l)console.log("Error! The calendar is not linked to any input");else if(null===l.current)console.log("Error! The calendar is linked to an input but they are not a valid input");else if(void 0!==l.current.value||null!==l.current.value||""!==l.current.value){l.current.value=e;const{currentDate:t,currentMonth:r,currentYear:o}=null!==m(e)&&m(e),n=new Date(o,r-1,t).getTime();te(n),1===G.dayStatus?(W(K+1),11===K&&(W(0),U(R+1))):-1===G.dayStatus&&(W(K-1),0===K&&(W(11),U(R-1)))}else console.log("there is no value yet")}),[G]),o((()=>{q&&re.current.focus()}),[q]),o((()=>{if(null!==n){const{currentDate:e,currentMonth:t,currentYear:r}=null!==m(n)&&m(n);let o=void 0!==t&&t-1;-1===o&&(o=11),W(parseInt(o,10)),U(parseInt(r,10));let l=new Date(r,t-1,e).getTime();te(l),X({timestamp:l,dayStatus:0,currentMonth:t-1,currentDate:e})}}),[n]);const oe=e=>{null===l?console.log("there is no input linked with the calendar component"):(l.current.focus(),X({timestamp:e.timestamp,dayStatus:e.dayStatus,currentMonth:e.currentMonth,currentDate:e.date}))};return e.createElement("div",null,e.createElement(v,null,e.createElement("div",null,e.createElement(k,null,e.createElement(x,{isThisYear:!0,currentMode:d,currentBackground:g,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),U(R-1))}},e.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),U(R-1)}},e.createElement(D,null,e.createElement(B,{color:Y,currentMode:d})))),e.createElement(x,{isThisYear:!1,currentMode:d,currentBackground:g,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),W(K-1),0===K&&W(11))}},e.createElement("div",{className:"mdpchb-inner",onClick:e=>{e.preventDefault(),e.stopPropagation(),W(K-1),0===K&&W(11)}},e.createElement(D,null,e.createElement(I,{color:Y,currentMode:d})))),e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"14%"}},e.createElement(E,{isThisYear:!0,currentMode:d,currentColor:Y},e.createElement(S,{onClick:e=>(e=>{e.stopPropagation(),!q&&Z(!0)})(e),onKeyDown:e=>{13===e.keyCode&&(e.stopPropagation(),e.preventDefault(),!q&&Z(!0))},isClosed:q,tabIndex:0},R),e.createElement(z,{style:{width:"100%"},isClosed:q,onKeyDown:e=>{if(13===e.keyCode&&document.activeElement===re.current){e.stopPropagation(),e.preventDefault();let t=re.current.value;""===t||void 0===t||U(parseInt(t,10)),Z(!1)}}},e.createElement(O,{ref:re,type:"text",name:"year",minLength:4,maxLength:4,currentMode:d,currentColor:Y,onBlur:()=>Z(!1)}))),e.createElement(E,{isThisYear:!1,currentMode:d,currentColor:Y},((e,t)=>{for(let r=0;r<i.length;r++)if(i[r].lang===t){let t=i[r].days;for(let r=0;r<t.length;r++)if(e===t.indexOf(t[r]))return t[r]}})(K,s))),e.createElement(x,{isThisYear:!1,currentMode:d,currentBackground:g,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),W(K+1),11===K&&W(0))}},e.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),W(K+1),11===K&&W(0)}},e.createElement(D,null,e.createElement(A,{color:Y,currentMode:d})))),e.createElement(x,{isThisYear:!0,currentMode:d,currentBackground:g,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),U(R+1))}},e.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),U(R+1)}},e.createElement(D,null,e.createElement(_,{color:Y,currentMode:d})))))),e.createElement(N,null,(()=>{let t=V.map(((t,r)=>e.createElement(h,{key:r},e.createElement(b,null,e.createElement(f,{validDay:t.dayStatus,currentDay:t.timestamp,sundays:t.day,currentMode:d,currentBackground:g,currentColorNumbers:J,currentColorHover:$,currentColorNumberSelected:P,currentNumbersOutOfMonthColor:H,currentBackgroundHover:y,currentNumberBackgroundSelected:T,areDaysOutOfMonthAllowed:L,areCurrentSundaysAllowed:j,daySelected:ee,tabIndex:0,onClick:e=>{e.stopPropagation(),e.preventDefault(),oe(t)},onKeyDown:e=>{13===e.keyCode&&(e.stopPropagation(),e.preventDefault(),oe(t))}},t.date)))));return e.createElement(h,null,e.createElement(w,{currentMode:d,currentColor:Y},u.map((t=>t.lang===s&&t.days.map(((t,r)=>e.createElement(C,{key:r},t)))))),e.createElement(M,null,t))})())))};T.propTypes={onChangeInputValue:n.string,myInputRef:n.object,mode:n.string,language:n.string,valueCustom:n.string,arrowsBackgroundColor:n.string,numberBackgroundColorHover:n.string,numberBackgroundSelected:n.string,numbersOutOfMonthColor:n.string,color:n.string,colorNumbers:n.string,colorNumbersOnHover:n.string,colorNumberSelected:n.string,areDaysOutOfMonthAllowed:n.bool,areSundaysAllowed:n.bool},T.defaultProps={onChangeInputValue:null,myInputRef:null,mode:"neutral",language:"en",valueCustom:"1",color:null,colorNumbers:null,colorNumberSelected:null,colorNumbersOnHover:null,numbersOutOfMonthColor:null,numberBackgroundColorHover:null,numberBackgroundSelected:null,arrowsBackgroundColor:null,areDaysOutOfMonthAllowed:!1,areSundaysAllowed:!0};export{T as Calendar};
