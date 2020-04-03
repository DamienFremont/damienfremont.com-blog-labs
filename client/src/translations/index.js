import messages_fr from "./fr.json";

const defLang = 'fr';

const usersLocale = () => {
    return navigator.language || 'fr-FR';
}

const translationsForUsersLocale = () => {
    const messages = {
        'fr': messages_fr
    };
    const navLang = navigator.language.split(/[-_]/)[0];  // language without region code
    const currLang = navLang in messages ? navLang : defLang;
    return messages[currLang];
}

export { usersLocale, translationsForUsersLocale };