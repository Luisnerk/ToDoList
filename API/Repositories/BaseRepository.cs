using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Interfaces;

namespace API.Repositories;

public class BaseRepository<T> : IBaseRepository<T> where T: BaseEntity
{
    private readonly DataContext _context;
    public BaseRepository(DataContext context)
    {
        _context = context;
    }
    public async void Register(T entity)
    {
        await _context.Set<T>().AddAsync(entity);
    }
}