<template>
  <div className="main">
    <c-form
      className="c-form"
      :model="formValues"
      :rules="schema"
      ref="formNode"
    >
      <c-form-item
        label="用户名:"
        prop="username"
      >
        <c-input
          v-model="formValues.name"
          placeholder="请输入username"
        ></c-input>
      </c-form-item>
      <c-form-item
        label="密码:"
        prop="password"
      >
        <c-input
          v-model="formValues.password"
          placeholder="请输入password"
        ></c-input>
      </c-form-item>
      <c-form-item>
        <button
          @click="submit"
          className="c-btn"
        >
          提交
        </button>
      </c-form-item>
    </c-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from "vue";

  import * as yup from "yup";
  import { NewStringSchema } from "../cFormItem/types";
  import cFormItem from "../cFormItem/index";
  import { FormContext } from "vee-validate";

  export default defineComponent({
    name: "cFormDemo",
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

      const formNode = ref<FormContext | null>(null);

      const submit = () => {
        // console.log(formNode);
        console.log("form", formNode.value?.validate());
      };

      const schema = reactive({
        username: usernameRule,
        password: passwordRule,
      });

      return {
        formValues,
        schema,
        submit,
        trigger,
      };
    },
  });
</script>
<style lang="scss">
  .#{$c-pre}form {
    margin: auto 0;
    border: 1px solid #f0f0f0;
    padding: 10% 10%;
    width: 30%;
  }

  .#{$c-pre}btn {
    background-color: $btn-primary;
    width: 100px;
    height: 40px;
    border-radius: 8px 8px;
    margin: auto;
  }
</style>
