

## Problembehebung: NauSYS Widget lädt ohne Kroatien-Preset

### Ursache des Problems

Die Cleanup-Logik in `NausysWidget.tsx` entfernt das globale jQuery (aus `index.html`), was zu Timing-Problemen führt. jQuery ist bereits global verfügbar und sollte **nicht** entfernt oder neu geladen werden.

### Lösung

Die `NausysWidget.tsx` so anpassen, dass:
1. **jQuery nicht entfernt wird** - nur NauSYS-Scripts werden entfernt
2. **Kein erneutes Laden von jQuery** - wir nutzen das bereits global geladene jQuery
3. **Direktes Laden des NauSYS-Widgets** - da jQuery bereits verfügbar ist

### Änderungen in `src/components/NausysWidget.tsx`

**Vorher (problematisch):**
```javascript
// Entfernt auch jQuery - FALSCH!
const oldScripts = document.querySelectorAll('script[src*="nausys-widget-loader"], script[src*="jquery"]');
oldScripts.forEach(s => s.remove());

// Lädt jQuery neu - UNNÖTIG!
const jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
jqueryScript.onload = () => {
  // Dann NauSYS laden
};
```

**Nachher (korrekt):**
```javascript
// Nur NauSYS-Scripts entfernen, jQuery beibehalten
const oldScripts = document.querySelectorAll('script[src*="nausys-widget-loader"]');
oldScripts.forEach(s => s.remove());

// Direkt NauSYS laden (jQuery ist bereits global vorhanden)
const script = document.createElement('script');
script.src = 'https://widget.nausys.com/NauSYS-widgets/nausys-widget-loader.js';
script.setAttribute('data-nausys-widget-token', profile.token);
script.setAttribute('data-nausys-widget-settings', profile.settings);
script.setAttribute('data-nausys-widget-language', 'GERMAN');

if (profile.profile) {
  script.setAttribute('data-nausys-widget-profile', profile.profile);
}

document.body.appendChild(script);
```

### Warum das funktionieren wird

- jQuery ist bereits in `index.html` (Zeile 39) global geladen
- Das NauSYS-Widget kann sofort starten, da jQuery verfügbar ist
- Kein Timing-Problem mehr zwischen jQuery und NauSYS
- Das Kroatien-Profil (`ff1d9618-0655-4fd7-ba65-e08f5d5124a2u`) wird korrekt angewendet

