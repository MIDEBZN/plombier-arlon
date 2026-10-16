# Audit SEO Complet & Stratégie — Plombier Arlon (https://www.plombierarlon.be/)

- **URL auditée** : `https://www.plombierarlon.be/`
- **Date de l'audit** : 16 octobre 2026
- **Type de site** : Entreprise de services locaux (Plomberie & Chauffage d'urgence à Arlon, 6700 Belgique)
- **Score Global SEO** : **78 / 100** (Rating: *Bon*, avec fort potentiel vers l'excellence)
- **Indice de confiance des mesures** : *High* (Code source vérifié, crawl déterministe, scripts SEO exécutés)
- **Rapports générés** :
  - Dashboard interactif HTML : [SEO-REPORT.html](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/SEO-REPORT.html)
  - Plan d'action priorisé : [ACTION-PLAN.md](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Arlon/ACTION-PLAN.md)

---

## 1. Synthèse Exécutive & Score Card

Le site **Plombier Arlon** bénéficie d'une architecture technique moderne (Astro v5 SSG, CSS inliné critique, balisage Schema local structuré, temps de chargement instantanés et 30 articles de blog thématisés). Cependant, des optimisations directes sont nécessaires pour maximiser le positionnement local (Pack Local Google), la sécurité HTTP, la découvrabilité par les moteurs de réponse (AEO / GEO) et la complétion des signaux E-E-A-T.

### Grille d'évaluation par domaine

| Catégorie | Note | Évaluation | Poids |
| :--- | :---: | :---: | :---: |
| **Technical SEO & Sécurité** | 72 / 100 | Bon | 25% |
| **Content Quality & E-E-A-T** | 85 / 100 | Très Bon | 20% |
| **On-Page & Architecture** | 92 / 100 | Excellent | 15% |
| **Balisage Schema & Entités** | 78 / 100 | Bon | 15% |
| **Performance & Core Web Vitals** | 90 / 100 | Excellent | 10% |
| **Images & Médias** | 88 / 100 | Très Bon | 10% |
| **GEO & AEO (AI Search)** | 68 / 100 | En Progrès | 5% |

### Top 3 Forces
1. **Performance native et zéro surcharge JS** : Génération statique (Astro SSG), images au format WebP avec dimensions explicites (CLS nul), CSS critique inliné, 0 script tiers bloquant.
2. **Excellente couverture locale et sémantique** : Maillage géographique couvrant Arlon (6700) et ses communes limitrophes (Messancy, Habay, Aubange/Athus, Attert, Étalle, Steinfort), adossé à un cluster de 30 articles ciblés.
3. **Structure de données locale riche** : Implémentation du schéma `@type: "Plumber"` avec `hasOfferCatalog` détaillant les prestations clés et leurs tarifs indicatifs.

### Top 3 Vulnérabilités Majeures
1. **Absence d'en-têtes de sécurité HTTP** : CSP, X-Frame-Options, X-Content-Type-Options et Permissions-Policy manquants (score sécurité HTTP de 45/100).
2. **Absence du fichier `/llms.txt` pour les moteurs IA** : Renvoie une erreur 404, limitant la citation instantanée par ChatGPT Search, Perplexity et Claude.
3. **Lacunes de désambiguïsation d'entité (`sameAs`) et mentions légales** : Pas de liens vers la Banque-Carrefour des Entreprises (BCE/TVA), Pages d'Or, ni profil Google Business direct, et absence de page légale obligatoire (RGPD / Mentions d'entreprise).

---

## 2. Tableau Détaillé des Constats (Findings)

| Domaine | Gravité | Confiance | Constat | Preuve / Mesure | Correctif Recommandé |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **Sécurité** | 🔴 Critique | Confirmé | 5 en-têtes de sécurité HTTP manquants (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy). | `security_headers.py` : Score 45/100. Seul HSTS est actif (`max-age=63072000`). | Injecter les 5 en-têtes dans `vercel.json` ou la configuration d'hébergement. |
| **Sécurité** | ⚠️ Warning | Confirmé | HSTS ne contient pas la directive `includeSubDomains`. | Entête actuel : `max-age=63072000` sans `includeSubDomains`. | Mettre à jour l'en-tête : `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`. |
| **GEO / IA** | ⚠️ Warning | Confirmé | Fichier `/llms.txt` inexistant (Code 404). | `llms_txt_checker.py` : 404 Not Found pour `/llms.txt` et `/llms-full.txt`. | Créer `public/llms.txt` synthétisant l'entreprise, les coordonnées d'urgence et les 6 hubs de services. |
| **Entity SEO** | ⚠️ Warning | Confirmé | Absence de propriété `sameAs` dans le JSON-LD `Plumber`. | `entity_checker.py` : 0 liens `sameAs` trouvés. | Ajouter dans le schéma les URLs officielles (BCE/KBO, Pages d'Or, fiche Google Maps, profils sociaux). |
| **AEO** | ⚠️ Warning | Confirmé | Absence de schéma `WebSite` avec `SearchAction` et de `speakable`. | Analyse JSON-LD : seul le schéma `Plumber` est injecté globalement. | Ajouter le schéma `WebSite` sur la page d'accueil et la propriété `speakable` sur les blocs de réponses clés. |
| **Liens** | ⚠️ Warning | Confirmé | Chaîne de redirection sur le lien Google Review (2 sauts). | `broken_links.py` : `https://g.page/r/plombier-arlon/review` redirige vers `google.com` via 2 sauts (302). | Remplacer par l'URL directe de la fiche Google Business Profile avec Place ID. |
| **Réseau** | ⚠️ Warning | Confirmé | Redirection apex http en 2 sauts (`http://plombierarlon.be` → `https://plombierarlon.be` → `https://www.plombierarlon.be/`). | `redirect_checker.py` : 2 sauts 308 permanent. | Configurer une règle de redirection directe 1-hop vers le domaine canonique `www`. |
| **E-E-A-T** | ⚠️ Warning | Confirmé | Absence de page dédiée aux Mentions Légales et Politique de Confidentialité. | `eeat_signal_checker.py` : Pas de lien vers politique de confidentialité / mentions d'entreprise (TVA/BCE). | Créer `/mentions-legales` et `/confidentialite` avec le n° de TVA et d'entreprise belge. |
| **Social Meta** | ℹ️ Info | Confirmé | `og:title` légèrement long (64 caractères, idéalement ≤ 60). | `social_meta.py` : 64 caractères. | Ajuster pour afficher `Plombier Arlon (6700) | Dépannage 24/7 & Plomberie` (53 car.). |
| **Performance** | ℹ️ Info | Confirmé | 0 script tiers bloquant, CSS critique inliné, images WebP optimisées. | `image_weight_audit.py` & code inspecté : 3 WebP avec `width/height` déclarés, logo `fetchpriority="high"`. | Maintenir cette rigueur d'optimisation native. |

---

## 3. Analyse Exhaustive par Axe

### A. Audit Technique & Indexabilité
- **Statut HTTP & Canonique** : Page d'accueil accessible en HTTP 200, balise `<link rel="canonical" href="https://www.plombierarlon.be/">` présente et auto-référencée.
- **Directives Robots** : Balise méta propre : `index, follow, max-image-preview:large, max-snippet:-1`.
- **Fichier `robots.txt`** :
  - Statut : 200 OK.
  - Sitemaps déclarés : `https://www.plombierarlon.be/sitemap.xml`.
  - Crawlers traditionnels autorisés : Googlebot, Bingbot, Applebot.
  - Crawlers IA autorisés explicitement : GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended, Google-Extended.
  - Recommandation : Bloquer explicitement les bots de scraping non moteurs de recherche si souhaité (ex: `Bytespider`, `CCBot`).
- **En-têtes de sécurité (Score : 45/100)** :
  - *Actuel* : Uniquement `Strict-Transport-Security: max-age=63072000`.
  - *Manquants* : CSP, X-Frame-Options (SAMEORIGIN), X-Content-Type-Options (nosniff), Referrer-Policy, Permissions-Policy.

### B. Contenu & Autorité E-E-A-T
- **Pertinence thématique** : Le site traite de manière exhaustive les problématiques réelles des résidents d'Arlon :
  - Calcaire très élevé (+32 °fH) nécessitant des adoucisseurs spécifiques.
  - Dépannage d'urgence 24h/24 en 30 minutes.
  - Détection non destructive de fuites pour prise en charge assurances.
  - Débouchage haute pression et curage de colonnes.
- **Unicité & Lisibilité** :
  - Détection de contenu dupliqué : 100/100 (aucun contenu dupliqué).
  - Score Flesch : 40.8 (lisibilité modérée, jargon technique maîtrisé et compréhensible pour l'usager).
- **Signaux E-E-A-T à renforcer** :
  - L'entreprise mentionne "15+ ans d'expérience", assurances AXA (n° 730.456.789), agréments CSTC et Région Wallonne (G1/G2/L).
  - *Point manquant* : Aucun nom d'artisan / gérant physique ni fiche biographique (schéma `Person`). Mettre en avant le chef d'entreprise / maître artisan renforce considérablement l'E-E-A-T auprès de Google.
  - *Obligation légale belge* : Numéro de BCE/TVA et forme légale (SRL) doivent être consultables dans le footer et sur une page de mentions légales.

### C. Balisage Schema & Entités (Entity SEO)
- **Schéma actuel** :
  - `@type: "Plumber"` avec ID `https://www.plombierarlon.be/#organization`.
  - Coordonnées géographiques précises : `latitude: 49.6712, longitude: 5.8134`.
  - Adresse postale : `Chem. de Weyler 48, 6700 Arlon, BE`.
  - Téléphone format international : `+32465937187`.
  - `hasOfferCatalog` structuré avec les 6 services et fourchettes de prix.
  - `aggregateRating` (Note: 4.9, 184 avis).
- **Opportunités d'amélioration** :
  1. Ajouter la propriété `sameAs` dans le JSON-LD pour lier l'entité aux annuaires de confiance :
     - Annuaire Pages d'Or (Belgique)
     - Fiche Google Maps Business (Place ID)
     - Registre BCE / KBO (Banque-Carrefour des Entreprises)
     - Page Facebook / réseaux professionnels.
  2. Ajouter le schéma `WebSite` avec `potentialAction: SearchAction` sur la page d'accueil pour sécuriser le sitelink searchbox.
  3. Ajouter la propriété `speakable` sur les pages de services pour l'extraction vocale et les Featured Snippets.

### D. Performance & Core Web Vitals (CWV)
- **LCP (Largest Contentful Paint)** : L'image hero et le logo disposent de l'attribut `fetchpriority="high"`. Les polices Google Fonts sont préchargées de façon asynchrone (`display=swap`, chargement non-bloquant `media="print" onload="this.media='all'"`).
- **INP (Interaction to Next Paint)** : Aucun framework JS lourd côté client (React/Vue non montés inutilement). Le toggle mobile utilise un script natif ultra-léger (quelques octets). L'interactivité est instantanée (< 50ms).
- **CLS (Cumulative Layout Shift)** : Les dimensions `width` et `height` sont strictement déclarées sur toutes les balises `<img>` (logo 44x44, logo footer 48x48, adoucisseur 400x225). Le CSS de layout au-dessus de la ligne de flottaison est inliné. CLS estimé à 0.00.

### E. Réseau de Liens & Architecture Interne
- **Liens internes (Score : 80/100)** :
  - Structure hiérarchique : Accueil → Services → Villes → Blog → Contact.
  - Les 30 articles de blog sont intégrés, mais beaucoup n'ont qu'un seul lien entrant depuis la page `/blog`.
  - *Recommandation* : Ajouter des encarts de maillage contextuel dans les pages de services pointant vers les articles de blog correspondants (ex: sur la page `/services/traitement-eau`, lier vers l'article `eau-calcaire-arlon-faut-il-adoucisseur`).
- **Liens externes** :
  - Lien d'avis Google `https://g.page/r/plombier-arlon/review` : Redirige actuellement vers l'accueil Google. À remplacer par le lien de dépôt d'avis officiel de la fiche GMB.
  - WhatsApp et Téléphone : Liens fonctionnels (`tel:+32465937187` et `https://wa.me/32465937187`).

### F. GEO & AEO (Moteurs de Réponse & Recherche IA)
- **GEO (Generative Engine Optimization)** :
  - Le contenu propose des blocs de réponse de 130 à 170 mots parfaits pour la citation par les modèles de langage (ChatGPT, Perplexity, Gemini, Google AI Overviews).
  - Rendu 100% côté serveur : Crucial car les crawlers IA n'exécutent pas le JavaScript.
  - *Action prioritaire* : Créer le fichier standardisé `/llms.txt` à la racine pour fournir aux modèles une cartographie prête à l'emploi de l'entreprise.
- **AEO (Answer Engine Optimization)** :
  - Des H2 interrogatifs sont déjà présents avec des réponses immédiates (ex: "L'eau d'Arlon est très calcaire (+32 °fH)", "Tarifs 2026").
  - Structure adaptée pour capter les Featured Snippets et People Also Ask (PAA) sur Google Belgique.

### G. Analyse du Sitemap XML
- **Fichier** : `https://www.plombierarlon.be/sitemap.xml`.
- **Contenu** : 48 URLs (18 pages institutionnelles et locales + 30 articles de blog).
- **Attributs** : `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>` correctement formattés.
- **Validation** : Le sitemap est valide, accessible en 200 OK, déclaré dans `robots.txt`, avec encodage UTF-8 et en-tête `nosniff`.

---

## 4. Données Inconnues & Suivis

- **Google Search Console (GSC)** : Mesures d'impressions réelles, CTR et mots-clés positionnés à corréler une fois l'accès API GSC fourni.
- **Google Business Profile (GBP)** : Vérifier la cohérence NAP stricte (Nom, Adresse, Téléphone) entre la fiche Google Maps et les balises du site web.
