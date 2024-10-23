Weather App
Este é um app full stack que fornece informações sobre o clima atual e a previsão dos próximos dias.

Requisitos
Node.js (versão 21.7.1 ou superior)
Dependências principais
Next.js: Framework React para a parte frontend.
TailwindCSS: Para estilização rápida e responsiva.
Shadcn: Usado para criar o dark mode.
Axios: Para fazer requisições entre o frontend e o backend.
Como rodar o projeto
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/weather-app.git
Instale as dependências em ambas as pastas (backend e frontend):

bash
Copiar código
cd frontend
npm install
cd ../backend
npm install
Configuração do .env:

Em cada pasta (backend e frontend), adicione um arquivo .env com as chaves de API apropriadas:

Para o backend:
API_KEY=ae606b0b8c5756e44a7c8cbe8d65310b
Para o frontend:
NEXT_PUBLIC_API_KEY=ae606b0b8c5756e44a7c8cbe8d65310b
Rodando o Backend
Entre na pasta backend e faça o build:

bash
Copiar código
npm run build
Para rodar o backend em modo de produção:

bash
Copiar código
npm run start
Para rodar o backend em modo de desenvolvimento (com hot reload):

bash
Copiar código
npm run start:dev
Rodando o Frontend
Entre na pasta frontend e inicie a aplicação:

Para desenvolvimento:

bash
Copiar código
npm run dev
Para produção:

bash
Copiar código
npm run start
Acessando a aplicação
Após iniciar o frontend, você pode acessar a aplicação no navegador pela URL:

arduino
Copiar código
http://localhost:3000
Tecnologias Utilizadas
Frontend
Next.js
TypeScript
TailwindCSS
Shadcn (Dark Mode)
Axios (Conexão com backend)
Backend
NestJS
TypeScript
APIs
O app utiliza duas APIs da OpenWeatherMap:

Para previsão do tempo (forecast):
https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API_KEY}

Para condições climáticas atuais:
https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}&lang=pt_br

Estrutura e Organização
A aplicação é modular, facilitando manutenção e escalabilidade. Cada parte é tipada com TypeScript, garantindo mais segurança no código.

Desde o início, foram usados commits organizados e branches separadas para o desenvolvimento, seguindo boas práticas.