using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ToDoItemController : BaseController
{
    private readonly ToDoItemRepository _itemRepository;
    public ToDoItemController(IMapper mapper, DataContext context) : base(mapper, context)
    {
        _itemRepository = new ToDoItemRepository(_context);
    }

    [HttpPost]
    public async Task<ActionResult> RegisterItem([FromBody] ToDoItem item)
    {
        await _itemRepository.Register(item);
        await _itemRepository.SaveAsync();
        return Ok();
    }

    [HttpGet("all")]
    public async Task<ActionResult<ToDoItem>> GetAllItems()
    {
        var items = await _itemRepository.GetAllAsync();
        return Ok(items);
    }
}