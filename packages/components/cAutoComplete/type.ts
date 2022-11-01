import { PropType, VNodeTypes } from "vue";
import { inputProps } from "../cInput/types";

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;

const AutoCompleteProps = () => ({
  ...inputProps(),
  fetchSuggestions: {
    type: Function as PropType<
      (str: string) => DataSourceType[] | Promise<DataSourceObject[]>
    >,
    required: true,
  },
  onSelect: Function as PropType<(item: DataSourceType) => void>,
  renderOption: Function as PropType<(item: DataSourceType) => VNodeTypes>,
});

export { AutoCompleteProps, DataSourceObject };
