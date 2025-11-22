# Ativar modo de alto desempenho

Seleciona plano de energia que prioriza performance do sistema.

## Listar planos disponíveis
```cmd
powercfg /list
```

## Ativar plano de alto desempenho
```cmd
powercfg /setactive SCHEME_MAX
```

## Verificar plano ativo
```cmd
powercfg /getactivescheme
```