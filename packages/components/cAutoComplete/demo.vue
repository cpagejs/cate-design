<template>
  <div class="main">
    <AutoComplete
      :fetchSuggestions="handleFetch"
      style="width: 400px"
      v-model="inputValue"
      :onSelect="selectFunc"
      :renderOption="renderOptions"
    ></AutoComplete>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from "vue";
import { DataSourceType } from "./type";

interface LakerPlayerProps {
  value: string;
  number: number;
}
export default defineComponent({
  name: "AutoCompleteDemo",
  components: {},
  setup() {
    const inputValue = ref("a");

    const lakers = [
      "bradley",
      "pope",
      "caruso",
      "cook",
      "cousins",
      "james",
      "AD",
      "green",
      "howard",
      "kuzma",
      "McGee",
      "rando",
    ];

    const lakersWithNumber = [
      { value: "bradley", number: 11 },
      { value: "pope", number: 1 },
      { value: "caruso", number: 4 },
      { value: "cook", number: 2 },
      { value: "cousins", number: 15 },
      { value: "james", number: 23 },
      { value: "AD", number: 3 },
      { value: "green", number: 14 },
      { value: "howard", number: 39 },
      { value: "kuzma", number: 0 },
    ];

    // const handleFetch = (query: string) => {
    //   return lakers
    //     .filter((name) => name.includes(query))
    //     .map((name) => ({ value: name }));
    // };
    // const handleFetch = (query: string) => {
    //   return lakersWithNumber.filter((player) => player.value.includes(query));
    // };

    const handleFetch = (query: string) => {
      return fetch(`https://api.github.com/search/users?q=${query}`)
        .then((res) => res.json())
        .then(({ items }) => {
          // console.log(items);
          console.log("trigger");
          return items
            .slice(0, 10)
            .map((item: any) => ({ value: item.login, ...item }));
        });
    };

    const selectFunc = (item: string) => {
      console.log(item);
    };

    const renderOptions = (item: DataSourceType<LakerPlayerProps>) => {
      return (
        <>
          <p>{item.value}</p>
        </>
      );
    };
    return {
      handleFetch,
      selectFunc,
      inputValue,
      renderOptions,
    };
  },
});
</script>
<style lang="scss"></style>
