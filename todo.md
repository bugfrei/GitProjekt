# Arbeitsschritte
1. Ungerade und Gerade in einem Script Namens "zahlen.js" zusammen implementieren
2. Die Ausgabe soll wiefolgt lauten:
```
Gerade: 0
Ungerade: 1
Gerade: 2
Ungerade: 3
...
Gerade: 10
```
3. Die erste Zahl (bisher 0) und die Letzte (bisher 10) soll per Parameter angegeben werden.

Hierzu kann `process.argv[]` verwendet werden. Beispiel

  ```
  console.log(process.argv);
  ```

  > PS> node irgendeinscript.js 100 200
  
```
  'c:\...\...\bin/node'
  'c:\...\...\irgendeinscript.js'
  '100'
  '200'
```


