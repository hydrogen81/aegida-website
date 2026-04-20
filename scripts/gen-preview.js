const fs = require('fs')
const path = require('path')

const out = path.join('C:', 'Users', 'Windows 11', 'Desktop', 'aegida-connect-preview.html')

const html = `<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AEGIDA Connect - Preview Revisione Interna</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Source+Sans+3:wght@400;600&family=JetBrains+Mono:wght@400;500&display=swap');
:root{--n950:#0a0e1a;--n900:#0d1321;--n800:#131b2e;--n700:#1e2a45;--g500:#b8960c;--g400:#d4ac0d;--gr:#22c55e;--s100:#f1f5f9;--s200:#e2e8f0;--s300:#cbd5e1;--s400:#94a3b8;--s500:#64748b;--s600:#475569}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Source Sans 3',sans-serif;background:var(--n950);color:var(--s200);line-height:1.6}
.fd{font-family:'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:.05em}
nav{position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(10,14,26,.85);backdrop-filter:blur(16px);border-bottom:1px solid rgba(184,150,12,.2)}
.ni{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:0 1.5rem;height:64px}
.nl{font-family:'Barlow Condensed',sans-serif;font-size:1.25rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#fff;text-decoration:none}
.nk{display:flex;gap:.25rem;align-items:center}
.nk a{padding:.5rem .75rem;font-size:.8rem;font-family:'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:.05em;color:var(--s300);text-decoration:none}
.nk a:hover{color:#fff}
.nk a.fb{border:1px solid rgba(34,197,94,.6);border-radius:4px;color:var(--gr)}
.nc{padding:.5rem 1.25rem;background:var(--g500);color:var(--n950);font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.8rem;text-transform:uppercase;letter-spacing:.05em;border-radius:4px;text-decoration:none}
section{padding:5rem 1.5rem}.ct{max-width:1200px;margin:0 auto}.nw{max-width:900px;margin:0 auto}.ce{text-align:center}
.dv{border:none;border-top:1px solid var(--n700);max-width:1200px;margin:0 auto}
.sl{font-family:'JetBrains Mono',monospace;font-size:.65rem;text-transform:uppercase;letter-spacing:.15em;color:var(--g500);margin-bottom:.5rem}
h1{font-size:clamp(2.5rem,6vw,3.75rem);font-weight:800;color:#fff;line-height:1.05;margin-bottom:1rem}
h2{font-size:clamp(1.75rem,4vw,3rem);font-weight:700;color:var(--s100);line-height:1.1;margin-bottom:1rem}
h3{font-size:1.1rem;font-weight:700;color:var(--s100);margin-bottom:.75rem}
.tg{font-family:'Barlow Condensed',sans-serif;font-size:1.2rem;text-transform:uppercase;letter-spacing:.05em;color:var(--gr);margin-bottom:1.5rem}
.ds{font-size:1.1rem;color:var(--s400);line-height:1.7;max-width:700px}
.ce .ds{margin:0 auto}
.bg{display:inline-block;font-family:'JetBrains Mono',monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.12em;padding:.4rem .8rem;border-radius:4px;border:1px solid rgba(34,197,94,.5);color:var(--gr);margin-bottom:1.5rem}
.bgd{display:inline-flex;align-items:center;gap:.5rem;padding:.9rem 1.75rem;background:rgba(34,197,94,.15);color:rgba(34,197,94,.5);font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.85rem;text-transform:uppercase;letter-spacing:.05em;border-radius:4px;border:1px solid rgba(34,197,94,.2);cursor:not-allowed}
.bog{display:inline-flex;align-items:center;padding:.9rem 1.75rem;border:1px solid var(--g500);color:var(--g400);font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.85rem;text-transform:uppercase;letter-spacing:.05em;border-radius:4px;text-decoration:none}
.bg2{display:inline-flex;align-items:center;padding:1rem 2rem;background:var(--g500);color:var(--n950);font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1rem;text-transform:uppercase;letter-spacing:.05em;border-radius:4px;text-decoration:none}
.hb{display:flex;gap:1rem;justify-content:center;margin-top:2.5rem;flex-wrap:wrap}
.g3{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-top:3rem}
.g2{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;margin-top:3rem}
.cd{border:1px solid var(--n700);background:var(--n900);border-radius:8px;padding:1.5rem}
.cd p{font-size:.9rem;color:var(--s400);line-height:1.6}
.cl{font-family:'JetBrains Mono',monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:var(--s500);margin-bottom:.25rem}
.cv{font-family:'Barlow Condensed',sans-serif;font-size:1.15rem;font-weight:700;color:var(--gr);letter-spacing:.03em}
table{width:100%;text-align:left;margin-top:3rem;border-collapse:collapse}
th{padding:.75rem 1rem;font-family:'Barlow Condensed',sans-serif;font-size:.85rem;text-transform:uppercase;letter-spacing:.05em;color:var(--g400);border-bottom:1px solid var(--n700)}
td{padding:.75rem 1rem;font-size:.9rem;border-bottom:1px solid var(--n800)}
td:first-child{color:var(--s300)}
td:nth-child(2),td:nth-child(3){font-family:'JetBrains Mono',monospace;font-size:.8rem}
td:nth-child(3){color:var(--g400)}
.vy{color:var(--gr)}.vn{color:var(--s600)}
.tn{margin-top:1.5rem;font-size:.85rem;color:var(--s500)}
.db{border:1px solid var(--n700);background:var(--n900);border-radius:8px;padding:2.5rem;margin-top:2.5rem}
.db h3{margin-top:1rem}.db p{font-size:.9rem;color:var(--s400);margin-bottom:1.5rem}
.cs{background:linear-gradient(180deg,#0d1321 0%,#131b2e 50%,#0d1321 100%)}
.wm{text-align:center;padding:2rem 1rem;font-family:'JetBrains Mono',monospace;font-size:.65rem;text-transform:uppercase;letter-spacing:.15em;color:var(--s600);border-top:1px solid var(--n700)}
@media(max-width:768px){.nk,.nc{display:none}section{padding:3rem 1rem}}
</style>
</head>
<body>
<nav><div class="ni"><a href="#" class="nl">AEGIDA</a><div class="nk"><a href="#">Prodotti</a><a href="#">Privacy Phone</a><a href="#">Framework</a><a href="#" class="fb">Connect</a><a href="#">Settori</a><a href="#">Blog</a><a href="#">Contatti</a></div><a href="#" class="nc">Richiedi Briefing</a></div></nav>

<section style="padding-top:8rem;background:radial-gradient(ellipse 70% 50% at 50% 20%,rgba(34,197,94,.07) 0%,transparent 70%),#0a0e1a">
<div class="ct ce">
<svg width="72" height="72" viewBox="0 0 100 100" fill="none" style="display:block;margin:0 auto 2rem"><path d="M50 5 L90 25 L90 55 C90 75 70 95 50 95 C30 95 10 75 10 55 L10 25 Z" stroke="#b8960c" stroke-width="2" fill="rgba(184,150,12,.05)"/><path d="M50 20 L75 33 L75 55 C75 68 63 82 50 82 C37 82 25 68 25 55 L25 33 Z" stroke="#b8960c" stroke-width="1" fill="rgba(184,150,12,.03)"/></svg>
<div class="bg">GRATUITO &mdash; OPEN SOURCE</div>
<h1 class="fd">AEGIDA Connect</h1>
<p class="tg">Messaggistica cifrata. Per tutti.</p>
<p class="ds ce">App di messaggistica end-to-end cifrata per Linux desktop. Architettura peer-to-peer, nessun server centrale, nessun compromesso sulla privacy. Gratuita e open source.</p>
<div class="hb"><span class="bgd">Download disponibile a breve</span><a href="#" class="bog">Scopri Privacy Phone</a></div>
</div></section>

<hr class="dv">

<section><div class="ct">
<div class="sl">FUNZIONALIT&Agrave;</div>
<h2 class="fd">Comunicazioni sicure, senza compromessi</h2>
<div class="g3">
<div class="cd"><h3 class="fd">Cifratura End-to-End</h3><p>Ogni messaggio &egrave; cifrato prima di lasciare il tuo dispositivo. Nessuno, nemmeno noi, pu&ograve; leggere le tue conversazioni.</p></div>
<div class="cd"><h3 class="fd">Architettura Peer-to-Peer</h3><p>Nessun server centrale che memorizza i tuoi messaggi. Le comunicazioni avvengono direttamente tra i dispositivi.</p></div>
<div class="cd"><h3 class="fd">Multi-Canale</h3><p>Comunica tramite Internet (Tor), rete Wi-Fi locale o Bluetooth. Anche senza connessione Internet.</p></div>
<div class="cd"><h3 class="fd">Zero Metadati</h3><p>Nessun registro di chi parla con chi, quando o quanto spesso. La tua rete di contatti resta invisibile.</p></div>
<div class="cd"><h3 class="fd">Open Source</h3><p>Codice sorgente verificabile da chiunque. Trasparenza totale sulla sicurezza dell&rsquo;applicazione.</p></div>
<div class="cd"><h3 class="fd">Nativo Linux</h3><p>Progettato per Linux desktop. Integrazione nativa con il tuo ambiente di lavoro.</p></div>
</div></div></section>

<hr class="dv">

<section><div class="ct nw">
<div class="sl">SICUREZZA</div>
<h2 class="fd">Stack crittografico</h2>
<p class="ds">AEGIDA Connect implementa protocolli crittografici moderni e verificati per proteggere ogni aspetto delle tue comunicazioni.</p>
<div class="g2">
<div class="cd"><div class="cl">Key Exchange</div><div class="cv">Curve25519</div></div>
<div class="cd"><div class="cl">Cifratura messaggi</div><div class="cv">ChaCha20-Poly1305</div></div>
<div class="cd"><div class="cl">Hash</div><div class="cv">BLAKE2</div></div>
<div class="cd"><div class="cl">Forward Secrecy</div><div class="cv">PFS attivo</div></div>
<div class="cd"><div class="cl">Storage locale</div><div class="cv">AES-256-GCM</div></div>
<div class="cd"><div class="cl">KDF</div><div class="cv">Scrypt</div></div>
</div></div></section>

<hr class="dv">

<section><div class="ct nw">
<div class="sl">CONFRONTO</div>
<h2 class="fd">Connect vs Privacy Phone</h2>
<p class="ds">AEGIDA Connect &egrave; il punto di partenza gratuito. Per chi ha bisogno di protezione totale, il Privacy Phone aggiunge hardware dedicato, OS hardened e crittografia post-quantum.</p>
<div style="overflow-x:auto">
<table>
<thead><tr><th>Funzionalit&agrave;</th><th>Connect (Gratuito)</th><th>Privacy Phone</th></tr></thead>
<tbody>
<tr><td>Messaggistica cifrata E2E</td><td class="vy">Si</td><td>Si</td></tr>
<tr><td>Architettura P2P</td><td class="vy">Si</td><td>Si</td></tr>
<tr><td>Trasporto Tor</td><td class="vy">Si</td><td>Si</td></tr>
<tr><td>Wi-Fi / Bluetooth P2P</td><td class="vy">Si</td><td>Si</td></tr>
<tr><td>Crittografia post-quantum</td><td class="vn">No</td><td>ML-KEM FIPS 203</td></tr>
<tr><td>OS hardened (zero telemetria)</td><td class="vn">No</td><td>Aegida OS</td></tr>
<tr><td>Hardware sicuro (Titan M2)</td><td class="vn">No</td><td>Si</td></tr>
<tr><td>Air-gap (MicroSD/USB)</td><td class="vn">No</td><td>Si</td></tr>
<tr><td>Supporto dedicato</td><td class="vy">Community</td><td>Enterprise SLA</td></tr>
<tr><td>Piattaforma</td><td class="vy">Linux desktop</td><td>Smartphone dedicato</td></tr>
</tbody></table></div>
<p class="tn">AEGIDA Connect offre un livello di protezione eccellente per uso personale. Per esigenze professionali e infrastrutture critiche, il Privacy Phone garantisce protezione senza compromessi.</p>
</div></section>

<hr class="dv">

<section><div class="ct nw ce">
<div class="sl">DOWNLOAD</div>
<h2 class="fd">Scarica AEGIDA Connect</h2>
<p class="ds ce">Disponibile gratuitamente per Linux desktop. Proteggi le tue comunicazioni in pochi minuti.</p>
<div class="db ce">
<svg width="40" height="40" viewBox="0 0 24 24" fill="#22c55e" style="display:block;margin:0 auto"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.368 1.884 1.43.868.07 1.178-.29 1.316-.915.135-.6-.182-.882-.416-1.332-.057-.116-.136-.198-.2-.268-.497-.534-.89-.738-.855-1.661.039-.936.29-1.707.431-2.541.054-.336-.03-.468-.144-.602-.084-.101-.186-.134-.238-.268-.21-.505.36-1.68.36-2.77 0-1.2-.404-2.539-1.04-3.568-.635-1.072-1.476-1.944-2.082-2.922-.603-.98-.87-2.043-.87-3.34C15.74 3.928 14.028 0 12.504 0z"/></svg>
<h3 class="fd">Linux Desktop</h3>
<p>Compatibile con Ubuntu, Fedora, Debian e le principali distribuzioni.</p>
<span class="bgd">Download disponibile a breve</span>
</div></div></section>

<hr class="dv">

<section class="cs"><div class="ct nw ce">
<h2 class="fd">Vuoi protezione totale?</h2>
<p class="ds ce">AEGIDA Connect &egrave; solo l&rsquo;inizio. Scopri il Privacy Phone per sicurezza hardware, OS hardened e crittografia post-quantum.</p>
<div style="margin-top:2.5rem"><a href="#" class="bg2">Scopri il Privacy Phone &rarr;</a></div>
</div></section>

<div class="wm">DOCUMENTO DI PREVIEW INTERNO &mdash; AEGIDA / H4R HUMAN FOR RESEARCH SRL &mdash; APRILE 2026<br>Non destinato alla distribuzione pubblica</div>
</body></html>`

fs.writeFileSync(out, html, 'utf8')
console.log('Preview salvata:', out, '(' + html.length + ' bytes)')
