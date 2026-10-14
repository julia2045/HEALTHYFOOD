const express = require('express');
const router = express.Router();
require('dotenv').config();

// IMPORTAR BIBLIOTECAS
// cria o token de login persistente
const jwt = require('jsonwebtoken');
// compara senha criptografada
const bcrypt = require('bcrypt');
const pool = require('../db');

const JWT_SECRET = process.env.JWT_SECRET || 'seuSegredoAqui';
if (!process.env.JWT_SECRET) {
  console.warn('JWT_SECRET não definido. Defina em .env para maior segurança.');
}

// CRIAR ROTA DE POST
router.post('/login', async (req, res) => {
  try {
    // Normaliza o email para evitar diferença de caixa e espaços antes da busca no banco.
    const email = String(req.body?.email || '').trim().toLowerCase();
    const password = String(req.body?.password || '');

    // Valida se o usuário enviou email e senha antes de consultar o banco.
    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    console.log('Login attempt for email:', email);

    // Busca a conta pela tabela accounts usando email em caixa baixa para evitar inconsistência.
    const accountRes = await pool.query(
      'SELECT id, name, email, password_hash, role FROM accounts WHERE LOWER(email) = LOWER($1)',
      [email],
    );

    console.log('accountRes rowCount:', accountRes?.rowCount);
    console.log('accountRes rows sample:', accountRes?.rows?.[0]);

    // Se não encontrar a conta, responde com erro 401 para login inválido.
    if (!accountRes || accountRes.rowCount === 0) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    const account = accountRes.rows[0];

    // Garante que a conta tenha uma senha cadastrada antes de comparar.
    if (!account.password_hash) {
      return res.status(401).json({ error: 'Conta sem senha cadastrada' });
    }

    // Compara a senha digitada com o hash salvo no banco usando bcrypt.
    const isPasswordValid = await bcrypt.compare(password, account.password_hash);

    console.log('isPasswordValid:', isPasswordValid);

    // Se a senha não bater, responde com autenticação inválida.
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    // Usa o nome da própria conta como origem principal do nome do usuário.
    const fullName = account.name ? String(account.name).trim() : '';
    const firstName = fullName ? fullName.split(/\s+/)[0] : account.email.split('@')[0];

    let registration_completed = false;

    if (account.role === 'user') {
      //verifico se o usuario completou o registro na tabela
      const userRes = await poll

    // Gera o token JWT que será guardado no frontend para manter a sessão.
    const token = jwt.sign({ id: account.id, email: account.email }, JWT_SECRET, { expiresIn: '1d' });

    // Retorna o token e os dados do usuário para o frontend salvar no contexto de autenticação.
    return res.json({
      token,
      user: {
        id: account.id,
        name: firstName,
        email: account.email,
        role: account.role,

      },
    });
  } catch (error) {
    // Captura qualquer erro inesperado e devolve uma resposta clara para o cliente.
    console.error('ERRO /auth/login:', error);
    return res.status(500).json({ error: 'Erro no login', details: error.message });
  }
});

module.exports = router;
