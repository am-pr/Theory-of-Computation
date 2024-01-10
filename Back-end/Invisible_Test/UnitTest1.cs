using Invisibles.Controllers.Machine;
using Invisibles.DTO.FromFront.AcceptMachine.command;
using Invisibles.DTO.FromFront.MinimizeMachine.command;
using Invisibles.DTO.FromFront.SpplementMachine.command;
using Invisibles.DTO.FromFront.Transition;
using Invisibles.DTO.FromPython.Machine.queries;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Newtonsoft.Json;

namespace Invisible_Test
{
    public class UnitTest1
    {
        private readonly MachineController _machineController;

        public UnitTest1(MachineController machineController)
        {
            _machineController = machineController;
        }




        [Fact]
        public async Task AcceptMachine_ValidRequest_ReturnsAcceptMachineResult()
        {
            // Arrange
            var acceptMachine_Create_Dto = new AcceptMachine_Create_Dto()
            {
                State = new List<string> { "q0", "q1", "q2" },
                alphabet = new List<string> { "a", "b" },
                initial = "q0",
                FinalState = new List<string> { "q2" },
                transition_Dtos = new List<Transition_Dto>()
        {
            new Transition_Dto
            {
                from = "q0",
                symbol = "a",
                to = "q1"
            },
            new Transition_Dto
            {
                from = "q1",
                symbol = "b",
                to = "q2"
            },
            new Transition_Dto
            {
                from = "q2",
                symbol = "a",
                to = "q2"
            }
        }
            };

            var expectedMachine_Python_Dto = new Machine_Python_Dto()
            {
                State = new List<string> { "q0", "q1", "q2" },
                alphabet = new List<string> { "a", "b" },
                initial = "q0",
                FinalState = new List<string> { "q2" }
            };

            // Act
            var result = await _machineController.Post_AcceptMachine(acceptMachine_Create_Dto);

            // Assert
            Assert.IsType<OkObjectResult>(result);
            var actualMachine_Python_Dto = JsonConvert.DeserializeObject<Machine_Python_Dto>(result.ToString());
            Assert.Equal(expectedMachine_Python_Dto, actualMachine_Python_Dto);
        }



        [Fact]
        public async Task MinimizeMachine_ValidRequest_ReturnsMinimizedMachineResult()
        {
            // Arrange
            var minimizeMachine_Create = new MinimizeMachine_Create_Dto()
            {
                State = new List<string> { "q0", "q1", "q2" },
                alphabet = new List<string> { "a", "b" },
                initial = "q0",
                FinalState = new List<string> { "q2" },
                transition_Dtos = new List<Transition_Dto>()
        {
            new Transition_Dto
            {
                from = "q0",
                symbol = "a",
                to = "q1"
            },
            new Transition_Dto
            {
                from = "q1",
                symbol = "b",
                to = "q2"
            },
            new Transition_Dto
            {
                from = "q2",
                symbol = "a",
                to = "q2"
            }
        }
            };

            var expectedMachine_Python_Dto = new Machine_Python_Dto()
            {
                State = new List<string> { "q0", "q1'", "q2'" },
                alphabet = new List<string> { "a", "b" },
                initial = "q0",
                FinalState = new List<string> { "q2'" }
            };

            // Act

            var result = await _machineController.Post_MinimizeMachine(minimizeMachine_Create);

            // Assert
            Assert.IsType<OkObjectResult>(result);
            var actualMachine_Python_Dto = JsonConvert.DeserializeObject<Machine_Python_Dto>("fill next ...");
            Assert.Equal(expectedMachine_Python_Dto, actualMachine_Python_Dto);
        }



        [Fact]
        public async Task SupplementMachine_ValidRequest_ReturnsSupplementedMachineResult()
        {
            // Arrange
            var supplementMachine_Create = new SpplementMachine_Create_Dto()
            {
                State = new List<string> { "q0", "q1", "q2" },
                alphabet = new List<string> { "a", "b" },
                initial = "q0",
                FinalState = new List<string> { "q2" },
                transition_Dtos = new List<Transition_Dto>()
        {
            new Transition_Dto
            {
                from = "q0",
                symbol = "a",
                to = "q1"
            },
            new Transition_Dto
            {
                from = "q1",
                symbol = "b",
                to = "q2"
            },
            new Transition_Dto
            {
                from = "q2",
                symbol = "a",
                to = "q2"
            }
        }
            };

            var expectedMachine_Python_Dto = new Machine_Python_Dto()
            {
                State = new List<string> { "q0'", "q1'", "q2'" },
                alphabet = new List<string> { "a", "b" },
                initial = "q0'",
                FinalState = new List<string> { "q2'" }
            };

            // Act

            var result = await _machineController.Post_SpplementMachine(supplementMachine_Create);

            // Assert
            Assert.IsType<OkObjectResult>(result);
            var actualMachine_Python_Dto = JsonConvert.DeserializeObject<Machine_Python_Dto>("fill next ....");
            Assert.Equal(expectedMachine_Python_Dto, actualMachine_Python_Dto);
        }


    }
}