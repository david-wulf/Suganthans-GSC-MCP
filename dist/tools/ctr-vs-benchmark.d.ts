import { SearchType } from "../analytics.js";
interface CtrBenchmarkResult {
    page: string;
    clicks: number;
    impressions: number;
    actualCtr: number;
    position: number;
    benchmarkCtr: number;
    gap: number;
    verdict: string;
}
export declare function ctrVsBenchmark(days?: number, minImpressions?: number, searchType?: SearchType): Promise<CtrBenchmarkResult[]>;
export {};
