
using API.Data;
using API.Entities;

namespace API.Repositories;

public class ToDoItemRepository : BaseRepository<ToDoItem>
{
    public ToDoItemRepository(DataContext context) : base(context)
    {
    }
}