using Invisibles.DTO.FromFront.Transition;

namespace Invisibles.DTO.FromFront.AcceptMachine.command
{
    public class AcceptMachine_Create_Dto
    {
        public List<string> State { get; set; } = null!;

        public List<string> alphabet { get; set; } = null!;

        public string initial { get; set; } = null!;

        public List<string>? FinalState { get; set; }

        public List<Transition_Dto> transition_Dtos { get; set; } = null!;

        public string strings { get; set; } = null!;
    }
}
