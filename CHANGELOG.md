# Historique des versions – UTGL 5P

## v1.2.0 – 20 novembre 2026
- Page d'accès obligatoire : l'application et les données ne s'affichent qu'après connexion d'un compte actif ; création de compte avec contrôle des doublons ; statut « En attente d'activation » affiché à l'utilisateur ; courriel automatique à l'activation par un administrateur.
- Verrouillage provincial : tout profil rattaché à une province (ex. Lecteur · Kinshasa) ne voit que sa province, dans tous les écrans, rapports et exports ; contrôle également appliqué par le serveur de la base.
- Données de référence (classeur V8.2) retirées de la page publique et chargées depuis la base après connexion, filtrées par province.
- Rapport GTM : exhaustivité du BCZ ajoutée au pilier 1 (indicateur suivi, hors score) ; nouvelle section « Produits traceurs par niveau (ESS, BCZ, CDR) » au pilier 2 ; CAPA du pilier 2 précisées par les produits traceurs en rupture.
- Export Excel des produits traceurs (Décisions DPS, Bulletin & alertes), par province.
- Paramètres des cibles : versions datées des cibles (manuel SIGL ou décision), applicables à partir d'une date d'effet, sans effet rétroactif.
- Administration : signalement des doublons possibles parmi les comptes.

## v1.1.0 – 20 novembre 2026
- Authentification des utilisateurs (adresse électronique et mot de passe, confirmation de l'adresse, réinitialisation du mot de passe).
- Gestion des utilisateurs et des profils : pré-autorisation d'adresses, activation et désactivation des comptes, profil et province par personne.
- Règles d'accès appliquées par le serveur de la base, par profil et par province ; traçabilité automatique (auteur et date) de chaque écriture ; journal d'audit non modifiable.
- Sauvegardes : téléchargement manuel d'une copie complète (JSON) et restauration contrôlée par un administrateur.
- Sans connexion : démonstration en consultation.

## v1.0.0 – 19 novembre 2026
- Mise en ligne de l'application : tableaux de bord des 5 Piliers, rapports GTM (PDF et PowerPoint signés), modules de formation vidéo 1 à 3.
