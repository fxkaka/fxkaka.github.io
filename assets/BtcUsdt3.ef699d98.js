import{f as m,g as _,Q as u}from"./QInput.154f2928.js";import{Q as p,i as n}from"./QBtn.f8108e1a.js";import{C as f,S as h,Q as b}from"./tradingview-vue.2532ce87.js";import{_ as v,Q as C,Y as r,R as x,a3 as y,X as e,V as t,U as s,a4 as w,a5 as q,W as d}from"./index.5f0de897.js";import"./render.2df302fd.js";const Q=C({name:"BtcUsdt3",components:{Chart:f,CryptoMarket:h},setup(){return{bat_value:null}}}),g={class:"q-mt-md"},k={class:"flex justify-center row"},B={class:"q-mx-md"},V=e("div",{class:"text-h6"},"\uB0A8\uC740\uC2DC\uAC04 \uC2E4\uC2DC\uAC04",-1),S=e("div",{class:"text-subtitle2"},"\uD68C\uCC28 \uC548\uB0B4 \uC5EC\uAE30",-1),N=e("div",{class:"q-mx-md q-my-md"},[e("span",null,"\uC548\uB155\uD558\uC138\uC694")],-1),U=e("div",{class:"q-mx-md q-my-md"},[e("span",null,"\uC548\uB155\uD558\uC138\uC694")],-1),$=e("div",{class:"q-mx-md q-my-md"},[e("span",null,"\uC548\uB155\uD558\uC138\uC694")],-1);function M(a,o,A,I,T,E){const c=r("Chart"),i=r("CryptoMarket");return x(),y("div",g,[e("div",k,[t(c,{class:"q-mx-md",options:{symbol:"BINANCE:BTCUSDT",interval:"3",timezone:"Asia/Seoul",theme:"light",style:"1",locale:"kr",toolbar_bg:"#f1f3f6",enable_publishing:!1,allow_symbol_change:!0}}),e("div",B,[t(m,{class:"my-card"},{default:s(()=>[t(_,{class:"bg-brown text-white"},{default:s(()=>[V,S]),_:1}),N,U,$,t(u,{class:"q-mx-md",color:"brown",filled:"",modelValue:a.bat_value,"onUpdate:modelValue":o[1]||(o[1]=l=>a.bat_value=l),label:"\uBC30\uD305"},w({_:2},[a.bat_value?{name:"append",fn:s(()=>[t(p,{name:"cancel",onClick:o[0]||(o[0]=q(l=>a.bat_value=null,["stop","prevent"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue"]),t(b,{class:"flex flex-center"},{default:s(()=>[t(n,{stretch:"",class:"bg-red text-white",style:{width:"47%"}},{default:s(()=>[d("\uB9E4\uC218 \uAC00\uC988\uC544")]),_:1}),t(n,{stretch:"",class:"bg-blue text-white",style:{width:"47%"}},{default:s(()=>[d("\uB9E4\uB3C4 \uAC00\uC988\uC544")]),_:1})]),_:1})]),_:1})])]),t(i)])}var X=v(Q,[["render",M]]);export{X as default};
