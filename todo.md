# Arbeitsschritte
Teil euch auf. Eine(r) macht Schritt 1, jemand anderes Schritt 2 usw.
Falls jemand das Tutorial alleine machen will, kann er Kollegen Simulieren in dem er das Repository in z.B. 3 Ordner Clont:

> PS> md K1
> 
> PS> cd K1
> 
> PS> git clone https://github.com/bugfrei/GitBranchTutorial.git
> 
> PS> cd..
> 
> PS> md K2
> 
> PS> cd K2
> 
> PS> git clone https://github.com/bugfrei/GitBranchTutorial.git

usw.

Für jeden Ordner dann entspricht Schritte durchführen (als wäre man jemand anderes).

Für jeden Sprint werden unterschiedliche Arbeiten durchgeführt. Es ist auch nicht schlimm, wenn 2 an dem gleichen Schritt arbeiten (das gibt es auf jeden Fall Konflikte).

## Vorbereitung

Vorher erstellt sich jeder einen Branch

> PS> git branch max

Der Name des Branch ist jedem Frei überlassen. Ich empfehle folgende Muster:

"[initalen des Namens]_[durchzuführende Arbeiten]"

z.B. "cs_sprint1", "cs_bugfix12345", "cs_fragenbogen3"

Alles klein, keine Leerzeichen!

Danach in den Branch wechseln:

> PS> git checkout max



## 1. Sprint
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

### Version austauschen
Jeder Kollege soll nun die aktuelle Version erhalten.

Jede added (git add) und commitet (git commit) seine Änderung entsprechend mit einer Message.

