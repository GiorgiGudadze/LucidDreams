import "@mui/material/Autocomplete";

declare module "@mui/material/Autocomplete" {
  export interface AutocompleteProps<
    Value,
    FreeSolo extends boolean | undefined
  > {
    /**
     * A custom function that determines the string value for a given option.
     *
     * @param {Value} option The option to convert to a string.
     * @returns {any} The string representation of the option.
     */
    getOptionLabel?: (
      option: Value | AutocompleteFreeSoloValueMapping<FreeSolo>
    ) => any;
  }
}
