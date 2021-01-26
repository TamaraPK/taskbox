// src/components/DataTable.stories.js
import { Provider } from "react-redux";
import store from "../lib/reduxDataTable";

import DataTablePK from "./DataTablePK";

export default {
  component: DataTablePK,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: "DataTablePK",
};

const Template = (args) => <DataTablePK {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  reorderableColumns: false,
};

export const ReorderColumns = Template.bind({});
ReorderColumns.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  data: [],
  reorderableColumns: true,
};
