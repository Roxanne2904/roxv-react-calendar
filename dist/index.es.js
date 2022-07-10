import e,{useState as t,useRef as r,useEffect as o}from"react";import a from"prop-types";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("@keyframes display{0%{opacity:0}to{opacity:1}}.open{display:block}.close{display:none}.error{animation-duration:.7s;animation-fill-mode:both;animation-name:display;background-color:#fff;border-radius:10px;box-shadow:10px 10px 40px rgba(0,0,0,.2);color:red;font-size:.65rem;margin:5px;padding:8px 15px}.x-button{background:transparent;border:none;cursor:pointer;font-size:.65rem;left:15px;margin-left:10px;position:relative}.day,.dayW,.daysW,.days_container{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:flex;flex-wrap:wrap;position:relative}.daysW{height:30px;width:100%}.daysW--red{border-bottom:1px solid #9b2b2b}.daysW--green{border-bottom:1px solid #164e22}.daysW--purple{border-bottom:1px solid #441c64}.daysW--yellow{border-bottom:1px solid #865413}.daysW--blue{border-bottom:1px solid #2b489b}.daysW--neutral{border-bottom:1px solid #000}.dayW{color:#666;font-size:9px;font-weight:700;height:30px;justify-content:center;line-height:30px;width:14.285%}.days_container{height:100%;margin-top:3px;width:100%}.day{align-items:center;display:flex;font-size:.7rem;font-weight:400;justify-content:center;min-width:26px;padding:3px 4px;transition:.3s ease-in-out}.day,.day:hover{border:1px solid transparent}.day:hover{box-shadow:2px 4px 4px rgba(24,20,58,.5);cursor:pointer;z-index:1}.day_in--red{color:#9b2b2b}.day_in--green{color:#164e22}.day_in--purple{color:#441c64}.day_in--yellow{color:#865413}.day_in--blue{color:#2b489b}.day_in--neutral{color:#000}.currentDay--red:hover,.day_in--red:hover{background-color:#dab1b170;color:#9b2b2b}.currentDay--green:hover,.day_in--green:hover{background-color:#b1dab770;color:#164e22}.currentDay--purple:hover,.day_in--purple:hover{background-color:#d5b1da70;color:#441c64}.currentDay--yellow:hover,.day_in--yellow:hover{background-color:#eee1a570;color:#865413}.currentDay--blue:hover,.day_in--blue:hover{background-color:#b1bbda70;color:#2b489b}.currentDay--neutral:hover,.day_in--neutral:hover{background-color:#c9c9c970;color:#000}.day_out{background:transparent!important;color:#ddd;pointer-events:none}.day_out--red{color:#9b2b2b60}.day_out--green{color:#164e2260}.day_out--purple{color:#441c6460}.day_out--yellow{color:#86541360}.day_out--blue{color:#2b489b60}.day_out--neutral{color:#00000060}.currentDay--red{border:1px solid #9b2b2b;color:#9b2b2b}.currentDay--green{border:1px solid #164e22;color:#164e22}.currentDay--purple{border:1px solid #441c64;color:#441c64}.currentDay--yellow{border:1px solid #865413;color:#865413}.currentDay--blue{border:1px solid #2b489b;color:#2b489b}.currentDay--neutral{border:1px solid #000;color:#000}.day_selected--red{background-color:#9b2b2b;color:#fff}.day_selected--green{background-color:#164e22;color:#fff}.day_selected--purple{background-color:#441c64;color:#fff}.day_selected--yellow{background-color:#865413;color:#fff}.day_selected--blue{background-color:#2b489b;color:#fff}.day_selected--neutral{background-color:#000;color:#fff}.sund_highli--blue,.sund_highli--neutral,.sund_highli--purple,.sund_highli--red,.sund_highli--yellow{background-color:rgba(88,209,138,.151);color:#162b16}.sund_highli--green{background-color:rgba(209,147,88,.151);color:#4b2d06}.calendar{background:#fff;border-radius:10px;box-shadow:10px 10px 40px rgba(0,0,0,.2);min-height:220px;padding:15px;width:200px}.calendar_body{float:left;width:100%}.calendar_YM_container{align-items:center;display:flex;font-size:.65rem;font-weight:700;justify-content:space-between;width:100%}.buttons_container{align-items:center;background:transparent;border:none;box-sizing:border-box;cursor:pointer;display:flex;float:left;justify-content:center;margin:0;padding:0}.buttons_container--red_year{background-color:#dab1b170}.buttons_container--green_year{background-color:#b1dab770}.buttons_container--purple_year{background-color:#d5b1da70}.buttons_container--yellow_year{background-color:#eee1a570}.buttons_container--blue_year{background-color:#b1bbda70}.buttons_container--neutral_year{background-color:#c9c9c970}.arrows_container{display:block;padding:4px 4px 2px}.arrows--red{stroke:#9b2b2b}.arrows--green{stroke:#164e22}.arrows--purple{stroke:#441c64}.arrows--yellow{stroke:#865413}.arrows--blue{stroke:#2b489b}.arrows--neutral{stroke:#000}.year-month_container{display:flex;justify-content:center;position:relative;width:100%}.year_container{bottom:2.3px;font-size:.9rem;margin:0 3px 0 0}.year-display{cursor:pointer;left:2px;position:relative;top:5px}.year-month_container--red{color:#9b2b2b}.year-month_container--green{color:#164e22}.year-month_container--purple{color:#441c64}.year-month_container--yellow{color:#865413}.year-month_container--blue{color:#2b489b}.year-month_container--neutral{color:#000}.year-input{border:none;font-size:.8rem;font-weight:700;transition:.3s;width:100%}.year-input:focus{box-shadow:0 0 2px rgba(24,20,58,.9);outline:none}.year-input--red:focus{color:#9b2b2b}.year-input--green:focus{color:#164e22}.year-input--purple:focus{color:#441c64}.year-input--yellow:focus{color:#865413}.year-input--blue:focus{color:#2b489b}.year-input--neutral:focus{color:#000}");const n=({size:t=16,myClassName:r})=>e.createElement("svg",{className:`${r}`,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M15 18l-6-6 6-6"})),l=({size:t=16,myClassName:r})=>e.createElement("svg",{className:`${r}`,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M9 18l6-6-6-6"})),s=({size:t=16,myClassName:r})=>e.createElement("svg",{className:`${r}`,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M11 17l-5-5 5-5M18 17l-5-5 5-5"})),i=({size:t=16,myClassName:r})=>e.createElement("svg",{className:`${r}`,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M13 17l5-5-5-5M6 17l5-5-5-5"}));let c=Date.now()-Date.now()%864e5+1e3*(new Date).getTimezoneOffset()*60;const d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=[{lang:"en",days:["January","February","March","April","May","June","July","August","September","October","November","December"]},{lang:"fr",days:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septempbre","Octobre","Novembre","Decembre"]},{lang:"spa",days:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},{lang:"por",days:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},{lang:"ger",days:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]}],p=[{lang:"en",days:["SUN","MON","TUE","WED","THU","FRI","SAT"]},{lang:"fr",days:["DIM","LUN","MAR","MER","JEU","VEN","SAM"]},{lang:"spa",days:["DOM","LUN","MAR","MIE","JUE","VIE","SAB"]},{lang:"por",days:["DOM","SEG","TER","QUA","QUI","SEXT","SAB"]},{lang:"ger",days:["SON","MON","DIEN","MITT","DON","FRE","SAM"]}],y=(e,t)=>1===t?e%4==0?29:28:[3,5,8,10].includes(t)?30:31,m=e=>{let t=e.index-e.firstDayMonth,r=e.index%7,o=e.month-1,a=e.year;o<0&&(o=11,a--);let n=y(a,o),l=(t<0?n+t:t%e.numberOfDays)+1;return{date:l,day:r,dayStatus:t<0?-1:t>=e.numberOfDays?1:0,currentMonth:new Date(e.year,e.month).getMonth()+1,timestamp:new Date(e.year,e.month,l).getTime(),dayString:d[r]}},b=(e,t)=>{let r=new Date(e,t).getDay(),o=y(e,t),a=[],n=null,l=0;for(let s=0;s<7;s++)for(let s=0;s<6;s++)n=m({index:l,numberOfDays:o,firstDayMonth:r,year:e,month:t}),a.push(n),l++;return a},g=e=>{if(null!=e&&""!==e){let t=2===e.split("/")[0].length?e.split("/")[0]:e.split("/")[2];t="0"===t.split("")[0]?t.split("")[1]:t;let r=e.split("/")[1];return r="0"===r.split("")[0]?r.split("")[1]:r,{currentDate:t,currentMonth:r,currentYear:4===e.split("/")[0].length?e.split("/")[0]:e.split("/")[2]}}return null},h=({onChangeInputValue:a,myInputRef:d,mode:y,language:m,valueCustom:h,areDaysOutOfMonthAllowed:f,areSundaysAllowed:_,areSundaysHighlighted:w})=>{let x=new Date;t(!1);const[v,D]=t(x.getFullYear()),[k,E]=t(x.getMonth()),[N,M]=t(b(v,k)),[$,S]=t({timestamp:c,dayStatus:0,currentMonth:null}),[C,A]=t(!1),[z,O]=t(!0);t();const[I,W]=t(),T=r(null);o((()=>{M(b(v,k))}),[v,k]),o((()=>{let e=((e,t,r)=>{let o=new Date(e.timestamp),a=o.getMonth()+1,n=o.getDate();if(-1===e.dayStatus){let t=e.currentMonth,r=e.currentDate;a!==t?(a-=2,n!==r&&(n=r)):1===a?a=12:a-=1}1===e.dayStatus&&(a!==e.currentMonth?a+=2:12===a?a=1:a+=1);return((e,t,r,o,a)=>{switch(o){case"1":return(t<10?"0"+t:t)+"/"+(e<10?"0"+e:e)+"/"+r;case"2":return r+"/"+(e<10?"0"+e:e)+"/"+(t<10?"0"+t:t);default:return}})(a,n,o.getFullYear(),t)})($,h);if(null!==d&&""!==d)if(null!==d.current)if(void 0!==d.current.value||null!==d.current.value||""!==d.current.value){d.current.value=e;const{currentDate:t,currentMonth:r,currentYear:o}=null!==g(e)&&g(e),a=new Date(o,r-1,t).getTime();W(a),1===$.dayStatus?(E(k+1),11===k&&(E(0),D(v+1))):-1===$.dayStatus&&(E(k-1),0===k&&(E(11),D(v-1)))}else console.log("there is no value yet");else console.log("Error! The calendar is linked to an input but they are not a valid input");else console.log("Error! The calendar is not linked to any input")}),[$]),o((()=>{C&&T.current.focus()}),[C]),o((()=>{if(null!==a){const{currentDate:e,currentMonth:t,currentYear:r}=null!==g(a)&&g(a);let o=void 0!==t&&t-1;-1===o&&(o=11),E(parseInt(o,10)),D(parseInt(r,10));let n=new Date(r,t-1,e).getTime();W(n),S({timestamp:n,dayStatus:0,currentMonth:t-1,currentDate:e})}}),[a]);const J=e=>{null!==d?(d.current.focus(),S({timestamp:e.timestamp,dayStatus:e.dayStatus,currentMonth:e.currentMonth,currentDate:e.date})):console.log("there is no input linked with the calendar component")};return e.createElement("div",null,e.createElement("div",{className:"calendar"},e.createElement("div",null,e.createElement("div",{className:"calendar_YM_container"},e.createElement("button",{className:`buttons_container buttons_container--${y}_year buttons_container--${y}_year--custom`,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),D(v-1))}},e.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),D(v-1)}},e.createElement("span",{className:"arrows_container"},e.createElement(s,{myClassName:`arrows--${y} arrows--${y}--custom`})))),e.createElement("button",{className:"buttons_container",onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),E(k-1),0===k&&E(11))}},e.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),E(k-1),0===k&&E(11)}},e.createElement("span",{className:"arrows_container"},e.createElement(n,{myClassName:`arrows--${y} arrows--${y}--custom`})))),e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"14%"}},e.createElement("span",{className:`year-month_container year_container year-month_container--${y} year-month_container--${y}--custom`},e.createElement("span",{className:""+(C?"close year-display ":"open year-display"),onClick:e=>(e=>{e.stopPropagation(),!C&&A(!0)})(e),onKeyDown:e=>{13===e.keyCode&&(e.stopPropagation(),e.preventDefault(),!C&&A(!0))},tabIndex:0},v),e.createElement("label",{className:""+(C?"open":"close"),style:{width:"100%"},onKeyDown:e=>{if(13===e.keyCode&&document.activeElement===T.current){e.stopPropagation(),e.preventDefault();let t=T.current.value;""===t||void 0===t||t.length<4?(D(parseInt(v)),O(!1)):(D(parseInt(t,10)),O(!0)),A(!1)}}},e.createElement("input",{className:`year-input year-input--${y} year-input--${y}--custom`,ref:T,type:"text",name:"year",minLength:4,maxLength:4,required:!0,onBlur:()=>A(!1)}))),e.createElement("span",{className:`year-month_container year-month_container--${y} year-month_container--${y}--custom`},((e,t)=>{for(let r=0;r<u.length;r++)if(u[r].lang===t){let t=u[r].days;for(let r=0;r<t.length;r++)if(e===t.indexOf(t[r]))return t[r]}})(k,m))),e.createElement("button",{className:"buttons_container",onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),E(k+1),11===k&&E(0))}},e.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),E(k+1),11===k&&E(0)}},e.createElement("span",{className:"arrows_container"},e.createElement(l,{myClassName:`arrows--${y} arrows--${y}--custom`})))),e.createElement("button",{className:`buttons_container buttons_container--${y}_year buttons_container--${y}_year--custom`,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),D(v+1))}},e.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),D(v+1)}},e.createElement("span",{className:"arrows_container"},e.createElement(i,{myClassName:`arrows--${y} arrows--${y}--custom`})))))),e.createElement("div",{className:"calendar_body"},(()=>{let t=N.map(((t,r)=>e.createElement("div",{key:r,style:{height:"25px"}},e.createElement("div",{style:{margin:"1.2px"}},e.createElement("span",{className:"day "+(0!==t.dayStatus?(f?0===t.day?_?w?`sund_highli--${y} sund_highli--${y}--custom`:`day_out--${y} day_out--${y}--custom`:"day_out":`day_out--${y} day_out--${y}--custom`:"day_out")+" ":0===t.day?_?t.timestamp===c?t.timestamp===I?`day_selected--${y} day_selected--${y}--custom`:`currentDay--${y} currentDay--${y}--custom`:t.timestamp===I?`day_selected--${y} day_selected--${y}--custom`:w?`sund_highli--${y} sund_highli--${y}--custom`:`day_in--${y} day_in--${y}--custom`:"day_out":t.timestamp===c?t.timestamp===I?`day_selected--${y} day_selected--${y}--custom`:`currentDay--${y} currentDay--${y}--custom`:t.timestamp===I?`day_selected--${y} day_selected--${y}--custom`:`day_in--${y} day_in--${y}--custom`),tabIndex:0,onClick:e=>{e.stopPropagation(),e.preventDefault(),J(t)},onKeyDown:e=>{13===e.keyCode&&(e.stopPropagation(),e.preventDefault(),J(t))}},t.date)))));return e.createElement("div",{style:{height:"23px"}},e.createElement("div",{className:`daysW daysW--${y}`},p.map((t=>t.lang===m&&t.days.map(((t,r)=>e.createElement("div",{className:"dayW",key:r},t)))))),e.createElement("div",{className:"days_container"},t))})())),e.createElement("div",{className:""+(z?"close":"open error")},"⚠️ You must enter at least 4 digits!"," ",e.createElement("button",{onClick:()=>O(!0),className:"x-button"},"❌")))};h.propTypes={onChangeInputValue:a.string,myInputRef:a.object,mode:a.string,language:a.string,valueCustom:a.string,areDaysOutOfMonthAllowed:a.bool,areSundaysAllowed:a.bool,areSundaysHighlighted:a.bool},h.defaultProps={onChangeInputValue:null,myInputRef:null,mode:"neutral",language:"en",valueCustom:"1",areDaysOutOfMonthAllowed:!1,areSundaysAllowed:!0,areSundaysHighlighted:!1};export{h as DatePicker};
