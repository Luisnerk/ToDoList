using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Dtos;
using API.Entities;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories;

public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
{
    protected readonly DataContext _context;
    private IMapper _mapper;
    public BaseRepository(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task Register(T entity)
    {
        await _context.Set<T>().AddAsync(entity);
    }

    public async Task<IEnumerable<T>> GetAllAsync()
    {
        return await _context.Set<T>().ToListAsync();
    }

    public async Task<PagedList<T>> GetPaged(int pageNumber)
    {
        var query = _context.Set<T>().AsQueryable();
        var pagedItems = await PagedList<T>.CreateAsync(query.AsNoTracking().ProjectTo<T>(_mapper.ConfigurationProvider), pageNumber);
        return pagedItems;
    }

    public void Delete(T entity)
    {
        _context.Remove(entity);
    }

    public async Task SaveAsync()
    {
        await _context.SaveChangesAsync();
    }
}