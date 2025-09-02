const fs = require("fs-extra")
const sabrpg = JSON.parse(fs.readFileSync("./banco de dados/usuarios/SystemRPG/natsurpg.json"));

exports.AdicionarGold = (UserID, ValorA) => {
userNumber = sabrpg.map(i => i.id).indexOf(UserID)
sabrpg[userNumber].money += Number(ValorA)
fs.writeFileSync("./banco de dados/usuarios/SystemRPG/natsurpg.json", JSON.stringify(sabrpg))
}

exports.RemoverGold = (UserID, ValorR) => {
userNumber = sabrpg.map(i => i.id).indexOf(UserID)
sabrpg[userNumber].money -= Number(ValorR)
fs.writeFileSync("./banco de dados/usuarios/SystemRPG/natsurpg.json", JSON.stringify(sabrpg))
}

/* Agradeço ao @Matheuzinho, criador do Black System pelo novo sistema de Adicionar e remover golds/dinheiro/coins e aos usuários. 
    -- As modificações estão sendo aplicadas por @jeova_alves7, como juntamente ao designer de todas as definições e mensagens que foram implantadas no BlackSystem. 
• Todos os direitos reservados ao criador do sistema Matheus © 2023
*/   