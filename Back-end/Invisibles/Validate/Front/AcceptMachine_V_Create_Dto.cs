using FluentValidation;
using Invisibles.DTO.FromFront.AcceptMachine.command;
using Invisibles.DTO.FromFront.Machine.command;


namespace Invisibles.Validate.Front
{
    public class AcceptMachine_V_Create_Dto : AbstractValidator<AcceptMachine_Create_Dto>
    {
        public AcceptMachine_V_Create_Dto()
        {
            // Validate states
            RuleFor(i => i.State).NotNull().NotEmpty().WithErrorCode("400");


            // Validate alphabet
            RuleFor(i => i.alphabet).NotNull().NotEmpty().WithErrorCode("400");

            // Validate initial state
            RuleFor(i => i.initial).NotNull().NotEmpty().MaximumLength(100);

            // Validate final states
            RuleFor(i => i.FinalState).NotNull().NotEmpty().WithErrorCode("400");


            // Validate transitions
            RuleFor(transition => transition.transition_Dtos).NotNull().NotEmpty();

        }
    }
}
