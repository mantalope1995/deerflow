/**
 * DeerFlow Mobile — TypeScript Types
 *
 * Ported from frontend/src/core/ with minimal changes.
 * These types mirror the backend data models.
 */

import type { Message, Thread } from '@langchain/langgraph-sdk';

// ---- Todos --------------------------------------------------------------

export interface Todo {
    content?: string;
    status?: 'pending' | 'in_progress' | 'completed';
}

// ---- Thread State -------------------------------------------------------

export interface AgentThreadState extends Record<string, unknown> {
    title: string;
    messages: Message[];
    artifacts: string[];
    todos?: Todo[];
}

export interface AgentThread extends Thread<AgentThreadState> { }

export interface AgentThreadContext extends Record<string, unknown> {
    thread_id: string;
    model_name: string | undefined;
    thinking_enabled: boolean;
    is_plan_mode: boolean;
    subagent_enabled: boolean;
    reasoning_effort?: 'minimal' | 'low' | 'medium' | 'high';
    agent_name?: string;
}

// ---- Models -------------------------------------------------------------

export interface Model {
    id: string;
    name: string;
    display_name: string;
    description?: string | null;
    supports_thinking?: boolean;
    supports_reasoning_effort?: boolean;
}

// ---- Uploads ------------------------------------------------------------

export interface UploadedFileInfo {
    filename: string;
    size: number;
    path: string;
    virtual_path: string;
    artifact_url: string;
    extension?: string;
    modified?: number;
    markdown_file?: string;
    markdown_path?: string;
    markdown_virtual_path?: string;
    markdown_artifact_url?: string;
}

export interface UploadResponse {
    success: boolean;
    files: UploadedFileInfo[];
    message: string;
}

export interface ListFilesResponse {
    files: UploadedFileInfo[];
    count: number;
}

// ---- Settings -----------------------------------------------------------

export type AgentMode = 'flash' | 'thinking' | 'pro' | 'ultra';

export interface LocalSettings {
    notification: {
        enabled: boolean;
    };
    context: Omit<
        AgentThreadContext,
        'thread_id' | 'is_plan_mode' | 'thinking_enabled' | 'subagent_enabled'
    > & {
        mode: AgentMode | undefined;
        reasoning_effort?: 'minimal' | 'low' | 'medium' | 'high';
    };
}

export const DEFAULT_LOCAL_SETTINGS: LocalSettings = {
    notification: {
        enabled: true,
    },
    context: {
        model_name: undefined,
        mode: undefined,
        reasoning_effort: undefined,
    },
};

// ---- Skills -------------------------------------------------------------

export interface Skill {
    name: string;
    display_name?: string;
    description?: string;
    enabled: boolean;
}

// ---- Memory -------------------------------------------------------------

export interface MemoryFact {
    id: string;
    content: string;
    category: 'preference' | 'knowledge' | 'context' | 'behavior' | 'goal';
    confidence: number;
    createdAt: string;
    source?: string;
}

export interface MemoryData {
    userContext?: {
        workContext?: string;
        personalContext?: string;
        topOfMind?: string;
    };
    history?: {
        recentMonths?: string;
        earlierContext?: string;
        longTermBackground?: string;
    };
    facts?: MemoryFact[];
}
