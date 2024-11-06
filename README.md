# Weather App

Este é um app full stack que fornece informações sobre o clima atual e a previsão dos próximos dias.

## Requisitos

- Node.js (versão 21.7.1 ou superior)

## Dependências principais

- **Next.js**: Framework React para a parte frontend.
- **TailwindCSS**: Para estilização rápida e responsiva.
- **Shadcn**: Usado para criar o dark mode.
- **Axios**: Para fazer requisições entre o frontend e o backend.

## Como rodar o projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/weather-app.git

2. **Instale as dependências em ambas as pastas (backend e frontend):**
       
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install

3. **Configuração do .env:**
   Em cada pasta (backend e frontend), adicione um arquivo .env com as chaves de API apropriadas:
   <ul>
     <li>
       Para o backend:
       
       API_KEY=ae606b0b8c5756e44a7c8cbe8d65310b
     </li>

     <li>
       Para o frontend:
       
       NEXT_PUBLIC_API_KEY=ae606b0b8c5756e44a7c8cbe8d65310b
     </li>
   </ul>

# Rodando o Backend
<ol>
  <li>
     Entre na pasta backend e faça o build:

      npm run build
  </li>

  <li>
    Para rodar o backend em modo de produção:

    npm run start
  </li>

  <li>
    Para rodar o backend em modo de desenvolvimento (com hot reload):

    npm run start:dev
  </li>
</ol>

# Rodando o Frontend
<ol>
  <li>
     Entre na pasta frontend e builde a aplicação:

      npm run build
  </li>
  <li>
     Entre na pasta frontend e inicie a aplicação:

      npm run dev
  </li>

  <li>
    Para produção:

    npm run start
  </li>
</ol>

# Acessando a aplicação
  Após iniciar o frontend, você pode acessar a aplicação no navegador pela URL:
```bash
   http://localhost:3000
```
# Tecnologias Utilizadas
## Frontend
<ul>
  <li>
    Next.js
  </li>
  <li>
    TypeScript
  </li>
  <li>
    TailwindCSS
  </li>
  <li>
    Axios (Conexão com backend)
  </li>
</ul>

## Backend
<ul>
  <li>
    NestJS
  </li>
  <li>
    TypeScript
  </li>
</ul>

# APIs
O app utiliza duas APIs da OpenWeatherMap:
<ul>
  <li>
    Para previsão do tempo (forecast):

    https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API_KEY}
  </li>
  <li>
    Para condições climáticas atuais:

    https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}&lang=pt_br
  </li>
</ul>

# Estrutura e Organização

A aplicação é modular, facilitando manutenção e escalabilidade. Cada parte é tipada com TypeScript, garantindo mais segurança no código. Desde o início, foram usados commits organizados e branches separadas para o desenvolvimento, seguindo boas práticas.

# Design
Utilizando TailwindCSS, a biblioteca de ícones do Next e a biblioteca shadcn, o design foi mantido simples, mas elegante — algo que busco em meus projetos. O layout foi levemente inspirado em alguns dos meus projetos anteriores, criando uma interface limpa e funcional.
