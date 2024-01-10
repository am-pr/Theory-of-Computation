using FluentValidation;
using Invisibles.DTO.FromFront.AcceptMachine.command;
using Invisibles.DTO.FromFront.Machine.command;

namespace Invisibles.Validate.Front
{
    public class AcceptMachine_V_Create_Dto : AbstractValidator<AcceptMachine_Create_Dto>
    {
        public AcceptMachine_V_Create_Dto()
        {
            
        }
    }
}
