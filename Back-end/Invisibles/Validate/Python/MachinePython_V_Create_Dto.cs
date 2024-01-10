using FluentValidation;
using Invisibles.DTO.FromFront.SpplementMachine.command;
using Invisibles.DTO.FromPython.Machine.command;

namespace Invisibles.Validate.Python
{
    public class MachinePython_V_Create_Dto : AbstractValidator<MachinePython_Create_Dto>
    {
        public MachinePython_V_Create_Dto()
        {
            
        }
    }
}
