
using API.Entities;

namespace API.Interfaces;

public interface IBaseRepository<T> where T: BaseEntity
{
    public void Register(T entity);
}