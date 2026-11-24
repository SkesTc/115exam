import{r as e,t}from"./zipcode-DvS2yMx3.js";[{key:`sender`,label:`寄件人`,hint:`灰字，下方空一行`},{key:`address`,label:`通訊地址`,hint:``},{key:`unit`,label:`學校名稱`,hint:`粗體`},{key:`name`,label:`聯絡人`,hint:`「○○○　收」`},{key:`title`,label:`職稱`,hint:`接在聯絡人姓名後`},{key:`group`,label:`組別`,hint:`小字`},{key:`phone`,label:`電話`,hint:`小字`},{key:`amount`,label:`領取金額`,hint:`0 元不印`},{key:`event`,label:`活動簡稱`,hint:`灰字，靠右`}].map(e=>e.key);var n=[`sender`,`address`,`unit`,`name`,`amount`,`event`],r=[`sender`,`address`,`unit`,`name`,`group`,`phone`,`bottom`,`amount`,`event`],i={cols:2,rows:6,width:100,height:45,top:13.5,left:4,gapX:2,gapY:0};[...n],[...r],{...i};var a=e=>(e??[]).filter(e=>e.amount).map(e=>`${e.label} ${e.amount.toLocaleString(`en-US`)}`).join(`、`);function o(n,r){return{entryId:`r${r}`,kind:`person`,unit:n.unit,title:n.title,name:n.name,salutation:``,address:n.address,zip:t(e(n.address)),phone:n.phone,categories:n.group?[n.group]:[],category:n.group,group:n.group,amount:n.amount,amountDetail:a(n.parts)}}var s=e=>`${e.unit.replace(/\s+/g,``)}|${e.name.replace(/\s+/g,``)}`,c=new Intl.Collator(`zh-TW`,{collation:`stroke`});function l(e,t=`unit`,n=!0){let r=n?1:-1;return[...e].sort((e,n)=>r*c.compare(e[t],n[t])||c.compare(e.unit,n.unit)||c.compare(e.name,n.name))}var u={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},d=e=>String(e??``).replace(/[&<>"']/g,e=>u[e]),f=`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;600;700&display=swap">`;function p(e,t,n){let r=e.map((e,t)=>`<tr class="${e.unchecked?`off`:``}"><td class="n">${t+1}</td><td>${d(e.unit)}${e.unchecked?` <span class="tag">未勾選</span>`:``}</td><td>${d(e.name)}${e.title?`<span class="sub">${d(e.title)}</span>`:``}</td><td>${d(e.address)}</td><td class="nw">${d(e.phone)}</td></tr>`).join(``);return`<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><title>${d(t)}郵寄列表</title>${f}<style>
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
<table><thead><tr><th>#</th><th>學校名稱</th><th>聯絡人</th><th>通訊地址</th><th>電話</th></tr></thead><tbody>${r}</tbody></table></body></html>`}export{c as a,l as i,o as n,s as r,p as t};