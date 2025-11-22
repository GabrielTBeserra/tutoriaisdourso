# Limpar cache de miniaturas

Remove caches de miniaturas corrompidos para corrigir ícones quebrados.

## Parar o Explorer
```powershell
Stop-Process -Name explorer -Force
```

## Apagar cache de miniaturas
```powershell
Remove-Item "$env:LocalAppData\Microsoft\Windows\Explorer\thumbcache_*" -Force -ErrorAction SilentlyContinue
```

## Iniciar o Explorer
```powershell
Start-Process explorer.exe
```