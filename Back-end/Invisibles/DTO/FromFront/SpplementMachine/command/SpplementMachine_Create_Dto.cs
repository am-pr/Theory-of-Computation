﻿using Invisibles.DTO.FromFront.Transition;

namespace Invisibles.DTO.FromFront.SpplementMachine.command
{
    public class SpplementMachine_Create_Dto
    {
        public List<string> State { get; set; } = null!;

        public List<string> alphabet { get; set; } = null!;

        public string initial { get; set; } = null!;

        public List<string>? FinalState { get; set; }

        public List<Transition_Dto> transition_Dtos { get; set; } = null!;
    }
}
