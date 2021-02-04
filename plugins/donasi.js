let handler = async m => m.reply(`
╭─「 Donasi • Pulsa + OVO」
│ • Tree: 628998839509
| • OVO : 628998839509
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
