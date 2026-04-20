@echo off
REM ─────────────────────────────────────────────────────
REM AEGIDA — Security Check (wrapper Windows)
REM Per Task Scheduler: lancia bash con lo script
REM ─────────────────────────────────────────────────────

cd /d "C:\Users\Windows 11\Desktop\LAVORO\SITI WEB CLAUDE\aegida-website"

REM Cerca bash (Git Bash o WSL)
where bash >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo ERRORE: bash non trovato. Installa Git Bash o WSL.
  exit /b 1
)

bash scripts/security-check.sh
exit /b %ERRORLEVEL%
