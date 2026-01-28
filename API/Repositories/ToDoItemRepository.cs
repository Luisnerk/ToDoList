
using API.Data;
using API.Entities;
using API.Interfaces;
using AutoMapper;

namespace API.Repositories;

public class ToDoItemRepository : BaseRepository<ToDoItem>, IToDoItemRepository
{

    public ToDoItemRepository(DataContext context, IMapper mapper) : base(context, mapper)
    {
    }

    public async Task<bool> ToDoDone(int id)
    {
        var item = await _context.Set<ToDoItem>().FindAsync(id);
        if (item == null)
        {
            return false;
        }
        item.Done = true;
         _context.Set<ToDoItem>().Update(item);
         return true;
    }
}