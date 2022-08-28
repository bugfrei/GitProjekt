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

Nun müssen noch Branches für QS (`git branch QS`) und PROD (`git brach PROD`) erstellt werden.


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

### Stand austauschen
Jeder Kollege soll nun den aktuellen Stand erhalten.

Jede added (git add) und commitet (git commit) seine Änderung entsprechend mit einer Message.

Nacheinander nun den Inhalt von main-Branch holen

> PS> git merge main

Gibt es einen Konflikt, diesen mit Visual Studio Code lösen.

Anschließend seinen aktuellen Commit (oder den Commit des Merge-Konfliktes) auf main mergen.

> PS> git checkout main
>
> PS> git merge max

Wichtig ist hier, den richtigen Branch-Namen zu verwenden. Notfalls VOR dem Wechsel zu main mit `git status` prüfen, auf welchem Branch man ist.

Für den nächsten Sprint entweder den vorherigen Branch nutzen ODER einen Neuen erstellen. Falls ein neuer Branch erstellt wird, macht den sinn den alten zu löschen:

`git branch -d branchname`

Funktioniert NUR wenn man sich nicht in diesem Branch befindet, ggfs. vorher mit `git checkout main` in den main-Branch wechseln und dann den Branch löschen.

**Aber wichtig: Vorher mergen**

## 2. Sprint

1. die Datei "ausgabe.js" erstellen und dort irgendwas ausgeben
2. ebenfalls die Datei "ausgabe.js" erstellen und irgendwas ausgeben
3. Jeder Kollege erstellt die "ausgabe.js" und gibt dort irgendwas aus.

### Version veröffentlichen

Gleicher Ablauf wie oben:

- mergen von `main` (`git merge main`)
- ggfs. Konflikte lösen
- checkout zu `main` (`git checkout main`)
- mergen in `main` (`git merge branchname`)
- zurück in Branch...
  - git checkout branchname
- ...oder Branch löschen und neuen Branch erstellen
  - git checkout main
  - git branch -d branchname
  - git branch neuerbranchname
  - git checkout neuerbranchname

## QS Kollegen bescheid geben

Alle beteiligten sollten ihren Merger in "main" der QS mitteilen.

Am besten in Teams eine Nachricht schreiben das der Stand für Version x.y.z in main gemergt wurde und bereit für die QS ist.

Sobald alle Kollegen, die an der Version x.y.z beteiligt sind, dies getan haben kann die QS seine Arbeit tun:

- Code Review (alleine, mit entsprechenden Kollegen)
- Testen
- Kleine Anpassungen (Tippfehler o.ä.)
- Bugs melden und Version x.y.z wird gecancelt (dann gibt es die Version x.y.z+1)

## Bugfix 0815

Irgendwo wurde ein Bug gefunden (selber was suchen, z.B. Schleife nicht bei 0 beginnen oder eine Ausgabe muss anders lauten).

Der QS kann hier ein bug0815.txt (oder .md) erstellen in dem der Bug beschrieben wird.
Commiten in Branch "QS" mit Message "Bug 0815"

Nun müssen der/die Kollegen, Kollegin(nen) den Bug beseitigen:

- Branch aus "main" erstellen
  - `git checkout main`
  - `git branch cs_bugfix0815`
  - `git checkout cs_bugfix0815`
- Bug suchen und beseitigen
- mergen von main
- mergen in main
- QS bescheid geben

## PROD Merge

Als letztes wird in den PROD-Branch bemerged.

> PS> git checkout PROD
>
> PS> git merge QS

In einem changelog.txt (oder .md) die Version dokumentieren:

30.08.2022 V1.3.2 Implementierung von XYZ

Dann einen Commit erstellen mit Angabe der Versionsnummer in der Message.






