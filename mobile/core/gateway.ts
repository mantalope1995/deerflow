/**
 * DeerFlow Mobile — Gateway API utilities
 *
 * Thin wrappers around the Gateway REST API.
 * Ported from frontend/src/core/{models,uploads,skills,memory}/api.ts
 */

import { getBackendBaseURL } from './config';
import type {
    ListFilesResponse,
    MemoryData,
    Model,
    Skill,
    UploadResponse,
} from './types';

// ---- Models -------------------------------------------------------------

export async function loadModels(): Promise<Model[]> {
    const res = await fetch(`${getBackendBaseURL()}/api/models`);
    if (!res.ok) throw new Error('Failed to load models');
    const { models } = (await res.json()) as { models: Model[] };
    return models;
}

// ---- Skills -------------------------------------------------------------

export async function loadSkills(): Promise<Skill[]> {
    const res = await fetch(`${getBackendBaseURL()}/api/skills`);
    if (!res.ok) throw new Error('Failed to load skills');
    const { skills } = (await res.json()) as { skills: Skill[] };
    return skills;
}

export async function updateSkill(
    name: string,
    enabled: boolean,
): Promise<void> {
    const res = await fetch(`${getBackendBaseURL()}/api/skills/${name}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled }),
    });
    if (!res.ok) throw new Error('Failed to update skill');
}

// ---- Memory -------------------------------------------------------------

export async function loadMemory(): Promise<MemoryData> {
    const res = await fetch(`${getBackendBaseURL()}/api/memory`);
    if (!res.ok) throw new Error('Failed to load memory');
    return res.json();
}

export async function reloadMemory(): Promise<void> {
    const res = await fetch(`${getBackendBaseURL()}/api/memory/reload`, {
        method: 'POST',
    });
    if (!res.ok) throw new Error('Failed to reload memory');
}

// ---- Uploads ------------------------------------------------------------

export async function uploadFiles(
    threadId: string,
    files: { uri: string; name: string; type: string }[],
): Promise<UploadResponse> {
    const formData = new FormData();

    for (const file of files) {
        formData.append('files', {
            uri: file.uri,
            name: file.name,
            type: file.type,
        } as unknown as Blob);
    }

    const res = await fetch(
        `${getBackendBaseURL()}/api/threads/${threadId}/uploads`,
        { method: 'POST', body: formData },
    );

    if (!res.ok) {
        const error = await res
            .json()
            .catch(() => ({ detail: 'Upload failed' }));
        throw new Error(error.detail ?? 'Upload failed');
    }

    return res.json();
}

export async function listUploads(
    threadId: string,
): Promise<ListFilesResponse> {
    const res = await fetch(
        `${getBackendBaseURL()}/api/threads/${threadId}/uploads/list`,
    );
    if (!res.ok) throw new Error('Failed to list uploads');
    return res.json();
}

export async function deleteUpload(
    threadId: string,
    filename: string,
): Promise<void> {
    const res = await fetch(
        `${getBackendBaseURL()}/api/threads/${threadId}/uploads/${filename}`,
        { method: 'DELETE' },
    );
    if (!res.ok) throw new Error('Failed to delete upload');
}

// ---- Health -------------------------------------------------------------

export async function checkHealth(): Promise<boolean> {
    try {
        const res = await fetch(`${getBackendBaseURL()}/health`, {
            signal: AbortSignal.timeout(5000),
        });
        return res.ok;
    } catch {
        return false;
    }
}
