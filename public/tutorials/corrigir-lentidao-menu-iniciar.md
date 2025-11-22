# Corrigir lentidão do menu iniciar e busca

Redefine índice de pesquisa e reinicia serviços para melhorar resposta.

## Abrir Opções de Indexação
```cmd
control.exe srchadmin.dll
```

## Reiniciar serviço de pesquisa
```powershell
Restart-Service -Name WSearch -Force
```

## Reconstruir índice (via UI)
No painel de Opções de Indexação, selecione Avançado → Reconstruir.

## Limpar índice manualmente (cautela)
```powershell
Stop-Service -Name WSearch -Force
Remove-Item "$env:ProgramData\Microsoft\Search\Data\Applications\Windows\Windows.edb" -Force -ErrorAction SilentlyContinue
Start-Service -Name WSearch
```