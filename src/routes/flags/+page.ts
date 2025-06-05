import Surreal from 'surrealdb';
import type { PageLoad } from './$types';
import { DB_URL, USER, PASSWD } from '$env/static/private';

export const load: PageLoad = async ({ setHeaders }) => {
    const db = new Surreal();

    await db.connect(DB_URL);
    await db.use({ namespace: "main", database: "v1" });

    const token: string = await db.signin({
        username: USER,
        password: PASSWD
    });

    await db.authenticate(token);

    let data: any = await db.query("SELECT flag, name.en as name, keys.en as keys FROM Countries");

    setHeaders({
        'cache-control': 'public, max-age=3600'
    });

    return { data };
};
