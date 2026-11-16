const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browser-SVqs8N5c.js","assets/rolldown-runtime-hePW80VL.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-hePW80VL.js";import{C as t,Dt as n,F as r,H as i,L as a,Ot as o,S as s,V as c,W as l,ct as u,et as d,g as f,it as p,k as m,kt as h,rt as g,y as _,z as v}from"./api-BeBF3b2y.js";import{n as y,t as b}from"./index-Ds9KmhGr.js";var x={label:`標籤`,envelope:`信封`,card:`卡片`},S={kai:`標楷體`,ming:`明體`,hei:`黑體`},C={kai:`"BiauKai", "DFKai-SB", "標楷體", "Kaiti TC", "STKaiti", serif`,ming:`"PMingLiU", "新細明體", "Noto Serif TC", "Songti TC", serif`,hei:`"Microsoft JhengHei", "微軟正黑體", "Noto Sans TC", "PingFang TC", sans-serif`},w=[{token:`郵遞區號`,label:`郵遞區號`,pick:e=>e.zip??``},{token:`地址`,label:`地址`,pick:e=>D(e)},{token:`完整地址`,label:`完整地址（含郵遞區號）`,pick:e=>e.address},{token:`單位`,label:`單位`,pick:e=>e.unit},{token:`職稱`,label:`職位／職稱`,pick:e=>e.title},{token:`姓名`,label:`姓名`,pick:e=>e.name},{token:`稱謂`,label:`稱謂（先生／女士）`,pick:e=>e.salutation},{token:`稱呼`,label:`稱呼（有職稱用職稱，否則用稱謂）`,pick:e=>e.title||e.salutation},{token:`回條網址`,label:`線上回條網址（寄送批次建立線上回條後才有）`,pick:e=>e.rsvpUrl??``},{token:`類別`,label:`類別（因哪個類別列入名單）`,pick:e=>T(e)},{token:`序號`,label:`序號：這次套印的第幾份（總序號）`,pick:e=>e.seq?String(e.seq):``},{token:`類別序號`,label:`類別序號：在所屬類別中的第幾份（例：{類別}-{類別序號}）`,pick:e=>e.catSeq?String(e.catSeq):``}];function T(e){return e.category||e.categories[0]||``}function E(e,t=!1,n=[]){let r=e=>{let t=n.indexOf(e);return t<0?n.length+ +!e:t},i=t?e.map((e,t)=>({x:e,i:t})).sort((e,t)=>r(T(e.x))-r(T(t.x))||T(e.x).localeCompare(T(t.x),`zh-Hant`)||e.i-t.i).map(e=>e.x):e,a=new Map;return i.map((e,t)=>{let n=T(e);return a.set(n,(a.get(n)??0)+1),{...e,seq:t+1,catSeq:a.get(n)}})}function D(e){return e.address.replace(/^\s*\d{3,6}\s*/,``)}function O(e,t){let n=new Map(w.map(e=>[e.token,e.pick(t)]));return e.split(`
`).flatMap(e=>{let t=!1,r=!1,i=e.replace(/\{([^{}]+)\}/g,(e,i)=>{if(!n.has(i))return e;t=!0;let a=n.get(i)??``;return a&&(r=!0),a});return t&&!r&&!i.replace(/\s/g,``)?[]:[i.replace(/\s{2,}/g,` `).trim()]}).join(`
`)}var k=()=>`e`+Math.random().toString(36).slice(2,9);function A(e,t={}){return{id:k(),type:e,x:5,y:5,w:e===`zip`?30:e===`qr`?20:40,h:e===`zip`?8:e===`qr`?20:10,text:e===`text`?`{姓名}`:e===`qr`?`{回條網址}`:``,font:`kai`,size:12,bold:!1,align:`left`,vertical:!1,fit:!0,lineHeight:1.3,color:`#000000`,zipCell:5,zipGap:1.5,zipBox:!1,image:``,...t}}var j=e=>({width:100,height:45,sheet:{width:210,height:297},grid:{cols:1,rows:1,top:0,left:0,gapX:0,gapY:0},background:``,printBackground:!1,printBorder:!1,collapseBlank:!0,sheetScan:``,elements:[],...e}),M=(e,t)=>[A(`image`,{x:3,y:3,w:12,h:12}),A(`text`,{x:18,y:3,w:e-21,h:6,text:`{郵遞區號}`,size:11,font:`hei`}),A(`text`,{x:18,y:9,w:e-21,h:t*.3,text:`{地址}`,size:11}),A(`text`,{x:6,y:t*.55,w:e-12,h:t*.4,text:`{單位}
{姓名} {稱呼} 鈞啟`,size:14,bold:!0,align:`center`})];function N(e){return j({width:210,height:297,collapseBlank:!1,elements:[A(`text`,{x:(210-e.introW)/2,y:28,w:e.introW,h:34,text:e.intro,size:16,lineHeight:1.9}),A(`text`,{x:36,y:64,w:30,h:8,text:`恭請`,size:15}),A(`text`,{x:62,y:71,w:90,h:13,text:`蒞　臨　指　導`,size:24,bold:!0,align:`center`}),A(`text`,{x:50,y:86,w:110,h:8,text:`臺中市神岡區社口國民小學`,size:15,align:`center`}),A(`text`,{x:90,y:96,w:66,h:30,text:e.signers,size:15,lineHeight:1.9}),A(`text`,{x:158,y:105,w:20,h:9,text:`敬邀`,size:15}),A(`text`,{x:e.programTitleX||50,y:164,w:e.programTitleX?60:110,h:10,text:e.programTitle,size:18,align:e.programTitleX?`left`:`center`}),...e.program,A(`text`,{x:24,y:252,w:162,h:26,text:e.notes,size:11,align:e.notesAlign,lineHeight:1.7})]})}var P=[{key:`label-2x6`,kind:`label`,name:`A4 標籤 2 欄 × 6 列（100 × 45 mm）`,make:()=>j({width:100,height:45,grid:{cols:2,rows:6,top:13.5,left:4,gapX:2,gapY:0},elements:M(100,45)})},{key:`label-2x7`,kind:`label`,name:`A4 標籤 2 欄 × 7 列（99.1 × 38.1 mm）`,make:()=>j({width:99.1,height:38.1,grid:{cols:2,rows:7,top:15.1,left:4.65,gapX:2.5,gapY:0},elements:M(99.1,38.1)})},{key:`label-3x8`,kind:`label`,name:`A4 標籤 3 欄 × 8 列（70 × 37 mm）`,make:()=>j({width:70,height:37,grid:{cols:3,rows:8,top:.5,left:0,gapX:0,gapY:0},elements:M(70,37)})},{key:`env-cn-long`,kind:`envelope`,name:`中式直式信封（12 × 23.5 cm）`,make:()=>j({width:120,height:235,printBorder:!1,elements:[A(`zip`,{x:62,y:12,w:50,h:9,size:16,font:`hei`,zipCell:7,zipGap:1.3,align:`left`}),A(`text`,{x:92,y:30,w:18,h:150,text:`{地址}`,size:16,vertical:!0}),A(`text`,{x:46,y:40,w:30,h:170,text:`{單位}
{姓名} {稱呼} 鈞啟`,size:26,bold:!0,vertical:!0}),A(`text`,{x:10,y:120,w:22,h:105,text:`寄件人地址
寄件人名稱 緘`,size:11,vertical:!0}),A(`image`,{x:10,y:205,w:20,h:20})]})},{key:`env-cn-short`,kind:`envelope`,name:`中式直式信封（10 × 21 cm）`,make:()=>j({width:100,height:210,elements:[A(`zip`,{x:50,y:10,w:45,h:8,size:14,font:`hei`,zipCell:6,zipGap:1.2}),A(`text`,{x:76,y:25,w:16,h:140,text:`{地址}`,size:14,vertical:!0}),A(`text`,{x:38,y:35,w:26,h:150,text:`{單位}
{姓名} {稱呼} 鈞啟`,size:22,bold:!0,vertical:!0}),A(`text`,{x:8,y:105,w:20,h:95,text:`寄件人地址
寄件人名稱 緘`,size:10,vertical:!0})]})},{key:`env-dl`,kind:`envelope`,name:`西式橫式信封 DL（22 × 11 cm）`,make:()=>j({width:220,height:110,elements:[A(`image`,{x:8,y:8,w:18,h:18}),A(`text`,{x:28,y:8,w:80,h:18,text:`寄件人名稱
寄件人地址`,size:9,font:`hei`}),A(`text`,{x:85,y:50,w:125,h:7,text:`{郵遞區號}`,size:13,font:`hei`}),A(`text`,{x:85,y:57,w:125,h:14,text:`{地址}`,size:13}),A(`text`,{x:85,y:72,w:125,h:22,text:`{單位}
{姓名} {稱呼} 鈞啟`,size:17,bold:!0})]})},{key:`card-handover`,kind:`card`,name:`邀請卡：家長會長交接典禮（A4 對摺，115 年範例）`,make:()=>N({intro:`　　謹訂於中華民國115年10月30日（星期五）下午六時假朝暮良辰婚宴會館豐原店（臺中市豐原區成功路500號豐原家樂福6樓），舉行115學年度新卸任家長會會長交接典禮。`,introW:160,signers:`新任會長　張哲豪
卸任會長　林孟傑
校長　　　董庭豪`,programTitle:`活動程序`,programTitleX:42,program:[A(`text`,{x:43,y:177,w:130,h:32,text:`18:00～18:10　報到及聯誼
18:10～19:10　交接暨委員授證典禮
19:10～　　　餐敘及交流`,size:14,lineHeight:2})],notes:`為響應環保，懇辭花籃及賀禮。如蒙惠贈，敬請以捐款
支持家長會會務推展及學生學習活動，感謝您的支持。
捐款請聯絡總務處幹事蔡小姐 04-25626834~734`,notesAlign:`left`})},{key:`card-sports`,kind:`card`,name:`邀請卡：校慶運動會（A4 對摺，114 年範例）`,make:()=>N({intro:`謹訂於中華民國114年11月29日（星期六）
上午八時十分在本校運動場舉行114學年度
第64週年校慶運動會。`,introW:140,signers:`校　　　長　董庭豪
家長會會長　林孟傑
校友會會長　涂力旋`,programTitle:`運動會活動程序表`,programTitleX:0,program:[A(`text`,{x:23,y:178,w:20,h:66,text:`預定時間
08：10
08：30
08：45
08：55
09：10
11：10`,size:11,align:`center`,lineHeight:2.3,fit:!1}),A(`text`,{x:44,y:178,w:52,h:66,text:`活動名稱
2、4、6年級創意進場
開幕典禮
社區表演活動
師、家、校趣味競賽
各年級團體賽跑及趣味競賽
低年級大隊接力決賽`,size:11,align:`center`,lineHeight:2.3,fit:!1}),A(`text`,{x:101,y:178,w:20,h:66,text:`預定時間
12：40
13：25
14：25
15：30
15：40
15：50`,size:11,align:`center`,lineHeight:2.3,fit:!1}),A(`text`,{x:122,y:178,w:52,h:66,text:`活動名稱
低年級放學
中年級大隊接力決賽
高年級大隊接力決賽
閉幕典禮
環境整理
中、高年級放學`,size:11,align:`center`,lineHeight:2.3,fit:!1})],notes:`＊如蒙惠賜捐款贊助本次校慶運動會，請洽本校總務處 25626834#737，誠摯感謝！
活動時間會依當天現場活動時間為主，密切注意活動時程及準備！
因校園空間有限，活動期間校園內不開放停車，造成不便敬請見諒！`,notesAlign:`center`})},{key:`card-graduation`,kind:`card`,name:`邀請卡：畢業典禮（A4 對摺，115 年範例）`,make:()=>{let e=N({intro:`　　謹訂於中華民國115年6月11日（星期四）
上午八時三十分在本校禮堂（樂群樓）二樓舉行
社口國小第63屆畢業典禮。`,introW:150,signers:`校　　　長　董庭豪
家長會會長　林孟傑
校友會會長　涂力旋`,programTitle:`畢業典禮程序表`,programTitleX:0,program:[A(`text`,{x:36,y:176,w:72,h:58,text:`一、校園巡禮
二、市長與來賓祝福
三、校長、會長致詞
四、天使翱翔
五、快樂童年-畢業生舞蹈演出
六、榮耀時刻`,size:13,lineHeight:2.1}),A(`text`,{x:110,y:176,w:66,h:58,text:`七、在校生祝福詞
八、畢業生致感恩詞
九、獻花
十、行謝師禮
十一、唱畢業歌
十二、頒發畢業證書`,size:13,lineHeight:2.1})],notes:`1. 校內車位有限，不開放停車，敬請見諒。
2. 如蒙惠賜禮品或捐款，請洽本校總務處收受。
　 活動承辦：學務處（分機720）　禮品捐款：總務處（分機737）
3. 典禮會場人潮無法保持社交距離，仍建議配戴口罩。`,notesAlign:`left`});return e.elements.unshift(A(`text`,{x:30,y:16,w:150,h:10,text:`《繽紛社口，快樂童年》`,size:18,bold:!0,align:`center`})),e}},{key:`card-a5`,kind:`card`,name:`邀請卡 A5 直式（14.8 × 21 cm）`,make:()=>j({width:148,height:210,printBorder:!1,elements:[A(`text`,{x:20,y:40,w:108,h:30,text:`敬邀
{單位} {姓名} {稱呼}`,size:18,bold:!0,align:`center`})]})},{key:`card-a6-h`,kind:`card`,name:`邀請卡 A6 橫式（14.8 × 10.5 cm）`,make:()=>j({width:148,height:105,elements:[A(`text`,{x:15,y:15,w:118,h:20,text:`敬邀 {單位} {姓名} {稱呼}`,size:16,bold:!0,align:`center`})]})}],F={entryId:`sample`,kind:`unit`,unit:`神岡獅子會`,title:`會長`,name:`王大明`,salutation:`先生`,address:`429臺中市神岡區中山路100號`,zip:`429`,phone:``,categories:[`人民團體社團`],category:`人民團體社團`,rsvpUrl:`https://exam.skes.tc.edu.tw/s/SAMPLE01`,seq:1,catSeq:1};function I(e,t,n=1){let r=t.cols*t.rows,i=Math.min(Math.max(0,n-1),r-1),a=[...Array(i).fill(null),...e],o=[];for(let e=0;e<a.length;e+=r)o.push([...a.slice(e,e+r),...Array(Math.max(0,e+r-a.length)).fill(null)]);return o}function L(e){return e.replace(/[0-9A-Za-z\-()]/g,e=>e===`-`?`－`:e===`(`?`（`:e===`)`?`）`:String.fromCharCode(e.charCodeAt(0)+65248))}function R(e,t,n){let r=new Map(e.map(e=>[e.id,{dx:0,dy:0}])),i=e.filter(e=>e.type!==`image`&&t(e)),a=(e,t,n,r)=>Math.min(t,r)-Math.max(e,n)>.5;for(let t of i)for(let n of e){if(n.id===t.id)continue;let e=r.get(n.id);!t.vertical&&!n.vertical&&n.y>=t.y+t.h-.5&&a(n.x,n.x+n.w,t.x,t.x+t.w)?e.dy-=t.h:t.vertical&&n.vertical&&n.x+n.w<=t.x+.5&&a(n.y,n.y+n.h,t.y,t.y+t.h)&&(e.dx+=t.w)}if(n&&i.some(e=>!e.vertical)){let t=e.filter(e=>e.type!==`image`&&!e.vertical&&!i.includes(e));if(t.length){let e=Math.min(...t.map(e=>e.y+r.get(e.id).dy)),i=(n-(Math.max(...t.map(e=>e.y+r.get(e.id).dy+e.h))-e))/2-e;for(let e of t)r.get(e.id).dy+=i}}return r}var z=[`src`],B=[`src`],V=[`src`],H=[`data-fit`,`data-size`],U=y(m({__name:`LayoutItem`,props:{layout:{},item:{},screen:{type:Boolean}},setup(m){let y=m,x=e=>{if(!y.item)return``;let t=O(e.type===`zip`?e.text||`{郵遞區號}`:e.text,y.item);return e.vertical?L(t):t},S=e=>y.item?O(e.text||`{郵遞區號}`,y.item).replace(/\D/g,``).split(``):[],w=g(new Map),T=e=>y.item?O(e.text||`{回條網址}`,y.item).trim():``;d(()=>{for(let t of y.layout.elements){if(t.type!==`qr`)continue;let n=T(t);n&&!w.has(n)&&(w.set(n,``),b(async()=>{let{default:t}=await import(`./browser-SVqs8N5c.js`).then(t=>e(t.t(),1));return{default:t}},__vite__mapDeps([0,1])).then(({default:e})=>e.toDataURL(n,{margin:0,width:400,errorCorrectionLevel:`M`})).then(e=>w.set(n,e)))}});let E=e=>!y.item||(e.type===`zip`?!S(e).length:e.type===`qr`?!T(e):e.type===`text`&&!x(e).trim()),D=_(()=>y.layout.collapseBlank&&y.item?R(y.layout.elements,E,y.layout.height):null),k=_(()=>!!D.value&&y.layout.elements.some(e=>e.type===`text`&&!e.vertical&&E(e))),A=e=>{let t=D.value?.get(e.id);return{left:`${e.x+(t?.dx??0)}mm`,top:`${e.y+(t?.dy??0)}mm`,width:`${e.w}mm`,height:`${e.h}mm`}},j=p(null);function M(){j.value?.querySelectorAll(`[data-fit]`).forEach(e=>{if(!e.clientHeight&&!e.clientWidth)return;let t=Number(e.dataset.size),n=t;for(e.style.fontSize=`${n}pt`,e.style.paddingRight=e.style.paddingBottom=`0.12em`;(e.scrollHeight>e.clientHeight+1||e.scrollWidth>e.clientWidth+1)&&n>t*.45;)n-=.5,e.style.fontSize=`${n}pt`;e.style.paddingRight=e.style.paddingBottom=``})}async function N(){await r(),M()}return v(()=>{N(),document.fonts?.ready.then(M),window.addEventListener(`beforeprint`,M)}),c(N),a(()=>window.removeEventListener(`beforeprint`,M)),(e,r)=>(i(),t(`div`,{ref_key:`root`,ref:j,class:n([`li-root`,{"li-border":m.layout.printBorder}]),style:o({width:`${m.layout.width}mm`,height:`${m.layout.height}mm`})},[m.layout.background&&(m.screen||m.layout.printBackground)?(i(),t(`img`,{key:0,src:m.layout.background,class:n([`li-bg`,{"li-bg-ghost":m.screen&&!m.layout.printBackground}]),alt:``},null,10,z)):s(``,!0),(i(!0),t(f,null,l(m.layout.elements,e=>(i(),t(f,{key:e.id},[e.type===`image`&&e.image?(i(),t(`img`,{key:0,src:e.image,class:`li-el li-img`,alt:``,style:o(A(e))},null,12,B)):e.type===`qr`&&w.get(T(e))?(i(),t(`img`,{key:1,src:w.get(T(e)),class:`li-el li-img`,alt:``,style:o(A(e))},null,12,V)):e.type===`zip`?(i(),t(`div`,{key:2,class:`li-el li-zip`,style:o({...A(e),gap:`${e.zipGap}mm`,color:e.color,fontFamily:u(C)[e.font],fontSize:`${e.size}pt`,fontWeight:e.bold?700:400,justifyContent:e.align===`center`?`center`:e.align===`right`?`flex-end`:`flex-start`})},[(i(!0),t(f,null,l(S(e),(r,a)=>(i(),t(`span`,{key:a,class:n([`li-zip-cell`,{"li-zip-box":e.zipBox}]),style:o({width:`${e.zipCell}mm`})},h(r),7))),128))],4)):e.type===`text`?(i(),t(`div`,{key:3,class:n([`li-el li-text`,{"li-vcenter":k.value&&!e.vertical}]),"data-fit":e.fit?``:void 0,"data-size":e.size,style:o({...A(e),color:e.color,fontFamily:u(C)[e.font],fontSize:`${e.size}pt`,fontWeight:e.bold?700:400,textAlign:e.align,lineHeight:e.lineHeight,writingMode:e.vertical?`vertical-rl`:`horizontal-tb`})},h(x(e)),15,H)):s(``,!0)],64))),128))],6))}}),[[`__scopeId`,`data-v-6e009dbf`]]);export{P as a,I as c,x as i,A as l,S as n,F as o,w as r,T as s,U as t,E as u};