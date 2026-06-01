/**
 * Log une erreur avec un tag rouge et écrit dans le fichier si DEBUG=true.
 * @param content - Les messages à logger.
 * @returns Promise<void>
 */
export declare function error(...content: unknown[]): Promise<void>;

/**
 * Log un message serveur avec un tag bleu et écrit dans le fichier si DEBUG=true.
 * @param content - Les messages à logger.
 * @returns Promise<void>
 */
export declare function serveur(...content: unknown[]): Promise<void>;

/**
 * Log un message générique avec un tag blanc et écrit dans le fichier si DEBUG=true.
 * @param content - Les messages à logger.
 * @returns Promise<void>
 */
export declare function logs(...content: unknown[]): Promise<void>;

/**
 * Log un message client avec un tag vert et écrit dans le fichier si DEBUG=true.
 * @param content - Les messages à logger.
 * @returns Promise<void>
 */
export declare function client(...content: unknown[]): Promise<void>;

/**
 * Ajoute une ligne dans un fichier SQL spécifique.
 * @param table_name - Le nom de la table/fichier SQL.
 * @param content - Le contenu à ajouter.
 */
export declare function sql(table_name: string, content: string): void;
