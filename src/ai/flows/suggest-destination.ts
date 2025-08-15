'use server';

/**
 * @fileOverview Provides destination suggestions based on past booking data.
 *
 * - suggestDestination - A function that suggests destinations.
 * - SuggestDestinationInput - The input type for the suggestDestination function.
 * - SuggestDestinationOutput - The output type for the suggestDestination function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDestinationInputSchema = z.object({
  currentDestination: z
    .string()
    .describe('The currently entered destination, if any.'),
});
export type SuggestDestinationInput = z.infer<typeof SuggestDestinationInputSchema>;

const SuggestDestinationOutputSchema = z.object({
  suggestedDestinations: z
    .array(z.string())
    .describe('An array of suggested destinations based on past bookings.'),
});
export type SuggestDestinationOutput = z.infer<typeof SuggestDestinationOutputSchema>;

export async function suggestDestination(input: SuggestDestinationInput): Promise<SuggestDestinationOutput> {
  return suggestDestinationFlow(input);
}

const getPopularDestinations = ai.defineTool(
  {
    name: 'getPopularDestinations',
    description: 'Retrieves a list of popular destinations from past bookings.',
    inputSchema: z.object({
      limit: z
        .number()
        .default(5)
        .describe('The maximum number of destinations to retrieve.'),
    }),
    outputSchema: z.array(z.string()),
  },
  async input => {
    // TODO: Replace with actual database call to fetch popular destinations.
    // This is a placeholder implementation.
    const popularDestinations = [
      'Airport',
      'Downtown',
      'Train Station',
      'Convention Center',
      'Hotel',
    ];
    return popularDestinations.slice(0, input.limit);
  }
);

const suggestDestinationPrompt = ai.definePrompt({
  name: 'suggestDestinationPrompt',
  input: {schema: SuggestDestinationInputSchema},
  output: {schema: SuggestDestinationOutputSchema},
  tools: [getPopularDestinations],
  prompt: `Suggest destinations to the user based on past booking history.

  Current Destination: {{{currentDestination}}}

  Use the getPopularDestinations tool to get a list of popular destinations.
  Return a list of suggestions to the user.
  Do not repeat the current destination in the suggested destinations.
`,
});

const suggestDestinationFlow = ai.defineFlow(
  {
    name: 'suggestDestinationFlow',
    inputSchema: SuggestDestinationInputSchema,
    outputSchema: SuggestDestinationOutputSchema,
  },
  async input => {
    const {output} = await suggestDestinationPrompt(input);
    return output!;
  }
);
