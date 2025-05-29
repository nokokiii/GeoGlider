import Surreal from 'surrealdb';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const db = new Surreal();

    await db.connect("wss://flags-06bhn4jv5pt4r1gi9evjmue6jg.aws-euw1.surreal.cloud");
    await db.use({namespace: "main", database: "v1"});
    const token: string = await db.signin({
        username: "root",
        password: "flags123"
    });

    await db.authenticate(token);

    let data: any = await db.query("SELECT flag, name, keys FROM Countries");

	return { data };
};
