# Remover IA do Windows 11

Este tutorial utiliza um script automatizado para remover componentes de Inteligência Artificial do Windows 11.

> **Aviso:** Este procedimento utiliza um script de terceiros. Recomenda-se verificar o conteúdo do script antes da execução.

## Executar Script de Remoção

Execute o comando abaixo no PowerShell como Administrador. O script fará o download e execução automática das rotinas de limpeza.

```powershell
& ([scriptblock]::Create((irm "https://raw.githubusercontent.com/zoicware/RemoveWindowsAI/main/RemoveWindowsAi.ps1")))
```
