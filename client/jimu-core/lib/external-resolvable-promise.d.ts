export declare class ExternalResolvablePromise {
    private readonly _promise;
    private _resolver;
    private _rejecter;
    private _status;
    constructor();
    resolve(data: any): void;
    reject(err: any): void;
    get status(): "rejected" | "pending" | "resolved";
    get promise(): Promise<any>;
}
