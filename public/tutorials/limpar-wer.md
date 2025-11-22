# Limpar relatórios de erro (WER)

Remove dumps/relatórios antigos do Windows Error Reporting.

## Remover CrashDumps
```powershell
Remove-Item "$env:LocalAppData\CrashDumps" -Recurse -Force -ErrorAction SilentlyContinue
```

## Remover relatórios WER
```powershell
Remove-Item "$env:LocalAppData\Microsoft\Windows\WER" -Recurse -Force -ErrorAction SilentlyContinue
```