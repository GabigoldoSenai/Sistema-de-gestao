// CARREGANDO MÓDULOS
    // Módulos principais
    const express = require('express')
    const router = express.Router()

// ROTAS
    // Login
    router.get('/login', (req, res) => {
        res.render('admin/login', {
            title: 'Login Page',
            style: 'login.css',
            script: 'login.js',
            showNavbar: false,
            showHeader: false
        })
    })

    // Cadastro
    router.get('/register', (req, res) => {
        res.render('admin/register', {
            title: 'Register Page',
            style: 'register.css',
            script: 'register.js',
            showNavbar: false,
            showHeader: false
            
        })
    })

    // Home
    router.get('/', (req, res) => {
        res.render('admin/home', {
            title: 'Home Page',
            style: 'home-dashboard.css',
            script: 'home-dashboard.js',
            showNavbar: true,
            showHeader: true
        })
    })

    // Calendário
    router.get('/calendar', (req, res) => {
        res.render('admin/calendar', {
            title: 'Calendar Page',
            style: 'calendar-dashboard.css',
            script: 'calendar-dashboard.js',
            showNavbar: true,
            showHeader: true
        })
    })

    // Pedidos
    router.get('/requests', (req, res) => {
        res.render('admin/requests', {
            title: 'Requests Page',
            style: 'requests-dashboard.css',
            script: 'requests-dashboard.js',
            showNavbar: true,
            showHeader: true
        })
    })

    // Finanças
    router.get('/finance', (req, res) => {
        res.render('admin/finance', {
            title: 'Finance Page',
            style: 'finance-dashboard.css',
            script: 'finance-dashboard.js',
            showNavbar: true,
            showHeader: true
        })
    })

    // Estoque
    router.get('/stock', (req, res) => {
        res.render('admin/stock', {
            title: 'Stock Page',
            style: 'stock-dashboard.css',
            script: 'stock-dashboard.js',
            showNavbar: true,
            showHeader: true
        })
    })
    
module.exports = router