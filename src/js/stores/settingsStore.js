import { writable, derived } from 'svelte/store';
import { defaultSettings} from './defaults.js';

const createSettingsStore = (key, startValue) => {
    const SettingsStore = writable(startValue);
    let subscribe = SettingsStore.subscribe;
    let update = SettingsStore.update;
    let set = SettingsStore.set;

    return {
        startValue,
        subscribe,
        set,
        update,
        useLocalStorage: () => {  
            const json = localStorage.getItem(key);
            if (json) {
                let returnstr = JSON.parse(json)
                set(returnstr);
            }
            
            subscribe(current => {
                localStorage.setItem(key, JSON.stringify(current));
            });
        },
        reset: () => {
            set(startValue)
        },
    };
}

//Settings Stores
export const SettingsStore = createSettingsStore('settings', defaultSettings);

export const loggedIn = writable(true);

export const currentPage = derived(
	SettingsStore,
	$SettingsStore => loggedIn ? $SettingsStore.currentPage : {'name' : 'LockScreen', 'data' : {} }
);

export const firstRun = derived(
	SettingsStore,
	$SettingsStore => $SettingsStore.firstRun
);

export const themeStyle = derived(
	SettingsStore,
	$SettingsStore => $SettingsStore.themeStyle
);

export function calcRemainingStorage(){
    SettingsStore.update(settings => {
        settings.storage.used = new Blob(Object.values(localStorage)).size;
        settings.storage.remaining = settings.storage.max - settings.storage.used;
        return settings;
    })
}