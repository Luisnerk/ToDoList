using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure.Internal;

namespace API.Helpers;
public class PagedList<T> : List<T>
{
    public int PageSize { get; set; }
    public int CurrentPage { get; set; }
    public int TotalPages { get; set; }
    public int TotalItems { get; set; }
    public PagedList(IEnumerable<T> items, int currentPage, int totalPages, int pageSize, int totalItems)
    {
        CurrentPage = currentPage;
        TotalPages = totalPages;
        PageSize = pageSize;
        TotalItems = totalItems;
        AddRange(items);
    }

    public static async Task<PagedList<T>> CreateAsync(IQueryable<T> source, UserParams userParams)
    {
        int pageSize = userParams.PageSize;
        int count = await source.CountAsync();
        int totalPages = (int)Math.Ceiling((double)count/pageSize);
        int pageNumber = userParams.pageNumber <= totalPages ? userParams.pageNumber : totalPages;
        var items = await source.Skip((pageNumber-1) * pageSize).Take(pageSize).ToListAsync();

        return new PagedList<T>(items, pageNumber, totalPages, pageSize, count);
    }
}