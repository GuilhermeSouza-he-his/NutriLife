# 🥗 Plataforma de Agendamento Nutricional

Projeto **Full Stack** voltado para a área de **Nutrição**, desenvolvido com foco em agendamento online, gestão de profissionais e pagamentos digitais.  
Este projeto foi criado como parte de um **processo seletivo / avaliação acadêmica**, demonstrando conhecimentos em front-end, back-end, banco de dados, autenticação e integração com meios de pagamento.

---

## 📌 Visão Geral do Projeto

A aplicação permite que usuários encontrem **nutricionistas especializados** de acordo com sua necessidade (ex: nutrição esportiva, infantil, clínica, etc.), visualizem informações detalhadas sobre cada profissional e realizem **agendamentos online** com data e horário disponíveis.

Além disso, o sistema conta com **painel administrativo** e **painel para nutricionistas**, tornando o projeto completo e próximo de um cenário real de mercado.

---

## 👤 Funcionalidades do Usuário

- Cadastro e login de usuário
- Visualização de nutricionistas por especialidade
- Visualização de informações detalhadas do nutricionista:
  - Formação
  - Especialidade
  - Local de atendimento
  - Descrição profissional
- Agendamento de consultas com data e horário pré-definidos
- Pagamento online via **Stripe**
- Cancelamento de agendamentos
- Visualização de consultas agendadas

---

## 🧑‍⚕️ Funcionalidades do Nutricionista

- Login exclusivo
- Visualização de:
  - Total de pacientes
  - Total de ganhos
  - Lista de agendamentos
- Acompanhamento das consultas marcadas

---

## 🛠️ Funcionalidades do Administrador

- Login exclusivo de administrador
- Cadastro e gerenciamento de nutricionistas
- Controle geral da plataforma
- Visualização de dados financeiros e operacionais

---

## 🔐 Segurança e Autenticação

### 🔒 Uso do **bcrypt**
As senhas dos usuários, nutricionistas e administradores são criptografadas utilizando **bcrypt**.

**Motivo da escolha:**
- Proteção contra ataques do tipo **Rainbow Table**
- Uso de *salt* automático, dificultando ataques de força bruta
- Mesmo que o banco de dados seja comprometido, as senhas não ficam expostas em texto puro

### 🔑 JWT (JSON Web Token)
- Utilizado para autenticação e autorização
- Garante que apenas usuários autenticados acessem rotas protegidas
- Tokens enviados via headers nas requisições

---

## 💳 Pagamentos

### Stripe ✅
- Totalmente funcional
- Utilizado para pagamentos online das consultas

📌 **Cartão de teste do Stripe**:
4000 0035 6000 0008

(Data futura, qualquer CVC)

### Razorpay ⚠️
- Implementado no código
- **Não funcional no ambiente final**, pois o Razorpay aceita apenas contas da Índia
- Mantido no projeto para fins de aprendizado e demonstração técnica

---

## ☁️ Upload de Imagens

- Utilização do **Cloudinary**
- Upload de imagens de perfil dos nutricionistas
- Armazenamento em nuvem, evitando sobrecarga no servidor

---

🧰 Tecnologias Utilizadas

## Frontend

 - React + Vite

   Escolhidos pela alta performance, carregamento rápido e melhor experiência de desenvolvimento.

 - React Router DOM

   Controle de rotas e páginas protegidas.

 - Context API

   Gerenciamento de estado global (usuário autenticado, token, dados compartilhados).

 - Axios

   Comunicação com a API backend.

 - Tailwind CSS

   Estilização rápida, responsiva e padronizada.

 - React Toastify

   Feedback visual para ações do usuário (sucesso, erro, avisos).

 - i18next + react-i18next

   Internacionalização da aplicação (troca de idiomas).

## Backend

Node.js + Express

MongoDB + Mongoose

Banco NoSQL ideal para aplicações escaláveis e com dados flexíveis.

JWT (jsonwebtoken)

Autenticação segura baseada em tokens.

bcrypt

Criptografia de senhas.

Cloudinary

Upload e gerenciamento de imagens (ex: foto do nutricionista).

Multer

Upload de arquivos.

Validator

Validação de dados de entrada.

CORS

Controle de acesso entre frontend e backend.

Dotenv

Gerenciamento de variáveis de ambiente.

Stripe

Pagamentos online.

Razorpay

Implementado parcialmente (restrito à Índia).

---

🚀 Melhorias Futuras

 - Sistema de avaliações dos nutricionistas

 - Chat em tempo real entre usuário e profissional

 - Notificações por e-mail

 - Dashboard com gráficos

 - Suporte a mais métodos de pagamento

 - Sistema de recuperação de senha

 - Melhor controle de horários dinâmicos

🚀 Como Rodar o Projeto Localmente
🔧 Pré-requisitos

 - Node.js

 - MongoDB

 - Conta no Stripe

 - Conta no Cloudinary

 📦 Clonar o repositório

 git clone https://github.com/seu-usuario/seu-repositorio.git

 📁 Backend

    cd backend
    npm install

Crie um arquivo .env com:

CURRENCY = ""
JWT_SECRET=""

# Admin Panel Credentials
ADMIN_EMAIL = ""
ADMIN_PASSWORD = ""

# MongoDB Setup ( required )
MONGODB_URI = ''

# Cloudinary Setup ( required )
CLOUDINARY_NAME = ""
CLOUDINARY_API_KEY = ""
CLOUDINARY_SECRET_KEY = ""

# Razorpay Payment Integration
RAZORPAY_KEY_ID = "------ Razorpay Key Id here ------"
RAZORPAY_KEY_SECRET = "------ Razorpay Key Secret here ------"

# Stripe Payment Integration
STRIPE_SECRET_KEY=""

# Rodar o backend:

npm run dev

🎨 Frontend

cd frontend
npm install
npm run dev

📌 Observações Finais

Este projeto foi desenvolvido com foco em:

. Boas práticas de desenvolvimento

. Segurança

. Organização de código

. Simulação de um sistema real de mercado

Mesmo funcionalidades não ativas (como Razorpay) foram mantidas para demonstrar conhecimento técnico e capacidade de integração com APIs externas.

👨‍💻 Autor: Guilherme Souza
Projeto desenvolvido para fins acadêmicos e profissionais.

🔥 Obrigado pela oportunidade!