class Pagionation {
  public static builder(
    data: any[],
    count: number,
    options: { page: number; limit: number }
  ) {
    const { page, limit } = options;
    const pages = count / limit;
    const from =
      Number(options.page) === 1 ? 1 : (options.page - 1) * limit + 1;
    const to = from + data.length - 1;
    const totalPages =
      pages > Math.floor(pages) ? Math.floor(pages + 1) : pages;
    return {
      to,
      from,
      totalPages,
      total: count,
      limit: Number(limit),
      currentPage: Number(page),
    };
  }
}

export default Pagionation;
