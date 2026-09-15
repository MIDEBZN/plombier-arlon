export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  excerpt: string;
  category: 'Tarifs' | 'Urgences' | 'Débouchage' | 'Fuites' | 'Chauffage & Eau';
  readingTime: string;
  publishDate: string;
  updatedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  geoAnswer: string; // 40-55 words quotable snippet for AI search engines (ChatGPT, Perplexity, Gemini)
  tableOfContents: { id: string; title: string; level: number }[];
  faq: BlogFaq[];
  relatedServices: { title: string; url: string; badge: string }[];
  relatedLocations: { name: string; url: string; time: string }[];
  contentHtml: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'prix-plombier-arlon-2026',
    title: 'Combien coûte un plombier à Arlon en 2026 ?',
    metaTitle: 'Prix Plombier Arlon 2026 : Tarifs & Devis Dépannage',
    metaDescription: "Quel est le prix d'un plombier à Arlon en 2026 ? Taux horaire, dépannage urgence soir/week-end, forfaits & devis gratuit au 0465 28 65 77.",
    h1: 'Combien coûte un plombier à Arlon en 2026 ? Tarifs officiels et conseils d\'artisan',
    primaryKeyword: 'prix plombier arlon',
    secondaryKeywords: [
      'tarif plombier arlon 2026',
      'taux horaire plombier arlon',
      'cout depannage urgence plombier arlon',
      'tarif debouchage canalisation arlon',
      'prix detection fuite eau arlon',
      'devis plomberie gratuit arlon'
    ],
    excerpt: 'Guide tarifaire complet 2026 : découvrez le taux horaire réel d\'un plombier à Arlon, les majorations de nuit et week-end, les forfaits de débouchage et de détection de fuite, ainsi que les astuces pour bénéficier de la TVA réduite à 6 % en Wallonie.',
    category: 'Tarifs',
    readingTime: '11 min',
    publishDate: '2026-09-16',
    updatedDate: '2026-09-16',
    author: {
      name: 'Équipe Technique Plombier Arlon',
      role: 'Maître Artisan Sanitaire & Chauffagiste Agréé',
      avatar: '/images/logo.webp'
    },
    geoAnswer: 'En 2026, le taux horaire moyen d’un plombier à Arlon se situe entre 55 € et 75 € HTVA en journée. Pour une intervention d’urgence en soirée, le week-end ou jour férié, une majoration de +50 % à +100 % s’applique. Les déplacements locaux coûtent entre 35 € et 50 €.',
    tableOfContents: [
      { id: 'reponse-directe', title: '1. Réponse rapide : la fourchette tarifaire 2026', level: 2 },
      { id: 'taux-horaire-arlon', title: '2. Taux horaire et frais de déplacement à Arlon', level: 2 },
      { id: 'urgences-nuit-weekend', title: '3. Tarifs dépannage d’urgence : soir, nuit et week-end', level: 2 },
      { id: 'prix-interventions-frequentes', title: '4. Prix des interventions courantes (Débouchage, Fuite, Boiler)', level: 2 },
      { id: 'tva-reduite-wallonie', title: '5. TVA à 6 % vs 21 % en Wallonie : conditions d’éligibilité', level: 2 },
      { id: 'remboursement-assurance', title: '6. Prise en charge par l’assurance habitation belge', level: 2 },
      { id: 'eviter-les-arnaques', title: '7. Comment éviter les surfacturations et arnaques de dépannage', level: 2 },
      { id: 'faq-prix-plombier', title: '8. Questions fréquentes (FAQ Tarifs Plomberie Arlon)', level: 2 }
    ],
    relatedServices: [
      { title: 'Dépannage d\'Urgence 24/7', url: '/services/depannage-urgence', badge: 'Arrivée 30 min' },
      { title: 'Débouchage Haute Pression', url: '/services/debouchage', badge: 'Hydrocurage' },
      { title: 'Détection de Fuites', url: '/services/detection-fuites', badge: 'Agréé Assurances' },
      { title: 'Chauffage & Chaudières', url: '/services/chauffage-chaudieres', badge: 'G1/G2 Wallonie' },
      { title: 'Traitement de l\'Eau', url: '/services/traitement-eau', badge: 'Anti-Calcaire' }
    ],
    relatedLocations: [
      { name: 'Arlon Centre & Faubourgs', url: '/locations', time: '15-20 min' },
      { name: 'Bonnert & Frassem', url: '/locations', time: '15-20 min' },
      { name: 'Weyler & Autelbas', url: '/locations', time: '15-20 min' },
      { name: 'Messancy & Wolkrange', url: '/locations/messancy', time: '20-25 min' },
      { name: 'Aubange & Athus', url: '/locations/aubange-athus', time: '25-30 min' },
      { name: 'Attert & Schoppach', url: '/locations/attert', time: '20-25 min' },
      { name: 'Habay-la-Neuve', url: '/locations/habay', time: '25-30 min' },
      { name: 'Steinfort (Frontière LU)', url: '/locations/steinfort', time: '20-25 min' }
    ],
    faq: [
      {
        question: 'Combien coûte le déplacement d\'un plombier à Arlon ?',
        answer: 'Sur Arlon intra-muros (6700, Bonnert, Weyler, Viville, Stockem), le déplacement forfaitaire standard oscille entre 35 € et 50 € HTVA. Chez Plombier Arlon, ce déplacement est fréquemment inclus ou déduit lors d’un forfait d’intervention complet validé au préalable par devis.'
      },
      {
        question: 'Quel est le prix d\'un débouchage de WC en urgence à Arlon ?',
        answer: 'Un débouchage de WC standard par furet mécanique ou pompe à vide coûte en moyenne entre 120 € et 180 € HTVA en journée. Pour un bouchon sévère nécessitant un hydrocurage haute pression ou une inspection par caméra vidéo, le montant se situe entre 190 € et 320 € HTVA.'
      },
      {
        question: 'Pourquoi les prix de plomberie sont-ils plus élevés le soir et le week-end ?',
        answer: 'Les interventions en astreinte (le soir de 18h à 22h, la nuit de 22h à 6h, ainsi que les samedis, dimanches et jours fériés) font l\'objet d\'une majoration légale pour rémunérer le technicien de garde et la mobilisation immédiate d\'un véhicule d\'urgence équipé sous 30 minutes.'
      },
      {
        question: 'Comment bénéficier de la TVA à 6 % sur les travaux de plomberie à Arlon ?',
        answer: 'En Belgique et Région Wallonne, vous bénéficiez d\'un taux de TVA réduit à 6 % (au lieu de 21 %) si votre logement a plus de 10 ans d\'ancienneté, s\'il est affecté principalement comme habitation privée, et si la fourniture et la pose sont effectuées par un entrepreneur enregistré à la BCE.'
      },
      {
        question: 'La recherche de fuite d\'eau est-elle remboursée par l\'assurance habitation ?',
        answer: 'Oui, dans l\'immense majorité des contrats d\'assurance habitation multirisque belge (Ethias, AXA, AG Insurance, Baloise, DKV), les frais de détection de fuite non destructive et le rapport d\'expertise technique rédigé par un plombier agréé sont intégralement pris en charge dans le cadre de la garantie Dégâts des Eaux.'
      }
    ],
    contentHtml: `
<div class="space-y-10 text-on-surface leading-relaxed font-normal">

  <!-- Answer Engine Direct Snippet Box (GEO / AEO) -->
  <div class="p-6 rounded-2xl bg-surface-container-low border-2 border-primary/20 shadow-sm relative overflow-hidden">
    <div class="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-2">
      <span class="material-symbols-outlined text-secondary text-[20px]">bolt</span>
      <span>Synthèse Express Tarifs 2026 (En 45 secondes)</span>
    </div>
    <p class="text-base text-on-surface font-medium leading-relaxed">
      En 2026, le <strong>prix d'un plombier à Arlon</strong> s'établit en moyenne entre <strong>55 € et 75 € HTVA par heure</strong> pour une prestation standard en journée (8h-18h). Pour un dépannage urgent de nuit ou le week-end, le taux horaire majoré varie de <strong>85 € à 140 € HTVA</strong>. Les interventions ciblées (débouchage, fuite, chauffe-eau) sont généralement proposées sous forme de <strong>forfaits transparents compris entre 95 € et 320 € HTVA</strong>, avec devis préalable obligatoire avant tout début de chantier.
    </p>
    <div class="mt-4 pt-3 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-3 text-xs text-on-surface-variant">
      <span>📍 Zone : Arlon (6700) & communes limitrophes (Messancy, Attert, Aubange, Habay, Steinfort)</span>
      <a href="tel:0465286577" class="text-secondary font-bold hover:underline inline-flex items-center gap-1">
        <span>Devis gratuit immédiat au 0465 28 65 77</span> &rarr;
      </a>
    </div>
  </div>

  <!-- Section 1: Introduction -->
  <section id="reponse-directe" class="space-y-4">
    <h2 class="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
      1. Réponse rapide : combien coûte un plombier à Arlon en 2026 ?
    </h2>
    <p>
      Lorsque vous constatez une <strong>fuite d'eau sous l'évier</strong>, un <strong>WC bouché</strong> au rez-de-chaussée ou une coupure brutale d'eau chaude au petit matin, la première interrogation concerne légitimement le coût financier de l'intervention. À Arlon comme dans l'ensemble du Sud de la Province de Luxembourg, les tarifs de plomberie dépendent de plusieurs facteurs clés : la nature exacte de la panne, l'horaire d'appel, le matériel technique nécessaire (caméra d'inspection, hydrocureuse haute pression) et l'application du taux de TVA belge (6 % ou 21 %).
    </p>
    <p>
      Contrairement aux idées reçues, faire appel à un <strong>artisan plombier local établi à Arlon</strong> garantit une facturation encadrée, des frais de route modérés et l'assurance d'un travail couvert par la garantie décennale et la responsabilité civile professionnelle.
    </p>
  </section>

  <!-- Section 2: Taux horaire et Déplacement -->
  <section id="taux-horaire-arlon" class="space-y-4">
    <h2 class="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
      2. Taux horaire et frais de déplacement d'un plombier à Arlon
    </h2>
    <p>
      Le modèle tarifaire en plomberie sanitaire et thermique en Wallonie s'articule autour de deux composantes de base :
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      <div class="p-5 rounded-xl bg-white border border-outline-variant/40 shadow-sm space-y-2">
        <div class="flex items-center gap-2 text-primary font-bold text-lg">
          <span class="material-symbols-outlined text-secondary">schedule</span>
          <h3>Taux horaire en journée (8h - 18h)</h3>
        </div>
        <p class="text-2xl font-extrabold text-primary">55 € à 75 € <span class="text-sm font-normal text-on-surface-variant">HTVA / heure</span></p>
        <p class="text-sm text-on-surface-variant">
          Appliqué aux travaux de réparation, remplacement de robinet, ajustement de tuyauterie cuivre ou multicouche, et petite rénovation sanitaire sur rendez-vous. La première heure est généralement indivisible.
        </p>
      </div>

      <div class="p-5 rounded-xl bg-white border border-outline-variant/40 shadow-sm space-y-2">
        <div class="flex items-center gap-2 text-primary font-bold text-lg">
          <span class="material-symbols-outlined text-secondary">local_shipping</span>
          <h3>Frais de déplacement (Zone Arlon)</h3>
        </div>
        <p class="text-2xl font-extrabold text-primary">35 € à 50 € <span class="text-sm font-normal text-on-surface-variant">HTVA</span></p>
        <p class="text-sm text-on-surface-variant">
          Couvre le carburant, l'amortissement du camion-atelier équipé et le temps de trajet du technicien jusqu'à votre domicile à Arlon centre, Bonnert, Weyler, Viville ou Stockem.
        </p>
      </div>
    </div>

    <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
      <strong>💡 Bon à savoir pour les frontaliers belgo-luxembourgeois :</strong> En raison de la proximité immédiate de la frontière du Grand-Duché (Steinfort, Capellen, Windhof), certains prestataires peu scrupuleux appliquent des grilles tarifaires luxembourgeoises (souvent supérieures à 100 €/h). Chez <a href="/" class="font-bold underline text-primary">Plombier Arlon</a>, nous appliquons rigoureusement la grille tarifaire artisanale belge, vous garantissant un tarif local juste et transparent.
    </div>
  </section>

  <!-- Section 3: Urgences nuit et week-end -->
  <section id="urgences-nuit-weekend" class="space-y-4">
    <h2 class="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
      3. Tarifs dépannage d'urgence : soir, nuit, samedi et dimanche
    </h2>
    <p>
      Un dégât des eaux majeur ou un engorgement de colonne d'évacuation prévient rarement aux heures de bureau. Pour assurer une <strong>permanence d'urgence 24h/24 et 7j/7 sur Arlon</strong>, les entreprises artisanales mobilisent des équipes de piquet avec fourgon d'intervention prêt à partir sous 30 minutes.
    </p>

    <!-- Table of Price Surges -->
    <div class="overflow-x-auto my-6">
      <table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/40 text-left text-sm">
        <thead class="bg-primary text-white text-xs uppercase tracking-wider">
          <tr>
            <th class="p-4">Créneau Horaire</th>
            <th class="p-4">Majoration estimée</th>
            <th class="p-4">Taux horaire moyen HTVA</th>
            <th class="p-4">Délai d'arrivée à Arlon</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-outline-variant/30">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="p-4 font-semibold text-primary">Journée standard (Lundi au Vendredi, 8h-18h)</td>
            <td class="p-4 text-emerald-600 font-bold">Tarif de base (0%)</td>
            <td class="p-4 font-bold">55 € - 75 €</td>
            <td class="p-4">Sur rendez-vous ou 30-45 min</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="p-4 font-semibold text-primary">Soirée & Samedi matin (18h-22h / Samedi 8h-18h)</td>
            <td class="p-4 text-amber-600 font-bold">+50 %</td>
            <td class="p-4 font-bold">85 € - 110 €</td>
            <td class="p-4 font-semibold">Moins de 30 minutes</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors bg-red-50/40">
            <td class="p-4 font-semibold text-red-900">Nuit profonde (22h-06h)</td>
            <td class="p-4 text-secondary font-bold">+100 %</td>
            <td class="p-4 font-bold text-red-700">110 € - 145 €</td>
            <td class="p-4 font-semibold text-secondary">Astreinte immédiate 24/7</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors bg-red-50/40">
            <td class="p-4 font-semibold text-red-900">Dimanche & Jours fériés belges</td>
            <td class="p-4 text-secondary font-bold">+100 %</td>
            <td class="p-4 font-bold text-red-700">110 € - 150 €</td>
            <td class="p-4 font-semibold text-secondary">Astreinte immédiate 24/7</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Section 4: Prix des interventions fréquentes -->
  <section id="prix-interventions-frequentes" class="space-y-6">
    <h2 class="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
      4. Grille des prix pour les interventions de plomberie les plus courantes
    </h2>
    <p>
      Pour les opérations courantes, la plupart des propriétaires arlonais préfèrent un <strong>forfait tout compris</strong> (déplacement + première heure de main-d'œuvre + petites fournitures). Voici les tarifs moyens constatés sur Arlon en 2026 :
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <!-- Card 1: Débouchage -->
      <div class="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">Canalisations</span>
          <span class="text-xs text-on-surface-variant font-medium">Intervention 45-60 min</span>
        </div>
        <h3 class="text-lg font-extrabold text-primary">Débouchage WC, Évier ou Siphon</h3>
        <p class="text-2xl font-black text-secondary">120 € à 180 € <span class="text-xs font-normal text-on-surface-variant">HTVA (Forfait standard)</span></p>
        <p class="text-sm text-on-surface-variant leading-relaxed">
          Comprend le diagnostic, l'actionnement par furet professionnel électromécanique ou pompe haute dépression, le contrôle d'écoulement et le nettoyage de la zone d'intervention.
        </p>
        <a href="/services/debouchage" class="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
          <span>Détails de nos prestations débouchage à Arlon</span> &rarr;
        </a>
      </div>

      <!-- Card 2: Hydrocurage -->
      <div class="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">Haute Pression</span>
          <span class="text-xs text-on-surface-variant font-medium">Camion hydrocureur</span>
        </div>
        <h3 class="text-lg font-extrabold text-primary">Curage d'égout & Débouchage colonne</h3>
        <p class="text-2xl font-black text-secondary">190 € à 320 € <span class="text-xs font-normal text-on-surface-variant">HTVA</span></p>
        <p class="text-sm text-on-surface-variant leading-relaxed">
          Nécessaire lorsque le bouchon est situé profondément dans la canalisation extérieure ou en cas de refoulement généralisé des eaux usées. Pression jusqu'à 200 bars.
        </p>
        <a href="/services/debouchage" class="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
          <span>En savoir plus sur le curage à Arlon</span> &rarr;
        </a>
      </div>

      <!-- Card 3: Détection de fuite -->
      <div class="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">Remboursé Assurance</span>
          <span class="text-xs text-on-surface-variant font-medium">Non destructif</span>
        </div>
        <h3 class="text-lg font-extrabold text-primary">Recherche de Fuite Invisible</h3>
        <p class="text-2xl font-black text-secondary">280 € à 450 € <span class="text-xs font-normal text-on-surface-variant">HTVA</span></p>
        <p class="text-sm text-on-surface-variant leading-relaxed">
          Localisation millimétrique par caméra thermique infrarouge, corrélateur acoustique ou gaz traceur (sans casser carrelage ni cloison) + rédaction du rapport officiel d'expertise pour votre assureur.
        </p>
        <a href="/services/detection-fuites" class="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
          <span>Découvrir notre service détection fuite à Arlon</span> &rarr;
        </a>
      </div>

      <!-- Card 4: Remplacement Robinet & Chasse d'eau -->
      <div class="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">Sanitaire Express</span>
          <span class="text-xs text-on-surface-variant font-medium">Fournitures de marque</span>
        </div>
        <h3 class="text-lg font-extrabold text-primary">Chasse d'eau Geberit ou Mitigeur Grohe</h3>
        <p class="text-2xl font-black text-secondary">95 € à 190 € <span class="text-xs font-normal text-on-surface-variant">HTVA (hors pièce ou pack)</span></p>
        <p class="text-sm text-on-surface-variant leading-relaxed">
          Remplacement du mécanisme flotteur/cloche de WC encastré ou standard, ou pose d'un mitigeur neuf garanti avec raccords flexibles neufs et tests d'étanchéité sous pression.
        </p>
        <a href="/services/installations-sanitaires" class="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
          <span>Voir nos installations sanitaires à Arlon</span> &rarr;
        </a>
      </div>

    </div>
  </section>

  <!-- CTA Banner Inline -->
  <div class="p-8 rounded-3xl bg-gradient-to-br from-primary to-[#002f66] text-white shadow-xl space-y-4">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="space-y-2 text-center md:text-left">
        <span class="text-xs uppercase tracking-widest text-secondary font-extrabold">Urgence Plomberie Arlon 24/7</span>
        <h3 class="text-xl sm:text-2xl font-black">Besoin d'un dépannage immédiat au juste prix ?</h3>
        <p class="text-surface-container-highest text-sm max-w-xl">
          Notre technicien d'astreinte basé à Arlon vous communique un tarif clair par téléphone et vous remet un devis écrit gratuit avant tout travail.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-3 shrink-0">
        <a href="tel:0465286577" class="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-white px-6 py-4 rounded-xl font-extrabold text-sm shadow-lg transition-all">
          <span class="material-symbols-outlined">call</span>
          <span>Appeler : 0465 28 65 77</span>
        </a>
        <a href="https://wa.me/32465286577" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-4 rounded-xl font-bold text-sm shadow-md transition-all">
          <span>WhatsApp Devis</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Section 5: TVA à 6% vs 21% -->
  <section id="tva-reduite-wallonie" class="space-y-4">
    <h2 class="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
      5. TVA à 6 % vs 21 % en Wallonie : comment payer 15 % moins cher ?
    </h2>
    <p>
      La fiscalité belge offre un avantage substantiel pour les travaux de rénovation et d'entretien de plomberie réalisés par un professionnel enregistré :
    </p>
    <ul class="list-disc pl-6 space-y-2 text-on-surface">
      <li>
        <strong>TVA à 6 % (Taux réduit)</strong> : Votre habitation privée à Arlon a <strong>plus de 10 ans d'ancienneté</strong> depuis sa première occupation. La réduction s'applique aussi bien sur la main-d'œuvre que sur les matériaux fournis et posés par l'artisan plombier. Vous économisez immédiatement 15 % sur la facture globale.
      </li>
      <li>
        <strong>TVA à 21 % (Taux plein)</strong> : Logements neufs de moins de 10 ans, ou locaux à usage purement professionnel ou commercial.
      </li>
    </ul>
    <p class="text-sm text-on-surface-variant italic">
      *Note légale : Une simple attestation légale standardisée vous sera fournie par Plombier Arlon avec votre facture pour valider l'application du taux à 6 % auprès du SPF Finances.
    </p>
  </section>

  <!-- Section 6: Assurance Habitation -->
  <section id="remboursement-assurance" class="space-y-4">
    <h2 class="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
      6. Que rembourse votre assurance habitation belge lors d'un sinistre ?
    </h2>
    <p>
      En cas de dégât des eaux dans votre maison ou appartement arlonais, la distinction entre la <em>recherche</em> et la <em>réparation</em> est fondamentale :
    </p>
    <div class="space-y-3">
      <div class="p-4 rounded-xl bg-white border border-outline-variant/40 shadow-sm flex items-start gap-3">
        <span class="p-2 rounded-lg bg-emerald-100 text-emerald-700 mt-1 shrink-0">
          <span class="material-symbols-outlined text-[20px]">check_circle</span>
        </span>
        <div>
          <h4 class="font-bold text-primary">Prise en charge à 100 % (Sans franchise en général)</h4>
          <p class="text-sm text-on-surface-variant mt-1">
            Les frais de détection de fuite non destructive par caméra infrarouge ou gaz traceur, ainsi que les dégâts collatéraux causés par l'eau (peintures, parquets cloqués, plafonnages moisis, déshumidification) sont couverts par votre police Dégâts des Eaux (Ethias, AXA, AG, Baloise, etc.).
          </p>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-white border border-outline-variant/40 shadow-sm flex items-start gap-3">
        <span class="p-2 rounded-lg bg-amber-100 text-amber-700 mt-1 shrink-0">
          <span class="material-symbols-outlined text-[20px]">info</span>
        </span>
        <div>
          <h4 class="font-bold text-primary">À la charge du propriétaire ou locataire</h4>
          <p class="text-sm text-on-surface-variant mt-1">
            La réparation intrinsèque du tuyau d'origine (le manchon de cuivre ou le joint défaillant qui a causé la fuite) reste généralement à la charge de l'assuré (montant modeste, habituellement 80 € à 150 €).
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: Eviter les arnaques -->
  <section id="eviter-les-arnaques" class="space-y-4">
    <h2 class="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
      7. Comment éviter les arnaques au dépannage d'urgence à Arlon
    </h2>
    <p>
      Face à la détresse d'une inondation domestique, certains consommateurs paniqués appellent le premier numéro trouvé sur une annonce sponsorisée non vérifiée. Voici les 4 règles d'or pour vous prémunir des factures abusives à 1 500 € pour un simple coup de pompe :
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
      <div class="p-4 rounded-xl bg-white border border-outline-variant/40 space-y-1">
        <p class="font-bold text-primary text-sm">1. Exigez un prix d'appel clair</p>
        <p class="text-xs text-on-surface-variant">L'artisan doit vous donner une estimation du déplacement et de la main-d'œuvre horaire dès votre échange téléphonique.</p>
      </div>
      <div class="p-4 rounded-xl bg-white border border-outline-variant/40 space-y-1">
        <p class="font-bold text-primary text-sm">2. Signature obligatoire du devis</p>
        <p class="text-xs text-on-surface-variant">Ne laissez jamais un ouvrier commencer à démonter des canalisations sans un ordre de réparation ou devis préalable accepté.</p>
      </div>
      <div class="p-4 rounded-xl bg-white border border-outline-variant/40 space-y-1">
        <p class="font-bold text-primary text-sm">3. Vérifiez le numéro BCE</p>
        <p class="text-xs text-on-surface-variant">Une société belge sérieuse affiche son numéro d'entreprise à la Banque-Carrefour des Entreprises (BCE) sur ses véhicules et documents.</p>
      </div>
      <div class="p-4 rounded-xl bg-white border border-outline-variant/40 space-y-1">
        <p class="font-bold text-primary text-sm">4. Gardez les pièces remplacées</p>
        <p class="text-xs text-on-surface-variant">En cas de remplacement d'un circulateur ou d'une pièce maîtresse, demandez à conserver l'élément défectueux pour votre assurance.</p>
      </div>
    </div>
  </section>

</div>
`
  }
];
