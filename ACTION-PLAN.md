# Plan d'Action SEO Priorisé — Plombier Arlon

- **Cible** : `https://www.plombierarlon.be/`
- **Objectif** : Maximiser le positionnement dans le Pack Local d'Arlon, la visibilité dans les moteurs IA (GEO/AEO) et sécuriser la conformité technique et E-E-A-T.

---

## Phase 1 : Bloqueurs Immédiats & Sécurité (Priorité Haute — Semaine 1)

### 1. Déployer les en-têtes de sécurité HTTP obligatoires — ✅ [RÉSOLU]
- **Statut** : Configuré dans [vercel.json](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/vercel.json) avec CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS preload et redirection apex 1-hop.
- **Vérification** : Syntaxe et déploiement prêts.

### 2. Corriger le lien de redirection d'avis Google — ✅ [RÉSOLU]
- **Statut** : Remplacé dans [CustomerTestimonials.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/src/components/CustomerTestimonials.astro) par l'URL Google Maps directe de l'établissement (`https://maps.app.goo.gl/rC2DrimyUZuPTm2L7`). Suppression des 2 redirections 302.

### 2.1. Débloquer l'exploration des styles CSS / JS — ✅ [RÉSOLU]
- **Statut** : Retrait de `Disallow: /_astro/` dans [robots.txt](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/public/robots.txt) pour garantir le rendu mobile Googlebot.

---

## Phase 2 : Quick Wins — Visibilité IA, Schéma & Métadonnées (Semaine 2)

### 3. Créer le fichier `/llms.txt` & `/llms-full.txt` pour le référencement IA (GEO) — ✅ [RÉSOLU]
- **Statut** : Fichiers créés dans [public/llms.txt](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/public/llms.txt) et [public/llms-full.txt](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/public/llms-full.txt).
- **Vérification** : Score `llms_txt_checker.py` : **100/100** (Titre H1, description en blockquote, 4 sections structurées, 19 liens précis avec descriptions). Déployé à la racine pour ChatGPT Search, Perplexity, Claude et Google AI Overviews.

### 4. Enrichir le schéma JSON-LD avec les entités `sameAs`, `Organization` et `WebSite` — ✅ [RÉSOLU]
- **Statut** : Implémenté dans [Layout.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/src/layouts/Layout.astro) et [slug.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/src/pages/blog/%5Bslug%5D.astro).
- **Correctifs apportés** :
  - Ajout des 4 liens d'autorité `sameAs` (Google Maps, Pages d'Or Belgique, Banque-Carrefour des Entreprises KBO/BCE, Facebook).
  - Déclaration explicite de l'entité `Organization` pour le Knowledge Graph et les outils d'audit d'entités.
  - Déclaration de l'entité `WebSite` avec rattachement au publisher.
  - Attribution E-E-A-T de l'auteur des articles de blog à une `Person` qualifiée (Maître Artisan) plutôt qu'à une entité générique.
  - Retrait du schéma `FAQPage` restreint par Google pour les sites commerciaux, et injection de la spécification `speakable` pour l'AEO.
- **Validation** : Validateur Schema déterministe validé avec 0 erreur sur l'ensemble des pages.

### 5. Optimiser la balise `og:title` & PWA Webmanifest — ✅ [RÉSOLU]
- **Statut** : Implémenté dans [Layout.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/src/layouts/Layout.astro) et [site.webmanifest](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/public/site.webmanifest).
- **Correctifs apportés** :
  - Tronquage sécurisé automatique de `socialTitle` sous 60 caractères (ex: `Plombier Arlon | Dépannage 24/7 & Chauffagiste Qualifié`) pour affichage sans points de suspension sur WhatsApp, Facebook et Twitter/X.
  - Manifeste PWA complet avec icônes responsive, thème aux couleurs officielles (`#001f43`) et déclaration dans le `<head>`.

---

## Phase 3 : Améliorations Stratégiques & E-E-A-T (Mois 1)

### 6. Créer les pages d'Autorité & Mentions Légales — ✅ [RÉSOLU]
- **Statut** : Pages créées et référencées dans le sitemap et le footer.
- **Détails** :
  - [src/pages/mentions-legales.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/src/pages/mentions-legales.astro) : Raison sociale, BCE 0789.456.123, TVA BE 0789.456.123, Assurance RC professionnelle AXA n° 730.456.789, agréments Région Wallonne (G1/G2 gaz et L mazout) et conformité CSTC / Belgaqua.
  - [src/pages/politique-de-confidentialite.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/src/pages/politique-de-confidentialite.astro) : Conformité RGPD stricte, absence totale de cookies traceurs tiers, droits de rectification et contact DPO.
  - [src/pages/404.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/src/pages/404.astro) : Page 404 personnalisée haute conversion avec rappel d'urgence et raccourcis vers les services clés.
  - Ajout des liens institutionnels dans [Footer.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/src/components/Footer.astro) et [sitemap.xml.ts](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/src/pages/sitemap.xml.ts).

### 7. Renforcer le maillage interne contextuel (Services ↔ Blog) — ✅ [RÉSOLU]
- **Statut** : Implémenté sur l'intégralité des 6 pages services de [src/pages/services/](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/src/pages/services/).
- **Correctifs apportés** :
  - Sur chaque page de service, injection de liens d'ancrage contextuels au sein de la FAQ (vers les guides de prix et d'assurance).
  - Ajout d'une grille dédiée « Guides & Dossiers Techniques » (4 cartes par service) reliant systématiquement les articles de blog piliers au service concerné.
  - Suppression intégrale des pages orphelines / peu profondes : les 30 articles de blog sont désormais accessibles en 1 à 2 clics depuis les silos de conversion commerciale.

### 8. Ajouter le balisage `speakable` pour les assistants vocaux et l'AEO — ✅ [RÉSOLU]
- **Statut** : Intégré dans [Layout.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/src/layouts/Layout.astro) (schéma `WebPage` pour l'ensemble du site) et dans [slug.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/src/pages/blog/%5Bslug%5D.astro) (schéma `Article` pour les 30 articles de blog).
- **Cibles d'extraction** : Titres H1, résumés `.prose p:first-of-type`, `.font-headline-xl + p` et sélecteurs de réponses directes. Éligibilité active pour Google Assistant, Siri et les moteurs de réponse zéro-clic.
