/**
 * DeerFlow Mobile — Configuration
 *
 * Central place for API base URLs and feature flags.
 * On mobile the user can configure their own DeerFlow server URL.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'deerflow.server-url';

// Default: assume same-network access via mDNS / local IP.
// Users should configure this in Settings to point at their DeerFlow server.
let _serverUrl: string = 'http://localhost:2026';

/**
 * Initialise the server URL from persisted storage.
 * Call once at app startup.
 */
export async function initServerUrl(): Promise<void> {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    if (stored) {
        _serverUrl = stored;
    }
}

export function getServerUrl(): string {
    return _serverUrl;
}

export async function setServerUrl(url: string): Promise<void> {
    _serverUrl = url.replace(/\/+$/, ''); // strip trailing slashes
    await AsyncStorage.setItem(STORAGE_KEY, _serverUrl);
}

/**
 * Gateway API base URL  (e.g.  http://192.168.1.10:2026)
 */
export function getBackendBaseURL(): string {
    return _serverUrl;
}

/**
 * LangGraph SDK base URL (e.g.  http://192.168.1.10:2026/api/langgraph)
 */
export function getLangGraphBaseURL(): string {
    return `${_serverUrl}/api/langgraph`;
}
