# Limpar Component Store (WinSxS)

Reduz o espaço usado pelo repositório de componentes mantendo estabilidade do sistema.

## Limpeza padrão do repositório
Remove componentes substituídos e faz manutenção.
```cmd
DISM /Online /Cleanup-Image /StartComponentCleanup
```

## Limpeza agressiva (não reverte updates antigos)
Use com cautela: impede remoção de updates no futuro.
```cmd
DISM /Online /Cleanup-Image /StartComponentCleanup /ResetBase
```

## Remover pacotes de linguagem obsoletos
```cmd
DISM /Online /Cleanup-Image /SPSuperseded
```