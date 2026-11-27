# JAVASCOD — Warzone Meta Intel

PWA independente para acompanhar o meta de Call of Duty: Warzone em iPhone e Android.

## Recursos
- Ranking e tier list pelo feed público MetaRadar.
- Busca e filtros por tier e categoria.
- Builds recomendadas e comparador simples.
- Links para fichas individuais com estatísticas detalhadas.
- PWA instalável e cache offline básico.
- GitHub Actions sincroniza o feed a cada 6 horas e publica no GitHub Pages.

## Limite dos dados
O feed público oferece rankings, tiers, categorias, links e builds. Dano, TTK, ADS e alcance não são campos garantidos no JSON; o app direciona às fichas individuais da fonte em vez de inventar valores.

## Fonte
MetaRadar: https://metaradar.gg/ | Documentação: https://metaradar.gg/developers

## Publicar
1. Em Settings → Pages, escolha GitHub Actions como fonte.
2. Em Actions, execute Sync Warzone meta manualmente.
3. O deploy publica em https://DantasJavas.github.io/JAVASCOD/.
