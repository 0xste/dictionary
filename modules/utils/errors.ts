import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export function formatErrorResponse(
    context: ZuploContext,
    request: ZuploRequest,
    status: number,
    message: string,
) {
    return new Response(
        JSON.stringify({
            type: `https://httpproblems.com/http-status/${status}`,
            title: message,
            status: status,
            instance: request.url,
            trace: {
                timestamp: new Date().toISOString(),
                requestId: context.requestId,
                rayId: request?.headers?.get("cf-ray"),
            },
        }),
        {
            status: status,
            headers: {
                "content-type": "application/json",
            },
        },
    );
}


