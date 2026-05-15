# Referencia: converter `.MOV` para `.MP4`

Para usar videos no sistema com mais compatibilidade, a melhor opcao e converter arquivos `.MOV` do iPhone para `.MP4` usando:

- video em `H.264`
- audio em `AAC`
- container `.mp4`

Esse formato costuma funcionar melhor em:

- navegadores
- celular
- QNAP
- players web

## Conversao recomendada

```bash
ffmpeg -i video.mov -c:v libx264 -c:a aac -movflags +faststart video.mp4
```

Esse comando gera um arquivo mais compativel e mais adequado para reproducao no sistema.

## Conversao com bom equilibrio entre qualidade e tamanho

```bash
ffmpeg -i video.mov -c:v libx264 -crf 23 -preset medium -c:a aac -movflags +faststart video.mp4
```

Boa opcao para videos curtos de demonstracao de exercicios.

## Conversao reduzindo resolucao

```bash
ffmpeg -i video.mov -vf "scale=1280:-2" -c:v libx264 -crf 23 -preset medium -c:a aac -movflags +faststart video.mp4
```

Use quando o arquivo estiver muito pesado.

## Recomendacao pratica

Para este sistema, o mais indicado e:

- videos curtos
- resolucao `720p` ou `1080p`
- codec `H.264`
- saida final em `.mp4`

## Observacao importante

Na visualizacao `file://`, uploads nao sao salvos. Para testar upload de video, use a aplicacao rodando com servidor (`http://...` ou Docker/QNAP).
