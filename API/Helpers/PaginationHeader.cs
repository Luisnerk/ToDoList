using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers;
public class PaginationHeader
{
    public int CurrentPage { get; set; }
    public int ItemsPerPage { get; set; }

    public PaginationHeader(int currentPage, int itemsPerPage)
    {
        CurrentPage = currentPage;
        ItemsPerPage = itemsPerPage;
    }
}