# Microfrontend Container

Este repositório contém o **container** principal responsável por orquestrar os microfrontends da aplicação utilizando **Module Federation** com **Webpack 5**. Ele integra as partes independentes da aplicação em uma experiência única e fluida.

---

## 🧩 Microfrontends orquestrados

O container carrega dinamicamente os seguintes microfrontends:

- [`home`](https://home-vert-five.vercel.app) – Tela inicial da aplicação
- [`nav-bar`](https://nav-bar-vert.vercel.app) – Barra de navegação superior
- [`statement`](https://statement-vert.vercel.app) – Extrato bancário e transações

Esses microfrontends são consumidos via `Module Federation`, e integrados utilizando `React Router`.

---

## 🚀 Tecnologias utilizadas

- **React** – Biblioteca principal de UI
- **TypeScript** – Tipagem estática e segura
- **Webpack 5** + **Module Federation** – Compartilhamento e consumo remoto de código
- **CRACO** – Customização do Create React App sem ejetar
- **Tailwind CSS** – Estilização utilitária moderna
- **React Router** – Gerenciamento de rotas
- **Zustand** – Gerenciamento de estado local leve
- **Sonner** – Sistema de notificações (toast)

---

## ⚙️ Estrutura de pastas

```
src/
├── components/     # Componentes locais (ex: Sidebar)
├── services/       # Serviços como autenticação
├── store/          # Zustand para gerenciamento de estado
├── App.tsx         # Integração entre os microfrontends
└── index.tsx       # Ponto de entrada da aplicação
```

---

## ▶️ Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/paulamacedof/microfrontend-container.git
cd microfrontend-container
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o projeto:

```bash
npm start
```

O container estará disponível em:  
🌐 [http://localhost:3000](http://localhost:3000)

⚠️ **Importante**: para funcionar corretamente, os microfrontends devem estar rodando nas seguintes portas:

- `home`: http://localhost:3001
- `statement`: http://localhost:3002
- `nav-bar`: http://localhost:3003

---

## 🌐 Produção

Em produção, os microfrontends são carregados a partir das suas URLs públicas (Vercel), conforme definido no `ModuleFederationPlugin`. O container pode ser hospedado em qualquer serviço de hospedagem estática.

---

## 📦 Build para produção

Para gerar o bundle de produção:

```bash
npm run build
```

Isso criará a pasta `build/` pronta para deploy.

---

## 🤝 Contribuindo

Contribuições são bem-vindas!  
Sinta-se à vontade para abrir issues ou pull requests.

---

## 📋 Instruções de uso

Para utilizar o container, certifique-se de que todos os microfrontends estão operacionais e acessíveis nas portas especificadas. Após iniciar o container, você pode navegar entre os microfrontends utilizando a barra de navegação superior. A interação entre os microfrontends é feita de forma fluida, garantindo uma experiência de usuário integrada.

---

## 🔔 Nota sobre o backend

> **NOTA:**  
> O backend da aplicação está hospedado no free tier da plataforma [Render](https://render.com), que pode hibernar o servidor por tempo de inatividade.
>
> Nesse caso, é possível que a API devolva um erro com **Status 504** nos primeiros acessos.
>
> Caso isso ocorra, _tente novamente em alguns segundos_ enquanto o servidor é reativado.
