declare class Tuple<T> extends Array<T> {
}
export declare const isTuple: (x: unknown) => x is Tuple<unknown>;
export declare const tupleErr: (v?: unknown) => [Error, null];
export declare const tupleVal: <T>(v: T) => Jar<T>;
export declare const tuples: readonly [<T>(v: T) => Jar<T>, (v?: unknown) => [Error, null]];
export declare type Jar<T> = [Error | null, Awaited<T>];
export declare type JarChain<T> = T extends Jar<infer U> ? JarChainJoin<U> : Jar<T>;
export declare type JarChainJoin<T> = T extends Jar<infer U> ? JarChainJoin<U> : Awaited<T>;
export {};
