### Individuellt projekt: E-Wallet

#### Instruktioner

Ni ska bygga en digital plånbok. Assets och mockups finns i det här repot.
Forka det här repot och ladda upp din källkod till det forkade repot.

#### Specifikation

Applikationen ska ha två stycken vyer, en vy för alla ens kort, och en vy för att skapa ett nytt kort. Härma mocken så gott du kan!
I PDF:en hittar du också ett förslag på vilka komponenter som bör finnas med, det är rekommenderat att följa den.

Använd Vue Router för att konfigurera era vyer

Placera arrayen med alla kort i root-komponenten på (samma sätt som Mini Library).

###### Förslag på datamodell

```js
{
  id: "432984728397",
  holder: "The name",
  vendor: "bitcoin",
  number: "XXXXYYYYZZZZFFFF",
  validMonth: "12",
  validDay: "5"
}
```

#### build-mappen
`build`-mappen innehåller en färdigbyggd version av appen. Öppna mappen med VS Code och öppna `index.html` med LiveServer för att se hur den ska se ut och fungera.


#### Utmaning!
Lägg även till funktionaliteten att ta bort ett kort genom att lägga till en knapp.
När man trycker på den knappen ska en bekräftelseruta dyka upp, om man bekräftar så ska kortet raderas.
