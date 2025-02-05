<template>
  <div className="main">
    <c-form-item
      label="用户名"
      prop="username"
      :rules="schema.username"
    >
      <c-input
        v-model="formValues.name"
        placeholder="请输入username"
      ></c-input>
    </c-form-item>
    <c-form-item
      label="密码"
      prop="password"
      :rules="schema.password"
    >
      <c-input
        v-model="formValues.password"
        placeholder="请输入username"
      ></c-input>
    </c-form-item>
    <c-form-item>
      <button>提交</button>
    </c-form-item>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from "vue";
  import cFormItem from "./index";
  import * as yup from "yup";
  import { NewStringSchema } from "./types";

  export default defineComponent({
    name: "cFormItemDemo",
    components: {
      cFormItem,
    },
    setup() {
      const formValues = reactive({
        name: "",
        password: "",
      });

      const trigger = (number: number) => {
        return number === 1 ? "input" : "blur";
      };

      const usernameRule = ref<NewStringSchema | NewStringSchema[]>([
        { validateFunc: yup.string().required(), trigger: "input" },
        { validateFunc: yup.string().email(), trigger: "blur" },
      ]);

      const passwordRule = ref<NewStringSchema | NewStringSchema[]>([
        { validateFunc: yup.string().required(), trigger: "input" },
        { validateFunc: yup.string().min(8), trigger: "blur" },
      ]);

      const schema = reactive({
        username: usernameRule,
        password: passwordRule,
      });
      return {
        formValues,
        schema,
        usernameRule,
      };
    },
  });
</script>
<style lang="scss"></style>
