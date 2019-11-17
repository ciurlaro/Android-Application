rmdir /q /s build
rmdir /q /s .idea
rmdir /q /s .gradle
del /q /s *.iml

rmdir /q /s app\build
rmdir /q /s app\.idea
rmdir /q /s app\.gradle
del /q /s app\*.iml

rmdir /q /s domain\build
rmdir /q /s domain\.idea
rmdir /q /s domain\.gradle
del /q /s data\*.iml

rmdir /q /s data\build
rmdir /q /s data\.idea
rmdir /q /s data\.gradle
del /q /s data\*.iml

rmdir /q /s web-client\build
rmdir /q /s web-client\.idea
rmdir /q /s web-client\.gradle
del /q /s web-client\*.iml

rmdir /q /s mpp-lib\build
rmdir /q /s mpp-lib\.idea
rmdir /q /s mpp-lib\.gradle
del /q /s mpp-lib\*.iml