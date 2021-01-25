// src/components/DataTable.stories.js
import { Provider } from "react-redux";
import store from "../lib/reduxDataTable";

import DataTable from "./DataTablePF";

export default {
  component: DataTable,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: "DataTable",
};

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  data: store.getState(),
};
