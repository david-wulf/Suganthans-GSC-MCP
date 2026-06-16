import { SearchType } from "../analytics.js";
interface ContentGap {
    query: string;
    impressions: number;
    clicks: number;
    position: number;
}
export declare function contentGaps(days?: number, minImpressions?: number, minPosition?: number, searchType?: SearchType): Promise<ContentGap[]>;
export {};
