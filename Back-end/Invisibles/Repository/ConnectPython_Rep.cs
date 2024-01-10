using Invisibles.DTO.FromFront.AcceptMachine.command;
using Invisibles.DTO.FromFront.Machine.queries;
using Invisibles.DTO.FromFront.MinimizeMachine.command;
using Invisibles.DTO.FromFront.SpplementMachine.command;
using Invisibles.Interface.IConnectPython;
using Newtonsoft.Json;
using System.Text;

namespace Invisibles.Repository
{
    public class ConnectPython_Rep : IConnectPython
    {
        public async Task<Machine_Python_Dto> AcceptMachine(AcceptMachine_Create_Dto acceptMachine_Create_Dto)
        {
            string apiUrl = "http://127.0.0.1:5000/api/acceptMachine";

            using (HttpClient httpClient = new HttpClient())
            {
                try
                {
                    // Create the request body
                    string content = JsonConvert.SerializeObject(acceptMachine_Create_Dto);

                    // Make the POST request
                    HttpResponseMessage response = await httpClient.PostAsync(apiUrl, new StringContent(content, Encoding.UTF8, "application/json"));

                    // Check if the request was successful (status code 200 OK)
                    if (response.IsSuccessStatusCode)
                    {
                        // Read and deserialize the response content
                        Machine_Python_Dto machine_Python_Dto = JsonConvert.DeserializeObject<Machine_Python_Dto>(await response.Content.ReadAsStringAsync());

                        // Return the response
                        return machine_Python_Dto;
                    }
                    else
                    {
                        return null;
                    }
                }
                catch (Exception ex)
                {
                    // Handle the error
                    throw ex;
                }
            }
        }

        public async Task<Machine_Python_Dto> MinimizeMachine(MinimizeMachine_Create_Dto minimizeMachine_Create_Dto)
        {
            string apiUrl = "http://127.0.0.1:5000/api/minimizeMachine";

            using (HttpClient httpClient = new HttpClient())
            {
                try
                {
                    // Create the request body
                    string content = JsonConvert.SerializeObject(minimizeMachine_Create_Dto);

                    // Make the POST request
                    HttpResponseMessage response = await httpClient.PostAsync(apiUrl, new StringContent(content, Encoding.UTF8, "application/json"));

                    // Check if the request was successful (status code 200 OK)
                    if (response.IsSuccessStatusCode)
                    {
                        // Read and deserialize the response content
                        Machine_Python_Dto machine_Python_Dto = JsonConvert.DeserializeObject<Machine_Python_Dto>(await response.Content.ReadAsStringAsync());

                        // Return the response
                        return machine_Python_Dto;
                    }
                    else
                    {
                        return null;
                    }
                }
                catch (Exception ex)
                {
                    // Handle the error
                    throw ex;
                }
            }
        }


        public async Task<Machine_Python_Dto> SpplementMachine(SpplementMachine_Create_Dto spplementMachine_Create)
        {
            string apiUrl = "http://127.0.0.1:5000/api/spplementMachine";

            using (HttpClient httpClient = new HttpClient())
            {
                try
                {
                    // Create the request body
                    string content = JsonConvert.SerializeObject(spplementMachine_Create);

                    // Make the POST request
                    HttpResponseMessage response = await httpClient.PostAsync(apiUrl, new StringContent(content, Encoding.UTF8, "application/json"));

                    // Check if the request was successful (status code 200 OK)
                    if (response.IsSuccessStatusCode)
                    {
                        // Read and deserialize the response content
                        Machine_Python_Dto machine_Python_Dto = JsonConvert.DeserializeObject<Machine_Python_Dto>(await response.Content.ReadAsStringAsync());

                        // Return the response
                        return machine_Python_Dto;
                    }
                    else
                    {
                        return null;
                    }
                }
                catch (Exception ex)
                {
                    // Handle the error
                    throw ex;
                }
            }
        }

    }
}
