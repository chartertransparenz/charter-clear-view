# Cookiebot – was genau eingebaut war

Hinweis: Das ist eine Übersicht, kein Umbau. Es wird nichts geändert.

## 1. Erster Einbau (22.08.2025)
Dieser Code stand im Kopfbereich jeder Seite:

```html
<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js"
  data-cbid="90f2041c-07f6-43b5-9855-e31d5276fe87"
  data-blockingmode="auto" type="text/javascript"></script>
```

- Cookiebot-ID: 90f2041c-07f6-43b5-9855-e31d5276fe87
- Blockiermodus "auto": Cookiebot hat Cookies und Tracking selbstständig blockiert, bis ein Besucher zugestimmt hat.

## 2. Umbau (September 2025)
In der Vorschau hat das Banner Probleme gemacht. Deshalb wurde es so geändert, dass es nur auf chartertransparenz.de lädt:

```html
<script type="module">
  if (location.hostname.includes("chartertransparenz.de")) {
    const s = document.createElement("script");
    s.id = "Cookiebot";
    s.src = "https://consent.cookiebot.com/uc.js";
    s.dataset.cbid = "90f2041c-07f6-43b5-9855-e31d5276fe87";
    s.dataset.blockingmode = "auto";
    s.type = "text/javascript";
    document.head.appendChild(s);
  }
</script>
```

## 3. Meta Pixel (November 2025)
- Das Meta Pixel (ID 732254976580940) kam direkt hinter Cookiebot.
- Dabei fiel auf: Das Pixel lud ohne Zustimmung, war also nicht DSGVO-konform.

## 4. Entfernt (23.11.2025)
- Auf Ihren Wunsch wurde der Cookiebot-Code komplett gelöscht.
- Danach wurde auch das Meta Pixel im Browser abgeschaltet.

## Was heute noch übrig ist
- Die Sicherheitseinstellungen der Seite erlauben Cookiebot weiterhin. Das ist nur eine Freigabe und hat keine Wirkung.
- Ein Hinweis im Code: Das Meta Pixel soll erst wieder aktiviert werden, wenn Cookiebot zurück ist.
- Ein Cookie-Banner wird zurzeit nicht angezeigt.
- Das Lead-Tracking über den Server (Conversion API) läuft unabhängig davon weiter.
- Andere Cookiebot-Einstellungen gab es nicht, etwa eine eigene Banner-Gestaltung oder Regeln je Cookie-Art.
