/**
 * DeerFlow Mobile — LangGraph API client (singleton)
 *
 * Mirrors frontend/src/core/api/api-client.ts
 */

import { Client as LangGraphClient } from '@langchain/langgraph-sdk/client';

import { getLangGraphBaseURL } from './config';

let _singleton: LangGraphClient | null = null;

export function getAPIClient(): LangGraphClient {
    _singleton ??= new LangGraphClient({
        apiUrl: getLangGraphBaseURL(),
    });
    return _singleton;
}

/**
 * Re-create the client (e.g. after user changes the server URL in settings).
 */
export function resetAPIClient(): void {
    _singleton = null;
}
