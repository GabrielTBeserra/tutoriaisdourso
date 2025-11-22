# Limpar logs de eventos

Libera espaço apagando logs antigos de eventos do Windows.

## Listar todos os logs
```powershell
wevtutil el
```

## Limpar todos os logs (Admin)
```powershell
wevtutil el | ForEach-Object { wevtutil cl $_ }
```