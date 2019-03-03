REM ###########################################
REM ##### Compilando para produção! ###########
REM ###########################################
call ng build --prod
REM ###########################################
REM ##### Limpando pastas do servidor! ########
REM ###########################################
del  D:\nginx-1.14.2\html\*.* /s /q
RMDIR  D:\nginx-1.14.2\html\assets  /s  /q
REM ###########################################
REM ##### Movendo pastas para o servidor! #####
REM ###########################################

xcopy  C:\workspaces\VisualStudioCode-Workspace\MeatApp\dist\*.* D:\nginx-1.14.2\html\ /O /X /E /H /K