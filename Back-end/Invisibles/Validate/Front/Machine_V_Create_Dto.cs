using FluentValidation;
using Invisibles.DTO.FromFront.Machine.command;



namespace Invisibles.Validate.Front
{
    public class Machine_V_Create_Dto : AbstractValidator<Machine_Create_Dto>
    {
        public Machine_V_Create_Dto()
        {
            RuleFor(i => i.initial).NotNull().NotEmpty().
                MaximumLength(10).WithErrorCode("400"); 
            // Validate state
            RuleFor(i => i.State).NotNull().NotEmpty().WithMessage("State must not be null or empty");

            // Validate alphabet
            RuleFor(i => i.alphabet).NotNull().NotEmpty().WithMessage("Alphabet must not be null or empty");

            // Validate initial state
            RuleFor(i => i.FinalState).NotNull().NotEmpty().WithMessage("Initial state must not be null or empty");
        }

    }
}
