# Utilisation de l'API
l'api est constitué de différentes routes et ces routes on chacun une seule fonctionnalité. Et ces fonctionnalités sont toutes distincte.

### Ajout d'un locataire
lorsque cette route est appelée elle stocke le nouveau locataire dans un map. Pour ce fait plusieur champs doivent être renseigner. Il faut indiquer un id pour distinguer chaque locataire, il faut un nom et prénom pour identifier chaque locataire, il faut indiquer sa profession et ses revenues
### Modification d'un locataire
Losque cette route est appelée elle modifie les donnée du locataire tel que 
- le nom
- prénom 
- profession
- revenue mensuel
qui sont stockés dans un Map
### Suppression d'un locataire
Lorsque cette route est appelée, grâce à l'ID qui est passée en paramettre, le locataire correspondant sera supprimé
### Ajout d'une maison
Lorsque cette route est appelée, un objet avec des paramettres est stocké dans un Map 
### Modification d'une maison
Lorsque cette route est appelée, les données de la maison tel que 
- le prix, 
- l'adresse, 
- le locataire 
seront modifiées
### Suppression d'une maison
Lorsque cette route est appelée, grâce à l'ID qui est passé en paramètre l'objet maison present ou stocké dans le Map sera supprimé