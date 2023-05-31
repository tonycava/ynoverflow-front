import type { ActionResult } from "@sveltejs/kit";

export type YnoverflowResponse<T> = {
    message: string;
    code: number;
    data: T;
}

export type FormActionResponse = ({ result, update }: { result: ActionResult, update: () => void }) => Promise<void>;