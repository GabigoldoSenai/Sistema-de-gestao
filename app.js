// CARREGANDO MODULOS
    // Modulos principais
    const express = require('express')
    const handlebars = require('express-handlebars')
    const app = express()
    const { engine } = require('express-handlebars')
    const path = require("path")

    // Definição de rotas
    const admin = require('./routes/admin.js')  

// CONFIGURAÇÕES
    // Handlebars
    app.engine('handlebars', engine({defaultLayout: 'main', runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
        },
    }),
    ),
    app.set('view engine', 'handlebars')
    //Public
    app.use(express.static(path.join(__dirname + "/public")))

// ROTAS
app.use('/admin', admin)

// OUTROS
const PORT = 8081
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})