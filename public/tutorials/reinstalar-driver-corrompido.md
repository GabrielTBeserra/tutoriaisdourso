# Reinstalar driver corrompido

Remove e reinstala pacotes de driver problemáticos com pnputil.

## Listar drivers instalados
```cmd
pnputil /enum-drivers
```

## Remover pacote de driver específico (Admin)
Use o nome do arquivo .inf do driver.
```cmd
pnputil /delete-driver oemXX.inf /uninstall /force
```

## Instalar driver a partir de um .inf
```cmd
pnputil /add-driver C:\Drivers\meu_driver.inf /install
```