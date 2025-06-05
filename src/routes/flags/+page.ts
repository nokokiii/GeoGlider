import Surreal from 'surrealdb';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ setHeaders }) => {
    const db = new Surreal();

    await db.connect("wss://flags-06bhn4jv5pt4r1gi9evjmue6jg.aws-euw1.surreal.cloud");
    await db.use({ namespace: "main", database: "v1" });

    const token: string = await db.signin({
        username: "root",
        password: "flags123"
    });

    await db.authenticate(token);

    let data: any = await db.query("SELECT flag, name.en as name, keys.en as keys FROM Countries");

    setHeaders({
        'cache-control': 'public, max-age=3600'
    });

    return { data };
};
