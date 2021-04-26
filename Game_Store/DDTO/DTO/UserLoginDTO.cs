using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Game_Store.DDTO.DTO
{
    public class UserLoginDTO
    {
        [Required(ErrorMessage = "Email is required filds")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required filds")]
        public string Password { get; set; }
    }
}
