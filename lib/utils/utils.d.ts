import { Conf, RGB } from './interfaces';
export declare function randomInt(max?: number): number;
export declare function randomFloat(max?: number): number;
export declare function hexToRgb(hex: string): RGB;
export declare function deepExtend(destination: Conf, source: Map<any, any>): Conf;
export declare function clamp(number: number, min: number, max: number): number;
export declare function isInArray(value: any, array: string | Array<any>): boolean;
