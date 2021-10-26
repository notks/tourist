Zadatak:

Dizajnirati i implementirati Web Aplikaciju za turisticku zajednicu neke opcine.

Opis:

Back end (BE):

REST API koji treba da podrzi dodavanje, izmjenu i aktiviranje/deaktiviranje znamenitosti u nekoj opcini.
Znamenitost treba da sadzi naziv, opis, par slika i geografske koordinate (Lat&Lon).

Posjetiocima znamenitosti treba da bude dostupan API za pretragu po
nazivu i vaznosti (znamenito, veoma znamenito, nezaobilazno) samo aktivnih znamenitosti.

Oni mogu da daju ocjene od 1-5 za svaku od znamenitosti a prosjecna ocjena treba da se prikazuje pored znamenitosti.

- Api treba da podrzi vise opcina u vise razlicitih drzava.
- Implementirati api sa persistencijom u relacionoj bazi podataka, koristeci Java i Spring boot kao framework.


Napraviti sigurnost da dio API-ja koji se odnosi za manipulaciju znamenitosti mogu da koriste samo prijavljeni (registorvani) korisnici, dok bilo koji (neregistrovani) korisnik moze da ocjeni znamenitost.


Front end (FE):

Angular:

Front end treba da bude Angular applikacija, koja konzumira BE rest api i koja omogucava korisnicima da izvrse pretragu znamenitosti te da je ocjene.

Koristiti bootstrap kako bi app bila responsive i prilagodjena za pregled na mob. uredjajima.


Dizajnirati i napraviti zasticeni dio stranice (za Admine - korisnicko ime i lozinka) za manipulaciju znamenitosti, gdje logovani user moze da manipulise sa znamenitostima.

TYPO3:

Napraviti TYPO3 ekstenziju koja ce koristiti isti REST API kao i Angular app a koji ce korisnicima na backendu ponuditi plugin koji ce moci postaviti kao content na stranicu sa postavkom max. broja prikazanih znamenitosti. Plugin na frontendu treba da prikazuje listing znamenitosti poredanih po ocjeni, njih ukupno onliko koliko je postavljen maksimalan br. na postavci na backendu.
