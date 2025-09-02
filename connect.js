
const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins } = require('./proxy.js');

const fetch = require('node-fetch');
const crypto = require('crypto');

const stickerly = require("./exports/funcoes/stickers");

const { menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infodono, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, antispam, anotar, getRandom, NodeCache,insert, response } = require('./proxy.js');

const { NomeDoBot, numerodono, NickDono, prefix } = require("./dono/config.json");

var { fundo1, fundo2 } = require("./dono/links_img.json");

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

const own = "16727010089@s.whatsapp.net";

function DLT_FL(file) {
try { fs.unlinkSync(file) } catch (error) {}
}

const msgRetryCounterCache = new NodeCache();

const readline = require("readline");

const pairingCode = process.argv.includes("sim");
const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function iniciarClient() {
var folderUserAuth = "./banco de dados/nolan-code";

await stickerly();

const { state, saveCreds } = await useMultiFileAuthState(folderUserAuth);

const { isLatest } = await fetchLatestBaileysVersion();

const client = makeWASocket({
  version: [2, 3000, 1023223821],
  auth: state,
  syncFullHistory: true,
  printQRInTerminal: false,
  qrTimeout: 180000,
  logger: P({ level: 'silent' }),
  browser: ['Linux', 'Opera', '10.0.22631'],
  msgRetryCounterCache,
  connectTimeoutMs: 60000,
  defaultQueryTimeoutMs: 0,
  keepAliveIntervalMs: 10000,
  emitOwnEvents: true,
  fireInitQueries: true,
  generateHighQualityLinkPreview: true,
  syncFullHistory: true,
  markOnlineOnConnect: true,
  patchMessageBeforeSending: (message) => {
  const requiresPatch = !!(message.buttonsMessage || message.listMessage);
  return message;
}
});

const PhoneNumber = require('awesome-phonenumber')

if (!client.authState.creds.registered) {
try {
let number = await question(colors.green("💻 Vamos conectar seu WhatsApp ao bot!\n-\n") + colors.cyan("⚠️  Digite seu número com DDD (ex: 5511999999): "));
number = number.replace(/[^0-9]/g, "");
let code = await client.requestPairingCode(number);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`${colors.cyan("💬 Seu código para conectar: ")}` + colors.white(code));
rl.close();
} catch(error) {
console.error('Falha ao solicitar o código, talvez a conexão tenha atualizado. entre em contato com o (criador) insta: euzenom\n', error)
}
}

client.ev.process(async(events) => {
if(events["group-participants.update"]){
try {
var nolan = events["group-participants.update"];
if(!fs.existsSync(`./banco de dados/grupos/activation_gp/${nolan.id}.json`)) return
var jsonGp = JSON.parse(fs.readFileSync(`./banco de dados/grupos/activation_gp/${nolan.id}.json`));

if(nolan.participants[0].startsWith(client.user.id.split(':')[0])) return;

try { var grpmdt = await client.groupMetadata(nolan.id) } catch (e) { return }

const isGroup2 = grpmdt.id.endsWith('@g.us');

try {
var GroupMetadata_ = isGroup2 ? await client.groupMetadata(nolan.id): ""} catch (e) {return}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';
const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(nolan.action == 'add'){
num = nolan.participants[0];
if(nescessario.listanegraG.includes(num)){
await client.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban..'});
client.groupParticipantsUpdate(GroupMetadata_.id, [nolan.participants[0]], 'remove');
return;
}}
if(nolan.action == 'remove'){
num = nolan.participants[0];
}
if(nolan.action == 'add' && jsonGp[0].listanegra.includes(nolan.participants[0])){
await client.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban cabaço...'});
client.groupParticipantsUpdate(GroupMetadata_.id, [nolan.participants[0]], 'remove');
}
if(jsonGp[0].antifake && nolan.action === 'add' && !nolan.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await client.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
client.groupParticipantsUpdate(GroupMetadata_.id, [nolan.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO - WELCOME!
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await client.groupMetadata(nolan.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !nolan.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){
// PEGAR DESCRIÇÃO DO GRUPO! 
if(nolan.action === 'add') {
mem = nolan.participants[0];

if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+nolan.participants[0].split('@')[0])
.replace('#numerobot#', client.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(nolan.participants[0].split('@')[0], mdata_2.subject);
}
let ppUrl;
try {
 ppUrl = await client.profilePictureUrl(`${mem.split('@')[0]}@c.us`, 'image');
} catch(e) {
 ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
const avatar = encodeURIComponent(ppUrl);
ppimg = `https://neon-apis.shop/canvas/welcome?fundo=https://files.catbox.moe/l2sr48.jpg&titulo=Bem-vindo&numero=${nolan.participants[0].split('@')[0]}&grupo=${mdata_2.subject}&logo=${avatar}`

ranBV = [`ao grupo ${encodeURI(mdata_2.subject)}`, `O membro ${nolan.participants[0].split('@')[0]} acaba de cair de paraquedas aqui no grupo...`, `Leia a descrição do grupo para passar um tempo aqui...`, `Minhas saudações a você, novo membro desconhecido.`, `Ih você é o novo membro? Te desejo boas vindas ao Hospício kkk!`, `Acaba de chegar + um de paraquedas aqui no grupo!`]
client.sendMessage(mdata_2.id, {image: {url: ppimg},
mentions: nolan.participants, caption: teks});
} else if(nolan.action === 'remove') {
mem = nolan.participants[0];

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', nolan.participants[0].split('@')[0])
.replace('#numerobot#', client.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = bye(nolan.participants[0].split('@')[0]);
}
let ppUrl;
try {
 ppUrl = await client.profilePictureUrl(`${mem.split('@')[0]}@c.us`, 'image');
} catch(e) {
 ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
const avatar = encodeURIComponent(ppUrl);
ppimg = `https://neon-apis.shop/canvas/welcome?fundo=https://files.catbox.moe/l2sr48.jpg&titulo=Good-bye&numero=${nolan.participants[0].split('@')[0]}&grupo=${mdata_2.subject}&logo=${avatar}`

ranSI = [`${nolan.participants[0].split('@')[0]}`, `Nem gostava de você, eu só digo aleluia por tu ter saído :)`, `Nunca fui com a tua cara, digo glória por tu ter saído!`, `Eu te amo demais, volta pra cá. Aqui é teu lar!`, `Nada pra ver aqui, ele(a) saiu por um 'acidente'...`]
client.sendMessage(mdata_2.id, {image: {url: ppimg}, caption: teks, 
mentions: nolan.participants})
}
}

} catch (e) {
console.log(e)
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"]
require("./index.js")(upsert, client)
}

if(events["connection.update"]) {
const update = events["connection.update"]; 
var { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
  console.log(colors.green("Você precisará de um 2° celular, para tirar foto do qr-code, para depois escanear a foto que tirou.."))
}  

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("[Error: 428] - Conexão caiu, irei ligar novamente, se continuar com este erro, provavelmente sua internet está caindo constantemente..."));
} else if(shouldReconnect == 401) {
exec("cd database && rm -rf qr-code")
console.log(colors.red("A autenticação com WhatsApp Web falhou! Por favor, reinicie e realize a autenticação novamente."))
} else if(shouldReconnect == 515) {
console.log(colors.gray("\nA autenticação foi bem sucedida! irei reiniciar para estabilizar a conexão."))
} else if(shouldReconnect == 440) {
console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore..."))
} else if(shouldReconnect == 503) {
console.log(colors.nolan("[Error: 503] - Ocorreu um erro desconhecido ao executar o bot novamente ou sua primeira inicialização."));
} else if(shouldReconnect == 502) {
console.log(colors.nolan("[Error: 502] - A conexão com a internet, está querendo cair..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("[Error: 408] - A conexão com a Internet atualmente está fraca..."))
} else {
console.log(colors.yellow(`A conexão entre o WhatsApp foi fechada, por motivos de: ${lastDisconnect?.error}`))
};
iniciarClient();
}
break;

case 'connecting':
console.log(colors.yellow(`[NOLAN] Conexão estabelecida - ${date} ${time}`))
break;

case 'open':
console.log(banner3.string)   
console.log(banner2.string)  
console.log(colors.yellow(`〔 NOLAN CONECTADO COM SUCESSO.. 〕\n`))
await client.sendPresenceUpdate("available")
await client.updateProfileStatus(`[ CONECTADO ${time} - ${date} ]`)
break;

default:
break
}}

if(events["creds.update"]) {await saveCreds()};
})

const fetchJson = (url, options = {}) => new Promise(async (resolve, reject) => {
const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 30000); // 30s
try {
const res = await fetch(url, {...options, signal: controller.signal});
const json = await res.json();
resolve(json);
} catch (err) {
reject(err);
} finally {
clearTimeout(timeout);
}
});

global.fetchJson = fetchJson;
  
function deveReportarErro(err) {
const msg = err?.message || '';
const ignorar = [
'Request failed with status code', 'settle', 'fetch', 'timeout', 'socket', 'timed out', 'network', 'ECONNRESET', 'ENOTFOUND', 'EAI_AGAIN', 'ETIMEDOUT',
 'Too Many Requests', 'rate limit', 'Baileys', 'stream', 'connection closed' // adicionado pra evitar flood
  ];
return ignorar.every(padrao => !msg.includes(padrao));
}

process.on('uncaughtException', async (err) => {
if (!deveReportarErro(err)) {
console.error("Erro ignorado:", err.message);
return;
}
const linha = err.stack?.split('\n')[1]?.trim() || 'Linha não identificada';
const msg = `⚠️ *ERRO OU BUG NO:* ${NomeDoBot}\n\n🕑 *Horario:* ${hora}\n📰 *Linha:* ${linha}\n⚙️ *Erro:* ${err.message}`;
try {
const jid = setting.numerodono.replace(/[^\d]/g, '') + '@s.whatsapp.net';
await client.sendMessage(jid, {text: msg});
} catch (e) {}
});

process.on('unhandledRejection', async (reason) => {
const erro = reason instanceof Error ? reason : new Error(reason);
if (!deveReportarErro(erro)) {
console.error("Erro ignorado:", erro.message);
return;
}
const linha = erro.stack?.split('\n')[1]?.trim() || 'Linha não identificada';
const msg = `⚠️ *ERRO OU BUG NO:* ${NomeDoBot}\n\n🕑 *Horario:* ${hora}\n📰 *Linha:* ${linha}\n⚙️ *Erro:* ${erro.message}`;
try {
const jid = setting.numerodono.replace(/[^\d]/g, '') + '@s.whatsapp.net';
await client.sendMessage(jid, {text: msg});
} catch (e) {}
});

global.safeSendMessage = async (jid, msg, options = {}) => {
try {
await client.sendMessage(jid, msg, options);
} catch (err) {
const jidDono = setting.numerodono.replace(/[^\d]/g, '') + '@s.whatsapp.net';
const tipo = Object.keys(msg)[0] || 'mensagem';
const resumo = msg[tipo]?.url || msg[tipo]?.caption || msg[tipo]?.text || 'sem conteúdo';
const erroMsg = `⚠️ *ERRO AO ENVIAR MENSAGEM*\n\n🕑 *Horário:* ${hora}\n📤 *Tipo:* ${tipo}\n📰 *Resumo:* ${resumo}\n⚙️ *Erro:* ${err.message}`;
await client.sendMessage(jidDono, {text: erroMsg}).catch(() => {});
console.error("Erro ao enviar mensagem:", err);
throw err;
}
};
}

iniciarClient()
