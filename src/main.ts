import './style.css';

import { MultiSelect } from './multiSelect.ts';

// Common options data
const programmingLanguages = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'swift', label: 'Swift' },
];

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nextjs', label: 'Next.js' },
];

// Skills list for the skills example
const skills = [
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'node', label: 'Node.js' },
  { value: 'express', label: 'Express' },
  { value: 'mongodb', label: 'MongoDB' },
  { value: 'sql', label: 'SQL' },
  { value: 'graphql', label: 'GraphQL' },
  { value: 'aws', label: 'AWS' },
  { value: 'docker', label: 'Docker' },
  { value: 'git', label: 'Git' },
  { value: 'testing', label: 'Testing' },
  { value: 'security', label: 'Security' },
];

// Skills example
const skillsExample = document.getElementById('skills-example');
if (skillsExample) {
  new MultiSelect({
    container: skillsExample,
    options: skills,
    selected: ['security'],
    placeholder: 'Select or type to add skills',
    allowCreation: true,
    searchable: true,
    clearable: true,
    hideDropdownOnSelect: true,
    onChange: (selected) => {
      console.log('Skills example values:', selected);
    },
    onCreateOption: (value) => {
      console.log(`Creating new skill: ${value}`);
      return { value, label: value };
    },
  });
}

// Basic example
const basicExample = document.getElementById('basic-example');
if (basicExample) {
  new MultiSelect({
    container: basicExample,
    options: programmingLanguages,
    selected: ['javascript', 'typescript'],
    placeholder: 'Select programming languages...',
    onChange: (selected) => {
      console.log('Basic example values:', selected);
    },
  });
}

// Form example with validation
const formExample = document.getElementById('form-example');
if (formExample) {
  new MultiSelect({
    container: formExample,
    options: programmingLanguages,
    name: 'skills',
    placeholder: 'Select your skills',
    required: true,
    formAssociated: true,
    validationMessage: 'Please select at least one skill',
    onChange: (selected) => {
      console.log('Form example values:', selected);
    },
  });

  // Form submission handler
  const demoForm = document.getElementById('demo-form') as HTMLFormElement;
  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(demoForm);
      console.log('Form submitted with data:', Object.fromEntries(formData.entries()));
      alert('Form submitted! Check console for data.');
    });
  }
}

// Disabled example
const disabledExample = document.getElementById('disabled-example');
if (disabledExample) {
  new MultiSelect({
    container: disabledExample,
    options: frameworks,
    selected: ['react', 'nextjs'],
    placeholder: 'This select is disabled...',
    disabled: true,
  });
}

// Read-only example
const readonlyExample = document.getElementById('readonly-example');
if (readonlyExample) {
  new MultiSelect({
    container: readonlyExample,
    options: frameworks,
    selected: ['angular', 'vue'],
    placeholder: 'This select is read-only...',
    readOnly: true,
  });
}

// Max items example
const maxItemsExample = document.getElementById('max-items-example');
if (maxItemsExample) {
  new MultiSelect({
    container: maxItemsExample,
    options: programmingLanguages,
    placeholder: 'Select up to 3 languages...',
    maxItems: 3,
    onChange: (selected) => {
      console.log('Max items example values:', selected);
    },
  });
}

// Max tags example
const maxTagsExample = document.getElementById('max-tags-example');
if (maxTagsExample) {
  new MultiSelect({
    container: maxTagsExample,
    options: programmingLanguages,
    selected: ['javascript', 'typescript', 'python', 'java'],
    placeholder: 'Only 2 tags shown at once...',
    maxTags: 2,
  });
}

// Disabled options example
const disabledOptionsExample = document.getElementById('disabled-options-example');
if (disabledOptionsExample) {
  const optionsWithDisabled = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    {
      value: 'python',
      label: 'Python',
      disabled: true,
      title: 'This option is disabled',
    },
    { value: 'java', label: 'Java' },
    {
      value: 'csharp',
      label: 'C#',
      disabled: true,
      title: 'This option is disabled',
    },
    { value: 'php', label: 'PHP' },
  ];

  new MultiSelect({
    container: disabledOptionsExample,
    options: optionsWithDisabled,
    placeholder: 'Some options are disabled...',
    selected: ['javascript'],
  });
}

// Interactive example
const interactiveExample = document.getElementById('interactive-example');
if (interactiveExample) {
  let optionCounter = 1;

  const multiSelect = new MultiSelect({
    container: interactiveExample,
    options: frameworks,
    selected: ['react'],
    placeholder: 'Interactive example...',
    allowCreation: true,
    searchable: true,
    clearable: true,
    onChange: (selected, instance) => {
      console.log('Interactive example values:', selected);
      console.log('MultiSelect instance:', instance);
    },
    onCreateOption: (value, instance) => {
      console.log(`Creating option with value: ${value} for Instance ${instance}`);
      // Return a new option object
      return { value, label: value };
    },
  });

  // Control buttons
  const btnToggleDisabled = document.getElementById('btn-toggle-disabled');
  if (btnToggleDisabled) {
    btnToggleDisabled.addEventListener('click', () => {
      if (multiSelect.getSelected()) {
        // Check if the instance is initialized
        if ((btnToggleDisabled as HTMLButtonElement).textContent === 'Toggle Disabled') {
          multiSelect.disable();
          (btnToggleDisabled as HTMLButtonElement).textContent = 'Enable';
        } else {
          multiSelect.enable();
          (btnToggleDisabled as HTMLButtonElement).textContent = 'Toggle Disabled';
        }
      }
    });
  }

  const btnToggleReadonly = document.getElementById('btn-toggle-readonly');
  if (btnToggleReadonly) {
    btnToggleReadonly.addEventListener('click', () => {
      if (multiSelect.getSelected()) {
        if ((btnToggleReadonly as HTMLButtonElement).textContent === 'Toggle ReadOnly') {
          multiSelect.setReadOnly(true);
          (btnToggleReadonly as HTMLButtonElement).textContent = 'Make Editable';
        } else {
          multiSelect.setReadOnly(false);
          (btnToggleReadonly as HTMLButtonElement).textContent = 'Toggle ReadOnly';
        }
      }
    });
  }

  const btnClear = document.getElementById('btn-clear');
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      if (multiSelect.clear) {
        multiSelect.clear();
      }
    });
  }

  const btnAddOption = document.getElementById('btn-add-option');
  if (btnAddOption) {
    btnAddOption.addEventListener('click', () => {
      if (multiSelect.addOption) {
        const newOption = {
          value: `custom-option-${optionCounter}`,
          label: `Custom Option ${optionCounter}`,
        };
        multiSelect.addOption(newOption);
        optionCounter++;
      }
    });
  }
}

// Original example (kept for backward compatibility)
const multiSelectElement = document.querySelector('[tags-select="multiple"]');
if (multiSelectElement) {
  new MultiSelect({
    container: multiSelectElement as HTMLElement,
    options: frameworks,
    selected: ['react', 'typescript'],
    placeholder: 'Select multiple frameworks...',
    allowCreation: true,
    onChange: (selected) => {
      console.log('Multi-select values:', selected);
    },
    onCreateOption: (value) => {
      console.log('Created new option:', value);
      return { value, label: value };
    },
  });
}

// Dropdown behavior examples
const keepOpenExample = document.getElementById('keep-open-example');
if (keepOpenExample) {
  new MultiSelect({
    container: keepOpenExample,
    options: programmingLanguages.slice(0, 5), // Use first 5 languages
    placeholder: 'Dropdown stays open after selection',
    searchable: true,
    hideDropdownOnSelect: false, // Keep dropdown open (default behavior)
    onChange: (selected) => {
      console.log('Keep open example values:', selected);
    },
  });
}

const hideAfterSelectExample = document.getElementById('hide-after-select-example');
if (hideAfterSelectExample) {
  new MultiSelect({
    container: hideAfterSelectExample,
    options: programmingLanguages.slice(0, 5), // Use first 5 languages
    placeholder: 'Dropdown closes after selection',
    searchable: true,
    hideDropdownOnSelect: true, // Hide dropdown after selection
    onChange: (selected) => {
      console.log('Hide after select example values:', selected);
    },
  });
}
