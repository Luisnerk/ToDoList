
using API.Entities;

namespace API.Interfaces;

public interface IBaseRepository<T> where T : BaseEntity
{
    public Task Register(T entity);
    public Task<IEnumerable<T>> GetAllAsync();

    public void Delete(T entity);
}