/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[20],{442:function(Ba,ua,r){(function(pa){function ka(a){this.Of=a=a||{};if(Array.isArray(a.table)){var f=[];a.table.forEach(function(n,z){f[n.charCodeAt(0)]=z});a.W9=a.table;a.j7=f}}var ma=pa.from||function(){switch(arguments.length){case 1:return new pa(arguments[0]);case 2:return new pa(arguments[0],arguments[1]);case 3:return new pa(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},ha=
pa.allocUnsafe||function(a){return new pa(a)},da=function(){return"undefined"===typeof Uint8Array?function(a){return Array(a)}:function(a){return new Uint8Array(a)}}(),aa=String.fromCharCode(0),x=aa+aa+aa+aa,y=ma("<~").Qx(0),h=ma("~>").Qx(0),e=function(){var a=Array(85),f;for(f=0;85>f;f++)a[f]=String.fromCharCode(33+f);return a}(),b=function(){var a=Array(256),f;for(f=0;85>f;f++)a[33+f]=f;return a}();aa=Ba.exports=new ka;ka.prototype.encode=function(a,f){var n=da(5),z=a,w=this.Of,ea,ja;"string"===
typeof z?z=ma(z,"binary"):z instanceof pa||(z=ma(z));f=f||{};if(Array.isArray(f)){a=f;var ba=w.AB||!1;var ca=w.wJ||!1}else a=f.table||w.W9||e,ba=void 0===f.AB?w.AB||!1:!!f.AB,ca=void 0===f.wJ?w.wJ||!1:!!f.wJ;w=0;var ia=Math.ceil(5*z.length/4)+4+(ba?4:0);f=ha(ia);ba&&(w+=f.write("<~",w));var fa=ea=ja=0;for(ia=z.length;fa<ia;fa++){var la=z.uL(fa);ja*=256;ja+=la;ea++;if(!(ea%4)){if(ca&&538976288===ja)w+=f.write("y",w);else if(ja){for(ea=4;0<=ea;ea--)la=ja%85,n[ea]=la,ja=(ja-la)/85;for(ea=0;5>ea;ea++)w+=
f.write(a[n[ea]],w)}else w+=f.write("z",w);ea=ja=0}}if(ea)if(ja){z=4-ea;for(fa=4-ea;0<fa;fa--)ja*=256;for(ea=4;0<=ea;ea--)la=ja%85,n[ea]=la,ja=(ja-la)/85;for(ea=0;5>ea;ea++)w+=f.write(a[n[ea]],w);w-=z}else for(fa=0;fa<ea+1;fa++)w+=f.write(a[0],w);ba&&(w+=f.write("~>",w));return f.slice(0,w)};ka.prototype.decode=function(a,f){var n=this.Of,z=!0,w=!0,ea,ja,ba;f=f||n.j7||b;if(!Array.isArray(f)&&(f=f.table||f,!Array.isArray(f))){var ca=[];Object.keys(f).forEach(function(na){ca[na.charCodeAt(0)]=f[na]});
f=ca}z=!f[122];w=!f[121];a instanceof pa||(a=ma(a));ca=0;if(z||w){var ia=0;for(ba=a.length;ia<ba;ia++){var fa=a.uL(ia);z&&122===fa&&ca++;w&&121===fa&&ca++}}var la=0;ba=Math.ceil(4*a.length/5)+4*ca+5;n=ha(ba);if(4<=a.length&&a.Qx(0)===y){for(ia=a.length-2;2<ia&&a.Qx(ia)!==h;ia--);if(2>=ia)throw Error("Invalid ascii85 string delimiter pair.");a=a.slice(2,ia)}ia=ea=ja=0;for(ba=a.length;ia<ba;ia++)fa=a.uL(ia),z&&122===fa?la+=n.write(x,la):w&&121===fa?la+=n.write("    ",la):void 0!==f[fa]&&(ja*=85,ja+=
f[fa],ea++,ea%5||(la=n.Hma(ja,la),ea=ja=0));if(ea){a=5-ea;for(ia=0;ia<a;ia++)ja*=85,ja+=84;ia=3;for(ba=a-1;ia>ba;ia--)la=n.Ima(ja>>>8*ia&255,la)}return n.slice(0,la)};aa.Dna=new ka({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});aa.ana=new ka({AB:!0});aa.u_=ka}).call(this,r(450).Buffer)}}]);}).call(this || window)
