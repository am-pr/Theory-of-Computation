using Invisibles.Interface.Ivalidation;

namespace Invisibles.Repository
{
    public class Validation_Rep : IValidation
    {
        public string CheckChracter(List<string> strings)
        {
            // Create a list of invalid characters
            List<string> invalidCharacters = new List<string>() { "$", "@", "#", "*", "-", "+", "/" };

            // Loop through the strings in the list
            foreach (var str in strings)
            {
                // Check if the string contains any invalid characters
                foreach (string invalidCharacter in invalidCharacters)
                {
                    if (str.Contains(invalidCharacter))
                    {
                        // The string contains an invalid character
                        return  " شما حق ندارین از کارکتر " + invalidCharacter + " استفاده بکنید";
                    }
                }
            }

            // The string does not contain any invalid characters
            return null;
        }

    }
}
