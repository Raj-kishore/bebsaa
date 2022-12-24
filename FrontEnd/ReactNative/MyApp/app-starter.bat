@ECHO OFF
REM React native app starter commnads
ECHO Starting Metro on a new window.
start cmd.exe /k npx react-native start
ECHO Metro is running.
ECHO Starting Application on a new window.
start cmd.exe /k  npx react-native run-android
ECHO Application is running.