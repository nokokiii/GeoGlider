import Surreal from 'surrealdb';
import { DB_URL, USER, PASSWD } from '$env/static/private';
import type { PageServerLoad } from './$types';

type CountryCapital = {
    flag: string;
    name: string;
    keys: string[];
}

export const load: PageServerLoad = async () => {
    async function getCountries(): Promise<CountryCapital[]> {
        const db = new Surreal();
        await db.connect(DB_URL);
        await db.use({ namespace: "main", database: "v1" });

        const token: string = await db.signin({
            username: USER,
            password: PASSWD
        });

        await db.authenticate(token);

        const data: any = await db.query("SELECT flag, capital.en as name, [string::lowercase(capital.en)] as keys FROM Countries ORDER BY RAND()");

        await db.close();

        return data[0];
    }
    
    return { 
        streamed: {
            countries: (async () => {
                const countries = await getCountries();
                return countries;
            })()
        },  
    }
};
