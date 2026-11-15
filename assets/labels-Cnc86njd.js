var e=[{key:`sender`,label:`寄件人`,hint:`灰字，下方空一行`},{key:`address`,label:`通訊地址`,hint:``},{key:`unit`,label:`學校名稱`,hint:`粗體`},{key:`name`,label:`聯絡人`,hint:`「○○○　收」`},{key:`title`,label:`職稱`,hint:`接在聯絡人姓名後`},{key:`group`,label:`組別`,hint:`小字`},{key:`phone`,label:`電話`,hint:`小字`},{key:`amount`,label:`領取金額`,hint:`0 元不印`},{key:`event`,label:`活動簡稱`,hint:`灰字，靠右`}];e.map(e=>e.key);var t=[`sender`,`address`,`unit`,`name`,`amount`,`event`],n=`bottom`,r=[`sender`,`address`,`unit`,`name`,`group`,`phone`,n,`amount`,`event`];function i(e){let t=new Set(r),n=[];if(Array.isArray(e))for(let r of e)typeof r==`string`&&t.has(r)&&!n.includes(r)&&n.push(r);for(let[e,t]of r.entries()){if(n.includes(t))continue;let i=r.slice(0,e).reverse().find(e=>n.includes(e));n.splice(i?n.indexOf(i)+1:0,0,t)}return n}var a={cols:2,rows:6,width:100,height:45,top:13.5,left:4,gapX:2,gapY:0};[...t],[...r],{...a};var o={cols:{min:1,max:4,label:`欄數`},rows:{min:1,max:12,label:`列數`},width:{min:30,max:210,label:`標籤寬`},height:{min:15,max:297,label:`標籤高`},top:{min:0,max:50,label:`上邊界`},left:{min:0,max:50,label:`左邊界`},gapX:{min:0,max:20,label:`水平間距`},gapY:{min:0,max:20,label:`垂直間距`}},s=e=>`${e.unit.replace(/\s+/g,``)}|${e.name.replace(/\s+/g,``)}`,c=new Intl.Collator(`zh-TW`,{collation:`stroke`});function l(e,t=`unit`,n=!0){let r=n?1:-1;return[...e].sort((e,n)=>r*c.compare(e[t],n[t])||c.compare(e.unit,n.unit)||c.compare(e.name,n.name))}var u={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},d=e=>String(e??``).replace(/[&<>"']/g,e=>u[e]),f=e=>e.cols*e.rows;function p(e){let t={...a};for(let n of Object.keys(o)){let r=Number(e[n]);if(!Number.isFinite(r))continue;let{min:i,max:a}=o[n];t[n]=Math.min(a,Math.max(i,n===`cols`||n===`rows`?Math.round(r):Math.round(r*10)/10))}return t}function m(e,t,n=1){let r=f(t),i=Math.min(r,Math.max(1,Math.floor(n)||1))-1,a=[...Array(i).fill(null),...e],o=[];for(let e=0;e<a.length;e+=r)o.push(a.slice(e,e+r));let s=o[o.length-1];if(s)for(;s.length<r;)s.push(null);return o}function h(e,t){let r=new Set(t.fields),a=n=>{if(n===`bottom`||!r.has(n))return``;switch(n){case`sender`:return d(t.sender.trim());case`event`:return d(t.event.trim());case`address`:return d(e.address.trim());case`unit`:return d(e.unit.trim());case`name`:{if(!e.name.trim())return``;let t=r.has(`title`)&&e.title.trim()?` ${d(e.title.trim())}`:``;return`${d(e.name.trim())}${t}　收`}case`group`:return e.group.trim()?`組別：${d(e.group.trim())}`:``;case`phone`:return e.phone.trim()?`電話：${d(e.phone.trim())}`:``;case`amount`:return e.amount>0?`領取金額 ${e.amount.toLocaleString(`en-US`)} 元`:``}},o={sender:`sender`,address:`addr`,unit:`unit`,name:`to`,group:`extra`,phone:`extra`,amount:`amount`,event:`event`},s=e=>{let t=e.map(e=>({k:e,t:a(e)})).filter(e=>e.t),n=[];for(let e=0;e<t.length;e++){let{k:r,t:i}=t[e],a=t[e+1];if(a&&(r===`amount`&&a.k===`event`||r===`event`&&a.k===`amount`)){n.push(`<div class="pair"><span class="${o[r]}">${i}</span><span class="${o[a.k]}">${a.t}</span></div>`),e++;continue}n.push(`<div class="${o[r]}">${i}</div>`),r===`sender`&&a&&n.push(`<div class="blank"></div>`)}return n.join(``)},c=i(t.order),l=c.indexOf(n),u=s(c.slice(0,l)),f=s(c.slice(l+1));return u+(f?`<div class="foot">${f}</div>`:``)}var g=`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;600;700&display=swap">`;function _(e){return`
@page { size: A4 portrait; margin: 0 }
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0 }
html, body { width: 210mm; background: #fff; color: #000 }
body { font-family: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact }
.sheet { width: 210mm; height: 297mm; padding-top: ${e.top}mm; padding-left: ${e.left}mm; overflow: hidden }
.sheet + .sheet { page-break-before: always; break-before: page }
.label-row { display: flex; margin-bottom: ${e.gapY}mm }
.label-row:last-child { margin-bottom: 0 }
.label {
  width: ${e.width}mm; height: ${e.height}mm; margin-right: ${e.gapX}mm;
  padding: 3mm 4mm 2mm; overflow: hidden; display: flex; flex-direction: column;
  /* 對位測試時開啟裁切線： */
  /* border: 0.3pt dashed #bbb; */
}
.label:last-child { margin-right: 0 }
.sender { font-size: 10pt; color: #666; line-height: 1.35 }
.blank { height: 1.35em; font-size: 10pt }
.addr { font-size: 10pt; line-height: 1.35 }
.unit { font-size: 12pt; font-weight: 700; padding-left: 2em; margin-top: 1mm; line-height: 1.4 }
.to { font-size: 12pt; font-weight: 600; padding-left: 2em; line-height: 1.4 }
.extra { font-size: 9pt; color: #333; padding-left: 2.6em; line-height: 1.35 }
.foot { margin-top: auto; padding-top: 1mm }
.pair { display: flex; align-items: flex-end; gap: 2mm }
.pair > :last-child { margin-left: auto }
.amount { font-size: 9pt; font-weight: 600; line-height: 1.35; padding-left: 24pt } /* 與聯絡人同樣縮排（12pt × 2em） */
.event { font-size: 8pt; color: #666; text-align: right; line-height: 1.35 }
.pair .event, .pair .amount { text-align: inherit }
@media screen { body { background: #e9ecef } .sheet { background: #fff; margin: 0 auto 8mm; box-shadow: 0 0 4mm rgba(0,0,0,.15) } }
@media print { .sheet { margin: 0; box-shadow: none } }`}function v(e,t,n=1,r=`郵寄標籤`){let i=p(t.layout),a=m(e,i,n),o=a.map(e=>{let n=[];for(let r=0;r<e.length;r+=i.cols){let a=e.slice(r,r+i.cols).map(e=>`<div class="label">${e?h(e,t):``}</div>`).join(``);n.push(`<div class="label-row">${a}</div>`)}return`<div class="sheet">${n.join(``)}</div>`}).join(``),s=_(i);return{html:`<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><title>${d(r)}</title>${g}<style>${s}</style>
<script>window.onload=()=>{(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>window.print())}<\/script></head><body>${o}</body></html>`,labels:e.length,pages:a.length}}function y(e,t){let n=p(t.layout),r=e??{unit:`臺中市○○區○○國民小學`,matched:!0,title:`教師`,name:`王小明`,group:`電腦繪圖`,phone:`0912345678`,address:`臺中市○○區○○路 1 號`,amount:3e3};return`<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8">${g}<style>${_(n)}
html, body { width: auto; background: transparent !important } .label { margin: 0 !important; background: #fff; border: 0.3pt dashed #bbb }</style></head><body><div class="label">${h(r,t)}</div></body></html>`}function b(e,t,n){let r=e.map((e,t)=>`<tr class="${e.unchecked?`off`:``}"><td class="n">${t+1}</td><td>${d(e.unit)}${e.unchecked?` <span class="tag">未勾選</span>`:``}</td><td>${d(e.name)}${e.title?`<span class="sub">${d(e.title)}</span>`:``}</td><td>${d(e.address)}</td><td class="nw">${d(e.phone)}</td></tr>`).join(``);return`<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><title>${d(t)}郵寄列表</title>${g}<style>
@page { size: A4 portrait; margin: 12mm }
* { box-sizing: border-box }
body { font-family: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif; color: #000; margin: 0; font-size: 10.5pt }
h1 { font-size: 15pt; text-align: center; margin: 0 0 2mm }
.meta { text-align: center; color: #444; font-size: 9.5pt; margin-bottom: 4mm }
table { width: 100%; border-collapse: collapse }
thead { display: table-header-group }
tr { page-break-inside: avoid; break-inside: avoid }
th, td { border: 0.6pt solid #000; padding: 1.4mm 2mm; vertical-align: top; text-align: left }
th { background: #e9ecef; -webkit-print-color-adjust: exact; print-color-adjust: exact; white-space: nowrap }
td.n { text-align: center; width: 9mm } .nw { white-space: nowrap }
.sub { display: block; font-size: 8.5pt; color: #555 }
tr.off td { color: #888 }
.tag { display: inline-block; font-size: 7.5pt; border: 0.6pt solid #999; border-radius: 3pt; padding: 0 1.2mm; color: #666; vertical-align: 1pt }</style>
<script>window.onload=()=>{(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>window.print())}<\/script></head><body>
<h1>${d(t)}郵寄列表</h1><div class="meta">共 ${e.length} 筆　列印時間：${d(n)}</div>
<table><thead><tr><th>#</th><th>學校名稱</th><th>聯絡人</th><th>通訊地址</th><th>電話</th></tr></thead><tbody>${r}</tbody></table></body></html>`}export{e as a,b as c,f as d,s as f,r as i,p as l,c as m,t as n,o,l as p,a as r,v as s,n as t,y as u};