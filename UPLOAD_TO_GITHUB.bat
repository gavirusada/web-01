@echo off
title Uploading Vithanage Stores to GitHub
cd /d "%~dp0"
color 0A
echo ============================================================
echo   VITHANAGE STORES -- GITHUB UPLOAD HELPER
echo ============================================================
echo.
echo Target: https://github.com/gavirusada/web-01.git
echo.
echo GitHub වෙත Files Upload වෙමින් පවතී...
echo [!] Browser එකක් විවෘත වුවහොත් 'Sign in with your browser' ක්ලික් කරන්න.
echo.
git push -u origin main --force
echo.
if %ERRORLEVEL% EQU 0 (
    color 02
    echo ============================================================
    echo   SUCCESS! සාර්ථකව GITHUB වෙත UPLOAD විය!
    echo ============================================================
    echo.
    echo දැන් https://github.com/gavirusada/web-01 වෙත ගොස් පරීක්ෂා කරන්න.
    echo.
    echo GitHub Pages සක්‍රීය කිරීමට:
    echo 1. https://github.com/gavirusada/web-01/settings/pages වෙත යන්න.
    echo 2. Branch එක 'main' තෝරා Save කරන්න.
) else (
    color 0C
    echo ============================================================
    echo   UPLOAD FAILED -- කරුණාකර ඉහත Error එක පරීක්ෂා කරන්න.
    echo ============================================================
)
echo.
pause
