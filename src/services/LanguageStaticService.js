import i18next from 'i18next'
import Cookies from 'js-cookie';

class LanguageStaticService
{
    constructor()
    {
        this.currentLanguage = 'en';
        this.LANGUAGE_COOKIE_NAME = 'selectedLanguage';
    }

    async initialize()
    {
        let stored = Cookies.get(this.LANGUAGE_COOKIE_NAME);
        if (stored === undefined) {
            stored = navigator.language
        }
        this.currentLanguage = stored;

        await i18next.changeLanguage(this.currentLanguage);

    }

    async changeLanguage(langCode)
    {
        await i18next.changeLanguage(langCode);
        this.currentLanguage = i18next.resolvedLanguage;
    }

    async changeLanguageAndStore(langCode)
    {
        await this.changeLanguage(langCode);
        Cookies.set(this.LANGUAGE_COOKIE_NAME, this.currentLanguage, { expires: 100 });
    }
}

const languageSS = new LanguageStaticService();


export { languageSS };
