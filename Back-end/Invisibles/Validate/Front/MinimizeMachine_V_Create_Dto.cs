using FluentValidation;
using Invisibles.DTO.FromFront.Machine.command;
using Invisibles.DTO.FromFront.MinimizeMachine.command;

namespace Invisibles.Validate.Front
{
    public class MinimizeMachine_V_Create_Dto : AbstractValidator<MinimizeMachine_Create_Dto>
    {
        public MinimizeMachine_V_Create_Dto()
        {
            
        }
    }
}
