/**
 * DeerFlow Mobile — Settings (AsyncStorage-backed)
 *
 * Equivalent to frontend/src/core/settings/local.ts but backed by
 * AsyncStorage instead of localStorage.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

import { DEFAULT_LOCAL_SETTINGS, type LocalSettings } from './types';

const SETTINGS_KEY = 'deerflow.local-settings';

export async function getLocalSettings(): Promise<LocalSettings> {
    try {
        const json = await AsyncStorage.getItem(SETTINGS_KEY);
        if (json) {
            const stored = JSON.parse(json);
            return {
                ...DEFAULT_LOCAL_SETTINGS,
                context: { ...DEFAULT_LOCAL_SETTINGS.context, ...stored.context },
                notification: {
                    ...DEFAULT_LOCAL_SETTINGS.notification,
                    ...stored.notification,
                },
            };
        }
    } catch { }
    return DEFAULT_LOCAL_SETTINGS;
}

export async function saveLocalSettings(
    settings: LocalSettings,
): Promise<void> {
    await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
