import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import config from "@/config";


export default getRequestConfig(async ({locale}) => {
    if (!config.locales.includes(locale as any)) notFound();
    return {
        messages: (await import(`./messages/${locale}.json`)).default
    };
});