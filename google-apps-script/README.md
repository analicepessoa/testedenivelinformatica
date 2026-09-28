# Envio do relatório pela conta Google

Este diretório guarda a cópia do código usado no Google Apps Script. O projeto recebe o PDF técnico pronto, confirma se a unidade é Pindamonhangaba ou Taubaté e manda o anexo apenas para o e-mail autorizado daquela unidade.

## Publicação inicial

1. Entre em https://script.google.com/ usando a conta que fará os envios.
2. Crie um projeto e substitua o conteúdo de `Code.gs` por este arquivo.
3. Clique em **Implantar > Nova implantação > Aplicativo da Web**.
4. Execute como: **sua conta**. Acesso: **qualquer pessoa**.
5. Autorize as permissões de envio de e-mail quando o Google solicitar.
6. Copie a URL terminada em `/exec` e informe-a no arquivo `dist/app.js` do site.

O Apps Script não guarda os dados dos alunos. Ele somente usa os dados recebidos para montar o e-mail e enviar o PDF.
