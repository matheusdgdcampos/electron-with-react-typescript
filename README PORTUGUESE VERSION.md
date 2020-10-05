<p align="center">
  <img src=".github/electron-with-react-typescript.png" width="500" heigh="200" alt="banner" />
</p>

# Electron with React + Typescript

Electron + React + Typescript = :heart_eyes:

---

Esse é um pequeno projeto integrando Electron + React + Typescript, uma estrutura pronta para desenvolvimento.

## Scripts disponíveis:

- [X] **build:**
Cria um build de produção do projeto.

- [X] **build-electron:**
Copia, cria um diretório e o modifica com as configurações necessárias do electron.

- [X] **package:**
Cria um instalador do projeto, pronto para produção.

- [X] **react:pure:**
Executa o React sem a instância do Electron, ideal para desenvolvimento e estilização de paginas e de componentes.

---

## Instruções para criar um novo instalador do App:

- [X] **Primeiro script: build**
É necessário que a pasta de build seja criada primeiro para seguir com os próximos passos.

- [X] **Segundo script: build-electron**
Este script cria um novo diretório, copia as configurações do electron para o diretório criado e executa as modificações necessárias para a próxima etapa.

- [X] **Last script: package**
Agora deixe todo o trabalho pesado para o electron-build, ele irá realizar todo o trabalho de criar uma nova instância do instalador do App.

---

:mega: **ATENÇÃO:**
Em src/utils/prepareFilesToPackage.jsm, está os script build-electron **NÃO EXCLUA ESTE ARQUIVO!** ou o seu script package irá quebrar seu app.

Dúvidas? Entre em contato comigo!

:mailbox: matheus.rj.ig@gmail.com