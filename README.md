## Lista de comandos usados

- npm init -y: Cria um arquivo package.json com as configurações padrão.
- npm i typescript: Instala o TypeScript como dependência do projeto.
- npx tsc --init: Gera um arquivo tsconfig.json com a configuração do TypeScript.
- npm i ts-node: Instala o ts-node para rodar arquivos TypeScript diretamente.
- npx tsc: Compila os arquivos TypeScript para JavaScript usando o tsconfig.json.

# Código do tsconfig.json

```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## Scripts que estão sendo utilizados no package.json

- "build": "npx tsc"
- "dev": "npx ts-node ./src/server.ts"

## Configurando um servidor web

- npm install express
- npm i --save-dev @types/express

## Instalando o ts-node-dev

O ts-node-dev nos ajuda a ter mais produtividade uma vez que ele reinicializar o servidor automaticamente a medida que salvamos o projeto.

- npm i ts-node-dev --save-dev

Depois de instalado, basta atualizar o script (dentro de package.json) de execução do projeto para:

```
  "dev": "npx ts-node-dev ./src/server.ts"
```
