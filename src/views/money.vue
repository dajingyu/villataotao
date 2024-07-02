<template>
  <div class="money-wrapper padding-small-class">
    <div class="title padding-left-class">
      <div class="width-trip"></div>
      <div class="title-name">
        新增花销









      </div>
    </div>

    <div class="add-wrapper padding-small-class">
      <!-- 条件查询 -->

      <!-- 新增按钮 -->

      <el-button
        size="large"
        @click="openAddDialog"
      >
        <el-icon style="
              vertical-align: middle;
            ">
          <Plus />
        </el-icon>
        <span style="
              vertical-align: middle;
            ">
          新增
        </span>
      </el-button>
    </div>

    <!-- 花销列表 -->
    <div class="table-wrapper padding-small-class">
      <el-table
        :data="tableData"
        border
        height="600"
        :summary-method="
          getSummaries
        "
        show-summary
        align="center"
        empty-text="暂无数据"
      >
        <el-table-column
          prop="name"
          label="名称"
          width="180"
        />
        <el-table-column
          prop="type"
          label="所属分类"
          :formatter="
            formatter
          "
        />
        <el-table-column
          prop="cost"
          label="花费"
        />
        <el-table-column
          prop="date"
          label="日期"
        />
      </el-table>
    </div>
  </div>

  <el-dialog
    v-model="
      dialogFormVisible
    "
    title="新增单据"
  >
    <el-form
      :model="form"
      :label-width="
        formLabelWidth
      "
      ref="ruleFormRef"
      :rules="rules"
      status-icon
    >
      <el-form-item label="日期">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="请选择日期"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        />
      </el-form-item>

      <el-form-item label="名称">
        <el-radio-group v-model="form.name">
          <el-radio label="涛" />
          <el-radio label="钰" />
        </el-radio-group>
      </el-form-item>

      <el-form-item label="所属分类">
        <el-select
          v-model="form.type"
          placeholder="请选择分类"
        >
          <el-option
            label="固定支出"
            value="0"
          />
          <el-option
            label="灵活支出"
            value="1"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="花费">
        <el-input
          v-model="form.cost"
          placeholder="请输入花费的金额"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="
          dialogFormVisible = false
        ">取消</el-button>
        <el-button
          type="primary"
          @click="
            save(ruleFormRef)
          "
        >保存</el-button>
        <el-button @click="
          resetForm(
            ruleFormRef
          )
        ">重置</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';
import { reactive, ref } from 'vue';

interface Product {
  name: string
  type: string
  cost: string
  date: string
}

interface SummaryMethodProps<
  T = Product
> {
  columns: TableColumnCtx<T>[];
  data: T[];
}

const formatter = (
  row: Product,
  column: TableColumnCtx<Product>
) => {
  return row.type === "0"
    ? "固定支出"
    : "灵活支出";
};

const getSummaries = (
  param: SummaryMethodProps
) => {
  const { columns, data } =
    param;
  const sums: string[] = [];
  columns.forEach(
    (column, index) => {
      if (index === 0) {
        sums[index] = "合计";
        return;
      }
      const values = data.map(
        (item) =>
          Number(
            item[
            column.property
            ]
          )
      );
      if (
        !values.every(
          (value) =>
            Number.isNaN(
              value
            )
        )
      ) {
        sums[
          index
        ] = `$ ${values.reduce(
          (prev, curr) => {
            const value =
              Number(curr);
            if (
              !Number.isNaN(
                value
              )
            ) {
              return (
                prev + curr
              );
            } else {
              return prev;
            }
          },
          0
        )}`;
      } else {
        sums[index] = "N/A";
      }
    }
  );

  return sums;
};

// 显示花销的列表
const tableData: Product[] =
  reactive([]);
const dialogFormVisible =
  ref(false);
const formLabelWidth =
  "140px";
const ruleFormRef =
  ref<FormInstance>();
const form = reactive({
  name: "",
  type: "",
  cost: "",
  date: "",
});

const rules =
  reactive<FormRules>({
    name: [
      {
        required: true,
        message:
          "谁花钱了就选谁",
        trigger: "change",
      },
    ],
    type: [
      {
        required: true,
        message:
          "请选择一个分类",
        trigger: "change",
      },
    ],
    cost: [
      {
        required: true,
        message: "请填写金额",
        trigger: "change",
      },
    ],
    date: [
      {
        type: "date",
        required: true,
        message:
          "哪天花的钱？",
        trigger: "change",
      },
    ],
  });

// 打开弹窗
const openAddDialog = () => {
  dialogFormVisible.value =
    true;
};

const save = async (
  formEl:
    | FormInstance
    | undefined
) => {
  if (!formEl) return;
  await formEl.validate(
    (valid, fields) => {
      if (valid) {
        console.log(form);
        tableData.push(form);
        console.log(
          tableData
        );

        dialogFormVisible.value =
          false;
      } else {
        console.log(
          "error submit!",
          fields
        );
      }
    }
  );
};
const resetForm = (
  formEl:
    | FormInstance
    | undefined
) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style lang="less">
.money-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  .add-wrapper {
    margin-top: 20px;
    text-align: left;
    background-color: #fff;
  }

  .table-wrapper {
    margin-top: 20px;
    flex: 1;
    background-color: #fff;
    min-height: 100%;
  }
}
</style>
