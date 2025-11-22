# Limpar Delivery Optimization

Apaga caches do serviço de otimização de entrega de updates.

## Parar serviço Delivery Optimization
```powershell
Stop-Service -Name DoSvc -Force
```

## Remover cache
```powershell
Remove-Item "$env:SystemRoot\SoftwareDistribution\DeliveryOptimization" -Recurse -Force -ErrorAction SilentlyContinue
```

## Iniciar serviço novamente
```powershell
Start-Service -Name DoSvc
```