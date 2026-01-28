
using API.Entities;
using API.Helpers;

namespace API.Interfaces;

public interface IBaseRepository<T> where T : BaseEntity
{
    public Task Register(T entity);
    public Task<IEnumerable<T>> GetAllAsync();
    public Task<PagedList<T>> GetPaged(int pageNumber);

    public void Delete(T entity);
}