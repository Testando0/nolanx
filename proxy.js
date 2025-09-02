
const { 'default': makeWASocket,downloadContentFromMessage, fetchLatestBaileysVersion, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap } = require('@whiskeysockets/baileys');

// Módulos:
const { Boom }  = require('@hapi/boom');
const AssemblyAI = require("assemblyai");
const axios = require('axios');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const crypto = require('crypto');
const util = require('util');
const PhoneNumber = require('awesome-phonenumber');
const { randomBytes } = require("crypto");
const P = require('pino');
const NodeCache = require("node-cache");
const linkfy = require('linkifyjs');
const request = require('request');
const ms = require('ms');
const os = require('os');
const ffmpeg = require('fluent-ffmpeg');
const fetch = require('node-fetch');
const qrterminal = require('qrcode-terminal');
const { exec, spawn, execSync } = require('child_process');
const moment = require('moment-timezone');
const colors = require("colors");
const yts = require('yt-search');
const infoSystem = require('os');

// Hora:
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');

// Funções:
const { sendVideoAsSticker, sendImageAsSticker } = require('./exports/sticker/rename.js');
const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./exports/sticker/rename2.js');
const { arcloud } = require('./exports/js/arcc.js') 
const { addLimit, getLimit } = require('./exports/js/limit.js');
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./exports/js/banned.js");
const { validmove, setGame } = require('./exports/tictactoe');
const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./exports/js/addcmd.js');
const { palavrasANA, quizanimais, enigmaArchive, garticArchives, whatMusicAr } = require('./exports/js/jogos.js');
const { wait, getExtension, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, temporizador, chyt, getBuffer, fetchJson, fetchText, createExif, getBase64, convertSticker, upload, nit, getpc, supre, recognize } = require('./exports/funcoes/functions.js'); // É necessário para algumas funções funcionar perfeitamente.
const { writeExifImg } = require('./exports/sticker/exif.js')
const { writeExif2 } = require('./exports/sticker/exif2.js')
const { infoClima } = require('./exports/funcoes/infoclima.js')
const { isFiltered, addFilter } = require('./exports/funcoes/functions.js');
const { MultiDownload } = require("./exports/funcoes/multidl.js");

// [JSON] - Funções Abaixo >>> :
const rgtake = JSON.parse(fs.readFileSync('./banco de dados/usuarios/take.json'));
const sotoy = JSON.parse(fs.readFileSync('./exports/json/sotoy.json'));
const piadas = JSON.parse(fs.readFileSync('./exports/json/piadas.json'));
const countMessage = JSON.parse(fs.readFileSync('./dono/media/countmsg.json'));
const comandos = JSON.parse(fs.readFileSync('./dono/media/comandos.json'));
const daily = JSON.parse(fs.readFileSync('./banco de dados/usuarios/diario.json'));
const nescessario = JSON.parse(fs.readFileSync('./dono/nescessario.json'));
const premium = JSON.parse(fs.readFileSync('./banco de dados/usuarios/premium.json'));
const ban = JSON.parse(fs.readFileSync('./banco de dados/usuarios/banned.json'));
const muted = JSON.parse(fs.readFileSync('./banco de dados/usuarios/muted.json'))
const limitefll = JSON.parse(fs.readFileSync('./banco de dados/usuarios/flood.json'));
const joguinhodavelhajs = JSON.parse(fs.readFileSync('./banco de dados/usuarios/joguinhodavelha.json'));
const aluguel = JSON.parse(fs.readFileSync("./banco de dados/grupos/aluguel/aluguel.json"))
const grupos = JSON.parse(fs.readFileSync("./banco de dados/grupos/aluguel/grupos.json"))
const chaves = JSON.parse(fs.readFileSync("./banco de dados/grupos/aluguel/chaves.json"))
const { insert, response } = require('./exports/funcoes/simi.js');
const { randomCantadas } = require('./exports/js/cantadas.js');
const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./banco de dados/usuarios/joguinhodavelha2.json'));
const autorpg = JSON.parse(fs.readFileSync("./banco de dados/usuarios/SystemRPG/autorpg.json"));
const nolanrpg = JSON.parse(fs.readFileSync("./banco de dados/usuarios/SystemRPG/nolanrpg.json"));
const bcbet = JSON.parse(fs.readFileSync("./banco de dados/usuarios/SystemRPG/1xbcbet.json"));
const minerar = JSON.parse(fs.readFileSync("./banco de dados/usuarios/SystemRPG/minerar.json"));
const coderpg = JSON.parse(fs.readFileSync("./banco de dados/usuarios/SystemRPG/coderpg.json"));
const elitepasse = JSON.parse(fs.readFileSync("./banco de dados/usuarios/SystemRPG/passerpg.json"));
const cavalosrpg = JSON.parse(fs.readFileSync("./banco de dados/usuarios/SystemRPG/cavalosrpg.json"));
const galosrpg = JSON.parse(fs.readFileSync("./banco de dados/usuarios/SystemRPG/galosrpg.json"));
const roubosrpg = JSON.parse(fs.readFileSync("./banco de dados/usuarios/SystemRPG/roubosrpg.json"));
const antispam = JSON.parse(fs.readFileSync('./dono/media/antispam.json'));
const anotar = JSON.parse(fs.readFileSync("./banco de dados/func/anotar.json"));
const setting = JSON.parse(fs.readFileSync('./dono/config.json'));
const logoslink = JSON.parse(fs.readFileSync('./dono/links_img.json'));
const Limit_CMD = JSON.parse(fs.readFileSync("./banco de dados/func/limitarcmd.json"))
const ftmenu = JSON.parse(fs.readFileSync("./dono/logos.json"));
const black_ = JSON.parse(fs.readFileSync("./banco de dados/grupos/avisos.json"));
const level2 = JSON.parse(fs.readFileSync("./banco de dados/usuarios/leveling.json"));
const votacao = JSON.parse(fs.readFileSync('./banco de dados/func/votacao/voting.json'))

// Arquivos - JS - Menus / Informações:
const { linguagem, mess, getInfo } = require('./dono/lib');
const { psycatgames } = require('./exports/funcoes/psycatgames.js')
const { destrava, destrava2 } = require('./exports/funcoes/destrava.js');
const { tabela } = require('./exports/js/tabela.js');
const { conselhob } = require('./exports/js/conselhob.js');
const { fatos } = require('./exports/js/fatos.js');
const { palavrasc } = require('./exports/js/conselhos.js');

const { getMinesPositions, MinesHelp } = require('./exports/js/mines.js')
const mines = JSON.parse(fs.readFileSync('./banco de dados/grupos/games/mines.json'))

// Deletar Arquivos:
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

// CONVERTER BYTES EM KB / MB / GB / TB
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
if(bytes == 0) {
return "n/a";
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
if(i == 0) {
return bytes + " " + sizes[i];
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

// ANTI NOME MODIFICADA / EMOJI
function ANT_LTR_MD_EMJ(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

/* Essa função serve para transformar segundos em hora, minutos e segundos... */
function kyun(seconds){
function pad(s){return (s < 10 ? "0" : "") + s};
var horas = Math.floor(seconds / (60*60) % (24));
var minutos = Math.floor(seconds % (60*60) / 60);
var segundos = Math.floor(seconds % 60);
return `${pad(horas)}h, ${pad(minutos)}m e ${pad(segundos)}s.`;
}

/* Função para transformar segundos em dia, hora, minutos e segundos... */
function TimeCount(seconds){
function pad(s){return (s < 10 ? "0" : "") + s};
var dias = Math.floor(seconds / (60*60) / (24));
var horas = Math.floor(seconds / (60*60) % (24));
var minutos = Math.floor(seconds % (60*60) / 60);
var segundos = Math.floor(seconds % 60);
return `${pad(dias)}d, ${pad(horas)}h, ${pad(minutos)}m e ${pad(segundos)}s.`;
}

// FUNÇÃO DO BAILEYS PRA PUXAR MÍDIA ENVIADA, E EXECUTAR AÇÃO...
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType);
let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

// Tudo abaixo await sleep(1000) vai demorar 1 segundo pra funcionar, 1000 é igual 1 segundo..
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

// ENVIAR FIGU EM URL
const enviarfiguUrl = async (client, from, link, mr) => {
ranp = getRandom('.gif');
rano = getRandom('.webp');
ini_buffer = `${link}`;
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
DLT_FL(ranp);
buff = fs.readFileSync(rano);
client.sendMessage(from, {sticker: buff}, {quoted: mr}).catch(() => {
return console.log("Erro..");
});
DLT_FL(rano);
});
};

const sendPoll = (client, id, name = '', values = [], selectableCount = 1) => { 
return client.sendMessage(id, {poll: {name, values, selectableCount}, messageContextInfo: { messageSecret: randomBytes(32)}}, {id, options: {userJid: client?.user?.id}}).catch(() => {
return console.log(console.error);
});
}


const RSM_FUNC = async(client, nmrdn_dono2, hora120, upsert) => {
switch(hora120) {
case '07:00:00': case '12:00:00': case '18:00:00': case '00:00:00':
exec("cd database/qr-code && rm -rf pre-key* sender* session*");
setTimeout(async () => {
file = require.resolve("./connect.js");
delete require.cache[file];
require(file);
}, 1200);
console.log(colors.blue("Reiniciando para diminuir o peso do qrcode.."))
break;
}
if(upsert?.messages == undefined) return
}

// Simih:
const simih = async (text) => {
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+text+"&lc=pt"})
return datasimi.message
} catch (e){
return
}}

function obeso(peso, altura) {
 return Number(parseFloat(peso) / (parseFloat(altura) ** 2)).toFixed(2)
}

function capitalizeFirstLetter(string) {
 return string.charAt(0).toUpperCase() + string.substring(1)
}

const countDays = (date1, date2) => {
if (!(date1 || date2)) return 0
date1 = new Date(date1[1]+"/"+date1[0]+"/"+date1[2])
date2 = new Date(date2[1]+"/"+date2[0]+"/"+date2[2])
const timeDiff = Math.abs(date2.getTime() - date1.getTime());
const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
return diffDays || 0
}

const timeDate = (tempo, now, x = true) => {
if (Number(now) && x) return moment(now * 1000).tz('America/Sao_Paulo').format(tempo)
if (Number(now)) return moment(now).tz('America/Sao_Paulo').format(tempo)
return moment.tz('America/Sao_Paulo').format(tempo)
}

module.exports = { PhoneNumber, P, fs, util, Boom, axios, linkfy, request, ms, ffmpeg, fetch, qrterminal, exec, spawn, yts, execSync, limitefll, moment, time, hora, date, infoSystem, RSM_FUNC, getBuffer, convertSticker, fetchJson, fetchText, getBase64, createExif, writeExifImg, addLimit, getLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner, banner2, banner3, temporizador, chyt, simih, antispam, anotar, sotoy, countMessage, comandos, daily, muted, nescessario, premium, ban, black_, joguinhodavelhajs, joguinhodavelhajs2, setting, logoslink, ftmenu, linguagem, getInfo, mess, destrava, destrava2, tabela, conselhob, fatos, palavrasc, recognize, colors, cheerio, NodeCache, kyun, TimeCount, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2,sendImageAsSticker2, enviarfiguUrl, sendPoll, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, convertBytes, arcloud, infoClima, os, garticArchives, enigmaArchive, insert, response, randomCantadas, isFiltered, addFilter, mines, getMinesPositions, MinesHelp, psycatgames, MultiDownload, AssemblyAI, nolanrpg, bcbet, minerar, cavalosrpg, elitepasse, coderpg, galosrpg, roubosrpg, rgtake, piadas, autorpg, whatMusicAr, level2, votacao, chaves, grupos, aluguel, obeso, countDays, timeDate, writeExif2, Limit_CMD, capitalizeFirstLetter }