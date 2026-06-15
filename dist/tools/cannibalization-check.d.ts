import { SearchType } from "../analytics.js";
interface CannibalizationIssue {
    query: string;
    totalImpressions: number;
    pages: Array<{
        page: string;
        clicks: number;
        impressions: number;
        position: number;
    }>;
}
export declare function cannibalizationCheck(days?: number, minImpressions?: number, searchType?: SearchType): Promise<CannibalizationIssue[]>;
export {};
