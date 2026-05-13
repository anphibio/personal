# Paulo Hilário Trainer no QNAP Container Station

Este projeto roda com dois containers:

- `app`: aplicação Node/Express que entrega a interface web e salva os dados.
- `db`: PostgreSQL 16 com volume persistente.

## Arquivos principais

- `Dockerfile`: cria a imagem da aplicação.
- `docker-compose.yml`: sobe aplicação e banco.
- `server.js`: API e servidor web.
- `seed-data.json`: dados iniciais inseridos no banco na primeira execução.

## Contas iniciais

- Personal: `personal@paulohilario.com` / `123456`
- Aluno Ana: `ana@aluno.com` / `123456`
- Aluno Marcos: `marcos@aluno.com` / `123456`

No primeiro acesso, o sistema solicita a troca da senha inicial.

## Passo a passo no QNAP

1. Abra o **File Station** no QNAP.
2. Crie uma pasta para o projeto, por exemplo:
   `/share/Container/paulo-hilario-trainer`
3. Envie todos os arquivos deste projeto para essa pasta, incluindo:
   `app.js`, `index.html`, `styles.css`, `server.js`, `package.json`, `Dockerfile`, `docker-compose.yml`, `seed-data.json` e a pasta `assets`.
4. Abra o **Container Station**.
5. Vá em **Applications** ou **Create Application**.
6. Escolha a opção para criar usando **Docker Compose**.
7. Cole o conteúdo do arquivo `docker-compose.yml`.
8. Crie uma variável de ambiente ou arquivo `.env` com a senha do banco:
   `POSTGRES_PASSWORD=sua_senha_forte`
   No seu caso, use a senha que você definiu para o banco no ambiente do QNAP.
9. Crie a aplicação.
10. Aguarde os dois containers ficarem como **Running**.
11. Acesse no navegador:
   `http://IP_DO_SEU_QNAP:8085`

## Observações importantes

- A porta externa configurada é `8085`. Se ela já estiver em uso no QNAP, altere no Compose:
  `"8085:3000"` para, por exemplo, `"8090:3000"`.
- O banco fica salvo no volume Docker `paulo_trainer_pgdata`.
- Para resetar os dados para a demo inicial, apague o volume `paulo_trainer_pgdata` e suba a aplicação novamente.
- O botão **Restaurar demo** dentro do sistema restaura os dados e salva novamente no banco.

## Teste de saúde

Depois de subir, teste:

`http://IP_DO_SEU_QNAP:8085/api/health`

Resposta esperada:

```json
{
  "ok": true,
  "database": "connected"
}
```

## Backup do banco

No Container Station, mantenha o volume `paulo_trainer_pgdata` preservado. Para backup completo, exporte ou faça backup dos volumes Docker pelo próprio QNAP/Container Station.
