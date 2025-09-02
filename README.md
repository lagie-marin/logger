# logger

Logger permet d'afficher des messages colorés en console et d'écrire les logs dans des fichiers, selon l'environnement.

## Installation

```bash
npm install logger
```

## Dépendances
- chalk
- dayjs
- dotenv

## Configuration
Crée un fichier `.env` à la racine de ton projet :

```
DEBUG=true
LOGS=./logs
```
- `DEBUG=true` : active la sauvegarde dans les fichiers
- `LOGS` : dossier où seront stockés les logs

## Utilisation

```js
const { error, serveur, logs, client, sql } = require('logger');

error('Une erreur grave !');
serveur('Serveur démarré');
logs('Message générique');
client('Connexion client');
sql('users', 'SELECT * FROM users;');
```

## API

### error(content: string): Promise<void>
Log une erreur avec un tag rouge et écrit dans le fichier si DEBUG=true.

### serveur(content: string): Promise<void>
Log un message serveur avec un tag bleu et écrit dans le fichier si DEBUG=true.

### logs(content: string): Promise<void>
Log un message générique avec un tag blanc et écrit dans le fichier si DEBUG=true.

### client(content: string): Promise<void>
Log un message client avec un tag vert et écrit dans le fichier si DEBUG=true.

### sql(table_name: string, content: string): void
Ajoute une ligne dans un fichier SQL spécifique.

## Licence
MIT
