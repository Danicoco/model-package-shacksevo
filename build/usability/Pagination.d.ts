declare class Pagionation {
    static builder(data: any[], count: number, options: {
        page: number;
        limit: number;
    }): {
        to: number;
        from: number;
        totalPages: number;
        total: number;
        limit: number;
        currentPage: number;
    };
}
export default Pagionation;
//# sourceMappingURL=Pagination.d.ts.map