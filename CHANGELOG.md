# Historique des versions – UTGL 5P

## v1.2.2 – 20 novembre 2026
- Imports INFOMED (472 documents, 26 provinces) transférés dans la base de la version web, avec contrôle d'intégrité.
- Chargement accéléré : un seul téléchargement partagé des imports, au lieu de deux.
- Connecteur INFOMED › « Couverture des données » : mois importés par province, série et année (P1, disponibilité, DISMED, stock par BCZ).
- Données INFOMED complétées (extraction du 20/11/2026, 332 documents) : disponibilité 2024, 2025 et 2026 ; DISMED aux CDR 2026 ; complétude et exhaustivité 2024-2025 ; octobre 2026 actualisé. Contrôle d'intégrité après chargement (liste des documents et somme des valeurs identiques).
- Rapports GTM : avertissement à l'écran et ligne dans la page de traçabilité (PDF, PPTX) lorsque les données INFOMED de la période sont incomplètes.

## v1.2.0 – 20 novembre 2026
- Page d'accès obligatoire : l'application et les données ne s'affichent qu'après connexion d'un compte actif ; création de compte avec contrôle des doublons ; statut « En attente d'activation » affiché à l'utilisateur ; courriel automatique à l'activation par un administrateur.
- Verrouillage provincial : tout profil rattaché à une province (ex. Lecteur · Kinshasa) ne voit que sa province, dans tous les écrans, rapports et exports ; contrôle également appliqué par le serveur de la base.
- Données de référence (classeur V8.2) retirées de la page publique et chargées depuis la base après connexion, filtrées par province.
- Rapport GTM : exhaustivité du BCZ ajoutée au pilier 1 (indicateur suivi, hors score) ; nouvelle section « Produits traceurs par niveau (ESS, BCZ, CDR) » au pilier 2 ; CAPA du pilier 2 précisées par les produits traceurs en rupture.
- Export Excel des produits traceurs (Décisions DPS, Bulletin & alertes), par province.
- Paramètres des cibles : versions datées des cibles (manuel SIGL ou décision), applicables à partir d'une date d'effet, sans effet rétroactif.
- Administration : signalement des doublons possibles parmi les comptes.
- Application installable (ordinateur, tablette, téléphone) : icône « UTGL 5P » sur le bureau, ouverture dans sa propre fenêtre.

## v1.1.0 – 20 novembre 2026
- Authentification des utilisateurs (adresse électronique et mot de passe, confirmation de l'adresse, réinitialisation du mot de passe).
- Gestion des utilisateurs et des profils : pré-autorisation d'adresses, activation et désactivation des comptes, profil et province par personne.
- Règles d'accès appliquées par le serveur de la base, par profil et par province ; traçabilité automatique (auteur et date) de chaque écriture ; journal d'audit non modifiable.
- Sauvegardes : téléchargement manuel d'une copie complète (JSON) et restauration contrôlée par un administrateur.
- Sans connexion : démonstration en consultation.

## v1.0.0 – 19 novembre 2026
- Mise en ligne de l'application : tableaux de bord des 5 Piliers, rapports GTM (PDF et PowerPoint signés), modules de formation vidéo 1 à 3.
