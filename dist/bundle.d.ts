declare type Jar<T> = [Error | null, Awaited<T>];
declare type JarChain<T> = T extends Jar<infer U> ? JarChainJoin<U> : Jar<T>;
declare type JarChainJoin<T> = T extends Jar<infer U> ? JarChainJoin<U> : Awaited<T>;

interface Either {
    <A extends unknown[], R>(fn: (...args: A) => R): <X = R>(...args: A) => Promise<Jar<X>>;
}
declare const either: Either;

declare const interval: (ms?: number | undefined) => {
    loop: <X = Promise<void>>(fn: () => void | Promise<void>) => Promise<Jar<X>>;
    stop: () => void;
};

declare const lock: <A extends unknown[], R>(init?: ((...args: A) => R) | undefined) => <X = R>(...args: A) => Promise<Jar<X>>;

declare const pended: () => {
    resolve: () => void;
    reject: () => void;
    pending: Promise<void>;
};

declare type PipeChain<T> = T extends Pipeline<infer U> | Promise<infer U> ? PipeChain<JarChainJoin<U>> : Pipeline<T>;
declare class Pipeline<X> extends Promise<Jar<X>> {
    pipe<R>(f: (x: X) => R): PipeChain<R>;
}
declare const pipeline: <X>(x?: X | undefined) => PipeChain<X>;

interface Compose {
    <T1, R>(fn1: (t1: T1) => R): (init?: T1) => R;
    <T1, T2, R>(fn1: (t1: T1) => T2, fn2: (t2: T2) => R): (init?: T1) => R;
    <T1, T2, T3, R>(fn1: (t1: T1) => T2, fn2: (t2: T2) => T3, fn3: (t3: T3) => R): (init?: T1) => R;
    <T1, T2, T3, T4, R>(fn1: (t1: T1) => T2, fn2: (t2: T2) => T3, fn3: (t3: T3) => T4, fn4: (t4: T4) => R): (init?: T1) => R;
    <T1, T2, T3, T4, T5, R>(fn1: (t1: T1) => T2, fn2: (t2: T2) => T3, fn3: (t3: T3) => T4, fn4: (t4: T4) => T5, fn5: (t5: T5) => R): (init?: T1) => R;
    <T1, T2, T3, T4, T5, T6, R>(fn1: (t1: T1) => T2, fn2: (t2: T2) => T3, fn3: (t3: T3) => T4, fn4: (t4: T4) => T5, fn5: (t5: T5) => T6, fn6: (t6: T6) => R): (init?: T1) => R;
    <T1, T2, T3, T4, T5, T6, T7, R>(fn1: (t1: T1) => T2, fn2: (t2: T2) => T3, fn3: (t3: T3) => T4, fn4: (t4: T4) => T5, fn5: (t5: T5) => T6, fn6: (t6: T6) => T7, fn7: (t7: T7) => R): (init?: T1) => R;
    <T1, T2, T3, T4, T5, T6, T7, T8, R>(fn1: (t1: T1) => T2, fn2: (t2: T2) => T3, fn3: (t3: T3) => T4, fn4: (t4: T4) => T5, fn5: (t5: T5) => T6, fn6: (t6: T6) => T7, fn7: (t7: T7) => T8, fn8: (t7: T8) => R): (init?: T1) => R;
    <T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(fn1: (t1: T1) => T2, fn2: (t2: T2) => T3, fn3: (t3: T3) => T4, fn4: (t4: T4) => T5, fn5: (t5: T5) => T6, fn6: (t6: T6) => T7, fn7: (t7: T7) => T8, fn8: (t7: T8) => T9, fn9: (t7: T9) => R): (init?: T1) => R;
    <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(fn1: (t1: T1) => T2, fn2: (t2: T2) => T3, fn3: (t3: T3) => T4, fn4: (t4: T4) => T5, fn5: (t5: T5) => T6, fn6: (t6: T6) => T7, fn7: (t7: T7) => T8, fn8: (t8: T8) => T9, fn9: (t9: T9) => T10, fn10: (t10: T10) => R): (init?: T1) => R;
    <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(fn1: (t1: T1) => T2, fn2: (t2: T2) => T3, fn3: (t3: T3) => T4, fn4: (t4: T4) => T5, fn5: (t5: T5) => T6, fn6: (t6: T6) => T7, fn7: (t7: T7) => T8, fn8: (t8: T8) => T9, fn9: (t9: T9) => T10, fn10: (t10: T10) => T11, fn11: (t11: T11) => R): (init?: T1) => R;
    <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(fn1: (t1: T1) => T2, fn2: (t2: T2) => T3, fn3: (t3: T3) => T4, fn4: (t4: T4) => T5, fn5: (t5: T5) => T6, fn6: (t6: T6) => T7, fn7: (t7: T7) => T8, fn8: (t8: T8) => T9, fn9: (t9: T9) => T10, fn10: (t10: T10) => T11, fn11: (t11: T11) => T12, fn12: (t12: T12) => R): (init?: T1) => R;
}
declare type Out<T> = Awaited<T>;
declare type Init<T> = Out<T> | Result<T>;
declare type Chain<T> = T;
declare type Result<T> = Promise<Awaited<T>>;
declare type ResultFn<T, R> = T extends undefined ? () => Promise<Awaited<T>> : (init: Init<T>) => Promise<Awaited<R>>;
interface AsyncCompose {
    <T1, R>(fn1: (t1: Out<T1>) => Chain<R>): ResultFn<T1, R>;
    <T1, T2, R>(fn1: (t1: Out<T1>) => Chain<T2>, fn2: (t2: Out<T2>) => Chain<R>): ResultFn<T1, R>;
    <T1, T2, T3, R>(fn1: (t1: Out<T1>) => Chain<T2>, fn2: (t2: Out<T2>) => Chain<T3>, fn3: (t3: Out<T3>) => Chain<R>): ResultFn<T1, R>;
    <T1, T2, T3, T4, R>(fn1: (t1: Out<T1>) => Chain<T2>, fn2: (t2: Out<T2>) => Chain<T3>, fn3: (t3: Out<T3>) => Chain<T4>, fn4: (t4: Out<T4>) => Chain<R>): ResultFn<T1, R>;
    <T1, T2, T3, T4, T5, R>(fn1: (t1: Out<T1>) => Chain<T2>, fn2: (t2: Out<T2>) => Chain<T3>, fn3: (t3: Out<T3>) => Chain<T4>, fn4: (t4: Out<T4>) => Chain<T5>, fn5: (t5: Out<T5>) => Chain<R>): ResultFn<T1, R>;
    <T1, T2, T3, T4, T5, T6, R>(fn1: (t1: Out<T1>) => Chain<T2>, fn2: (t2: Out<T2>) => Chain<T3>, fn3: (t3: Out<T3>) => Chain<T4>, fn4: (t4: Out<T4>) => Chain<T5>, fn5: (t5: Out<T5>) => Chain<T6>, fn6: (t5: Out<T6>) => Chain<R>): ResultFn<T1, R>;
    <T1, T2, T3, T4, T5, T6, T7, R>(fn1: (t1: Out<T1>) => Chain<T2>, fn2: (t2: Out<T2>) => Chain<T3>, fn3: (t3: Out<T3>) => Chain<T4>, fn4: (t4: Out<T4>) => Chain<T5>, fn5: (t5: Out<T5>) => Chain<T6>, fn6: (t5: Out<T6>) => Chain<T7>, fn7: (t5: Out<T7>) => Chain<R>): ResultFn<T1, R>;
    <T1, T2, T3, T4, T5, T6, T7, T8, R>(fn1: (t1: Out<T1>) => Chain<T2>, fn2: (t2: Out<T2>) => Chain<T3>, fn3: (t3: Out<T3>) => Chain<T4>, fn4: (t4: Out<T4>) => Chain<T5>, fn5: (t5: Out<T5>) => Chain<T6>, fn6: (t5: Out<T6>) => Chain<T7>, fn7: (t5: Out<T7>) => Chain<T8>, fn8: (t5: Out<T8>) => Chain<R>): ResultFn<T1, R>;
    <T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(fn1: (t1: Out<T1>) => Chain<T2>, fn2: (t2: Out<T2>) => Chain<T3>, fn3: (t3: Out<T3>) => Chain<T4>, fn4: (t4: Out<T4>) => Chain<T5>, fn5: (t5: Out<T5>) => Chain<T6>, fn6: (t5: Out<T6>) => Chain<T7>, fn7: (t5: Out<T7>) => Chain<T8>, fn8: (t5: Out<T8>) => Chain<T9>, fn9: (t5: Out<T9>) => Chain<R>): ResultFn<T1, R>;
    <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(fn1: (t1: Out<T1>) => Chain<T2>, fn2: (t2: Out<T2>) => Chain<T3>, fn3: (t3: Out<T3>) => Chain<T4>, fn4: (t4: Out<T4>) => Chain<T5>, fn5: (t5: Out<T5>) => Chain<T6>, fn6: (t6: Out<T6>) => Chain<T7>, fn7: (t7: Out<T7>) => Chain<T8>, fn8: (t8: Out<T8>) => Chain<T9>, fn9: (t9: Out<T9>) => Chain<T10>, fn10: (t10: Out<T10>) => Chain<R>): ResultFn<T1, R>;
    <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(fn1: (t1: Out<T1>) => Chain<T2>, fn2: (t2: Out<T2>) => Chain<T3>, fn3: (t3: Out<T3>) => Chain<T4>, fn4: (t4: Out<T4>) => Chain<T5>, fn5: (t5: Out<T5>) => Chain<T6>, fn6: (t6: Out<T6>) => Chain<T7>, fn7: (t7: Out<T7>) => Chain<T8>, fn8: (t8: Out<T8>) => Chain<T9>, fn9: (t9: Out<T9>) => Chain<T10>, fn10: (t10: Out<T10>) => Chain<T11>, fn11: (t11: Out<T11>) => Chain<R>): ResultFn<T1, R>;
    <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(fn1: (t1: Out<T1>) => Chain<T2>, fn2: (t2: Out<T2>) => Chain<T3>, fn3: (t3: Out<T3>) => Chain<T4>, fn4: (t4: Out<T4>) => Chain<T5>, fn5: (t5: Out<T5>) => Chain<T6>, fn6: (t6: Out<T6>) => Chain<T7>, fn7: (t7: Out<T7>) => Chain<T8>, fn8: (t8: Out<T8>) => Chain<T9>, fn9: (t9: Out<T9>) => Chain<T10>, fn10: (t10: Out<T10>) => Chain<T11>, fn11: (t11: Out<T11>) => Chain<T12>, fn12: (t12: Out<T12>) => Chain<R>): ResultFn<T1, R>;
}
declare const compose: Compose;
declare const asyncCompose: AsyncCompose;

declare type Functor<T extends unknown> = {
    ap(x: JarChainJoin<T> extends (...args: any[]) => any ? Parameters<JarChainJoin<T>>[0] : never): JarChainJoin<T> extends (...args: any[]) => any ? FunctorChain<JarChain<ReturnType<JarChainJoin<T>>>> : never;
    map<R>(f: (x: JarChainJoin<T>) => R): FunctorChain<JarChain<R>>;
    join(): T;
};
declare type FunctorChain<T> = T extends Functor<infer U> ? FunctorChain<U> : Functor<T>;
declare const isFunctor: <T>(x: any) => x is FunctorChain<T>;
declare function functor<T>(x: T): FunctorChain<JarChain<T>>;

declare const wait: (ms?: number | undefined) => Promise<unknown>;

export { AsyncCompose, Compose, asyncCompose, compose, either, functor, interval, isFunctor, lock, pended, pipeline, wait };
