using Game_Store.DDTO.DataAccess.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Game_Store.DDTO.Domain.Interfaces
{
    public interface IJWTTokenService
    {
        string CreateToken(User user);
    }
}
