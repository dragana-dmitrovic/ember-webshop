# Ember Webshop

Ovo je jednostavna Ember aplikacija za webshop.  
Aplikacija omogućava pregled proizvoda, dodavanje u korpu i upravljanje korpom.

## Pregled aplikacije

- Pregled proizvoda
- Detalji proizvoda
- Upravljanje korpom
- Responsivan dizajn

## Instalacija (lokalno)

Potrebno je da imate instalirano:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Ember CLI](https://emberjs.com/)

**Koraci:**

```bash
git clone <repository-url>
cd ember-webshop
npm install
Pokretanje aplikacije lokalno
npm run start
Napomena: Link http://localhost:4200
 radi samo na vašem računaru dok je server pokrenut. Ne može se koristiti za deljenje sa drugim osobama dok ne bude deploy-ovano online.

**Testiranje**
npm run test
npm run test:ember -- --server
Linting
npm run lint
npm run lint:fix
Build (produkcija)
npm exec ember build --environment=production
Sadržaj build-a se nalazi u dist folderu i može se koristiti za deploy na online server ili GitHub Pages.

Link do aplikacije
Online verzija (bice dostupna nakon deploya na GitHub Pages)
