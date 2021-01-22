// .storybook/preview.js

// PrimeReact Design Assets
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Your customized application CSS
import '../src/index.css';

// Custom Tailwind CSS
import '../src/tailwindcss/tailwind.css';



// Configures Storybook to log the actions(onArchiveTask and onPinTask) in the UI.
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};