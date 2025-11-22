# Redefinir proxy do WinHTTP

Remove configurações de proxy que podem afetar atualizações e rede.

## Resetar proxy
```cmd
netsh winhttp reset proxy
```

## Definir proxy manualmente (opcional)
```cmd
netsh winhttp set proxy "http://proxy.exemplo:8080"
```