"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pagionation = /** @class */ (function () {
    function Pagionation() {
    }
    Pagionation.builder = function (data, count, options) {
        var page = options.page, limit = options.limit;
        var pages = count / limit;
        var from = Number(options.page) === 1 ? 1 : (options.page - 1) * limit + 1;
        var to = from + data.length - 1;
        var totalPages = pages > Math.floor(pages) ? Math.floor(pages + 1) : pages;
        return {
            to: to,
            from: from,
            totalPages: totalPages,
            total: count,
            limit: Number(limit),
            currentPage: Number(page),
        };
    };
    return Pagionation;
}());
exports.default = Pagionation;
//# sourceMappingURL=Pagination.js.map